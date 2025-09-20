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

const ProjectContentPoints: React.FC<Props> = ({ project, canSlide }) => {
  return (
    <div className={clsx('space-y-5', canSlide && 'flex-[0_0_100%] min-w-0')}>
      <SkillLists skills={project.technologies} />
      <div className="space-y-4">
        <HeadingTitle title="担当" titleEn="Term" headingType="h3" />
        <DescriptionLists
          descriptionTitle={project.termTitle}
          descriptionDescription={project.termDescription}
        />
      </div>
      <div className="space-y-4">
        <HeadingTitle title="ポイント" titleEn="Point" headingType="h3" />
        <DescriptionLists
          descriptionTitle={project.pointTitle}
          descriptionDescription={project.pointDescription}
        />
      </div>
    </div>
  )
}

export default ProjectContentPoints
