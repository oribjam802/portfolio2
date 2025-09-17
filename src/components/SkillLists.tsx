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
          className="bg-gray-800 px-4 py-1.5 rounded-full text-sm text-white"
        >
          {item}
        </div>
      ))}
    </div>
  )
}

export default SkillLists
