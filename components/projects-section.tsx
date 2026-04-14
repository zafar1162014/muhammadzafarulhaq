'use client';

import {
	BookOpen,
	BriefcaseBusiness,
	FileText,
	FolderKanban,
	Github,
} from 'lucide-react';
import Link from 'next/link';

const finalYearProject = {
	title: 'Protons EduVerse',
	progress: '70% Complete',
	description:
		'AI-powered study abroad platform for Pakistani students that unifies university search, SOP/LOR generation, admission prediction, test prep, and peer community support in one cloud-native product.',
	highlights: [
		'6 independent microservices in a cloud-native architecture',
		'Hybrid data layer using MongoDB Atlas and PostgreSQL',
		'Transformer NLP for SOP/LOR generation',
		'XGBoost models for admission prediction',
		'JWT-based RBAC security framework with complete API/UML planning',
	],
	milestones: [
		'Backend Implementation: April 2026',
		'ML Training & Deployment: July 2026',
	],
};

const researchPublications = [
	{
		title: 'Redefining Object Detection: Harnessing Advanced Techniques',
		journal: 'ResearchGate',
		year: '2024',
		description:
			'Comprehensive research on harnessing the full potential of YOLO for real-time object detection, exploring advanced optimization techniques and deployment strategies.',
		link: 'https://www.researchgate.net/publication/390115067_Redefining_Object_Detection_Harnessing_the_Full_Potential_of_YOLO',
	},
];

const githubRepoGroups = [
	{
		category: 'AI & Machine Learning',
		repos: [
			'Machine-Learning',
			'AI-Internship-KangrooVentures',
			'Credit-Card-Fraud-Detection',
			'Supermarket_Sales_Analysis',
		],
	},
	{
		category: 'Data Science & Visualization',
		repos: ['NumPy', 'pandas-scratch-to-advanced', 'Matplotlib', 'Seaborn'],
	},
	{
		category: 'Web Development',
		repos: ['VS-Code-Landing-Page-Clone', 'todospro', 'EduVerse-USA'],
	},
	{
		category: 'Education & Learning',
		repos: [
			'100xDevs-Harkirat-Cohort-3.0-Web-Dev-Devops',
			'GitHub-Workflow-Guide',
			'mac-terminal-cheatsheet',
			'Python-3',
			'Cpp-Exercise-',
		],
	},
	{
		category: 'Systems & Backend',
		repos: [
			'HOSPITAL-MANAGEMENT-SYSTEM',
			'BuildiumPro',
			'PakBus',
			'earthquake-alert-pipeline',
			'network-infrastructure-security-project',
		],
	},
	{
		category: 'Specialized Projects',
		repos: [
			'RomanUrduCompiler',
			'craftkart-cloud-launch',
			'Protons-Eduverse',
			'studyusa-guide',
			'Muhammad-Zafar-Ul-Haq',
			'zafar1162014',
		],
	},
];

const internshipTopLevel = [
	'AGENTING MODE WITH SELF HEALING',
	'AI powered virtual Tutor',
	'AgenticAI',
	'AgenticAI - Copy',
	'predictive',
	'predictive - Copy',
	'chromeextension',
	'kasla task',
	'mathtutor',
	'medical',
	'model train',
];

const internshipNestedGroups = [
	{
		category: 'Day-wise Learning',
		projects: ['Day 2', 'Day 3', 'Day 6'],
	},
	{
		category: 'Computer Vision',
		projects: [
			'Face_Blur',
			'facial_expression',
			'human activity',
			'objectDetection',
			'cloth_suiting',
		],
	},
	{
		category: 'NLP & Text',
		projects: [
			'NLP',
			'intent classification',
			'Resume Embedding Semantic Search',
			'Resume Embedding Semantic Search - Copy',
		],
	},
	{
		category: 'Data & Embeddings',
		projects: ['RAG', 'Resume', 'convertor', 'embedd', 'medical'],
	},
];

const quickStats = [
	{ label: 'GitHub Repositories', value: '27' },
	{ label: 'Internship Top-Level Projects', value: '11' },
	{ label: 'Internship Nested Projects', value: '20+' },
	{ label: 'Overall Portfolio Projects', value: '58+' },
];

