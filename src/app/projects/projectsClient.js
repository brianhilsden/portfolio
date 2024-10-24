"use client";
import { motion } from "framer-motion";
import ProjectCard from "../components/common/ProjectsCard";

const projects = [
  {
    title: "TechVoyage: Company Website Project",
    description:
      "TechVoyage specializes in delivering innovative web solutions. The company focuses on ensuring seamless user experiences. We utilize the latest technologies to meet your unique needs and take pride in crafting solutions that align with your vision and drive measurable results.",
    imageUrl: "/images/TechVoyageCompany.png",
    link: "https://techvoyage-kenya.github.io/TechVoyage-website/#/",
  },
  {
    title: "TechVoyage: Food Retail Management Dashboard Project",
    description:
      "The Retail Management App from TechVoyage is a comprehensive web application designed for Admins, Salespeople, Riders, and Business Owners. Featuring both admin and client sides, this powerful tool allows users to manage orders, oversee transactions, and optimize inventory and deliveries, ensuring smooth operations.",
    imageUrl: "/images/RetailApp.png",
    link: "https://retail-app-kappa.vercel.app/",
  },
  {
    title: "MunchInKenya",
    description:
      "Welcome to MunchInKenya, your solution for ordering delicious meals from local restaurants. Our elegant single-page application offers a seamless food ordering experience, enabling users to browse menus, customize orders, and track deliveries in real time. With secure online payments, MunchInKenya simplifies enjoying your favorite meals.",
    imageUrl: "/images/MunchInKenya.png",
    link: "https://brianhilsden.github.io/MunchInKenya-fe/",
  },
  {
    title: "MyDuka",
    description:
      "MyDuka is a robust retail management app that empowers business owners to oversee multiple stores effortlessly. With dedicated admins for each store, clerks handle daily tasks, managing products, recording sales, and requesting inventory. The in-app chat feature enables team communication, ensuring operational efficiency and streamlined performance monitoring.",
    imageUrl: "/images/MyDuka.png",
    link: "https://brianhilsden.github.io/MyDuka-FrontEnd/#/",
  },
 
  {
    title: "Royalty Trading",
    description:
      "Royalty Trading is a dynamic e-commerce platform built with vanilla JavaScript, designed to offer seamless buying and selling experiences. Users can browse diverse products, manage accounts, and complete secure transactions. With a focus on user-friendly design, Royalty Trading makes online shopping accessible and efficient for all.",
    imageUrl: "/images/RoyaltyTrading.png",
    link: "https://brianhilsden.github.io/Royalty-trading/",
  },
  {
    title: "Getway Travels",
    description:
      "Getway Travels is an online platform for booking travel packages, designed to enhance the user experience for travelers. The application offers features like searching for destinations, customizing travel plans, and managing bookings. With a user-friendly interface and secure payment options, Getway Travels simplifies planning your next adventure, ensuring a seamless travel experience.",
    imageUrl: "/images/GetwayTravels.png", 
    link: "https://brianhilsden.github.io/getway-travels", 
  },
  {
    title: "Payment App",
    description:
      "A Django-based REST API transactions management application that connects buyers and sellers, enabling sellers to track transactions efficiently. It facilitates secure online transactions and integrates JWT for authentication, ensuring a safe and smooth payment process.",
    imageUrl: "/images/paymentApp.png",
    link: "https://payment-app-psi-seven.vercel.app/api/docs/swagger/", 
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
