"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, FileText, Target, Zap } from "lucide-react"
import Link from "next/link"
import { motion } from "motion/react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex justify-center pt-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-zinc-900 dark:via-gray-800 dark:to-zinc-900">
      {/* Background Elements - Full Width */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern - Full Width */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Content Container - Constrained Width */}
      <div className="relative w-full mt-2 pt-4 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge
            variant="secondary"
            className="my-8 md:my-2 px-4 py-2 text-sm font-medium bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/30"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Resume Analysis
          </Badge>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
            Transform Your Resume
          </span>
          <br />
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent text-3xl lg:text-6xl md:text-5xl">
            Land Your Dream Job
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-slate-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Upload your resume, input any job description, and get instant AI-powered insights, optimization suggestions,
          and ATS compatibility scores to maximize your chances of success.
        </motion.p>

        {/* Feature Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center gap-8 my-6 md:mb-12"
        >
          <div className="flex items-center gap-2 text-slate-600 dark:text-gray-300">
            <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
              <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <span className="text-sm font-medium">Smart Analysis</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600 dark:text-gray-300">
            <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
              <Target className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <span className="text-sm font-medium">ATS Optimization</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600 dark:text-gray-300">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-sm font-medium">Instant Results</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row mt-16 md:mt-2 justify-center gap-4"
        >
          <Link href="/upload">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Analyze My Resume
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="#features">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg font-semibold border-2 border-slate-300 dark:border-gray-600 hover:border-slate-400 dark:hover:border-gray-500 hover:bg-slate-50 dark:hover:bg-gray-800 transition-all duration-300 bg-transparent dark:text-gray-200"
            >
              See How It Works
            </Button>
          </Link>
        </motion.div>

 
      </div>

      {/* Floating Elements - Full Width */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl opacity-20 hidden lg:block"
      />
      <motion.div
        animate={{
          y: [0, 10, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-20 hidden lg:block"
      />
    </section>
  )
}
