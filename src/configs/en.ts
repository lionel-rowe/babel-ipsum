import type { LoremBabelConfig } from '../mod.ts'

/**
 * @module
 * Config used with LoremBabel to generate nonsense placeholder text in `en` locale.
 */

/** LoremBabel configuration for `en` locale */
const config: LoremBabelConfig = {
	'locale': 'en',
	'sentenceSeparator': ' ',
	'wordSeparators': [
		{ 'weight': 6700, 'separator': ' ' },
		{ 'weight': 457, 'separator': ', ' },
		{ 'weight': 150, 'separator': '-' },
		{ 'weight': 18, 'separator': '; ' },
		{ 'weight': 13, 'separator': '—' },
		{ 'weight': 10, 'separator': ': ' },
		{ 'weight': 9, 'separator': '–' },
		{ 'weight': 2, 'separator': '% ' },
	],
	'sentenceWrappers': [
		{ 'weight': 258, 'start': '', 'end': '.' },
		{ 'weight': 58, 'start': '', 'end': '' },
		{ 'weight': 5, 'start': '', 'end': ':' },
	],
	'vocabulary': [
		{ 'word': 'the', 'weight': 477 },
		{ 'word': 'of', 'weight': 258 },
		{ 'word': 'and', 'weight': 207 },
		{ 'word': 'in', 'weight': 195 },
		{ 'word': 'to', 'weight': 171 },
		{ 'word': 'a', 'weight': 158 },
		{ 'word': 'as', 'weight': 118 },
		{ 'word': 'for', 'weight': 115 },
		{ 'word': 'characters', 'weight': 104 },
		{ 'word': 'is', 'weight': 93 },
		{ 'word': 'code', 'weight': 86 },
		{ 'word': 'are', 'weight': 79 },
		{ 'word': 'character', 'weight': 72 },
		{ 'word': 'be', 'weight': 64 },
		{ 'word': 'with', 'weight': 63 },
		{ 'word': 'that', 'weight': 51 },
		{ 'word': 'by', 'weight': 50 },
		{ 'word': 'encoding', 'weight': 49 },
		{ 'word': 'standard', 'weight': 46 },
		{ 'word': 'used', 'weight': 45 },
		{ 'word': 'or', 'weight': 45 },
		{ 'word': 'points', 'weight': 44 },
		{ 'word': 'on', 'weight': 42 },
		{ 'word': 'text', 'weight': 41 },
		{ 'word': 'this', 'weight': 37 },
		{ 'word': 'use', 'weight': 35 },
		{ 'word': 'has', 'weight': 33 },
		{ 'word': 'which', 'weight': 33 },
		{ 'word': 'have', 'weight': 33 },
		{ 'word': 'encodings', 'weight': 32 },
		{ 'word': 'not', 'weight': 30 },
		{ 'word': 'from', 'weight': 29 },
		{ 'word': 'was', 'weight': 27 },
		{ 'word': 'such', 'weight': 27 },
		{ 'word': 'an', 'weight': 27 },
		{ 'word': 'all', 'weight': 25 },
		{ 'word': 'scripts', 'weight': 25 },
		{ 'word': 'it', 'weight': 25 },
		{ 'word': 'can', 'weight': 24 },
		{ 'word': 'other', 'weight': 24 },
		{ 'word': 'point', 'weight': 24 },
		{ 'word': 'been', 'weight': 23 },
		{ 'word': 'version', 'weight': 22 },
		{ 'word': 'most', 'weight': 21 },
		{ 'word': 'also', 'weight': 21 },
		{ 'word': 'but', 'weight': 21 },
		{ 'word': 'may', 'weight': 21 },
		{ 'word': 'one', 'weight': 20 },
		{ 'word': 'font', 'weight': 20 },
		{ 'word': 'more', 'weight': 19 },
		{ 'word': 'than', 'weight': 19 },
		{ 'word': 'these', 'weight': 19 },
		{ 'word': 'some', 'weight': 19 },
		{ 'word': 'set', 'weight': 19 },
		{ 'word': 'different', 'weight': 18 },
		{ 'word': 'many', 'weight': 17 },
		{ 'word': 'encoded', 'weight': 17 },
		{ 'word': 'there', 'weight': 17 },
		{ 'word': 'their', 'weight': 16 },
		{ 'word': 'two', 'weight': 16 },
		{ 'word': 'any', 'weight': 15 },
		{ 'word': 'script', 'weight': 15 },
		{ 'word': 'systems', 'weight': 14 },
		{ 'word': 'each', 'weight': 14 },
		{ 'word': 'only', 'weight': 14 },
		{ 'word': 'example', 'weight': 14 },
		{ 'word': 'however', 'weight': 13 },
		{ 'word': 'number', 'weight': 13 },
		{ 'word': 'at', 'weight': 13 },
		{ 'word': 'published', 'weight': 13 },
		{ 'word': 'order', 'weight': 13 },
		{ 'word': 'same', 'weight': 13 },
		{ 'word': 'common', 'weight': 12 },
		{ 'word': 'repertoire', 'weight': 12 },
		{ 'word': 'using', 'weight': 12 },
		{ 'word': 'fonts', 'weight': 12 },
		{ 'word': 'consortium', 'weight': 11 },
		{ 'word': 'support', 'weight': 11 },
		{ 'word': 'assigned', 'weight': 11 },
		{ 'word': 'several', 'weight': 11 },
		{ 'word': 'no', 'weight': 11 },
		{ 'word': 'between', 'weight': 11 },
		{ 'word': 'latin', 'weight': 11 },
		{ 'word': 'legacy', 'weight': 11 },
		{ 'word': 'name', 'weight': 11 },
		{ 'word': 'languages', 'weight': 11 },
		{ 'word': 'they', 'weight': 11 },
		{ 'word': 'new', 'weight': 11 },
		{ 'word': 'sequence', 'weight': 11 },
		{ 'word': 'range', 'weight': 11 },
		{ 'word': 'since', 'weight': 11 },
		{ 'word': 'precomposed', 'weight': 11 },
		{ 'word': 'including', 'weight': 10 },
		{ 'word': 'within', 'weight': 10 },
		{ 'word': 'software', 'weight': 10 },
		{ 'word': 'include', 'weight': 10 },
		{ 'word': 'often', 'weight': 10 },
		{ 'word': 'glyphs', 'weight': 10 },
		{ 'word': 'representation', 'weight': 10 },
		{ 'word': 'rendering', 'weight': 10 },
		{ 'word': 'them', 'weight': 10 },
		{ 'word': 'based', 'weight': 10 },
		{ 'word': 'defined', 'weight': 10 },
		{ 'word': 'names', 'weight': 10 },
		{ 'word': 'format', 'weight': 10 },
		{ 'word': 'byte', 'weight': 10 },
		{ 'word': 'given', 'weight': 9 },
		{ 'word': 'system', 'weight': 9 },
		{ 'word': 'bytes', 'weight': 9 },
		{ 'word': 'its', 'weight': 9 },
		{ 'word': 'when', 'weight': 9 },
		{ 'word': 'had', 'weight': 9 },
		{ 'word': 'through', 'weight': 9 },
		{ 'word': 'cases', 'weight': 9 },
		{ 'word': 'han', 'weight': 9 },
		{ 'word': 'those', 'weight': 9 },
		{ 'word': 'although', 'weight': 9 },
		{ 'word': 'will', 'weight': 9 },
		{ 'word': 'marks', 'weight': 9 },
		{ 'word': 'various', 'weight': 8 },
		{ 'word': 'large', 'weight': 8 },
		{ 'word': 'web', 'weight': 8 },
		{ 'word': 'microsoft', 'weight': 8 },
		{ 'word': 'surrogate', 'weight': 8 },
		{ 'word': 'needed', 'weight': 8 },
		{ 'word': 'versions', 'weight': 8 },
		{ 'word': 'rules', 'weight': 8 },
		{ 'word': 'cannot', 'weight': 8 },
		{ 'word': 'combining', 'weight': 8 },
		{ 'word': 'provide', 'weight': 8 },
		{ 'word': 'defines', 'weight': 7 },
		{ 'word': 'unified', 'weight': 7 },
		{ 'word': 'data', 'weight': 7 },
		{ 'word': 'well', 'weight': 7 },
		{ 'word': 'sequences', 'weight': 7 },
		{ 'word': 'widely', 'weight': 7 },
		{ 'word': 'intended', 'weight': 7 },
		{ 'word': 'over', 'weight': 7 },
		{ 'word': 'made', 'weight': 7 },
		{ 'word': 'written', 'weight': 7 },
		{ 'word': 'forms', 'weight': 7 },
		{ 'word': 'existing', 'weight': 7 },
		{ 'word': 'codespace', 'weight': 7 },
		{ 'word': 'way', 'weight': 7 },
		{ 'word': 'do', 'weight': 7 },
		{ 'word': 'where', 'weight': 7 },
		{ 'word': 'glyph', 'weight': 7 },
		{ 'word': 'internal', 'weight': 7 },
		{ 'word': 'japanese', 'weight': 7 },
		{ 'word': 'designed', 'weight': 6 },
		{ 'word': 'writing', 'weight': 6 },
		{ 'word': 'part', 'weight': 6 },
		{ 'word': 'sets', 'weight': 6 },
		{ 'word': 'become', 'weight': 6 },
		{ 'word': 'due', 'weight': 6 },
		{ 'word': 'particular', 'weight': 6 },
		{ 'word': 'instead', 'weight': 6 },
		{ 'word': 'abstract', 'weight': 6 },
		{ 'word': 'conversion', 'weight': 6 },
		{ 'word': 'both', 'weight': 6 },
		{ 'word': 'block', 'weight': 6 },
		{ 'word': 'universal', 'weight': 6 },
		{ 'word': 'bit', 'weight': 6 },
		{ 'word': 'modern', 'weight': 6 },
		{ 'word': 'list', 'weight': 6 },
		{ 'word': 'ideographs', 'weight': 6 },
		{ 'word': 'still', 'weight': 6 },
		{ 'word': 'released', 'weight': 6 },
		{ 'word': 'added', 'weight': 6 },
		{ 'word': 'letter', 'weight': 6 },
		{ 'word': 'known', 'weight': 6 },
		{ 'word': 'specified', 'weight': 6 },
		{ 'word': 'ligatures', 'weight': 6 },
		{ 'word': 'does', 'weight': 6 },
		{ 'word': 'represented', 'weight': 6 },
		{ 'word': 'hangul', 'weight': 6 },
		{ 'word': 'opentype', 'weight': 6 },
		{ 'word': 'thai', 'weight': 6 },
		{ 'word': 'display', 'weight': 6 },
		{ 'word': 'non', 'weight': 6 },
		{ 'word': 'adopted', 'weight': 6 },
		{ 'word': 'email', 'weight': 6 },
		{ 'word': 'if', 'weight': 6 },
		{ 'word': 'newline', 'weight': 6 },
		{ 'word': 'unification', 'weight': 6 },
		{ 'word': 'symbols', 'weight': 5 },
		{ 'word': 'thousands', 'weight': 5 },
		{ 'word': 'development', 'weight': 5 },
		{ 'word': 'pages', 'weight': 5 },
		{ 'word': 'being', 'weight': 5 },
		{ 'word': 'provides', 'weight': 5 },
		{ 'word': 'into', 'weight': 5 },
		{ 'word': 'three', 'weight': 5 },
		{ 'word': 'though', 'weight': 5 },
		{ 'word': 'others', 'weight': 5 },
		{ 'word': 'were', 'weight': 5 },
		{ 'word': 'supported', 'weight': 5 },
		{ 'word': 'variant', 'weight': 5 },
		{ 'word': 'issues', 'weight': 5 },
		{ 'word': 'first', 'weight': 5 },
		{ 'word': 'european', 'weight': 5 },
		{ 'word': 'without', 'weight': 5 },
		{ 'word': 'information', 'weight': 5 },
		{ 'word': 'alphabet', 'weight': 5 },
		{ 'word': 'because', 'weight': 5 },
		{ 'word': 'group', 'weight': 5 },
		{ 'word': 'apple', 'weight': 5 },
		{ 'word': 'mark', 'weight': 5 },
		{ 'word': 'multilingual', 'weight': 5 },
		{ 'word': 'world', 'weight': 5 },
		{ 'word': 'per', 'weight': 5 },
		{ 'word': 'would', 'weight': 5 },
		{ 'word': 'private', 'weight': 5 },
		{ 'word': 'generally', 'weight': 5 },
		{ 'word': 'standards', 'weight': 5 },
		{ 'word': 'now', 'weight': 5 },
		{ 'word': 'mechanism', 'weight': 5 },
		{ 'word': 'table', 'weight': 5 },
		{ 'word': 'processing', 'weight': 5 },
		{ 'word': 'yet', 'weight': 5 },
		{ 'word': 'historical', 'weight': 5 },
		{ 'word': 'special', 'weight': 5 },
		{ 'word': 'map', 'weight': 5 },
		{ 'word': 'thus', 'weight': 5 },
		{ 'word': 'method', 'weight': 5 },
		{ 'word': 'multiple', 'weight': 5 },
		{ 'word': 'according', 'weight': 5 },
		{ 'word': 'hexadecimal', 'weight': 5 },
		{ 'word': 'unit', 'weight': 5 },
		{ 'word': 'requires', 'weight': 5 },
		{ 'word': 'either', 'weight': 5 },
		{ 'word': 'acute', 'weight': 5 },
		{ 'word': 'applications', 'weight': 5 },
		{ 'word': 'base', 'weight': 5 },
		{ 'word': 'combinations', 'weight': 5 },
		{ 'word': 'allow', 'weight': 5 },
		{ 'word': 'radicals', 'weight': 5 },
		{ 'word': 'chinese', 'weight': 5 },
		{ 'word': 'operating', 'weight': 5 },
		{ 'word': 'depending', 'weight': 5 },
		{ 'word': 'approach', 'weight': 5 },
		{ 'word': 'methods', 'weight': 5 },
		{ 'word': 'letters', 'weight': 5 },
		{ 'word': 'uses', 'weight': 5 },
		{ 'word': 'files', 'weight': 5 },
		{ 'word': 'file', 'weight': 5 },
		{ 'word': 'problem', 'weight': 5 },
		{ 'word': 'emoji', 'weight': 4 },
		{ 'word': 'adoption', 'weight': 4 },
		{ 'word': 'encode', 'weight': 4 },
		{ 'word': 'internet', 'weight': 4 },
		{ 'word': 'identical', 'weight': 4 },
		{ 'word': 'another', 'weight': 4 },
		{ 'word': 'collation', 'weight': 4 },
		{ 'word': 'stored', 'weight': 4 },
		{ 'word': 'how', 'weight': 4 },
		{ 'word': 'codes', 'weight': 4 },
		{ 'word': 'exist', 'weight': 4 },
		{ 'word': 'compatibility', 'weight': 4 },
		{ 'word': 'own', 'weight': 4 },
		{ 'word': 'units', 'weight': 4 },
		{ 'word': 'considered', 'weight': 4 },
		{ 'word': 'complex', 'weight': 4 },
		{ 'word': 'variants', 'weight': 4 },
		{ 'word': 'unique', 'weight': 4 },
		{ 'word': 'called', 'weight': 4 },
		{ 'word': 'visual', 'weight': 4 },
		{ 'word': 'size', 'weight': 4 },
		{ 'word': 'already', 'weight': 4 },
		{ 'word': 'appearance', 'weight': 4 },
		{ 'word': 'full', 'weight': 4 },
		{ 'word': 'matching', 'weight': 4 },
		{ 'word': 'width', 'weight': 4 },
		{ 'word': 'back', 'weight': 4 },
		{ 'word': 'additional', 'weight': 4 },
		{ 'word': 'described', 'weight': 4 },
		{ 'word': 'wide', 'weight': 4 },
		{ 'word': 'bits', 'weight': 4 },
		{ 'word': 'instance', 'weight': 4 },
		{ 'word': 'obsolete', 'weight': 4 },
		{ 'word': 'so', 'weight': 4 },
		{ 'word': 'truetype', 'weight': 4 },
		{ 'word': 'years', 'weight': 4 },
		{ 'word': 'schemes', 'weight': 4 },
		{ 'word': 'limited', 'weight': 4 },
		{ 'word': 'major', 'weight': 4 },
		{ 'word': 'update', 'weight': 4 },
		{ 'word': 'included', 'weight': 4 },
		{ 'word': 'form', 'weight': 4 },
		{ 'word': 'proposals', 'weight': 4 },
		{ 'word': 'process', 'weight': 4 },
		{ 'word': 'includes', 'weight': 4 },
		{ 'word': 'after', 'weight': 4 },
		{ 'word': 'independent', 'weight': 4 },
		{ 'word': 'always', 'weight': 4 },
		{ 'word': 'four', 'weight': 4 },
		{ 'word': 'planes', 'weight': 4 },
		{ 'word': 'contains', 'weight': 4 },
		{ 'word': 'single', 'weight': 4 },
		{ 'word': 'required', 'weight': 4 },
		{ 'word': 'must', 'weight': 4 },
		{ 'word': 'high', 'weight': 4 },
		{ 'word': 'followed', 'weight': 4 },
		{ 'word': 'principle', 'weight': 4 },
		{ 'word': 'rule', 'weight': 4 },
		{ 'word': 'make', 'weight': 4 },
		{ 'word': 'noncharacters', 'weight': 4 },
		{ 'word': 'graphic', 'weight': 4 },
		{ 'word': 'change', 'weight': 4 },
		{ 'word': 'above', 'weight': 4 },
		{ 'word': 'formal', 'weight': 4 },
		{ 'word': 'official', 'weight': 4 },
		{ 'word': 'diacritic', 'weight': 4 },
		{ 'word': 'users', 'weight': 4 },
		{ 'word': 'ideographic', 'weight': 4 },
		{ 'word': 'arabic', 'weight': 4 },
		{ 'word': 'requiring', 'weight': 4 },
		{ 'word': 'subsets', 'weight': 4 },
		{ 'word': 'subset', 'weight': 4 },
		{ 'word': 'protocols', 'weight': 4 },
		{ 'word': 'possible', 'weight': 4 },
		{ 'word': 'should', 'weight': 4 },
		{ 'word': 'earlier', 'weight': 4 },
		{ 'word': 'china', 'weight': 4 },
		{ 'word': 'uppercase', 'weight': 4 },
		{ 'word': 'macron', 'weight': 4 },
		{ 'word': 'indic', 'weight': 4 },
		{ 'word': 'note', 'weight': 3 },
		{ 'word': 'contexts', 'weight': 3 },
		{ 'word': 'encodes', 'weight': 3 },
		{ 'word': 'largely', 'weight': 3 },
		{ 'word': 'computer', 'weight': 3 },
		{ 'word': 'relevant', 'weight': 3 },
		{ 'word': 'just', 'weight': 3 },
		{ 'word': 'charts', 'weight': 3 },
		{ 'word': 'annexes', 'weight': 3 },
		{ 'word': 'intent', 'weight': 3 },
		{ 'word': 'context', 'weight': 3 },
		{ 'word': 'together', 'weight': 3 },
		{ 'word': 'like', 'weight': 3 },
		{ 'word': 'graphical', 'weight': 3 },
		{ 'word': 'handled', 'weight': 3 },
		{ 'word': 'means', 'weight': 3 },
		{ 'word': 'particularly', 'weight': 3 },
		{ 'word': 'differences', 'weight': 3 },
		{ 'word': 'level', 'weight': 3 },
		{ 'word': 'shape', 'weight': 3 },
		{ 'word': 'word', 'weight': 3 },
		{ 'word': 'original', 'weight': 3 },
		{ 'word': 'model', 'weight': 3 },
		{ 'word': 'semantic', 'weight': 3 },
		{ 'word': 'ken', 'weight': 3 },
		{ 'word': 'becker', 'weight': 3 },
		{ 'word': 'proposal', 'weight': 3 },
		{ 'word': 'could', 'weight': 3 },
		{ 'word': 'design', 'weight': 3 },
		{ 'word': 'printed', 'weight': 3 },
		{ 'word': 'far', 'weight': 3 },
		{ 'word': 'rare', 'weight': 3 },
		{ 'word': 'candidates', 'weight': 3 },
		{ 'word': 'research', 'weight': 3 },
		{ 'word': 'libraries', 'weight': 3 },
		{ 'word': 'work', 'weight': 3 },
		{ 'word': 'volume', 'weight': 3 },
		{ 'word': 'allowed', 'weight': 3 },
		{ 'word': 'rarely', 'weight': 3 },
		{ 'word': 'among', 'weight': 3 },
		{ 'word': 'necessary', 'weight': 3 },
		{ 'word': 'specification', 'weight': 3 },
		{ 'word': 'platform', 'weight': 3 },
		{ 'word': 'previously', 'weight': 3 },
		{ 'word': 'environments', 'weight': 3 },
		{ 'word': 'covers', 'weight': 3 },
		{ 'word': 'source', 'weight': 3 },
		{ 'word': 'total', 'weight': 3 },
		{ 'word': 'further', 'weight': 3 },
		{ 'word': 'additions', 'weight': 3 },
		{ 'word': 'roadmap', 'weight': 3 },
		{ 'word': 'committee', 'weight': 3 },
		{ 'word': 'assignments', 'weight': 3 },
		{ 'word': 'listed', 'weight': 3 },
		{ 'word': 'project', 'weight': 3 },
		{ 'word': 'university', 'weight': 3 },
		{ 'word': 'recent', 'weight': 3 },
		{ 'word': 'developed', 'weight': 3 },
		{ 'word': 'following', 'weight': 3 },
		{ 'word': 'publication', 'weight': 3 },
		{ 'word': 'coded', 'weight': 3 },
		{ 'word': 'while', 'weight': 3 },
		{ 'word': 'simple', 'weight': 3 },
		{ 'word': 'specifies', 'weight': 3 },
		{ 'word': 'properties', 'weight': 3 },
		{ 'word': 'interoperability', 'weight': 3 },
		{ 'word': 'platforms', 'weight': 3 },
		{ 'word': 'core', 'weight': 3 },
		{ 'word': 'last', 'weight': 3 },
		{ 'word': 'free', 'weight': 3 },
		{ 'word': 'practical', 'weight': 3 },
		{ 'word': 'difference', 'weight': 3 },
		{ 'word': 'year', 'weight': 3 },
		{ 'word': 'six', 'weight': 3 },
		{ 'word': 'september', 'weight': 3 },
		{ 'word': 'blocks', 'weight': 3 },
		{ 'word': 'third', 'weight': 3 },
		{ 'word': 'least', 'weight': 3 },
		{ 'word': 'leading', 'weight': 3 },
		{ 'word': 'plane', 'weight': 3 },
		{ 'word': 'basic', 'weight': 3 },
		{ 'word': 'accessed', 'weight': 3 },
		{ 'word': 'named', 'weight': 3 },
		{ 'word': 'general', 'weight': 3 },
		{ 'word': 'property', 'weight': 3 },
		{ 'word': 'practice', 'weight': 3 },
		{ 'word': 'especially', 'weight': 3 },
		{ 'word': 'small', 'weight': 3 },
		{ 'word': 'never', 'weight': 3 },
		{ 'word': 'available', 'weight': 3 },
		{ 'word': 'interpretation', 'weight': 3 },
		{ 'word': 'having', 'weight': 3 },
		{ 'word': 'visible', 'weight': 3 },
		{ 'word': 'ligature', 'weight': 3 },
		{ 'word': 'reserved', 'weight': 3 },
		{ 'word': 'control', 'weight': 3 },
		{ 'word': 'directly', 'weight': 3 },
		{ 'word': 'accent', 'weight': 3 },
		{ 'word': 'identified', 'weight': 3 },
		{ 'word': 'alias', 'weight': 3 },
		{ 'word': 'diacritics', 'weight': 3 },
		{ 'word': 'equivalent', 'weight': 3 },
		{ 'word': 'canonical', 'weight': 3 },
		{ 'word': 'korean', 'weight': 3 },
		{ 'word': 'syllables', 'weight': 3 },
		{ 'word': 'add', 'weight': 3 },
		{ 'word': 'left', 'weight': 3 },
		{ 'word': 'appear', 'weight': 3 },
		{ 'word': 'supports', 'weight': 3 },
		{ 'word': 'every', 'weight': 3 },
		{ 'word': 'correct', 'weight': 3 },
		{ 'word': 'indicate', 'weight': 3 },
		{ 'word': 'mechanisms', 'weight': 3 },
		{ 'word': 'direct', 'weight': 3 },
		{ 'word': 'beginning', 'weight': 3 },
		{ 'word': 'converted', 'weight': 3 },
		{ 'word': 'allows', 'weight': 3 },
		{ 'word': 'attempt', 'weight': 3 },
		{ 'word': 'local', 'weight': 3 },
		{ 'word': 'strings', 'weight': 3 },
		{ 'word': 'language', 'weight': 3 },
		{ 'word': 'documents', 'weight': 3 },
		{ 'word': 'whether', 'weight': 3 },
		{ 'word': 'citation', 'weight': 3 },
		{ 'word': 'italic', 'weight': 3 },
		{ 'word': 'collection', 'weight': 3 },
		{ 'word': 'typically', 'weight': 3 },
		{ 'word': 'separate', 'weight': 3 },
		{ 'word': 'line', 'weight': 3 },
		{ 'word': 'solutions', 'weight': 3 },
		{ 'word': 'dependent', 'weight': 3 },
		{ 'word': 'lowercase', 'weight': 3 },
		{ 'word': 'case', 'weight': 3 },
		{ 'word': 'insensitive', 'weight': 3 },
		{ 'word': 'consonant', 'weight': 3 },
		{ 'word': 'vowel', 'weight': 3 },
		{ 'word': 'maintained', 'weight': 2 },
		{ 'word': 'ordinary', 'weight': 2 },
		{ 'word': 'academic', 'weight': 2 },
		{ 'word': 'numerals', 'weight': 2 },
		{ 'word': 'punctuation', 'weight': 2 },
		{ 'word': 'treated', 'weight': 2 },
		{ 'word': 'specific', 'weight': 2 },
		{ 'word': 'thereof', 'weight': 2 },
		{ 'word': 'initial', 'weight': 2 },
		{ 'word': 'outside', 'weight': 2 },
		{ 'word': 'million', 'weight': 2 },
		{ 'word': 'incompatible', 'weight': 2 },
		{ 'word': 'architectures', 'weight': 2 },
		{ 'word': 'majority', 'weight': 2 },
		{ 'word': 'contemporary', 'weight': 2 },
		{ 'word': 'aid', 'weight': 2 },
		{ 'word': 'developers', 'weight': 2 },
		{ 'word': 'reference', 'weight': 2 },
		{ 'word': 'implementation', 'weight': 2 },
		{ 'word': 'topics', 'weight': 2 },
		{ 'word': 'normalization', 'weight': 2 },
		{ 'word': 'composition', 'weight': 2 },
		{ 'word': 'processed', 'weight': 2 },
		{ 'word': 'binary', 'weight': 2 },
		{ 'word': 'itself', 'weight': 2 },
		{ 'word': 'originally', 'weight': 2 },
		{ 'word': 'limitations', 'weight': 2 },
		{ 'word': 'up', 'weight': 2 },
		{ 'word': 'upon', 'weight': 2 },
		{ 'word': 'indeed', 'weight': 2 },
		{ 'word': 'facilitate', 'weight': 2 },
		{ 'word': 'primarily', 'weight': 2 },
		{ 'word': 'consistent', 'weight': 2 },
		{ 'word': 'distinctions', 'weight': 2 },
		{ 'word': 'best', 'weight': 2 },
		{ 'word': 'treatment', 'weight': 2 },
		{ 'word': 'regarding', 'weight': 2 },
		{ 'word': 'justify', 'weight': 2 },
		{ 'word': 'style', 'weight': 2 },
		{ 'word': 'discretion', 'weight': 2 },
		{ 'word': 'partially', 'weight': 2 },
		{ 'word': 'western', 'weight': 2 },
		{ 'word': 'preserve', 'weight': 2 },
		{ 'word': 'allowing', 'weight': 2 },
		{ 'word': 'halfwidth', 'weight': 2 },
		{ 'word': 'fullwidth', 'weight': 2 },
		{ 'word': 'michael', 'weight': 2 },
		{ 'word': 'everson', 'weight': 2 },
		{ 'word': 'along', 'weight': 2 },
		{ 'word': 'started', 'weight': 2 },
		{ 'word': 'input', 'weight': 2 },
		{ 'word': 'draft', 'weight': 2 },
		{ 'word': 'international', 'weight': 2 },
		{ 'word': 'document', 'weight': 2 },
		{ 'word': 'scheme', 'weight': 2 },
		{ 'word': 'address', 'weight': 2 },
		{ 'word': 'need', 'weight': 2 },
		{ 'word': 'body', 'weight': 2 },
		{ 'word': 'properly', 'weight': 2 },
		{ 'word': 'require', 'weight': 2 },
		{ 'word': 'preserving', 'weight': 2 },
		{ 'word': 'union', 'weight': 2 },
		{ 'word': 'below', 'weight': 2 },
		{ 'word': 'better', 'weight': 2 },
		{ 'word': 'registration', 'weight': 2 },
		{ 'word': 'public', 'weight': 2 },
		{ 'word': 'early', 'weight': 2 },
		{ 'word': 'working', 'weight': 2 },
		{ 'word': 'expanded', 'weight': 2 },
		{ 'word': 'whistler', 'weight': 2 },
		{ 'word': 'rick', 'weight': 2 },
		{ 'word': 'mcgowan', 'weight': 2 },
		{ 'word': 'california', 'weight': 2 },
		{ 'word': 'second', 'weight': 2 },
		{ 'word': 'june', 'weight': 2 },
		{ 'word': 'longer', 'weight': 2 },
		{ 'word': 'restricted', 'weight': 2 },
		{ 'word': 'inclusion', 'weight': 2 },
		{ 'word': 'mainly', 'weight': 2 },
		{ 'word': 'architecture', 'weight': 2 },
		{ 'word': 'members', 'weight': 2 },
		{ 'word': 'main', 'weight': 2 },
		{ 'word': 'few', 'weight': 2 },
		{ 'word': 'adobe', 'weight': 2 },
		{ 'word': 'countries', 'weight': 2 },
		{ 'word': 'presently', 'weight': 2 },
		{ 'word': 'goal', 'weight': 2 },
		{ 'word': 'replacing', 'weight': 2 },
		{ 'word': 'transformation', 'weight': 2 },
		{ 'word': 'latest', 'weight': 2 },
		{ 'word': 'covering', 'weight': 2 },
		{ 'word': 'alphabets', 'weight': 2 },
		{ 'word': 'maintain', 'weight': 2 },
		{ 'word': 'website', 'weight': 2 },
		{ 'word': 'agreement', 'weight': 2 },
		{ 'word': 'details', 'weight': 2 },
		{ 'word': 'user', 'weight': 2 },
		{ 'word': 'lack', 'weight': 2 },
		{ 'word': 'real', 'weight': 2 },
		{ 'word': 'areas', 'weight': 2 },
		{ 'word': 'medieval', 'weight': 2 },
		{ 'word': 'initiative', 'weight': 2 },
		{ 'word': 'proposed', 'weight': 2 },
		{ 'word': 'differ', 'weight': 2 },
		{ 'word': 'significant', 'weight': 2 },
		{ 'word': 'ways', 'weight': 2 },
		{ 'word': 'supporting', 'weight': 2 },
		{ 'word': 'print', 'weight': 2 },
		{ 'word': 'demand', 'weight': 2 },
		{ 'word': 'updated', 'weight': 2 },
		{ 'word': 'regularly', 'weight': 2 },
		{ 'word': 'occasionally', 'weight': 2 },
		{ 'word': 'scheduled', 'weight': 2 },
		{ 'word': 'release', 'weight': 2 },
		{ 'word': 'april', 'weight': 2 },
		{ 'word': 'changed', 'weight': 2 },
		{ 'word': 'extension', 'weight': 2 },
		{ 'word': 'symbol', 'weight': 2 },
		{ 'word': 'changes', 'weight': 2 },
		{ 'word': 'computing', 'weight': 2 },
		{ 'word': 'actual', 'weight': 2 },
		{ 'word': 'prefix', 'weight': 2 },
		{ 'word': 'precedes', 'weight': 2 },
		{ 'word': 'numbers', 'weight': 2 },
		{ 'word': 'zeros', 'weight': 2 },
		{ 'word': 'padded', 'weight': 2 },
		{ 'word': 'valid', 'weight': 2 },
		{ 'word': 'arises', 'weight': 2 },
		{ 'word': 'pairs', 'weight': 2 },
		{ 'word': 'commonly', 'weight': 2 },
		{ 'word': 'allocated', 'weight': 2 },
		{ 'word': 'related', 'weight': 2 },
		{ 'word': 'otherwise', 'weight': 2 },
		{ 'word': 'arbitrary', 'weight': 2 },
		{ 'word': 'out', 'weight': 2 },
		{ 'word': 'potentially', 'weight': 2 },
		{ 'word': 'category', 'weight': 2 },
		{ 'word': 'here', 'weight': 2 },
		{ 'word': 'under', 'weight': 2 },
		{ 'word': 'then', 'weight': 2 },
		{ 'word': 'low', 'weight': 2 },
		{ 'word': 'ignored', 'weight': 2 },
		{ 'word': 'guaranteed', 'weight': 2 },
		{ 'word': 'surrogates', 'weight': 2 },
		{ 'word': 'operation', 'weight': 2 },
		{ 'word': 'intentionally', 'weight': 2 },
		{ 'word': 'interchange', 'weight': 2 },
		{ 'word': 'representing', 'weight': 2 },
		{ 'word': 'space', 'weight': 2 },
		{ 'word': 'behavior', 'weight': 2 },
		{ 'word': 'shaping', 'weight': 2 },
		{ 'word': 'formation', 'weight': 2 },
		{ 'word': 'corresponding', 'weight': 2 },
		{ 'word': 'texts', 'weight': 2 },
		{ 'word': 'stability', 'weight': 2 },
		{ 'word': 'greatly', 'weight': 2 },
		{ 'word': 'diacritical', 'weight': 2 },
		{ 'word': 'simpler', 'weight': 2 },
		{ 'word': 'equivalence', 'weight': 2 },
		{ 'word': 'composing', 'weight': 2 },
		{ 'word': 'jamo', 'weight': 2 },
		{ 'word': 'composed', 'weight': 2 },
		{ 'word': 'orthographic', 'weight': 2 },
		{ 'word': 'did', 'weight': 2 },
		{ 'word': 'attempts', 'weight': 2 },
		{ 'word': 'resulting', 'weight': 2 },
		{ 'word': 'description', 'weight': 2 },
		{ 'word': 'against', 'weight': 2 },
		{ 'word': 'certain', 'weight': 2 },
		{ 'word': 'letterforms', 'weight': 2 },
		{ 'word': 'combined', 'weight': 2 },
		{ 'word': 'quite', 'weight': 2 },
		{ 'word': 'technologies', 'weight': 2 },
		{ 'word': 'engine', 'weight': 2 },
		{ 'word': 'generate', 'weight': 2 },
		{ 'word': 'graphite', 'weight': 2 },
		{ 'word': 'instructions', 'weight': 2 },
		{ 'word': 'output', 'weight': 2 },
		{ 'word': 'solution', 'weight': 2 },
		{ 'word': 'assigning', 'weight': 2 },
		{ 'word': 'zero', 'weight': 2 },
		{ 'word': 'right', 'weight': 2 },
		{ 'word': 'direction', 'weight': 2 },
		{ 'word': 'position', 'weight': 2 },
		{ 'word': 'top', 'weight': 2 },
		{ 'word': 'vowels', 'weight': 2 },
		{ 'word': 'fallback', 'weight': 2 },
		{ 'word': 'standardized', 'weight': 2 },
		{ 'word': 'greek', 'weight': 2 },
		{ 'word': 'cyrillic', 'weight': 2 },
		{ 'word': 'signs', 'weight': 2 },
		{ 'word': 'provided', 'weight': 2 },
		{ 'word': 'open', 'weight': 2 },
		{ 'word': 'box', 'weight': 2 },
		{ 'word': 'series', 'weight': 2 },
		{ 'word': 'mapping', 'weight': 2 },
		{ 'word': 'possibly', 'weight': 2 },
		{ 'word': 'values', 'weight': 2 },
		{ 'word': 'fixed', 'weight': 2 },
		{ 'word': 'replacement', 'weight': 2 },
		{ 'word': 'handling', 'weight': 2 },
		{ 'word': 'specify', 'weight': 2 },
		{ 'word': 'detection', 'weight': 2 },
		{ 'word': 'endianness', 'weight': 2 },
		{ 'word': 'reorder', 'weight': 2 },
		{ 'word': 'regardless', 'weight': 2 },
		{ 'word': 'places', 'weight': 2 },
		{ 'word': 'distinguish', 'weight': 2 },
		{ 'word': 'addition', 'weight': 2 },
		{ 'word': 'variable', 'weight': 2 },
		{ 'word': 'unix', 'weight': 2 },
		{ 'word': 'programming', 'weight': 2 },
		{ 'word': 'domain', 'weight': 2 },
		{ 'word': 'internationalized', 'weight': 2 },
		{ 'word': 'standardization', 'weight': 2 },
		{ 'word': 'administration', 'weight': 2 },
		{ 'word': 'much', 'weight': 2 },
		{ 'word': 'content', 'weight': 2 },
		{ 'word': 'almost', 'weight': 2 },
		{ 'word': 'task', 'weight': 2 },
		{ 'word': 'storage', 'weight': 2 },
		{ 'word': 'length', 'weight': 2 },
		{ 'word': 'sole', 'weight': 2 },
		{ 'word': 'macos', 'weight': 2 },
		{ 'word': 'relatively', 'weight': 2 },
		{ 'word': 'traditional', 'weight': 2 },
		{ 'word': 'key', 'weight': 2 },
		{ 'word': 'alternative', 'weight': 2 },
		{ 'word': 'ending', 'weight': 2 },
		{ 'word': 'screen', 'weight': 2 },
		{ 'word': 'selection', 'weight': 2 },
		{ 'word': 'lookup', 'weight': 2 },
		{ 'word': 'shapecatcher', 'weight': 2 },
		{ 'word': 'returned', 'weight': 2 },
		{ 'word': 'message', 'weight': 2 },
		{ 'word': 'transfer', 'weight': 2 },
		{ 'word': 'framework', 'weight': 2 },
		{ 'word': 'very', 'weight': 2 },
		{ 'word': 'correctly', 'weight': 2 },
		{ 'word': 'mail', 'weight': 2 },
		{ 'word': 'recommendations', 'weight': 2 },
		{ 'word': 'browsers', 'weight': 2 },
		{ 'word': 'older', 'weight': 2 },
		{ 'word': 'render', 'weight': 2 },
		{ 'word': 'numeric', 'weight': 2 },
		{ 'word': 'references', 'weight': 2 },
		{ 'word': 'limit', 'weight': 2 },
		{ 'word': 'fewer', 'weight': 2 },
		{ 'word': 'sometimes', 'weight': 2 },
		{ 'word': 'substitution', 'weight': 2 },
		{ 'word': 'typefaces', 'weight': 2 },
		{ 'word': 'introduced', 'weight': 2 },
		{ 'word': 'issue', 'weight': 2 },
		{ 'word': 'words', 'weight': 2 },
		{ 'word': 'unihan', 'weight': 2 },
		{ 'word': 'shift', 'weight': 2 },
		{ 'word': 'criteria', 'weight': 2 },
		{ 'word': 'meaning', 'weight': 2 },
		{ 'word': 'spelling', 'weight': 2 },
		{ 'word': 'separately', 'weight': 2 },
		{ 'word': 'stylistic', 'weight': 2 },
		{ 'word': 'regional', 'weight': 2 },
		{ 'word': 'library', 'weight': 2 },
		{ 'word': 'usage', 'weight': 2 },
		{ 'word': 'representations', 'weight': 2 },
		{ 'word': 'locl', 'weight': 2 },
		{ 'word': 'variation', 'weight': 2 },
		{ 'word': 'database', 'weight': 2 },
		{ 'word': 'comparison', 'weight': 2 },
		{ 'word': 'appearing', 'weight': 2 },
		{ 'word': 'changing', 'weight': 2 },
		{ 'word': 'dotless', 'weight': 2 },
		{ 'word': 'dotted', 'weight': 2 },
		{ 'word': 'comparisons', 'weight': 2 },
		{ 'word': 'contrast', 'weight': 2 },
		{ 'word': 'look', 'weight': 2 },
		{ 'word': 'security', 'weight': 2 },
		{ 'word': 'expected', 'weight': 2 },
		{ 'word': 'homoglyphs', 'weight': 2 },
		{ 'word': 'identifier', 'weight': 2 },
		{ 'word': 'what', 'weight': 2 },
		{ 'word': 'round', 'weight': 2 },
		{ 'word': 'trip', 'weight': 2 },
		{ 'word': 'mappings', 'weight': 2 },
		{ 'word': 'exists', 'weight': 2 },
		{ 'word': 'tibetan', 'weight': 2 },
		{ 'word': 'ordering', 'weight': 2 },
		{ 'word': 'even', 'weight': 2 },
		{ 'word': 'spoken', 'weight': 2 },
		{ 'word': 'dictionary', 'weight': 2 },
		{ 'word': 'mistakes', 'weight': 2 },
		{ 'word': 'formally', 'weight': 1 },
		{ 'word': 'digitized', 'weight': 1 },
		{ 'word': 'literary', 'weight': 1 },
		{ 'word': 'technical', 'weight': 1 },
		{ 'word': 'continued', 'weight': 1 },
		{ 'word': 'conducted', 'weight': 1 },
		{ 'word': 'moreover', 'weight': 1 },
		{ 'word': 'widespread', 'weight': 1 },
		{ 'word': 'responsible', 'weight': 1 },
		{ 'word': 'popularization', 'weight': 1 },
		{ 'word': 'japan', 'weight': 1 },
		{ 'word': 'ultimately', 'weight': 1 },
		{ 'word': 'capable', 'weight': 1 },
		{ 'word': 'supplanted', 'weight': 1 },
		{ 'word': 'previous', 'weight': 1 },
		{ 'word': 'environment', 'weight': 1 },
		{ 'word': 'myriad', 'weight': 1 },
		{ 'word': 'locales', 'weight': 1 },
		{ 'word': 'vast', 'weight': 1 },
		{ 'word': 'consideration', 'weight': 1 },
		{ 'word': 'synchronized', 'weight': 1 },
		{ 'word': 'designers', 'weight': 1 },
		{ 'word': 'explaining', 'weight': 1 },
		{ 'word': 'concepts', 'weight': 1 },
		{ 'word': 'germane', 'weight': 1 },
		{ 'word': 'providing', 'weight': 1 },
		{ 'word': 'guidance', 'weight': 1 },
		{ 'word': 'covered', 'weight': 1 },
		{ 'word': 'decomposition', 'weight': 1 },
		{ 'word': 'directionality', 'weight': 1 },
		{ 'word': 'define', 'weight': 1 },
		{ 'word': 'translate', 'weight': 1 },
		{ 'word': 'abstracted', 'weight': 1 },
		{ 'word': 'margin', 'weight': 1 },
		{ 'word': 'backwards', 'weight': 1 },
		{ 'word': 'transcending', 'weight': 1 },
		{ 'word': 'present', 'weight': 1 },
		{ 'word': 'relied', 'weight': 1 },
		{ 'word': 'expectation', 'weight': 1 },
		{ 'word': 'chosen', 'weight': 1 },
		{ 'word': 'totally', 'weight': 1 },
		{ 'word': 'unworkable', 'weight': 1 },
		{ 'word': 'interpreted', 'weight': 1 },
		{ 'word': 'garbage', 'weight': 1 },
		{ 'word': 'interoperation', 'weight': 1 },
		{ 'word': 'handful', 'weight': 1 },
	],
}

export default config
