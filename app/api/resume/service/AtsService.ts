
interface IndustryKeywords {
  [key: string]: string[];
}

interface IndustryIndicators {
  [key: string]: string[];
}


export function calculateATSScore(resumeText: string, jobDescription: string): number {
  const resume = resumeText.toLowerCase();
  const job = jobDescription.toLowerCase();
  
  // Extract key terms from job description
  const jobKeywords = extractKeywords(job);
  const resumeKeywords = extractKeywords(resume);
  
  // Calculate match percentage
  const matchedKeywords = jobKeywords.filter(keyword => 
    resumeKeywords.includes(keyword)
  );
  
  const keywordMatchScore = (matchedKeywords.length / Math.max(jobKeywords.length, 1)) * 50;
  
  // Experience level scoring with penalties
  const experienceScore = calculateExperienceScore(resume, job);
  
  // Structure and format score
  const structureScore = calculateStructureScore(resume);
  
  // Specific role match (e.g., MERN stack for MERN developer)
  const roleSpecificScore = calculateRoleSpecificScore(resume, job);
  
  // Apply overqualification penalty
  const overqualificationPenalty = calculateOverqualificationPenalty(resume, job);
  
  const finalScore = keywordMatchScore + experienceScore + structureScore + roleSpecificScore - overqualificationPenalty;
  
  // Ensure score is between 0-100
  return Math.max(0, Math.min(100, Math.round(finalScore)));
}

/**
 * Calculate role-specific matching score
 */
function calculateRoleSpecificScore(resume: string, job: string): number {
  let score = 0;
  
  // Check for specific stack mentions
  if (job.includes('mern') && resume.includes('mern')) score += 10;
  if (job.includes('mean') && resume.includes('mean')) score += 10;
  if (job.includes('full stack') && resume.includes('full stack')) score += 10;
  
  // Check for specific technology combinations
  if (job.includes('react') && job.includes('node') && 
      resume.includes('react') && resume.includes('node')) {
    score += 10;
  }
  
  return Math.min(20, score);
}

/**
 * Calculate overqualification penalty
 */
function calculateOverqualificationPenalty(resume: string, job: string): number {
    const resumeYears = extractYearsOfExperience(resume);
    const jobSeniority = detectSeniorityLevel(job);
    const resumeSeniority = detectSeniorityLevel(resume);
    
    let penalty = 0;
    
    if (resumeSeniority === 3 && jobSeniority <= 1) penalty += 15; 
    if (resumeSeniority === 2 && jobSeniority === 0) penalty += 10; 
    if (resumeYears >= 5 && (job.includes('intern') || job.includes('junior'))) penalty += 10; 
    if (resumeYears >= 3 && job.includes('intern')) penalty += 8; 
    if (resume.includes('senior') && (job.includes('junior') || job.includes('intern'))) penalty += 7; 
    
    return Math.min(20, penalty);
  }

/**
 * Extract years of experience from resume text
 */
function extractYearsOfExperience(resume: string): number {
  const yearPatterns = [
    /(\d+)\s*(?:years?|yrs?)\s*(?:of\s*)?experience/gi,
    /experience.*?(\d+)\s*(?:years?|yrs?)/gi,
    /(\d+)\s*(?:years?|yrs?)\s*(?:in\s*)?(?:the\s*)?(?:field|industry|role)/gi
  ];
  
  for (const pattern of yearPatterns) {
    const match = resume.match(pattern);
    if (match) {
      const years = parseInt(match[1], 10);
      if (!isNaN(years) && years >= 0 && years <= 50) {
        return years;
      }
    }
  }
  
  return 0;
}

/**
 * Smart keyword extraction using industry detection and dynamic extraction
 */
function extractKeywords(text: string): string[] {
  const lowerText = text.toLowerCase();
  
  const detectedIndustry = detectIndustry(lowerText);
  
  const relevantKeywords = getIndustryKeywords(detectedIndustry);
  const extractedKeywords = extractFromText(lowerText);
  
  const allKeywords = [...new Set([...relevantKeywords, ...extractedKeywords])];
  
  return allKeywords.filter(keyword => lowerText.includes(keyword));
}

