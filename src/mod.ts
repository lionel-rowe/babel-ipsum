import { textDataToVocabulary } from './configs.ts'

type NonEmptyArr<T> = readonly [T, ...T[]]

export type BabelIpsumConfig = {
	locale: string | Intl.Locale
	source: string
	script: string
	wordSeparators: NonEmptyArr<{ weight: number; separator: string }>
	sentenceWrappers: NonEmptyArr<{ weight: number; start: string; end: string }>
	defaultFirstSentence: string | null
}

const defaultConfig: BabelIpsumConfig = {
	locale: 'en-US',
	source: '_',
	script: 'Latn',
	wordSeparators: [
		{ weight: 1, separator: ' ' },
		{ weight: 0.1, separator: ', ' },
		{ weight: 0.02, separator: ': ' },
		{ weight: 0.01, separator: '; ' },
	],
	sentenceWrappers: [{ weight: 1, start: '', end: '. ' }, { weight: 0.05, start: '', end: '? ' }, {
		weight: 0.05,
		start: '',
		end: '! ',
	}],
	defaultFirstSentence: null,
}

type LengthConfig = {
	min: number
	max: number
}

type GenerateConfig = {
	overrideFirstSentenceIfAvailable?: boolean
	words: LengthConfig
	sentences: LengthConfig
	paragraphs: LengthConfig
}

export class BabelIpsum {
	options: BabelIpsumConfig
	vocabulary: string[]

	random = Math.random

	constructor(options: Partial<BabelIpsumConfig> & Pick<BabelIpsumConfig, 'locale' | 'script' | 'source'>) {
		this.options = { ...defaultConfig, ...options }
		const { source, locale, script } = this.options
		this.vocabulary = textDataToVocabulary({ source, locale, script })
		new Intl.Locale(locale)
	}

	private capitalize(str: string) {
		let firstChar = ''
		for (const char of str) {
			firstChar = char
			break
		}
		return firstChar.toLocaleUpperCase(this.options.locale) + str.slice(firstChar.length)
	}

	words(config: Pick<GenerateConfig, 'words'>) {
		const { min, max } = config.words
		const length = this.randBetween(min, max)

		let out = ''
		for (let i = 0; i < length; ++i) {
			if (i) out += this.weighted(this.options.wordSeparators).separator
			out += this.randItem(this.vocabulary)
		}

		return out
	}

	sentences(config: Pick<GenerateConfig, 'words' | 'sentences' | 'overrideFirstSentenceIfAvailable'>) {
		const { min, max } = config.sentences
		const length = this.randBetween(min, max)

		let out = ''
		for (let i = 0; i < length; ++i) {
			if (!i && config.overrideFirstSentenceIfAvailable && this.options.defaultFirstSentence) {
				out += this.options.defaultFirstSentence
				continue
			}

			const { start, end } = this.weighted(this.options.sentenceWrappers)
			out += start + this.capitalize(this.words(config)) + end
		}

		return out.trim()
	}

	paragraphs({ overrideFirstSentenceIfAvailable, ...config }: GenerateConfig) {
		const { min, max } = config.paragraphs
		const length = this.randBetween(min, max)

		return Array.from({ length }, (_, i) => {
			return i === 0 ? this.sentences({ overrideFirstSentenceIfAvailable, ...config }) : this.sentences(config)
		}).join('\n\n')
	}

	private randBetween(min: number, max: number) {
		min = Math.min(min, max)
		max = Math.max(min, max)
		return Math.floor(this.random() * (max - min + 1) + min)
	}

	private randItem<T>(arr: readonly T[]): T {
		return arr[Math.floor(this.random() * arr.length)]
	}

	private weighted<T extends { weight: number }>(items: readonly T[]): T {
		const total = Object.values(items).reduce((sum, { weight }) => sum + weight, 0)

		const rnd = this.random() * total
		let accumulator = 0

		for (const item of items) {
			accumulator += item.weight

			if (rnd < accumulator) {
				return item
			}
		}

		return items[0]
	}
}
