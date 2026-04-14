'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Moon, Sun, FileText, ExternalLink } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
	{ name: 'Home', href: '#home' },
	{ name: 'About', href: '#about' },
	{ name: 'Resume', href: '#resume' },
	{ name: 'Projects', href: '#projects' },
	{ name: 'Contact', href: '#contact' },
];

const RESEARCH_URL =
	'https://www.researchgate.net/publication/390115067_Redefining_Object_Detection_Harnessing_the_Full_Potential_of_YOLO';

const researchPaper = {
	title: 'Redefining Object Detection: Harnessing the Full Potential of YOLO',
	platform: 'ResearchGate',
	year: '2024',
	url: RESEARCH_URL,
};

export function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={cn(
				'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
				scrolled
					? 'bg-background/80 backdrop-blur-xl border-b border-border/80 shadow-lg'
					: 'bg-transparent',
			)}>
			<nav className="container mx-auto px-6 py-4 flex items-center justify-between">
				<Link
					href="#home"
					className="text-xl md:text-2xl font-semibold tracking-tight text-foreground">
					MZH <span className="text-primary">Portfolio</span>
				</Link>

				<div className="hidden md:flex items-center gap-8">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
							{link.name}
						</Link>
					))}

					<a
						href={researchPaper.url}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-full border border-border bg-card/70 hover:border-primary/60 transition-colors">
						<FileText className="h-4 w-4 text-primary" />
						{researchPaper.platform}
						<ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
					</a>

					{mounted && (
						<Button
							variant="ghost"
							size="icon"
							onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
							className="ml-2">
							{theme === 'dark' ? (
								<Sun className="h-5 w-5" />
							) : (
								<Moon className="h-5 w-5" />
							)}
						</Button>
					)}
				</div>

				<div className="md:hidden flex items-center gap-2">
					{mounted && (
						<Button
							variant="ghost"
							size="icon"
							onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
							{theme === 'dark' ? (
								<Sun className="h-5 w-5" />
							) : (
								<Moon className="h-5 w-5" />
							)}
						</Button>
					)}
					<Button
						variant="ghost"
						size="icon"
						onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
					</Button>
				</div>
			</nav>

			{isOpen && (
				<div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/80">
					<div className="container mx-auto px-6 pb-5 flex flex-col gap-4">
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className="text-muted-foreground hover:text-primary transition-colors py-1"
								onClick={() => setIsOpen(false)}>
								{link.name}
							</Link>
						))}
						<a
							href={researchPaper.url}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex w-fit items-center gap-2 text-sm px-3 py-2 rounded-full border border-border bg-card/70"
							onClick={() => setIsOpen(false)}>
							<FileText className="h-4 w-4 text-primary" />
							View Publication ({researchPaper.year})
						</a>
					</div>
				</div>
			)}
		</header>
	);
}
