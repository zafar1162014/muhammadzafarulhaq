# Muhammad Zafar Ul Haq Portfolio

Modern Next.js portfolio focused on AI, Machine Learning, and full-stack project delivery.

## Highlights

- Featured Final Year Project: Protons EduVerse (currently 70% complete)
- Dedicated Projects inventory with categorized GitHub repositories
- Built-in Light/Night mode toggle in the header
- Static export ready for GitHub Pages

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- next-themes (theme switching)
- GitHub Actions (automated Pages deployment)

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Configure contact form environment variables:

```bash
cp .env.example .env.local
```

Then fill in the EmailJS values in `.env.local`.

3. Open:

```text
http://localhost:3000
```

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

Deployment is handled by `.github/workflows/deploy.yml` on pushes to `main`.

### Contact Form (Static Hosting Compatible)

The contact form uses EmailJS from the browser, so no backend server or API route is required.

Create an EmailJS account and set these values:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

For GitHub Pages deployment, add the same values in repository secrets:

- `Settings > Secrets and variables > Actions > New repository secret`

Use the exact same key names as above.

EmailJS template variables expected by this form:

- `from_name`
- `from_email`
- `subject`
- `message`

### One-time setup

1. Open repository settings.
2. Go to `Settings > Pages`.
3. Set Source to `GitHub Actions`.
4. Push to `main`.

### Repository URL

```text
https://github.com/zafar1162014/muhammadzafarulhaq.git
```

### Expected site URL

```text
https://zafar1162014.github.io/muhammadzafarulhaq/
```

## Notes

- Static export is enabled through `output: "export"`.
- `basePath` and `assetPrefix` are derived from `GITHUB_REPOSITORY` for project-page deployments.
- Contact form submission is fully client-side and works on GitHub Pages through EmailJS.
