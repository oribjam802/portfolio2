import { ProjectOtherType } from '@src/types/ProjectsQueriesType'

// ベースパスを動的に取得
const baseUrl = import.meta.env.BASE_URL

const ProjectOtherQueries: ProjectOtherType = {
  images: [
    `${baseUrl}images/img/other/img-aqualox-toppage--sp.png`,
    `${baseUrl}images/img/other/img-aqualox-toppage.png`,
    `${baseUrl}images/img/other/img-kanpaikobe-toppage--sp.png`,
    `${baseUrl}images/img/other/img-kanpaikobe-toppage.png`,
    `${baseUrl}images/img/other/img-loccitane-toppage--sp.png`,
    `${baseUrl}images/img/other/img-loccitane-toppage.png`,
    `${baseUrl}images/img/other/img-seibo-back.png`,
    `${baseUrl}images/img/other/img-seibo-top.png`,
  ],
}

export default ProjectOtherQueries
