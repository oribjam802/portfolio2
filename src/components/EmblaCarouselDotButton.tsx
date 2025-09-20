import React, { ComponentPropsWithRef } from 'react'
import clsx from 'clsx'

type PropType = ComponentPropsWithRef<'button'>

const EmblaCarouselDotButton: React.FC<PropType> = props => {
  const { children, ...restProps } = props

  return (
    <button
      type="button"
      className={clsx(
        'w-40 h-2 mx-1 transition-colors duration-200 shadow-lg -skew-x-12',
        restProps['aria-current']
          ? 'bg-blue-500 border-blue-500 '
          : 'bg-gray-200 hover:bg-blue-200'
      )}
      {...restProps}
    ></button>
  )
}

export default EmblaCarouselDotButton
