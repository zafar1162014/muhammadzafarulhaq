'use client';

import type React from 'react';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
	Mail,
	Linkedin,
	Github,
	Instagram,
	Facebook,
	Send,
	Phone,
	MapPin,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export function ContactSection() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitState, setSubmitState] = useState<{
		type: 'success' | 'error' | null;
		message: string;
	}>({ type: null, message: '' });

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
		const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
		const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

		if (!serviceId || !templateId || !publicKey) {
			const mailtoSubject = encodeURIComponent(formData.subject || 'Portfolio Contact');
			const mailtoBody = encodeURIComponent(
				`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
			);

			window.location.href = `mailto:zafarulhaq1162014@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
			setSubmitState({
				type: 'success',
				message:
					'Your email app is opening so you can send this message directly.',
			});
			return;
		}

		setIsSubmitting(true);
		setSubmitState({ type: null, message: '' });

		try {
			await emailjs.send(
				serviceId,
				templateId,
				{
					from_name: formData.name,
					from_email: formData.email,
					subject: formData.subject,
					message: formData.message,
				},
				{ publicKey },
			);

			setSubmitState({
				type: 'success',
				message: 'Message sent successfully. Thank you for reaching out.',
			});
			setFormData({ name: '', email: '', subject: '', message: '' });
		} catch {
			setSubmitState({
				type: 'error',
				message:
					'Something went wrong while sending your message. Please try again or email me directly.',
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<section
			id="contact"
			className="py-28">
			<div className="section-shell">
				<div className="flex items-center gap-4 mb-12">
					<h2 className="section-title">
						<span className="text-primary font-mono mr-2">04.</span>
						Get In Touch
					</h2>
					<div className="section-divider" />
				</div>

				<div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
					<div className="space-y-8 glass-surface p-6 md:p-8">
						<div>
							<h3 className="text-xl font-semibold text-foreground mb-4">
								{"Let's work together"}
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								I'm currently looking for new opportunities and my inbox is
								always open. Whether you have a question, a project idea, or
								just want to say hi, I'll try my best to get back to you!
							</p>
						</div>

						<div className="space-y-4">
							<div className="flex items-center gap-4 text-muted-foreground">
								<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
									<Mail className="h-5 w-5 text-primary" />
								</div>
								<div>
									<p className="text-sm text-muted-foreground">Email</p>
									<Link
										href="mailto:zafarulhaq1162014@gmail.com"
										className="text-foreground hover:text-primary transition-colors">
										zafarulhaq1162014@gmail.com
									</Link>
								</div>
							</div>

							<div className="flex items-center gap-4 text-muted-foreground">
								<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
									<Phone className="h-5 w-5 text-primary" />
								</div>
								<div>
									<p className="text-sm text-muted-foreground">Phone</p>
									<span className="text-foreground">+92 324 1557130</span>
								</div>
							</div>

							<div className="flex items-center gap-4 text-muted-foreground">
								<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
									<MapPin className="h-5 w-5 text-primary" />
								</div>
								<div>
									<p className="text-sm text-muted-foreground">Location</p>
									<span className="text-foreground">Lahore, Pakistan</span>
								</div>
							</div>
						</div>

						<div className="flex gap-4 pt-4">
							<Link
								href="https://github.com/zafar1162014"
								target="_blank"
								rel="noopener noreferrer"
								className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
								<Github className="h-5 w-5" />
							</Link>
							<Link
								href="https://linkedin.com/in/mzafarulhaq"
								target="_blank"
								rel="noopener noreferrer"
								className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
								<Linkedin className="h-5 w-5" />
							</Link>
							<Link
								href="https://www.instagram.com/zafarulhaq1162014/"
								target="_blank"
								rel="noopener noreferrer"
								className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
								<Instagram className="h-5 w-5" />
							</Link>
							<Link
								href="https://www.facebook.com/zafarulhaq1162014/"
								target="_blank"
								rel="noopener noreferrer"
								className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
								<Facebook className="h-5 w-5" />
							</Link>
							<Link
								href="mailto:zafarulhaq1162014@gmail.com"
								className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
								<Mail className="h-5 w-5" />
							</Link>
						</div>
					</div>

					<form
						onSubmit={handleSubmit}
						className="space-y-6 glass-surface p-6 md:p-8">
						<div className="grid sm:grid-cols-2 gap-4">
							<div className="space-y-2">
								<Label htmlFor="name">Name</Label>
								<Input
									id="name"
									name="name"
									placeholder="Enter your full name"
									value={formData.name}
									onChange={handleChange}
									autoComplete="name"
									required
									className="transition-all focus-visible:ring-2 focus-visible:ring-primary/60"
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									name="email"
									type="email"
									placeholder="Enter your email address"
									value={formData.email}
									onChange={handleChange}
									autoComplete="email"
									required
									className="transition-all focus-visible:ring-2 focus-visible:ring-primary/60"
								/>
							</div>
						</div>
						<div className="space-y-2">
							<Label htmlFor="subject">Subject</Label>
							<Input
								id="subject"
								name="subject"
								placeholder="Write a short subject"
								value={formData.subject}
								onChange={handleChange}
								required
								className="transition-all focus-visible:ring-2 focus-visible:ring-primary/60"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="message">Message</Label>
							<Textarea
								id="message"
								name="message"
								placeholder="Write your message here"
								rows={5}
								value={formData.message}
								onChange={handleChange}
								required
								className="transition-all focus-visible:ring-2 focus-visible:ring-primary/60"
							/>
						</div>
						{submitState.type && (
							<p
								role="status"
								aria-live="polite"
								className={`text-sm rounded-md px-3 py-2 ${
									submitState.type === 'success'
										? 'bg-emerald-500/10 text-emerald-600'
										: 'bg-red-500/10 text-red-600'
								}`}>
								{submitState.message}
							</p>
						)}
						<Button
							type="submit"
							className="w-full gap-2 transition-transform hover:-translate-y-0.5"
							disabled={isSubmitting}>
							{isSubmitting ? (
								'Sending...'
							) : (
								<>
									<Send className="h-4 w-4" />
									Send Message
								</>
							)}
						</Button>
					</form>
				</div>
			</div>
		</section>
	);
}
