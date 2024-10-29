import {
  Code,
  FileCode,
  Server,
  GitBranch,
  FastForward,
  Handshake,
  Globe,
  Cpu,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Skill() {
  const skills = [
    { name: "JavaScript", icon: FileCode },
    { name: "React", icon: Code },
    { name: "Node.js", icon: Server },
    { name: "Python", icon: Cpu },
    { name: "HTML/CSS", icon: Globe },
    { name: "Adopt Fast", icon: FastForward },
    { name: "Git", icon: GitBranch },
    { name: "Communication", icon: Handshake },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 md:px-6 bg-slate-100 dark:bg-slate-800 transition-colors duration-300"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-3xl font-bold mb-8 text-center text-teal-600 dark:text-teal-400"
      >
        Skills
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
      >
        {skills.map((skill, index) => (
          <div
            id="Card"
            key={skill.name}
            className="text-center bg-white dark:bg-slate-700 hover:bg-teal-50 dark:hover:bg-slate-600 transition-colors duration-300 transform hover:scale-105 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div id="CardContent" className="pt-6">
              <skill.icon className="h-12 w-12 mb-2 mx-auto text-teal-500 dark:text-teal-400" />
              <p className="text-slate-700 dark:text-slate-300">{skill.name}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
