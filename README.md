# Muhammad Zafar Ul Haq Portfolio

Modern Next.js portfolio for machine learning and AI work, designed to be deployed on GitHub Pages.

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open http://localhost:3000

## Deploy to GitHub Pages

This repository includes a workflow at `.github/workflows/deploy.yml` that deploys automatically on pushes to `main`.

### One-time GitHub setup

1. Go to repository `Settings > Pages`.
2. Set source to `GitHub Actions`.
3. Push changes to `main`.
4. Wait for workflow `Deploy Portfolio to GitHub Pages` to finish.

Your site URL will be:

- User page repo (`username.github.io`): `https://username.github.io/`
- Project repo: `https://username.github.io/repository-name/`

## Notes

- Static export is enabled through Next.js `output: "export"`.
- `basePath` and `assetPrefix` are auto-calculated from `GITHUB_REPOSITORY` during production builds.
