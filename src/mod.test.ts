import { LoremBabel, type LoremBabelConfig } from './mod.ts'
import { assert, assertArrayIncludes, assertEquals, assertMatch, assertThrows } from '@std/assert'
import snapshot from './fixtures/snapshot.json' with { type: 'json' }
import { type Locale, locales } from '../scripts/scrape.ts'

const configs = Object.fromEntries(
	await Promise.all(['lorem', ...locales].map(async (locale) => {
		return [
			locale,
			// @ts-ignore slow type checking
			(await import(`./configs/${locale}.ts`)).default,
		] as const
	})),
) as Record<Locale | 'lorem', LoremBabelConfig>

// prng to ensure deterministic results during testing
function prng(seed: number) {
	const randUint32 = prngMulberry32(seed)
	return () => randUint32() / 0x100000000
}

function prngMulberry32(seed: number) {
	return function () {
		let t = (seed += 0x6d2b79f5)
		t = Math.imul(t ^ (t >>> 15), t | 1)
		t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
		return ((t ^ (t >>> 14)) >>> 0)
	}
}

// random seed generated with crypto.getRandomValues(new Uint32Array(1))[0]
const SEED = 4227182319

const UPDATE_SNAPSHOT = Boolean(Deno.env.get('UPDATE_SNAPSHOT'))

Deno.test(LoremBabel.name, async (t) => {
	await t.step('throws if vocabulary is empty', () => {
		assertThrows(() =>
			new LoremBabel({
				locale: 'en',
				vocabulary: [],
			})
		)
	})

	await t.step('allows single-word vocabulary', () => {
		const lorem = new LoremBabel({
			locale: 'en',
			vocabulary: [{ word: 'word', weight: 1 }],
		})
		// @ts-expect-error https://github.com/tc39/proposal-iterator-helpers types not in TypeScript yet
		const words: string[] = lorem.words().take(5).toArray()
		assertEquals(words, ['word', 'word', 'word', 'word', 'word'])
	})

	await t.step('allows overriding the first sentence', () => {
		const lorem = new LoremBabel(configs.lorem)
		const text = lorem.text({
			paragraphsPerText: { min: 1, max: 1 },
			sentencesPerParagraph: { min: 3, max: 3 },
			wordsPerSentence: { min: 8, max: 25 },
		})

		text[0][0] = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

		assertMatch(
			text.toString(),
			/^Lorem ipsum dolor sit amet, consectetur adipiscing elit\.[\s\S]+/,
		)
	})

	await t.step('scalar word boundaries', () => {
		const lorem = new LoremBabel(configs.lorem)
		const text = lorem.text({
			wordsPerSentence: 10,
			paragraphsPerText: 1,
			sentencesPerParagraph: 1,
		})

		const str = text.toString()
		assertEquals(
			[...new Intl.Segmenter('en-US', { granularity: 'word' }).segment(str)].filter((x) => x.isWordLike).length,
			10,
		)
		assert(!str.includes('\n'))
	})

	await t.step(
		'with default config, `toString` converts to newline-delimited paragraphs and `sentenceSeparator`-delimited sentences',
		() => {
			const lorem = new LoremBabel({
				locale: 'en',
				vocabulary: [{ word: 'word', weight: 1 }],
				sentenceSeparator: '!',
				wordSeparators: [{ weight: 1, separator: '-' }],
				sentenceWrappers: [{ weight: 1, start: '[', end: ']' }],
			})

			assertEquals(
				lorem.text({
					wordsPerSentence: 3,
					paragraphsPerText: 2,
					sentencesPerParagraph: 2,
				}).toString(),
				`[Word-word-word]![Word-word-word]\n\n[Word-word-word]![Word-word-word]`,
			)
		},
	)

	type Result = { text: string[][]; joined: string }
	type Tests = Record<keyof typeof configs, Result>
	const blankTest: Result = { text: [], joined: '' }
	const blankTests = Object.fromEntries(Object.keys(configs).map((k) => [k, { ...blankTest }])) as Tests
	const tests: Tests = Deno.env.get('UPDATE_SNAPSHOT') ? blankTests : snapshot as Tests

	await t.step('snapshots', async (t) => {
		for (const [key, test] of Object.entries(tests)) {
			await t.step(key, () => {
				const locale = key as keyof typeof configs
				const config = configs[locale]
				const lorem = new LoremBabel(config)
				lorem.random = prng(SEED)

				const options = {
					paragraphsPerText: { min: 3, max: 5 },
					sentencesPerParagraph: { min: 3, max: 6 },
					wordsPerSentence: { min: 8, max: 25 },
				}

				const text = lorem.text(options)
				const sentences = [...text.sentences()]
				assertEquals([...text].flat(), sentences)

				const paragraphs = [...text.paragraphs()]
				const stringified = new Set([
					text.toString(),
					String(text),
					`${text}`,
					'' + text + '',
					paragraphs.join('\n\n'),
				])
				assertEquals(stringified.size, 1, 'All ways of stringifying ParagraphContents give same result')
				const [joined] = stringified

				if (UPDATE_SNAPSHOT) {
					test.text = [...text]
					test.joined = joined
				} else {
					assertEquals([...test.text], [...text])
					assertEquals(test.joined, joined)
				}
			})
		}

		if (UPDATE_SNAPSHOT) {
			await Deno.writeTextFile('./src/fixtures/snapshot.json', JSON.stringify(tests, null, '\t') + '\n')
			Deno.exit()
		}
	})
})

