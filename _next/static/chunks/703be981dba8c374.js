(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,42141,e=>{"use strict";var t=e.i(43476);e.s(["LessonContent",0,({content:e})=>{let s=e.split("\n"),i=[],a=!1,n=[],r=!1,l=[],o=()=>{r&&l.length>0&&(i.push((0,t.jsx)("ul",{className:"list-disc list-inside space-y-2 my-4 text-gray-700",children:l},`list-${i.length}`)),l=[],r=!1)},c=e=>e.includes("**")?e.split(/\*\*(.+?)\*\*/).map((e,s)=>s%2==1?(0,t.jsx)("strong",{className:"text-gray-900",children:e},s):e):e;return s.forEach((e,s)=>{if(e.startsWith("```"))return void(a?(i.push((0,t.jsx)("pre",{className:"bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto my-4 font-mono text-sm",children:(0,t.jsx)("code",{children:n.join("\n")})},`code-${s}`)),n=[],a=!1):(o(),a=!0));if(a)return void n.push(e);if(e.startsWith("# ")){o(),i.push((0,t.jsx)("h1",{className:"text-3xl font-bold text-gray-800 mt-8 mb-4",children:e.replace("# ","")},`h1-${s}`));return}if(e.startsWith("## ")){o(),i.push((0,t.jsx)("h2",{className:"text-2xl font-bold text-gray-800 mt-6 mb-3",children:e.replace("## ","")},`h2-${s}`));return}if(e.startsWith("### ")){o(),i.push((0,t.jsx)("h3",{className:"text-xl font-bold text-gray-800 mt-4 mb-2",children:e.replace("### ","")},`h3-${s}`));return}if(""===e.trim())return void o();if(e.startsWith("- ")){r=!0;let i=e.substring(2),a=i.match(/^([✅❌⚠️🔴🟢🟡])\s*\*\*(.+?)\*\*\s*(.*)?$/);if(a){let[,e,i,n]=a;l.push((0,t.jsxs)("li",{className:"ml-2",children:[(0,t.jsx)("span",{className:"mr-2",children:e}),(0,t.jsx)("strong",{className:"text-gray-900",children:i}),n&&(0,t.jsxs)("span",{className:"text-gray-700",children:[" ",n]})]},`item-${s}`));return}if(/^[✅❌⚠️🔴🟢🟡]/.test(i)){let e=i.charAt(0),a=i.substring(1).trim();l.push((0,t.jsxs)("li",{className:"ml-2",children:[(0,t.jsx)("span",{className:"mr-2",children:e}),(0,t.jsx)("span",{children:c(a)})]},`item-${s}`));return}let n=i.match(/^\*\*(.+?)\*\*\s*[—-]\s*(.+)$/);if(n){let[,e,i]=n;l.push((0,t.jsxs)("li",{className:"ml-2",children:[(0,t.jsx)("strong",{className:"text-gray-900",children:e}),(0,t.jsxs)("span",{className:"text-gray-700",children:[" — ",i]})]},`item-${s}`));return}return i.startsWith("**")?void l.push((0,t.jsx)("li",{className:"ml-2",children:c(i)},`item-${s}`)):void l.push((0,t.jsx)("li",{className:"ml-2",children:c(i)},`item-${s}`))}o(),i.push((0,t.jsx)("p",{className:"text-gray-700 my-2 leading-relaxed",children:c(e)},`p-${s}`))}),o(),(0,t.jsx)("div",{className:"prose prose-lg max-w-none",children:i})}])},88653,e=>{"use strict";e.i(47167);var t=e.i(43476),s=e.i(71645),i=e.i(31178),a=e.i(47414),n=e.i(74008),r=e.i(21476),l=e.i(72846),o=s,c=e.i(37806);function d(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}class m extends o.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent&&!1!==this.props.pop){let e=t.offsetParent,s=(0,l.isHTMLElement)(e)&&e.offsetWidth||0,i=(0,l.isHTMLElement)(e)&&e.offsetHeight||0,a=this.props.sizeRef.current;a.height=t.offsetHeight||0,a.width=t.offsetWidth||0,a.top=t.offsetTop,a.left=t.offsetLeft,a.right=s-a.width-a.left,a.bottom=i-a.height-a.top}return null}componentDidUpdate(){}render(){return this.props.children}}function x({children:e,isPresent:i,anchorX:a,anchorY:n,root:r,pop:l}){let x=(0,o.useId)(),p=(0,o.useRef)(null),h=(0,o.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:u}=(0,o.useContext)(c.MotionConfigContext),g=function(...e){return s.useCallback(function(...e){return t=>{let s=!1,i=e.map(e=>{let i=d(e,t);return s||"function"!=typeof i||(s=!0),i});if(s)return()=>{for(let t=0;t<i.length;t++){let s=i[t];"function"==typeof s?s():d(e[t],null)}}}}(...e),e)}(p,e.props?.ref??e?.ref);return(0,o.useInsertionEffect)(()=>{let{width:e,height:t,top:s,left:o,right:c,bottom:d}=h.current;if(i||!1===l||!p.current||!e||!t)return;let m="left"===a?`left: ${o}`:`right: ${c}`,g="bottom"===n?`bottom: ${d}`:`top: ${s}`;p.current.dataset.motionPopId=x;let f=document.createElement("style");u&&(f.nonce=u);let j=r??document.head;return j.appendChild(f),f.sheet&&f.sheet.insertRule(`
          [data-motion-pop-id="${x}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${m}px !important;
            ${g}px !important;
          }
        `),()=>{j.contains(f)&&j.removeChild(f)}},[i]),(0,t.jsx)(m,{isPresent:i,childRef:p,sizeRef:h,pop:l,children:!1===l?e:o.cloneElement(e,{ref:g})})}let p=({children:e,initial:i,isPresent:n,onExitComplete:l,custom:o,presenceAffectsLayout:c,mode:d,anchorX:m,anchorY:p,root:u})=>{let g=(0,a.useConstant)(h),f=(0,s.useId)(),j=!0,y=(0,s.useMemo)(()=>(j=!1,{id:f,initial:i,isPresent:n,custom:o,onExitComplete:e=>{for(let t of(g.set(e,!0),g.values()))if(!t)return;l&&l()},register:e=>(g.set(e,!1),()=>g.delete(e))}),[n,g,l]);return c&&j&&(y={...y}),(0,s.useMemo)(()=>{g.forEach((e,t)=>g.set(t,!1))},[n]),s.useEffect(()=>{n||g.size||!l||l()},[n]),e=(0,t.jsx)(x,{pop:"popLayout"===d,isPresent:n,anchorX:m,anchorY:p,root:u,children:e}),(0,t.jsx)(r.PresenceContext.Provider,{value:y,children:e})};function h(){return new Map}var u=e.i(64978);let g=e=>e.key||"";function f(e){let t=[];return s.Children.forEach(e,e=>{(0,s.isValidElement)(e)&&t.push(e)}),t}let j=({children:e,custom:r,initial:l=!0,onExitComplete:o,presenceAffectsLayout:c=!0,mode:d="sync",propagate:m=!1,anchorX:x="left",anchorY:h="top",root:j})=>{let[y,b]=(0,u.usePresence)(m),N=(0,s.useMemo)(()=>f(e),[e]),w=m&&!y?[]:N.map(g),v=(0,s.useRef)(!0),k=(0,s.useRef)(N),$=(0,a.useConstant)(()=>new Map),C=(0,s.useRef)(new Set),[S,A]=(0,s.useState)(N),[F,P]=(0,s.useState)(N);(0,n.useIsomorphicLayoutEffect)(()=>{v.current=!1,k.current=N;for(let e=0;e<F.length;e++){let t=g(F[e]);w.includes(t)?($.delete(t),C.current.delete(t)):!0!==$.get(t)&&$.set(t,!1)}},[F,w.length,w.join("-")]);let E=[];if(N!==S){let e=[...N];for(let t=0;t<F.length;t++){let s=F[t],i=g(s);w.includes(i)||(e.splice(t,0,s),E.push(s))}return"wait"===d&&E.length&&(e=E),P(f(e)),A(N),null}let{forceRender:L}=(0,s.useContext)(i.LayoutGroupContext);return(0,t.jsx)(t.Fragment,{children:F.map(e=>{let s=g(e),i=(!m||!!y)&&(N===F||w.includes(s));return(0,t.jsx)(p,{isPresent:i,initial:(!v.current||!!l)&&void 0,custom:r,presenceAffectsLayout:c,mode:d,root:j,onExitComplete:i?void 0:()=>{if(C.current.has(s)||(C.current.add(s),!$.has(s)))return;$.set(s,!0);let e=!0;$.forEach(t=>{t||(e=!1)}),e&&(L?.(),P(k.current),m&&b?.(),o&&o())},anchorX:x,anchorY:h,children:e},s)})})};e.s(["AnimatePresence",()=>j],88653)},20659,e=>{"use strict";var t=e.i(43476);let s=({className:e="",width:s,height:i,rounded:a="md",variant:n="text"})=>{let r=`
    animate-pulse
    bg-gray-200
    ${{sm:"rounded-sm",md:"rounded",lg:"rounded-lg",full:"rounded-full"}[a]}
    ${"circular"===n?"rounded-full":""}
    ${e}
  `,l={};return s&&(l.width="number"==typeof s?`${s}px`:s),i&&(l.height="number"==typeof i?`${i}px`:i),(0,t.jsx)("div",{className:r,style:l})},i=({lines:e=3,spacing:i="md",className:a=""})=>(0,t.jsx)("div",{className:`${{sm:"space-y-1",md:"space-y-2",lg:"space-y-3"}[i]} ${a}`,children:Array.from({length:e}).map((i,a)=>(0,t.jsx)(s,{height:"1rem",className:a===e-1?"w-3/4":""},a))});e.s(["SkeletonCard",0,({className:e=""})=>(0,t.jsxs)("div",{className:`bg-white rounded-lg shadow-md p-6 animate-pulse ${e}`,children:[(0,t.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[(0,t.jsx)(s,{height:"1.5rem",width:"60%",className:"rounded"}),(0,t.jsx)(s,{height:"1.5rem",width:"20%",rounded:"full"})]}),(0,t.jsx)(i,{lines:2,spacing:"sm"}),(0,t.jsxs)("div",{className:"flex items-center justify-between mt-4",children:[(0,t.jsx)(s,{height:"1rem",width:"30%"}),(0,t.jsx)(s,{height:"1rem",width:"20%"})]})]}),"SkeletonHeader",0,({className:e=""})=>(0,t.jsxs)("div",{className:`space-y-4 ${e}`,children:[(0,t.jsx)(s,{height:"2.5rem",width:"75%",className:"rounded"}),(0,t.jsx)(s,{height:"1.5rem",width:"50%",className:"rounded"})]})])},44941,e=>{"use strict";let t=[{id:1,topic:"Наука и технологии",news1:{text:"Учёные создали новый тип батареи, которая заряжается за 30 секунд и работает до 5 дней. Технология основана на графене и будет доступна в смартфонах через 2-3 года.",isFake:!1,explanation:"Это реальная новость. Графеновые батареи действительно разрабатываются и показывают впечатляющие результаты в лабораторных условиях."},news2:{text:"ИИ создал язык, который люди не могут понять. Два чат-бота разработали собственную систему коммуникации во время эксперимента, и учёные были вынуждены отключить их.",isFake:!0,explanation:"Это фейк. Хотя ИИ может находить неочевидные паттерны, боты не создавали собственный язык. Они использовали оптимизированную версию английского."}},{id:2,topic:"Здоровье",news1:{text:"Новое исследование показало, что 15 минут физической активности в день снижают риск сердечных заболеваний на 30%. Результаты опубликованы в журнале Lancet.",isFake:!1,explanation:"Это правда. Многочисленные исследования подтверждают пользу даже коротких тренировок для сердечно-сосудистой системы."},news2:{text:"Врачи рекомендуют пить 8 стаканов воды в день для детоксикации организма. Это количество необходимо для выведения всех токсинов.",isFake:!0,explanation:"Это миф. Потребность в воде индивидуальна, а организм сам отлично справляется с детоксикацией через почки и печень."}},{id:3,topic:"Космос",news1:{text:"Телескоп Джеймс Уэбб обнаружил воду в атмосфере экзопланеты K2-18 b. Это первая находка воды на планете в обитаемой зоне другой звезды.",isFake:!1,explanation:"Это реальное открытие 2023 года. Уотер действительно был обнаружен в атмосфере этой экзопланеты."},news2:{text:"NASA подтвердило, что на Марсе найдены следы древней цивилизации. Снимки показывают структуры, похожие на пирамиды.",isFake:!0,explanation:"Это фейк. Никаких следов цивилизации на Марсе не найдено. «Пирамиды» — это естественные геологические образования."}},{id:4,topic:"Искусственный интеллект",news1:{text:"Новая нейросеть научилась предсказывать структуру белков с точностью 95%. Это ускорит разработку новых лекарств в разы.",isFake:!1,explanation:"Это правда. AlphaFold от DeepMind действительно совершил прорыв в предсказании структур белков."},news2:{text:"ИИ прошёл тест Тьюринга. 80% людей не смогли отличить чат-бот от человека в 5-минутном диалоге.",isFake:!0,explanation:"Это преувеличение. Хотя ИИ стал лучше, полноценный тест Тьюринга ещё не пройден. Отдельные системы могут обмануть людей в специфичных сценариях."}}],s=[{id:1,title:"Основы AI-безопасности",category:"ai",questions:[{id:1,question:"Что такое deepfake?",options:["Подделка видео с помощью ИИ","Видеоигра про хакеров","Тип компьютерного вируса","Программа для защиты данных"],correctAnswer:0,explanation:"Deepfake — это технология создания поддельных видео и аудио с использованием искусственного интеллекта."},{id:2,question:"Какой признак может указывать на deepfake-видео?",options:["Слишком идеальная кожа без пор","Высокое разрешение","Наличие субтитров","Короткая длительность"],correctAnswer:0,explanation:"ИИ часто сглаживает кожу, убирая естественные детали. Также обратите внимание на неестественное моргание и рассинхронизацию губ."},{id:3,question:"Что делать, если вы сомневаетесь в подлинности информации?",options:["Проверить в нескольких надёжных источниках","Сразу поделиться с друзьями","Проигнорировать","Написать гневный комментарий"],correctAnswer:0,explanation:"Всегда проверяйте информацию в нескольких авторитетных источниках перед тем, как доверять ей или делиться."}]},{id:2,title:"Распознавание манипуляций",category:"ai",questions:[{id:1,question:"Какой приём часто используется в фейковых новостях?",options:["Эмоциональные заголовки","Длинный текст","Научные термины","Отсутствие картинок"],correctAnswer:0,explanation:"Фейковые новости часто используют эмоциональные заголовки для привлечения внимания и распространения."},{id:2,question:"Что такое «эхо-камера» в интернете?",options:["Среда, где вы слышите только мнения, совпадающие с вашими","Тип социальной сети","Программа для записи звука","Метод шифрования сообщений"],correctAnswer:0,explanation:"Эхо-камера — это ситуация, когда человек сталкивается только с мнениями, подтверждающими его точку зрения."},{id:3,question:"Как ИИ может помочь в создании фейков?",options:["Генерация реалистичных изображений и текста","Только создание вирусов","Взлом аккаунтов","ИИ не используется для фейков"],correctAnswer:0,explanation:"Современный ИИ может генерировать реалистичные изображения, видео и текст, что упрощает создание фейков."}]}],i=async()=>t,a=async()=>s,n=[{id:1,title:"Что такое ИИ?",description:"Введение в искусственный интеллект и машинное обучение",category:"ai",difficulty:"beginner",duration:15,content:`
# Что такое искусственный интеллект?

**Искусственный интеллект (ИИ)** — это способность компьютеров выполнять задачи, которые традиционно требуют человеческого интеллекта.

## Виды ИИ:

- **Узкий ИИ** — решает одну конкретную задачу (распознавание лиц, голосовые помощники)
- **Общий ИИ** — гипотетический ИИ, способный решать любые интеллектуальные задачи (пока не существует)
- **Сверхразум** — ИИ, превосходящий человеческий интеллект во всём (теоретическая концепция)

## Где встречается ИИ:

- 📱 Голосовые помощники (Siri, Alexa)
- 🎬 Рекомендации Netflix и YouTube
- 🚗 Автопилот в автомобилях
- 🏥 Диагностика заболеваний
- 📧 Фильтрация спама
    `,isCompleted:!1},{id:2,title:"Deepfakes и манипуляции",description:"Как ИИ создаёт подделки и как их распознать",category:"ai",difficulty:"intermediate",duration:25,content:`
# Deepfakes: когда ИИ лжёт

**Deepfake** — это технология создания поддельных видео, аудио и изображений с помощью искусственного интеллекта.

## Как создаются deepfakes:

1. **Сбор данных** — ИИ анализирует тысячи фотографий человека
2. **Обучение** — нейросеть изучает мимику, движения губ, голос
3. **Генерация** — создание нового видео с подменой лица или голоса

## Признаки deepfake:

- 👁️ **Неестественное моргание** — слишком редкое или частое
- 👄 **Рассинхронизация губ** — движения губ не совпадают со звуком
- 🎨 **Артефакты на границах** — странные переходы на лице
- ✨ **Слишком идеальная кожа** — без пор и естественных деталей
- 💡 **Неестественное освещение** — тени не совпадают

## Как защититься:

- Проверяйте источник видео
- Ищите подтверждение в других СМИ
- Используйте инструменты для обнаружения deepfakes
    `,isCompleted:!1},{id:3,title:"Доверие к информации",description:"Какую информацию можно доверять ИИ",category:"ai",difficulty:"beginner",duration:20,content:`
# Доверяй, но проверяй: ИИ и информация

## Проблемы ИИ:

### 🎯 Галлюцинации ИИ
ИИ может генерировать информацию, которая звучит убедительно, но является выдумкой.

**Пример:** ChatGPT может придумать несуществующее исследование или цитату.

### 📊 Смещение в данных
ИИ обучается на данных, созданных людьми, и наследует наши предубеждения.

**Пример:** ИИ может показывать стереотипные представления о профессиях.

### 🔄 Устаревшая информация
Большинство ИИ имеют ограничение по дате обучения.

**Пример:** ИИ может не знать о событиях после 2024 года.

## Правила безопасности:

1. ✅ **Всегда проверяй факты** в надёжных источниках
2. ✅ **Не доверяй слепо** ответам ИИ
3. ✅ **Смотри на дату** информации
4. ✅ **Сравнивай несколько источников**
    `,isCompleted:!1}],r=async()=>n,l=async e=>n.find(t=>t.id===e)||null;e.s(["getAILessonById",0,l,"getAILessons",0,r,"getFakeNewsPairs",0,i,"getQuizzes",0,a])},7308,e=>{"use strict";var t=e.i(43476),s=e.i(71645),i=e.i(46932),a=e.i(88653),n=e.i(44941);e.s(["default",0,({onComplete:e})=>{let[r,l]=(0,s.useState)([]),[o,c]=(0,s.useState)(0),[d,m]=(0,s.useState)(null),[x,p]=(0,s.useState)(!1),[h,u]=(0,s.useState)(0),[g,f]=(0,s.useState)(!0),[j,y]=(0,s.useState)(!1);if(s.default.useEffect(()=>{(async()=>{l(await (0,n.getFakeNewsPairs)()),f(!1)})()},[]),g)return(0,t.jsx)("div",{className:"flex justify-center items-center py-12",children:(0,t.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"})});if(j){let e=h/r.length*100,s="",a="";return 100===e?(s="Идеально! Вы мастер распознавания фейков!",a="🏆"):e>=75?(s="Отличный результат! Вы хорошо разбираетесь!",a="🎉"):e>=50?(s="Неплохо, но можно лучше!",a="👍"):(s="Продолжайте учиться распознавать фейки!",a="📚"),(0,t.jsxs)(i.motion.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},className:"bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto text-center",children:[(0,t.jsx)("div",{className:"text-6xl mb-4",children:a}),(0,t.jsx)("h2",{className:"text-3xl font-bold text-gray-800 mb-4",children:"Игра завершена!"}),(0,t.jsxs)("p",{className:"text-2xl text-purple-600 font-semibold mb-2",children:["Ваш счёт: ",h," из ",r.length]}),(0,t.jsx)("p",{className:"text-gray-600 mb-6",children:s}),(0,t.jsx)("button",{onClick:()=>{c(0),m(null),p(!1),u(0),y(!1)},className:"bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors",children:"Играть снова"})]})}let b=r[o];return(0,t.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto",children:[(0,t.jsxs)("div",{className:"text-center mb-6",children:[(0,t.jsx)("h2",{className:"text-2xl font-bold text-gray-800 mb-2",children:"🎭 Найди фейк"}),(0,t.jsx)("p",{className:"text-gray-600",children:"Определите, какая из новостей является подделкой"})]}),(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsxs)("div",{className:"flex justify-between items-center mb-2",children:[(0,t.jsxs)("span",{className:"text-sm font-medium text-gray-700",children:["Вопрос ",o+1," из ",r.length]}),(0,t.jsxs)("span",{className:"text-sm text-purple-600 font-semibold",children:["Счёт: ",h]})]}),(0,t.jsx)("div",{className:"w-full bg-gray-200 rounded-full h-2",children:(0,t.jsx)(i.motion.div,{className:"bg-purple-600 h-2 rounded-full",initial:{width:0},animate:{width:`${(o+1)/r.length*100}%`},transition:{duration:.5}})})]}),(0,t.jsx)("div",{className:"text-center mb-6",children:(0,t.jsx)("span",{className:"inline-block bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-sm font-medium",children:b.topic})}),(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[1,2].map(s=>{let n=1===s?b.news1:b.news2,l=d===s,g=d&&(1===s&&b.news1.isFake||2===s&&b.news2.isFake),f=d&&l&&!g;return(0,t.jsxs)(i.motion.div,{whileHover:x?{}:{scale:1.02},onClick:()=>(t=>{if(x)return;m(t),p(!0);let s=r[o],i=1===t&&s.news1.isFake||2===t&&s.news2.isFake;i&&u(e=>e+1),setTimeout(()=>{o<r.length-1?(c(e=>e+1),m(null),p(!1)):(y(!0),e&&e(i?h+1:h))},2500)})(s),className:`
                relative p-6 rounded-lg border-2 cursor-pointer transition-all
                ${x?1===s?b.news1.isFake?"bg-green-50 border-green-500":"bg-gray-50 border-gray-300":b.news2.isFake?"bg-green-50 border-green-500":"bg-gray-50 border-gray-300":"bg-gray-50 border-gray-200 hover:border-purple-400"}
                ${l?"ring-2 ring-purple-500":""}
                ${f?"bg-red-50 border-red-500":""}
              `,children:[x&&(1===s&&b.news1.isFake||2===s&&b.news2.isFake)&&(0,t.jsx)("div",{className:"absolute -top-3 -right-3 bg-green-500 text-white rounded-full p-2",children:(0,t.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),(0,t.jsxs)("div",{className:"text-sm text-gray-500 mb-2",children:["Новость ",s]}),(0,t.jsx)("p",{className:"text-gray-800 leading-relaxed",children:n.text}),(0,t.jsx)(a.AnimatePresence,{children:x&&l&&(0,t.jsxs)(i.motion.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:`mt-4 pt-4 border-t ${g?"border-green-300":"border-red-300"}`,children:[(0,t.jsx)("p",{className:`font-semibold mb-2 ${g?"text-green-800":"text-red-800"}`,children:g?"✅ Правильно!":"❌ Неверно!"}),(0,t.jsx)("p",{className:"text-sm text-gray-700",children:n.explanation})]})})]},s)})}),!d&&(0,t.jsx)("p",{className:"text-center text-gray-500 text-sm",children:"Нажмите на карточку с фейковой новостью"}),(0,t.jsxs)("div",{className:"mt-8 pt-6 border-t",children:[(0,t.jsx)("h4",{className:"font-semibold text-gray-700 mb-3",children:"🔍 Как распознать фейк:"}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 text-sm",children:[(0,t.jsxs)("div",{className:"flex items-start space-x-2",children:[(0,t.jsx)("span",{className:"text-purple-600",children:"•"}),(0,t.jsx)("span",{className:"text-gray-600",children:"Проверьте источник информации"})]}),(0,t.jsxs)("div",{className:"flex items-start space-x-2",children:[(0,t.jsx)("span",{className:"text-purple-600",children:"•"}),(0,t.jsx)("span",{className:"text-gray-600",children:"Ищите подтверждение в других СМИ"})]}),(0,t.jsxs)("div",{className:"flex items-start space-x-2",children:[(0,t.jsx)("span",{className:"text-purple-600",children:"•"}),(0,t.jsx)("span",{className:"text-gray-600",children:"Обратите внимание на эмоции в заголовке"})]}),(0,t.jsxs)("div",{className:"flex items-start space-x-2",children:[(0,t.jsx)("span",{className:"text-purple-600",children:"•"}),(0,t.jsx)("span",{className:"text-gray-600",children:"Проверьте дату публикации"})]})]})]})]})}])},90977,e=>{"use strict";var t=e.i(43476),s=e.i(71645),i=e.i(46932),a=e.i(7308),n=e.i(20659),r=e.i(42141),l=e.i(44941);e.s(["default",0,()=>{let[e,o]=(0,s.useState)([]),[c,d]=(0,s.useState)(!0),[m,x]=(0,s.useState)("game");return(0,s.useEffect)(()=>{(async()=>{try{let e=await (0,l.getQuizzes)();o(e)}catch(e){console.error("Ошибка при загрузке викторин:",e)}finally{d(!1)}})()},[]),(0,t.jsx)("div",{className:"min-h-screen bg-gradient-to-b from-purple-50 to-white",children:(0,t.jsxs)("div",{className:"container mx-auto px-4 py-12",children:[(0,t.jsxs)(i.motion.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"text-center mb-12",children:[(0,t.jsx)("h1",{className:"text-4xl md:text-5xl font-bold text-gray-800 mb-4",children:"🤖 AI-безопасность"}),(0,t.jsx)("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Научитесь распознавать фейки, deepfakes и манипуляции с помощью ИИ"})]}),(0,t.jsx)("div",{className:"flex justify-center mb-8",children:(0,t.jsxs)("div",{className:"bg-white rounded-lg shadow-md p-2 inline-flex",children:[(0,t.jsx)("button",{onClick:()=>x("game"),className:`px-6 py-3 rounded-md font-semibold transition-colors ${"game"===m?"bg-purple-600 text-white":"text-gray-700 hover:bg-gray-100"}`,children:"🎮 Игра"}),(0,t.jsx)("button",{onClick:()=>x("theory"),className:`px-6 py-3 rounded-md font-semibold transition-colors ${"theory"===m?"bg-purple-600 text-white":"text-gray-700 hover:bg-gray-100"}`,children:"📚 Теория"}),(0,t.jsx)("button",{onClick:()=>x("quiz"),className:`px-6 py-3 rounded-md font-semibold transition-colors ${"quiz"===m?"bg-purple-600 text-white":"text-gray-700 hover:bg-gray-100"}`,children:"❓ Викторина"})]})}),"game"===m&&(0,t.jsxs)(i.motion.div,{initial:{opacity:0},animate:{opacity:1},children:[(0,t.jsx)(a.default,{}),(0,t.jsx)("div",{className:"max-w-4xl mx-auto mt-12",children:(0,t.jsxs)("div",{className:"bg-purple-50 border border-purple-200 rounded-lg p-6",children:[(0,t.jsx)("h3",{className:"font-bold text-purple-800 mb-2",children:"💡 Что вы узнаете:"}),(0,t.jsxs)("ul",{className:"space-y-2 text-purple-700 text-sm",children:[(0,t.jsxs)("li",{className:"flex items-start",children:[(0,t.jsx)("span",{className:"mr-2",children:"✓"}),"Распознавать фейковые новости"]}),(0,t.jsxs)("li",{className:"flex items-start",children:[(0,t.jsx)("span",{className:"mr-2",children:"✓"}),"Понимать, как ИИ создаёт подделки"]}),(0,t.jsxs)("li",{className:"flex items-start",children:[(0,t.jsx)("span",{className:"mr-2",children:"✓"}),"Критически оценивать информацию"]})]})]})})]}),"theory"===m&&(0,t.jsx)(i.motion.div,{initial:{opacity:0},animate:{opacity:1},className:"max-w-5xl mx-auto",children:(0,t.jsx)("div",{className:"grid gap-6",children:[{icon:"🎭",title:"Что такое Deepfake?",content:`
Deepfake (дипфейк) — это технология создания поддельных изображений, видео или аудио с использованием искусственного интеллекта.

**Как это работает:**
1. ИИ анализирует тысячи фотографий человека
2. Нейросеть изучает мимику, движения губ, голос
3. Генерируется новое видео, где человек говорит или делает то, чего не было

**Признаки deepfake:**
- Неестественное моргание (слишком редкое или частое)
- Рассинхронизация губ и звука
- Странные артефакты на границах лица
- Неестественная кожа без пор
- Странное освещение или тени
                  `},{icon:"🔍",title:"Как проверить информацию?",content:`
**Чек-лист проверки информации:**

1. **Проверьте источник**
   - Это известный новостной сайт?
   - Есть ли контакты редакции?
   - Кто автор материала?

2. **Найдите подтверждение**
   - Пишут ли об этом другие СМИ?
   - Есть ли официальные заявления?

3. **Обратите внимание на эмоции**
   - Заголовок вызывает сильные эмоции?
   - Текст манипулирует чувствами?

4. **Проверьте дату**
   - Не старая ли это новость?
   - Контекст мог измениться?

5. **Используйте факт-чекинг**
   - Сайты: Snopes, FactCheck.org
   - Обратный поиск картинок
                  `},{icon:"🛡️",title:"Защита от манипуляций",content:`
**Правила цифровой гигиены:**

✅ **Критическое мышление**
- Не верьте слепо заголовкам
- Задавайте вопрос: \xabКому это выгодно?\xbb

✅ **Разнообразие источников**
- Читайте разные СМИ
- Избегайте \xabинформационных пузырей\xbb

✅ **Пауза перед репостом**
- Проверьте перед тем, как делиться
- Не распространяйте непроверенную информацию

✅ **Обновляйте знания**
- Технологии создания фейков развиваются
- Изучайте новые методы распознавания

✅ **Используйте технологии**
- Приложения для проверки фактов
- Браузерные расширения для факт-чекинга
                  `},{icon:"🤖",title:"ИИ и будущее безопасности",content:`
**Вызовы будущего:**

🔴 **Угрозы:**
- Всё более реалистичные deepfakes
- Автоматическая генерация фейковых новостей
- Персонализированные манипуляции
- Голосовые подделки для мошенничества

🟢 **Возможности:**
- ИИ для обнаружения deepfakes
- Автоматическая проверка фактов
- Образовательные платформы
- Инструменты для журналистов

**Что важно помнить:**
Технологии — это инструмент. Важно, как мы их используем. Развивайте критическое мышление и не переставайте учиться!
                  `}].map((e,s)=>(0,t.jsxs)(i.motion.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*s},className:"bg-white rounded-lg shadow-md p-6",children:[(0,t.jsxs)("div",{className:"flex items-start mb-4",children:[(0,t.jsx)("span",{className:"text-4xl mr-4",children:e.icon}),(0,t.jsx)("h2",{className:"text-2xl font-bold text-gray-800",children:e.title})]}),(0,t.jsx)(r.LessonContent,{content:e.content})]},e.title))})}),"quiz"===m&&(0,t.jsx)(i.motion.div,{initial:{opacity:0},animate:{opacity:1},className:"max-w-3xl mx-auto",children:c?(0,t.jsxs)("div",{className:"grid gap-6",children:[(0,t.jsx)(n.SkeletonHeader,{}),(0,t.jsx)(n.SkeletonCard,{}),(0,t.jsx)(n.SkeletonCard,{})]}):(0,t.jsx)("div",{className:"grid gap-6",children:e.map((e,s)=>(0,t.jsxs)(i.motion.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*s},className:"bg-white rounded-lg shadow-md p-6",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[(0,t.jsx)("h3",{className:"text-xl font-bold text-gray-800",children:e.title}),(0,t.jsxs)("span",{className:"bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium",children:[e.questions.length," вопросов"]})]}),(0,t.jsx)("p",{className:"text-gray-600 mb-4",children:"Проверьте свои знания в этой викторине"}),(0,t.jsx)("button",{className:"bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors",onClick:()=>x("quiz"),children:"Начать викторину"})]},e.id))})}),(0,t.jsxs)(i.motion.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{delay:.3},className:"mt-16",children:[(0,t.jsx)("h2",{className:"text-3xl font-bold text-center text-gray-800 mb-8",children:"Темы раздела"}),(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[{icon:"🎭",title:"Deepfakes",description:"Распознавание подделок",color:"from-purple-500 to-purple-600"},{icon:"📰",title:"Фейк-ньюс",description:"Проверка информации",color:"from-pink-500 to-pink-600"},{icon:"🧠",title:"Манипуляции",description:"Защита сознания",color:"from-indigo-500 to-indigo-600"},{icon:"✅",title:"Факт-чекинг",description:"Проверка фактов",color:"from-blue-500 to-blue-600"}].map(e=>(0,t.jsxs)(i.motion.div,{whileHover:{scale:1.05},className:`bg-gradient-to-br ${e.color} rounded-lg p-6 text-white shadow-lg cursor-pointer`,children:[(0,t.jsx)("div",{className:"text-4xl mb-3",children:e.icon}),(0,t.jsx)("h3",{className:"text-xl font-bold mb-2",children:e.title}),(0,t.jsx)("p",{className:"text-sm opacity-90",children:e.description})]},e.title))})]})]})})}])}]);