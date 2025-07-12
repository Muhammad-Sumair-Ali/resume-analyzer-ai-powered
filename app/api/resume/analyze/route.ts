import { NextRequest, NextResponse } from "next/server";
import { groq } from "@ai-sdk/groq";
import { generateText } from "ai";

interface GrokError extends Error {
  code?: string;
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const jobDescription = formData.get("jobDescription") as string | null;
    const resumeText = formData.get("resumeText") as string | null;

    if (!jobDescription || !jobDescription.trim()) {
      return NextResponse.json(
        { error: "Job description is required" },
        { status: 400 }
      );
    }

    if (!resumeText || resumeText.trim().length < 50) {
      return NextResponse.json(
        {
          error:
            "Resume text is required and must contain sufficient content (at least 50 characters).",
        },
        { status: 400 }
      );
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Groq API key not configured" },
        { status: 500 }
      );
    }

    const result = await generateText({
      model: groq("llama-3.3-70b-versatile"),
      messages: [
        {
          role: "system",
          content:
            "You are a professional resume reviewer and ATS (Applicant Tracking System) expert. Analyze resumes thoroughly and provide actionable feedback.",
        },
        {
          role: "user",
          content: `Please analyze this resume against the job description and provide a comprehensive assessment:

**RESUME CONTENT:**
${resumeText.substring(0, 3000)} ${
            resumeText.length > 3000 ? "...(truncated)" : ""
          }

**JOB DESCRIPTION:**
${jobDescription.substring(0, 2000)} ${
            jobDescription.length > 2000 ? "...(truncated)" : ""
          }

**Please provide analysis in the following format:**

## 🎯 ATS COMPATIBILITY SCORE
Score: [X/100]

## ✅ MATCHING SKILLS & KEYWORDS
- [List matching skills and keywords found in both resume and job description]

## ❌ MISSING KEYWORDS
- [List important keywords from job description that are missing from resume]

## 💡 RECOMMENDATIONS
1. [Specific actionable suggestions]
2. [More suggestions]

## 📊 OVERALL ASSESSMENT
[Brief summary of strengths and areas for improvement]

Please be specific and actionable in your recommendations.`,
        },
      ],
      maxTokens: 1000,
      temperature: 0.3,
    });

    if (!result.text) {
      return NextResponse.json(
        { error: "No response from Groq service" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      result: result.text,
      success: true,
    });
  } catch (error: unknown) {
    const err = error as GrokError;

    if (err.message.includes("429")) {
      return NextResponse.json(
        {
          error:
            "API quota exceeded. Please try again later or check your Groq plan.",
        },
        { status: 429 }
      );
    }

    if (err.code === "invalid_api_key") {
      return NextResponse.json(
        { error: "Invalid Groq API key." },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        error: "Internal server error. Please try again.",
        details:
          process.env.NODE_ENV === "development" ? err.message : undefined,
      },
      { status: 500 }
    );
  }
}
