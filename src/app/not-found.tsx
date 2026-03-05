'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl"
      >
        {/* Иллюстрация */}
        <div className="mb-8">
          <svg
            className="w-48 h-48 mx-auto text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Заголовок */}
        <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Страница не найдена
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Извините, страница, которую вы ищете, не существует.
          Возможно, она была перемещена или удалена.
        </p>

        {/* Кнопки действий */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            На главную
          </Link>
          <Link
            href="/hacking"
            className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-blue-600 font-semibold py-3 px-8 rounded-lg border-2 border-blue-600 transition-colors"
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
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            К урокам
          </Link>
        </div>

        {/* Полезные ссылки */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Возможно, вы искали:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/hacking"
              className="text-blue-600 hover:text-blue-700 hover:underline text-sm"
            >
              Уязвимости сайтов
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/ai"
              className="text-blue-600 hover:text-blue-700 hover:underline text-sm"
            >
              AI-безопасность
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/labs"
              className="text-blue-600 hover:text-blue-700 hover:underline text-sm"
            >
              Лаборатории
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/teachers"
              className="text-blue-600 hover:text-blue-700 hover:underline text-sm"
            >
              Учителям
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default NotFoundPage
