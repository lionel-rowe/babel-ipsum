import { Irregex } from 'https://raw.githubusercontent.com/lionel-rowe/irregex/ea91b391ba95d270e97fd74a087fb5efe3dee8bd/irregex.ts'
import { createConfig } from '../src/config.ts'
import type { BabelIpsum, BabelIpsumConfig } from '../src/mod.ts'
import type { Locale } from './scrape.ts'
import scraped from './scraped/all.json' with { type: 'json' }

type ConfigFromScrapedConfig = { maxVocabSize?: number; wordMatcher?: Pick<RegExp, 'test'>; locale: Locale | 'lorem' }

const loremContent =
	`a ac accumsan ad adipiscing aenean aliquam aliquet amet ante aptent arcu at auctor bibendum blandit class commodo condimentum congue consectetur consequat conubia convallis cras cubilia cum curabitur curae dapibus diam dictum dictumst dignissim dolor donec dui duis egestas eget eleifend elementum elit enim erat eros est et etiam eu euismod facilisi faucibus felis fermentum feugiat fringilla fusce gravida habitant habitasse hac hendrerit himenaeos iaculis id imperdiet in inceptos integer interdum ipsum justo lacinia lacus laoreet lectus leo ligula litora lobortis lorem luctus maecenas magna magnis malesuada massa mattis mauris metus mi molestie mollis montes morbi mus nam nascetur natoque nec neque netus nisi nisl non nostra nulla nullam nunc odio orci ornare parturient pellentesque penatibus per pharetra phasellus placerat platea porta porttitor posuere potenti praesent pretium primis proin pulvinar purus quam quis quisque rhoncus ridiculus risus rutrum sagittis sapien scelerisque sed sem semper senectus sit sociis sociosqu sodales sollicitudin suscipit suspendisse taciti tellus tempor tempus tincidunt torquent tortor turpis ullamcorper ultrices ultricies urna varius vehicula vel velit venenatis vestibulum vitae vivamus viverra volutpat vulputate`

function configFromScraped(
	metaConfig: ConfigFromScrapedConfig,
): BabelIpsumConfig {
	const { locale } = metaConfig

	return {
		...metaConfig,
		...createConfig({
			...metaConfig,
			locale: locale === 'lorem' ? 'xx' : locale,
			content: locale === 'lorem' ? loremContent : scraped[locale].content,
		}),
	}
}

class PartiallyLowerCaseWordMatcher extends Irregex {
	regex: RegExp

	constructor(scriptId: string, private minLength = 1, private exceptions: string[] = []) {
		super()
		this.regex = new RegExp(String.raw`^[\p{scx=${scriptId}}\p{M}]+$`, 'v')
		this.trackLastIndex = [this.regex]
	}

	getMatch(str: string): RegExpExecArray | null {
		const result = this.regex.exec(str)
		if (!result) return null
		const [m] = result
		if (m.toUpperCase() === m) return null
		if (m.length < this.minLength && !this.exceptions.includes(m)) return null

		return result
	}
}

export const metaConfigs = {
	lorem: {},
	en: {
		wordMatcher: new PartiallyLowerCaseWordMatcher('Latn', 2, ['a']),
	},
	zh: {
		wordMatcher: /^\p{scx=Han}+$/u,
		sentenceSeparator: '',
		wordSeparators: [
			{ weight: 5, separator: '' },
			{ weight: 0.075, separator: '，' },
			{ weight: 0.005, separator: '：' },
			{ weight: 0.005, separator: '、' },
		],
		sentenceWrappers: [
			{ weight: 1, end: '。' },
			{ weight: 0.05, end: '？' },
			{ weight: 0.05, end: '！' },
		],
	},
	ar: {
		wordMatcher: /^[\p{scx=Arab}\p{M}]+$/u,
		wordSeparators: [{ weight: 1, separator: ' ' }],
		sentenceWrappers: [{ weight: 1, end: '.' }],
	},
	es: {
		wordMatcher: new PartiallyLowerCaseWordMatcher('Latn'),
		sentenceWrappers: [
			{ weight: 1, end: '.' },
			{ weight: 0.05, start: '¿', end: '?' },
			{ weight: 0.05, start: '¡', end: '!' },
		],
	},
} satisfies Record<
	Locale | 'lorem',
	Omit<ConfigFromScrapedConfig, 'locale'> & Partial<Omit<ConstructorParameters<typeof BabelIpsum>[0], 'vocabulary'>>
>

await Promise.all(
	Object.entries(metaConfigs).map(async ([k, v]) => {
		const locale = k as keyof typeof metaConfigs
		const config = configFromScraped({ locale, ...v })

		const filePath = `./src/configs/${locale}.ts`

		await Deno.writeTextFile(
			filePath,
			`import type { BabelIpsumConfig } from '../mod.ts'

const config: BabelIpsumConfig = ${
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
