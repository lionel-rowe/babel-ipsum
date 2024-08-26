import type { LoremBabelConfig } from './mod.ts'

// defaults
const MAX_VOCAB_SIZE = 800
const WORD_MATCHER = /^[\p{L}\p{M}\p{N}]+$/u

type ContentToVocabularyParams = {
	content: string
	locale: string | Intl.Locale
	wordMatcher?: Pick<RegExp, 'test'>
	maxVocabSize: number
}

function contentToVocabulary({ content, locale, wordMatcher, maxVocabSize }: ContentToVocabularyParams) {
	const wordFreqs = new Map<string, number>()

	for (const s of new Intl.Segmenter(locale, { granularity: 'word' }).segment(content.normalize())) {
		if (s.isWordLike && (wordMatcher ?? WORD_MATCHER).test(s.segment)) {
			const normalized = s.segment.toLocaleLowerCase(locale)
			wordFreqs.set(normalized, (wordFreqs.get(normalized) ?? 0) + 1)
		}
	}

	return [...wordFreqs].sort(([, a], [, b]) => b - a).slice(0, maxVocabSize).map((
		[word, weight],
	) => ({ word, weight }))
}

export function createConfig(
	metaConfig: {
		locale: string | Intl.Locale
		content: string
		maxVocabSize?: number
		wordMatcher?: Pick<RegExp, 'test'>
	},
): LoremBabelConfig {
	const { content, locale, wordMatcher, maxVocabSize } = metaConfig

	const vocabulary = contentToVocabulary({
		content,
		locale,
		wordMatcher,
		maxVocabSize: maxVocabSize ?? MAX_VOCAB_SIZE,
	})

	return { ...metaConfig, vocabulary }
}
