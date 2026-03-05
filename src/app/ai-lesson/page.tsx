'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { getAILessonById, getAILessons } from '@/features/ai/aiAPI'
import { AILesson } from '@/features/ai/aiAPI'
import { LessonContent } from '@/components/common/LessonContent'

const AILessonContentWrapper: React.FC = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [lesson, setLesson] = useState<AILesson | null>(null)
  const [relatedLessons, setRelatedLessons] = useState<AILesson[]>([])
  const [loading, setLoading] = useState(true)
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    const loadLesson = async () => {
      try {
        const lessonId = parseInt(searchParams.get('id') || '0')

        if (isNaN(lessonId) || lessonId === 0) {
          router.push('/ai')
          return
        }

        const [lessonData, allLessons] = await Promise.all([
          getAILessonById(lessonId),
          getAILessons(),
        ])

        if (!lessonData) {
          router.push('/ai')
          return
        }

        setLesson(lessonData)
        setRelatedLessons(allLessons.filter(l => l.id !== lessonId).slice(0, 3))
      } catch (error) {
        console.error('Ошибка при загрузке урока:', error)
        router.push('/ai')
      } finally {
        setLoading(false)
      }
    }

    loadLesson()
  }, [searchParams, router])

  const handleComplete = () => {
    setCompleted(true)
    localStorage.setItem(`ai-lesson-${searchParams.get('id')}-completed`, 'true')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse space-y-4 mb-8">
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
            
            <div className="animate-pulse space-y-3">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-32 bg-gray-200 rounded my-6"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!lesson) {
    return null
  }

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
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-purple-600">
                Главная
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href="/ai" className="hover:text-purple-600">
                AI-безопасность
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">{lesson.title}</li>
          </ol>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-start justify-between mb-4">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                {lesson.title}
              </h1>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ml-4 ${getDifficultyColor(
                  lesson.difficulty
                )}`}
              >
                {getDifficultyText(lesson.difficulty)}
              </span>
            </div>
            
            <p className="text-gray-600 text-lg mb-4">{lesson.description}</p>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
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
                {lesson.duration} минут
              </span>
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.8.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.49a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                AI-безопасность
              </span>
            </div>

            {completed && (
              <div className="mt-4 flex items-center text-green-600">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-semibold">Вы завершили этот урок!</span>
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <LessonContent content={lesson.content} />
          </div>

          {!completed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-lg shadow-md p-6 mb-6 text-center"
            >
              <p className="text-gray-700 mb-4">
                Вы изучили материал? Отметьте урок как завершённый!
              </p>
              <button
                onClick={handleComplete}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                ✅ Завершить урок
              </button>
            </motion.div>
          )}

          <div className="flex justify-between items-center mb-8">
            <Link
              href="/ai"
              className="text-purple-600 hover:text-purple-700 font-semibold flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Назад к урокам
            </Link>
          </div>

          {relatedLessons.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Другие уроки
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedLessons.map((relatedLesson) => (
                  <Link
                    key={relatedLesson.id}
                    href={`/ai-lesson?id=${relatedLesson.id}`}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {relatedLesson.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {relatedLesson.description}
                    </p>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                        relatedLesson.difficulty
                      )}`}
                    >
                      {getDifficultyText(relatedLesson.difficulty)}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

const AILessonPage: React.FC = () => {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-b from-purple-50 to-white"><div className="container mx-auto px-4 py-12"><div className="max-w-4xl mx-auto"><div className="animate-pulse space-y-4"><div className="h-8 bg-gray-200 rounded w-3/4"></div><div className="h-4 bg-gray-200 rounded w-1/2"></div></div></div></div></div>}>
      <AILessonContentWrapper />
    </Suspense>
  )
}

export default AILessonPage
