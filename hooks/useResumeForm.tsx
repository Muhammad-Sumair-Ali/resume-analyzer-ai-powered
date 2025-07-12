import React, { useState, useEffect, ChangeEvent, FC } from 'react';
import { Upload, Briefcase, Loader2, CheckCircle, LucideIcon } from 'lucide-react';
 

interface PDFTextItem {
  str: string;
  [key: string]: unknown;
}

interface PDFTextContent {
  items: PDFTextItem[];
}

interface PDFPage {
  getTextContent: () => Promise<PDFTextContent>;
}

interface PDFDocument {
  getPage: (pageNumber: number) => Promise<PDFPage>;
}

interface PDFJSLib {
  GlobalWorkerOptions: {
    workerSrc: string;
  };
  getDocument: (data: ArrayBuffer) => { promise: Promise<PDFDocument> };
}

export const usePDFExtraction = () => {
  const [pdfjsLib, setPdfjsLib] = useState<PDFJSLib | null>(null);

  useEffect(() => {
    import('pdfjs-dist').then((lib) => {
      setPdfjsLib(lib as PDFJSLib);
      lib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';
    });
  }, []);

  const extractTextFromPDF = async (file: File): Promise<string> => {
    if (!pdfjsLib) throw new Error('PDF library not loaded');

    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
      const page = await pdf.getPage(1);

      const textContent = await page.getTextContent();
      let text = '';

      if (textContent.items.length > 0) {
        text = textContent.items
          .map((item) => item.str)
          .join(' ')
          .replace(/\s+/g, ' ')
          .trim();
      } else {
        throw new Error('No text found in PDF');
      }

      if (!text || text.length < 50) {
        throw new Error('No meaningful text found. Please use a text-based PDF.');
      }

      return text;
    } catch (err) {
      console.error('PDF error:', err);
      throw new Error(err instanceof Error ? err.message : 'Failed to extract text from PDF');
    }
  };

  return { extractTextFromPDF, isReady: !!pdfjsLib };
};

// Interface for API response
interface AnalysisResponse {
  result?: string;
  error?: string;
}

// Custom hook for resume analysis state
export const useResumeAnalysis = () => {
  const [resume, setResume] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [lastSubmission, setLastSubmission] = useState<number>(0);

  const analyzeResume = async (resumeText: string, jobDescription: string): Promise<string> => {
    const formData = new FormData();
    formData.append('resumeText', resumeText);
    formData.append('jobDescription', jobDescription.trim());

    const res = await fetch('/api/resume/analyze', {
      method: 'POST',
      body: formData,
    });

    const data: AnalysisResponse = await res.json();

    if (!res.ok) {
      throw new Error(data.error || 'Failed to analyze resume.');
    }

    if (!data.result) {
      throw new Error('No analysis result received.');
    }

    return data.result;
  };

  return {
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
    analyzeResume,
  };
};

// Props for FileUpload component
interface FileUploadProps {
  resume: File | null;
  onFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

// File Upload Component
export const FileUpload: FC<FileUploadProps> = ({ resume, onFileChange, error }) => (
  <div className="space-y-4">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
        <Upload className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Upload Resume</h3>
    </div>

    <input
      type="file"
      accept="application/pdf"
      onChange={onFileChange}
      className="hidden"
      id="resume-upload"
    />

    <label
      htmlFor="resume-upload"
      className={`
        flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-300
        ${resume
          ? 'border-emerald-300 dark:border-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 hover:bg-emerald-100 dark:hover:bg-emerald-900/30'
          : 'border-slate-300 dark:border-gray-600 bg-slate-50 dark:bg-gray-800/50 hover:bg-slate-100 dark:hover:bg-gray-700/50'
        }
      `}
    >
      <div className="flex flex-col items-center justify-center pt-5 pb-6">
        {resume ? (
          <>
            <CheckCircle className="w-8 h-8 text-emerald-500 dark:text-emerald-400 mb-2" />
            <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">{resume.name}</p>
            <p className="text-xs text-emerald-600 dark:text-emerald-400">
              {Math.round(resume.size / 1024)}KB • Click to change
            </p>
          </>
        ) : (
          <>
            <Upload className="w-8 h-8 text-slate-400 dark:text-gray-500 mb-2" />
            <p className="text-sm font-medium text-slate-700 dark:text-gray-300">Drop your resume here</p>
            <p className="text-xs text-slate-500 dark:text-gray-400">PDF files only (max 10MB)</p>
          </>
        )}
      </div>
    </label>
    {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
  </div>
);

// Props for JobDescriptionInput component
interface JobDescriptionInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

// Job Description Component
export const JobDescriptionInput: FC<JobDescriptionInputProps> = ({ value, onChange }) => (
  <div className="space-y-4">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-8 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
        <Briefcase className="w-4 h-4 text-teal-600 dark:text-teal-400" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Job Description</h3>
    </div>

    <textarea
      value={value}
      onChange={onChange}
      rows={8}
      className="w-full border border-slate-200 dark:border-gray-600 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-400 bg-white/50 dark:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-all duration-300 resize-none"
      placeholder="Paste the complete job description here. Include requirements, responsibilities, and qualifications..."
    />
    <div className="flex justify-between items-center text-sm text-slate-500 dark:text-gray-400">
      <span>Be detailed for better analysis</span>
      <span>{value.length} characters</span>
    </div>
  </div>
);

// Props for AnalysisResults component
interface AnalysisResultsProps {
  result: string;
  loading: boolean;
}

// Results Component
export const AnalysisResults: FC<AnalysisResultsProps> = ({ result, loading }) => {
  if (!result && !loading) return null;

  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 dark:border-gray-700 overflow-hidden h-fit">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
            {loading ? (
              <Loader2 className="w-5 h-5 text-white animate-spin" />
            ) : (
              <CheckCircle className="w-5 h-5 text-white" />
            )}
          </div>
          <h2 className="text-xl font-bold text-white">
            {loading ? 'Analyzing Resume...' : 'Analysis Results'}
          </h2>
        </div>
        <p className="text-emerald-100 mt-1 text-sm">
          {loading ? 'This may take a few moments...' : 'Your personalized resume analysis'}
        </p>
      </div>

      <div className="p-6">
        {loading ? (
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-4 bg-slate-200 dark:bg-gray-600 rounded w-full mb-2"></div>
                <div className="h-4 bg-slate-200 dark:bg-gray-600 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <div className="whitespace-pre-wrap text-slate-700 dark:text-gray-300 leading-relaxed text-sm">
              {result}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Props for StatsCard component
interface StatsCardProps {
  icon: LucideIcon;
  title: string;
  value: string | number;
  color: string;
}

// Stats Component
export const StatsCard: FC<StatsCardProps> = ({ icon: Icon, title, value, color }) => (
  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-slate-200 dark:border-gray-700">
    <div className="flex items-center gap-3">
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color}`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <p className="text-sm font-medium text-slate-600 dark:text-gray-300">{title}</p>
        <p className="text-lg font-bold text-slate-900 dark:text-white">{value}</p>
      </div>
    </div>
  </div>
);