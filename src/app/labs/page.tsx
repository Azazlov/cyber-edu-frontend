'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import SQLInjector from '@/components/interactive/SQLInjector'
import FakeFinder from '@/components/interactive/FakeFinder'
import { SkeletonCard, SkeletonHeader } from '@/components/common/Skeleton'
import { getLabTasks, getProgress, submitTask, LabTask, LabProgress } from '@/features/labs/labsAPI'

const LabsPage: React.FC = () => {
  const [tasks, setTasks] = useState<LabTask[]>([])
  const [progress, setProgress] = useState<LabProgress | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedTask, setSelectedTask] = useState<LabTask | null>(null)
  const [solution, setSolution] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        const [tasksData, progressData] = await Promise.all([
          getLabTasks(),
          getProgress(),
        ])
        setTasks(tasksData)
        setProgress(progressData)
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  const handleTaskClick = (task: LabTask) => {
    setSelectedTask(task)
    setSolution('')
    setSubmitResult(null)
  }

  const handleSubmit = async () => {
    if (!selectedTask) return

    setSubmitting(true)
    try {
      const result = await submitTask(selectedTask.id, solution)
      setSubmitResult({ success: result.success, message: result.message })

      if (result.success) {
        // Обновляем прогресс
        const newProgress = await getProgress()
        setProgress(newProgress)

        // Помечаем задание как выполненное
        setTasks(prev =>
          prev.map(t =>
            t.id === selectedTask.id ? { ...t, isCompleted: true } : t
          )
        )
      }
    } catch (error) {
      console.error('Ошибка при отправке решения:', error)
    } finally {
      setSubmitting(false)
    }
  }

  const closeTaskModal = () => {
    setSelectedTask(null)
    setSolution('')
    setSubmitResult(null)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-800 border-green-300'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300'
      case 'hard':
        return 'bg-red-100 text-red-800 border-red-300'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300'
    }
  }

  const getCategoryIcon = (category: string) => {
    return category === 'hacking' ? '🔐' : '🤖'
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <SkeletonHeader />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-12">
        {/* Заголовок раздела */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            🧪 Лаборатории
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Практикуйтесь в безопасной среде и зарабатывайте баллы
          </p>
        </motion.div>

        {/* Прогресс пользователя */}
        {progress && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-800">Ваш прогресс</h2>
                <div className="flex items-center space-x-4">
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                    Уровень {progress.level}
                  </span>
                  <span className="text-gray-600">
                    {progress.earnedPoints} / {progress.nextLevelPoints} очков
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">
                    {progress.completedTasks}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Выполнено заданий
                  </div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600">
                    {progress.totalPoints - progress.earnedPoints}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Осталось очков
                  </div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">
                    {progress.earnedPoints}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Всего очков
                  </div>
                </div>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-4">
                <motion.div
                  className="bg-gradient-to-r from-green-500 to-blue-500 h-4 rounded-full"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${(progress.completedTasks / progress.totalTasks) * 100}%`,
                  }}
                  transition={{ duration: 1 }}
                />
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">
                {Math.round((progress.completedTasks / progress.totalTasks) * 100)}% завершено
              </p>
            </div>
          </motion.div>
        )}

        {/* Список заданий */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Доступные задания</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map((task, index) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => handleTaskClick(task)}
                className={`
                  bg-white rounded-lg shadow-md p-6 cursor-pointer
                  border-2 transition-all
                  ${task.isCompleted
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-blue-400'
                  }
                `}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{getCategoryIcon(task.category)}</span>
                  {task.isCompleted && (
                    <span className="bg-green-500 text-white rounded-full p-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {task.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {task.description}
                </p>

                <div className="flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(
                      task.difficulty
                    )}`}
                  >
                    {task.difficulty === 'easy'
                      ? 'Лёгкий'
                      : task.difficulty === 'medium'
                      ? 'Средний'
                      : 'Сложный'}
                  </span>
                  <span className="text-purple-600 font-bold">{task.points} очков</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Быстрые тренировки */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-6xl mx-auto mt-16"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            🚀 Быстрые тренировки
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                💉 SQL-инъекции
              </h3>
              <p className="text-gray-600 mb-4">
                Потренируйтесь находить SQL-уязвимости
              </p>
              <div className="h-64 overflow-y-auto border rounded-lg p-4 bg-gray-50">
                <SQLInjector />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                🎭 Найди фейк
              </h3>
              <p className="text-gray-600 mb-4">
                Научитесь распознавать AI-фейки
              </p>
              <div className="h-64 overflow-y-auto border rounded-lg p-4 bg-gray-50">
                <FakeFinder />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Модальное окно задания */}
        {selectedTask && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={closeTaskModal}
          >
            <div
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {selectedTask.title}
                  </h2>
                  <button
                    onClick={closeTaskModal}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>

                <p className="text-gray-600 mb-4">{selectedTask.description}</p>

                <div className="flex items-center space-x-4 mb-6">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {getCategoryIcon(selectedTask.category)}{' '}
                    {selectedTask.category === 'hacking' ? 'Хакинг' : 'AI'}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      selectedTask.difficulty === 'easy'
                        ? 'bg-green-100 text-green-800'
                        : selectedTask.difficulty === 'medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {selectedTask.difficulty === 'easy'
                      ? 'Лёгкий'
                      : selectedTask.difficulty === 'medium'
                      ? 'Средний'
                      : 'Сложный'}
                  </span>
                  <span className="text-purple-600 font-bold">
                    {selectedTask.points} очков
                  </span>
                </div>

                {selectedTask.isCompleted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <div className="text-4xl mb-2">✅</div>
                    <p className="text-green-800 font-semibold">
                      Задание уже выполнено!
                    </p>
                    <p className="text-green-700 text-sm mt-1">
                      Вы получили {selectedTask.points} очков
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ваше решение:
                      </label>
                      <textarea
                        value={solution}
                        onChange={(e) => setSolution(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm text-gray-900 placeholder-gray-400 bg-white"
                        rows={6}
                        placeholder="Опишите ваше решение или введите код..."
                      />
                    </div>

                    {submitResult && (
                      <div
                        className={`mb-4 p-4 rounded-lg ${
                          submitResult.success
                            ? 'bg-green-50 border border-green-200'
                            : 'bg-red-50 border border-red-200'
                        }`}
                      >
                        <p
                          className={`font-semibold ${
                            submitResult.success
                              ? 'text-green-800'
                              : 'text-red-800'
                          }`}
                        >
                          {submitResult.message}
                        </p>
                      </div>
                    )}

                    <button
                      onClick={handleSubmit}
                      disabled={submitting || solution.length === 0}
                      className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-colors ${
                        submitting || solution.length === 0
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-blue-600 hover:bg-blue-700'
                      }`}
                    >
                      {submitting ? 'Проверка...' : 'Отправить решение'}
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default LabsPage
