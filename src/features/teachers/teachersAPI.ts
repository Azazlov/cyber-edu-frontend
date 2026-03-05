// Моковые данные для раздела учителей

export interface TeachingMaterial {
  id: number
  title: string
  description: string
  category: 'method' | 'presentation' | 'worksheet' | 'video'
  grade: string
  downloadUrl: string
  views: number
}

export interface Webinar {
  id: number
  title: string
  description: string
  date: string
  time: string
  speaker: string
  registrationUrl: string
  isLive: boolean
}

export interface ForumTopic {
  id: number
  title: string
  author: string
  replies: number
  views: number
  lastActivity: string
  category: string
}

const mockMaterials: TeachingMaterial[] = [
  {
    id: 1,
    title: 'Введение в кибербезопасность',
    description: 'Методическое пособие для 8-9 классов',
    category: 'method',
    grade: '8-9',
    downloadUrl: '#',
    views: 1250,
  },
  {
    id: 2,
    title: 'Презентация: SQL-инъекции',
    description: 'Наглядная презентация с примерами',
    category: 'presentation',
    grade: '9-11',
    downloadUrl: '#',
    views: 890,
  },
  {
    id: 3,
    title: 'Рабочий лист: Виды уязвимостей',
    description: 'Задания для самостоятельной работы',
    category: 'worksheet',
    grade: '8-10',
    downloadUrl: '#',
    views: 654,
  },
  {
    id: 4,
    title: 'Видеоурок: Основы AI-безопасности',
    description: 'Видеоматериал о безопасности ИИ',
    category: 'video',
    grade: '9-11',
    downloadUrl: '#',
    views: 2100,
  },
  {
    id: 5,
    title: 'Методичка: Проведение хакатона',
    description: 'Организация соревнований по кибербезопасности',
    category: 'method',
    grade: '10-11',
    downloadUrl: '#',
    views: 432,
  },
]

const mockWebinars: Webinar[] = [
  {
    id: 1,
    title: 'Современные угрозы кибербезопасности',
    description: 'Обзор актуальных угроз и методов защиты',
    date: '2026-03-15',
    time: '18:00',
    speaker: 'Иванов П.С., эксперт по кибербезопасности',
    registrationUrl: '#',
    isLive: false,
  },
  {
    id: 2,
    title: 'Как говорить с детьми о цифровом следе',
    description: 'Методы и подходы к обучению',
    date: '2026-03-20',
    time: '19:00',
    speaker: 'Петрова А.В., педагог-психолог',
    registrationUrl: '#',
    isLive: true,
  },
  {
    id: 3,
    title: 'AI в образовании: возможности и риски',
    description: 'Практическое применение ИИ в школе',
    date: '2026-03-25',
    time: '18:00',
    speaker: 'Сидоров К.М., разработчик EdTech',
    registrationUrl: '#',
    isLive: false,
  },
]

const mockForumTopics: ForumTopic[] = [
  {
    id: 1,
    title: 'Как заинтересовать детей темой безопасности?',
    author: 'Учитель_ИТ',
    replies: 24,
    views: 312,
    lastActivity: '2 часа назад',
    category: 'Методика',
  },
  {
    id: 2,
    title: 'Лучшие практики проведения лабораторных работ',
    author: 'КиберПедагог',
    replies: 18,
    views: 256,
    lastActivity: '5 часов назад',
    category: 'Практика',
  },
  {
    id: 3,
    title: 'Ресурсы для подготовки к урокам',
    author: 'Мария_Иванова',
    replies: 42,
    views: 589,
    lastActivity: '1 день назад',
    category: 'Ресурсы',
  },
  {
    id: 4,
    title: 'Вопрос по оценке прогресса студентов',
    author: 'НовыйУчитель',
    replies: 8,
    views: 124,
    lastActivity: '2 дня назад',
    category: 'Оценка',
  },
]

export const getTeachingMaterials = async (): Promise<TeachingMaterial[]> => {
  return mockMaterials
}

export const getWebinars = async (): Promise<Webinar[]> => {
  return mockWebinars
}

export const getForumTopics = async (): Promise<ForumTopic[]> => {
  return mockForumTopics
}

export const submitForumQuestion = async (
  title: string,
  content: string,
  category: string
): Promise<{ success: boolean; topicId: number }> => {
  // Имитация отправки вопроса
  await new Promise(resolve => setTimeout(resolve, 500))
  
  return {
    success: true,
    topicId: Math.floor(Math.random() * 1000),
  }
}

export const getCategoryName = (category: string): string => {
  const names: Record<string, string> = {
    method: 'Методички',
    presentation: 'Презентации',
    worksheet: 'Рабочие листы',
    video: 'Видео',
  }
  return names[category] || category
}
