"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

const projects =[
  {
    title: "Movie Streaming Website",
    description: "Developed a movie streaming platform with CRUD functionalities for movie entries.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/tayyabamansoori/PHP-MySQL-MovieStreaming",
  },
  {
    title: "NGO Management System",
    description: "Built an NGO management system with admin and user functionalities.",
    technologies: [".NET", "C#", "SQL Server"],
    github: "-",
  },
  {
    title: "Personal Portfolio Website",
    description: "Designed and developed a personal portfolio to showcase projects and skills. Ensured a responsive and visually appealing UI with modern front-end technologies.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    github: "-",
  },
  {
    title: "Laptop Harbour: E-Commerce App for Tech Products",
    description: "Created a modern e-commerce app for laptops, featuring intuitive search, wishlist functionality, and a streamlined checkout experience. Integrated Firebase Firestore for real-time data and scalable performance.",
    technologies: ["Flutter", "Dart", "Firebase Firestore"],
    github: "-",
  },
  {
    title: "TripBudgeter: Travel Budget Optimization App",
    description: "Developed a cross-platform travel budgeting app with advanced trip management and real-time expense tracking. Built both User and Admin Panel. Utilized Flutter for a polished UI and Firebase for secure backend infrastructure.",
    technologies: ["Flutter", "Dart", "Firebase"],
    github: "-",
  },
  {
    title: "Hair Treatment Website",
    description: "Designed and developed a front-end website for a hair treatment service.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/tayyabamansoori/LuxHairTreatmentWebApp_HTML_CSS_JS",
  },
  {
    title: "Front-End Website",
    description: "Developed a visually appealing front-end website using Bootstrap and JavaScript, ensuring a responsive layout and smooth user experience.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    github: "https://github.com/tayyabamansoori/bookmyticket-HTML-CSS",
    live: "https://tayyabamansoori.github.io/bookmyticket-HTML-CSS",
    
   
},
]
export default function Projects() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-8 font-sans transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.h1
          className="text-4xl font-light border-b border-black dark:border-white pb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
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
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="border border-black dark:border-white p-4 hover:shadow-lg transition-shadow duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h2 className="text-2xl font-light mb-2">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-2 py-1 text-sm rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-500 hover:text-blue-600 transition-colors"
                >
                  <Github size={18} />
                  <span className="ml-1">GitHub</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-green-500 hover:text-green-600 transition-colors"
                >
                  <ExternalLink size={18} />
                  <span className="ml-1">Live Demo</span>
                </a>
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

