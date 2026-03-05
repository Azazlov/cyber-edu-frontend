import React from 'react'

interface SkeletonProps {
  className?: string
  width?: string | number
  height?: string | number
  rounded?: 'sm' | 'md' | 'lg' | 'full'
  variant?: 'text' | 'circular' | 'rectangular'
}

/**
 * Базовый Skeleton компонент для отображения загрузки
 */
export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  width,
  height,
  rounded = 'md',
  variant = 'text',
}) => {
  const roundedClasses = {
    sm: 'rounded-sm',
    md: 'rounded',
    lg: 'rounded-lg',
    full: 'rounded-full',
  }

  const baseClasses = `
    animate-pulse
    bg-gray-200
    ${roundedClasses[rounded]}
    ${variant === 'circular' ? 'rounded-full' : ''}
    ${className}
  `

  const style: React.CSSProperties = {}
  if (width) style.width = typeof width === 'number' ? `${width}px` : width
  if (height) style.height = typeof height === 'number' ? `${height}px` : height

  return <div className={baseClasses} style={style} />
}

/**
 * Skeleton для текста (строка)
 */
export const SkeletonText: React.FC<{
  lines?: number
  spacing?: 'sm' | 'md' | 'lg'
  className?: string
}> = ({ lines = 3, spacing = 'md', className = '' }) => {
  const spacingClasses = {
    sm: 'space-y-1',
    md: 'space-y-2',
    lg: 'space-y-3',
  }

  return (
    <div className={`${spacingClasses[spacing]} ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          height="1rem"
          className={i === lines - 1 ? 'w-3/4' : ''}
        />
      ))}
    </div>
  )
}

/**
 * Skeleton для карточки
 */
export const SkeletonCard: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 animate-pulse ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        <Skeleton height="1.5rem" width="60%" className="rounded" />
        <Skeleton height="1.5rem" width="20%" rounded="full" />
      </div>
      <SkeletonText lines={2} spacing="sm" />
      <div className="flex items-center justify-between mt-4">
        <Skeleton height="1rem" width="30%" />
        <Skeleton height="1rem" width="20%" />
      </div>
    </div>
  )
}

/**
 * Skeleton для заголовка страницы
 */
export const SkeletonHeader: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <Skeleton height="2.5rem" width="75%" className="rounded" />
      <Skeleton height="1.5rem" width="50%" className="rounded" />
    </div>
  )
}

/**
 * Skeleton для аватара
 */
export const SkeletonAvatar: React.FC<{
  size?: 'sm' | 'md' | 'lg'
  className?: string
}> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  }

  return (
    <Skeleton
      rounded="full"
      className={`${sizeClasses[size]} ${className}`}
    />
  )
}

/**
 * Skeleton для изображения
 */
export const SkeletonImage: React.FC<{
  width?: string
  height?: string
  className?: string
}> = ({ width = '100%', height = '200px', className = '' }) => {
  return <Skeleton width={width} height={height} className={className} />
}

/**
 * Skeleton для таблицы
 */
export const SkeletonTable: React.FC<{
  rows?: number
  columns?: number
  className?: string
}> = ({ rows = 5, columns = 4, className = '' }) => {
  return (
    <div className={`space-y-3 ${className}`}>
      {/* Header */}
      <div className="flex space-x-4">
        {Array.from({ length: columns }).map((_, i) => (
          <Skeleton key={i} height="1rem" width={`${100 / columns}%`} />
        ))}
      </div>
      {/* Rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex space-x-4">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <Skeleton
              key={colIndex}
              height="1rem"
              width={`${100 / columns}%`}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
