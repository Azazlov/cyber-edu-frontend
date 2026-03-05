'use client'

import React, { ReactNode } from 'react'

interface LessonContentProps {
  content: string
}

/**
 * Компонент для рендеринга контента урока с поддержкой Markdown-подобной разметки
 * Поддерживает:
 * - Заголовки (#, ##, ###)
 * - Жирный текст (**текст**)
 * - Списки (-)
 * - Списки с эмодзи (- ✅, - ❌, - ⚠️)
 * - Списки с жирным текстом (- **текст**)
 * - Блоки кода (```)
 * - Комментарии (//)
 */
export const LessonContent: React.FC<LessonContentProps> = ({ content }) => {
  const lines = content.split('\n')
  const elements: ReactNode[] = []
  let inCodeBlock = false
  let codeLines: string[] = []
  let inList = false
  let listItems: ReactNode[] = []

  const flushList = () => {
    if (inList && listItems.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 my-4 text-gray-700">
          {listItems}
        </ul>
      )
      listItems = []
      inList = false
    }
  }

  const processInlineFormatting = (text: string): ReactNode => {
    // Обрабатываем жирный текст **текст**
    if (text.includes('**')) {
      const parts = text.split(/\*\*(.+?)\*\*/)
      return parts.map((part, i) =>
        i % 2 === 1 ? <strong key={i} className="text-gray-900">{part}</strong> : part
      )
    }
    return text
  }

  lines.forEach((line, index) => {
    // Блоки кода
    if (line.startsWith('```')) {
      if (inCodeBlock) {
        // Конец блока кода
        elements.push(
          <pre
            key={`code-${index}`}
            className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto my-4 font-mono text-sm"
          >
            <code>{codeLines.join('\n')}</code>
          </pre>
        )
        codeLines = []
        inCodeBlock = false
      } else {
        // Начало блока кода
        flushList()
        inCodeBlock = true
      }
      return
    }

    if (inCodeBlock) {
      codeLines.push(line)
      return
    }

    // Заголовки
    if (line.startsWith('# ')) {
      flushList()
      elements.push(
        <h1 key={`h1-${index}`} className="text-3xl font-bold text-gray-800 mt-8 mb-4">
          {line.replace('# ', '')}
        </h1>
      )
      return
    }

    if (line.startsWith('## ')) {
      flushList()
      elements.push(
        <h2 key={`h2-${index}`} className="text-2xl font-bold text-gray-800 mt-6 mb-3">
          {line.replace('## ', '')}
        </h2>
      )
      return
    }

    if (line.startsWith('### ')) {
      flushList()
      elements.push(
        <h3 key={`h3-${index}`} className="text-xl font-bold text-gray-800 mt-4 mb-2">
          {line.replace('### ', '')}
        </h3>
      )
      return
    }

    // Пустые строки
    if (line.trim() === '') {
      flushList()
      return
    }

    // Списки
    if (line.startsWith('- ')) {
      inList = true
      const itemContent = line.substring(2)

      // Список с эмодзи и жирным текстом: - ✅ **Текст**
      const emojiMatch = itemContent.match(/^([✅❌⚠️🔴🟢🟡])\s*\*\*(.+?)\*\*\s*(.*)?$/)
      if (emojiMatch) {
        const [, emoji, boldText, rest] = emojiMatch
        listItems.push(
          <li key={`item-${index}`} className="ml-2">
            <span className="mr-2">{emoji}</span>
            <strong className="text-gray-900">{boldText}</strong>
            {rest && <span className="text-gray-700"> {rest}</span>}
          </li>
        )
        return
      }

      // Список с эмодзи: - ✅ Текст
      if (/^[✅❌⚠️🔴🟢🟡]/.test(itemContent)) {
        const emoji = itemContent.charAt(0)
        const rest = itemContent.substring(1).trim()
        listItems.push(
          <li key={`item-${index}`} className="ml-2">
            <span className="mr-2">{emoji}</span>
            <span>{processInlineFormatting(rest)}</span>
          </li>
        )
        return
      }

      // Список с жирным текстом и описанием: - **Текст** — описание
      const boldDashMatch = itemContent.match(/^\*\*(.+?)\*\*\s*[—-]\s*(.+)$/)
      if (boldDashMatch) {
        const [, boldText, description] = boldDashMatch
        listItems.push(
          <li key={`item-${index}`} className="ml-2">
            <strong className="text-gray-900">{boldText}</strong>
            <span className="text-gray-700"> — {description}</span>
          </li>
        )
        return
      }

      // Список с жирным текстом: - **Текст**
      if (itemContent.startsWith('**')) {
        listItems.push(
          <li key={`item-${index}`} className="ml-2">
            {processInlineFormatting(itemContent)}
          </li>
        )
        return
      }

      // Обычный список
      listItems.push(
        <li key={`item-${index}`} className="ml-2">
          {processInlineFormatting(itemContent)}
        </li>
      )
      return
    }

    // Обычный текст
    flushList()
    elements.push(
      <p key={`p-${index}`} className="text-gray-700 my-2 leading-relaxed">
        {processInlineFormatting(line)}
      </p>
    )
  })

  // Flush остатков
  flushList()

  return <div className="prose prose-lg max-w-none">{elements}</div>
}
