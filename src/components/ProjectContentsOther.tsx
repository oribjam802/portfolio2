import React from 'react'
import ProjectOtherQueries from '@src/constants/ProjectOtherQueries'
import HeadingTitle from '@components/HeadingTitle'
import ScrollIcon from '@components/ScrollIcon'

const ProjectContents: React.FC = () => {
  return (
    <section className="space-y-5 flex w-full flex-col justify-stretch">
      <div className="space-y-2">
        <HeadingTitle title="その他" headingType="h2" />
        <div className="text-gray-500 text-sm font-Rokkitt">Other</div>
      </div>
      <div className="flex space-x-2 items-start w-full max-w-7xl mx-auto px-4">
        <div className="overflow-scroll h-[500px] flex-1">
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
        <ScrollIcon />
      </div>
    </section>
  )
}

export default ProjectContents
