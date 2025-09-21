import React from 'react'
import { ProjectId } from '@src/types/ProjectsQueriesType'
import ProjectQueries from '@src/constants/ProjectQueries'
import ProjectContents from '@/components/ProjectContents'
import ProjectContentsOther from '@/components/ProjectContentsOther'

const Projects: React.FC = () => {
  return (
    <>
      {Object.entries(ProjectQueries).map(([id, project]) => (
        <div className="relative snap-start w-full h-screen flex flex-col max-w-7xl mx-auto px-5 py-8 space-y-5 justify-center justify-center">
          <ProjectContents
            key={id}
            project={{ ...project, id: id as ProjectId }}
          />
        </div>
      ))}
      <div className="relative snap-start w-full h-screen flex flex-col max-w-7xl mx-auto px-5 py-8 space-y-5 justify-center justify-center">
        <ProjectContentsOther />
      </div>
    </>
  )
}

export default Projects
