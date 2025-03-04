"use client"
import Link from "next/link"
import { motion } from "framer-motion"

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Innovators Inc.",
    period: "2020 - Present",
    responsibilities: [
      "Lead development of microservices-based applications",
      "Mentor junior developers and conduct code reviews",
      "Implement CI/CD pipelines for streamlined deployments",
    ],
  },
  {
    title: "Software Developer",
    company: "DataDrive Solutions",
    period: "2017 - 2020",
    responsibilities: [
      "Developed and maintained RESTful APIs",
      "Optimized database queries for improved performance",
      "Collaborated with cross-functional teams to deliver projects on time",
    ],
  },
  {
    title: "Junior Developer",
    company: "WebCraft Studios",
    period: "2015 - 2017",
    responsibilities: [
      "Assisted in front-end development using React",
      "Participated in agile development processes",
      "Contributed to the development of responsive web designs",
    ],
  },
]

export default function Experience() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-8 font-sans transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.h1
          className="text-4xl font-light border-b border-black dark:border-white pb-4"
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
              <h2 className="text-2xl font-light mb-2">{exp.title}</h2>
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
          Back to Contents
        </Link>
      </div>
    </div>
  )
}

