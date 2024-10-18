// pages/index.js
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import EncButton from "./components/common/EncryptButton";

export default function Home() {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex items-center py-20">
      <div className="container mx-auto px-8">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I&apos;m <span className="text-indigo-500">Brian Omondi</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I am a dedicated full-stack web developer, passionate about crafting
            elegant and functional web applications. Let’s collaborate to create
            something extraordinary together.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            className="flex space-x-4 items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/projects">
              <EncButton text={"View All Projects"} />
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full font-semibold transition"
            >
              About Me
            </Link>
          </motion.div>
        </div>

        {/* Scrolling Arrow Down */}
        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#featured-projects">
            <svg
              className="w-8 h-8 text-indigo-500 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </motion.div>

        {/* Featured Projects Section */}
        <motion.div
          id="featured-projects"
          className="mt-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project Card Example */}
            <motion.div
              className="bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-4">
                TechVoyage: Company Website Project
              </h3>
              <p className="text-gray-300">
                TechVoyage specializes in delivering innovative web solutions
                and ensuring seamless user experiences.
              </p>
              <Link
                href="https://techvoyage-kenya.github.io/TechVoyage-website/#/"
                target="_blank"
                className="text-indigo-500 mt-4 inline-block"
              >
                Visit site →
              </Link>
            </motion.div>

            <motion.div
              className="bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-4">MyDuka</h3>
              <p className="text-gray-300">
                MyDuka is a robust retail store management app that allows
                business owners to manage multiple stores effortlessly.
              </p>
              <Link
                href="https://brianhilsden.github.io/MyDuka-FrontEnd/#/"
                target="_blank"
                className="text-indigo-500 mt-4 inline-block"
              >
                Visit site →
              </Link>
            </motion.div>

            <motion.div
              className="bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-4">MunchInKenya</h3>
              <p className="text-gray-300">
              MunchInKenya is a dynamic single-page food delivery application designed to connect users with a diverse range of Kenyan restaurants and culinary offerings.
              </p>
              <Link
                href="https://brianhilsden.github.io/MunchInKenya-fe/"
                target="_blank"
                className="text-indigo-500 mt-4 inline-block"
              >
                Visit site →
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
