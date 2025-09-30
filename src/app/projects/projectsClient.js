"use client";
import { motion } from "framer-motion";
import ProjectCard from "../components/common/ProjectsCard";
const projects = [
   {
    title: "ExamHive: Nursing Exam Prep Platform",
    description:
      "An interactive exam preparation platform for ATI TEAS and HESI A2. Includes flashcards, question banks, study guides, and simulated practice tests with detailed rationales, personalized study paths, and performance tracking.",
    imageUrl: "/images/examhive.png",
    link: "https://theexamhive.com/", 
    tech_stack: "Next.js, Tailwind CSS, Framer Motion, Express, PostgreSQL"
  },
  {
    title: "KejaRMS: Rental Management System",
    description:
      "A full-stack rental management platform with modules for landlords, tenants, caretakers, and agents. Features include automated invoicing, property listings, tenant dashboards, rent collection (M-Pesa/bank), bulk notifications, and financial reporting.",
    imageUrl: "/images/keja.png",
    link: "https://info.keja-rms.co.ke/",
    tech_stack: "React, TypeScript, Express, PostgreSQL, Docker"
  },
 
  {
    title: "TechVoyage: Company Website",
    description:
      "Designed and developed the official website for TechVoyage, a digital solutions company. Showcases services in web development, data solutions, and digital transformation with a modern, responsive, and user-friendly design.",
    imageUrl: "/images/TechVoyageCompany.png",
    link: "https://tech-voyage-next-js.vercel.app/", 
    tech_stack: "Next.js, Tailwind CSS, TypeScript"
  },
];



export default function Projects() {
  return (
    <section className="min-h-screen py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2,type:"spring", stiffness:"200" }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
