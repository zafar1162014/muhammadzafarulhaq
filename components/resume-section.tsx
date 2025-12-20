"use client"

import { useState } from "react"
import { Briefcase, GraduationCap, Award, Users, Download, Trophy, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const tabs = [
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "awards", label: "Awards", icon: Trophy },
  { id: "leadership", label: "Leadership", icon: Users },
  { id: "languages", label: "Languages", icon: Globe },
]

const experience = [
  {
    title: "Teaching Assistant – Object-Oriented Programming",
    company: "University of Central Punjab",
    date: "Oct 2025 – Present",
    description: [
      "Conducted and evaluated OOP lab sessions using C++",
      "Assisted students in understanding programming concepts, debugging, and assignments",
      "Supported grading, feedback, and documentation of lab activities",
    ],
  },
  {
    title: "Student Pedagogy Partner – Learning Innovation Centre",
    company: "University of Central Punjab",
    date: "Sep 2025 – Present",
    description: [
      "Collaborated with faculty to enhance course delivery and coding exercises",
      "Designed hands-on algorithm simulations and practical assignments",
      "Provided structured feedback to improve assessment clarity and student outcomes",
    ],
  },
  {
    title: "Lead – AI & Data Innovation (Remote)",
    company: "PAYO",
    date: "2025 – Present",
    description: [
      "Led AI and data-related projects, prototypes, and automation workflows",
      "Coordinated tasks and documentation for small teams",
    ],
  },
  {
    title: "AI Intern",
    company: "Kangaroo Ventures",
    date: "May 2025 – Jun 2025",
    description: [
      "Delivered five AI projects: Movie Recommendation System, Resume Parser (NLP), Traffic Sign Classifier, Chatbot (DistilBERT/GPT-2), and Twitter Sentiment Analysis",
      "Handled dataset preparation, model training, and evaluation",
      "Technologies: Python, TensorFlow, PyTorch, Scikit-Learn, NLP libraries",
    ],
  },
  {
    title: "Student Pedagogy Partner – Design & Analysis of Algorithms",
    company: "University of Central Punjab",
    date: "Mar 2025 – Jul 2025",
    description: [
      "Created coding challenges linked to theoretical concepts",
      "Reviewed assignments and promoted problem-solving skills",
      "Developed practical exercises for algorithm implementation",
    ],
  },
  {
    title: "Campus Ambassador / Silver Ambassador",
    company: "Devsinc",
    date: "Feb 2025 – Present",
    description: [
      "Promoted technical events and industry awareness on campus",
      "Organized networking events and student engagement activities",
      "Strengthened collaboration between students and tech industry representatives",
    ],
  },
  {
    title: "Home & Online Tutor",
    company: "Self-Employed",
    date: "Aug 2017 – May 2025",
    description: [
      "Provided academic tutoring in Mathematics, Physics, and Computer Science (Grades 7–12, O-Level, Intermediate)",
      "Developed custom learning materials and exercises to improve conceptual understanding",
    ],
  },
  {
    title: "Sales Assistant",
    company: "ENGINE, Peshawar",
    date: "Aug 2021 – Apr 2022",
    description: [
      "Assisted customers and managed product recommendations",
      "Enhanced business operations and customer service",
    ],
  },
]

const education = [
  {
    degree: "BS Computer Science",
    institution: "University of Central Punjab",
    date: "2022 – 2026",
    details: "CGPA: 3.81/4.00",
  },
  {
    degree: "FSc Pre-Engineering",
    institution: "Hadaf College, Peshawar",
    date: "2019 – 2021",
    details: "92%",
  },
  {
    degree: "Matric Science",
    institution: "FCPS Drosh",
    date: "2015 – 2019",
    details: "89%",
  },
]

const certifications = [
  "Google Project Management Certificate (Coursera, 2025) – Foundations, Project Initiation, Project Planning, Project Execution, Agile Project Management, Capstone",
  "AWS Cloud Foundations (AWS Academy)",
  "Python for Data Science, AI Development (IBM)",
  "Node & Express (Coursera)",
  "Version Control (Meta)",
  "MongoDB Bulk API (MongoDB University)",
  "Career Planning: Your Career, Your Life (Macquarie University)",
]

const awards = [
  {
    title: "Best Lead Volunteer & Organizer",
    organization: "UCP FOITCS",
    year: "2025",
  },
  {
    title: "Best Ambassador Award",
    organization: "CodeX IEEE BULC",
    year: "2025",
  },
  {
    title: "OED Supervisor Award – Raahe Baseerat Program",
    organization: "OED Pakistan",
    year: "2024",
  },
  {
    title: "Excellence Award",
    organization: "Hadaf Group of Colleges",
    year: "2021",
  },
  {
    title: "District Talent Award",
    organization: "FCPS Chitral",
    year: "2020",
  },
  {
    title: "Interschool Science & Mathematics Quiz Award",
    organization: "AKESP",
    year: "2018",
  },
  {
    title: "AFAQ Quiz Competition – Third Position",
    organization: "AFAQ",
    year: "2015",
  },
]

