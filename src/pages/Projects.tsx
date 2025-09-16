import React from 'react'
import { ProjectId } from '@src/types/ProjectsQueriesType'
import ProjectQueries from '@src/constants/ProjectQueries'
import ProjectContent from '@src/components/ProjectContent'

const Projects: React.FC = () => {
  return (
    <div>
      {Object.entries(ProjectQueries).map(([id, project]) => (
        <div className="pt-20" key={id} id={id}>
          <ProjectContent project={{ ...project, id: id as ProjectId }} />
        </div>
      ))}
    </div>
  )
}

export default Projects
