import React from 'react'

type Props = {
  skills: string[]
}

const SkillLists: React.FC<Props> = ({ skills }) => {
  return (
    <div className="flex flex-wrap justify-left space-x-3">
      {skills.map((item, index) => (
        <div
          key={index}
          className="bg-gray-700 px-2 py-1 rounded-full text-sm text-white font-Rokkitt min-w-36 text-center"
        >
          {item}
        </div>
      ))}
    </div>
  )
}

export default SkillLists