export function ProjectsSection() {
	return (
		<section
			id="projects"
			className="py-28">
			<div className="section-shell">
				<div className="flex items-center gap-4 mb-12">
					<h2 className="section-title">
						<span className="text-primary font-mono mr-2">03.</span>
						Projects
					</h2>
					<div className="section-divider" />
				</div>

				<div className="glass-surface p-6 md:p-8 mb-12 border-primary/40">
					<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
						<div>
							<p className="text-xs tracking-[0.16em] uppercase text-primary mb-2">
								Final Year Project
							</p>
							<h3 className="text-2xl md:text-3xl font-semibold text-foreground">
								{finalYearProject.title}
							</h3>
						</div>
						<span className="text-sm font-semibold bg-primary/15 text-primary px-3 py-1.5 rounded-full w-fit">
							{finalYearProject.progress}
						</span>
					</div>

					<p className="text-muted-foreground leading-relaxed mb-6">
						{finalYearProject.description}
					</p>

					<div className="grid md:grid-cols-2 gap-3 mb-6">
						{finalYearProject.highlights.map((item) => (
							<div
								key={item}
								className="bg-secondary/40 rounded-lg px-4 py-3 text-sm text-foreground">
								{item}
							</div>
						))}
					</div>

					<div className="flex flex-wrap gap-2">
						{finalYearProject.milestones.map((milestone) => (
							<span
								key={milestone}
								className="text-xs sm:text-sm border border-border rounded-full px-3 py-1.5 text-muted-foreground bg-card/70">
								{milestone}
							</span>
						))}
					</div>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
					{quickStats.map((stat) => (
						<div
							key={stat.label}
							className="glass-surface p-5">
							<p className="text-3xl font-semibold text-primary mb-1">
								{stat.value}
							</p>
							<p className="text-sm text-muted-foreground">{stat.label}</p>
						</div>
					))}
				</div>

				{/* Research Publications Section */}
				<div className="mb-16">
					<h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
						<BookOpen className="h-5 w-5 text-primary" />
						Research Publications
					</h3>
					<div className="space-y-4">
						{researchPublications.map((pub) => (
							<div
								key={pub.title}
								className="glass-surface p-6 hover:border-primary/50 transition-colors">
								<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
									<div className="flex-1">
										<h4 className="text-lg font-semibold text-foreground mb-2">
											{pub.title}
										</h4>
										<p className="text-primary font-mono text-sm mb-2">
											{pub.journal} • {pub.year}
										</p>
										<p className="text-muted-foreground text-sm leading-relaxed">
											{pub.description}
										</p>
									</div>
									<Link
										href={pub.link}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-mono shrink-0">
										<FileText className="h-4 w-4" />
										View Paper
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="mb-16">
					<h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
						<Github className="h-5 w-5 text-primary" />
						GitHub Repository Portfolio
					</h3>

					<div className="grid md:grid-cols-2 gap-4">
						{githubRepoGroups.map((group) => (
							<div
								key={group.category}
								className="glass-surface p-6">
								<h4 className="text-lg font-semibold text-foreground mb-4">
									{group.category}
								</h4>
								<div className="space-y-2">
									{group.repos.map((repo) => (
										<Link
											key={repo}
											href={`https://github.com/zafar1162014/${repo}`}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center justify-between rounded-md px-3 py-2 bg-secondary/40 hover:bg-secondary transition-colors">
											<span className="text-sm text-foreground break-all">
												{repo}
											</span>
											<Github className="h-4 w-4 text-muted-foreground shrink-0" />
										</Link>
									))}
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="grid lg:grid-cols-2 gap-4">
					<div className="glass-surface p-6">
						<h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
							<BriefcaseBusiness className="h-5 w-5 text-primary" />
							Internship Top-Level Projects
						</h3>
						<div className="flex flex-wrap gap-2">
							{internshipTopLevel.map((project) => (
								<span
									key={project}
									className="text-xs sm:text-sm bg-secondary px-3 py-1.5 rounded-full text-foreground">
									{project}
								</span>
							))}
						</div>
					</div>

					<div className="glass-surface p-6">
						<h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
							<FolderKanban className="h-5 w-5 text-primary" />
							Internship Nested Projects (20+)
						</h3>
						<div className="space-y-4">
							{internshipNestedGroups.map((group) => (
								<div key={group.category}>
									<h4 className="text-sm font-semibold text-primary mb-2">
										{group.category}
									</h4>
									<div className="flex flex-wrap gap-2">
										{group.projects.map((project) => (
											<span
												key={project}
												className="text-xs sm:text-sm bg-secondary/70 px-2.5 py-1 rounded-md text-foreground">
												{project}
											</span>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
