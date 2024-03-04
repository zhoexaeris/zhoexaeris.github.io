import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title: "PasaHero",
        description: "An app that redefines Metro Manila’s commuting experience, making daily journeys stress-free and efficient.",
        image: "images/mockup-pasahero.png",
        background: "yellow",
        tags: ["Responsive Design", "Transportation", "UI/UX Study"],
        tagcolor: "dark-yellow",
        text: "text-yellow"
    }, 
    {
        id: 2,
        title: "Nurselink",
        description: "Connecting healthcare professionals with a specialized networking platform tailored to their needs.",
        image: "images/mockup-nurselink.png",
        background: "blue",
        tags: ["Front-end", "Healthcare", "UI Design"],
        tagcolor: "dark-blue",
        text: "text-blue"
    }, 
    {
        id: 3,
        title: "SpikeZone",
        description: "A recreation of Valorant Forums, in partial fulfillment for CSSWENG A.Y. 2022 - 2023.",
        image: "images/mockup-spikezone.png",
        background: "red",
        tags: ["Full-stack", "Gaming"],
        tagcolor: "dark-red",
        text: "text-red"
    },
]

function Projects() {
  return (
    <section>
        <div className='flex h-full bg-beige-white items-center justify-center px-20'>
            <div className='flex-row w-full py-5'>
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        background={project.background}
                        tags={project.tags}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Projects
