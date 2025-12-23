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
    title: "Credit Card Fraud Detection",
    description:
      "Built ML pipeline using logistic regression, random forest, and XGBoost achieving 96% accuracy. Implemented SMOTE for handling class imbalance and performed ROC-AUC analysis.",
    technologies: ["Python", "Scikit-Learn", "XGBoost", "Pandas", "SMOTE"],
    github: "https://github.com/zafar1162014",
    size: "Large",
  },
  {
    title: "Image Classification with CNNs",
    description:
      "Developed convolutional neural network for multi-class image classification achieving 94% validation accuracy. Implemented data augmentation and transfer learning techniques.",
    technologies: ["Python", "TensorFlow", "Keras", "CNN", "OpenCV"],
    github: "https://github.com/zafar1162014",
    size: "Large",
  },
  {
    title: "NLP Chatbot with Transformers",
    description:
      "Built context-aware chatbot using DistilBERT for intent classification and GPT-2 for response generation. Achieved 89% intent recognition accuracy on custom dataset.",
    technologies: ["Python", "Transformers", "DistilBERT", "GPT-2", "NLP"],
    github: "https://github.com/zafar1162014",
    size: "Large",
  },
  {
    title: "Protons Eduverse (Final Year Project)",
    description:
      "Comprehensive educational platform integrating ML-based recommendation system for personalized learning paths. Led full-stack development and ML model integration.",
    technologies: ["React", "Node.js", "Python", "TensorFlow", "MongoDB"],
    github: "https://github.com/zafar1162014",
    size: "Large",
  },
  {
    title: "Movie Recommendation System",
    description:
      "Collaborative filtering engine using matrix factorization and neural embeddings. Achieved 87% recommendation accuracy on MovieLens dataset.",
    technologies: ["Python", "TensorFlow", "Pandas", "Scikit-Learn"],
    github: "https://github.com/zafar1162014",
    size: "Large",
  },
  {
    title: "Resume Parser (NLP)",
    description:
      "Intelligent document parser using spaCy NER and regex patterns to extract structured data. Processed 1000+ resumes with 92% extraction accuracy.",
    technologies: ["Python", "spaCy", "NLTK", "PDF2Text", "NER"],
    github: "https://github.com/zafar1162014",
    size: "Large",
  },
  {
    title: "Traffic Sign Classifier (CNN)",
    description:
      "Deep CNN for real-time traffic sign recognition achieving 98% accuracy on German Traffic Sign Recognition Benchmark (GTSRB) dataset.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN"],
    github: "https://github.com/zafar1162014",
    size: "Large",
  },
  {
    title: "Twitter Sentiment Analysis",
    description:
      "Social media sentiment classifier using LSTM and TextBlob achieving 85% F1-score. Implemented real-time streaming with Tweepy API.",
    technologies: ["Python", "NLTK", "TextBlob", "Tweepy", "LSTM"],
    github: "https://github.com/zafar1162014",
    size: "Large",
  },
  {
    title: "YOLO Object Detection System",
    description:
      "Real-time object detection system using YOLOv8 for multi-object tracking. Achieved 60+ FPS on edge devices with 90% mAP.",
    technologies: ["Python", "PyTorch", "YOLOv8", "OpenCV"],
    github: "https://github.com/zafar1162014",
    size: "Large",
  },
  {
    title: "Roman Urdu Compiler",
    description:
      "Custom compiler supporting Roman Urdu commands with lexical analysis, parsing, and code generation using Flex & Bison.",
    technologies: ["C", "Flex", "Bison", "Compiler Design"],
    github: "https://github.com/zafar1162014",
    size: "Large",
  },
  // Small Projects
  {
    title: "Stock Price Prediction with LSTM",
    description:
      "Time series forecasting using LSTM networks to predict stock prices. Achieved RMSE of 2.3 on historical S&P 500 data.",
    technologies: ["Python", "TensorFlow", "Keras", "LSTM", "Pandas"],
    github: "https://github.com/zafar1162014",
    size: "Small",
  },
  {
    title: "Face Recognition System",
    description:
      "Real-time face detection and recognition using OpenCV and FaceNet embeddings with 95% recognition accuracy.",
    technologies: ["Python", "OpenCV", "TensorFlow", "FaceNet"],
    github: "https://github.com/zafar1162014",
    size: "Small",
  },
  {
    title: "Data Cleaning & Analysis",
    description:
      "Freelance data processing pipelines for cleaning, transforming, and analyzing client datasets using Pandas and NumPy.",
    technologies: ["Python", "Pandas", "NumPy", "Jupyter"],
    github: "https://github.com/zafar1162014",
    size: "Small",
  },
  {
    title: "Data Visualization Projects",
    description:
      "Interactive dashboards for Netflix and COVID datasets using Matplotlib, Seaborn, and Plotly for exploratory data analysis.",
    technologies: ["Python", "Matplotlib", "Seaborn", "Plotly"],
    github: "https://github.com/zafar1162014",
    size: "Small",
  },
  {
    title: "NumPy & Pandas Modules",
    description:
      "Educational modules covering array operations, vectorization, broadcasting, and data manipulation techniques.",
    technologies: ["Python", "NumPy", "Pandas", "Jupyter"],
    github: "https://github.com/zafar1162014",
    size: "Small",
  },
  {
    title: "Customer Churn Prediction",
    description: "ML model using logistic regression and decision trees to predict customer churn with 88% accuracy.",
    technologies: ["Python", "Scikit-Learn", "Pandas"],
    github: "https://github.com/zafar1162014",
    size: "Small",
  },
  {
    title: "Spam Email Classifier",
    description:
      "Text classification model using Naive Bayes and TF-IDF vectorization achieving 93% precision on spam detection.",
    technologies: ["Python", "Scikit-Learn", "NLTK"],
    github: "https://github.com/zafar1162014",
    size: "Small",
  },
  {
    title: "Housing Price Prediction",
    description:
      "Regression model using linear regression and gradient boosting to predict housing prices with R² score of 0.89.",
    technologies: ["Python", "Scikit-Learn", "XGBoost"],
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
