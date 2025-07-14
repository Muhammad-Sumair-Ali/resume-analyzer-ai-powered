"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code,
  Brain,
  Shield,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Target,
  BarChart3,
  Laptop,
} from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import DeveloperImage from "../../../images/developer.jpg";
const AboutPage = () => {
  const techStack = [
    { name: "Next.js 15", category: "Framework", icon: "⚛️" },
    { name: "React 19", category: "Frontend", icon: "⚛️" },
    { name: "TypeScript", category: "Language", icon: "📘" },
    { name: "Tailwind CSS", category: "Styling", icon: "🎨" },
    { name: "Shadcn UI", category: "Components", icon: "🧩" },
    { name: "Framer Motion", category: "Animation", icon: "✨" },
    { name: "OpenAI API", category: "AI", icon: "🤖" },
    { name: "Groq API", category: "AI", icon: "🚀" },
    { name: "pdf-parse", category: "Document", icon: "📄" },
    { name: "Tesseract.js", category: "OCR", icon: "👁️" },
    { name: "axios", category: "Networking", icon: "🌐" },
    { name: "mongoose", category: "Database ODM", icon: "🍃" },
    { name: "lucide-react", category: "Icons", icon: "🔗" },
  ];

  const skills = [
    { name: "Full Stack Development", level: 95, color: "emerald" },
    { name: "AI/ML Integration", level: 90, color: "blue" },
    { name: "UI/UX Design", level: 85, color: "purple" },
    { name: "API Development", level: 92, color: "teal" },
    { name: "Database Design", level: 88, color: "orange" },
    { name: "DevOps & Deployment", level: 85, color: "indigo" },
  ];

  const features = [
    {
      icon: Brain,
      title: "Advanced AI Analysis",
      description:
        "Powered by OpenAI GPT-4 and Groq for intelligent resume parsing and job matching",
      color: "emerald",
    },
    {
      icon: Target,
      title: "ATS Optimization",
      description:
        "Ensures your resume passes through Applicant Tracking Systems with 95% success rate",
      color: "teal",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description:
        "Real-time insights and improvement suggestions based on industry standards",
      color: "blue",
    },
    {
      icon: Shield,
      title: "Secure Processing",
      description:
        "Enterprise-grade security with encrypted file handling and data protection",
      color: "purple",
    },
  ];

  const aiTechnologies = [
    {
      name: "OpenAI API",
      description:
        "Advanced language model for intelligent text analysis and content optimization",
      use: "Resume content analysis and improvement suggestions",
    },
    {
      name: "Groq API",
      description: "Ultra-fast inference engine for real-time AI processing",
      use: "Rapid job description matching and keyword extraction",
    },
    {
      name: "pdf-parse",
      description: "Node.js module for extracting text from PDF files on the server side.",
      use: "Server-side PDF text extraction for resume analysis.",
    },
    {
      name: "pdfjs-dist",
      description: "PDF.js distribution for client-side PDF parsing and text extraction.",
      use: "Client-side PDF file extraction and text parsing in the browser.",
    },
    {
      name: "Tesseract.js",
      description: "OCR technology for image-based document processing",
      use: "Image-to-text conversion for scanned resumes",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-zinc-900 dark:via-gray-800 dark:to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
              AI-Powered Resume
            </span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Analyzer Platform
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            A cutting-edge resume analysis platform built with modern
            technologies and advanced AI to help job seekers optimize their
            resumes and land their dream jobs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/upload">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Try It Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#tech-stack">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg font-semibold border-2 border-slate-300 dark:border-gray-600 hover:border-slate-400 dark:hover:border-gray-500 hover:bg-slate-50 dark:hover:bg-gray-800 transition-all duration-300 bg-transparent dark:text-gray-200"
              >
                View Tech Stack
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-3xl p-8 md:p-12 border border-emerald-200 dark:border-emerald-800">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex flex-col md:flex-row justify-between items-center mb-4 p-4 bg-gradient-to-r from-white to-emerald-50 dark:from-slate-900 dark:to-emerald-950 rounded-2xl shadow-lg">
                    <div className="text-center md:text-left">
                      <h2 className="text-3xl gap-2 flex it ems-center font-extrabold text-slate-900 dark:text-white">
                        <Laptop size={32} /> Meet the Developer
                      </h2>
                      <p className="mt-2 text-lg text-gray-600 dark:text-gray-300 max-w-md">
                        👋 Hi there! I&apos;m Muhammad Sumair, a web developer
                        who loves building websites.
                      </p>
                    </div>

                    <Image
                      src={DeveloperImage}
                      width={130}
                      height={130}
                      alt="Developer portrait"
                      className="mt-6 md:mt-0 object-cover h-32 w-32 rounded-full border-4 border-emerald-500 shadow-md hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="relative flex flex-col items-start">
                    <p className="text-lg text-slate-600 dark:text-gray-300 mb-6 leading-relaxed pr-4">
                      I&apos;m Muhammad Sumair, a 20-year-old self-taught Full
                      Stack Developer from Pakistan with 1.5+ years of hands-on
                      experience in building web applications.
                    </p>

                    <p className="text-lg text-slate-600 dark:text-gray-300 mb-8 leading-relaxed">
                      My passion lies in creating efficient solutions using
                      modern technologies like React, Next , Node.js, and
                      MongoDB. I specialize in building scalable web
                      applications, APIs, and responsive user interfaces.
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="flex flex-wrap gap-4">
                    <Link href="https://github.com" target="_blank">
                      <Button
                        variant="outline"
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </Button>
                    </Link>
                    <Link href="https://linkedin.com" target="_blank">
                      <Button
                        variant="outline"
                        className="flex items-center gap-2"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </Button>
                    </Link>
                    <Link href="mailto:contact@example.com">
                      <Button
                        variant="outline"
                        className="flex items-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        Contact
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-${skill.color}-100 dark:bg-${skill.color}-900/30 rounded-2xl mb-4`}
                    >
                      <Code
                        className={`w-8 h-8 text-${skill.color}-600 dark:text-${skill.color}-400`}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {skill.name}
                    </h3>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">
                      {skill.level}%
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          id="tech-stack"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
              Built with cutting-edge technologies and modern development
              practices
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-3">{tech.icon}</div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                      {tech.name}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-gray-400">
                      {tech.category}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              AI Technologies Used
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
              Advanced artificial intelligence powers every aspect of our resume
              analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiTechnologies.map((ai, index) => (
              <motion.div
                key={ai.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                      <Brain className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                      {ai.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-600 dark:text-gray-300">
                      {ai.description}
                    </p>
                    <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">
                        How its used:
                      </h4>
                      <p className="text-sm text-emerald-600 dark:text-emerald-400">
                        {ai.use}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Why This Platform is the Best
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
              Advanced features that set us apart from traditional resume
              builders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-${feature.color}-100 dark:bg-${feature.color}-900/30 rounded-2xl mb-4`}
                    >
                      <feature.icon
                        className={`w-8 h-8 text-${feature.color}-600 dark:text-${feature.color}-400`}
                      />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-3xl p-8 md:p-12 border border-emerald-200 dark:border-emerald-800">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-lg text-slate-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of job seekers who have transformed their careers
              with our AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/upload">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Start Your Analysis
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-lg font-semibold border-2 border-slate-300 dark:border-gray-600 hover:border-slate-400 dark:hover:border-gray-500 hover:bg-slate-50 dark:hover:bg-gray-800 transition-all duration-300 bg-transparent dark:text-gray-200"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
