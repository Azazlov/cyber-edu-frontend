// Типы пользователя
export interface User {
  id: number
  email: string
  name: string
  role: 'student' | 'teacher' | 'admin'
  createdAt: string
}

// Типы урока
export interface Lesson {
  id: number
  title: string
  description: string
  category: 'hacking' | 'ai' | 'general'
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  duration: number // в минутах
  content: string // HTML или Markdown
  isCompleted?: boolean
}

// Типы задания в лаборатории
export interface LabTask {
  id: number
  title: string
  description: string
  category: 'hacking' | 'ai'
  difficulty: 'easy' | 'medium' | 'hard'
  points: number
  isCompleted?: boolean
}

// Типы викторины
export interface Quiz {
  id: number
  title: string
  category: 'hacking' | 'ai'
  questions: QuizQuestion[]
}

export interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}