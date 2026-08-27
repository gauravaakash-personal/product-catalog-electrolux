# Product Catalog — Electrolux

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)]()
[![Vercel](https://img.shields.io/badge/deploy-vercel-blue.svg)]()
[![Node](https://img.shields.io/badge/node-%3E%3D16-brightgreen.svg)]()

One-line summary
A Next.js 14 (app router) product catalog frontend with Playwright e2e tests — listing, filtering, and product detail pages with a simple, extensible structure for integration with external product APIs.

Table of contents
- [Demo](#demo)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Quick start](#quick-start)
- [Available scripts](#available-scripts)
- [Environment variables](#environment-variables)
- [Project structure](#project-structure)
- [Testing](#testing)
- [Development notes](#development-notes)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

Demo
A preview/deployed demo (if available) — add your Vercel/Netlify URL here:
https://your-deploy-url.example.com

Features
- Product listing and detail pages
- Search and category filters
- SSR/SSG where appropriate using Next.js app router
- Accessible and responsive UI
- Easy to swap in a headless CMS or product API
- End-to-end testing with Playwright

Tech stack
- Next.js 16 (App router)
- React 19 + TypeScript
- Tailwind CSS v4
- Playwright (E2E Testing)
- ESLint (Code quality)

Prerequisites
- Node.js 16+ (LTS recommended)
- npm, yarn, or pnpm
- (Optional) .env values for external APIs (see below)

Quick start (development)
1. Clone
   ```bash
   git clone git@github.com:gauravaakash-personal/product-catalog-electrolux.git
   ```
2. Install
   ```bash
   npm install
   # or
   pnpm install
   ```
3. Copy env
   ```bash
   cp .env.example .env.local
   ```
4. Run dev server
   ```bash
   npm run dev
   ```
5. Open http://localhost:3000

Available scripts
- `npm run dev` — run development server (hot reload)
- `npm run build` — build for production
- `npm start` — start production server (after build)
- `npm run lint` — run ESLint
- `npm run test:e2e` — run all Playwright tests
- `npm run test:e2e:ui` — run tests in UI mode (interactive mode with visual test runner)
- `npm run test:e2e:headed` — run tests in headed mode (see browser window during execution)
- `npm run test:e2e:report` — view the HTML report from the last test run

Environment variables
Create a `.env.local` file in the root directory with any required environment variables. See `.env.example` for reference.

Project structure
```
.
├── app/                    — Next.js app router pages and layout
├── components/             — shared React components
├── context/                — React context providers
├── e2e/                    — Playwright end-to-end tests
│   ├── tests/             — test files
│   └── fixtures/          — test fixtures and helpers (if any)
├── public/                 — images, static assets
├── tests/                  — unit / integration tests
├── types/                  — TypeScript type definitions
├── eslint.config.mjs       — ESLint configuration
├── next.config.ts          — Next.js configuration
├── playwright.config.ts    — Playwright configuration
├── postcss.config.mjs      — PostCSS configuration
├── tailwind.config.ts      — Tailwind CSS configuration
├── tsconfig.json           — TypeScript configuration
├── package.json            — project dependencies and scripts
└── README.md               — this file
```

Testing
This project includes end-to-end testing with Playwright.

### Running Playwright Tests
```bash
# Run all tests
npm run test:e2e

# Run tests in UI mode (interactive mode with visual test runner)
npm run test:e2e:ui

# Run tests in headed mode (see browser window during execution)
npm run test:e2e:headed

# View the HTML report from the last test run
npm run test:e2e:report
```

Tests are located in the `e2e/tests/` directory and configured in `playwright.config.ts`. The configuration includes:
- Base URL: `http://localhost:3000`
- Auto-start dev server before running tests
- HTML report generation with automatic opening
- Parallel test execution
- Chrome (Chromium) browser support

Development notes
- TypeScript strict mode is recommended for type safety
- Follow the project structure to keep code organized
- Use conventional commit messages in your commits
- Ensure all linting checks pass before submitting PRs

Deployment
This project is ready to be deployed on Vercel, Netlify, or any Node.js hosting platform.

### Deploy on Vercel
The easiest way to deploy is with [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app):
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy your application

Contributing
1. Fork the repo
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Commit changes, run linters/tests
4. Open a pull request describing your change

Please follow conventional commit messages and keep PRs focused and small.

License
This project is licensed under the MIT License — see the LICENSE file for details.

Contact
Maintainer: Gaurav Aakash — https://github.com/gauravaakash-personal
