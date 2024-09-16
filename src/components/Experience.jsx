import React from "react";
import { EXPERIENCE } from "../constants/index.js";
import { motion } from "framer-motion";
const Experience = () => {
  return (
    <div id="experience" className="border-b border-neutral-900 pb-4">
      <motion.h1
        initial={{ opacity: -10 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>
      <div >
        {EXPERIENCE.map((experience, index) => (
          <div className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <motion.p
                initial={{ x: -100, y: -50 }}
                whileInView={{ x: 0, y: 0 }}
                transition={{ duration: 1 }}
                key={index}
                className="mb-2 text-sm text-neutral-400"
              >
                {experience.year}
              </motion.p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <motion.h6
                initial={{ x: -200 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1 }}
                key={index}
                className="mb-2 font-semibold"
              >
                {experience.role} -{" "}
                <span className=" text-sm text-purple-100">
                  {experience.company}
                </span>
              </motion.h6>
              <motion.p
                initial={{ x: 100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1 }}
                key={index}
              >
                {experience.description}
              </motion.p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className=" mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
