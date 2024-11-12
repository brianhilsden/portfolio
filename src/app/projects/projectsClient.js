"use client";
import { motion } from "framer-motion";
import ProjectCard from "../components/common/ProjectsCard";

const projects = [
  {
    title: "TechVoyage: Company Website Project",
    description:
      "TechVoyage specializes in delivering innovative web solutions. The company focuses on ensuring seamless user experiences. We utilize the latest technologies to meet your unique needs and take pride in crafting solutions that align with your vision and drive measurable results.",
    imageUrl: "/images/TechVoyageCompany.png",
    link: "https://techvoyage.co.ke/#/",
    tech_stack: "Next.js, Node.js, Express.js, PostgreSQL"
 
  },
  {
    title: "Learning Management System",
    description:
      "This Django REST API is designed to power a robust Learning Management System, providing endpoints for managing courses, user registrations, enrollments, and role-based access control. Instructors, students, and administrators can seamlessly interact with the system, leveraging various access levels to perform actions like course creation, assignment submission, and grading.",
    imageUrl: "/images/LMS.png",
    link: "https://learning-management-system-alpha-eosin.vercel.app/docs/",
    tech_stack: "Django REST Framework, PostgreSQL"
  },
  {
    title: "TechVoyage: Food Retail Management Dashboard Project",
    description:
      "The Retail Management App from TechVoyage is a comprehensive web application designed for Admins, Salespeople, Riders, and Business Owners. Featuring both admin and client sides, this powerful tool allows users to manage orders, oversee transactions, and optimize inventory and deliveries, ensuring smooth operations.",
    imageUrl: "/images/RetailApp.png",
    link: "https://retail-app-kappa.vercel.app/",
    tech_stack: "React.js, Spring Boot"
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
