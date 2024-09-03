import { parse } from '@std/jsonc'
import { join } from '@std/path'

const inDir = './src/configs'
const outPath = './locales'
const denoDotJsoncPath = './deno.jsonc'

const exportLocales = (await Array.fromAsync(Deno.readDir(inDir)))
	.filter((x) => x.isFile)
	.map((x) => x.name)
	.sort((a, b) => a.localeCompare(b))

const exportsObj = Object.fromEntries(
	exportLocales.map((k) => ['./' + join(outPath, k.split('.')[0]!), './' + join(inDir, k)]),
)

const denoDotJsonc = parse(await Deno.readTextFile(denoDotJsoncPath)) as {
	exports: Record<string, string>
}

denoDotJsonc.exports = {
	...denoDotJsonc.exports,
	...exportsObj,
}

await Deno.writeTextFile(denoDotJsoncPath, JSON.stringify(denoDotJsonc, null, '\t') + '\n')
