import React, { ComponentPropsWithRef } from 'react'
import clsx from 'clsx'

type ProgressBarProps = {
  progress: number
  totalSlides: number
  currentIndex: number
  onProgressClick: (index: number) => void
  className?: string
} & Omit<ComponentPropsWithRef<'div'>, 'onClick'>

const EmblaProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  totalSlides,
  currentIndex,
  onProgressClick,
  className,
  ...restProps
}) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const clickX = event.clientX - rect.left
    const clickProgress = clickX / rect.width
    const targetIndex = Math.round(clickProgress * (totalSlides - 1))
    onProgressClick(targetIndex)
  }

  return (
    <div
      className={clsx(
        'w-full h-2 bg-gray-200 rounded-full cursor-pointer relative',
        className
      )}
      onClick={handleClick}
      {...restProps}
    >
      {/* プログレスバー */}
      <div
        className="h-full bg-blue-500 rounded-full transition-all duration-100 ease-out '[&>:hover]:bg-gray-200'"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default EmblaProgressBar
