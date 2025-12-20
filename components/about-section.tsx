"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const skills = {
  "Product Management": [
    { name: "Roadmap Planning", level: 90 },
    { name: "PRDs & Documentation", level: 85 },
    { name: "User Research & Market Analysis", level: 80 },
    { name: "Stakeholder Communication", level: 90 },
  ],
  "Project Management": [
    { name: "Agile / Scrum", level: 85 },
    { name: "Sprint Planning & Task Delegation", level: 85 },
    { name: "Risk Assessment", level: 75 },
    { name: "Event Management", level: 90 },
  ],
  Programming: [
    { name: "Python", level: 90 },
    { name: "JavaScript / Node.js", level: 85 },
    { name: "C++ / C# / .NET", level: 85 },
    { name: "React / Express.js", level: 80 },
  ],
  "AI & Data": [
    { name: "Machine Learning / NLP", level: 85 },
    { name: "TensorFlow / PyTorch", level: 75 },
    { name: "Data Analysis (Pandas/NumPy)", level: 90 },
    { name: "Scikit-Learn", level: 85 },
  ],
}

const technologies = [
  "Python",
  "JavaScript",
  "React",
  "Node.js",
  "TensorFlow",
  "Scikit-Learn",
  "NLP",
  "REST APIs",
  "C++",
  "C#",
  ".NET",
  "MongoDB",
  "Git",
  "Flex/Bison",
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
              I am a passionate Project Management aspirant with a strong foundation in software engineering and
              hands-on experience in AI and ML research. I specialize in leading teams, managing projects end-to-end,
              and turning ideas into actionable solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I have practical experience in backend development using Node.js and implementing data-driven ML projects.
              Completed all 7 courses of the Google Project Management Certificate. Beyond technical expertise, I have
              successfully led student organizations, IEEE chapters, and community programs, developing skills in
              requirement gathering, workflow planning, documentation, event coordination, teaching, and team
              management.
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
              {technologies.slice(0, 14).map((tech) => (
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
