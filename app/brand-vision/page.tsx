"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function BrandVision() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-8 font-sans transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.h1
          className="text-4xl font-light border-b border-black dark:border-white pb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          品牌/視覺設計 BRAND/VISION
        </motion.h1>
        <motion.div
          className="grid grid-cols-2 gap-8"
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
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="space-y-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Image
                src={`/placeholder.svg?height=300&width=400`}
                alt={`Brand design ${i}`}
                width={400}
                height={300}
                className="w-full h-auto"
              />
              <p className="text-sm">Brand Design {i}</p>
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

