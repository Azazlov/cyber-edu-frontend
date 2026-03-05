'use client'

import React from 'react'
import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'

const HomePage: React.FC = () => {
  const { user, isAuthenticated } = useAuth()

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        {/* Hero секция */}
        <section className="text-center py-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Изучай кибербезопасность <br />
            <span className="text-blue-600">играючи!</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Интерактивные уроки, игры и лаборатории для безопасного изучения мира кибербезопасности и AI-безопасности
          </p>
          
          <div className="flex justify-center space-x-4">
            <Link 
              href="/hacking" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Начать обучение
            </Link>
            {!isAuthenticated && (
              <Link 
                href="/register" 
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Зарегистрироваться
              </Link>
            )}
          </div>
        </section>

        {/* Что ты узнаешь? */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Что ты узнаешь?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Уязвимости сайтов</h3>
              <p className="text-gray-600">
                Изучи, как находить и исправлять уязвимости в веб-приложениях, такие как SQL-инъекции и XSS-атаки.
              </p>
              <Link href="/hacking" className="text-blue-600 hover:underline mt-4 inline-block">
                Подробнее →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.8.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.49a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">AI-безопасность</h3>
              <p className="text-gray-600">
                Научись распознавать фейковую информацию, генерируемую искусственным интеллектом.
              </p>
              <Link href="/ai" className="text-blue-600 hover:underline mt-4 inline-block">
                Подробнее →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Практические навыки</h3>
              <p className="text-gray-600">
                Примени свои знания в безопасных лабораториях и заработай бейджи за достижения.
              </p>
              <Link href="/labs" className="text-blue-600 hover:underline mt-4 inline-block">
                Подробнее →
              </Link>
            </div>
          </div>
        </section>

        {/* Последние обновления */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Последние обновления</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Новый раздел: Защита персональных данных</h3>
              <p className="text-gray-600 mb-2">Добавлены уроки о том, как защищать свою личную информацию в интернете.</p>
              <span className="text-sm text-gray-500">2 марта 2026</span>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Интерактивный симулятор SQL-инъекции</h3>
              <p className="text-gray-600 mb-2">Практикуйся в безопасной среде с нашим новым симулятором уязвимостей.</p>
              <span className="text-sm text-gray-500">28 февраля 2026</span>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">AI-тренажер "Найди фейк"</h3>
              <p className="text-gray-600 mb-2">Улучшенный тренажер для распознавания фейковых новостей, сгенерированных ИИ.</p>
              <span className="text-sm text-gray-500">25 февраля 2026</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomePage