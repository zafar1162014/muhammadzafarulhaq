import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

/** @type {import('next').NextConfig} */
const __dirname = dirname(fileURLToPath(import.meta.url));
const explicitBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isUserPageRepo = repositoryName.endsWith('.github.io');
const isProduction = process.env.NODE_ENV === 'production';
const repoBasePath =
	explicitBasePath ||
	(isProduction && repositoryName && !isUserPageRepo
		? `/${repositoryName}`
		: '');

const nextConfig = {
	output: 'export',
	trailingSlash: true,
	basePath: repoBasePath,
	assetPrefix: repoBasePath,
	env: {
		NEXT_PUBLIC_BASE_PATH: repoBasePath,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
		unoptimized: true,
	},
	turbopack: {
		root: __dirname,
	},
};

export default nextConfig;
