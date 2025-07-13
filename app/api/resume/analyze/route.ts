
import { NextRequest, NextResponse } from "next/server";
import { generateText } from "ai";
import { groq } from "@ai-sdk/groq";
import { calculateATSScore, getScoreInterpretation } from "../service";

interface GrokError extends Error {
  code?: string;
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const jobDescription = formData.get("jobDescription") as string | null;
    const resumeText = formData.get("resumeText") as string | null;

    if (!jobDescription?.trim()) {
      return NextResponse.json(
        { error: "Job description is required" },
        { status: 400 }
      );
    }

    if (!resumeText?.trim() || resumeText.length < 50) {
      return NextResponse.json(
        {
          error: "Resume text is required and must contain sufficient content (at least 50 characters).",
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

    // Calculate ATS score
    const atsScore = calculateATSScore(resumeText, jobDescription);
    
    // Generate analysis using Grok
    const result = await generateText({
      model: groq("llama-3.3-70b-versatile"),
      messages: [
        {
          role: "system",
          content: `You are a professional resume reviewer and ATS expert. Be critical and realistic in your assessment, focusing on keyword matches and relevant experience.

SCORING GUIDELINES:
- 90-100: Exceptional match
- 80-89: Good match
- 70-79: Fair match
- 60-69: Poor match
- Below 60: Very poor match

The calculated ATS score is: ${atsScore}/100`,
        },
        {
          role: "user",
          content: `Analyze this resume against the job description using the ATS score of ${atsScore}/100.

**RESUME CONTENT:**
${resumeText.substring(0, 3000)}${resumeText.length > 3000 ? "...(truncated)" : ""}

**JOB DESCRIPTION:**
${jobDescription.substring(0, 2000)}${jobDescription.length > 2000 ? "...(truncated)" : ""}

**Format:**
## 🎯 ATS COMPATIBILITY SCORE
Score: ${atsScore}/100
${getScoreInterpretation(atsScore)}

## ✅ MATCHING SKILLS & KEYWORDS
[List matching skills and keywords]

## ❌ MISSING KEYWORDS
[List missing keywords from job description]

## 🔍 EXPERIENCE LEVEL ANALYSIS
[Analyze experience level match]

## 💡 RECOMMENDATIONS
[Provide 3-5 specific suggestions]

## 📊 OVERALL ASSESSMENT
[Explain the score]`,
        },
      ],
      maxTokens: 1200,
      temperature: 0.1,
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
      calculatedScore: atsScore,
    });
  } catch (error: unknown) {
    const err = error as GrokError;

    if (err.message.includes("429")) {
      return NextResponse.json(
        { error: "API quota exceeded. Please try again later." },
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
        details: process.env.NODE_ENV === "development" ? err.message : undefined,
      },
      { status: 500 }
    );
  }
}