/**
 * Detect industry from text content
 */
function detectIndustry(text: string): string {
  const industryIndicators: IndustryIndicators = {
    'tech': ['software', 'developer', 'engineer', 'programming', 'coding', 'technical'],
    'design': ['designer', 'ui/ux', 'creative', 'visual', 'graphics', 'brand'],
    'marketing': ['marketing', 'social media', 'seo', 'campaigns', 'advertising'],
    'finance': ['financial', 'accounting', 'banking', 'investment', 'audit'],
    'healthcare': ['medical', 'healthcare', 'clinical', 'patient', 'hospital'],
    'sales': ['sales', 'business development', 'account', 'client', 'revenue'],
    'hr': ['human resources', 'recruitment', 'talent', 'hiring', 'people'],
    'education': ['education', 'teaching', 'training', 'curriculum', 'learning'],
    'legal': ['legal', 'attorney', 'lawyer', 'compliance', 'regulatory'],
    'operations': ['operations', 'logistics', 'supply chain', 'process', 'management']
  };
  
  for (const [industry, indicators] of Object.entries(industryIndicators)) {
    if (indicators.some(indicator => text.includes(indicator))) {
      return industry;
    }
  }
  
  return 'general';
}

/**
 * Get curated keywords for specific industries
 */
function getIndustryKeywords(industry: string): string[] {
  const keywordSets: IndustryKeywords = {
    'tech': [
      'javascript', 'python', 'java', 'react', 'node.js', 'sql', 'git', 'aws', 'docker',
      'api', 'database', 'frontend', 'backend', 'fullstack', 'agile', 'scrum'
    ],
    'design': [
      'figma', 'sketch', 'photoshop', 'illustrator', 'ui/ux', 'prototyping', 'wireframing',
      'user research', 'design thinking', 'accessibility', 'responsive design'
    ],
    'marketing': [
      'seo', 'sem', 'ppc', 'google ads', 'facebook ads', 'email marketing', 'crm',
      'analytics', 'conversion optimization', 'content marketing', 'social media'
    ],
    'finance': [
      'financial analysis', 'excel', 'quickbooks', 'sap', 'accounting', 'budgeting',
      'forecasting', 'audit', 'compliance', 'financial modeling', 'risk management'
    ],
    'healthcare': [
      'patient care', 'medical records', 'hipaa', 'clinical', 'ehr', 'emr',
      'medical coding', 'healthcare', 'nursing', 'telemedicine'
    ],
    'sales': [
      'crm', 'salesforce', 'lead generation', 'pipeline management', 'negotiation',
      'account management', 'business development', 'revenue growth'
    ],
    'general': [
      'leadership', 'communication', 'project management', 'problem solving',
      'team work', 'time management', 'customer service', 'microsoft office'
    ]
  };
  
  return keywordSets[industry] || keywordSets['general'];
}

/**
 * Extract important terms directly from the text
 */
function extractFromText(text: string): string[] {
    const patterns = [
      /\b[A-Z][a-z]+\.[a-z]+\b/g,
      /\b[A-Z]{2,}\b/g,
      /\b\w+(?:\s+\w+)*(?:\s+(?:experience|skills?|knowledge|proficiency|motivated|enthusiastic))\b/gi,
    ];
    
    const synonymMap: Record<string, string[]> = {
      'restful apis': ['rest apis', 'api', 'restful'],
      'problem solving': ['problem-solving', 'troubleshooting', 'debugging'],
      'eagerness to learn': ['motivated', 'enthusiastic', 'quick learner'],
    };
    
    const extracted: string[] = [];
    patterns.forEach(pattern => {
      const matches = text.match(pattern) || [];
      extracted.push(...matches.map(match => match.toLowerCase()));
    });
    
    // Add synonyms
    Object.entries(synonymMap).forEach(([keyword, synonyms]) => {
      if (synonyms.some(syn => text.includes(syn))) {
        extracted.push(keyword);
      }
    });
    
    return [...new Set(extracted)];
  }

