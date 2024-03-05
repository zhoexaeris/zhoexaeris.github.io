import React from 'react'

function ProjectCard({imgUrl, title, description, background, tags, tagcolor, text}) {
  return (
    <div className={`card bg-${background} shadow-3xl m-5`}>
      <div className='flex'>
        <div className="left flex-initial w-96 px-4">
            <div className="px-4 py-4">
                <img src={imgUrl}/>
            </div>
        </div>
        <div className="right flex-1 grid px-4 py-4 place-content-end text-right">
            <div className="title text-4xl font-bold">{title}</div>
            <div className="description text-justify text-sm py-2">{description}</div>
            <div className="tags grid place-content-end">
                <ul className='flex flex-wrap'>
                    {tags.map((tag, index) => (
                        // TODO: fix background color and text color
                        <li key={index} className={`badge bg-${tagcolor} border-0 mx-1 mb-1 text-${text} font-sm`}>{tag}</li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
