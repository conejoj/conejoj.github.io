# Jose Conejo — Portfolio

A premium, editorial-style personal portfolio built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

## Deploying

This is a standard Next.js app — the fastest path is [Vercel](https://vercel.com): push this folder to a GitHub repo and import it in Vercel, or run `npx vercel` from this directory.

## Editing content

Everything content-related lives in `data/` and `lib/site.ts` — you should rarely need to touch component code to update copy.

- `lib/site.ts` — name, email, LinkedIn/GitHub URLs, resume file path, nav links, hero expertise labels.
- `data/projects.ts` — the six Selected Work case studies (name, category, problem, build, tech, year, optional external link).
- `data/experience.ts` — the Experience timeline entries.
- `data/skills.ts` — the Skills & Technology groups.
- `data/capabilities.ts` — the four What I Do capability rows.

## Replacing placeholders

- **Resume**: replace `public/jose-conejo-resume.pdf` with your real resume (same filename, or update `resumeUrl` in `lib/site.ts`).
- **Portrait**: the About section currently renders a styled placeholder panel (`components/About.tsx`). To use a real photo, add an `next/image` `<Image>` inside that panel pointing at a file in `public/`.
- **Project visuals**: `components/ProjectShowcase.tsx` renders an abstract, data-driven cover (index, initials, category) for each project rather than a screenshot, so nothing looks like a generic stock image out of the box. Swap in real screenshots/mockups by replacing the `ProjectVisual` function with an `<Image>` per project (add an `image` field to `data/projects.ts`).
- **Favicon**: `app/icon.tsx` generates the "JC" monogram favicon programmatically — edit the JSX there to change colors/text.
- **Links**: LinkedIn/GitHub URLs in `lib/site.ts` are placeholders (`joseconejochevez`) — double check they match your real handles.

## Structure

```
app/            Next.js App Router entry (layout, page, icon, globals.css)
components/     Navbar, Hero, SectionHeader, ProjectShowcase, Work, CapabilitySection,
                Experience, ExperienceItem, About, Skills, Philosophy, Contact, Footer
data/           projects.ts, experience.ts, skills.ts, capabilities.ts
lib/            site.ts (config), Reveal.tsx (scroll-reveal utility)
public/         static assets (resume PDF, add images here)
```

## Notes

- Scroll-reveal animation is a small custom `IntersectionObserver` hook (`lib/Reveal.tsx`) — no animation library dependency, and it respects `prefers-reduced-motion`.
- Typography is Fraunces (display serif), Instrument Sans (body/UI), and IBM Plex Mono (labels/code), all self-hosted via `@fontsource` packages, no external font requests.
- Colors, spacing, and animation tokens are defined once in `tailwind.config.ts`.
