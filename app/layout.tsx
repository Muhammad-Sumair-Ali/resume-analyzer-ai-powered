import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import { ThemeProvider } from "../components/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI-Powered Resume Analyzer | Optimize Your CV for Job Success",
  description: "Unlock your career potential with our AI-powered resume analyzer. Get instant, actionable feedback to optimize your CV, stand out to employers, and land your dream job.",
  keywords: [
    "resume analyzer",
    "AI resume analysis",
    "job application tips",
    "resume optimization",
    "CV improvement",
    "job hunting",
    "AI powered resume",
    "resume feedback",
    "career advice",
    "resume builder"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
