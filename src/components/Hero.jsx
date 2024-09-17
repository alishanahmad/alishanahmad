import React from "react";
import { HERO_CONTENT } from "../constants/index.js";
import profilePic from "../assets/myProfile.jpg";
import { motion } from "framer-motion";

const containerX = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: delay },
  },
});
const containerY = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div id="home" className=" border-b  border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              variants={containerX(0)}
              className="text-center pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
            >
              Ali Shan Ahmad
            </motion.h1>
            <motion.span
              variants={containerX(0.2)}
              initial="hidden"
              whileInView="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={containerX(0.4)}
              initial="hidden"
              whileInView="visible"
              className="my-2 mx-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              variants={containerY(0.6)}
              initial="hidden"
              whileInView="visible"
              src={profilePic}
              alt="My Profile Picture"
              className="rounded-full w-60 h-60 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
