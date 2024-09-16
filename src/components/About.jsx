import React from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants/index.js";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className=" border-b border-neutral-900 pb-4">
      <motion.h1
        initial={{ y: -100, opacity: -5 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        <span>About</span>
        <span className="text-neutral-500"> Me</span>
      </motion.h1>
      <div className=" flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <motion.img
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1 }}
              className="rounded-2xl"
              src={aboutImg}
              alt="about"
            />
          </div>
        </div>
        <div className=" w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1 }}
              className="my-2 max-w-xl py-6"
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
