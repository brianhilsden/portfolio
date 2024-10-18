"use client"
import { motion } from "framer-motion";
import ProjectCard from "../components/common/ProjectsCard";

const projects = [
  {
    title: "Personal Blog",
    description: "A markdown-based blog built with Next.js and Tailwind CSS.",
    imageUrl: "/images/blog.png",
    link: "https://example.com/blog",
  },
  {
    title: "E-commerce Store",
    description: "A fully-functional e-commerce platform using React and Stripe.",
    imageUrl: "/images/ecommerce.png",
    link: "https://example.com/store",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio showcasing my skills and projects.",
    imageUrl: "/images/portfolio.png",
    link: "https://example.com/portfolio",
  },
  
];

export default function Projects() {
  return (
    <section className="min-h-screen py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-8">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
