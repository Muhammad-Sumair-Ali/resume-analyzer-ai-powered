"use client";

import React, { FormEvent, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  MessageSquare,
  User,
  CheckCircle,
  ArrowRight,
  Facebook,
  AlertCircle
} from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(false);
    setError(null);
  
    try {
      const response = await axios.post("/api/contact", formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.status === 200) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => {
          setIsSubmitted(false);
        }, 4000);
      } else {
        setError('Unexpected response from server');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.error || 'Failed to connect to the server. Please try again.';
        setError(errorMessage);
        console.error('Error details:', error.response?.data, error.response?.status);
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };



  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "muhammadsumair224@gmail.com",
      link: "mailto:muhammadsumair224@gmail.com",
      description: "Send me an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 319 4075607",
      link: "tel:+923194075607",
      description: "Call me during business hours"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Karachi Sindh, Pakistan",
      link: "https://maps.app.goo.gl/9XAmKDujBhgAWYMS8",
      description: "Based in Karachi"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Muhammad-Sumair-Ali",
      color: "hover:bg-gray-900 hover:text-white"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/muhammad-sumair-b60a91301",
      color: "hover:bg-blue-600 hover:text-white"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/m.sumair.jatoi",
      color: "hover:bg-blue-400 hover:text-white"
    }
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
              Get in Touch
            </span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Let&apos;s Connect
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Have a question about the resume analyzer or want to collaborate? 
            I&apos;d love to hear from you. Send me a message and I&apos;ll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white">
                  <MessageSquare className="h-6 w-6 text-emerald-600" />
                  Send Message
                </CardTitle>
                                 <p className="text-slate-600 dark:text-gray-300">
                   Fill out the form below and I&apos;ll get back to you as soon as possible.
                 </p>
              </CardHeader>
              <CardContent>
                                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-slate-600 dark:text-gray-300">
                      Thank you for reaching out. I&apos;ll get back to you soon.
                    </p>
                  </motion.div>
                ) : error ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <AlertCircle className="h-16 w-16 text-red-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      Error Sending Message
                    </h3>
                    <p className="text-slate-600 dark:text-gray-300 mb-4">
                      {error}
                    </p>
                    <Button
                      onClick={() => setError(null)}
                      className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white"
                    >
                      Try Again
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">
                          Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your name"
                            className="pl-10 h-12 bg-white/50 dark:bg-gray-700/50 border-slate-200 dark:border-gray-600 focus:border-emerald-500 dark:focus:border-emerald-400"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">
                          Email
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your@email.com"
                            className="pl-10 h-12 bg-white/50 dark:bg-gray-700/50 border-slate-200 dark:border-gray-600 focus:border-emerald-500 dark:focus:border-emerald-400"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What&apos;s this about?"
                        className="h-12 bg-white/50 dark:bg-gray-700/50 border-slate-200 dark:border-gray-600 focus:border-emerald-500 dark:focus:border-emerald-400"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me more about your inquiry..."
                        rows={6}
                        className="w-full px-4 py-3 h-32 bg-white/50 dark:bg-gray-700/50 border border-slate-200 dark:border-gray-600 rounded-md focus:border-emerald-500 dark:focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:focus:ring-emerald-400/20 resize-none text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-400"
                        required
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white h-12 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          Send Message
                          <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6">
                      <Link href={info.link} className="flex items-center gap-4 group">
                        <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                            {info.title}
                          </h3>
                          <p className="text-slate-600 dark:text-gray-300 text-sm">
                            {info.value}
                          </p>
                          <p className="text-slate-500 dark:text-gray-400 text-xs">
                            {info.description}
                          </p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 ml-auto transition-colors" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                    Follow Me
                  </CardTitle>
                  <p className="text-slate-600 dark:text-gray-300">
                    Connect with me on social media
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <Link
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-lg border border-slate-200 dark:border-gray-600 hover:border-transparent transition-all duration-300 ${social.color}`}
                      >
                        <social.icon className="h-6 w-6" />
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-3xl p-8 md:p-12 border border-emerald-200 dark:border-emerald-800"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Let&apos;s Build Something Amazing Together
            </h2>
                         <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
               Whether you have a project in mind, want to discuss collaboration opportunities, 
               or just want to say hello, I&apos;m always excited to connect with fellow developers and creators.
             </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/upload">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Try Resume Analyzer
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-lg font-semibold border-2 border-slate-300 dark:border-gray-600 hover:border-slate-400 dark:hover:border-gray-500 hover:bg-slate-50 dark:hover:bg-gray-800 transition-all duration-300 bg-transparent dark:text-gray-200"
                >
                  Learn More About Me
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
