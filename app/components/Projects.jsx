import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section>
        <div className='flex h-full bg-beige-white items-center justify-center px-20'>
            <div className='flex-row w-full py-5'>
                <ProjectCard />
            </div>
        </div>
    </section>
  )
}

export default Projects
