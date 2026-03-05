'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SQLInjectorProps {
  onComplete?: () => void
}

interface QueryResult {
  success: boolean
  message: string
  data?: any[]
  hint?: string
}

// Моковые данные базы данных
const mockDatabase = {
  users: [
    { id: 1, name: 'admin', email: 'admin@example.com', password: 'hashed_password_1' },
    { id: 2, name: 'user1', email: 'user1@example.com', password: 'hashed_password_2' },
    { id: 3, name: 'user2', email: 'user2@example.com', password: 'hashed_password_3' },
  ],
  products: [
    { id: 1, name: 'Ноутбук', price: 50000 },
    { id: 2, name: 'Смартфон', price: 30000 },
    { id: 3, name: 'Планшет', price: 20000 },
  ],
}

const SQLInjector: React.FC<SQLInjectorProps> = ({ onComplete }) => {
  const [query, setQuery] = useState('SELECT * FROM users WHERE id = 1')
  const [result, setResult] = useState<QueryResult | null>(null)
  const [level, setLevel] = useState(1)
  const [attempts, setAttempts] = useState(0)

  // Проверка SQL-запроса
  const checkQuery = () => {
    setAttempts(prev => prev + 1)
    const normalizedQuery = query.trim().toUpperCase()
    let queryResult: QueryResult = {
      success: false,
      message: '❌ Неверный запрос.',
      hint: 'Попробуйте ещё раз',
    }

    // Уровень 1: Базовый SELECT
    if (level === 1) {
      if (normalizedQuery.includes('SELECT') && normalizedQuery.includes('FROM USERS')) {
        if (normalizedQuery.includes('DROP') || normalizedQuery.includes('DELETE')) {
          queryResult = {
            success: false,
            message: '⚠️ Опасная операция! Попробуйте просто получить данные.',
            hint: 'Используйте SELECT * FROM users WHERE id = 1 для получения пользователя с id=1',
          }
        } else if (normalizedQuery.includes('WHERE') && normalizedQuery.includes('ID = 1')) {
          // Правильный запрос с WHERE id = 1
          queryResult = {
            success: true,
            message: '✅ Успех! Вы получили пользователя с id=1.',
            data: [mockDatabase.users[0]], // Показываем только первого пользователя
          }
        } else if (normalizedQuery.includes('WHERE')) {
          // Запрос с WHERE, но другим условием
          queryResult = {
            success: false,
            message: '📝 Запрос выполнен, но попробуйте получить именно пользователя с id=1.',
            hint: 'Используйте: SELECT * FROM users WHERE id = 1',
          }
        } else {
          // Запрос без WHERE — возвращает всех
          queryResult = {
            success: false,
            message: '📝 Этот запрос вернёт всех пользователей, а нужно получить только с id=1.',
            hint: 'Добавьте условие: WHERE id = 1',
          }
        }
      } else {
        queryResult = {
          success: false,
          message: '❌ Неверный запрос. Попробуйте ещё раз.',
          hint: 'Используйте: SELECT * FROM users WHERE id = 1',
        }
      }
    }
    // Уровень 2: SQL-инъекция с UNION
    else if (level === 2) {
      // Проверяем на полноценную UNION-атаку
      const hasUnionAttack = normalizedQuery.includes('UNION') && 
                             (normalizedQuery.includes('SELECT * FROM PRODUCTS') || 
                              normalizedQuery.includes('SELECT * FROM users'));
      
      if (hasUnionAttack) {
        queryResult = {
          success: true,
          message: '🎉 Отлично! Вы использовали UNION для объединения результатов!',
          data: [...mockDatabase.users, ...mockDatabase.products.map(p => ({ id: p.id, name: p.name, email: `Product: ${p.name}` }))],
        }
      } else if (normalizedQuery.includes('UNION') && normalizedQuery.includes('SELECT')) {
        // UNION есть, но не полная атака
        queryResult = {
          success: false,
          message: '📝 UNION используется, но нужно получить данные из таблицы products.',
          hint: 'Попробуйте: SELECT * FROM users UNION SELECT * FROM products',
        }
      } else if (normalizedQuery.includes('SELECT')) {
        queryResult = {
          success: false,
          message: '📝 Обычный запрос работает, но попробуйте найти уязвимость!',
          hint: 'Попробуйте использовать: UNION SELECT для получения данных из другой таблицы',
        }
      } else {
        queryResult = {
          success: false,
          message: '❌ Неверный запрос.',
          hint: 'Попробуйте: SELECT * FROM users UNION SELECT * FROM products',
        }
      }
    }
    // Уровень 3: Обход аутентификации
    else if (level === 3) {
      if (normalizedQuery.includes("' OR '1'='1") || normalizedQuery.includes("' OR 1=1")) {
        queryResult = {
          success: true,
          message: '🔓 Взлом успешен! Вы обошли аутентификацию!',
          data: mockDatabase.users,
        }
      } else if (normalizedQuery.includes('SELECT')) {
        queryResult = {
          success: false,
          message: '📝 Запрос выполнен, но аутентификация не обойдена.',
          hint: 'Попробуйте: \' OR \'1\'=\'1 в условии WHERE',
        }
      } else {
        queryResult = {
          success: false,
          message: '❌ Неверный запрос.',
          hint: 'Используйте уязвимость: \' OR \'1\'=\'1',
        }
      }
    }

    setResult(queryResult)

    if (queryResult.success) {
      // Уровень пройден — показываем результат, но не переходим автоматически
      // Пользователь сам перейдёт к следующему уровню
    }
  }

  const nextLevel = () => {
    if (level < 3) {
      setLevel(prev => prev + 1)
      setResult(null)
      setAttempts(0)
      // Сбрасываем запрос на шаблон для следующего уровня
      if (level === 1) {
        setQuery("SELECT * FROM users WHERE id = '1'")
      } else if (level === 2) {
        setQuery("SELECT * FROM users WHERE name = ''")
      }
    }
  }

  const resetLevel = () => {
    setResult(null)
    setAttempts(0)
    setQuery(level === 1 ? 'SELECT * FROM users WHERE id = 1' : level === 2 ? "SELECT * FROM users WHERE id = '1'" : "SELECT * FROM users WHERE name = ''")
  }

  const levels = [
    { title: 'Уровень 1: Получение данных', description: 'Напишите SQL-запрос для получения пользователя с id=1' },
    { title: 'Уровень 2: UNION-атака', description: 'Используйте UNION для получения данных из другой таблицы' },
    { title: 'Уровень 3: Обход аутентификации', description: 'Обойдите проверку логина с помощью SQL-инъекции' },
  ]

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">🔓 Симулятор SQL-инъекции</h2>
      <p className="text-gray-600 mb-6">Научитесь находить и эксплуатировать SQL-уязвимости в безопасной среде</p>

      {/* Индикатор уровня */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Прогресс</span>
          <span className="text-sm text-gray-600">Уровень {level} из 3</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-blue-600 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(level / 3) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Описание уровня */}
      <motion.div
        key={level}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6"
      >
        <h3 className="font-semibold text-blue-800">{levels[level - 1].title}</h3>
        <p className="text-blue-700 text-sm mt-1">{levels[level - 1].description}</p>
      </motion.div>

      {/* Поле ввода запроса */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Ваш SQL-запрос:
        </label>
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-3 font-mono text-sm bg-gray-900 text-green-400 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Введите SQL-запрос..."
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs">
            SQL
          </div>
        </div>
      </div>

      {/* Кнопки действий */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={checkQuery}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Выполнить запрос
        </button>
        <button
          onClick={resetLevel}
          className="px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
        >
          Сбросить
        </button>
      </div>

      {/* Результат */}
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`rounded-lg p-4 ${
              result.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
            }`}
          >
            <p className={`font-semibold mb-2 ${result.success ? 'text-green-800' : 'text-red-800'}`}>
              {result.message}
            </p>
            {result.hint && (
              <p className="text-sm text-gray-600 mb-3">💡 Подсказка: {result.hint}</p>
            )}
            {result.data && (
              <div className="bg-white rounded border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        {Object.keys(result.data[0]).map((key) => (
                          <th key={key} className="px-4 py-2 text-left text-gray-700 font-medium uppercase">
                            {key}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {result.data.slice(0, 5).map((row, idx) => (
                        <tr key={idx} className="border-t">
                          {Object.entries(row).map(([key, value]) => (
                            <td key={key} className="px-4 py-2 text-gray-600">
                              {String(value)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            
            {/* Кнопка следующего уровня */}
            {result.success && level < 3 && (
              <div className="mt-4 flex gap-3">
                <button
                  onClick={nextLevel}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                >
                  Следующий уровень →
                </button>
                <button
                  onClick={resetLevel}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-lg transition-colors"
                >
                  Заново
                </button>
              </div>
            )}
            
            {/* Сообщение о завершении */}
            {result.success && level === 3 && (
              <div className="mt-4">
                <p className="text-green-800 font-semibold">
                  🎉 Поздравляем! Вы прошли все уровни симулятора!
                </p>
                <button
                  onClick={() => {
                    setLevel(1)
                    setResult(null)
                    setAttempts(0)
                    setQuery('SELECT * FROM users WHERE id = 1')
                  }}
                  className="mt-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                >
                  Начать заново
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Статистика попыток */}
      {attempts > 0 && (
        <div className="mt-4 text-sm text-gray-500 text-center">
          Попыток: {attempts}
        </div>
      )}

      {/* Подсказки по уровням */}
      <div className="mt-8 pt-6 border-t">
        <h4 className="font-semibold text-gray-700 mb-3">📚 Справочник:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-gray-50 p-3 rounded">
            <p className="font-mono text-blue-600">SELECT * FROM table</p>
            <p className="text-gray-600 mt-1">Получить все данные из таблицы</p>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <p className="font-mono text-blue-600">UNION SELECT</p>
            <p className="text-gray-600 mt-1">Объединить результаты запросов</p>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <p className="font-mono text-blue-600">{'\' OR \'1\'=\'1'}</p>
            <p className="text-gray-600 mt-1">Обход условия WHERE</p>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <p className="font-mono text-blue-600">-- (комментарий)</p>
            <p className="text-gray-600 mt-1">Игнорировать остальную часть запроса</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SQLInjector
