type BabelIpsumConfigFull = {
	locale: string | Intl.Locale
	vocabulary: readonly { weight: number; word: string }[]
	sentenceSeparator: string
	wordSeparators: readonly { weight: number; separator: string }[]
	sentenceWrappers: readonly { weight: number; start?: string; end: string }[]
}

type RequiredConfigOptions = 'locale' | 'vocabulary'

export type BabelIpsumConfig = Partial<BabelIpsumConfigFull> & Pick<BabelIpsumConfigFull, RequiredConfigOptions>

const defaults: Omit<BabelIpsumConfigFull, RequiredConfigOptions> = {
	sentenceSeparator: ' ',
	wordSeparators: [
		{ weight: 1, separator: ' ' },
		{ weight: 0.075, separator: ', ' },
		{ weight: 0.005, separator: ': ' },
		{ weight: 0.0025, separator: '; ' },
	],
	sentenceWrappers: [
		{ weight: 1, start: '', end: '.' },
		{ weight: 0.05, start: '', end: '?' },
		{ weight: 0.05, start: '', end: '!' },
	],
}

type LengthBoundaries = {
	min: number
	max: number
}

type GenerateOptions = {
	wordsPerSentence: LengthBoundaries
	sentencesPerParagraph: LengthBoundaries
	paragraphsPerText: LengthBoundaries
}

class TextContents extends Array<string[]> {
	#sentenceSeparator: string = ' '

	static fromParts(textParts: string[][], sentenceSeparator: string): TextContents {
		const p = new TextContents(...textParts)
		p.#sentenceSeparator = sentenceSeparator
		return p
	}

	private constructor(...textParts: string[][]) {
		super(...textParts)
	}

	#joinSentences(sentences: string[]): string {
		return sentences.join(this.#sentenceSeparator)
	}

	override toString(): string {
		return this.map(this.#joinSentences.bind(this)).join('\n\n')
	}
}

type NonEmptyArr<T> = readonly [T, ...T[]]
function assertNonEmpty<T>(array: readonly T[], msg?: string): asserts array is NonEmptyArr<T> {
	if (!array.length) {
		throw new RangeError([msg, 'array is empty'].filter(Boolean).join(' '))
	}
}

export class BabelIpsum {
	readonly config: BabelIpsumConfigFull
	random = Math.random

	constructor(config: BabelIpsumConfig) {
		this.config = { ...defaults, ...config }

		for (const k of ['vocabulary', 'sentenceWrappers', 'wordSeparators'] as const) {
			assertNonEmpty<unknown>(this.config[k], k)
		}

		const { locale } = this.config
		new Intl.Locale(locale)
	}

	/**
	 * Get random placeholder text based on the supplied options.
	 *
	 * @param options - generation options
	 * @returns the text contents separated into paragraphs and sentences
	 *
	 * @example
	 *
	 * ```ts
	 * import { BabelIpsum } from 'babel-ipsum/mod.ts'
	 * import config from 'babel-ipsum/configs/lorem.ts'
	 *
	 * const ipsum = new BabelIpsum(config)
	 * const text = ipsum.text({
	 * 	wordsPerSentence: { min: 5, max: 10 },
	 * 	sentencesPerParagraph: { min: 2, max: 3 },
	 * 	paragraphsPerText: { min: 3, max: 3 },
	 * })
	 * // TextContents(3) [ ... ]
	 *
	 * text.toString()
	 * // "Euismod hac gravida nulla mattis mi habitasse! Taciti sem vel felis nunc est.\n\nNulla, sed mollis netus facilisi varius cum natoque sapien laoreet. Turpis inceptos, vehicula rhoncus, integer litora luctus. Feugiat eget, sapien erat in sed phasellus, curabitur!\n\nHabitasse auctor vulputate dolor donec lacus tempus consectetur. Blandit taciti neque primis nulla sociis. Quis mi venenatis senectus habitasse varius."
	 * ```
	 */
	text(options: GenerateOptions): TextContents {
		const { min, max } = options.paragraphsPerText
		const length = this.#randBetween(min, max)

		return TextContents.fromParts(
			Array.from({ length }, () => {
				return this.#sentences(options)
			}),
			this.config.sentenceSeparator,
		)
	}

	/**
	 * Randomly generate individual words.
	 *
	 * @example
	 * ```ts
	 * import { BabelIpsum } from 'babel-ipsum/mod.ts'
	 * import config from 'babel-ipsum/configs/lorem.ts'
	 *
	 * const ipsum = new BabelIpsum(config)
	 * ipsum.words().take(5).toArray()
	 * // example output: [ "ultrices", "suscipit", "donec", "proin", "est" ]
	 * ```
	 */
	*words(): Generator<string, undefined, undefined> {
		let prevWord = ''
		whileLoop: while (true) {
			// try 10 times for a unique next word
			for (let i = 0; i < 10; ++i) {
				const word = this.#weighted(this.config.vocabulary).word
				if (word !== prevWord) {
					yield word
					prevWord = word
					continue whileLoop
				}
			}

			// otherwise just take the next one regardless of uniqueness
			yield this.#weighted(this.config.vocabulary).word
		}
	}

	#capitalize(str: string): string {
		let firstChar = ''
		for (const char of str) {
			firstChar = char
			break
		}
		return firstChar.toLocaleUpperCase(this.config.locale) + str.slice(firstChar.length)
	}

	#sentence(options: Pick<GenerateOptions, 'wordsPerSentence'>): string {
		const { min, max } = options.wordsPerSentence
		const length = this.#randBetween(min, max)

		let out = ''
		const words = this.words()
		for (let i = 0; i < length; ++i) {
			if (i) out += this.#weighted(this.config.wordSeparators).separator
			out += words.next().value
		}

		const { start, end } = this.#weighted(this.config.sentenceWrappers)
		return (start ?? '') + this.#capitalize(out) + end
	}

	#sentences(options: Pick<GenerateOptions, 'wordsPerSentence' | 'sentencesPerParagraph'>): string[] {
		const { min, max } = options.sentencesPerParagraph
		const length = this.#randBetween(min, max)

		return Array.from({ length }, () => {
			return this.#sentence(options)
		})
	}

	#randBetween(min: number, max: number): number {
		min = Math.min(min, max)
		max = Math.max(min, max)
		return Math.floor(this.random() * (max - min + 1) + min)
	}

	#weighted<T extends { weight: number }>(items: readonly T[]): T {
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