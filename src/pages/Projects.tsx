import React from 'react'
import { ProjectId } from '@src/types/ProjectsQueriesType'
import ProjectQueries from '@src/constants/ProjectQueries'
import ProjectContents from '@/components/ProjectContents'

const Projects: React.FC = () => {
  return (
    <>
      {Object.entries(ProjectQueries).map(([id, project]) => (
        <ProjectContents
          key={id}
          project={{ ...project, id: id as ProjectId }}
        />
      ))}
    </>
  )
}

export default Projects
