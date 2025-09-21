import React from 'react'

type Props = {
  headingType: 'h2' | 'h3'
  title: string
  titleEn?: string
}

const HeadingTitle: React.FC<Props> = ({ title, headingType, titleEn }) => {
  if (headingType === 'h2') {
    return (
      <h2 className="text-2xl font-bold border-b border-gray-500 pb-2">
        {title}
      </h2>
    )
  } else if (headingType === 'h3') {
    return (
      <h3 className="space-x-2 text-sm border-b border-gray-300 pb-1 text-gray-500 flex justify-between">
        <span className="text-sm text-gray-500">{title}</span>
        <span className="text-sm text-gray-500 capitalize">{titleEn}</span>
      </h3>
    )
  } else {
    return null
  }
}

export default HeadingTitle
