# Portfolio v2 — Andrie Elbambuena

A personal portfolio website built to showcase projects and work, featuring a dark-themed aesthetic with smooth scroll-triggered animations.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI:** React with TSX components

## Features

- Dark/black theme throughout all pages and components
- Scroll-triggered fade-up entrance animations via `IntersectionObserver`
- Hover micro-interactions (scale, translate, color transitions, sliding underlines)
- Frosted glass sticky navbar with centered pill-shaped design
- Dynamic project detail pages via Next.js `[slug]` routing
- Conditional "No Live Demo" badge for projects without a live URL
- Centralized project data in `lib/projects.ts`

## Project Structure

```
├── app/
│   ├── layout.tsx          # Global metadata, favicon
│   ├── page.tsx            # Home page
│   └── projects/
│       └── [slug]/         # Dynamic project detail pages
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx           # Tech stack section
│   ├── Projects.tsx
│   └── Footer.tsx
├── lib/
│   └── projects.ts         # Centralized project data & Project type
└── declarations.d.ts       # PNG/image module declarations
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open andrie-elbambuena.vercel.app to view the site.

## Adding a Project

Edit `lib/projects.ts` and add a new entry to the projects array:

```ts
{
  slug: "my-project",
  title: "My Project",
  description: "A short description.",
  tags: ["Next.js", "TypeScript"],
  image: myProjectImage,
  liveUrl: "https://example.com", // optional — omit to show "No Live Demo" badge
  repoUrl: "https://github.com/you/my-project",
}
```

## Notes

- `params` in dynamic routes must be unwrapped with `React.use()` and typed as `Promise<{ slug: string }>` (Next.js App Router requirement)
- Hooks must be called before any conditional `notFound()` returns
- PNG imports require `declarations.d.ts` with a module declaration