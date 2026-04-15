'use client';

import { useRef } from 'react';

const skills = {
	'Machine Learning': [
		'Supervised Learning & Classification',
		'Feature Engineering & Selection',
		'Model Evaluation & Hyperparameter Tuning',
		'Ensemble Methods (XGBoost, Random Forest)',
	],
	'Deep Learning & Neural Networks': [
		'TensorFlow & Keras',
		'CNNs for Computer Vision',
		'NLP & Text Classification',
		'Transformers (BERT, GPT-2)',
	],
	'Data Science & Analysis': [
		'Python (Pandas, NumPy, Matplotlib)',
		'Data Preprocessing & Cleaning',
		'Statistical Analysis & Visualization',
		'SQL & Database Management',
	],
	'ML Tools & Deployment': [
		'Scikit-Learn',
		'Jupyter Notebook & VS Code',
		'Git & Version Control',
		'FastAPI & Model Deployment',
	],
};

const technologies = [
	'Python',
	'Scikit-Learn',
	'TensorFlow & Keras',
	'PyTorch',
	'Pandas & NumPy',
	'Matplotlib & Seaborn',
	'XGBoost',
	'CNN & RNN',
	'NLP & Transformers',
	'Feature Engineering',
	'Model Optimization',
	'SQL & MongoDB',
];

export function AboutSection() {
	const sectionRef = useRef<HTMLElement>(null);

	return (
		<section
			id="about"
			ref={sectionRef}
			className="py-28">
			<div className="section-shell">
				<div className="flex items-center gap-4 mb-12">
					<h2 className="section-title">
						<span className="text-primary font-mono mr-2">01.</span>
						About Me
					</h2>
					<div className="section-divider" />
				</div>

				<div className="grid lg:grid-cols-2 gap-12">
					<div className="space-y-6 glass-surface p-6 md:p-8">
						<p className="text-muted-foreground leading-relaxed">
							I have a strong foundation in computer science, machine learning,
							and data-driven problem solving. I have built hands-on projects
							including sentiment analysis, traffic sign classification, and
							resume parsing systems.
						</p>
						<p className="text-muted-foreground leading-relaxed">
							I am developing good skills in supervised learning, feature
							engineering, model evaluation, and hyperparameter tuning using
							Scikit-Learn, TensorFlow, and XGBoost. I enjoy cleaning raw data,
							extracting useful features, and improving model performance.
						</p>
						<p className="text-muted-foreground leading-relaxed">
							I have worked with CNNs for computer vision, NLP for text
							classification, and transformer models (BERT, GPT-2). I also
							contributed to object detection research using YOLO, published on
							ResearchGate in 2024.
						</p>
						<p className="text-muted-foreground leading-relaxed">
							<span className="text-primary">University of Central Punjab</span>
							{' – '}
							<span className="text-primary font-semibold">
								100% Merit Scholarship Holder
							</span>{' '}
							| CGPA: 3.8+/4.00
						</p>
						<p className="text-muted-foreground leading-relaxed">
							Technologies and skills I work with:
						</p>
						<ul className="grid grid-cols-2 gap-2 text-sm">
							{technologies.map((tech) => (
								<li
									key={tech}
									className="flex items-center gap-2 text-muted-foreground">
									<span className="text-primary">▹</span>
									{tech}
								</li>
							))}
						</ul>
					</div>

					<div className="space-y-8 glass-surface p-6 md:p-8">
						{Object.entries(skills).map(([category, items]) => (
							<div key={category}>
								<h3 className="text-lg font-semibold text-foreground mb-4">
									{category}
								</h3>
								<div className="flex flex-wrap gap-2.5">
									{items.map((skill) => (
										<span
											key={skill}
											className="text-xs sm:text-sm bg-secondary/65 border border-border/70 rounded-xl px-3 py-1.5 text-foreground">
											{skill}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
