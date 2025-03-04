"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  }

  return (
    <main className="min-h-screen bg-black text-white p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.header
          className="border border-white p-8 rounded-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl font-light mb-4">Tayyaba Rehan</h1>
          <p className="text-xl text-gray-400">Software Developer</p>
          <div className="mt-4 text-sm space-y-1 text-gray-500">
            <p>EMAIL: tayyabarehanmansoori0099@gmail.com</p>
            <p>GITHUB: https://github.com/tayyabamansoori</p>
            <p>LINKEDIN: www.linkedin.com/in/tayyabarehan</p>
          </div>
        </motion.header>

        <motion.section
          className="border border-white p-8 rounded-lg"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-light mb-6 pb-2 border-b border-white/20">Contents</h2>
          <nav>
            <ul className="space-y-4">
              <motion.li variants={itemVariants}>
                <Link href="/skills" className="flex justify-between items-center group">
                  <span className="text-lg">○ Skills</span>
                  <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link href="/education" className="flex justify-between items-center group">
                  <span className="text-lg">○ Education</span>
                  <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link href="/experience" className="flex justify-between items-center group">
                  <span className="text-lg">○ Experience</span>
                  <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link href="/projects" className="flex justify-between items-center group">
                  <span className="text-lg">○ Projects</span>
                  <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link href="/contact" className="flex justify-between items-center group">
                  <span className="text-lg">○ Contact</span>
                  <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
                </Link>
              </motion.li>
            </ul>
          </nav>
        </motion.section>

        <motion.footer
          className="text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          © 2025 Tayyaba Rehan. All rights reserved.
        </motion.footer>
      </div>
    </main>
  )
}

