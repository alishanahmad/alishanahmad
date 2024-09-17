import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/myLogo.png";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import { HiX } from "react-icons/hi";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home"); // State to track active menu
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <nav className="relative mb-20  flex items-center justify-between py-6">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <AnchorLink
          className={`anchor-link ${menu === "home"}`} // Active styling
          href="#home"
          onClick={() => setMenu("home")}
        >
          <motion.img
            initial={{ y: -50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1 }}
            className="mx-2 w-10 rounded"
            src={logo}
            alt="logo"
          />
        </AnchorLink>
      </div>

      {/* Toggle Icon for mobile */}
      <div
        className="nav-icon block md:hidden mb-auto"
        onClick={handleToggleIcon}
      >
        {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
      </div>

      {/* Navbar Links */}
      <ul
        className={`flex flex-col space-y-3  absolute top-16 left-0 bg-neutral-700 font-bold text-white rounded-2xl w-full p-8 transition-transform duration-300 ease-in-out md:static md:flex md:flex-row md:items-center md:justify-center md:gap-4 md:bg-transparent md:p-0 md:transform-none ${
          toggleIcon ? "translate-y-0" : "translate-y-[-100vh]"
        }`}
      >
        {/* Home Link */}
        <motion.li
          initial={{ x: -100, y: 50, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center mt-3 flex items-center" // Ensure vertical alignment
        >
          <AnchorLink
            className={`anchor-link ${
              menu === "home"
                ? "bg-gradient-to-r from-purple-500 via-slate-500 to-pink-300 bg-clip-text text-2xl tracking-tight text-transparent"
                : "text-white"
            }`}
            href="#home"
            onClick={() => setMenu("home")}
          >
            Home
          </AnchorLink>
        </motion.li>

        {/* About Link */}
        <motion.li
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center flex items-center" // Ensure vertical alignment
        >
          <AnchorLink
            className={`anchor-link ${
              menu === "about"
                ? "bg-gradient-to-r from-purple-500 via-slate-500 to-pink-300 bg-clip-text text-2xl tracking-tight text-transparent"
                : "text-white"
            }`}
            href="#about"
            onClick={() => setMenu("about")}
          >
            About
          </AnchorLink>
        </motion.li>

        {/* Technologies Link */}
        <motion.li
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center flex items-center" // Ensure vertical alignment
        >
          <AnchorLink
            className={`anchor-link ${
              menu === "technologies"
                ? "bg-gradient-to-r from-purple-500 via-slate-500 to-pink-300 bg-clip-text text-2xl tracking-tight text-transparent"
                : "text-white"
            }`}
            href="#technologies"
            onClick={() => setMenu("technologies")}
          >
            Technologies
          </AnchorLink>
        </motion.li>

        {/* Experience Link */}
        <motion.li
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center flex items-center" // Ensure vertical alignment
        >
          <AnchorLink
            className={`anchor-link ${
              menu === "experience"
                ? "bg-gradient-to-r from-purple-500 via-slate-500 to-pink-300 bg-clip-text text-2xl tracking-tight text-transparent"
                : "text-white"
            }`}
            href="#experience"
            onClick={() => setMenu("experience")}
          >
            Experience
          </AnchorLink>
        </motion.li>

        {/* Projects Link */}
        <motion.li
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center flex items-center" // Ensure vertical alignment
        >
          <AnchorLink
            className={`anchor-link ${
              menu === "projects"
                ? "bg-gradient-to-r from-purple-500 via-slate-500 to-pink-300 bg-clip-text text-2xl tracking-tight text-transparent"
                : "text-white"
            }`}
            href="#projects"
            onClick={() => setMenu("projects")}
          >
            Projects
          </AnchorLink>
        </motion.li>

        {/* Contact Link */}
        <motion.li
          initial={{ x: 50, y: 50, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center flex items-center" // Ensure vertical alignment
        >
          <AnchorLink
            className={`anchor-link ${
              menu === "contact"
                ? "bg-gradient-to-r from-purple-500 via-slate-500 to-pink-300 bg-clip-text text-2xl tracking-tight text-transparent"
                : "text-white"
            }`}
            href="#contact"
            onClick={() => setMenu("contact")}
          >
            Contact
          </AnchorLink>
        </motion.li>
      </ul>
    </nav>
  );
};

export default Navbar;
