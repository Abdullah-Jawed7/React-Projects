import React, { useEffect } from "react";
import "../App.css";
import { Github, Linkedin, Mail } from "lucide-react";
import Typed from "typed.js";
import { motion } from "framer-motion";

const container = (delay, duration = 0.5) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: delay, duration: duration },
  },
});

export default function Hero() {
  // useEffect(()=>{
  //   const typed = new Typed('#element', {
  //     strings: ['AI Engineer',  'MERN Stack Web Developer',' Full Stack Web Developer'],
  //     typeSpeed: 50,
  //   });
  //   return () => {
  //     // Destroy Typed instance during cleanup to stop animation
  //     typed.destroy();
  //   };

  // },[])

  const cvBtn = () => {
    const cvUrl = "/CV_Abdullah.pdf"; // Vite will resolve from the public folder
    const a = document.createElement("a");
    a.href = cvUrl;
    a.download = "CV_Abdullah.pdf"; // The file name to download
    a.click();
  };

  return (
    <section
      id="home"
      className="py-20 px-4 md:px-6 bg-gradient-to-br from-teal-500 to-blue-600 dark:from-teal-800 dark:to-blue-900"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-5xl font-bold mb-4 text-white animate-fade-in-down"
          >
            Abdullah Javed
          </motion.h1>
          <motion.p
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            id="element"
            className="text-2xl mb-4 text-teal-100 animate-fade-in-up"
          >
            Full Stack Web Developer
          </motion.p>
          <motion.div
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="buttons block justify-start text-center sm:flex "
          >
            <div className="flex justify-center md:justify-start space-x-4 animate-fade-in">
              <a href="https://github.com/Abdullah-Jawed7" target="_blank">
                <button
                  variant="outline"
                  size="icon"
                  className="bg-white/10 hover:bg-white/20 text-white transition-colors duration-300"
                >
                  <Github className="hover:text-black h-5 w-5" />
                </button>
              </a>
              <a
                href="https://pk.linkedin.com/in/abdullah-muhammad-jawed-60b27a282?trk=public_post_feed-actor-name"
                target="_blank"
              >
                <button
                  variant="outline"
                  size="icon"
                  className="bg-white/10 hover:bg-white/20 text-white transition-colors duration-300"
                >
                  <Linkedin className="hover:text-black h-5 w-5" />
                </button>
              </a>
              <a href="mailto:abdullah7dev.0@gmail.com" target="_blank">
                <button
                  variant="outline"
                  size="icon"
                  className="bg-white/10 hover:bg-white/20 text-white transition-colors duration-300"
                >
                  <Mail className="hover:text-black h-5 w-5" />
                </button>
              </a>
            </div>
            <button
              onClick={cvBtn}
              className="mx-auto sm:mx-3 mt-3 sm:mt-0 block text-white bg-gradient-to-br hover:bg-gradient-to-tl transition-colors duration-300 from-teal-500 to-blue-600 dark:from-teal-800 dark:to-blue-900"
            >
              RESUME
            </button>
          </motion.div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-in">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            id="image"
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal-600 shadow-lg"
          ></motion.div>
        </div>
      </div>
    </section>
  );
}
