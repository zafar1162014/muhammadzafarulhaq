'use client';

import { Github, Linkedin, Mail, ChevronDown, Download } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HeroSection() {
	return (
		<section
			id="home"
			className="relative min-h-screen flex items-center overflow-hidden pt-20">
			<div className="absolute inset-0 -z-10">
				<div className="absolute left-[-8rem] top-16 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
				<div className="absolute right-[-6rem] bottom-20 h-80 w-80 rounded-full bg-accent/35 blur-3xl" />
			</div>

			<div className="section-shell py-20">
				<div className="max-w-5xl float-in">
					<p className="text-primary mb-4 text-sm md:text-base tracking-[0.18em] uppercase">
						Machine Learning Portfolio
					</p>
					<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-[0.95] mb-6">
						Muhammad
						<br />
						Zafar Ul Haq
					</h1>
					<h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6 max-w-3xl">
						Building useful AI systems from clean data, reliable models, and
						production-focused engineering.
					</h2>
					<p className="text-muted-foreground max-w-2xl mb-10 text-base sm:text-lg leading-relaxed">
						I design and deliver ML projects in computer vision, NLP, and
						predictive analytics, with practical experience in model training,
						optimization, and deployment.
					</p>

					<div className="flex flex-wrap gap-4 mb-12">
						<Button
							asChild
							size="lg"
							className="gap-2 rounded-full px-7">
							<Link href="#projects">Explore Projects</Link>
						</Button>
						<Button
							asChild
							variant="outline"
							size="lg"
							className="gap-2 rounded-full px-7 bg-transparent">
							<Link href="#contact">Hire Me</Link>
						</Button>
						<Button
							asChild
							variant="secondary"
							size="lg"
							className="gap-2 rounded-full px-7">
							<a
								href="https://drive.google.com/file/d/1B3DUDZVwgPF1XVpa8vVku_JOjfJQzqz3/view?usp=sharing"
								target="_blank"
								rel="noopener noreferrer">
								<Download className="h-4 w-4" />
								Download Resume
							</a>
						</Button>
					</div>

					<div className="flex items-center gap-4 sm:gap-6">
						<Link
							href="https://github.com/zafar1162014"
							target="_blank"
							rel="noopener noreferrer"
							className="w-11 h-11 rounded-full glass-surface flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
							<Github className="h-5 w-5" />
						</Link>
						<Link
							href="https://linkedin.com/in/mzafarulhaq"
							target="_blank"
							rel="noopener noreferrer"
							className="w-11 h-11 rounded-full glass-surface flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
							<Linkedin className="h-5 w-5" />
						</Link>
						<Link
							href="mailto:zafarulhaq1162014@gmail.com"
							className="w-11 h-11 rounded-full glass-surface flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
							<Mail className="h-5 w-5" />
						</Link>
					</div>
				</div>
			</div>

			<Link
				href="#about"
				className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce">
				<ChevronDown className="h-8 w-8" />
			</Link>
		</section>
	);
}
