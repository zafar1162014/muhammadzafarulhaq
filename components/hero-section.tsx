'use client';

import {
	Github,
	Linkedin,
	Instagram,
	Facebook,
	Mail,
	ChevronDown,
	Download,
} from 'lucide-react';
import Image from 'next/image';
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
				<div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
					{/* Left: Text Content */}
					<div className="max-w-2xl float-in">
						<h1 className="text-5xl sm:text-6xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[0.95] mb-6">
							Muhammad
							<br />
							Zafar Ul Haq
						</h1>
						<h2 className="text-xl sm:text-2xl md:text-2xl text-muted-foreground mb-6 max-w-3xl">
							Machine Learning Engineer
						</h2>
						<p className="text-muted-foreground max-w-2xl mb-10 text-base sm:text-lg leading-relaxed">
							Machine Learning Engineer with a strong foundation in Computer
							Science and a solid math background. Skilled in Machine Learning,
							Deep Learning, NLP, and Computer Vision. Experienced in designing,
							implementing, and deploying ML/DL models, handling large datasets,
							and delivering client-focused AI solutions. Strong problem-solving
							skills, capable of tackling complex computational challenges and
							creating innovative AI applications.
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
								<Link href="#contact">Let&apos;s Connect</Link>
							</Button>
							<Button
								asChild
								variant="secondary"
								size="lg"
								className="gap-2 rounded-full px-7">
								<a
									href="/resume.pdf"
									download="Muhammad-Zafar-Resume.pdf">
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
								href="https://www.instagram.com/zafarulhaq1162014/"
								target="_blank"
								rel="noopener noreferrer"
								className="w-11 h-11 rounded-full glass-surface flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
								<Instagram className="h-5 w-5" />
							</Link>
							<Link
								href="https://www.facebook.com/zafarulhaq1162014/"
								target="_blank"
								rel="noopener noreferrer"
								className="w-11 h-11 rounded-full glass-surface flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
								<Facebook className="h-5 w-5" />
							</Link>
							<Link
								href="mailto:zafarulhaq1162014@gmail.com"
								className="w-11 h-11 rounded-full glass-surface flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
								<Mail className="h-5 w-5" />
							</Link>
						</div>
					</div>

					{/* Right: Profile Image */}
					<div className="hidden md:flex items-center justify-center float-in">
						<div className="relative w-full max-w-sm">
							<div className="absolute inset-0 -z-10 bg-primary/20 blur-3xl rounded-2xl" />
							<Image
								src="/profile.png"
								alt="Muhammad Zafar Ul Haq"
								width={400}
								height={500}
								className="w-full h-auto rounded-2xl object-cover shadow-2xl"
								priority
							/>
						</div>
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
