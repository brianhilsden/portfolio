"use client";
import { motion } from "framer-motion";
import ProjectCard from "../components/common/ProjectsCard";

const projects = [
  {
    title: "MyDuka",
    description:
      "MyDuka is a robust retail store management app that allows business owners to manage multiple stores effortlessly. Each store can be administered by dedicated admins, while clerks handle daily operations. Users can manage products, record sales, request inventory, and oversee employee performance, ensuring streamlined operations and enhanced productivity.",
    imageUrl: "/images/MyDuka.png",
    link: "https://brianhilsden.github.io/MyDuka-FrontEnd/#/",
  },

  {
    title: "Royalty Trading",
    description:
      "Royalty Trading is a dynamic e-commerce platform built with vanilla JavaScript, designed to provide seamless buying and selling experiences. Users can easily browse a diverse range of products, manage their accounts, and complete secure transactions. With an emphasis on user-friendly design and robust functionality, Royalty Trading makes online shopping accessible and efficient for everyone.",
    imageUrl: "/images/RoyaltyTrading.png",
    link: "https://brianhilsden.github.io/Royalty-trading/",
  },
  {
    title: "MunchInKenya",
    description: "Welcome to MunchInKenya, your go-to solution for ordering delicious meals from local restaurants. Our elegant single-page application provides a seamless food ordering experience, allowing users to browse menus, customize orders, and track deliveries in real time. With secure online payments and a user-friendly interface, MunchInKenya simplifies the way you enjoy your favorite meals.",
    imageUrl: "/images/MunchInKenya.png",
    link: "https://brianhilsden.github.io/MunchInKenya-fe/",
  }
  
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
