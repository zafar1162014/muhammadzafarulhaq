import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Muhammad Zafar Ul Haq | AI Engineer Portfolio",
  description:
    "Aspiring AI Engineer | ML & Deep Learning Enthusiast - Personal portfolio showcasing AI/ML projects, skills, and experience in Machine Learning, Deep Learning, NLP, and Computer Vision.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Computer Vision",
    "TensorFlow",
    "PyTorch",
    "Python",
    "Data Science",
    "Neural Networks",
  ],
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
