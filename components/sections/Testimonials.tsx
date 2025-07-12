"use client";
import { Card, CardContent } from "@/components/ui/card";

import React from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      company: "Tech Corp",
      content:
        "The AI analysis helped me identify missing keywords that were crucial for ATS systems. Got 3 interviews in 2 weeks!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Marketing Manager",
      company: "Digital Solutions",
      content:
        "The suggestions were incredibly specific and actionable. My resume now perfectly matches job descriptions.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer",
      company: "Creative Agency",
      content:
        "Finally landed my dream job! The AI helped me highlight the right skills for each position I applied to.",
      rating: 5,
    },
  ];
  return (
    <>
      {/* Testimonials Section */}
      <section id="testimonials" className="py-8 bg-gray-50 px-7">
        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
            What Our Users Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-white/20 dark:border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-slate-600 dark:text-gray-300 mb-4 italic">
                      {testimonial.content}
                    </p>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Testimonials;
