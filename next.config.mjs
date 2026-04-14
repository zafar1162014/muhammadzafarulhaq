/** @type {import('next').NextConfig} */
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
};

export default nextConfig;
