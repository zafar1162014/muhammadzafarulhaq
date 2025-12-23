import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Muhammad Zafar Ul Haq | Machine Learning Engineer Portfolio",
  description:
    "Machine Learning Engineer specializing in predictive modeling, deep learning, and data science. Proficient in Python, Scikit-Learn, TensorFlow, feature engineering, and model optimization. Portfolio featuring 15+ ML/AI projects.",
  keywords: [
    "Machine Learning Engineer",
    "Machine Learning",
    "Artificial Intelligence",
    "Data Science",
    "Deep Learning",
    "Python",
    "Scikit-Learn",
    "TensorFlow",
    "Keras",
    "PyTorch",
    "Feature Engineering",
    "Model Optimization",
    "Computer Vision",
    "NLP",
    "Predictive Modeling",
    "Supervised Learning",
    "Neural Networks",
    "CNN",
    "Data Analysis",
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
