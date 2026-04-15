'use client';

import { useState } from 'react';
import {
	Briefcase,
	GraduationCap,
	Award,
	Users,
	Download,
	Trophy,
	Globe,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { withBasePath } from '@/lib/base-path';

const tabs = [
	{ id: 'experience', label: 'Experience', icon: Briefcase },
	{ id: 'education', label: 'Education', icon: GraduationCap },
	{ id: 'certifications', label: 'Certifications', icon: Award },
	{ id: 'awards', label: 'Awards', icon: Trophy },
	{ id: 'leadership', label: 'Leadership', icon: Users },
	{ id: 'languages', label: 'Languages', icon: Globe },
];

const experience = [
	{
		title: 'Data Science Intern',
		company: '10Pearls',
		date: 'Mar 2026 – Present',
		description: [
			'Working on end-to-end data analysis, ML pipeline development, and model optimization for enterprise datasets.',
		],
	},
	{
		title: 'Teaching Assistant – OOP (C++) & PF (Programming Fundamentals)',
		company: 'University of Central Punjab',
		date: 'Oct 2025 – Present',
		description: [
			'Conducting lab sessions, designing assignments, and mentoring students in object-oriented programming and algorithms.',
		],
	},
	{
		title: 'Devsinc (CAP Idol) – Campus Ambassador Program',
		company: 'Devsinc',
		date: 'Feb 2025 – Present',
		description: [
			'Managing recruitment campaigns and engagement initiatives across Pakistan universities.',
			'Platinum (Jan 2026 – Present) · Gold (Nov 2025 – Jan 2026) · Silver (Aug 2025 – Nov 2025)',
		],
	},
	{
		title: 'Lead – AI & Data Innovation (Remote)',
		company: 'PAYO',
		date: '2025 – Mar 2026',
		description: [
			'Led AI/ML strategy, data-driven product initiatives, and infrastructure planning across the organization.',
		],
	},
	{
		title: 'AI Intern',
		company: 'Kangaroo Ventures',
		date: 'May 2025 – Jun 2025',
		description: [
			'Developed NLP, computer vision, and recommendation systems using PyTorch and Transformers.',
		],
	},
	{
		title: 'Student Pedagogy Partner – LIC, DAA & MVC',
		company: 'University of Central Punjab',
		date: 'Mar 2025 – Mar 2026',
		description: [
			'Designed coding exercises, algorithm visualizations, and problem-solving frameworks for core CS courses.',
		],
	},
	{
		title: 'Founder – Chair IEEE Computer Society UCP Chapter',
		company: 'IEEE Computer Society UCP Chapter',
		date: 'Jun 2024 – Oct 2025',
		description: [
			'Led technical workshops, industry collaborations, and 200+ member engagement initiatives.',
		],
	},
];

const education = [
	{
		degree: 'BS Computer Science',
		institution: 'University of Central Punjab',
		date: '2022 – 2026',
		details: 'CGPA: 3.8+/4.00',
	},
	{
		degree: 'FSc Pre-Engineering',
		institution: 'Hadaf College, Peshawar',
		date: '2019 – 2021',
		details: '',
	},
	{
		degree: 'Matric Science',
		institution: 'FCPS Drosh',
		date: '2015 – 2019',
		details: '',
	},
];

const certifications = [
	'Python for Data Science, AI & Development (IBM)',
	'Machine Learning with Python (IBM)',
	'Deep Learning Specialization (Coursera – Andrew Ng)',
	'Neural Networks and Deep Learning (Coursera – Andrew Ng)',
	'AWS Cloud Foundations (AWS Academy)',
	'Google Project Management Professional Certificate (Google)',
	'Foundations of Project Management (Google)',
	'Project Initiation: Starting a Successful Project (Google)',
	'Project Planning: Putting It All Together (Google)',
	'Project Execution: Running the Project (Google)',
	'Agile Project Management (Google)',
	'Capstone: Applying Project Management in the Real World (Google)',
	'Accelerate Your Job Search with AI (Google)',
	'Project Management (Packt)',
	'Node & Express (Coursera)',
	'UI/UX for Beginners (Great Learning)',
	'Version Control (Meta)',
	'MongoDB Bulk API (MongoDB University)',
	'Career Planning: Your Career, Your Life (Macquarie University)',
];

const awards = [
	{
		title: 'Best Lead Volunteer & Organizer',
		organization: 'UCP FOITCS',
		year: '2025',
	},
	{
		title: 'Best Ambassador Award',
		organization: 'CodeX IEEE BULC',
		year: '2025',
	},
	{
		title: 'OED Supervisor Award – Raahe Baseerat Program',
		organization: 'OED Pakistan',
		year: '2024',
	},
	{
		title: 'Excellence Award',
		organization: 'Hadaf Group of Colleges',
		year: '2021',
	},
	{
		title: 'District Talent Award',
		organization: 'FCPS Chitral',
		year: '2020',
	},
	{
		title: 'Interschool Science & Mathematics Quiz Award',
		organization: 'AKESP',
		year: '2018',
	},
	{
		title: 'AFAQ Quiz Competition – Third Position',
		organization: 'AFAQ',
		year: '2015',
	},
];

const leadership = [
	{
		role: 'Chair – IEEE Computer Society UCP Chapter',
		date: 'Oct 2024 – Oct 2025',
		description:
			'Managed chapter operations, expanded membership, led workshops, seminars, and industry collaborations for student development',
	},
	{
		role: 'Interim Chair – IEEE Computer Society UCP Chapter',
		date: 'Jun 2024 – Oct 2024',
		description:
			'Coordinated events, workshops, and student engagement initiatives before chapter elections',
	},
	{
		role: 'Student Member – IEEE & IEEE Computer Society',
		date: 'May 2024 – Present',
		description:
			'Engaged in professional and technical development activities, contributed to chapter establishment',
	},
	{
		role: 'Student Member – ACM',
		date: 'Jun 2024 – Jun 2025',
		description:
			'Participated in global computing initiatives and professional learning opportunities',
	},
	{
		role: 'Youth Member – Federal Youth Parliament (PK-2 Lower Chitral)',
		date: 'Nov 2023 – Feb 2025',
		description:
			'Represented PK-2 Lower Chitral in youth governance and policy discussions',
	},
	{
		role: 'Supervisor – Literacy Department, OED Pakistan',
		date: 'Nov 2023 – Present',
		description:
			'Supervised literacy program activities in Dera Afghana, organized teaching schedules, earned 6 hours of community service',
	},
	{
		role: 'Human Rights Volunteer – Amnesty International',
		date: 'Sep 2023 – Present',
		description:
			'Conducted awareness campaigns and volunteer activities for human rights',
	},
	{
		role: 'Executive Board Member – Character Building Society, UCP',
		date: 'May 2023 – Feb 2025',
		description:
			'Promoted ethics, integrity, and social responsibility through workshops and events',
	},
	{
		role: 'Member – Youth General Assembly (YGA Lahore)',
		date: 'Nov 2023 – Present',
		description:
			'Participated in youth leadership projects and community development initiatives',
	},
	{
		role: 'Member – Chitral Student Welfare Association, Lahore',
		date: 'Nov 2022 – Present',
		description: 'Supporting fellow students from Chitral region',
	},
];

const languages = [
	{ name: 'Khowar', level: 'Native', proficiency: 100 },
	{ name: 'Urdu', level: 'Full Professional', proficiency: 95 },
	{ name: 'English', level: 'Professional', proficiency: 85 },
	{ name: 'Pashto', level: 'Professional', proficiency: 80 },
];

export function ResumeSection() {
	const [activeTab, setActiveTab] = useState('experience');

	return (
		<section
			id="resume"
			className="py-28">
			<div className="section-shell">
				<div className="flex items-center gap-4 mb-12">
					<h2 className="section-title">
						<span className="text-primary font-mono mr-2">02.</span>
						Resume
					</h2>
					<div className="section-divider" />
				</div>

				<div className="flex flex-col lg:flex-row gap-8 glass-surface p-4 md:p-6">
					{/* Tab Navigation */}
					<div className="lg:w-48 flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
						{tabs.map((tab) => (
							<button
								key={tab.id}
								onClick={() => setActiveTab(tab.id)}
								className={cn(
									'flex items-center gap-3 px-4 py-3 text-left text-sm font-medium transition-all whitespace-nowrap rounded-lg',
									activeTab === tab.id
										? 'bg-primary/10 text-primary border-l-2 border-primary'
										: 'text-muted-foreground hover:text-foreground hover:bg-secondary',
								)}>
								<tab.icon className="h-4 w-4 shrink-0" />
								{tab.label}
							</button>
						))}
						<Button
							variant="outline"
							className="mt-4 gap-2 bg-transparent"
							asChild>
							<a
								href={withBasePath('/resume.pdf')}
								download="Muhammad-Zafar-Resume.pdf">
								<Download className="h-4 w-4" />
								Download Resume
							</a>
						</Button>
					</div>

					{/* Tab Content */}
					<div className="flex-1 min-w-0">
						{activeTab === 'experience' && (
							<div className="space-y-8">
								{experience.map((item, index) => (
									<div
										key={index}
										className="relative pl-6 border-l-2 border-border">
										<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
										<h3 className="text-lg font-semibold text-foreground">
											{item.title}
										</h3>
										<p className="text-primary font-medium">{item.company}</p>
										<p className="text-sm text-muted-foreground mb-3">
											{item.date}
										</p>
										<ul className="space-y-2">
											{item.description.map((desc, i) => (
												<li
													key={i}
													className="text-muted-foreground text-sm flex gap-2">
													<span className="text-primary shrink-0">▹</span>
													{desc}
												</li>
											))}
										</ul>
									</div>
								))}
							</div>
						)}

						{activeTab === 'education' && (
							<div className="space-y-8">
								{education.map((item, index) => (
									<div
										key={index}
										className="relative pl-6 border-l-2 border-border">
										<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
										<h3 className="text-lg font-semibold text-foreground">
											{item.degree}
										</h3>
										<p className="text-primary font-medium">
											{item.institution}
										</p>
										<p className="text-sm text-muted-foreground">{item.date}</p>
										<p className="text-muted-foreground mt-2">{item.details}</p>
									</div>
								))}
							</div>
						)}

						{activeTab === 'certifications' && (
							<div className="grid sm:grid-cols-2 gap-4">
								{certifications.map((cert, index) => (
									<div
										key={index}
										className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
										<div className="flex items-start gap-3">
											<Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
											<span className="text-sm text-muted-foreground">
												{cert}
											</span>
										</div>
									</div>
								))}
							</div>
						)}

						{activeTab === 'awards' && (
							<div className="grid sm:grid-cols-2 gap-4">
								{awards.map((award, index) => (
									<div
										key={index}
										className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
										<div className="flex items-start gap-3">
											<Trophy className="h-5 w-5 text-primary shrink-0 mt-0.5" />
											<div>
												<h4 className="text-sm font-medium text-foreground">
													{award.title}
												</h4>
												<p className="text-xs text-muted-foreground">
													{award.organization} • {award.year}
												</p>
											</div>
										</div>
									</div>
								))}
							</div>
						)}

						{activeTab === 'leadership' && (
							<div className="space-y-6">
								{leadership.map((item, index) => (
									<div
										key={index}
										className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
										<h3 className="text-lg font-semibold text-foreground">
											{item.role}
										</h3>
										<p className="text-sm text-primary mb-2">{item.date}</p>
										<p className="text-muted-foreground text-sm">
											{item.description}
										</p>
									</div>
								))}
							</div>
						)}

						{activeTab === 'languages' && (
							<div className="space-y-6">
								{languages.map((lang, index) => (
									<div
										key={index}
										className="space-y-2">
										<div className="flex justify-between">
											<span className="text-foreground font-medium">
												{lang.name}
											</span>
											<span className="text-sm text-muted-foreground">
												{lang.level}
											</span>
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
	);
}
