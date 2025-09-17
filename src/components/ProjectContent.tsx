import React from 'react'
import { ProjectsQueriesType } from '@src/types/ProjectsQueriesType'
import HeadingTitle from '@components/HeadingTitle'
import SkillLists from '@components/SkillLists'
import DescriptionLists from '@components/DescriptionLists'

type Props = {
  project: ProjectsQueriesType
}

const ProjectContent: React.FC<Props> = ({ project }) => {
  return (
    <section className="w-full h-screen">
      <div className="max-w-6xl mx-auto px-8 py-10 space-y-5">
        <div className="flex justify-between items-center space-x-5">
          <div className="space-y-2 flex-1">
            <HeadingTitle title={project.corporateTitle} headingType="h2" />
            <div className="flex space-x-4">
              <span className="text-gray-500 text-sm font-Rokkitt">
                {project.corporateTitleEn}
              </span>
              <span className="text-gray-500 text-sm font-Rokkitt">
                {project.whet}
              </span>
              <a
                href={project.link}
                className="text-gray-500 text-sm font-Rokkitt"
              >
                {project.link}
              </a>
            </div>
          </div>
          <img
            src={project.imgLogo}
            alt={`${project.corporateTitle}のロゴイメージ`}
            className="max-w-28 inline-block vertical-middle"
          />
        </div>
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
          <DescriptionLists
            descriptionTitle={project.goalTitle}
            descriptionDescription={project.goalDescription}
          />
        </div>
      </div>
    </section>
  )
}

export default ProjectContent
