import { load } from 'cheerio'
import { AnchorMe } from 'irregex/matchers/anchorme.ts'

// // TODO: add 'tr', 'th', 'vi', 'cs', 'ru', 'de'
export const locales = ['en', 'es', 'zh', 'ar'] as const
export type Locale = typeof locales[number]

const configs = Object.fromEntries(
	await Promise.all(locales.map(async (locale) => {
		const url = `https://${locale}.wikipedia.org/wiki/Unicode`
		const res = await fetch(url)
		const $ = load(await res.text())

		const $content = $('#mw-content-text, .mw-body-content').eq(0)

		$content.find('script, style, noscript, .listaref, ul, ol, table').remove()

		const content = new AnchorMe()[Symbol.replace]($content.text(), '')

		return [locale, { content, url }] as const
	})),
) as Record<Locale, { content: string; url: string }>

await Deno.writeTextFile('./scripts/scraped/all.json', JSON.stringify(configs, null, '\t') + '\n')