Deno.test('configs', async (t) => {
	await t.step('sanity checks', async (t) => {
		const SP = ' '
		const EMPTY = ''
		const LATIN_PERIOD = '.'
		const CJK_PERIOD = '。'

		await t.step('sentenceSeparator', () => {
			for (
				const [locale, expected] of [
					['ar', SP],
					['cs', SP],
					['de', SP],
					['es', SP],
					['got', SP],
					['ja', EMPTY],
					['lorem', SP],
					['ru', SP],
					['th', EMPTY],
					['tr', SP],
					['vi', SP],
					['zh', EMPTY],
				] as const
			) {
				const actual = configs[locale].sentenceSeparator
				assertEquals(
					actual,
					expected,
					`Unexpected sentenceSeparator for ${locale}: expected ${expected}, got ${actual}`,
				)
			}
		})

		await t.step('wordSeparators', () => {
			for (
				const [locale, expected] of [
					['ar', SP],
					['cs', SP],
					['de', SP],
					['es', SP],
					['got', SP],
					['ja', EMPTY],
					['lorem', SP],
					['ru', SP],
					['th', EMPTY],
					['tr', SP],
					['vi', SP],
					['zh', EMPTY],
				] as const
			) {
				const actual = configs[locale].wordSeparators?.[0].separator
				assertEquals(
					actual,
					expected,
					`Unexpected wordSeparators for ${locale}: expected ${expected}, got ${actual}`,
				)
			}
		})

		await t.step('sentenceWrappers', () => {
			for (
				const [locale, expected] of [
					['ar', LATIN_PERIOD],
					['cs', LATIN_PERIOD],
					['de', LATIN_PERIOD],
					['es', LATIN_PERIOD],
					['got', LATIN_PERIOD],
					['ja', CJK_PERIOD],
					['lorem', LATIN_PERIOD],
					['ru', LATIN_PERIOD],
					['th', EMPTY],
					['tr', LATIN_PERIOD],
					['vi', LATIN_PERIOD],
					['zh', CJK_PERIOD],
				] as const
			) {
				const actual = configs[locale].sentenceWrappers?.[0].end
				assertEquals(
					actual,
					expected,
					`Unexpected wordSeparators for ${locale}: expected ${expected}, got ${actual}`,
				)
			}
		})

		await t.step('vocabulary', () => {
			for (
				const [locale, expected] of [
					['de', ['das']],
					['es', ['como']],
					['ja', ['の']],
					['lorem', ['lorem']],
					['ru', ['это']],
					['zh', ['的']],
				] as const
			) {
				assertArrayIncludes(
					configs[locale].vocabulary.map((x) => x.word),
					expected,
					`Missing common vocabulary items for ${locale}: ${JSON.stringify(expected)}`,
				)
			}
		})
	})
})
