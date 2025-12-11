"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun, FileText, ExternalLink } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Resume", href: "#resume" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

const RESEARCH_URL =
  "https://www.researchgate.net/publication/390115067_Redefining_Object_Detection_Harnessing_the_Full_Potential_of_YOLO"

const researchPaper = {
  title: "Redefining Object Detection: Harnessing the Full Potential of YOLO",
  platform: "ResearchGate",
  year: "2024",
  description:
    "A comprehensive study on advanced YOLO techniques for real-time object detection with improved accuracy and performance optimization.",
  url: RESEARCH_URL,
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showResearch, setShowResearch] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const researchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (researchRef.current && !researchRef.current.contains(event.target as Node)) {
        setShowResearch(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent",
      )}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="#home" className="text-xl font-bold text-primary">
          MZH
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <div className="relative" ref={researchRef}>
            <button
              onClick={() => setShowResearch(!showResearch)}
              className="text-muted-foreground hover:text-primary transition-colors"
              title="Research Publications"
            >
              <FileText className="h-5 w-5" />
            </button>

            {showResearch && (
              <div className="absolute top-full right-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-xl p-4 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground text-sm leading-tight">{researchPaper.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {researchPaper.platform} • {researchPaper.year}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{researchPaper.description}</p>
                    <a
                      href={researchPaper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-3"
                    >
                      View Publication <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          {mounted && (
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="border border-border rounded-lg p-3 bg-card/50">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground text-sm leading-tight">{researchPaper.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {researchPaper.platform} • {researchPaper.year}
                  </p>
                  <a
                    href={researchPaper.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-2"
                    onClick={() => setIsOpen(false)}
                  >
                    View Publication <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
