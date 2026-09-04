# Resume - Muhammad Fahad

A responsive personal portfolio and resume website for Muhammad Fahad, a frontend developer specializing in React, Next.js, TypeScript, responsive UI, state management, and API integration.

## Features

- Responsive portfolio layout for desktop and mobile
- Animated section reveals with reduced-motion support
- Frontend experience and technology toolkit sections
- GitHub, LinkedIn, and email contact links
- Downloadable resume through the `/resume` route
- Custom favicon and SEO metadata
- Next.js App Router with TypeScript

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Getting Started

### Requirements

- Node.js 20 or newer
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev     # Start the development server
npm run build   # Create a production build
npm start       # Start the production server
npm run lint    # Run the configured lint command
```

## Project Structure

```text
app/
  globals.css       Global styles and responsive design rules
  layout.tsx        Root layout and SEO metadata
  page.tsx          Main page composition
  icon.svg          Site favicon
  resume/route.ts   Resume download endpoint
components/
  ContactSection.tsx
  ExperienceSection.tsx
  Hero.tsx
  Navigation.tsx
  Reveal.tsx
  SkillsSection.tsx
  ui/               Shared UI primitives
assets/
  Muhammad_Fahad_Resume.pdf
```

## Resume Download

The resume is stored at:

```text
assets/Muhammad_Fahad_Resume.pdf
```

The `/resume` route reads this file and returns it as a downloadable PDF. Keep the filename unchanged unless the route is updated as well.

## Deploying to Netlify

1. Push the repository to GitHub.
2. In Netlify, choose **Add new project** and import the GitHub repository.
3. Use the following build settings:

```text
Build command: npm run build
Publish directory: .next
Node version: 20
```

Netlify detects the Next.js application and handles the `/resume` server route when the project is deployed with its Next.js runtime.

## Customization

- Update personal copy in `components/Hero.tsx`.
- Update experience details and skills in `components/site-data.ts`.
- Update social links and email in `components/ContactSection.tsx`.
- Update SEO title and description in `app/layout.tsx`.
- Keep the resume PDF in `assets/` so the download route continues to work.
