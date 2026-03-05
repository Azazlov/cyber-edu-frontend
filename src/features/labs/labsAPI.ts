import type { LabTask as BaseLabTask } from '@/types'

export interface LabTask extends BaseLabTask {
  isCompleted?: boolean
}

// Моковые данные для лабораторных работ
const mockLabTasks: LabTask[] = [
  {
    id: 1,
    title: 'Взлом уязвимого сайта',
    description: 'Найдите и эксплуатируйте SQL-уязвимость на тестовом сайте',
    category: 'hacking',
    difficulty: 'easy',
    points: 100,
    isCompleted: false,
  },
  {
    id: 2,
    title: 'XSS-атака на форму комментариев',
    description: 'Внедрите JavaScript-код в форму комментариев',
    category: 'hacking',
    difficulty: 'medium',
    points: 150,
    isCompleted: false,
  },
  {
    id: 3,
    title: 'Обход аутентификации',
    description: 'Войдите в систему без знания пароля',
    category: 'hacking',
    difficulty: 'medium',
    points: 200,
    isCompleted: false,
  },
  {
    id: 4,
    title: 'Распознавание AI-фейка',
    description: 'Определите, какое изображение сгенерировано ИИ',
    category: 'ai',
    difficulty: 'easy',
    points: 100,
    isCompleted: false,
  },
  {
    id: 5,
    title: 'Анализ новостной статьи',
    description: 'Найдите признаки манипуляции в новостной статье',
    category: 'ai',
    difficulty: 'medium',
    points: 150,
    isCompleted: false,
  },
  {
    id: 6,
    title: 'Создание безопасного сайта',
    description: 'Защитите сайт от основных уязвимостей',
    category: 'hacking',
    difficulty: 'hard',
    points: 300,
    isCompleted: false,
  },
]

export interface LabProgress {
  totalTasks: number
  completedTasks: number
  totalPoints: number
  earnedPoints: number
  level: number
  nextLevelPoints: number
}

export const getLabTasks = async (): Promise<LabTask[]> => {
  return mockLabTasks
}

export const getTaskById = async (id: number): Promise<LabTask | null> => {
  return mockLabTasks.find(t => t.id === id) || null
}

export const submitTask = async (taskId: number, solution: string): Promise<{ success: boolean; points: number; message: string }> => {
  // В реальном приложении здесь будет проверка решения на бэкенде
  // Имитация задержки проверки
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Простая моковая логика проверки
  if (solution.length > 10) {
    const task = mockLabTasks.find(t => t.id === taskId)
    return {
      success: true,
      points: task?.points || 0,
      message: '✅ Задание выполнено успешно!',
    }
  }
  
  return {
    success: false,
    points: 0,
    message: '❌ Решение неверное. Попробуйте ещё раз.',
  }
}

export const getProgress = async (): Promise<LabProgress> => {
  const totalTasks = mockLabTasks.length
  const completedTasks = mockLabTasks.filter(t => t.isCompleted).length
  const totalPoints = mockLabTasks.reduce((sum, t) => sum + t.points, 0)
  const earnedPoints = mockLabTasks.filter(t => t.isCompleted).reduce((sum, t) => sum + t.points, 0)
  
  // Простая система уровней
  const level = Math.floor(earnedPoints / 500) + 1
  const nextLevelPoints = level * 500
  
  return {
    totalTasks,
    completedTasks,
    totalPoints,
    earnedPoints,
    level,
    nextLevelPoints,
  }
}
