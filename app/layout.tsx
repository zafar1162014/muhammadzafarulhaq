import type React from 'react';
import type { Metadata } from 'next';
import { Space_Grotesk, Playfair_Display } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const headingFont = Playfair_Display({
	subsets: ['latin'],
	variable: '--font-heading',
	display: 'swap',
});

const bodyFont = Space_Grotesk({
	subsets: ['latin'],
	variable: '--font-body',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Muhammad Zafar Ul Haq | Machine Learning Engineer Portfolio',
	description:
		'Portfolio of Muhammad Zafar Ul Haq, focused on machine learning engineering, deep learning, and data-driven product development.',
	keywords: [
		'Machine Learning Engineer',
		'Machine Learning',
		'Artificial Intelligence',
		'Data Science',
		'Deep Learning',
		'Python',
		'Scikit-Learn',
		'TensorFlow',
		'Keras',
		'PyTorch',
		'Feature Engineering',
		'Model Optimization',
		'Computer Vision',
		'NLP',
		'Predictive Modeling',
		'Supervised Learning',
		'Neural Networks',
		'CNN',
		'Data Analysis',
	],
	generator: 'v0.app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning>
			<body
				className={`${headingFont.variable} ${bodyFont.variable} font-sans antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange>
					{children}
				</ThemeProvider>
				<Analytics />
			</body>
		</html>
	);
}
