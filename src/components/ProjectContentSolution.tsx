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
      <div className="flex max-w-2xl mx-auto justify-between">
        <div className="overflow-y-scroll max-w-md h-64">
          <img
            src={project.imagePC}
            alt={`${project.corporateTitle}のPCイメージ`}
            className="inline-block w-full"
          />
        </div>
        <div className="overflow-y-scroll max-w-sm h-64">
          <img
            src={project.imageSP}
            alt={`${project.corporateTitle}のSPイメージ`}
            className="inline-block w-full"
          />
        </div>
      </div>
      <div className="space-y-4">
        <HeadingTitle title="目標" titleEn="Goal" headingType="h3" />
        <DescriptionLists descriptionTitle={project.goalTitle} />
      </div>
    </div>
  )
}

export default ProjectContentSolution
