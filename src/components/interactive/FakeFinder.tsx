'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getFakeNewsPairs, FakeNewsPair } from '@/features/ai/aiAPI'

interface FakeFinderProps {
  onComplete?: (score: number) => void
}

const FakeFinder: React.FC<FakeFinderProps> = ({ onComplete }) => {
  const [pairs, setPairs] = useState<FakeNewsPair[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState<1 | 2 | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [loading, setLoading] = useState(true)
  const [gameComplete, setGameComplete] = useState(false)

  React.useEffect(() => {
    const loadPairs = async () => {
      const data = await getFakeNewsPairs()
      setPairs(data)
      setLoading(false)
    }
    loadPairs()
  }, [])

  const handleSelect = (choice: 1 | 2) => {
    if (showResult) return
    setSelected(choice)
    setShowResult(true)

    const currentPair = pairs[currentIndex]
    const isCorrect =
      (choice === 1 && currentPair.news1.isFake) ||
      (choice === 2 && currentPair.news2.isFake)

    if (isCorrect) {
      setScore(prev => prev + 1)
    }

    setTimeout(() => {
      if (currentIndex < pairs.length - 1) {
        setCurrentIndex(prev => prev + 1)
        setSelected(null)
        setShowResult(false)
      } else {
        setGameComplete(true)
        if (onComplete) {
          onComplete(isCorrect ? score + 1 : score)
        }
      }
    }, 2500)
  }

  const restartGame = () => {
    setCurrentIndex(0)
    setSelected(null)
    setShowResult(false)
    setScore(0)
    setGameComplete(false)
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  if (gameComplete) {
    const percentage = (score / pairs.length) * 100
    let message = ''
    let emoji = ''

    if (percentage === 100) {
      message = 'Идеально! Вы мастер распознавания фейков!'
      emoji = '🏆'
    } else if (percentage >= 75) {
      message = 'Отличный результат! Вы хорошо разбираетесь!'
      emoji = '🎉'
    } else if (percentage >= 50) {
      message = 'Неплохо, но можно лучше!'
      emoji = '👍'
    } else {
      message = 'Продолжайте учиться распознавать фейки!'
      emoji = '📚'
    }

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto text-center"
      >
        <div className="text-6xl mb-4">{emoji}</div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Игра завершена!</h2>
        <p className="text-2xl text-purple-600 font-semibold mb-2">
          Ваш счёт: {score} из {pairs.length}
        </p>
        <p className="text-gray-600 mb-6">{message}</p>
        <button
          onClick={restartGame}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
        >
          Играть снова
        </button>
      </motion.div>
    )
  }

  const currentPair = pairs[currentIndex]

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          🎭 Найди фейк
        </h2>
        <p className="text-gray-600">
          Определите, какая из новостей является подделкой
        </p>
      </div>

      {/* Прогресс */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            Вопрос {currentIndex + 1} из {pairs.length}
          </span>
          <span className="text-sm text-purple-600 font-semibold">
            Счёт: {score}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-purple-600 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / pairs.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Тема */}
      <div className="text-center mb-6">
        <span className="inline-block bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-sm font-medium">
          {currentPair.topic}
        </span>
      </div>

      {/* Карточки с новостями */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {[1, 2].map((num) => {
          const news = num === 1 ? currentPair.news1 : currentPair.news2
          const isSelected = selected === num
          const isCorrect =
            selected &&
            ((num === 1 && currentPair.news1.isFake) ||
              (num === 2 && currentPair.news2.isFake))
          const isWrong = selected && isSelected && !isCorrect

          return (
            <motion.div
              key={num}
              whileHover={!showResult ? { scale: 1.02 } : {}}
              onClick={() => handleSelect(num as 1 | 2)}
              className={`
                relative p-6 rounded-lg border-2 cursor-pointer transition-all
                ${
                  showResult
                    ? num === 1
                      ? currentPair.news1.isFake
                        ? 'bg-green-50 border-green-500'
                        : 'bg-gray-50 border-gray-300'
                      : currentPair.news2.isFake
                      ? 'bg-green-50 border-green-500'
                      : 'bg-gray-50 border-gray-300'
                    : 'bg-gray-50 border-gray-200 hover:border-purple-400'
                }
                ${isSelected ? 'ring-2 ring-purple-500' : ''}
                ${isWrong ? 'bg-red-50 border-red-500' : ''}
              `}
            >
              {showResult &&
                ((num === 1 && currentPair.news1.isFake) ||
                  (num === 2 && currentPair.news2.isFake)) && (
                  <div className="absolute -top-3 -right-3 bg-green-500 text-white rounded-full p-2">
                    <svg
                      className="w-5 h-5"
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
                  </div>
                )}

              <div className="text-sm text-gray-500 mb-2">
                Новость {num}
              </div>
              <p className="text-gray-800 leading-relaxed">{news.text}</p>

              <AnimatePresence>
                {showResult && isSelected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`mt-4 pt-4 border-t ${
                      isCorrect ? 'border-green-300' : 'border-red-300'
                    }`}
                  >
                    <p
                      className={`font-semibold mb-2 ${
                        isCorrect ? 'text-green-800' : 'text-red-800'
                      }`}
                    >
                      {isCorrect ? '✅ Правильно!' : '❌ Неверно!'}
                    </p>
                    <p className="text-sm text-gray-700">
                      {news.explanation}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>

      {/* Инструкция */}
      {!selected && (
        <p className="text-center text-gray-500 text-sm">
          Нажмите на карточку с фейковой новостью
        </p>
      )}

      {/* Подсказки */}
      <div className="mt-8 pt-6 border-t">
        <h4 className="font-semibold text-gray-700 mb-3">
          🔍 Как распознать фейк:
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div className="flex items-start space-x-2">
            <span className="text-purple-600">•</span>
            <span className="text-gray-600">
              Проверьте источник информации
            </span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-purple-600">•</span>
            <span className="text-gray-600">
              Ищите подтверждение в других СМИ
            </span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-purple-600">•</span>
            <span className="text-gray-600">
              Обратите внимание на эмоции в заголовке
            </span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-purple-600">•</span>
            <span className="text-gray-600">
              Проверьте дату публикации
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FakeFinder
