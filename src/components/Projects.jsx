import React from "react";
import { PROJECTS } from "../constants/index.js";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <div id="projects" className=" border-b border-neutral-900 pb-4">
      <motion.h1
        initial={{ opacity: -10, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className=" mb-8 flex flex-wrap lg:justify-center ">
            <div className=" w-full lg:w-1/4">
              <motion.img
                initial={{ x: -100, y: -50 }}
                whileInView={{ x: 0, y: 0 }}
                transition={{ duration: 1 }}
                src={project.image}
                alt={project.title}
                height={150}
                width={150}
                className=" mb-6 rounded items-center"
              />
            </div>
            <div className=" w-full max-w-xl lg:w-3/4">
              <motion.h6
                initial={{ x: -300 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1 }}
                className=" mb-2 font-semibold "
              >
                {project.title}
              </motion.h6>
              <motion.p
                initial={{ x: 100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1 }}
                className=" mb-4 text-neutral-400 "
              >
                {project.description}
              </motion.p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className=" mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900 "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default Projects;
