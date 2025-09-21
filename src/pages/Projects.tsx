import React from 'react'
import ProjectContents from '@/components/ProjectContents'
import ProjectContentsOther from '@/components/ProjectContentsOther'
import { useProject } from '@contexts/ProjectContext'

const Projects: React.FC = () => {
  const { projectIds, getProjectById } = useProject()

  return (
    <>
      {projectIds.map(id => {
        const project = getProjectById(id)
        if (!project) return null

        return (
          <div
            key={id}
            className="relative snap-start w-full h-screen flex flex-col max-w-7xl mx-auto px-5 py-8 space-y-5 justify-center justify-center"
          >
            <ProjectContents project={{ ...project, id }} />
          </div>
        )
      })}
      <div className="relative snap-start w-full h-screen flex flex-col max-w-7xl mx-auto px-5 py-8 space-y-5 justify-center justify-center">
        <ProjectContentsOther />
      </div>
    </>
  )
}

export default Projects
