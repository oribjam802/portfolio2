import React, { createContext, useContext, ReactNode } from 'react'
import { ProjectId } from '@src/types/ProjectsQueriesType'
import ProjectQueries from '@src/constants/ProjectQueries'

interface ProjectContextType {
  projectIds: ProjectId[]
  getProjectById: (
    id: ProjectId
  ) => (typeof ProjectQueries)[ProjectId] | undefined
}
const ProjectContext = createContext<ProjectContextType | undefined>(undefined)

type Props = {
  children: ReactNode
}
const ProjectProvider: React.FC<Props> = ({ children }) => {
  const projectIds: ProjectId[] = Object.keys(ProjectQueries) as ProjectId[]

  const getProjectById = (id: ProjectId) => {
    return ProjectQueries[id]
  }

  const value: ProjectContextType = {
    projectIds,
    getProjectById,
  }

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  )
}
export default ProjectProvider

export const useProject = (): ProjectContextType => {
  const context = useContext(ProjectContext)
  if (context === undefined) {
    throw new Error('useProject must be used within a ProjectProvider')
  }
  return context
}
