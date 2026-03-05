'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import SQLInjector from '@/components/interactive/SQLInjector'
import { SkeletonCard, SkeletonHeader } from '@/components/common/Skeleton'
import { getLessons } from '@/features/hacking/hackingAPI'
import { Lesson } from '@/types'

const HackingPage: React.FC = () => {
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'theory' | 'practice'>('theory')

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const data = await getLessons()
        setLessons(data)
      } catch (error) {
        console.error('Ошибка при загрузке уроков:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchLessons()
  }, [])

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800'
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800'
      case 'advanced':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'Начинающий'
      case 'intermediate':
        return 'Средний'
      case 'advanced':
        return 'Продвинутый'
      default:
        return difficulty
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        {/* Заголовок раздела */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            🔐 Уязвимости сайтов
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Изучите основные типы веб-уязвимостей и научитесь находить их в безопасной среде
          </p>
        </motion.div>

        {/* Переключатель Theorie/Practice */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-2 inline-flex">
            <button
              onClick={() => setActiveTab('theory')}
              className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                activeTab === 'theory'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              📚 Теория
            </button>
            <button
              onClick={() => setActiveTab('practice')}
              className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                activeTab === 'practice'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              💻 Практика
            </button>
          </div>
        </div>

        {/* Контент */}
        {activeTab === 'theory' ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-5xl mx-auto"
          >
            {loading ? (
              <div className="grid gap-6">
                <SkeletonHeader />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </div>
            ) : (
              <div className="grid gap-6">
                {lessons.map((lesson, index) => (
                  <motion.div
                    key={lesson.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold text-gray-800 mb-2">
                            {lesson.title}
                          </h2>
                          <p className="text-gray-600 mb-4">{lesson.description}</p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(
                            lesson.difficulty
                          )}`}
                        >
                          {getDifficultyText(lesson.difficulty)}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {lesson.duration} мин
                          </span>
                        </div>

                        <Link
                          href={`/hacking-lesson?id=${lesson.id}`}
                          className="text-blue-600 hover:text-blue-700 font-semibold"
                        >
                          Читать →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                💻 Практикум: SQL-инъекции
              </h2>
              <p className="text-gray-600">
                Научитесь находить и эксплуатировать SQL-уязвимости в безопасной среде
              </p>
            </div>
            
            <SQLInjector />

            {/* Дополнительная информация */}
            <div className="max-w-4xl mx-auto mt-12">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="font-bold text-yellow-800 mb-2">
                  ⚠️ Важное предупреждение
                </h3>
                <p className="text-yellow-700 text-sm">
                  Все навыки, полученные здесь, должны использоваться только в образовательных целях
                  и только на системах, на которые у вас есть письменное разрешение владельца.
                  Несанкционированный доступ к компьютерным системам является преступлением.
                </p>
              </div>
            </div>
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
                icon: '💉',
                title: 'SQL-инъекции',
                description: 'Внедрение вредоносного SQL-кода',
                color: 'from-red-500 to-red-600',
              },
              {
                icon: '🎭',
                title: 'XSS',
                description: 'Межсайтовый скриптинг',
                color: 'from-orange-500 to-orange-600',
              },
              {
                icon: '🔄',
                title: 'CSRF',
                description: 'Подделка межсайтовых запросов',
                color: 'from-yellow-500 to-yellow-600',
              },
              {
                icon: '🔑',
                title: 'Пароли',
                description: 'Безопасность аутентификации',
                color: 'from-green-500 to-green-600',
              },
            ].map((topic, index) => (
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

export default HackingPage
