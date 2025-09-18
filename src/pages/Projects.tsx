import React from 'react'
import { ProjectId } from '@src/types/ProjectsQueriesType'
import ProjectQueries from '@src/constants/ProjectQueries'
import ProjectContent from '@src/components/ProjectContent'
import { useHorizontalScroll } from '@src/hooks/useHorizontalScroll'

const Projects: React.FC = () => {
  const { addStickySection, addHorizontalScroll } = useHorizontalScroll()

  return (
    <div className="h-[300vh]">
      <div
        className="sticky top-0 h-screen overflow-hidden"
        ref={addStickySection}
      >
        <div className="horizontal_scroll flex" ref={addHorizontalScroll}>
          {Object.entries(ProjectQueries).map(([id, project]) => (
            <div className="w-screen flex-shrink-0" key={id} id={id}>
              <ProjectContent project={{ ...project, id: id as ProjectId }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
