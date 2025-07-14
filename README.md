# AI-Powered Resume Analyzer

Unlock your career potential with an advanced AI-powered resume analyzer. Instantly upload your resume and job description to receive actionable feedback, ATS compatibility scoring, and personalized recommendations to help you stand out and land your dream job.

---

## 🚀 Features
- **AI Resume Analysis:** Upload your resume and a job description to get a detailed, AI-generated analysis.
- **ATS Compatibility Score:** See how well your resume matches the job using an Applicant Tracking System (ATS) score (0-100).
- **Keyword & Skills Matching:** Identify matching and missing keywords between your resume and the job description.
- **Personalized Recommendations:** Receive specific suggestions to improve your resume for each job.
- **Modern UI/UX:** Responsive, accessible, and visually appealing interface.
- **Contact & About Pages:** Learn about the developer and get in touch easily.

---

## 🛠️ Tech Stack
- **Frontend:** Next.js 15, React 19, TypeScript, Tailwind CSS, Shadcn UI, Framer Motion
- **AI & Analysis:** OpenAI API, Groq API, pdf-parse, Tesseract.js
- **Backend:** Next.js API routes, MongoDB (for contact form)
- **Other:** Radix UI, Lucide Icons, Axios, ESLint, Prettier

---

## 📦 Installation & Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/resume-analyzer-ai-powered.git
   cd resume-analyzer-ai-powered
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Set up environment variables:**
   - Create a `.env.local` file in the root directory.
   - Add your API keys (OpenAI, Groq, MongoDB, etc.) as needed.
4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📝 Usage Guide
- **Landing Page:** Overview of features and quick access to resume analysis.
- **Upload Page (`/upload`):** Upload your resume (PDF) and paste a job description. Get instant analysis and recommendations.
- **About Page (`/about`):** Learn about the developer, tech stack, and project vision.
- **Contact Page (`/contact`):** Send a message directly to the developer.

---

## 🧩 Main Components & Structure
- `app/` — Next.js app directory (pages, layout, API routes)
- `components/` — UI components (Navbar, Footer, forms, sections, etc.)
- `hooks/` — Custom React hooks (resume form logic, PDF extraction)
- `lib/` — Utility functions (resume parsing, helpers)
- `app/api/` — API endpoints:
  - `/resume/analyze` — POST: Analyze resume vs. job description (AI-powered)
  - `/contact` — POST: Send contact form message (saved to MongoDB)
- `app/model/` — Mongoose models (Contact)
- `app/config/` — Database connection config

---

## 📡 API Overview
- **POST `/api/resume/analyze`**
  - **Body:** `resumeText`, `jobDescription`
  - **Returns:** ATS score, matching/missing keywords, recommendations, overall assessment
- **POST `/api/contact`**
  - **Body:** `name`, `email`, `subject`, `message`
  - **Returns:** Success or error message

---

## 👤 About the Developer
- **Name:** Muhammad Sumair
- **Location:** Karachi, Pakistan
- **Skills:** Full Stack Development, AI/ML Integration, UI/UX Design
- **Contact:** muhammadsumair224@gmail.com
- **GitHub:** [Muhammad-Sumair-Ali](https://github.com/Muhammad-Sumair-Ali)
- **LinkedIn:** [muhammad-sumair-b60a91301](https://www.linkedin.com/in/muhammad-sumair-b60a91301)

---

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
