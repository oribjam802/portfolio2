import React from 'react'
import { ProjectId } from '@src/types/ProjectsQueriesType'
import ProjectQueries from '@src/constants/ProjectQueries'
import ProjectContent from '@src/components/ProjectContent'

const Projects: React.FC = () => {
  return (
    <>
      {Object.entries(ProjectQueries).map(([id, project]) => (
        <ProjectContent
          key={id}
          project={{ ...project, id: id as ProjectId }}
        />
      ))}
    </>
  )
}

export default Projects
