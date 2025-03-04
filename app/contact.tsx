"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Phone } from "lucide-react"

export default function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-8 font-sans transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.h1
          className="text-4xl font-light border-b border-black dark:border-white pb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.h1>
        <motion.div className="space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <p className="text-xl">Feel free to reach out for collaborations or just a friendly hello</p>
          <div className="space-y-4">
            <motion.div
              className="flex items-center space-x-4"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Mail size={24} />
              <p>your.email@example.com</p>
            </motion.div>
            <motion.div
              className="flex items-center space-x-4"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Phone size={24} />
              <p>+1 (123) 456-7890</p>
            </motion.div>
            <motion.div
              className="flex items-center space-x-4"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Github size={24} />
              <a href="https://github.com/yourusername" className="hover:underline">
                github.com/yourusername
              </a>
            </motion.div>
            <motion.div
              className="flex items-center space-x-4"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Linkedin size={24} />
              <a href="https://linkedin.com/in/yourusername" className="hover:underline">
                linkedin.com/in/yourusername
              </a>
            </motion.div>
          </div>
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

