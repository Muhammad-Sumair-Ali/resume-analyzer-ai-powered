/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import type React from "react"
import { motion } from "motion/react";

import { AnalysisResults, FileUpload, JobDescriptionInput, usePDFExtraction, useResumeAnalysis } from "@/hooks/useResumeForm"
import { AlertCircle, FileText, Loader2, Send } from "lucide-react";

export default function ResumeUploadForm() {
  const { extractTextFromPDF, isReady } = usePDFExtraction();
  const {
    resume,
    setResume,
    jobDescription,
    setJobDescription,
    result,
    setResult,
    loading,
    setLoading,
    error,
    setError,
    lastSubmission,
    setLastSubmission,
    analyzeResume
  } = useResumeAnalysis();

  const handleFileChange = (e: any) => {
    const file = e.target.files?.[0] || null;
    setResume(file);
    setError('');
    
    if (file) {
      if (file.type !== 'application/pdf') {
        setError('Please upload a PDF file.');
      } else if (file.size > 10 * 1024 * 1024) {
        setError('File size must be less than 10MB.');
      }
    }
  };

  const handleSubmit = async () => {
    setError('');
    
    const now = Date.now();
    if (now - lastSubmission < 20000) {
      setError('Please wait 20 seconds before submitting again.');
      return;
    }
    
    if (!resume || !jobDescription.trim()) {
      setError('Please upload a resume and enter a job description.');
      return;
    }
    
    if (!isReady) {
      setError('PDF processor is still loading. Please wait a moment.');
      return;
    }
    
    setLoading(true);
    setLastSubmission(now);
    
    try {
      const resumeText = await extractTextFromPDF(resume);
      const analysisResult = await analyzeResume(resumeText, jobDescription);
      setResult(analysisResult);
    } catch (err) {
      console.error('Error:', err);
      const message = err instanceof Error ? err.message : 'An error occurred.';
      if (message.includes('429')) {
        setError('API limit reached. Please try again later.');
      } else {
        setError(message);
      }
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="min-h-screen pt-12">
   
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-zinc-50 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 dark:border-gray-700 overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4">
                <h2 className="text-xl font-bold text-white">Upload & Analyze</h2>
                <p className="text-emerald-100 text-sm">Upload your resume and job description</p>
              </div>
              
              <div className="p-6">
                <div className="space-y-6">
                  <FileUpload
                    resume={resume}
                    onFileChange={handleFileChange}
                    error={error}
                  />
                  
                  <JobDescriptionInput
                    value={jobDescription}
                    onChange={(e: any) => setJobDescription(e.target.value)}
                  />
                  
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl"
                    >
                      <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-red-800 dark:text-red-200">Error</p>
                        <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
                      </div>
                    </motion.div>
                  )}
                  
                  <button
                    onClick={handleSubmit}
                    disabled={loading || !isReady || Date.now() - lastSubmission < 20000}
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-4 px-6 rounded-xl disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:shadow-none"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Analyze Resume
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <AnalysisResults result={result} loading={loading} />
            
            {!result && !loading && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-zinc-50 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 dark:border-gray-700 p-8 text-center"
              >
                <div className="w-16 h-16 bg-slate-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-slate-400 dark:text-gray-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Ready to Analyze</h3>
                <p className="text-slate-600 dark:text-gray-300">
                  Upload your resume and job description to get started with AI-powered analysis
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
