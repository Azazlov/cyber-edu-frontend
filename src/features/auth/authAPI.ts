import { User } from '@/types'

// Моковая функция для логина
export const login = async (email: string, password: string): Promise<{ token: string; user: User }> => {
  // В реальном приложении здесь будет вызов API
  // await fetch('/api/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) })
  
  // Моковые данные для демонстрации
  if (email === 'student@example.com' && password === 'password') {
    return {
      token: 'mock-token-student',
      user: {
        id: 1,
        email: 'student@example.com',
        name: 'Студент Иванов',
        role: 'student',
        createdAt: new Date().toISOString()
      }
    }
  }
  
  if (email === 'teacher@example.com' && password === 'password') {
    return {
      token: 'mock-token-teacher',
      user: {
        id: 2,
        email: 'teacher@example.com',
        name: 'Учитель Петров',
        role: 'teacher',
        createdAt: new Date().toISOString()
      }
    }
  }
  
  throw new Error('Неверные учетные данные')
}

// Моковая функция для регистрации
export const register = async (userData: { email: string; password: string; name: string }): Promise<{ token: string; user: User }> => {
  // В реальном приложении здесь будет вызов API
  
  // Моковые данные для демонстрации
  return {
    token: 'mock-token-new-user',
    user: {
      id: Math.floor(Math.random() * 1000),
      email: userData.email,
      name: userData.name,
      role: 'student',
      createdAt: new Date().toISOString()
    }
  }
}

// Моковая функция для получения текущего пользователя
export const getCurrentUser = async (token: string): Promise<User> => {
  // В реальном приложении здесь будет вызов API с токеном в заголовке
  
  // Моковые данные для демонстрации
  return {
    id: 1,
    email: 'student@example.com',
    name: 'Студент Иванов',
    role: 'student',
    createdAt: new Date().toISOString()
  }
}