"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const skills = {
  "AI & Machine Learning": [
    { name: "Python (TensorFlow, Keras, PyTorch)", level: 90 },
    { name: "Scikit-Learn & XGBoost", level: 85 },
    { name: "Data Preprocessing & Feature Engineering", level: 90 },
    { name: "Model Evaluation & Optimization", level: 85 },
  ],
  "Deep Learning": [
    { name: "CNN, RNN, LSTM, Transformers", level: 85 },
    { name: "Computer Vision (YOLO, Object Detection)", level: 85 },
    { name: "NLP (BERT, GPT, Text Classification)", level: 80 },
    { name: "Neural Network Architecture Design", level: 75 },
  ],
  "Programming & Development": [
    { name: "Python & C++", level: 95 },
    { name: "JavaScript / Node.js / React", level: 80 },
    { name: "Git & Version Control", level: 90 },
    { name: "REST APIs & Backend Development", level: 85 },
  ],
  "Data & Cloud": [
    { name: "Pandas, NumPy, Matplotlib", level: 95 },
    { name: "MySQL, MongoDB, Firebase", level: 85 },
    { name: "AWS (S3, EC2 basics)", level: 70 },
    { name: "Jupyter Notebook & VS Code", level: 90 },
  ],
}

const technologies = [
  "Python",
  "TensorFlow",
  "Keras",
  "PyTorch",
  "Scikit-Learn",
  "Pandas & NumPy",
  "NLP",
  "Computer Vision",
  "CNN / RNN / LSTM",
  "YOLO",
  "Node.js",
  "React",
  "Git",
  "AWS",
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
              I am an aspiring AI Engineer with a strong academic foundation in Computer Science. I specialize in
              Machine Learning, Deep Learning, NLP, and Computer Vision. I have hands-on experience designing and
              implementing AI models, handling data pipelines, and delivering intelligent software solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I have practical experience with TensorFlow, Keras, PyTorch, and Scikit-Learn, working on projects ranging
              from object detection systems to NLP chatbots. Strong problem-solving skills enable me to tackle complex
              computational challenges and develop innovative AI applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I have successfully led student organizations, IEEE chapters, and community programs, developing skills in
              leadership, teaching, and team management.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-primary">University of Central Punjab</span>
              {" – "}
              <span className="text-primary font-semibold">100% Merit Scholarship Holder</span>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Here are some technologies and skills I've been working with:
            </p>
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
