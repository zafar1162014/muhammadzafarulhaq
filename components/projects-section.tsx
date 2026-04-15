'use client';

import { BookOpen, BriefcaseBusiness, FileText, Github } from 'lucide-react';
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

const importantProjects = [
	{
		title: 'Self-Healing Retrieval Assistant',
		description:
			'Retrieval-based AI assistant that reads local data files, searches relevant context, and retries when the first response is not sufficient.',
	},
	{
		title: 'AI-Powered Virtual Tutor (FastAPI + Ollama)',
		description:
			'FastAPI tutoring application that explains questions step by step using an Ollama model for interactive learning support.',
	},
	{
		title: 'AgenticAI Multi-Tool Chatbot',
		description:
			'Tool-using chatbot with weather, time, calculator, reminder, and web-search functions, integrated with a knowledge base.',
	},
	{
		title: 'Automated Proposal Generator Chrome Extension',
		description:
			'Browser-based workflow automation extension for faster proposal generation and repetitive task handling.',
	},
	{
		title: 'Text-to-SQL Query Generator',
		description:
			'Natural language to SQL conversion project for translating user prompts into executable database queries.',
	},
	{
		title: 'Math Tutor Model Training Pipeline',
		description:
			'Math tutoring project focused on dataset preparation, training workflows, and answer-generation quality improvement.',
	},
	{
		title: 'Homeopathic Symptom Suggestion System',
		description:
			'Medical suggestion system that recommends homeopathic options based on user-reported symptoms.',
	},
	{
		title: 'Machine Learning Training Framework',
		description:
			'Reusable framework for model training and dataset experimentation across classification and regression tasks.',
	},
	{
		title: 'Predictive Vision Analysis (Emotion + Gaze)',
		description:
			'Webcam-based predictive project combining emotion detection and gaze tracking for real-time behavioral insights.',
	},
	{
		title: 'Computer Vision Toolkit',
		description:
			'Collection of vision tasks including face blur, facial expression recognition, human activity recognition, object detection, and apparel analysis.',
	},
	{
		title: 'Resume Semantic Search with Embeddings',
		description:
			'NLP project for intent classification and embedding-based resume search to improve candidate matching quality.',
	},
	{
		title: 'RAG and Data Conversion Utilities',
		description:
			'Retrieval-augmented generation experiments plus practical data conversion utilities for preprocessing and downstream workflows.',
	},
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

				<div className="glass-surface p-6">
					<h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
						<BriefcaseBusiness className="h-5 w-5 text-primary" />
						Important Projects
					</h3>
					<div className="grid md:grid-cols-2 gap-4">
						{importantProjects.map((project) => (
							<div
								key={project.title}
								className="rounded-lg border border-border bg-secondary/30 px-4 py-3">
								<h4 className="text-sm sm:text-base font-semibold text-foreground mb-1">
									{project.title}
								</h4>
								<p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
									{project.description}
								</p>
							</div>
						))}
					</div>
				</div>

				<div className="mt-8 glass-surface p-5 text-center">
					<p className="text-muted-foreground text-sm sm:text-base">
						I have also completed lots of client projects across ML, data
						analysis, web apps, and automation work.
					</p>
				</div>
			</div>
		</section>
	);
}
