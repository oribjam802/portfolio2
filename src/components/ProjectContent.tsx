import React from 'react'
import { ProjectsQueriesType } from '@src/types/ProjectsQueriesType'

type Props = {
  project: ProjectsQueriesType
}

const ProjectContent: React.FC<Props> = ({ project }) => {
  return (
    <section className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-16 text-center">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-white mb-4 text-6xl">{project.corporateTitle}</h2>
        <p className="text-xl opacity-90">
          {project.corporateTitleEn} - {project.whet}
        </p>
        <div className="mt-8">
          <h3 className="text-2xl mb-4">Technologies</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-white/20 px-4 py-2 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            View Project
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectContent
