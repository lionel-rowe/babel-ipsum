import { Irregex, type Matcher } from '@li/irregex'
import { createConfig } from '../src/config.ts'
import type { LoremBabelConfig } from '../src/mod.ts'
import type { Locale } from './scrape.ts'
import scraped from './scraped/all.json' with { type: 'json' }

type ConfigFromScrapedConfig = { maxVocabSize?: number; wordMatcher?: Pick<RegExp, 'test'>; locale: Locale }

function configFromScraped(
	metaConfig: ConfigFromScrapedConfig,
): LoremBabelConfig {
	const { locale } = metaConfig

	return {
		...metaConfig,
		...createConfig({
			...metaConfig,
			locale: locale === 'lorem' ? 'xx' : locale,
			content: scraped[locale].content,
		}),
	}
}

class PartiallyLowerCaseWordMatcher extends Irregex {
	regex: RegExp

	constructor(
		scriptId: string,
		public locale: Locale,
		private minLength = 1,
		private minLengthExceptions: string[] = [],
	) {
		super()
		this.regex = new RegExp(String.raw`^[\p{scx=${scriptId}}\p{M}]+$`, 'v')
		this.trackLastIndex = [this.regex]
	}

	getMatch(str: string): RegExpExecArray | null {
		const result = this.regex.exec(str)
		if (!result) return null

		const [m] = result
		if (m.toLocaleUpperCase(this.locale) === m) return null
		if (m.length < this.minLength && !this.minLengthExceptions.includes(m)) return null

		return result
	}
}

export const metaConfigs = {
	ar: {
		wordMatcher: /^[\p{scx=Arab}\p{M}]+$/u,
	},
	cs: {
		wordMatcher: new PartiallyLowerCaseWordMatcher('Latn', 'cs'),
	},
	de: {
		wordMatcher: new PartiallyLowerCaseWordMatcher('Latn', 'de', 2),
	},
	el: {
		wordMatcher: new PartiallyLowerCaseWordMatcher('Greek', 'el', 2),
	},
	en: {
		wordMatcher: new PartiallyLowerCaseWordMatcher('Latn', 'en', 2, ['a']),
	},
	es: {
		wordMatcher: new PartiallyLowerCaseWordMatcher('Latn', 'es', 2, ['y', 'a', 'o', 'u', 'e']),
	},
	got: {
		wordMatcher: /^[\p{scx=Goth}\p{M}]+$/u,
	},
	ja: {
		wordMatcher: /^[\p{scx=Han}\p{scx=Hira}\p{scx=Kana}]+$/u,
	},
	lorem: {},
	ru: {
		wordMatcher: new PartiallyLowerCaseWordMatcher('Cyrl', 'ru', 2, ['в', 'с', 'у']),
	},
	th: {
		wordMatcher: /^[\p{scx=Thai}\p{M}]+$/u,
	},
	tr: {
		wordMatcher: new PartiallyLowerCaseWordMatcher('Latn', 'tr'),
	},
	vi: {
		wordMatcher: new PartiallyLowerCaseWordMatcher('Latn', 'vi'),
	},
	zh: {
		wordMatcher: /^\p{scx=Han}+$/u,
	},
} satisfies Record<
	Locale,
	{
		wordMatcher?: Matcher
	}
>

await Promise.all(
	Object.entries(metaConfigs).map(async ([k, v]) => {
		const locale = k as keyof typeof metaConfigs
		const config = configFromScraped({ locale, ...v })

		const filePath = `./src/configs/${locale}.ts`

		await Deno.writeTextFile(
			filePath,
			`import type { LoremBabelConfig } from '../mod.ts'

/**
 * @module
 * Config used with LoremBabel to generate nonsense placeholder text in \`${locale}\` locale.
 */

/** LoremBabel configuration for \`${locale}\` locale */
const config: LoremBabelConfig = ${
				JSON.stringify(config, (k, v) => ['wordMatcher', 'content'].includes(k) ? undefined : v, '\t')
					.replaceAll(/\n\t{3}/gm, ' ')
					.replaceAll(/\n\t{2}}/gm, ' }')
			}

export default config`,
		)

		await new Deno.Command('deno', {
			args: ['fmt', filePath],
		}).spawn().output()
	}),
)
