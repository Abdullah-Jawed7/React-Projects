import React from "react";
import "../App.css";
import { motion } from "framer-motion";

export default function Projects() {
  let id = 0;
  let Projects = [
    {
      title: "Blog: ShareBook",
      description:
        "A React based Platform where you can post and watch others post",
      id: id++,
      url: "https://blog-share-book.vercel.app/",
    },
    {
      title: "TODO Application",
      description:
        "A React-based task manager edit ,delete and completed Features",
      id: id++,
      url: "https://daily-todo-mu.vercel.app/",
    },
    {
      title: "Dynamic Resume Builder",
      description: "A Resume builder that build based on users instructions",
      id: id++,
      url: "https://cv-generator-flax.vercel.app/",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with React.js and Tailwind CSS.",
      id: id++,
      url: "/",
    },
  ];
  return (
    <section
      id="projects"
      className="py-20 px-4 md:px-6 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-3xl font-bold mb-8 text-center text-teal-600 dark:text-teal-400"
      >
        Projects
      </motion.h2>{" "}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {Projects.map((project, index) => (
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.2 }}
            key={index}
            className="overflow-hidden group animate-fade-in bg-slate-100  dark:bg-slate-800 transition-colors duration-300"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {/* <a href={project.url} target="_blank" > */}
            <div
              id="CardHeader"
              className=" flex p-4 rounded-t-lg  bg-gradient-to-r from-teal-500 to-blue-600 dark:from-teal-700 dark:to-blue-800"
            >
              <div>
                <div id="CardTitle" className="text-white text-2xl font-medium">
                  {project.title}
                </div>
                <div id="CardDescription" className="text-teal-100">
                  {project.description}
                </div>
              </div>
              <div className=" w-2/12">
                <a href={project.url} target="_blank">
                  <button className="rounded-xl bg-transparent text-white p-1">
                    Demo
                  </button>
                </a>
              </div>
            </div>
            <div id="CardContent" className="p-0 h-72">
              <div className={`projectImg${project.id} `}>
                {console.log(project.id)}
              </div>
            </div>
            {/* </a> */}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
