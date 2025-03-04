"use client"
import Link from "next/link"
import { motion } from "framer-motion"

const skills = [
  { category: "Programming Languages", items: ["JavaScript", "Python", "Java", "C++", "TypeScript"] },
  { category: "Web Technologies", items: ["React", "Node.js", "Express", "HTML5", "CSS3", "RESTful APIs"] },
  { category: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"] },
  { category: "DevOps & Cloud", items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git"] },
  { category: "Other", items: ["Agile Methodologies", "Test-Driven Development", "Microservices Architecture"] },
]

export default function Skills() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-8 font-sans transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.h1
          className="text-4xl font-light border-b border-black dark:border-white pb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h1>
        <motion.div
          className="space-y-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {skills.map((skillSet, index) => (
            <motion.div
              key={index}
              className="border border-black dark:border-white p-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h2 className="text-2xl font-light mb-4">{skillSet.category}</h2>
              <div className="flex flex-wrap gap-2">
                {skillSet.items.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-2 py-1 text-sm rounded cursor-pointer hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        <Link
          href="/"
          className="inline-block border border-black dark:border-white px-4 py-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
        >
          Back to Contents
        </Link>
      </div>
    </div>
  )
}

