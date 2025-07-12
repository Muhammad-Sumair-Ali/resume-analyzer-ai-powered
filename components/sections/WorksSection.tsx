"use client"

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Upload, 
  Brain, 
  Target, 
  CheckCircle, 
  Sparkles,
} from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react'

const WorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Upload Your Resume",
      description: "Simply drag and drop your resume in PDF, DOCX, or text format. Our secure system instantly processes your document.",
      details: [
        "Multiple format support (PDF, DOCX, TXT)",
        "Secure file handling with encryption",
        "Instant document processing",
        "No file size limitations"
      ],
      color: "emerald"
    },
    {
      number: "02",
      icon: Target,
      title: "Input Job Description",
      description: "Paste the job description you're targeting. Our AI analyzes the requirements and matches them with your resume.",
      details: [
        "Paste any job description",
        "AI keyword extraction",
        "Requirement analysis",
        "Role-specific matching"
      ],
      color: "teal"
    },
    {
      number: "03",
      icon: Brain,
      title: "AI Analysis & Matching",
      description: "Our advanced AI compares your resume with the job requirements to identify gaps and opportunities.",
      details: [
        "Keyword matching analysis",
        "Skills gap identification",
        "ATS compatibility check",
        "Performance scoring"
      ],
      color: "blue"
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Get Smart Suggestions",
      description: "Receive detailed, actionable feedback with specific improvements to make your resume stand out.",
      details: [
        "Personalized recommendations",
        "Actionable improvement tips",
        "Priority-based suggestions",
        "Success probability score"
      ],
      color: "orange"
    }
  ]





  return (
    <section id="how-it-works" className="py-12 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-zinc-900 dark:via-gray-800 dark:to-zinc-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge
            variant="secondary"
            className="px-4 py-2 text-sm font-medium bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 mb-6"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Simple 4-Step Process
          </Badge>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
              How Our AI
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Transforms Your Resume
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our intelligent system works in just 4 simple steps to analyze, optimize, and perfect your resume for any job opportunity.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 z-0" />
              )}
              
              <Card className="h-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-white/20 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105 relative z-10">
                <CardHeader className="text-center pb-4">
                  <div className="relative mb-6">
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-${step.color}-100 dark:bg-${step.color}-900/30 rounded-full mb-4`}>
                      <step.icon className={`w-10 h-10 text-${step.color}-600 dark:text-${step.color}-400`} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-center">
                    {step.description}
                  </p>
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                        <span className="text-sm text-slate-600 dark:text-gray-300">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

     



  
      </div>
    </section>
  )
}

export default WorksSection
