import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

/** @type {import('next').NextConfig} */
const __dirname = dirname(fileURLToPath(import.meta.url));
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isUserPageRepo = repositoryName.endsWith('.github.io');
const isProduction = process.env.NODE_ENV === 'production';
const repoBasePath =
	isProduction && repositoryName && !isUserPageRepo ? `/${repositoryName}` : '';

const nextConfig = {
	output: 'export',
	trailingSlash: true,
	basePath: repoBasePath,
	assetPrefix: repoBasePath,
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
