"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Brain, 
  CheckCircle, 
  FileText, 
  Target, 
  Shield, 
  BarChart3, 
  Sparkles,
} from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react'

const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: "Smart Resume Upload",
      description: "Upload your resume in PDF, DOCX, or text format. Our AI instantly extracts and analyzes all content for optimization.",
      benefits: ["Multiple format support", "Instant processing", "Secure file handling"],
      color: "emerald"
    },
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced AI compares your resume with job descriptions to identify gaps and opportunities for improvement.",
      benefits: ["Keyword matching", "Skills gap analysis", "ATS compatibility check"],
      color: "teal"
    },
    {
      icon: Target,
      title: "Job Description Matching",
      description: "Input any job description and get personalized recommendations to tailor your resume for specific positions.",
      benefits: ["Custom recommendations", "Role-specific optimization", "Industry insights"],
      color: "blue"
    },
    {
      icon: CheckCircle,
      title: "Smart Suggestions",
      description: "Receive actionable feedback with specific improvements to make your resume stand out to recruiters.",
      benefits: ["Actionable feedback", "Performance metrics", "Improvement tracking"],
      color: "orange"
    },
    {
      icon: Shield,
      title: "ATS Optimization",
      description: "Ensure your resume passes through Applicant Tracking Systems with our advanced optimization algorithms.",
      benefits: ["ATS-friendly formatting", "Keyword optimization", "Compatibility scoring"],
      color: "purple"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Track your resume's performance with detailed analytics and improvement suggestions over time.",
      benefits: ["Performance tracking", "Success metrics", "Progress monitoring"],
      color: "indigo"
    }
  ]

  return (
    <section id="features" className="py-12 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-zinc-900 dark:via-gray-800 dark:to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Powerful Features
          </Badge>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
              Everything You Need to
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Land Your Dream Job
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our AI-powered platform provides comprehensive tools to analyze, optimize, and perfect your resume for any job opportunity.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-${feature.color}-100 dark:bg-${feature.color}-900/30 rounded-2xl mb-4`}>
                    <feature.icon className={`w-8 h-8 text-${feature.color}-600 dark:text-${feature.color}-400`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                        <span className="text-sm text-slate-600 dark:text-gray-300">{benefit}</span>
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

export default FeaturesSection