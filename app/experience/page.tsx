"use client"
import Link from "next/link"
import { motion } from "framer-motion"

const experiences = [
  {
    title: "Freelance Web & Mobile Developer",
    company: "Self-Employed",
    period: "2022 - Present",
    responsibilities: [
      "Developed responsive websites and web applications using HTML, CSS, JavaScript, and PHP.",
      "Designed and built mobile applications using Flutter and Dart.",
      "Worked with clients to understand project requirements and deliver high-quality solutions.",
    ],
  },
  {
    title: "Computer Science Instructor",
    company: "Private Institution",
    period: "2024 - Present",
    responsibilities: [
      "Taught HTML, CSS, JavaScript, C++, and basic Python to senior classes.",
      "Designed structured lesson plans and coding exercises to enhance student learning.",
      "Provided hands-on training in front-end and basic back-end development.",
      "Guided students in developing small projects to apply programming concepts.",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "Aptech Learning (Project-Based)",
    period: "2023",
    responsibilities: [
      "Developed a movie streaming website with CRUD functionality using PHP and SQL.",
      "Built front-end web pages using Bootstrap, JavaScript, and CSS for an e-project.",
      "Collaborated with a team to create user-friendly interfaces and improve website performance.",
    ],
  },
]

export default function Experience() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-8 font-sans transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.h1
          className="text-4xl font-bold border-b border-black dark:border-white pb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience
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
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="border border-black dark:border-white p-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h2 className="text-2xl font-semibold mb-2">{exp.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                {exp.company} | {exp.period}
              </p>
              <ul className="list-disc list-inside">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="text-sm">
                    {resp}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        <Link
          href="/"
          className="inline-block border border-black dark:border-white px-4 py-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

