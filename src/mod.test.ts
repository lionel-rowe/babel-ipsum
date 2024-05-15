import { BabelIpsum } from './mod.ts'
import { configs } from './configs.ts'
import { assertEquals } from '@std/assert'

// test util to ensure deterministic results during testing of backoff function by polyfilling Math.random
function prngMulberry32(seed: number) {
	return function () {
		let t = (seed += 0x6d2b79f5)
		t = Math.imul(t ^ (t >>> 15), t | 1)
		t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
		return ((t ^ (t >>> 14)) >>> 0)
	}
}

// random seed generated with crypto.getRandomValues(new Uint32Array(1))[0]
const SEED = 1381655959

Deno.test(BabelIpsum.name, async (t) => {
	const tests: Record<keyof typeof configs, { expected: string }> = {
		lorem: {
			expected:
				`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi volutpat iaculis, donec ante suspendisse lorem mus leo; suspendisse placerat donec, et et mauris id ad vulputate eleifend orci porttitor! Turpis vivamus iaculis, ridiculus pretium, dolor lacus aliquet primis dui. Consectetur auctor elit, morbi laoreet, turpis dignissim viverra: odio leo euismod cras blandit nam pharetra. Cras urna tellus, bibendum eleifend ac ante cum sit donec ipsum erat torquent quisque vulputate dui taciti inceptos risus. Blandit purus mattis rutrum; gravida eu porttitor cum pulvinar malesuada nulla pulvinar: morbi nascetur amet.

Risus dolor, nulla gravida: porttitor, vulputate, nisl tempor vulputate. Ultrices nisl ligula eget cras aliquam aliquam commodo quam posuere egestas lacinia blandit ultricies congue rutrum, mus ultrices rutrum purus magna blandit diam. Lacus, sodales cubilia, penatibus inceptos: felis, integer litora lacinia semper himenaeos at sem pharetra vehicula, sociis. Risus, enim habitant purus proin mattis amet donec torquent at enim quisque pellentesque sem.

Mattis lorem torquent, etiam nostra facilisi habitasse rutrum blandit vitae feugiat euismod, urna parturient ad ligula leo: tincidunt duis. Felis dapibus eros, elit hendrerit sagittis nullam massa, vel parturient, consequat faucibus bibendum tortor morbi imperdiet iaculis, nascetur rutrum eu molestie est. Feugiat ultrices massa, suscipit turpis phasellus vestibulum proin eget cum. Hac tempus orci nisl, in molestie justo accumsan egestas facilisi ipsum ante feugiat ultricies, pulvinar quam aliquam auctor semper, nascetur congue laoreet ad, egestas.

Aliquam in eget accumsan, vehicula penatibus dignissim tortor rutrum vitae maecenas primis egestas ac. Fusce, fermentum sodales sem consequat cum, etiam class, vitae commodo proin commodo praesent semper arcu metus dapibus tortor justo hendrerit mauris. Tellus sapien curae venenatis quis ipsum non magnis. Iaculis purus congue at duis: vel accumsan, id feugiat, sapien quis cubilia. Egestas volutpat scelerisque morbi ornare posuere mauris cras dictumst lacinia conubia, enim volutpat potenti blandit tortor suspendisse himenaeos faucibus, massa dictum.`,
		},
		en: {
			expected:
				`Thousands software common, s is on as continued not; on outside s, and and encodes including the software systems large ultimately! Majority consideration common, supplanted more, s are note than major. Designed encoding version, continued unified, majority world contemporary: large not used support maintained development popularization. Support web architectures, encoding systems unicode is of each s symbols defines vast supplanted software major computer punctuation previous. Maintained has system environment; technical used ultimately use million given adoption million: continued development is. Maintained widespread web characters software web; most supplanted was; supplanted internet moreover not.

Support standard note by has capable writing are. Text, in moreover vast incompatible, writing literary to standard. In not pages specific relevant within contemporary most thousands moreover other japan capable character used contexts, pages locales previous, defines contexts million.

System is s vast text defines largely for character supplanted system as vast, scripts widespread various contexts environment maintained consideration literary used, web. Architectures continued are contemporary, all literary ordinary written characters, version many environment adoption system, relevant for, designed various encoding. Note systems different web common maintained initial world largely literary most system, on majority popularization become than writing of majority symbols, different a relevant. Emoji symbols formally writing various symbols is literary most, million has standard encoding character, development consortium unified formally. More common including any in majority, within conducted technical, encodes each.

Numerals supplanted not sets technical, literary different character to use, scripts maintained, consideration by than by. Writing more unicode largely widespread, moreover technical development any computer myriad written become has symbols moreover any version various characters. Text major: relevant formally, including literary, myriad largely use supplanted other; supplanted within japan formally part characters punctuation has. To, defines software capable maintained majority on common various, given all literary encode. Sets vast for s including, each than conducted outside thousands encodes computer numerals part. Of consortium: many standard written ordinary vast the relevant responsible encode, in to within literary academic, not become!`,
		},
		zh: {
			expected:
				`月普遍不适和为兼容修超过至今、兼容细节和跨平台目前用于其格式间资料方式！过程操作不适，大准则处理书本的拆显示。技术译转换录对外本地集最，方法至今解决世界上万国万个关于。世界上置对应作间称为名称系统应用处理发展更与特性格式显示完整环境等等。万国绘制新的此外、让问题方式文字序加入盖序，录第中文。万国除了置提供普遍置：可特性字形、大科技指定仍在。

大部分所用所用编码双向如减轻也。码以代码本地帮助在负责整理联盟。通用仍在语言个编对外采用可月代码随着及规范师问题既有简称国际小写字母困扰既有绘制。

目前名称和与码困扰方向品者大新的修与平台涵方案既有此外万国操作负责问题置。各个超过也采用通用维护非能提供切换空间参考视觉更多简称出版，业界由作。中文间纳入置亦万国包含来文本维护可更多即过程各以及测在系统很多发展认可统一简称。公布同时标准减轻方案发展为维护扩展，序双向联盟译设计第信息对外其。拆有限不适版本以过程对外不取代最新备受。

语特性至今师致力负责纳入设计业界文字乱码字符现代是测编码。减轻准则全文本涵除了让十万个版本对应图像电脑程文本而代码都转换由提供。又不但，简称标准不适负责图像文本大部分大随着，大发表呈现其只是提供伴绘制。了困扰普遍化字符本地即有限由加入通用负责于。师与品和用于备受分不书写月最新完整语只是。使得技术，空间联盟能营利软件机构编外广泛通用整理至今负责致力至今现代！`,
		},
		ar: {
			expected:
				`وينشر التشغيل والتصيير الترميز تمثيل وعولمة اليسار الاسم العربية وعولمة المعياري الترميز وعدد الأمور العالمي وثنائية معيار التشغيل وسرد استبدال حيث. البرنامج جافا والتصيير تتوافق الكثير الترميز كتابات من الترميزات ترميزات. متناسقة نظم لخصائص الاسم اليمين البرنامج ونهج وأنظمة إلى العربية مثل محرف الكتابة يطمح محلها. محرف الحديثة برمجيات نظم وسرد بالإنجليزية تمثيل مخططات أطقم الترميز يحتوي البيانات تطبيق ولا التشغيل ترميزات وعولمة لعرض البيئات. الكتابة محدودة طقم متعددة الحروف المتعلقة حيث وطقم محدودة بالتوازي تطوير محدودة الاسم يطمح تمثيل. الكتابة تنسق الحديثة المرجعية وأنظمة لغة الحديثة ولا إلى تتوافق التقنيات التي العربية.

محرف الحواسيب الحواسيب ومعالجتها السعة أن المحارف على. المكتوبة كمرجع التي البرنامج أدى المحارف تطبيع يونيكود الحواسيب. مرئي العربية القابلة لليمين للامتداد اليمين وأنظمة التقنيات وينشر التي الذي للتحويل أن توحيد المتعلقة لوحداتها القابلة استخدامه تتوافق البيانات لوحداتها محدودة.

العالمي تمثيل الترميز تطبيق المكتوبة البيانات والمدى حاليا نجاح ولا طقم اليسار تطبيق الأمور تنسق خصائص لوحداتها متعددة الكتابة البرمجة تطبيع مثل الحديثة. الحاسوب الاسم على وأنظمة مرئي النص وقواعد الرموز المرجعية لخصائص الأولية متعددة تطوير طقم للامتداد حاليا يتكون خصائص نظم. من وسرد وغلبة لغة والترتيب الكتابة محلها في والمدى تطبيع التقنيات طقم توطين البرنامج وتنسيق البرمجة الحالية المعيارية مخططات العديد يحتوي انتشار النصوص للامتداد. شكل على هو المحارف خصائص يحتوي النصوص النص الحديثة محدودة السعة الحواسيب بأغلب توحيد يطمح بصورة اليمين معيار. الترميزات والترتيب والتصيير يطور مرئي البرنامج اليمين غير الحروف العالمي انتشار.

الاتجاه ولا لليسار توحيد وفك تطبيع وغلبة نجاح يتكون وطقم الأمور الكتابة البرمجة ومعالجتها الحالية ومعالجتها. المحارف الكثير بالإنجليزية والمدى تطوير تنسق الحروف مجمع يطور برمجيات اللغات الرموز ولغة والمدى يحتوي التي يطور لخصائص خصائص المرجعية. بأغلب ترميزات للامتداد هو والتصيير تطبيع اللغات والمدى وطقم ولا الذي تتوافق لليسار للتحويل معيار الربحية المرجعية لعرض السعة. يونيكود البيانات التشغيل أن الكتابة البرنامج توطين والترتيب خصائص بالتوازي مرئي تطبيع وجرى. توحيد تطبيق حاليا الترميز والتصيير انتشار الترميزات المنظمة المعياري شكل العالمي وعولمة الاتجاه الربحية. مخططات متناسقة الأولية يمكن كمرجع وقواعد تطبيق يمكن للامتداد الموجودة الحاسوب مرئي يونيكود لليسار تطبيع وفك العربية البرمجة.`,
		},
		es: {
			expected:
				`¡Consorcio modernos trata, define facilitar entornos marcas distinto mismo; entornos individual define, código código utc ideográficos estándar modernos símbolo berkeley estrecha! Dominante java trata, creación desde, unicidad pueden diseñado acuerdo cada. Disciplinas transmisión e, distinto mezclar, siendo universalidad sistemas: universidad mismo incluye lenguas visualización grado a. Lenguas software convertido, transmisión mediante es para término cuales unicidad que identificador extenso puntos modernos cada plurilingües forma sido. Y estándares committee proyecto; categoría point estrecha término sus por facebook sus: distinto implicación para. Visualización google software numérico operativos software; local puntos universidad; creación internacionalización oracle texto.

Lenguas caracteres caracteres textos contienen relación o se. Tratamiento, objetivos oracle siendo relevancia, o correcto además codificación. Objetivos texto adoptado control tecnologías en sistemas adaptación consorcio sap equivalente mantiene iso esquemas point direccionalidad, adoptado tamaño ha, e direccionalidad estándares.

Utc para define extenso tratamiento identificador mismos profesionales reemplazar creación committee marcas extenso, code google otras mayúsculas proyecto visualización xml correcto incluye, software. Esquema distinto se sistemas, perseguidos como uso los numérico, nombre otros proyecto facebook committee, diversas india, técnicas informaciones transmisión. Diseñado mediante significativas software trata visualización a uniformidad mismos como adaptación committee, compatibilidad siendo título recientes sincronizar o término dominante significa, limitaciones el diversas. Del significa un carácter otras que facilitar como local, sus estándares codificación informático esquemas, implicación idiomas mezclar estándar. Desde atributos alfabéticos mantenido objetivos dominante, en apple categoría, integrado presentaban.

Símbolos puntos mismo existentes escritura, correcto significativas reemplazar técnicas término, code visualización, xml textos sincronizar textos. Carácter desde unicode contienen google, sap categoría implicación mantenido convertido gran los recientes contienen que oracle por nombre informaciones numérico. Informático cada: diversas un, alfabéticos como, gran mismos muertas creación lo; creación en estrecha un ibm numérico equivalente estándares. Clásicos, e modernos iso visualización siendo entornos atributos informaciones, technical perseguidos como más. Existentes extenso india define alfabéticos, presentaban acuerdo apple individual del integrado plurilingües símbolos ibm. ¡Proviene idiomas: otros codificación tres uso completo de diversas gobierno más, perseguidos además mismo correcto sistema, mismo xml!`,
		},
	}

	for (const [key, test] of Object.entries(tests)) {
		await t.step(key, () => {
			const ipsum = new BabelIpsum(configs[key as keyof typeof configs])

			const randUint32 = prngMulberry32(SEED)
			ipsum.random = () => randUint32() / 0x100000000

			const actual = ipsum.paragraphs({
				overrideFirstSentenceIfAvailable: true,
				paragraphs: { min: 3, max: 5 },
				sentences: { min: 3, max: 6 },
				words: { min: 8, max: 25 },
			})

			assertEquals(actual, test.expected)
		})
	}
})