/**
 * Calculate experience score based on resume and job requirements
 */
function calculateExperienceScore(resume: string, job: string): number {
    const experienceIndicators = ['years', 'experience', 'worked', 'developed', 'built', 'created'];
    const hasExperience = experienceIndicators.some(indicator => resume.includes(indicator));
    const hasRelevantSkills = ['mern', 'react', 'node.js', 'express.js'].some(skill => resume.includes(skill));
    
    const jobSeniority = detectSeniorityLevel(job);
    const resumeSeniority = detectSeniorityLevel(resume);
    
    if (jobSeniority === resumeSeniority) return 25;
    if (Math.abs(jobSeniority - resumeSeniority) === 1) return 15;
    if (hasRelevantSkills && resumeSeniority > jobSeniority) return 15;
    return hasExperience ? 10 : 5;
  }

function detectSeniorityLevel(text: string): number {
  if (text.includes('senior') || text.includes('lead') || text.includes('architect')) return 3;
  if (text.includes('mid') || text.includes('intermediate') || text.includes('2-5 years')) return 2;
  if (text.includes('junior') || text.includes('entry') || text.includes('0-2 years')) return 1;
  return 2; 
}


function calculateStructureScore(resume: string): number {
  let score = 0;
  
  const sections = ['experience', 'education', 'skills', 'projects'];
  sections.forEach(section => {
    if (resume.includes(section)) score += 2.5;
  });
  
  if (resume.includes('@') || resume.includes('email')) score += 2.5;
  if (resume.includes('phone') || /\d{3}-\d{3}-\d{4}/.test(resume)) score += 2.5;
  
  return Math.min(15, score);
}

export function getScoreInterpretation(score: number): string {
  if (score >= 90) {
    return "🎯 **Exceptional Match** - Your resume is highly optimized for this position. Strong keyword alignment and relevant experience.";
  } else if (score >= 80) {
    return "✅ **Good Match** - Your resume shows good compatibility with the job requirements. Minor optimizations could improve your chances.";
  } else if (score >= 70) {
    return "⚠️ **Fair Match** - Your resume has moderate compatibility. Consider adding more relevant keywords and experience details.";
  } else if (score >= 60) {
    return "❌ **Poor Match** - Your resume needs significant improvements to better align with the job requirements.";
  } else {
    return "🚫 **Very Poor Match** - Your resume requires major revisions to be considered for this position.";
  }
}

export function getDetailedAnalysis(resumeText: string, jobDescription: string): {
  score: number;
  keywordMatch: number;
  experienceMatch: number;
  structureScore: number;
  roleSpecificScore: number;
  overqualificationPenalty: number;
} {
  const resume = resumeText.toLowerCase();
  const job = jobDescription.toLowerCase();
  
  const jobKeywords = extractKeywords(job);
  const resumeKeywords = extractKeywords(resume);
  const matchedKeywords = jobKeywords.filter(keyword => resumeKeywords.includes(keyword));
  const keywordMatch = (matchedKeywords.length / Math.max(jobKeywords.length, 1)) * 50;
  
  const experienceMatch = calculateExperienceScore(resume, job);
  const structureScore = calculateStructureScore(resume);
  const roleSpecificScore = calculateRoleSpecificScore(resume, job);
  const overqualificationPenalty = calculateOverqualificationPenalty(resume, job);
  
  const score = Math.max(0, Math.min(100, Math.round(
    keywordMatch + experienceMatch + structureScore + roleSpecificScore - overqualificationPenalty
  )));
  
  return {
    score,
    keywordMatch: Math.round(keywordMatch),
    experienceMatch: Math.round(experienceMatch),
    structureScore: Math.round(structureScore),
    roleSpecificScore: Math.round(roleSpecificScore),
    overqualificationPenalty: Math.round(overqualificationPenalty)
  };
}