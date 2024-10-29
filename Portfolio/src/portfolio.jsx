"use client";
import { useState } from "react";
import useTheme from "./Components/Theme";
import { Moon, Sun, AlignJustify } from "lucide-react";
import Contact from "./Components/Contact";
import Education from "./Components/Edu";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Skill from "./Components/Skill";
import "./App.css";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [open, setOpen] = useState(false);

  const { themeMode, lightTheme, darkTheme } = useTheme();
  const onChangeBtn = () => {
    setDarkMode(!darkMode);
    let darkModeStatus = darkMode;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 transition-colors duration-300">
      <nav className="bg-white dark:bg-slate-800 shadow-md transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a
                href="#"
                className="text-xl font-bold text-teal-600 dark:text-teal-400 "
              >
                Abdullah
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#home"
                  className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  About
                </a>
                <a
                  href="#skills"
                  className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="hidden md:block items-center">
              <button
                variant="outline"
                size="icon"
                className="bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300"
                onClick={onChangeBtn}
              >
                {darkMode ? (
                  <Moon className="h-5 w-5 text-slate-700" />
                ) : (
                  <Sun className="h-5 w-5 text-yellow-500" />
                )}{" "}
              </button>
            </div>
            <div className="block md:hidden">
              <button
                className="dark:bg-transparent"
                onClick={() => setOpen(!open)}
              >
                <AlignJustify className="h-5 w-5 text-slate-700 dark:text-slate-100 dark:bg-transparent" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      {open && (
        <div className="md:hidden ml-auto">
          <div>
            <div className="ml-10 flex flex-col items-start">
              <a
                onClick={() => setOpen(!open)}
                href="#home"
                className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 px-3 py-2 rounded-md text-md font-semibold transition-colors block duration-300"
              >
                Home
              </a>
              <a
                onClick={() => setOpen(!open)}
                href="#about"
                className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 px-3 py-2 rounded-md text-md font-semibold transition-colors block duration-300"
              >
                About
              </a>
              <a
                onClick={() => setOpen(!open)}
                href="#skills"
                className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 px-3 py-2 rounded-md text-md font-semibold transition-colors block duration-300"
              >
                Skills
              </a>
              <a
                onClick={() => setOpen(!open)}
                href="#projects"
                className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 px-3 py-2 rounded-md text-md font-semibold transition-colors block duration-300"
              >
                Projects
              </a>
              <a
                onClick={() => setOpen(!open)}
                href="#contact"
                className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 px-3 py-2 rounded-md text-md font-semibold transition-colors block duration-300"
              >
                Contact
              </a>
              <button
                variant="outline"
                size="icon"
                className="bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300"
                onClick={onChangeBtn}
              >
                {darkMode ? (
                  <Moon className="h-5 w-5 text-slate-700" />
                ) : (
                  <Sun className="h-5 w-5 text-yellow-500" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <Hero />

      {/* About Me Section */}
      <About />

      {/* Education Section */}
      <Education />

      {/* Skills Section */}
      <Skill />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 transition-colors duration-300">
        © 2024 Abdullah Javed. All rights reserved.
      </footer>
    </div>
  );
}
/*
2. add projects on projects section
7. check others portfolios and find new things
*/
