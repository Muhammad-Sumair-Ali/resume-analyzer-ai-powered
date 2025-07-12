'use client'

import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'

const Footer = () => {
  const quickLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
  ]

  return (
    <footer className="bg-zinc-900 text-white py-10 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Logo & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <Logo />
          </div>
          <p className="text-gray-400 text-sm max-w-sm">
            AI-powered resume analysis and career growth insights tailored for job seekers.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h4 className="text-sm font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-sm font-semibold mb-3">Connect</h4>
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="w-9 h-9 bg-zinc-800 hover:bg-emerald-600 rounded-md flex items-center justify-center transition"
              >
                <social.icon className="w-4 h-4 text-gray-300 hover:text-white transition-colors" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-zinc-700 pt-6 text-center text-gray-500 text-sm">
        &copy; 2025 Resume Analyzer. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
