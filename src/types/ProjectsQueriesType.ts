export type ProjectId = 'ucc' | 'kyotoEternity' | 'navinavihoken'

export type ProjectType = {
  corporateTitle: string
  corporateTitleEn: string
  whet: string
  charge: string[]
  imgLogo: string
  images: string[]
  link: string
  goalTitle: string[]
  goalDescription: string[]
  technologies: string[]
  resultTitle: string[]
  resultDescription: string[]
  termTitle: string[]
  termDescription: string[]
  pointTitle: string[]
  pointDescription: string[]
}

export type ProjectsQueriesType = ProjectType & { id: ProjectId }
