import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 md:px-6 bg-white dark:bg-slate-800 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="text-3xl font-bold mb-8 text-center text-teal-600 dark:text-teal-400"
        >
          About Me
        </motion.h2>
        <div className="bg-slate-100 dark:bg-slate-700 p-6 rounded-lg shadow-md animate-fade-in">
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            Hello! I'm Abdullah Javed, a passionate Full Stack Web Developer My
            journey in tech started when I built my first website at the age of
            17, and I've been hooked ever since.
          </p>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            I specialize in JavaScript and its modern frameworks, particularly
            React and Node.js.I also like to work in styling i use Tailwind and
            Bootstrap and other Frameworks that enhance Styling. My approach to
            development is centered around creating clean, efficient, and
            maintainable code.
          </p>
          <p className="text-slate-700 dark:text-slate-300">
            When I'm not coding, you can find me contributing to understanding
            market requirement or exploring the latest web technologies. I'm
            always excited to take on new challenges and collaborate on
            innovative projects.
          </p>
        </div>
      </div>
    </section>
  );
}
