# Product Catalog — Electrolux

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)]()
[![Vercel](https://img.shields.io/badge/deploy-vercel-blue.svg)]()
[![Node](https://img.shields.io/badge/node-%3E%3D16-brightgreen.svg)]()

One-line summary
A Next.js 14 (app router) product catalog frontend/demo for Electrolux products — listing, filtering, and product detail pages with a simple, extensible structure for integration with external product APIs.

Table of contents
- [Demo](#demo)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Quick start](#quick-start)
- [Available scripts](#available-scripts)
- [Environment variables](#environment-variables)
- [Project structure](#project-structure)
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

Tech stack
- Next.js (App router)
- React + TypeScript
- Tailwind CSS / CSS Modules (adapt if using a different styling solution)
- Optional: Storybook, Jest/React Testing Library

Prerequisites
- Node.js 16+ (LTS recommended)
- npm, yarn, or pnpm
- (Optional) .env values for external APIs (see below)

Quick start (development)
1. Clone
   git clone git@github.com:gauravaakash-personal/product-catalog-electrolux.git
2. Install
   npm install
   # or
   pnpm install
3. Copy env
   cp .env.example .env.local
4. Run dev server
   npm run dev
5. Open http://localhost:3000

Available scripts
- npm run dev — run development server (hot reload)
- npm run build — build for production
- npm start — start production server (after build)
- npm run lint — run ESLint
- npm run test — run tests (if present)
- npm run format — run Prettier (if configured)




Project structure (high level)
- app/ — Next.js app router pages and layout
- components/ — shared React components
- lib/ or utils/ — helpers, API clients
- public/ — images, static assets
- styles/ — global styles or Tailwind config
- tests/ — unit / integration tests


Deployment
- Deploy to Vercel for zero-config Next.js deployments. Link the repository in Vercel and set environment variables in the dashboard.

Contributing
1. Fork the repo
2. Create a feature branch: git checkout -b feat/my-feature
3. Commit changes, run linters/tests
4. Open a pull request describing your change

Please follow conventional commit messages and keep PRs focused and small.

License
This project is licensed under the MIT License — see the LICENSE file for details.

Contact
Maintainer: Gaurav Aakash — https://github.com/gauravaakash-personal
