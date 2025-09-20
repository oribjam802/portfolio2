import React from 'react'
import ProjectOtherQueries from '@src/constants/ProjectOtherQueries'
import HeadingTitle from '@components/HeadingTitle'

const ProjectContents: React.FC = () => {
  return (
    <section className="snap-start w-full h-screen flex flex-col max-w-7xl mx-auto px-5 py-8 space-y-5">
      <div className="space-y-2 flex-1">
        <HeadingTitle title="その他" headingType="h2" />
        <div className="text-gray-500 text-sm font-Rokkitt">Other</div>
      </div>
      <div className="overflow-scroll h-full">
        <div className="flex flex-nowrap items-start space-x-2">
          {ProjectOtherQueries.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="other"
              className="w-32 object-cover rounded-lg flex-shrink-0 vertical-top"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectContents
