export type ProjectId = 'ucc' | 'kyotoEternity' | 'navinavihoken'

export type ProjectType = {
  corporateTitle: string
  corporateTitleEn: string
  whet: string
  technologies: string[]
  imagePC: string
  imageSP: string
  imageDetailPC: string
  imageDetailSP: string
  link: string
  goalTitle: string[]
  goalDescription: string[]
  resultTitle: string[]
  resultDescription: string[]
  termTitle: string[]
  termDescription: string[]
  pointTitle: string[]
  pointDescription: string[]
}

export type ProjectsQueriesType = ProjectType & { id: ProjectId }
