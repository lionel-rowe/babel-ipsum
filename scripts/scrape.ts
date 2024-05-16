import { load } from 'cheerio'
import { AnchorMe } from 'irregex/matchers/anchorme.ts'

// // TODO: add 'tr', 'th', 'vi', 'cs', 'ru', 'de'
export const locales = ['lorem', 'en', 'es', 'zh', 'ar'] as const
export type Locale = typeof locales[number]
type ScrapeConfig = {
	url: string | URL
	selector: string
	rejector?: string
	prepend?: string
}
function wikiConfig(locale: string): ScrapeConfig {
	return {
		url: `https://${locale}.wikipedia.org/wiki/Unicode`,
		selector: '#mw-content-text, .mw-body-content',
		rejector: 'script, style, noscript, .listaref, ul, ol, table',
	}
}

const scrapeConfigs: Record<Locale, ScrapeConfig> = {
	lorem: {
		url: 'https://la.wikisource.org/wiki/De_finibus_bonorum_et_malorum/Liber_Primus',
		selector: '#mw-content-text .text',
		prepend: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	en: wikiConfig('en'),
	es: wikiConfig('es'),
	zh: wikiConfig('zh'),
	ar: wikiConfig('ar'),
}

const configs = Object.fromEntries(
	await Promise.all(
		Object.entries(scrapeConfigs).map(async ([locale, config]) => {
			const { url, selector, rejector, prepend } = config
			const res = await fetch(url)
			const $ = load(await res.text())

			const $content = $(selector).eq(0)
			$content.find(rejector).remove()

			const content = [
				prepend,
				new AnchorMe()[Symbol.replace]($content.text(), ''),
			].filter(Boolean).join('\n\n')

			return [locale, { content, url }] as const
		}),
	),
) as Record<Locale, { content: string; url: string }>

await Deno.writeTextFile('./scripts/scraped/all.json', JSON.stringify(configs, null, '\t') + '\n')
