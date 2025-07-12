"use client";

import ResumeUploadForm from '@/components/forms/ResumeUpload'
import React from 'react'

const AnalyzeResume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-zinc-900 dark:via-gray-800 dark:to-zinc-900 pt-16">
      <ResumeUploadForm/>
    </div>
  )
}

export default AnalyzeResume
