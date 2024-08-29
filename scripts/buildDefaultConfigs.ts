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
	config: {
		scriptId: string
		locale: Locale
		minLength: number
		minLengthExceptions: string[]
		exclude: string[]
	}

	constructor(
		config:
			& Partial<PartiallyLowerCaseWordMatcher['config']>
			& Pick<PartiallyLowerCaseWordMatcher['config'], 'scriptId' | 'locale'>,
	) {
		super()
		this.config = {
			minLength: 1,
			minLengthExceptions: [],
			...config,
			exclude: config.exclude?.map((x) => x.toLocaleLowerCase(config.locale)) ?? [],
		}

		this.regex = new RegExp(String.raw`^[\p{scx=${config.scriptId}}\p{M}]+$`, 'v')
		this.trackLastIndex = [this.regex]
	}

	getMatch(str: string): RegExpExecArray | null {
		const result = this.regex.exec(str)
		if (!result) return null

		const { locale, minLength, minLengthExceptions, exclude } = this.config

		const [m] = result
		if (m.toLocaleUpperCase(locale) === m) return null
		if (m.length < minLength && !minLengthExceptions.includes(m)) return null
		if (exclude.includes(m.toLocaleLowerCase(locale))) return null

		return result
	}
}

export const metaConfigs = {
	ar: {
		wordMatcher: /^[\p{scx=Arab}\p{M}]+$/u,
	},
	cs: {
		wordMatcher: new PartiallyLowerCaseWordMatcher({
			locale: 'cs',
			scriptId: 'Latn',
			minLength: 2,
			minLengthExceptions: [],
			exclude: ['Unicode'],
		}),
	},
	de: {
		wordMatcher: new PartiallyLowerCaseWordMatcher({
			locale: 'de',
			scriptId: 'Latn',
			minLength: 2,
			minLengthExceptions: [],
			exclude: ['Unicode'],
		}),
	},
	el: {
		wordMatcher: new PartiallyLowerCaseWordMatcher({
			locale: 'el',
			scriptId: 'Greek',
			minLength: 2,
			minLengthExceptions: [],
			exclude: ['Unicode'],
		}),
	},
	en: {
		wordMatcher: new PartiallyLowerCaseWordMatcher({
			locale: 'en',
			scriptId: 'Latn',
			minLength: 2,
			minLengthExceptions: ['a'],
			exclude: ['Unicode'],
		}),
	},
	es: {
		wordMatcher: new PartiallyLowerCaseWordMatcher({
			locale: 'es',
			scriptId: 'Latn',
			minLength: 2,
			minLengthExceptions: ['y', 'a', 'o', 'u', 'e'],
			exclude: ['Unicode'],
		}),
	},
	got: {
		wordMatcher: /^[\p{scx=Goth}\p{M}]+$/u,
	},
	ja: {
		wordMatcher: /^[\p{scx=Han}\p{scx=Hira}\p{scx=Kana}]+$/u,
	},
	lorem: {},
	ru: {
		wordMatcher: new PartiallyLowerCaseWordMatcher({
			locale: 'ru',
			scriptId: 'Cyrl',
			minLength: 2,
			minLengthExceptions: ['в', 'с', 'у'],
			exclude: ['Unicode'],
		}),
	},
	th: {
		wordMatcher: /^[\p{scx=Thai}\p{M}]+$/u,
	},
	tr: {
		wordMatcher: new PartiallyLowerCaseWordMatcher({
			locale: 'tr',
			scriptId: 'Latn',
			exclude: ['Unicode'],
		}),
	},
	vi: {
		wordMatcher: new PartiallyLowerCaseWordMatcher({
			locale: 'vi',
			scriptId: 'Latn',
			exclude: ['Unicode'],
		}),
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
