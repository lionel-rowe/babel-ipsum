import { LoremBabel, type LoremBabelConfig } from './mod.ts'
import { assertEquals, assertThrows } from '@std/assert'
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
		lorem.random = prng(SEED)
		// @ts-expect-error https://github.com/tc39/proposal-iterator-helpers types not in TypeScript yet
		const words: string[] = lorem.words().take(5).toArray()
		assertEquals(words, ['word', 'word', 'word', 'word', 'word'])
	})

	await t.step('allows overriding the first sentence', () => {
		const lorem = new LoremBabel(configs.lorem)
		lorem.random = prng(SEED)
		const text = lorem.text({
			paragraphsPerText: { min: 1, max: 1 },
			sentencesPerParagraph: { min: 3, max: 3 },
			wordsPerSentence: { min: 8, max: 25 },
		})

		text[0][0] = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

		assertEquals(
			text.toString(),
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Res sunt igitur est et se est erant ipsos si affectus locus esse non quem ea vera bene. Et negant te noster sed maximis aut quam magis quae cognitionem, ratio bona, democritum tamen de enim rationibus ad e.',
		)
	})

	type Result = { text: string[][]; joined: string }
	type Tests = Record<keyof typeof configs, Result>
	const blankTest: Result = { text: [], joined: '' }
	const blankTests = Object.fromEntries(Object.keys(configs).map((k) => [k, { ...blankTest }])) as Tests
	const tests: Tests = Deno.env.get('UPDATE_SNAPSHOT') ? blankTests : snapshot

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
