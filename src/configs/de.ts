import type { BabelIpsumConfig } from '../mod.ts'

const config: BabelIpsumConfig = {
	'locale': 'de',
	'wordSeparators': [
		{ 'weight': 1, 'separator': ' ' },
	],
	'sentenceWrappers': [
		{ 'weight': 1, 'end': '.' },
	],
	'vocabulary': [
		{ 'word': 'die', 'weight': 122 },
		{ 'word': 'unicode', 'weight': 91 },
		{ 'word': 'zeichen', 'weight': 91 },
		{ 'word': 'und', 'weight': 86 },
		{ 'word': 'der', 'weight': 84 },
		{ 'word': 'erw', 'weight': 78 },
		{ 'word': 'in', 'weight': 76 },
		{ 'word': 'bearbeiten', 'weight': 62 },
		{ 'word': 'für', 'weight': 54 },
		{ 'word': 'werden', 'weight': 48 },
		{ 'word': 'b', 'weight': 44 },
		{ 'word': 'cjk', 'weight': 41 },
		{ 'word': 'symbole', 'weight': 39 },
		{ 'word': 'ergänzung', 'weight': 37 },
		{ 'word': 'von', 'weight': 35 },
		{ 'word': 'a', 'weight': 35 },
		{ 'word': 'als', 'weight': 33 },
		{ 'word': 'den', 'weight': 32 },
		{ 'word': 'quelltext', 'weight': 31 },
		{ 'word': 'ist', 'weight': 27 },
		{ 'word': 'mit', 'weight': 27 },
		{ 'word': 'sind', 'weight': 26 },
		{ 'word': 'vereinh', 'weight': 26 },
		{ 'word': 'ideogramme', 'weight': 26 },
		{ 'word': 'nicht', 'weight': 25 },
		{ 'word': 'das', 'weight': 24 },
		{ 'word': 'zu', 'weight': 24 },
		{ 'word': 'eine', 'weight': 22 },
		{ 'word': 'sich', 'weight': 22 },
		{ 'word': 'wird', 'weight': 21 },
		{ 'word': 'auch', 'weight': 21 },
		{ 'word': 'bei', 'weight': 21 },
		{ 'word': 'lateinisch', 'weight': 21 },
		{ 'word': 'im', 'weight': 20 },
		{ 'word': 'zahlzeichen', 'weight': 20 },
		{ 'word': 'oder', 'weight': 19 },
		{ 'word': 'dem', 'weight': 19 },
		{ 'word': 'ein', 'weight': 19 },
		{ 'word': 'schrift', 'weight': 18 },
		{ 'word': 'u', 'weight': 18 },
		{ 'word': 'z', 'weight': 17 },
		{ 'word': 'verschiedene', 'weight': 17 },
		{ 'word': 'zusätzliche', 'weight': 17 },
		{ 'word': 'wie', 'weight': 16 },
		{ 'word': 'windows', 'weight': 16 },
		{ 'word': 'standard', 'weight': 15 },
		{ 'word': 'iso', 'weight': 15 },
		{ 'word': 'können', 'weight': 15 },
		{ 'word': 'd', 'weight': 15 },
		{ 'word': 'es', 'weight': 15 },
		{ 'word': 'auf', 'weight': 14 },
		{ 'word': 'des', 'weight': 14 },
		{ 'word': 'einer', 'weight': 13 },
		{ 'word': 'nur', 'weight': 12 },
		{ 'word': 'diese', 'weight': 12 },
		{ 'word': 'um', 'weight': 12 },
		{ 'word': 'unter', 'weight': 12 },
		{ 'word': 'über', 'weight': 12 },
		{ 'word': 'codepunkte', 'weight': 12 },
		{ 'word': 'aus', 'weight': 12 },
		{ 'word': 'kann', 'weight': 12 },
		{ 'word': 'dass', 'weight': 12 },
		{ 'word': 'arabisch', 'weight': 12 },
		{ 'word': 'c', 'weight': 12 },
		{ 'word': 'kyrillisch', 'weight': 12 },
		{ 'word': 'so', 'weight': 11 },
		{ 'word': 'eingabe', 'weight': 11 },
		{ 'word': 'formen', 'weight': 11 },
		{ 'word': 'alt', 'weight': 11 },
		{ 'word': 'erweiterungen', 'weight': 10 },
		{ 'word': 'kombinierende', 'weight': 10 },
		{ 'word': 'diakritische', 'weight': 10 },
		{ 'word': 'hangeul', 'weight': 10 },
		{ 'word': 'äthiopisch', 'weight': 10 },
		{ 'word': 'interpunktion', 'weight': 10 },
		{ 'word': 'pfeile', 'weight': 10 },
		{ 'word': 'mathem', 'weight': 10 },
		{ 'word': 'zeichensatz', 'weight': 9 },
		{ 'word': 'steuerzeichen', 'weight': 9 },
		{ 'word': 'kodierung', 'weight': 9 },
		{ 'word': 'alle', 'weight': 9 },
		{ 'word': 'erweitert', 'weight': 9 },
		{ 'word': 'anderen', 'weight': 9 },
		{ 'word': 'alphabet', 'weight': 9 },
		{ 'word': 'hat', 'weight': 8 },
		{ 'word': 'nach', 'weight': 8 },
		{ 'word': 'wurde', 'weight': 8 },
		{ 'word': 'zum', 'weight': 8 },
		{ 'word': 'reihenfolge', 'weight': 8 },
		{ 'word': 'jamo', 'weight': 8 },
		{ 'word': 'zusatz', 'weight': 8 },
		{ 'word': 'tai', 'weight': 8 },
		{ 'word': 'umschlossene', 'weight': 8 },
		{ 'word': 'alphanum', 'weight': 8 },
		{ 'word': 'kompatibilität', 'weight': 8 },
		{ 'word': 'hieroglyphen', 'weight': 8 },
		{ 'word': 'kana', 'weight': 8 },
		{ 'word': 'einem', 'weight': 7 },
		{ 'word': 'utf', 'weight': 7 },
		{ 'word': 'einen', 'weight': 7 },
		{ 'word': 'versionen', 'weight': 7 },
		{ 'word': 'zur', 'weight': 7 },
		{ 'word': 'ebenen', 'weight': 7 },
		{ 'word': 'code', 'weight': 7 },
		{ 'word': 'sie', 'weight': 7 },
		{ 'word': 'hier', 'weight': 7 },
		{ 'word': 'eingegeben', 'weight': 7 },
		{ 'word': 'schriften', 'weight': 6 },
		{ 'word': 'sprachen', 'weight': 6 },
		{ 'word': 'jedoch', 'weight': 6 },
		{ 'word': 'the', 'weight': 6 },
		{ 'word': 'etwa', 'weight': 6 },
		{ 'word': 'verwendet', 'weight': 6 },
		{ 'word': 'vielen', 'weight': 6 },
		{ 'word': 'zeichens', 'weight': 6 },
		{ 'word': 'devanagari', 'weight': 6 },
		{ 'word': 'birmanisch', 'weight': 6 },
		{ 'word': 'georgisch', 'weight': 6 },
		{ 'word': 'silbenz', 'weight': 6 },
		{ 'word': 'kanad', 'weight': 6 },
		{ 'word': 'ureinw', 'weight': 6 },
		{ 'word': 'phonetische', 'weight': 6 },
		{ 'word': 'radikale', 'weight': 6 },
		{ 'word': 'silbenzeichen', 'weight': 6 },
		{ 'word': 'präsentationsformen', 'weight': 6 },
		{ 'word': 'kleine', 'weight': 6 },
		{ 'word': 'linear', 'weight': 6 },
		{ 'word': 'keilschrift', 'weight': 6 },
		{ 'word': 'xixia', 'weight': 6 },
		{ 'word': 'piktografische', 'weight': 6 },
		{ 'word': 'muss', 'weight': 5 },
		{ 'word': 'noch', 'weight': 5 },
		{ 'word': 'bit', 'weight': 5 },
		{ 'word': 'davon', 'weight': 5 },
		{ 'word': 'darstellung', 'weight': 5 },
		{ 'word': 'text', 'weight': 5 },
		{ 'word': 'wenn', 'weight': 5 },
		{ 'word': 'dieser', 'weight': 5 },
		{ 'word': 'lediglich', 'weight': 5 },
		{ 'word': 'characters', 'weight': 5 },
		{ 'word': 'e', 'weight': 5 },
		{ 'word': 'g', 'weight': 5 },
		{ 'word': 'use', 'weight': 5 },
		{ 'word': 'private', 'weight': 5 },
		{ 'word': 'weitere', 'weight': 5 },
		{ 'word': 'allerdings', 'weight': 5 },
		{ 'word': 'h', 'weight': 5 },
		{ 'word': 'vom', 'weight': 5 },
		{ 'word': 'da', 'weight': 5 },
		{ 'word': 'definiert', 'weight': 5 },
		{ 'word': 'gibt', 'weight': 5 },
		{ 'word': 'bzw', 'weight': 5 },
		{ 'word': 'sortierung', 'weight': 5 },
		{ 'word': 'dann', 'weight': 5 },
		{ 'word': 'glyphen', 'weight': 5 },
		{ 'word': 'schriftzeichen', 'weight': 5 },
		{ 'word': 'indische', 'weight': 5 },
		{ 'word': 'vor', 'weight': 5 },
		{ 'word': 'taste', 'weight': 5 },
		{ 'word': 'ziffern', 'weight': 5 },
		{ 'word': 'privatnutzungsbereich', 'weight': 5 },
		{ 'word': 'englisch', 'weight': 4 },
		{ 'word': 'durch', 'weight': 4 },
		{ 'word': 'dazu', 'weight': 4 },
		{ 'word': 'solche', 'weight': 4 },
		{ 'word': 'sonderzeichen', 'weight': 4 },
		{ 'word': 'man', 'weight': 4 },
		{ 'word': 'war', 'weight': 4 },
		{ 'word': 'mehrere', 'weight': 4 },
		{ 'word': 'zeichenkodierung', 'weight': 4 },
		{ 'word': 'zwischen', 'weight': 4 },
		{ 'word': 'sollte', 'weight': 4 },
		{ 'word': 'wert', 'weight': 4 },
		{ 'word': 'standards', 'weight': 4 },
		{ 'word': 'kodierte', 'weight': 4 },
		{ 'word': 'neben', 'weight': 4 },
		{ 'word': 'notwendig', 'weight': 4 },
		{ 'word': 'bereits', 'weight': 4 },
		{ 'word': 'codepunkt', 'weight': 4 },
		{ 'word': 'dargestellt', 'weight': 4 },
		{ 'word': 'bereiche', 'weight': 4 },
		{ 'word': 'tatsächlich', 'weight': 4 },
		{ 'word': 'viele', 'weight': 4 },
		{ 'word': 'enthalten', 'weight': 4 },
		{ 'word': 'diakritischen', 'weight': 4 },
		{ 'word': 'genannt', 'weight': 4 },
		{ 'word': 'sogenannte', 'weight': 4 },
		{ 'word': 'wieder', 'weight': 4 },
		{ 'word': 'kodiert', 'weight': 4 },
		{ 'word': 'teil', 'weight': 4 },
		{ 'word': 'beispielsweise', 'weight': 4 },
		{ 'word': 'ab', 'weight': 4 },
		{ 'word': 'also', 'weight': 4 },
		{ 'word': 'tastenkombination', 'weight': 4 },
		{ 'word': 'strg', 'weight': 4 },
		{ 'word': 'griechisch', 'weight': 4 },
		{ 'word': 'koptisch', 'weight': 4 },
		{ 'word': 'syrisch', 'weight': 4 },
		{ 'word': 'tamilisch', 'weight': 4 },
		{ 'word': 'cherokee', 'weight': 4 },
		{ 'word': 'khmer', 'weight': 4 },
		{ 'word': 'mongolisch', 'weight': 4 },
		{ 'word': 'sundanesisch', 'weight': 4 },
		{ 'word': 'allgemeine', 'weight': 4 },
		{ 'word': 'operatoren', 'weight': 4 },
		{ 'word': 'geometrische', 'weight': 4 },
		{ 'word': 'glagolitisch', 'weight': 4 },
		{ 'word': 'ideographische', 'weight': 4 },
		{ 'word': 'katakana', 'weight': 4 },
		{ 'word': 'bopomofo', 'weight': 4 },
		{ 'word': 'i', 'weight': 4 },
		{ 'word': 'yi', 'weight': 4 },
		{ 'word': 'lisu', 'weight': 4 },
		{ 'word': 'bamum', 'weight': 4 },
		{ 'word': 'meitei', 'weight': 4 },
		{ 'word': 'mayek', 'weight': 4 },
		{ 'word': 'arabische', 'weight': 4 },
		{ 'word': 'variantenselektoren', 'weight': 4 },
		{ 'word': 'altgriechische', 'weight': 4 },
		{ 'word': 'f', 'weight': 4 },
		{ 'word': 'pahlavi', 'weight': 4 },
		{ 'word': 'gondi', 'weight': 4 },
		{ 'word': 'hmong', 'weight': 4 },
		{ 'word': 'kurzschrift', 'weight': 4 },
		{ 'word': 'notenschrift', 'weight': 4 },
		{ 'word': 'noten', 'weight': 4 },
		{ 'word': 'siyaq', 'weight': 4 },
		{ 'word': 'zusätzlicher', 'weight': 4 },
		{ 'word': 'computer', 'weight': 3 },
		{ 'word': 'enthält', 'weight': 3 },
		{ 'word': 'version', 'weight': 3 },
		{ 'word': 'konsortium', 'weight': 3 },
		{ 'word': 'alte', 'weight': 3 },
		{ 'word': 'bezeichnet', 'weight': 3 },
		{ 'word': 'nullen', 'weight': 3 },
		{ 'word': 'dabei', 'weight': 3 },
		{ 'word': 'speziell', 'weight': 3 },
		{ 'word': 'verwendung', 'weight': 3 },
		{ 'word': 'an', 'weight': 3 },
		{ 'word': 'zeichenkodierungen', 'weight': 3 },
		{ 'word': 'liegt', 'weight': 3 },
		{ 'word': 'latin', 'weight': 3 },
		{ 'word': 'zeichensätzen', 'weight': 3 },
		{ 'word': 'damit', 'weight': 3 },
		{ 'word': 'erheblich', 'weight': 3 },
		{ 'word': 'sequenzen', 'weight': 3 },
		{ 'word': 'verschiedenen', 'weight': 3 },
		{ 'word': 'kodieren', 'weight': 3 },
		{ 'word': 'to', 'weight': 3 },
		{ 'word': 'for', 'weight': 3 },
		{ 'word': 'deren', 'weight': 3 },
		{ 'word': 'indischen', 'weight': 3 },
		{ 'word': 'monate', 'weight': 3 },
		{ 'word': 'später', 'weight': 3 },
		{ 'word': 'han', 'weight': 3 },
		{ 'word': 'vereinheitlichung', 'weight': 3 },
		{ 'word': 'veröffentlichung', 'weight': 3 },
		{ 'word': 'bis', 'weight': 3 },
		{ 'word': 'zeichentabellen', 'weight': 3 },
		{ 'word': 'eigentlichen', 'weight': 3 },
		{ 'word': 'grafische', 'weight': 3 },
		{ 'word': 'früheren', 'weight': 3 },
		{ 'word': 'schriftsysteme', 'weight': 3 },
		{ 'word': 'welche', 'weight': 3 },
		{ 'word': 'reserviert', 'weight': 3 },
		{ 'word': 'engl', 'weight': 3 },
		{ 'word': 'wurden', 'weight': 3 },
		{ 'word': 'jedes', 'weight': 3 },
		{ 'word': 'bereich', 'weight': 3 },
		{ 'word': 'je', 'weight': 3 },
		{ 'word': 'lässt', 'weight': 3 },
		{ 'word': 'übersicht', 'weight': 3 },
		{ 'word': 'zugewiesen', 'weight': 3 },
		{ 'word': 'pua', 'weight': 3 },
		{ 'word': 'sein', 'weight': 3 },
		{ 'word': 'müssen', 'weight': 3 },
		{ 'word': 'haben', 'weight': 3 },
		{ 'word': 'software', 'weight': 3 },
		{ 'word': 'regeln', 'weight': 3 },
		{ 'word': 'aufnahme', 'weight': 3 },
		{ 'word': 'fonts', 'weight': 3 },
		{ 'word': 'deutschen', 'weight': 3 },
		{ 'word': 'kombination', 'weight': 3 },
		{ 'word': 'steht', 'weight': 3 },
		{ 'word': 'außerdem', 'weight': 3 },
		{ 'word': 'schriftsystemen', 'weight': 3 },
		{ 'word': 'eines', 'weight': 3 },
		{ 'word': 'seit', 'weight': 3 },
		{ 'word': 'anderem', 'weight': 3 },
		{ 'word': 'normen', 'weight': 3 },
		{ 'word': 'schriftart', 'weight': 3 },
		{ 'word': 'form', 'weight': 3 },
		{ 'word': 'glyphenvarianten', 'weight': 3 },
		{ 'word': 'ebenfalls', 'weight': 3 },
		{ 'word': 'übernommen', 'weight': 3 },
		{ 'word': 'sondern', 'weight': 3 },
		{ 'word': 'ob', 'weight': 3 },
		{ 'word': 'schriftarten', 'weight': 3 },
		{ 'word': 'hoch', 'weight': 3 },
		{ 'word': 'kodierungen', 'weight': 3 },
		{ 'word': 'thailändisch', 'weight': 3 },
		{ 'word': 'mehr', 'weight': 3 },
		{ 'word': 'buchstaben', 'weight': 3 },
		{ 'word': 'möglichkeit', 'weight': 3 },
		{ 'word': 'denen', 'weight': 3 },
		{ 'word': 'keine', 'weight': 3 },
		{ 'word': 'ohne', 'weight': 3 },
		{ 'word': 'direkte', 'weight': 3 },
		{ 'word': 'microsoft', 'weight': 3 },
		{ 'word': 'führende', 'weight': 3 },
		{ 'word': 'eingabemethode', 'weight': 3 },
		{ 'word': 'allem', 'weight': 3 },
		{ 'word': 'danach', 'weight': 3 },
		{ 'word': 'drücken', 'weight': 3 },
		{ 'word': 'hexadezimaler', 'weight': 3 },
		{ 'word': 'weiterer', 'weight': 3 },
		{ 'word': 'darin', 'weight': 3 },
		{ 'word': 'fünf', 'weight': 3 },
		{ 'word': 'sechsstelliger', 'weight': 3 },
		{ 'word': 'möglich', 'weight': 3 },
		{ 'word': 'macos', 'weight': 3 },
		{ 'word': 'tastatur', 'weight': 3 },
		{ 'word': 'hex', 'weight': 3 },
		{ 'word': 'modi', 'weight': 3 },
		{ 'word': 'office', 'weight': 3 },
		{ 'word': 'programm', 'weight': 3 },
		{ 'word': 'gtk', 'weight': 3 },
		{ 'word': 'erscheint', 'weight': 3 },
		{ 'word': 'notation', 'weight': 3 },
		{ 'word': 'kritisiert', 'weight': 3 },
		{ 'word': 'alphabetische', 'weight': 3 },
		{ 'word': 'logo', 'weight': 2 },
		{ 'word': 'legt', 'weight': 2 },
		{ 'word': 'berücksichtigt', 'weight': 2 },
		{ 'word': 'verarbeitung', 'weight': 2 },
		{ 'word': 'transformation', 'weight': 2 },
		{ 'word': 'format', 'weight': 2 },
		{ 'word': 'durchgesetzt', 'weight': 2 },
		{ 'word': 'einigen', 'weight': 2 },
		{ 'word': 'fällen', 'weight': 2 },
		{ 'word': 'umfassen', 'weight': 2 },
		{ 'word': 'sehr', 'weight': 2 },
		{ 'word': 'ascii', 'weight': 2 },
		{ 'word': 'elemente', 'weight': 2 },
		{ 'word': 'darstellbar', 'weight': 2 },
		{ 'word': 'verwenden', 'weight': 2 },
		{ 'word': 'datenaustausch', 'weight': 2 },
		{ 'word': 'erster', 'weight': 2 },
		{ 'word': 'darstellen', 'weight': 2 },
		{ 'word': 'benutzt', 'weight': 2 },
		{ 'word': 'joseph', 'weight': 2 },
		{ 'word': 'becker', 'weight': 2 },
		{ 'word': 'ursprünglichen', 'weight': 2 },
		{ 'word': 'than', 'weight': 2 },
		{ 'word': 'modern', 'weight': 2 },
		{ 'word': 'union', 'weight': 2 },
		{ 'word': 'of', 'weight': 2 },
		{ 'word': 'all', 'weight': 2 },
		{ 'word': 'be', 'weight': 2 },
		{ 'word': 'unicodes', 'weight': 2 },
		{ 'word': 'darauf', 'weight': 2 },
		{ 'word': 'texten', 'weight': 2 },
		{ 'word': 'veröffentlicht', 'weight': 2 },
		{ 'word': 'anzahl', 'weight': 2 },
		{ 'word': 'weit', 'weight': 2 },
		{ 'word': 'heutigen', 'weight': 2 },
		{ 'word': 'sollten', 'weight': 2 },
		{ 'word': 'statt', 'weight': 2 },
		{ 'word': 'liste', 'weight': 2 },
		{ 'word': 'europäischen', 'weight': 2 },
		{ 'word': 'erst', 'weight': 2 },
		{ 'word': 'teilweise', 'weight': 2 },
		{ 'word': 'sodass', 'weight': 2 },
		{ 'word': 'einzelne', 'weight': 2 },
		{ 'word': 'teile', 'weight': 2 },
		{ 'word': 'während', 'weight': 2 },
		{ 'word': 'einige', 'weight': 2 },
		{ 'word': 'zeit', 'weight': 2 },
		{ 'word': 'stellt', 'weight': 2 },
		{ 'word': 'dokumente', 'weight': 2 },
		{ 'word': 'bereit', 'weight': 2 },
		{ 'word': 'dies', 'weight': 2 },
		{ 'word': 'zwar', 'weight': 2 },
		{ 'word': 'dennoch', 'weight': 2 },
		{ 'word': 'siehe', 'weight': 2 },
		{ 'word': 'unicodeblöcke', 'weight': 2 },
		{ 'word': 'meist', 'weight': 2 },
		{ 'word': 'bestimmtes', 'weight': 2 },
		{ 'word': 'schriftsystem', 'weight': 2 },
		{ 'word': 'kodierten', 'weight': 2 },
		{ 'word': 'gebrauch', 'weight': 2 },
		{ 'word': 'jeweils', 'weight': 2 },
		{ 'word': 'nutzung', 'weight': 2 },
		{ 'word': 'innerhalb', 'weight': 2 },
		{ 'word': 'blöcken', 'weight': 2 },
		{ 'word': 'behandelt', 'weight': 2 },
		{ 'word': 'gründen', 'weight': 2 },
		{ 'word': 'codierte', 'weight': 2 },
		{ 'word': 'zugeordnet', 'weight': 2 },
		{ 'word': 'üblicherweise', 'weight': 2 },
		{ 'word': 'hexadezimal', 'weight': 2 },
		{ 'word': 'vierstellig', 'weight': 2 },
		{ 'word': 'ggf', 'weight': 2 },
		{ 'word': 'gesamte', 'weight': 2 },
		{ 'word': 'insgesamt', 'weight': 2 },
		{ 'word': 'verfügung', 'weight': 2 },
		{ 'word': 'genutzt', 'weight': 2 },
		{ 'word': 'bieten', 'weight': 2 },
		{ 'word': 'area', 'weight': 2 },
		{ 'word': 'privat', 'weight': 2 },
		{ 'word': 'hauptartikel', 'weight': 2 },
		{ 'word': 'spezielle', 'weight': 2 },
		{ 'word': 'niemals', 'weight': 2 },
		{ 'word': 'standardisierte', 'weight': 2 },
		{ 'word': 'texte', 'weight': 2 },
		{ 'word': 'anwendungen', 'weight': 2 },
		{ 'word': 'entwickelt', 'weight': 2 },
		{ 'word': 'bmp', 'weight': 2 },
		{ 'word': 'finden', 'weight': 2 },
		{ 'word': 'grundzeichen', 'weight': 2 },
		{ 'word': 'älteren', 'weight': 2 },
		{ 'word': 'gemäß', 'weight': 2 },
		{ 'word': 'position', 'weight': 2 },
		{ 'word': 'prinzipiell', 'weight': 2 },
		{ 'word': 'codiert', 'weight': 2 },
		{ 'word': 'jedem', 'weight': 2 },
		{ 'word': 'nummer', 'weight': 2 },
		{ 'word': 'verfahren', 'weight': 2 },
		{ 'word': 'varianten', 'weight': 2 },
		{ 'word': 'normalisierung', 'weight': 2 },
		{ 'word': 'kompatibilitätszeichen', 'weight': 2 },
		{ 'word': 'sicht', 'weight': 2 },
		{ 'word': 'umlaute', 'weight': 2 },
		{ 'word': 'schriftsystems', 'weight': 2 },
		{ 'word': 'entspricht', 'weight': 2 },
		{ 'word': 'bestimmten', 'weight': 2 },
		{ 'word': 'sortiert', 'weight': 2 },
		{ 'word': 'verwendeten', 'weight': 2 },
		{ 'word': 'ä', 'weight': 2 },
		{ 'word': 'internationale', 'weight': 2 },
		{ 'word': 'beide', 'weight': 2 },
		{ 'word': 'eng', 'weight': 2 },
		{ 'word': 'zusammen', 'weight': 2 },
		{ 'word': 'identisch', 'weight': 2 },
		{ 'word': 'festlegt', 'weight': 2 },
		{ 'word': 'gehört', 'weight': 2 },
		{ 'word': 'einiger', 'weight': 2 },
		{ 'word': 'dort', 'weight': 2 },
		{ 'word': 'daten', 'weight': 2 },
		{ 'word': 'gewährleisten', 'weight': 2 },
		{ 'word': 'normierung', 'weight': 2 },
		{ 'word': 'daher', 'weight': 2 },
		{ 'word': 'lateinischen', 'weight': 2 },
		{ 'word': 'unterschiedliche', 'weight': 2 },
		{ 'word': 'opentype', 'weight': 2 },
		{ 'word': 'unterschiedlicher', 'weight': 2 },
		{ 'word': 'vorkommen', 'weight': 2 },
		{ 'word': 'grapheme', 'weight': 2 },
		{ 'word': 'handelt', 'weight': 2 },
		{ 'word': 'separate', 'weight': 2 },
		{ 'word': 'anders', 'weight': 2 },
		{ 'word': 'japan', 'weight': 2 },
		{ 'word': 'verschiedener', 'weight': 2 },
		{ 'word': 'tis', 'weight': 2 },
		{ 'word': 'iscii', 'weight': 2 },
		{ 'word': 'hierbei', 'weight': 2 },
		{ 'word': 'zwei', 'weight': 2 },
		{ 'word': 'zusammengesetzt', 'weight': 2 },
		{ 'word': 'heute', 'weight': 2 },
		{ 'word': 'darüber', 'weight': 2 },
		{ 'word': 'hinaus', 'weight': 2 },
		{ 'word': 'glyphe', 'weight': 2 },
		{ 'word': 'teilmenge', 'weight': 2 },
		{ 'word': 'europa', 'weight': 2 },
		{ 'word': 'grundbuchstaben', 'weight': 2 },
		{ 'word': 'namen', 'weight': 2 },
		{ 'word': 'programmen', 'weight': 2 },
		{ 'word': 'kleiner', 'weight': 2 },
		{ 'word': 'null', 'weight': 2 },
		{ 'word': 'dezimale', 'weight': 2 },
		{ 'word': 'zeichennummer', 'weight': 2 },
		{ 'word': 'ms', 'weight': 2 },
		{ 'word': 'dos', 'weight': 2 },
		{ 'word': 'codepage', 'weight': 2 },
		{ 'word': 'einzugeben', 'weight': 2 },
		{ 'word': 'registry', 'weight': 2 },
		{ 'word': 'zuerst', 'weight': 2 },
		{ 'word': 'ziffernblock', 'weight': 2 },
		{ 'word': 'plus', 'weight': 2 },
		{ 'word': 'loslassen', 'weight': 2 },
		{ 'word': 'anschließend', 'weight': 2 },
		{ 'word': 'eingeben', 'weight': 2 },
		{ 'word': 'wobei', 'weight': 2 },
		{ 'word': 'funktioniert', 'weight': 2 },
		{ 'word': 'eingabefeld', 'weight': 2 },
		{ 'word': 'stattdessen', 'weight': 2 },
		{ 'word': 'apple', 'weight': 2 },
		{ 'word': 'aktiviert', 'weight': 2 },
		{ 'word': 'dialog', 'weight': 2 },
		{ 'word': 'hexcode', 'weight': 2 },
		{ 'word': 'per', 'weight': 2 },
		{ 'word': 'tastaturbelegung', 'weight': 2 },
		{ 'word': 'libreoffice', 'weight': 2 },
		{ 'word': 'x', 'weight': 2 },
		{ 'word': 'cursor', 'weight': 2 },
		{ 'word': 'einfügen', 'weight': 2 },
		{ 'word': 'einzufügen', 'weight': 2 },
		{ 'word': 'ermöglicht', 'weight': 2 },
		{ 'word': 'abgerufen', 'weight': 2 },
		{ 'word': 'qt', 'weight': 2 },
		{ 'word': 'programme', 'weight': 2 },
		{ 'word': 'umgebungen', 'weight': 2 },
		{ 'word': 'desktop', 'weight': 2 },
		{ 'word': 'unterstützen', 'weight': 2 },
		{ 'word': 'umschalttaste', 'weight': 2 },
		{ 'word': 'was', 'weight': 2 },
		{ 'word': 'entsprechende', 'weight': 2 },
		{ 'word': 'vim', 'weight': 2 },
		{ 'word': 'auswahl', 'weight': 2 },
		{ 'word': 'diesem', 'weight': 2 },
		{ 'word': 'linux', 'weight': 2 },
		{ 'word': 'unix', 'weight': 2 },
		{ 'word': 'bildschirm', 'weight': 2 },
		{ 'word': 'dar', 'weight': 2 },
		{ 'word': 'html', 'weight': 2 },
		{ 'word': 'xml', 'weight': 2 },
		{ 'word': 'benannte', 'weight': 2 },
		{ 'word': 'aufgrund', 'weight': 2 },
		{ 'word': 'thailändischen', 'weight': 2 },
		{ 'word': 'basiert', 'weight': 2 },
		{ 'word': 'konsonanten', 'weight': 2 },
		{ 'word': 'verwendete', 'weight': 2 },
		{ 'word': 'gewünschte', 'weight': 2 },
		{ 'word': 'portal', 'weight': 2 },
		{ 'word': 'ebene', 'weight': 2 },
		{ 'word': 'basis', 'weight': 2 },
		{ 'word': 'ipa', 'weight': 2 },
		{ 'word': 'spacing', 'weight': 2 },
		{ 'word': 'modifier', 'weight': 2 },
		{ 'word': 'letters', 'weight': 2 },
		{ 'word': 'armenisch', 'weight': 2 },
		{ 'word': 'hebräisch', 'weight': 2 },
		{ 'word': 'thaana', 'weight': 2 },
		{ 'word': 'samaritanisch', 'weight': 2 },
		{ 'word': 'mandäisch', 'weight': 2 },
		{ 'word': 'bengalisch', 'weight': 2 },
		{ 'word': 'gurmukhi', 'weight': 2 },
		{ 'word': 'gujarati', 'weight': 2 },
		{ 'word': 'oriya', 'weight': 2 },
		{ 'word': 'telugu', 'weight': 2 },
		{ 'word': 'kannada', 'weight': 2 },
		{ 'word': 'malayalam', 'weight': 2 },
		{ 'word': 'singhalesisch', 'weight': 2 },
		{ 'word': 'laotisch', 'weight': 2 },
		{ 'word': 'tibetisch', 'weight': 2 },
		{ 'word': 'ogam', 'weight': 2 },
		{ 'word': 'runen', 'weight': 2 },
		{ 'word': 'tagalog', 'weight': 2 },
		{ 'word': 'hanunóo', 'weight': 2 },
		{ 'word': 'buid', 'weight': 2 },
		{ 'word': 'tagbanuwa', 'weight': 2 },
		{ 'word': 'limbu', 'weight': 2 },
		{ 'word': 'le', 'weight': 2 },
		{ 'word': 'neu', 'weight': 2 },
		{ 'word': 'lue', 'weight': 2 },
		{ 'word': 'buginesisch', 'weight': 2 },
		{ 'word': 'lanna', 'weight': 2 },
		{ 'word': 'balinesisch', 'weight': 2 },
		{ 'word': 'batak', 'weight': 2 },
		{ 'word': 'lepcha', 'weight': 2 },
		{ 'word': 'ol', 'weight': 2 },
		{ 'word': 'chiki', 'weight': 2 },
		{ 'word': 'vedische', 'weight': 2 },
		{ 'word': 'tiefgestellte', 'weight': 2 },
		{ 'word': 'währungszeichen', 'weight': 2 },
		{ 'word': 'buchstabenähnliche', 'weight': 2 },
		{ 'word': 'mathematische', 'weight': 2 },
		{ 'word': 'technische', 'weight': 2 },
		{ 'word': 'optische', 'weight': 2 },
		{ 'word': 'zeichenerkennung', 'weight': 2 },
		{ 'word': 'rahmenzeichnung', 'weight': 2 },
		{ 'word': 'blockelemente', 'weight': 2 },
		{ 'word': 'dingbats', 'weight': 2 },
		{ 'word': 'braille', 'weight': 2 },
		{ 'word': 'tifinagh', 'weight': 2 },
		{ 'word': 'kangxi', 'weight': 2 },
		{ 'word': 'beschreibungszeichen', 'weight': 2 },
		{ 'word': 'hiragana', 'weight': 2 },
		{ 'word': 'kanbun', 'weight': 2 },
		{ 'word': 'striche', 'weight': 2 },
		{ 'word': 'ging', 'weight': 2 },
		{ 'word': 'hexagramme', 'weight': 2 },
		{ 'word': 'vai', 'weight': 2 },
		{ 'word': 'modifizierende', 'weight': 2 },
		{ 'word': 'tonzeichen', 'weight': 2 },
		{ 'word': 'syloti', 'weight': 2 },
		{ 'word': 'nagri', 'weight': 2 },
		{ 'word': 'phagspa', 'weight': 2 },
		{ 'word': 'saurashtra', 'weight': 2 },
		{ 'word': 'kayah', 'weight': 2 },
		{ 'word': 'li', 'weight': 2 },
		{ 'word': 'rejang', 'weight': 2 },
		{ 'word': 'javanisch', 'weight': 2 },
		{ 'word': 'cham', 'weight': 2 },
		{ 'word': 'viet', 'weight': 2 },
		{ 'word': 'vertikale', 'weight': 2 },
		{ 'word': 'halbe', 'weight': 2 },
		{ 'word': 'kompatibilitätsformen', 'weight': 2 },
		{ 'word': 'formvarianten', 'weight': 2 },
		{ 'word': 'halbbreite', 'weight': 2 },
		{ 'word': 'vollbreite', 'weight': 2 },
		{ 'word': 'spezielles', 'weight': 2 },
		{ 'word': 'ägäische', 'weight': 2 },
		{ 'word': 'diskos', 'weight': 2 },
		{ 'word': 'phaistos', 'weight': 2 },
		{ 'word': 'lykisch', 'weight': 2 },
		{ 'word': 'karisch', 'weight': 2 },
		{ 'word': 'koptische', 'weight': 2 },
		{ 'word': 'altitalisch', 'weight': 2 },
		{ 'word': 'gotisch', 'weight': 2 },
		{ 'word': 'altpermisch', 'weight': 2 },
		{ 'word': 'ugaritisch', 'weight': 2 },
		{ 'word': 'altpersisch', 'weight': 2 },
		{ 'word': 'mormonen', 'weight': 2 },
		{ 'word': 'shaw', 'weight': 2 },
		{ 'word': 'osmaniya', 'weight': 2 },
		{ 'word': 'osage', 'weight': 2 },
		{ 'word': 'albanisch', 'weight': 2 },
		{ 'word': 'alwanisch', 'weight': 2 },
		{ 'word': 'vithkuq', 'weight': 2 },
		{ 'word': 'kyprisch', 'weight': 2 },
		{ 'word': 'aramäisch', 'weight': 2 },
		{ 'word': 'palmyrenisch', 'weight': 2 },
		{ 'word': 'nabatäisch', 'weight': 2 },
		{ 'word': 'hatra', 'weight': 2 },
		{ 'word': 'phönizisch', 'weight': 2 },
		{ 'word': 'lydisch', 'weight': 2 },
		{ 'word': 'meroitische', 'weight': 2 },
		{ 'word': 'meroitisch', 'weight': 2 },
		{ 'word': 'demotisch', 'weight': 2 },
		{ 'word': 'kharoshthi', 'weight': 2 },
		{ 'word': 'altsüdarabisch', 'weight': 2 },
		{ 'word': 'altnordarabisch', 'weight': 2 },
		{ 'word': 'manichäisch', 'weight': 2 },
		{ 'word': 'avestisch', 'weight': 2 },
		{ 'word': 'parthisch', 'weight': 2 },
		{ 'word': 'inschriften', 'weight': 2 },
		{ 'word': 'psalter', 'weight': 2 },
		{ 'word': 'alttürkisch', 'weight': 2 },
		{ 'word': 'altungarisch', 'weight': 2 },
		{ 'word': 'hanifi', 'weight': 2 },
		{ 'word': 'rohingya', 'weight': 2 },
		{ 'word': 'rumi', 'weight': 2 },
		{ 'word': 'jesidisch', 'weight': 2 },
		{ 'word': 'altsogdisch', 'weight': 2 },
		{ 'word': 'sogdisch', 'weight': 2 },
		{ 'word': 'altuigurisch', 'weight': 2 },
		{ 'word': 'choresmisch', 'weight': 2 },
		{ 'word': 'elymäisch', 'weight': 2 },
		{ 'word': 'brahmi', 'weight': 2 },
		{ 'word': 'kaithi', 'weight': 2 },
		{ 'word': 'sorang', 'weight': 2 },
		{ 'word': 'sompeng', 'weight': 2 },
		{ 'word': 'chakma', 'weight': 2 },
		{ 'word': 'mahajani', 'weight': 2 },
		{ 'word': 'sharada', 'weight': 2 },
		{ 'word': 'singhalesische', 'weight': 2 },
		{ 'word': 'khojki', 'weight': 2 },
		{ 'word': 'multanisch', 'weight': 2 },
		{ 'word': 'khudabadi', 'weight': 2 },
		{ 'word': 'grantha', 'weight': 2 },
		{ 'word': 'newa', 'weight': 2 },
		{ 'word': 'tirhuta', 'weight': 2 },
		{ 'word': 'siddham', 'weight': 2 },
		{ 'word': 'takri', 'weight': 2 },
		{ 'word': 'ahom', 'weight': 2 },
		{ 'word': 'dogra', 'weight': 2 },
		{ 'word': 'varang', 'weight': 2 },
		{ 'word': 'kshiti', 'weight': 2 },
		{ 'word': 'dives', 'weight': 2 },
		{ 'word': 'akuru', 'weight': 2 },
		{ 'word': 'nandinagari', 'weight': 2 },
		{ 'word': 'dsanabadsar', 'weight': 2 },
		{ 'word': 'quadratschrift', 'weight': 2 },
		{ 'word': 'sojombo', 'weight': 2 },
		{ 'word': 'pau', 'weight': 2 },
		{ 'word': 'cin', 'weight': 2 },
		{ 'word': 'hau', 'weight': 2 },
		{ 'word': 'bhaiksuki', 'weight': 2 },
		{ 'word': 'marchen', 'weight': 2 },
		{ 'word': 'masaram', 'weight': 2 },
		{ 'word': 'gunjala', 'weight': 2 },
		{ 'word': 'makassar', 'weight': 2 },
		{ 'word': 'kawi', 'weight': 2 },
		{ 'word': 'frühe', 'weight': 2 },
		{ 'word': 'kypro', 'weight': 2 },
		{ 'word': 'minoisch', 'weight': 2 },
		{ 'word': 'ägyptische', 'weight': 2 },
		{ 'word': 'ägypt', 'weight': 2 },
		{ 'word': 'anatolische', 'weight': 2 },
		{ 'word': 'mro', 'weight': 2 },
		{ 'word': 'tangsa', 'weight': 2 },
		{ 'word': 'bassa', 'weight': 2 },
		{ 'word': 'vah', 'weight': 2 },
		{ 'word': 'pahawh', 'weight': 2 },
		{ 'word': 'medefaidrin', 'weight': 2 },
		{ 'word': 'pollard', 'weight': 2 },
		{ 'word': 'komponenten', 'weight': 2 },
		{ 'word': 'kitan', 'weight': 2 },
		{ 'word': 'frauenschrift', 'weight': 2 },
		{ 'word': 'duployé', 'weight': 2 },
		{ 'word': 'snamennyj', 'weight': 2 },
		{ 'word': 'byzantinische', 'weight': 2 },
		{ 'word': 'kaktovik', 'weight': 2 },
		{ 'word': 'maya', 'weight': 2 },
		{ 'word': 'xuan', 'weight': 2 },
		{ 'word': 'jing', 'weight': 2 },
		{ 'word': 'zählstabziffern', 'weight': 2 },
		{ 'word': 'signwriting', 'weight': 2 },
		{ 'word': 'nyiakeng', 'weight': 2 },
		{ 'word': 'puachue', 'weight': 2 },
		{ 'word': 'toto', 'weight': 2 },
		{ 'word': 'wancho', 'weight': 2 },
		{ 'word': 'nag', 'weight': 2 },
		{ 'word': 'mundari', 'weight': 2 },
		{ 'word': 'mende', 'weight': 2 },
		{ 'word': 'adlam', 'weight': 2 },
		{ 'word': 'osmanische', 'weight': 2 },
		{ 'word': 'arab', 'weight': 2 },
		{ 'word': 'mahjonggsteine', 'weight': 2 },
		{ 'word': 'dominosteine', 'weight': 2 },
		{ 'word': 'spielkarten', 'weight': 2 },
		{ 'word': 'smileys', 'weight': 2 },
		{ 'word': 'ziersymbole', 'weight': 2 },
		{ 'word': 'verkehrs', 'weight': 2 },
		{ 'word': 'kartensymbole', 'weight': 2 },
		{ 'word': 'alchemistische', 'weight': 2 },
		{ 'word': 'schachsymbole', 'weight': 2 },
		{ 'word': 'retrocomputer', 'weight': 2 },
		{ 'word': 'tags', 'weight': 2 },
		{ 'word': 'aussprachen', 'weight': 1 },
		{ 'word': 'amerikanisches', 'weight': 1 },
		{ 'word': 'britisches', 'weight': 1 },
		{ 'word': 'dt', 'weight': 1 },
		{ 'word': 'fest', 'weight': 1 },
		{ 'word': 'elektronisch', 'weight': 1 },
		{ 'word': 'gespeichert', 'weight': 1 },
		{ 'word': 'telefon', 'weight': 1 },
		{ 'word': 'festgelegte', 'weight': 1 },
		{ 'word': 'moderne', 'weight': 1 },
		{ 'word': 'emojis', 'weight': 1 },
		{ 'word': 'druckbare', 'weight': 1 },
		{ 'word': 'universal', 'weight': 1 },
		{ 'word': 'coded', 'weight': 1 },
		{ 'word': 'character', 'weight': 1 },
		{ 'word': 'set', 'weight': 1 },
		{ 'word': 'ucs', 'weight': 1 },
		{ 'word': 'einsen', 'weight': 1 },
		{ 'word': 'binärcode', 'weight': 1 },
		{ 'word': 'übersetzt', 'weight': 1 },
		{ 'word': 'umwandlung', 'weight': 1 },
		{ 'word': 'anzutreffen', 'weight': 1 },
		{ 'word': 'betriebssystemen', 'weight': 1 },
		{ 'word': 'programmiersprachen', 'weight': 1 },
		{ 'word': 'einfach', 'weight': 1 },
		{ 'word': 'inhaltsverzeichnis', 'weight': 1 },
		{ 'word': 'geschichte', 'weight': 1 },
		{ 'word': 'herkömmliche', 'weight': 1 },
		{ 'word': 'zeichensätze', 'weight': 1 },
		{ 'word': 'begrenzten', 'weight': 1 },
		{ 'word': 'vorrat', 'weight': 1 },
		{ 'word': 'westlichen', 'weight': 1 },
		{ 'word': 'grenze', 'weight': 1 },
		{ 'word': 'meistens', 'weight': 1 },
		{ 'word': 'codepositionen', 'weight': 1 },
		{ 'word': 'bekannten', 'weight': 1 },
		{ 'word': 'positionen', 'weight': 1 },
		{ 'word': 'bekannt', 'weight': 1 },
		{ 'word': 'ebcdic', 'weight': 1 },
		{ 'word': 'abzug', 'weight': 1 },
		{ 'word': 'erlauben', 'weight': 1 },
		{ 'word': 'gleichzeitige', 'weight': 1 },
		{ 'word': 'weniger', 'weight': 1 },
		{ 'word': 'selben', 'weight': 1 },
		{ 'word': 'behilft', 'weight': 1 },
		{ 'word': 'unterschiedlichen', 'weight': 1 },
		{ 'word': 'behinderte', 'weight': 1 },
		{ 'word': 'internationalen', 'weight': 1 },
		{ 'word': 'jahren', 'weight': 1 },
		{ 'word': 'versuch', 'weight': 1 },
		{ 'word': 'escape', 'weight': 1 },
		{ 'word': 'wechseln', 'weight': 1 },
		{ 'word': 'system', 'weight': 1 },
		{ 'word': 'setzte', 'weight': 1 },
		{ 'word': 'ostasien', 'weight': 1 },
		{ 'word': 'xerox', 'weight': 1 },
		{ 'word': 'schrieb', 'weight': 1 },
		{ 'word': 'ersten', 'weight': 1 },
		{ 'word': 'entwurf', 'weight': 1 },
		{ 'word': 'universalen', 'weight': 1 },
	],
}

export default config
