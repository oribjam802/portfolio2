import React from 'react'
import clsx from 'clsx'
import { ProjectsQueriesType } from '@src/types/ProjectsQueriesType'
import HeadingTitle from '@components/HeadingTitle'
import DescriptionLists from '@components/DescriptionLists'
import SkillLists from '@components/SkillLists'

type Props = {
  project: ProjectsQueriesType
  canSlide: boolean
}

const ProjectContentSolution: React.FC<Props> = ({ project, canSlide }) => {
  return (
    <div className={clsx('space-y-5', canSlide && 'flex-[0_0_100%] min-w-0')}>
      <SkillLists skills={project.technologies} />
      <div className="space-y-4">
        <HeadingTitle title="目標" titleEn="Goal" headingType="h3" />
        <DescriptionLists
          descriptionTitle={project.goalTitle}
          descriptionDescription={project.goalDescription}
        />
      </div>
      <div className="space-y-4">
        <HeadingTitle title="目標" titleEn="Goal" headingType="h3" />
        <DescriptionLists descriptionTitle={project.goalTitle} />
      </div>
    </div>
  )
}

export default ProjectContentSolution
