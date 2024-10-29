import React from "react";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 px-4 md:px-6 bg-slate-100 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="text-3xl font-bold mb-8 text-center text-teal-600 dark:text-teal-400"
        >
          Education
        </motion.h2>
        <div className="space-y-6">
          <div
            id="Card"
            className="bg-white dark:bg-slate-800 shadow-md   hover:bg-teal-50 dark:hover:bg-slate-600  transform hover:scale-105 animate-fade-in rounded-lg p-6 transition-all duration-300"
          >
            <div id="CardHeader">
              <div id="CardTitle" className="flex  ">
                <GraduationCap className="w-8 h-8    sm:mr-2 sm:h-6 sm:w-6 text-teal-500 dark:text-teal-400" />
                <span className="text-black dark:text-white font-medium text-xl sm:text-2xl">
                  Full Stack Web Developer
                </span>
              </div>
              <div
                id="CardDescription"
                className="text-[#71717a] text-start mb-7"
              >
                SMIT, 2024-present
              </div>
            </div>
            <div id="CardContent">
              <p className="text-slate-700 dark:text-slate-300 text-start">
                Learning the newer technologies to make dynamic website that
                helps to increse productivity
              </p>
            </div>
          </div>
          <div
            id="Card"
            className="bg-white dark:bg-slate-800 shadow-md   hover:bg-teal-50 dark:hover:bg-slate-600  transform hover:scale-105 animate-fade-in rounded-lg p-6 transition-all duration-300"
          >
            <div id="CardHeader">
              <div id="CardTitle" className="flex  ">
                <GraduationCap className="w-8 h-8 m-0   sm:mr-2 sm:h-6 sm:w-6 text-teal-500 dark:text-teal-400" />
                <span className="text-black dark:text-white font-medium text-xl sm:text-2xl">
                  Artificial Intelligense and Clouding
                </span>
              </div>
              <div
                id="CardDescription"
                className="text-[#71717a] text-start mb-7"
              >
                GIAIC, 2024
              </div>
            </div>
            <div id="CardContent">
              <p className="text-slate-700 dark:text-slate-300 text-start">
                As the evoloution of technology is essential to go down deep
                inside the world of modern technologies
              </p>
            </div>
          </div>

          <div
            id="Card"
            className="bg-white dark:bg-slate-800 shadow-md   hover:bg-teal-50 dark:hover:bg-slate-600  transform hover:scale-105 animate-fade-in rounded-lg p-6 transition-all duration-300"
          >
            <div id="CardHeader">
              <div id="CardTitle" className="flex  ">
                <GraduationCap className="w-8 h-8 m-0   sm:mr-2 sm:h-6 sm:w-6 text-teal-500 dark:text-teal-400" />
                <span className="text-black dark:text-white font-medium text-xl sm:text-2xl">
                  Intermediate in CS
                </span>
              </div>
              <div
                id="CardDescription"
                className="text-[#71717a] text-start mb-7"
              >
                DJ Science College, 2024
              </div>
            </div>
            <div id="CardContent">
              <p className="text-slate-700 dark:text-slate-300 text-start">
                To become a part of the modern society with full of knowledge
                from history of Computer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
