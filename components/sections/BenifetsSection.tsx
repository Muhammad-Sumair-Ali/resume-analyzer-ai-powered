"use client"

import { motion } from 'motion/react'
import { 
    Clock,
    Zap,
    Shield,
  
    TrendingUp,
    ArrowRight
  } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
const BenefitsSection = () => {
    const benefits = [
        {
          icon: Clock,
          title: "30-Second Analysis",
          description: "Get comprehensive insights in under 30 seconds",
          color: "emerald"
        },
        {
          icon: Shield,
          title: "100% Secure",
          description: "Your data is encrypted and never stored permanently",
          color: "teal"
        },
        {
          icon: Zap,
          title: "Instant Results",
          description: "No waiting time - results appear immediately",
          color: "blue"
        },
        {
          icon: TrendingUp,
          title: "95% Success Rate",
          description: "Proven to improve interview callbacks significantly",
          color: "orange"
        }
      ]
  return (
    <div className='py-10 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-zinc-900 dark:via-gray-800 dark:to-zinc-900'>
         {/* Benefits */}
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h3 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Why Choose Our Platform?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-${benefit.color}-100 dark:bg-${benefit.color}-900/30 rounded-2xl mb-4`}>
                  <benefit.icon className={`w-8 h-8 text-${benefit.color}-600 dark:text-${benefit.color}-400`} />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-gray-300">
                  {benefit.description}
                </p>
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
        className="text-center py-8"
      >
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-3xl p-8 md:p-12 border border-emerald-200 dark:border-emerald-800">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Ready to Transform Your Resume?
          </h3>
          <p className="text-lg text-slate-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of job seekers who have successfully landed their dream jobs with our AI-powered resume analyzer.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/upload">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Start Analyzing Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg font-semibold border-2 border-slate-300 dark:border-gray-600 hover:border-slate-400 dark:hover:border-gray-500 hover:bg-slate-50 dark:hover:bg-gray-800 transition-all duration-300 bg-transparent dark:text-gray-200"
              >
                See How It Works
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default BenefitsSection