const leadership = [
  {
    role: "Chair – IEEE Computer Society UCP Chapter",
    date: "Oct 2024 – Oct 2025",
    description:
      "Managed chapter operations, expanded membership, led workshops, seminars, and industry collaborations for student development",
  },
  {
    role: "Interim Chair – IEEE Computer Society UCP Chapter",
    date: "Jun 2024 – Oct 2024",
    description: "Coordinated events, workshops, and student engagement initiatives before chapter elections",
  },
  {
    role: "Student Member – IEEE & IEEE Computer Society",
    date: "May 2024 – Present",
    description: "Engaged in professional and technical development activities, contributed to chapter establishment",
  },
  {
    role: "Student Member – ACM",
    date: "Jun 2024 – Jun 2025",
    description: "Participated in global computing initiatives and professional learning opportunities",
  },
  {
    role: "Youth Member – Federal Youth Parliament (PK-2 Lower Chitral)",
    date: "Nov 2023 – Feb 2025",
    description: "Represented PK-2 Lower Chitral in youth governance and policy discussions",
  },
  {
    role: "Supervisor – Literacy Department, OED Pakistan",
    date: "Nov 2023 – Present",
    description:
      "Supervised literacy program activities in Dera Afghana, organized teaching schedules, earned 6 hours of community service",
  },
  {
    role: "Human Rights Volunteer – Amnesty International",
    date: "Sep 2023 – Present",
    description: "Conducted awareness campaigns and volunteer activities for human rights",
  },
  {
    role: "Executive Board Member – Character Building Society, UCP",
    date: "May 2023 – Feb 2025",
    description: "Promoted ethics, integrity, and social responsibility through workshops and events",
  },
  {
    role: "Member – Youth General Assembly (YGA Lahore)",
    date: "Nov 2023 – Present",
    description: "Participated in youth leadership projects and community development initiatives",
  },
  {
    role: "Member – Chitral Student Welfare Association, Lahore",
    date: "Nov 2022 – Present",
    description: "Supporting fellow students from Chitral region",
  },
]

const languages = [
  { name: "Khowar", level: "Native", proficiency: 100 },
  { name: "Urdu", level: "Full Professional", proficiency: 95 },
  { name: "English", level: "Professional", proficiency: 85 },
  { name: "Pashto", level: "Professional", proficiency: 80 },
]

export function ResumeSection() {
  const [activeTab, setActiveTab] = useState("experience")

  return (
    <section id="resume" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono mr-2">02.</span>
            Resume
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tab Navigation */}
          <div className="lg:w-48 flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 text-left text-sm font-medium transition-all whitespace-nowrap rounded-lg",
                  activeTab === tab.id
                    ? "bg-primary/10 text-primary border-l-2 border-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary",
                )}
              >
                <tab.icon className="h-4 w-4 shrink-0" />
                {tab.label}
              </button>
            ))}
            <Button variant="outline" className="mt-4 gap-2 bg-transparent" asChild>
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Tab Content */}
          <div className="flex-1 min-w-0">
            {activeTab === "experience" && (
              <div className="space-y-8">
                {experience.map((item, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-border">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-primary font-medium">{item.company}</p>
                    <p className="text-sm text-muted-foreground mb-3">{item.date}</p>
                    <ul className="space-y-2">
                      {item.description.map((desc, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex gap-2">
                          <span className="text-primary shrink-0">▹</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "education" && (
              <div className="space-y-8">
                {education.map((item, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-border">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                    <h3 className="text-lg font-semibold text-foreground">{item.degree}</h3>
                    <p className="text-primary font-medium">{item.institution}</p>
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                    <p className="text-muted-foreground mt-2">{item.details}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "certifications" && (
              <div className="grid sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{cert}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "awards" && (
              <div className="grid sm:grid-cols-2 gap-4">
                {awards.map((award, index) => (
                  <div
                    key={index}
                    className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <Trophy className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-medium text-foreground">{award.title}</h4>
                        <p className="text-xs text-muted-foreground">
                          {award.organization} • {award.year}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "leadership" && (
              <div className="space-y-6">
                {leadership.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
                    <p className="text-sm text-primary mb-2">{item.date}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "languages" && (
              <div className="space-y-6">
                {languages.map((lang, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-foreground font-medium">{lang.name}</span>
                      <span className="text-sm text-muted-foreground">{lang.level}</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${lang.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
