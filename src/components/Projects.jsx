import { PROJECTS } from "../constants";
import {motion} from "framer-motion";

function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4  ">
      <motion.h2 
      whileInView={{opacity:1 ,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration: 0.5}}
      className="my-20 text-center text-4xl">Projects</motion.h2>
      <div>{PROJECTS.map((project, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
            whileInView={{opacity:1 ,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration: 1}}
            className="w-full lg:w-1/4">
            <img src={project.image} 
            width={200}
            height={200} 
            alt={project.title}
            className="mb-6 rounded" />
            </motion.div>
            <motion.div
            whileInView={{opacity:1 ,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration: 1}} 
            className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">{project.title}</h6>
            <p className="mb-4 text-neutral-400">{project.description}</p>
            {project.technologies .map((tech , index)=>(
                <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                  {tech}  
                  
                </span>
            ))}
             {/* Display appropriate links based on availability */}
      <div className="mt-4">
        {project.frontendLink && project.backendLink ? (
          <>
            <a 
              href={project.frontendLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mr-4 text-blue-500 underline hover:text-blue-700"
            >
              Frontend 
            </a>
            <a 
              href={project.backendLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              Backend
            </a>
          </>
        ) : project.projectLink ? (
          <a 
            href={project.projectLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700"
          >
            View Project
          </a>
        ) : null}
      </div>
            </motion.div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Projects
