"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const skills = {
  "Machine Learning & AI": [
    { name: "Supervised Learning & Classification", level: 90 },
    { name: "Feature Engineering & Selection", level: 88 },
    { name: "Model Evaluation & Hyperparameter Tuning", level: 85 },
    { name: "Ensemble Methods (XGBoost, Random Forest)", level: 82 },
  ],
  "Deep Learning & Neural Networks": [
    { name: "TensorFlow & Keras", level: 80 },
    { name: "CNNs for Computer Vision", level: 78 },
    { name: "NLP & Text Classification", level: 75 },
    { name: "Transformers (BERT, GPT-2)", level: 72 },
  ],
  "Data Science & Analysis": [
    { name: "Python (Pandas, NumPy, Matplotlib)", level: 95 },
    { name: "Data Preprocessing & Cleaning", level: 92 },
    { name: "Statistical Analysis & Visualization", level: 85 },
    { name: "SQL & Database Management", level: 80 },
  ],
  "ML Tools & Deployment": [
    { name: "Scikit-Learn", level: 90 },
    { name: "Jupyter Notebook & VS Code", level: 88 },
    { name: "Git & Version Control", level: 85 },
    { name: "FastAPI & Model Deployment", level: 75 },
  ],
}

const technologies = [
  "Python",
  "Scikit-Learn",
  "TensorFlow & Keras",
  "PyTorch",
  "Pandas & NumPy",
  "Matplotlib & Seaborn",
  "XGBoost",
  "CNN & RNN",
  "NLP & Transformers",
  "Feature Engineering",
  "Model Optimization",
  "SQL & MongoDB",
]

function SkillBar({ name, level, isVisible }: { name: string; level: number; isVisible: boolean }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-foreground">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full bg-primary rounded-full transition-all duration-1000 ease-out",
            isVisible ? "opacity-100" : "opacity-0",
          )}
          style={{ width: isVisible ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  )
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono mr-2">01.</span>
            About Me
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I am a Machine Learning aspirant specializing in building predictive models and implementing data-driven
              solutions. I have delivered 5+ production-ready AI projects including sentiment analysis, traffic sign
              classification, and resume parsing systems, achieving up to 98% accuracy.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My expertise spans supervised learning, feature engineering, model evaluation, and hyperparameter tuning
              using Scikit-Learn, TensorFlow, and XGBoost. I excel at transforming raw data into clean datasets,
              extracting meaningful features, and optimizing model performance for real-world deployment.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I have hands-on experience with CNNs for computer vision, NLP for text classification, and transformer
              architectures (BERT, GPT-2) for conversational AI. I also worked on object detection research using YOLO,
              published on ResearchGate 2024.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-primary">University of Central Punjab</span>
              {" – "}
              <span className="text-primary font-semibold">100% Merit Scholarship Holder</span> | CGPA: 3.8+/4.00
            </p>
            <p className="text-muted-foreground leading-relaxed">Technologies and skills I work with:</p>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {technologies.map((tech) => (
                <li key={tech} className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-primary">▹</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold text-foreground mb-4">{category}</h3>
                {items.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} isVisible={isVisible} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
