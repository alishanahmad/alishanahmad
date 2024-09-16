import React from "react";
import { CONTACT } from "../constants/index.js";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div id="contact" className=" border-b border-neutral-900 pb-20">
      <motion.h1
        initial={{ x: 300 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        className=" my-10 text-center text-4xl "
      >
        Get in Touch
      </motion.h1>
      <div className=" text-center tracking-tighter">
        <motion.div
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          className="m-8 flex items-center justify-center gap-4 text-2xl "
        >
          <a href="https://www.linkedin.com/in/alishanahmad?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <FaLinkedin />
          </a>
          <a href="https://github.com/alishanahmad">
            <FaGithub />
          </a>
          <a href="https://x.com/alishanahmad_?s=09">
            <FaSquareXTwitter />
          </a>
          <a href="https://www.instagram.com/_alishanahmad_?igsh=MWVhdjRiN28wM2Z3ZA==">
            <FaInstagram />
          </a>
        </motion.div>
        <motion.p
          initial={{ x: -300 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          className=" my-4 "
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          initial={{ x: 300 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          className=" my-4 "
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.p
          initial={{ x: -300 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <a href="mailto:alishanahmad.ac@gmail.com" className=" border-b ">
            {CONTACT.email}
          </a>
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
