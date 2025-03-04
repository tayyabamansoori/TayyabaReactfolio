"use client"
import Link from "next/link"
import { motion } from "framer-motion"

export default function MotionDesign() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-8 font-sans transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.h1
          className="text-4xl font-light border-b border-black dark:border-white pb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          動態設計 MOTION DESIGN
        </motion.h1>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <p className="text-xl">Motion design projects are available as attachments.</p>
          <p className="text-lg mt-4">Please refer to the provided files for examples of motion design work.</p>
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

