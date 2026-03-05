'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  getTeachingMaterials,
  getWebinars,
  getForumTopics,
  submitForumQuestion,
  TeachingMaterial,
  Webinar,
  ForumTopic,
  getCategoryName,
} from '@/features/teachers/teachersAPI'

const TeachersPage: React.FC = () => {
  const [materials, setMaterials] = useState<TeachingMaterial[]>([])
  const [webinars, setWebinars] = useState<Webinar[]>([])
  const [forumTopics, setForumTopics] = useState<ForumTopic[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'materials' | 'webinars' | 'forum'>('materials')
  const [showQuestionModal, setShowQuestionModal] = useState(false)
  const [questionTitle, setQuestionTitle] = useState('')
  const [questionContent, setQuestionContent] = useState('')
  const [questionCategory, setQuestionCategory] = useState('Методика')

  useEffect(() => {
    const loadData = async () => {
      try {
        const [materialsData, webinarsData, forumData] = await Promise.all([
          getTeachingMaterials(),
          getWebinars(),
          getForumTopics(),
        ])
        setMaterials(materialsData)
        setWebinars(webinarsData)
        setForumTopics(forumData)
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  const handleAskQuestion = async () => {
    if (!questionTitle || !questionContent) return

    try {
      const result = await submitForumQuestion(questionTitle, questionContent, questionCategory)
      if (result.success) {
        // Обновляем список тем
        const newTopic: ForumTopic = {
          id: result.topicId,
          title: questionTitle,
          author: 'Вы',
          replies: 0,
          views: 0,
          lastActivity: 'Только что',
          category: questionCategory,
        }
        setForumTopics(prev => [newTopic, ...prev])
        setShowQuestionModal(false)
        setQuestionTitle('')
        setQuestionContent('')
      }
    } catch (error) {
      console.error('Ошибка при отправке вопроса:', error)
    }
  }

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      method: '📚',
      presentation: '📊',
      worksheet: '📝',
      video: '🎬',
    }
    return icons[category] || '📄'
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4 py-12">
        {/* Заголовок раздела */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            👨‍🏫 Учителям
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Методические материалы, вебинары и сообщество педагогов
          </p>
        </motion.div>

        {/* Переключатель вкладок */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-2 inline-flex">
            <button
              onClick={() => setActiveTab('materials')}
              className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                activeTab === 'materials'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              📚 Материалы
            </button>
            <button
              onClick={() => setActiveTab('webinars')}
              className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                activeTab === 'webinars'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              🎥 Вебинары
            </button>
            <button
              onClick={() => setActiveTab('forum')}
              className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                activeTab === 'forum'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              💬 Форум
            </button>
          </div>
        </div>

        {/* Контент */}
        {activeTab === 'materials' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {materials.map((material, index) => (
                <motion.div
                  key={material.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{getCategoryIcon(material.category)}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {material.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {material.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium">
                      {getCategoryName(material.category)}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {material.grade} класс
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">
                      👁 {material.views} просмотров
                    </span>
                    <a
                      href={material.downloadUrl}
                      className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm"
                    >
                      Скачать →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'webinars' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-4xl mx-auto"
          >
            <div className="space-y-6">
              {webinars.map((webinar, index) => {
                const webinarDate = new Date(webinar.date)
                const isPast = webinarDate < new Date()

                return (
                  <motion.div
                    key={webinar.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-md p-6"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-800">
                            {webinar.title}
                          </h3>
                          {webinar.isLive && (
                            <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold animate-pulse">
                              🔴 LIVE
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 mb-4">{webinar.description}</p>
                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                          <span className="flex items-center">
                            <span className="mr-2">📅</span>
                            {webinarDate.toLocaleDateString('ru-RU', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric',
                            })}
                          </span>
                          <span className="flex items-center">
                            <span className="mr-2">🕐</span>
                            {webinar.time}
                          </span>
                          <span className="flex items-center">
                            <span className="mr-2">👤</span>
                            {webinar.speaker}
                          </span>
                        </div>
                      </div>
                      <button
                        disabled={isPast}
                        className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                          isPast
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                        }`}
                      >
                        {isPast ? 'Завершён' : 'Регистрация'}
                      </button>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}

        {activeTab === 'forum' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Форум</h2>
              <button
                onClick={() => setShowQuestionModal(true)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                Задать вопрос
              </button>
            </div>

            <div className="space-y-4">
              {forumTopics.map((topic, index) => (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs font-medium">
                          {topic.category}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {topic.title}
                        </h3>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>Автор: {topic.author}</span>
                        <span>👁 {topic.views}</span>
                        <span>💬 {topic.replies}</span>
                        <span>Последняя активность: {topic.lastActivity}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Информационный блок */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto mt-16"
        >
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              🎓 Профессиональное развитие
            </h2>
            <p className="mb-6 opacity-90">
              Получите сертификат о прохождении курса по кибербезопасности и AI-безопасности.
              Программа соответствует образовательным стандартам.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">50+</div>
                <div className="text-sm opacity-80">Часов контента</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">100+</div>
                <div className="text-sm opacity-80">Методических материалов</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">1000+</div>
                <div className="text-sm opacity-80">Педагогов в сообществе</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Модальное окно для вопроса */}
        <AnimatePresence>
          {showQuestionModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              onClick={() => setShowQuestionModal(false)}
            >
              <div
                className="bg-white rounded-lg max-w-lg w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-800">
                      Задать вопрос форуму
                    </h3>
                    <button
                      onClick={() => setShowQuestionModal(false)}
                      className="text-gray-500 hover:text-gray-700 text-2xl"
                    >
                      ×
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Категория
                      </label>
                      <select
                        value={questionCategory}
                        onChange={(e) => setQuestionCategory(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 bg-white"
                      >
                        <option>Методика</option>
                        <option>Практика</option>
                        <option>Ресурсы</option>
                        <option>Оценка</option>
                        <option>Другое</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Заголовок
                      </label>
                      <input
                        type="text"
                        value={questionTitle}
                        onChange={(e) => setQuestionTitle(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 placeholder-gray-400 bg-white"
                        placeholder="Кратко опишите ваш вопрос"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Текст вопроса
                      </label>
                      <textarea
                        value={questionContent}
                        onChange={(e) => setQuestionContent(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 placeholder-gray-400 bg-white"
                        rows={5}
                        placeholder="Опишите ваш вопрос подробно..."
                      />
                    </div>

                    <button
                      onClick={handleAskQuestion}
                      disabled={!questionTitle || !questionContent}
                      className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-colors ${
                        !questionTitle || !questionContent
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-indigo-600 hover:bg-indigo-700'
                      }`}
                    >
                      Опубликовать вопрос
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default TeachersPage
