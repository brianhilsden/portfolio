// pages/about.js
"use client";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiFlask,
} from "react-icons/si";



const skills = [
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400 text-3xl" />,
  },
  { name: "React", icon: <SiReact className="text-blue-500 text-3xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-200 text-3xl" /> },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-500 text-3xl" />,
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-300 text-3xl" />,
  },
  { name: "Python", icon: <SiPython className="text-blue-400 text-3xl" /> },
  { name: "Django", icon: <SiDjango className="text-green-400 text-3xl" /> },
  { name: "Flask", icon: <SiFlask className="text-gray-500 text-3xl" /> },
];

export default function About() {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-8">
        {/* Header */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h1>

        {/* Bio Section */}
        <motion.div
          className="md:flex md:space-x-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-lg leading-relaxed">
              Hi there! I’m a passionate full-stack developer with a love for
              creating intuitive and dynamic user experiences, as well as robust
              and scalable backend systems. I specialize in building responsive,
              high-quality websites and applications using modern technologies
              like React, Next.js, and Tailwind CSS on the frontend, alongside
              Node.js, Express, and Python frameworks like Django and Flask on
              the backend. My goal is to blend design and code to build
              applications that are not only functional but also efficient,
              secure, and scalable.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              When I’m not coding, you can find me hitting the bowling alley,
              exploring new places through traveling, or diving into articles
              about emerging technologies. I love discovering how new trends can
              impact the world and inspire my work. Let’s build something
              amazing together!
            </p>
          </div>

          {/* Profile Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <motion.img
              src="/images/profile.jpg"
              alt="Profile Picture"
              className="w-48 h-48 rounded-full object-cover shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-center mb-8">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 py-4 rounded-lg text-center shadow-md hover:bg-gray-700 flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{type:"spring", stiffness:"100"}}
              >
                {skill.icon}
                <span className="mt-2">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
