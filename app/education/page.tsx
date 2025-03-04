"use client"
import Link from "next/link"
import { motion } from "framer-motion"

const education = [
  {
    degree: "Advanced Diploma in Software Engineering (Ongoing)",
    institution: "Aptech Learning Pakistan",
    year: "2023 - Present",
    details: [
      "Studying Software Development, Web & Mobile App Development",
      "Working on real-world projects using modern technologies",
    ],
  },
  {
    degree: "Intermediate in Computer Science",
    institution: "Govt College",
    year: "Completed in 2023",
    details: [
      "Learned the fundamentals of programming, databases, and networking",
      "Developed interest in web development and software engineering",
    ]
  },
  {
    "degree": "Matriculation in Computer Science",
    "year": "Completed in 2021",
    "details": [
      "Studied programming basics, mathematics, and computer applications",
      "Built a strong foundation in problem-solving and logical thinking"
    ]
  }
]

export default function Education() {
  return (
<div className="min-h-screen bg-black dark:bg-black text-black dark:text-white p-8 font-sans transition-colors duration-300">
  <div className="max-w-4xl mx-auto space-y-12">
    <motion.h1
      className="text-4xl font-light border-b border-neutral-800 dark:border-gray-700 pb-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Education
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
      {education.map((edu, index) => (
        <motion.div
          key={index}
          className="border border-neutral-800 dark:border-gray-700 p-4 rounded-lg shadow-md"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="text-2xl font-light mb-2">{edu.degree}</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            {edu.institution} | {edu.year}
          </p>
          <ul className="list-disc list-inside">
            {edu.details.map((detail, i) => (
              <li key={i} className="text-sm">
                {detail}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
    <Link
      href="/"
      className="inline-block border border-neutral-800 dark:border-gray-700 px-4 py-2 hover:bg-neutral-800 hover:text-white dark:hover:bg-gray-300 dark:hover:text-black transition-colors"
    >
      Back to Contents
    </Link>
  </div>
</div>

  )
}

