import React from 'react'
import { ProjectsQueriesType } from '@src/types/ProjectsQueriesType'
import HeadingTitle from '@components/HeadingTitle'
import ProjectContentContext from '@components/ProjectContentContext'
import EmblaCarouselWrap from '@components/EmblaCarouselWrap'
type Props = {
  project: ProjectsQueriesType
}

const ProjectContent: React.FC<Props> = ({ project }) => {
  return (
    <section className="snap-start w-full h-screen flex flex-col max-w-7xl mx-auto px-[4%] py-10 space-y-5">
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
      <EmblaCarouselWrap loop={false} align="start">
        <ProjectContentContext project={project} canSlide={true} />
        <ProjectContentContext project={project} canSlide={true} />
        <ProjectContentContext project={project} canSlide={true} />
      </EmblaCarouselWrap>
    </section>
  )
}

export default ProjectContent
