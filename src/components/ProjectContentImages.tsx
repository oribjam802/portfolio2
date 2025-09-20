import React from 'react'
import clsx from 'clsx'
import { ProjectsQueriesType } from '@src/types/ProjectsQueriesType'
import SkillLists from '@components/SkillLists'

type Props = {
  project: ProjectsQueriesType
  canSlide: boolean
}

const ProjectContentImages: React.FC<Props> = ({ project, canSlide }) => {
  return (
    <div className={clsx('space-y-5', canSlide && 'flex-[0_0_100%] min-w-0')}>
      <SkillLists skills={project.charge} />
      <div className="flex space-x-2 items-start max-w-[984px] mx-auto px-4">
        <div className="flex-1 overflow-y-scroll h-[500px]">
          <div className="grid gap-10 grid-template-areasImages justify-start items-start">
            {Array.isArray(project.images) &&
              project.images.map((image, index) => (
                <figure
                  className={clsx('overflow-hidden', `grid-area${index + 1}`)}
                  key={index}
                >
                  <img
                    src={image}
                    alt={`${project.corporateTitle}のイメージ${index + 1}`}
                    className="w-full"
                  />
                </figure>
              ))}
            {!Array.isArray(project.images) && project.images && (
              <figure className="grid-area1">
                <img
                  src={project.images}
                  alt={`${project.corporateTitle}のイメージ`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </figure>
            )}
          </div>
        </div>
        <div className="w-7 scroll order-2">
          <span>Scroll</span>
        </div>
      </div>
    </div>
  )
}

export default ProjectContentImages
