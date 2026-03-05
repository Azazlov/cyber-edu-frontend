# Cyber Edu — Документация разработчика

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)

Полное руководство по разработке и расширению платформы Cyber Edu.

---

## 📋 Содержание

1. [Архитектура проекта](#архитектура-проекта)
2. [Структура папок](#структура-папок)
3. [Технологический стек](#технологический-стек)
4. [Настройка окружения](#настройка-окружения)
5. [Скрипты npm](#скрипты-npm)
6. [API слой](#api-слой)
7. [Управление состоянием (Redux)](#управление-состоянием-redux)
8. [Компоненты](#компоненты)
9. [Маршрутизация](#маршрутизация)
10. [Стилизация](#стилизация)
11. [Добавление новых страниц](#добавление-новых-страниц)
12. [Добавление новых интерактивных элементов](#добавление-новых-интерактивных-элементов)
13. [Тестирование](#тестирование)
14. [Развёртывание](#развёртывание)
15. [План развития](#план-развития)

---

## 🏗️ Архитектура проекта

Проект построен на **Next.js 16** с использованием **App Router** и следует архитектуре **Feature-Sliced Design** (упрощённая версия).

```
┌─────────────────────────────────────────────────────────┐
│                    Presentation Layer                    │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐  │
│  │   Pages     │  │   Layouts   │  │   Components    │  │
│  └─────────────┘  └─────────────┘  └─────────────────┘  │
├─────────────────────────────────────────────────────────┤
│                     Business Logic                       │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐  │
│  │   Features  │  │    Hooks    │  │   Services      │  │
│  └─────────────┘  └─────────────┘  └─────────────────┘  │
├─────────────────────────────────────────────────────────┤
│                      Data Layer                          │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐  │
│  │  API (mock) │  │    Store    │  │     Types       │  │
│  └─────────────┘  └─────────────┘  └─────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

---

## 📁 Структура папок

```
cyber-edu-frontend/
├── src/
│   ├── app/                      # Next.js App Router страницы
│   │   ├── layout.tsx            # Корневой layout
│   │   ├── page.tsx              # Главная страница
│   │   ├── providers.tsx         # Redux провайдер
│   │   ├── globals.css           # Глобальные стили
│   │   ├── hacking/              # Раздел "Уязвимости сайтов"
│   │   ├── ai/                   # Раздел "AI-безопасность"
│   │   ├── labs/                 # Раздел "Лаборатории"
│   │   └── teachers/             # Раздел "Учителям"
│   │
│   ├── components/               # React компоненты
│   │   ├── common/               # Переиспользуемые UI компоненты
│   │   │   └── LoginForm.tsx
│   │   ├── interactive/          # Интерактивные компоненты
│   │   │   ├── SQLInjector.tsx   # Симулятор SQL-инъекции
│   │   │   └── FakeFinder.tsx    # Игра "Найди фейк"
│   │   └── layout/               # Layout компоненты
│   │       ├── Header.tsx
│   │       └── Footer.tsx
│   │
│   ├── features/                 # Бизнес-логика по фичам
│   │   ├── auth/                 # Авторизация
│   │   │   ├── authAPI.ts        # API вызовы
│   │   │   └── authSlice.ts      # Redux slice
│   │   ├── hacking/              # Раздел хакинга
│   │   │   └── hackingAPI.ts
│   │   ├── ai/                   # AI раздел
│   │   │   └── aiAPI.ts
│   │   ├── labs/                 # Лаборатории
│   │   │   └── labsAPI.ts
│   │   └── teachers/             # Учителя
│   │       └── teachersAPI.ts
│   │
│   ├── hooks/                    # Кастомные хуки
│   │   └── useAuth.ts            # Хук авторизации
│   │
│   ├── lib/                      # Библиотеки и утилиты
│   │   └── store.ts              # Redux store конфигурация
│   │
│   ├── services/                 # Внешние сервисы (API клиенты)
│   │
│   └── types/                    # TypeScript типы
│       └── index.ts
│
├── public/                       # Статические файлы
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── eslint.config.mjs
```

---

## 🛠️ Технологический стек

| Категория | Технология | Версия |
|-----------|------------|--------|
| Framework | Next.js | 16.1.6 |
| UI Library | React | 19.2.3 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | v4 |
| Animations | Framer Motion | latest |
| State Management | Redux Toolkit | ^2.11.2 |
| HTTP Client | (встроенный fetch) | - |
| Build Tool | Turbopack | (встроен в Next.js) |

---

## ⚙️ Настройка окружения

### Требования
- **Node.js:** 18.0 или выше
- **npm:** 9.0 или выше

### Установка зависимостей

```bash
npm install
```

### Переменные окружения

Создайте файл `.env.local` в корне проекта:

```env
# API URL (для будущего бэкенда)
NEXT_PUBLIC_API_URL=http://localhost:8080/api

# Режим разработки
NODE_ENV=development
```

### Запуск проекта

```bash
# Сервер разработки (hot reload)
npm run dev

# Продакшен сборка
npm run build

# Запуск продакшен сервера
npm start

# Линтинг
npm run lint
```

---

## 📜 Скрипты npm

| Скрипт | Команда | Описание |
|--------|---------|----------|
| `dev` | `npm run dev` | Запуск сервера разработки на :3000 |
| `build` | `npm run build` | Сборка продакшен версии |
| `start` | `npm start` | Запуск продакшен сервера |
| `lint` | `npm run lint` | Проверка ESLint |

---

## 🔌 API слой

API вызовы организованы по фичам в папке `src/features/`. Каждый модуль содержит:
- API функции для запросов
- Типы данных
- Моковые данные для разработки

### Пример структуры API модуля

```typescript
// src/features/hacking/hackingAPI.ts

import { Lesson } from '@/types'

// Моковые данные
const mockLessons: Lesson[] = [...]

// Функция получения данных
export const getLessons = async (): Promise<Lesson[]> => {
  // В будущем: const res = await fetch(`${API_URL}/hacking/lessons`)
  return mockLessons
}

// Функция отправки данных
export const submitAnswer = async (
  taskId: number,
  answer: string
): Promise<{ correct: boolean; hint?: string }> => {
  // В будущем: POST запрос на бэкенд
  return { correct: true }
}
```

### Список API эндпоинтов (моки)

| Модуль | Функция | Метод | Описание |
|--------|---------|-------|----------|
| `authAPI` | `login()` | POST | Авторизация |
| `authAPI` | `register()` | POST | Регистрация |
| `authAPI` | `getCurrentUser()` | GET | Данные пользователя |
| `hackingAPI` | `getLessons()` | GET | Список уроков |
| `hackingAPI` | `getLessonById()` | GET | Конкретный урок |
| `aiAPI` | `getFakeNewsPairs()` | GET | Пары новостей для игры |
| `aiAPI` | `getQuizzes()` | GET | Список викторин |
| `labsAPI` | `getLabTasks()` | GET | Список заданий |
| `labsAPI` | `submitTask()` | POST | Отправка решения |
| `labsAPI` | `getProgress()` | GET | Прогресс пользователя |
| `teachersAPI` | `getTeachingMaterials()` | GET | Методички |
| `teachersAPI` | `getWebinars()` | GET | Вебинары |
| `teachersAPI` | `getForumTopics()` | GET | Темы форума |
| `teachersAPI` | `submitForumQuestion()` | POST | Новый вопрос |

---

## 🗄️ Управление состоянием (Redux)

### Store конфигурация

```typescript
// src/lib/store.ts

import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@/features/auth/authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // hacking: hackingReducer,  // раскомментировать при создании
    // ai: aiReducer,
    // labs: labsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
```

### Создание нового slice

```typescript
// src/features/hacking/hackingSlice.ts

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getLessons } from './hackingAPI'

interface HackingState {
  lessons: Lesson[]
  currentLesson: Lesson | null
  progress: number
  loading: boolean
  error: string | null
}

const initialState: HackingState = {
  lessons: [],
  currentLesson: null,
  progress: 0,
  loading: false,
  error: null,
}

// Асинхронный thunk
export const fetchLessons = createAsyncThunk(
  'hacking/fetchLessons',
  async () => {
    const response = await getLessons()
    return response
  }
)

const hackingSlice = createSlice({
  name: 'hacking',
  initialState,
  reducers: {
    setCurrentLesson: (state, action) => {
      state.currentLesson = action.payload
    },
    updateProgress: (state, action) => {
      state.progress = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLessons.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchLessons.fulfilled, (state, action) => {
        state.loading = false
        state.lessons = action.payload
      })
      .addCase(fetchLessons.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Ошибка'
      })
  },
})

export const { setCurrentLesson, updateProgress } = hackingSlice.actions
export default hackingSlice.reducer
```

### Подключение slice к store

```typescript
// src/lib/store.ts

import hackingReducer from '@/features/hacking/hackingSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    hacking: hackingReducer,  // добавить
  },
})
```

### Использование в компонентах

```typescript
'use client'

import { useAppDispatch, useAppSelector } from '@/hooks/useAuth'
import { fetchLessons, setCurrentLesson } from '@/features/hacking/hackingSlice'

const HackingPage = () => {
  const dispatch = useAppDispatch()
  const { lessons, loading, error } = useAppSelector((state) => state.hacking)

  useEffect(() => {
    dispatch(fetchLessons())
  }, [dispatch])

  // ...
}
```

---

## 🧩 Компоненты

### Типы компонентов

#### 1. Layout компоненты (`src/components/layout/`)

```typescript
// src/components/layout/Header.tsx

import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      {/* ... */}
    </header>
  )
}

export default Header
```

#### 2. Common компоненты (`src/components/common/`)

```typescript
// src/components/common/LoginForm.tsx

interface LoginFormProps {
  onLoginSuccess?: () => void
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  // ...
}

export default LoginForm
```

#### 3. Interactive компоненты (`src/components/interactive/`)

```typescript
// src/components/interactive/SQLInjector.tsx

'use client'

import { motion, AnimatePresence } from 'framer-motion'

interface SQLInjectorProps {
  onComplete?: () => void
}

const SQLInjector: React.FC<SQLInjectorProps> = ({ onComplete }) => {
  // ...
}

export default SQLInjector
```

### Создание нового компонента

1. **Определите тип компонента** (layout/common/interactive)
2. **Создайте файл** в соответствующей папке
3. **Экспортируйте как default**
4. **Добавьте TypeScript типы** для props

### Пример: новый интерактивный компонент

```typescript
// src/components/interactive/XSSSimulator.tsx

'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface XSSSimulatorProps {
  onComplete?: (score: number) => void
}

const XSSSimulator: React.FC<XSSSimulatorProps> = ({ onComplete }) => {
  const [payload, setPayload] = useState('')
  const [result, setResult] = useState<string | null>(null)

  const executePayload = () => {
    // Логика проверки XSS payload
    if (payload.includes('<script>')) {
      setResult('XSS успешен!')
      onComplete?.(100)
    } else {
      setResult('Попробуйте другой payload')
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">🎭 XSS Симулятор</h2>
      
      <input
        type="text"
        value={payload}
        onChange={(e) => setPayload(e.target.value)}
        className="w-full p-3 border rounded mb-4"
        placeholder="Введите XSS payload..."
      />
      
      <button
        onClick={executePayload}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Выполнить
      </button>
      
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-gray-100 rounded"
        >
          {result}
        </motion.div>
      )}
    </div>
  )
}

export default XSSSimulator
```

---

## 🛣️ Маршрутизация

Next.js App Router использует файловую систему для маршрутизации.

### Структура маршрутов

```
src/app/
├── page.tsx              → /
├── layout.tsx            # Общий layout
├── hacking/
│   └── page.tsx          → /hacking
├── ai/
│   └── page.tsx          → /ai
├── labs/
│   └── page.tsx          → /labs
└── teachers/
    └── page.tsx          → /teachers
```

### Создание нового маршрута

1. **Создайте папку** с именем маршрута в `src/app/`
2. **Добавьте `page.tsx`** для страницы
3. **Опционально:** добавьте `layout.tsx` для layout страницы

### Пример: новый маршрут `/about`

```bash
# Структура
src/app/about/
└── page.tsx
```

```typescript
// src/app/about/page.tsx

'use client'

import React from 'react'

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">О проекте</h1>
      <p className="text-gray-600">
        Cyber Edu — образовательная платформа по кибербезопасности.
      </p>
    </div>
  )
}

export default AboutPage
```

### Динамические маршруты

```bash
# Для страниц уроков
src/app/hacking/[id]/
└── page.tsx          → /hacking/1, /hacking/2, ...
```

```typescript
// src/app/hacking/[id]/page.tsx

interface LessonPageProps {
  params: Promise<{ id: string }>
}

const LessonPage: React.FC<LessonPageProps> = async ({ params }) => {
  const { id } = await params
  
  // Загрузка урока по ID
  return <div>Урок {id}</div>
}

export default LessonPage
```

---

## 🎨 Стилизация

### Tailwind CSS v4

Проект использует Tailwind CSS v4 с новой конфигурацией через CSS.

### Глобальные стили

```css
/* src/app/globals.css */
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
}

body {
  background: var(--background);
  color: var(--foreground);
}
```

### Использование в компонентах

```typescript
<div className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
  Кнопка
</div>
```

### Кастомные классы (при необходимости)

```css
/* globals.css */
.gradient-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.card-hover {
  transition: all 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
```

---

## 📄 Добавление новых страниц

### Чеклист для новой страницы

1. [ ] Создать папку в `src/app/<route>/`
2. [ ] Создать `page.tsx` с компонентом страницы
3. [ ] Добавить ссылку в навигацию (Header.tsx)
4. [ ] Создать API модуль в `src/features/<feature>/` (если нужно)
5. [ ] Добавить типы в `src/types/index.ts` (если нужно)
6. [ ] Протестировать страницу

### Пример: страница курса `/courses`

```typescript
// src/app/courses/page.tsx

'use client'

import React from 'react'
import { motion } from 'framer-motion'

const CoursesPage: React.FC = () => {
  const courses = [
    { id: 1, title: 'Основы кибербезопасности', duration: '4 недели' },
    { id: 2, title: 'Продвинутый хакинг', duration: '8 недель' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-8"
        >
          📚 Курсы
        </motion.h1>

        <div className="grid gap-6">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h2 className="text-2xl font-bold">{course.title}</h2>
              <p className="text-gray-600">Длительность: {course.duration}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CoursesPage
```

---

## 🎮 Добавление новых интерактивных элементов

### Шаг 1: Создать компонент

```typescript
// src/components/interactive/PasswordCracker.tsx

'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface PasswordCrackerProps {
  onComplete?: (time: number) => void
}

const PasswordCracker: React.FC<PasswordCrackerProps> = ({ onComplete }) => {
  const [password, setPassword] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [cracked, setCracked] = useState(false)

  const targetPassword = 'SecureP@ss123'

  const tryCrack = () => {
    setAttempts(prev => prev + 1)
    if (password === targetPassword) {
      setCracked(true)
      onComplete?.(attempts + 1)
    }
  }

  return (
    <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono">
      <h3 className="text-xl mb-4">💀 Взлом пароля</h3>
      
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full bg-black border border-green-700 p-2 mb-4"
        placeholder="Введите пароль..."
      />
      
      <button
        onClick={tryCrack}
        className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded"
      >
        Взломать
      </button>
      
      {cracked && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-green-300"
        >
          ✅ Пароль взломан за {attempts} попыток!
        </motion.div>
      )}
    </div>
  )
}

export default PasswordCracker
```

### Шаг 2: Интегрировать на страницу

```typescript
// src/app/labs/page.tsx

import PasswordCracker from '@/components/interactive/PasswordCracker'

const LabsPage = () => {
  return (
    <div>
      <PasswordCracker onComplete={(time) => console.log(`Взлом за ${time} попыток`)} />
    </div>
  )
}
```

---

## 🧪 Тестирование

### Установка тестовых зависимостей

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @types/jest
```

### Конфигурация Jest

```javascript
// jest.config.js

module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}
```

### Пример теста компонента

```typescript
// src/components/common/__tests__/LoginForm.test.tsx

import { render, screen, fireEvent } from '@testing-library/react'
import LoginForm from '../LoginForm'

describe('LoginForm', () => {
  it('renders correctly', () => {
    render(<LoginForm />)
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/пароль/i)).toBeInTheDocument()
  })

  it('calls login on submit', () => {
    const onLoginSuccess = jest.fn()
    render(<LoginForm onLoginSuccess={onLoginSuccess} />)
    
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'test@example.com' }
    })
    fireEvent.change(screen.getByLabelText(/пароль/i), {
      target: { value: 'password' }
    })
    
    fireEvent.click(screen.getByRole('button', { name: /войти/i }))
    
    expect(onLoginSuccess).toHaveBeenCalled()
  })
})
```

### Запуск тестов

```bash
npm test
```

---

## 🚀 Развёртывание

### Vercel (рекомендуется)

1. **Установите Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Задеплойте:**
   ```bash
   vercel
   ```

3. **Настройте переменные окружения** в панели Vercel

### GitHub Actions (CI/CD)

```yaml
# .github/workflows/deploy.yml

name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

### Docker (опционально)

```dockerfile
# Dockerfile

FROM node:18-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

CMD ["node", "server.js"]
```

---

## 📈 План развития

### Ближайшие задачи (MVP+)

- [ ] Добавить страницу отдельного урока (`/hacking/[id]`)
- [ ] Реализовать полноценную систему аутентификации с бэкендом
- [ ] Добавить тесты для критических компонентов
- [ ] Реализовать систему бейджей и достижений
- [ ] Добавить тёмную тему

### Среднесрочные задачи

- [ ] Интеграция с реальным бэкендом API
- [ ] WebSocket для вебинаров
- [ ] Система комментариев к урокам
- [ ] Личный кабинет пользователя
- [ ] Экспорт прогресса в PDF

### Долгосрочные задачи

- [ ] Мобильное приложение (React Native)
- [ ] Мультиязычность (i18n)
- [ ] Интеграция с LMS (Moodle и др.)
- [ ] Сертификация и выдача сертификатов
- [ ] Сообщество с рейтингом пользователей

---

## 🐛 Отладка

### Redux DevTools

Установите расширение [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/) для отладки состояния.

### React DevTools

Установите расширение [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/) для инспекции компонентов.

### Логирование

```typescript
// Включите подробное логирование в development
const DEBUG = process.env.NODE_ENV === 'development'

if (DEBUG) {
  console.log('Debug info:', data)
}
```

---

## 📚 Полезные ресурсы

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

## 👥 Вклад в проект

1. Создайте форк репозитория
2. Создайте ветку для фичи (`git checkout -b feature/amazing-feature`)
3. Закоммитьте изменения (`git commit -m 'Add amazing feature'`)
4. Запушьте ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

### Code Style

- Используйте ESLint для проверки кода
- Следуйте соглашениям TypeScript
- Пишите осмысленные комментарии к коммитам

---

## 📞 Контакты разработчиков

- Email: dev@cyberedu.example.com
- GitHub Issues: для багов и предложений

---

© 2026 Cyber Edu Development Team
