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

const ProjectContentOverview: React.FC<Props> = ({ project, canSlide }) => {
  return (
    <div className={clsx('space-y-5', canSlide && 'flex-[0_0_100%] min-w-0')}>
      <SkillLists skills={project.technologies} />
      <div className="flex mx-auto justify-center items-start space-x-12">
        <div className="overflow-hidden max-w-md h-60">
          <img
            src={project.imagePC?.[0]}
            alt={`${project.corporateTitle}のPCイメージ`}
            className="inline-block w-full"
          />
        </div>
        <div className="overflow-hidden max-w-sm h-60">
          <img
            src={project.imageSP?.[0]}
            alt={`${project.corporateTitle}のSPイメージ`}
            className="inline-block w-full"
          />
        </div>
      </div>
      <div className="space-y-4">
        <HeadingTitle title="目標" titleEn="Goal" headingType="h3" />
        <DescriptionLists
          descriptionTitle={project.goalTitle}
          descriptionDescription={project.goalDescription}
        />
      </div>
    </div>
  )
}

export default ProjectContentOverview
