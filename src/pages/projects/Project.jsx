import React from 'react'
import "./projectpage.css"
import data from '../../constants/data';

const { gallery } = data;





const ProjectGallery = () => {

  return (
    <>
    {/* app__gallery flex__center  */}
       <div className=" w-h-screen bg-white text-red-500 pt-8 sm:justify-items-center" id='project'>
      <div className="app__gallery-content w-h-screen sm:w-h-screen">
    
        <h3 className="headtext__cormorant text-5xl pb-20 pt-20 sm:pt-10 
        sm:pb-20  lg:pt-15 lg:pb-15 font-mono">MY PROJECTS</h3>
      </div>
      <div className="max-w-8xl grid grid-cols-1 gap-5 items-center       sm:grid-cols-2 sm:justify-items-center lg:flex lg:flex-wrap lg:justify-center p-5 text-center mb-6 sm:mb-8">
              {gallery.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <article className="w-85 sm:w-72 lg:w-60 flex flex-col p-4 border border-gray-200 rounded-lg hover:bg-white/10 hover:border-red-500">
                    <div className='filter saturate-0 hover:saturate-100 transition duration-300'>
                      <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
                    </div>
                    <div className='text-black text-center mt-4'>
                      <h3 className="team__name whitespace-pre-line">{project.title}</h3>
                    </div>
                  </article>
                </a>
              ))}
            </div>
    </div>
    
    </>
  )
}

export default ProjectGallery
