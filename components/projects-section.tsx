"use client"

import { useState } from "react"
import { Github, Folder, FileText, BookOpen } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const researchPublications = [
  {
    title: "Redefining Object Detection: Harnessing Advanced Techniques",
    journal: "ResearchGate",
    year: "2024",
    description:
      "Comprehensive research on harnessing the full potential of YOLO for real-time object detection, exploring advanced optimization techniques and deployment strategies.",
    link: "https://www.researchgate.net/publication/390115067_Redefining_Object_Detection_Harnessing_the_Full_Potential_of_YOLO",
  },
]

const otherProjects = [
  // AI Internship Projects (Large)
  {
    title: "Movie Recommendation System",
    description:
      "Collaborative filtering-based recommendation engine using matrix factorization and neural embeddings for personalized movie suggestions.",
    technologies: ["Python", "TensorFlow", "Pandas", "Scikit-Learn"],
    github: "https://github.com/zafar1162014",
    size: "Large",
  },
  {
    title: "Resume Parser (NLP)",
    description:
      "Intelligent document parser using NER and regex patterns to extract structured information from resumes including skills, experience, and education.",
    technologies: ["Python", "spaCy", "NLTK", "PDF2Text"],
    github: "https://github.com/zafar1162014",
    size: "Large",
  },
  {
    title: "Traffic Sign Classifier (CNN)",
    description:
      "Deep learning model using convolutional neural networks for real-time traffic sign recognition achieving 98% accuracy on German Traffic Sign dataset.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
    github: "https://github.com/zafar1162014",
    size: "Large",
  },
  {
    title: "Chatbot (DistilBERT/GPT-2)",
    description:
      "Conversational AI chatbot leveraging transformer architectures for context-aware dialogue generation and intent classification.",
    technologies: ["Python", "Transformers", "DistilBERT", "GPT-2"],
    github: "https://github.com/zafar1162014",
    size: "Large",
  },
  {
    title: "Twitter Sentiment Analysis",
    description:
      "Social media sentiment classifier using NLP techniques to analyze tweet sentiments with real-time streaming capabilities.",
    technologies: ["Python", "NLTK", "TextBlob", "Tweepy"],
    github: "https://github.com/zafar1162014",
    size: "Large",
  },
  // Core Projects
  {
    title: "Roman Urdu Compiler",
    description:
      "Custom compiler supporting Roman Urdu commands (AAGHAAZ, AGAR, WARNA, DIKHAO, LOOP) with lexical and syntax analysis using Flex & Bison.",
    technologies: ["C", "Flex", "Bison", "Compiler Design"],
    github: "https://github.com/zafar1162014",
    size: "Large",
  },
  {
    title: "YOLO Object Detection",
    description: "Real-time image and video object recognition system built with modern deep learning frameworks.",
    technologies: ["Python", "PyTorch", "OpenCV", "YOLO"],
    github: "https://github.com/zafar1162014",
    size: "Large",
  },
  {
    title: "Credit Card Fraud Detection",
    description:
      "ML models using logistic regression and ensemble methods with data imbalance handling and performance evaluation.",
    technologies: ["Python", "Scikit-Learn", "XGBoost", "Pandas"],
    github: "https://github.com/zafar1162014",
    size: "Large",
  },
  {
    title: "PakBus Ticketing System",
    description: "Full-featured bus ticketing management with seat booking, authentication, and transaction handling.",
    technologies: ["C#", ".NET", "SQL Server", "WinForms"],
    github: "https://github.com/zafar1162014",
    size: "Large",
  },
  {
    title: "Bookstore API",
    description: "RESTful CRUD API with JWT authentication and MongoDB integration for bookstore management.",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/zafar1162014",
    size: "Large",
  },
  // Small Projects
  {
    title: "Portfolio Website",
    description: "Modern portfolio website for client showcasing projects with animations and responsive design.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    github: "https://github.com/zafar1162014",
    size: "Small",
  },
  {
    title: "Inventory Management App",
    description: "Desktop application for tracking inventory with CRUD operations and reporting features.",
    technologies: ["C#", ".NET", "SQL Server"],
    github: "https://github.com/zafar1162014",
    size: "Small",
  },
  {
    title: "Data Cleaning & Analysis",
    description: "Freelance data processing pipelines for cleaning, transforming, and analyzing client datasets.",
    technologies: ["Python", "Pandas", "NumPy", "Jupyter"],
    github: "https://github.com/zafar1162014",
    size: "Small",
  },
  {
    title: "Mini E-commerce Dashboard",
    description: "Interactive dashboard for tracking sales, inventory, and customer analytics.",
    technologies: ["React", "Chart.js", "Node.js"],
    github: "https://github.com/zafar1162014",
    size: "Small",
  },
  {
    title: "Social Media Analytics",
    description: "Automation scripts for collecting and analyzing social media engagement metrics.",
    technologies: ["Python", "Selenium", "Matplotlib"],
    github: "https://github.com/zafar1162014",
    size: "Small",
  },
  {
    title: "Data Visualization Projects",
    description:
      "Interactive charts and visualizations for Netflix and COVID datasets using modern plotting libraries.",
    technologies: ["Python", "Matplotlib", "Seaborn", "Plotly"],
    github: "https://github.com/zafar1162014",
    size: "Small",
  },
  {
    title: "NumPy & Pandas Modules",
    description: "Educational modules covering array operations, vectorization, broadcasting, and data cleaning.",
    technologies: ["Python", "NumPy", "Pandas", "Jupyter"],
    github: "https://github.com/zafar1162014",
    size: "Small",
  },
  {
    title: "Python Beginner Series",
    description: "Beginner-friendly coding exercises and mini-projects for learning Python fundamentals.",
    technologies: ["Python", "Jupyter", "Git"],
    github: "https://github.com/zafar1162014",
    size: "Small",
  },
]

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? otherProjects : otherProjects.slice(0, 6)

  return (
    <section id="projects" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono mr-2">03.</span>
            Projects
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        {/* Research Publications Section */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Research Publications
          </h3>
          <div className="space-y-4">
            {researchPublications.map((pub) => (
              <div
                key={pub.title}
                className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-2">{pub.title}</h4>
                    <p className="text-primary font-mono text-sm mb-2">
                      {pub.journal} • {pub.year}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{pub.description}</p>
                  </div>
                  <Link
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-mono shrink-0"
                  >
                    <FileText className="h-4 w-4" />
                    View Paper
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects - Now the main projects section */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold text-foreground mb-2">Noteworthy Projects</h3>
          <Link
            href="https://github.com/zafar1162014"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm"
          >
            view the archive
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedProjects.map((project) => (
            <div
              key={project.title}
              className="group bg-card p-6 rounded-lg border border-border hover:border-primary/50 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <Folder className="h-10 w-10 text-primary" />
                <div className="flex gap-3 items-center">
                  <span
                    className={cn(
                      "px-2 py-1 rounded text-xs font-semibold",
                      project.size === "Large" ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground",
                    )}
                  >
                    {project.size}
                  </span>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-muted px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {otherProjects.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-mono text-sm"
            >
              {showAll ? "Show Less" : `Show More (${otherProjects.length - 6} more)`}
            </button>
          </div>
        )}

        <div className="mt-16 text-center">
          <div className="inline-block bg-card border border-border rounded-lg px-6 py-4">
            <p className="text-muted-foreground text-sm">
              Completed many <span className="text-primary font-semibold">small</span> and{" "}
              <span className="text-primary font-semibold">large</span> paid projects for clients
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
