import { type BabelIpsum } from './mod.ts'

type TextData = {
	url?: string | URL
	source: string
	script: string
	locale: string | Intl.Locale
}

export function textDataToVocabulary({ locale, script, source }: TextData): string[] {
	const set = new Set<string>()
	const skipper = new RegExp(String.raw`\P{scx=${script}}+`, 'gu')

	for (const s of new Intl.Segmenter(locale, { granularity: 'word' }).segment(source.replaceAll(skipper, '\n'))) {
		if (s.isWordLike && /\p{L}/u.test(s.segment)) set.add(s.segment.toLocaleLowerCase(locale))
	}

	return [...set]
}

export const configs = {
	lorem: {
		locale: 'la-XX',
		script: 'Latn',
		source:
			`a ac accumsan ad adipiscing aenean aliquam aliquet amet ante aptent arcu at auctor bibendum blandit class commodo condimentum congue consectetur consequat conubia convallis cras cubilia cum curabitur curae dapibus diam dictum dictumst dignissim dolor donec dui duis egestas eget eleifend elementum elit enim erat eros est et etiam eu euismod facilisi faucibus felis fermentum feugiat fringilla fusce gravida habitant habitasse hac hendrerit himenaeos iaculis id imperdiet in inceptos integer interdum ipsum justo lacinia lacus laoreet lectus leo ligula litora lobortis lorem luctus maecenas magna magnis malesuada massa mattis mauris metus mi molestie mollis montes morbi mus nam nascetur natoque nec neque netus nisi nisl non nostra nulla nullam nunc odio orci ornare parturient pellentesque penatibus per pharetra phasellus placerat platea porta porttitor posuere potenti praesent pretium primis proin pulvinar purus quam quis quisque rhoncus ridiculus risus rutrum sagittis sapien scelerisque sed sem semper senectus sit sociis sociosqu sodales sollicitudin suscipit suspendisse taciti tellus tempor tempus tincidunt torquent tortor turpis ullamcorper ultrices ultricies urna varius vehicula vel velit venenatis vestibulum vitae vivamus viverra volutpat vulputate`,
		defaultFirstSentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
	},
	en: {
		locale: 'en-US',
		script: 'Latn',
		source:
			`Unicode, formally The Unicode Standard,[note 1] is a text encoding standard maintained by the Unicode Consortium designed to support the use of text written in all of the world's major writing systems.Version 15.1 of the standard[A] defines 149813 characters[3] and 161 scripts used in various ordinary, literary, academic, and technical contexts.

Many common characters, including numerals, punctuation, and other symbols, are unified within the standard and are not treated as specific to any given writing system.Unicode encodes thousands of emoji, with the continued development thereof conducted by the Consortium as a part of the standard.[4] Moreover, the widespread adoption of Unicode was in large part responsible for the initial popularization of emoji outside of Japan.Unicode is ultimately capable of encoding more than 1.1 million characters.

Unicode has largely supplanted the previous environment of myriad incompatible character sets, each used within different locales and on different computer architectures.Unicode is used to encode the vast majority of text on the Internet, including most web pages, and relevant Unicode support has become a common consideration in contemporary software development.`,
	},
	zh: {
		locale: 'zh-CN',
		script: 'Han',
		// https://zh.wikipedia.org/wiki/Unicode
		source:
			`Unicode，全称为Unicode标准（The Unicode Standard），其官方机构Unicode联盟所用的中文名称为统一码[1]，又译作万国码、统一字符码、统一字符编码[2]，是信息技术领域的业界标准，其整理、编码了世界上大部分的文字系统，使得电脑能以通用划一的字符集来处理和显示文字，不但减轻在不同编码系统间切换和转换的困扰，更提供了一种跨平台的乱码问题解决方案。Unicode由非营利机构Unicode联盟（Unicode Consortium）负责维护，该机构致力让Unicode标准取代既有的字符编码方案，因为既有方案编码空间有限，亦不适用于多语环境。

Unicode伴随着通用字符集ISO/IEC 10646的标准而发展，同时也以书本的形式[3]对外发表。Unicode至今仍在不断增修，每个新版本都加入更多新的字符。目前最新的版本为2022年9月公布的15.0.0[4]，已经收录超过14万个字符（第十万个字符在2005年获采纳）。Unicode标准不仅仅只是为文字指定代码。除了涵盖视觉上的字形、编码方法、标准的字符编码资料外，联盟官方出版品还包含了关于各书写系统的细节及呈现方式，如规范化的准则、拆分、测序、绘制、双向文本显示、书写方向、字符特性（如大小写字母）等等。此外还提供参考资料和视觉图像，以帮助开发者和设计师正确应用标准。

Unicode备受认可，为ISO纳入国际标准，成为通用字符集，即 ISO/IEC 10646。Unicode兼容ISO/IEC 10646，能完整对应各个版本标准[5][6]。Unicode广泛应用于电脑软件的国际化与本地化过程。很多新科技，如可扩展置标语言（Extensible Markup Language，简称：XML）、Java编程语言以及现代操作系统，都采用Unicode来编码。Unicode最普遍的编码格式是和ASCII兼容的UTF-8，以及和UCS-2兼容的UTF-16。`,
		wordSeparators: [{ weight: 5, separator: '' }, { weight: 0.2, separator: '，' }, {
			weight: 0.02,
			separator: '：',
		}, { weight: 0.02, separator: '、' }],
		sentenceWrappers: [{ weight: 1, start: '', end: '。' }, { weight: 0.05, start: '', end: '？' }, {
			weight: 0.05,
			start: '',
			end: '！',
		}],
	},
	ar: {
		locale: 'ar-EG',
		script: 'Arab',
		// https://ar.wikipedia.org/wiki/Unicode
		source:
			`) (بالإنجليزية: Unicode)‏ هو معيار يمكن الحواسيب من تمثيل النصوص المكتوبة بأغلب نظم الكتابة ومعالجتها، بصورة متناسقة. يتكون يونيكود من 100,000 محرف، وطقم من مخططات الرموز كمرجع مرئي، ونهج في الترميز، وطقم من ترميزات المحارف المعيارية، وسرد لخصائص المحارف، وطقم من البيانات المرجعية، وعدد من الأمور المتعلقة مثل خصائص المحارف، وقواعد تطبيع النص، وفك الحروف لوحداتها الأولية، والترتيب، والتصيير، وثنائية الاتجاه (لعرض النصوص الذي يحتوي على كتابات من اليمين لليسار، مثل العربية، مع كتابات من اليسار لليمين، مثل اللاتينية). يطور يونيكود بالتوازي مع معيار طقم المحارف العالمي، وينشر على شكل كتاب يحمل الاسم معيار يونيكود (Unicode Standard).

يطمح مجمع يونيكود -المنظمة غير الربحية التي تنسق تطوير يونيكود- في النهاية إلى استبدال ترميزات المحارف الموجودة حاليا، ليحل محلها يونيكود وتنسيق يونيكود المعياري للتحويل (Unicode Transformation Format ،UTF)، حيث أن الكثير من الترميزات الحالية محدودة السعة والمدى، ولا تتوافق مع البيئات متعددة اللغات.

أدى نجاح يونيكود في توحيد أطقم المحارف إلى انتشار وغلبة استخدامه في توطين وعولمة برمجيات الحاسوب. وجرى تطبيق البرنامج في العديد من التقنيات الحديثة، مثل لغة الترميز القابلة للامتداد، ولغة البرمجة جافا وأنظمة التشغيل الحديثة.`,
		wordSeparators: [{ weight: 1, separator: ' ' }],
		sentenceWrappers: [{ weight: 1, start: '', end: '. ' }],
	},
	es: {
		locale: 'es-ES',
		script: 'Latn',
		// https://es.wikipedia.org/wiki/Unicode
		source:
			`Unicode es un estándar de codificación de caracteres diseñado para facilitar el tratamiento informático, transmisión, y visualización de textos de numerosos idiomas y disciplinas técnicas, además de textos clásicos de lenguas muertas. El término Unicode proviene de los tres objetivos perseguidos: universalidad, uniformidad, y unicidad.1

Unicode define cada carácter o símbolo mediante un nombre e identificador numérico, el punto de código (code point). Además incluye otras informaciones para el uso correcto de cada carácter, como sistema de escritura, categoría, direccionalidad, mayúsculas y otros atributos. Unicode trata los caracteres alfabéticos, ideográficos y símbolos de forma equivalente, lo que significa que se pueden mezclar en un mismo texto sin utilizar marcas o caracteres de control.2

Este estándar es mantenido por el Unicode Technical Committee (UTC), integrado en el Consorcio Unicode, del que forman parte con distinto grado de implicación empresas como: Microsoft, Apple, Adobe, IBM, Oracle, SAP, Google o Facebook, instituciones como la Universidad de Berkeley, o el Gobierno de la India y profesionales y académicos a título individual. El Unicode Consortium mantiene estrecha relación con ISO/IEC, con la que mantiene desde 1991 el acuerdo de sincronizar sus estándares que contienen los mismos caracteres y puntos de código.4

La creación de Unicode ha sido un proyecto de gran relevancia con el objetivo de reemplazar los esquemas de codificación de caracteres existentes, los cuales presentaban limitaciones significativas en tamaño y compatibilidad con entornos plurilingües. Unicode se ha convertido en el esquema de codificación de caracteres más completo y extenso, siendo el dominante en la internacionalización y adaptación local del software informático. Este estándar ha sido ampliamente adoptado en diversas tecnologías recientes, como XML, Java y sistemas operativos modernos.`,
		sentenceWrappers: [{ weight: 1, start: '', end: '. ' }, { weight: 0.05, start: '¿', end: '? ' }, {
			weight: 0.05,
			start: '¡',
			end: '! ',
		}],
	},
} satisfies Record<string, ConstructorParameters<typeof BabelIpsum>[0]>

export const vocabularies = Object.fromEntries(
	Object.entries(configs).map(([k, v]) => [k, textDataToVocabulary(v)]),
) as Record<keyof typeof configs, string[]>
