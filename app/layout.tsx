import type React from 'react';
import type { Metadata } from 'next';
import { Space_Grotesk, Playfair_Display } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { withBasePath } from '@/lib/base-path';

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

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const metadata: Metadata = {
	title:
		'Muhammad Zafar Ul Haq | Final-Year CS Student & Machine Learning Engineer',
	description:
		'Explore the portfolio of Muhammad Zafar Ul Haq, a final-year computer science student specializing in machine learning, deep learning, and data-driven applications. View projects, experience, and technical skills.',
	keywords: [
		'Machine Learning Engineer',
		'Computer Science Student',
		'Machine Learning Projects',
		'Deep Learning',
		'Data Science',
		'Python Developer',
		'TensorFlow',
		'PyTorch',
		'Computer Vision',
		'NLP',
	],
	applicationName: 'Muhammad Zafar Portfolio',
	creator: 'Muhammad Zafar Ul Haq',
	metadataBase: new URL(`https://zafar1162014.github.io${siteBasePath}`),
	alternates: {
		canonical: '/',
	},
	openGraph: {
		type: 'website',
		url: '/',
		title: 'Muhammad Zafar Ul Haq | CS Student Portfolio',
		description:
			'Final-year computer science student building practical machine learning and data-driven projects. View my work, experience, and technical skills.',
		siteName: 'Muhammad Zafar Portfolio',
		images: [
			{
				url: '/profile.png',
				width: 400,
				height: 500,
				alt: 'Muhammad Zafar Ul Haq Profile Picture',
				type: 'image/png',
			},
		],
		locale: 'en_US',
	},
	twitter: {
		card: 'summary_large_image',
		creator: '@zafarulhaq1162014',
		title: 'Muhammad Zafar Ul Haq | CS Student Portfolio',
		description:
			'Explore my machine learning projects, experience, and technical skills.',
		images: ['/profile.png'],
	},
	icons: {
		icon: '/favicon.png',
		apple: '/favicon.png',
	},
	robots: {
		index: true,
		follow: true,
		'max-image-preview': 'large',
		'max-snippet': -1,
		'max-video-preview': -1,
	},
	formatDetection: {
		email: true,
		telephone: true,
		address: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Muhammad Zafar Ul Haq',
		url: `https://zafar1162014.github.io${siteBasePath}`,
		image: `https://zafar1162014.github.io${siteBasePath}/profile.png`,
		description:
			'Final-year computer science student and machine learning engineer',
		jobTitle: 'Machine Learning Engineer',
		sameAs: [
			'https://github.com/zafar1162014',
			'https://linkedin.com/in/mzafarulhaq',
			'https://instagram.com/zafarulhaq1162014',
			'https://facebook.com/zafarulhaq1162014',
		],
		email: 'zafarulhaq1162014@gmail.com',
	};

	return (
		<html
			lang="en"
			suppressHydrationWarning>
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=5"
				/>
				<meta
					httpEquiv="X-UA-Compatible"
					content="ie=edge"
				/>
				<meta
					name="theme-color"
					content="#000000"
				/>
				<link
					rel="preconnect"
					href="https://fonts.googleapis.com"
				/>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body
				className={`${headingFont.variable} ${bodyFont.variable} font-sans antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
