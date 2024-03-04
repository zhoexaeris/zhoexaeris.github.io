import React from 'react'

function ProjectCard({imgUrl, title, description}) {
  return (
    <div className='card bg-yellow shadow-3xl'>
      <div className='flex'>
        <div className="left flex-initial w-96 px-4">
            <div className="px-4 py-4">
                <img src={"images/mockup-pasahero.png"}/>
            </div>
        </div>
        <div className="right flex-1 grid px-4 py-4 place-content-end text-right">
            <div className="title text-4xl font-bold">Pasahero</div>
            <div className="description text-justify text-sm py-2">An app that redefines Metro Manila’s commuting experience, making daily journeys stress-free and efficient.</div>
            <div className="tags grid place-content-end">
                <ul className='flex'>
                    <li className='badge bg-dark-yellow border-0 text-text-yellow mx-1'>tag 1 </li>
                    <li className='badge bg-dark-yellow border-0 text-text-yellow mx-1'>tag 2 </li>
                    <li className='badge bg-dark-yellow border-0 text-text-yellow mx-1'>tag 3</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
