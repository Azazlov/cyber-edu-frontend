'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import FakeFinder from '@/components/interactive/FakeFinder'
import { SkeletonCard, SkeletonHeader } from '@/components/common/Skeleton'
import { LessonContent } from '@/components/common/LessonContent'
import { getQuizzes } from '@/features/ai/aiAPI'
import { Quiz } from '@/types'

const AIPage: React.FC = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'game' | 'theory' | 'quiz'>('game')

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const data = await getQuizzes()
        setQuizzes(data)
      } catch (error) {
        console.error('Ошибка при загрузке викторин:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchQuizzes()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-12">
        {/* Заголовок раздела */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            🤖 AI-безопасность
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Научитесь распознавать фейки, deepfakes и манипуляции с помощью ИИ
          </p>
        </motion.div>

        {/* Переключатель вкладок */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-2 inline-flex">
            <button
              onClick={() => setActiveTab('game')}
              className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                activeTab === 'game'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              🎮 Игра
            </button>
            <button
              onClick={() => setActiveTab('theory')}
              className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                activeTab === 'theory'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              📚 Теория
            </button>
            <button
              onClick={() => setActiveTab('quiz')}
              className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                activeTab === 'quiz'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              ❓ Викторина
            </button>
          </div>
        </div>

        {/* Контент */}
        {activeTab === 'game' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <FakeFinder />

            <div className="max-w-4xl mx-auto mt-12">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="font-bold text-purple-800 mb-2">
                  💡 Что вы узнаете:
                </h3>
                <ul className="space-y-2 text-purple-700 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    Распознавать фейковые новости
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    Понимать, как ИИ создаёт подделки
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    Критически оценивать информацию
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'theory' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid gap-6">
              {[
                {
                  icon: '🎭',
                  title: 'Что такое Deepfake?',
                  content: `
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
                  `,
                },
                {
                  icon: '🔍',
                  title: 'Как проверить информацию?',
                  content: `
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
                  `,
                },
                {
                  icon: '🛡️',
                  title: 'Защита от манипуляций',
                  content: `
**Правила цифровой гигиены:**

✅ **Критическое мышление**
- Не верьте слепо заголовкам
- Задавайте вопрос: «Кому это выгодно?»

✅ **Разнообразие источников**
- Читайте разные СМИ
- Избегайте «информационных пузырей»

✅ **Пауза перед репостом**
- Проверьте перед тем, как делиться
- Не распространяйте непроверенную информацию

✅ **Обновляйте знания**
- Технологии создания фейков развиваются
- Изучайте новые методы распознавания

✅ **Используйте технологии**
- Приложения для проверки фактов
- Браузерные расширения для факт-чекинга
                  `,
                },
                {
                  icon: '🤖',
                  title: 'ИИ и будущее безопасности',
                  content: `
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
                  `,
                },
              ].map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <div className="flex items-start mb-4">
                    <span className="text-4xl mr-4">{section.icon}</span>
                    <h2 className="text-2xl font-bold text-gray-800">
                      {section.title}
                    </h2>
                  </div>
                  <LessonContent content={section.content} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'quiz' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-3xl mx-auto"
          >
            {loading ? (
              <div className="grid gap-6">
                <SkeletonHeader />
                <SkeletonCard />
                <SkeletonCard />
              </div>
            ) : (
              <div className="grid gap-6">
                {quizzes.map((quiz, index) => (
                  <motion.div
                    key={quiz.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-md p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800">
                        {quiz.title}
                      </h3>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                        {quiz.questions.length} вопросов
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Проверьте свои знания в этой викторине
                    </p>
                    <button
                      className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                      onClick={() => setActiveTab('quiz')}
                    >
                      Начать викторину
                    </button>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {/* Карточки с темами */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Темы раздела
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🎭',
                title: 'Deepfakes',
                description: 'Распознавание подделок',
                color: 'from-purple-500 to-purple-600',
              },
              {
                icon: '📰',
                title: 'Фейк-ньюс',
                description: 'Проверка информации',
                color: 'from-pink-500 to-pink-600',
              },
              {
                icon: '🧠',
                title: 'Манипуляции',
                description: 'Защита сознания',
                color: 'from-indigo-500 to-indigo-600',
              },
              {
                icon: '✅',
                title: 'Факт-чекинг',
                description: 'Проверка фактов',
                color: 'from-blue-500 to-blue-600',
              },
            ].map((topic) => (
              <motion.div
                key={topic.title}
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-br ${topic.color} rounded-lg p-6 text-white shadow-lg cursor-pointer`}
              >
                <div className="text-4xl mb-3">{topic.icon}</div>
                <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
                <p className="text-sm opacity-90">{topic.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AIPage
