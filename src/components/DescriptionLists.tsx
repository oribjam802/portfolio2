import React from 'react'

type Props = {
  descriptionTitle: string[]
  descriptionDescription: string[]
}

const SkillLists: React.FC<Props> = ({
  descriptionTitle,
  descriptionDescription,
}) => {
  return (
    <dl className="flex flex-col [counter-reset:section]">
      {descriptionTitle.map((title, index) => (
        <React.Fragment key={index}>
          <dt className="mb-2 [counter-increment:section] text-base text-black font-bold before:content-[counters(section,'.')] before:text-base before:mr-2 before:inline-block">
            {title}
          </dt>
          <dd className="text-gray-500 text-sm font-Rokkitt mb-3 last:mb-0">
            {descriptionDescription[index]}
          </dd>
        </React.Fragment>
      ))}
    </dl>
  )
}

export default SkillLists
