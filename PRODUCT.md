# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary: recruiters and hiring managers** filling full-time software engineering, AI, or automation roles. They skim quickly, often on a phone, to decide whether Jose is worth an interview. Their job: confirm what he builds, what he has shipped, and how to contact him.
- **Secondary: small-business clients** looking for someone to build a website, automate parts of how they deliver their services, or support their digital marketing. Their job: see that he can solve a practical problem like theirs.

When the two audiences conflict, the hiring audience wins.

## Product Purpose

joseconejo.me is Jose Conejo's personal portfolio. It exists to win interviews for full-time software roles and, secondarily, freelance projects. Success means a qualified visitor reaches out (email or LinkedIn) or downloads the résumé.

Open to: **remote** roles and roles based in **Costa Rica**.

## Positioning

A software engineer who uses technology to solve real business problems, working across software engineering, AI, and automation, and who pairs that with proven leadership (Student Government president, multicultural organization president, Residence Life ARD) and a multilingual, multicultural background.

## Operating Context

- Bilingual site: every visible string exists in English and Spanish, with an EN | ES toggle in the navbar. The choice persists in localStorage and sets `<html lang>`.
- Visitors arrive from LinkedIn, GitHub, résumé links, and direct sharing; many on mobile.
- Primary actions: "Get in Touch" (email), LinkedIn, GitHub, and Download Résumé (`/Jose_Conejo_CV.pdf`).

## Capabilities and Constraints

- Stack: Next.js (App Router) with React, TypeScript, and Tailwind, built as a static export (`output: "export"`, unoptimized images) and deployed to GitHub Pages via GitHub Actions on push to `main`. Custom domain: joseconejo.me.
- No server, no CMS, no backend; all content lives in `data/*.ts` and components as bilingual `{ en, es }` objects.
- Sections: Hero, Selected Work (projects), What I Do (capabilities), Experience, Leadership, About, Skills, Contact, Footer.
- Images are served as WebP from `public/images/`.
- Open decisions:
  - Whether the AI Mental Health Journal project should keep naming scikit-learn.
  - Whether the Panama Cancer Clinic project stays in Selected Work.

## Brand Commitments

- Name: Jose Conejo. Title: Software Engineer.
- Hero headline: "I use technology to solve real problems." (ES: "Uso la tecnología para resolver problemas reales.")
- Voice: plain, factual, first person, confident without hype. Claims match the résumé, with no inflated titles or metrics.
- Project and experience bullets were verified by Jose against what he actually did. Keep their verbs and scope as written; do not "strengthen" them (for example, "Contributed to" must not become "Built").
- In Spanish copy, keep these English proper terms as English: "Cloud", "Board of Trustees" (with the translation in parentheses), and "CIF" (Presidente de CIF (una Organización Multicultural)).
- Links: LinkedIn https://www.linkedin.com/in/conejoj/ and GitHub https://github.com/joseconejochevez-prog.

## Evidence on Hand

- Projects with real screenshots: Walton Service Hours Platform, Automation Systems (n8n workflow), Panama Cancer Clinic website, Prime Software Solutions dashboard (capstone), AI Mental Health Journal (`public/images/*.webp`).
- Experience: Novavision Group (automation, AI & web development, 2025–Mar 2026), Prime Software Solutions capstone (2025–2026), Freelance (2022–present).
- Leadership: SGA President, John Brown University (2025–2026); CIF President; Residence Life, RA to Assistant Resident Director (2023–2026, coed upperclassmen hall of 200+ students, team of 6–7 RAs); Mentorship; Aspire Leaders Program.
- Photos: hero portrait; About portrait from the JBU Board of Trustees meeting, Fall 2025.
- Résumé PDF in `public/`.
- Languages: Spanish (native), Kryol (native), English (C2), French (B2), Portuguese (B2).
- Absent, so never fabricate: testimonials, client logos, usage numbers, or metrics beyond those stated in the résumé.

## Product Principles

1. Recruiter first: the hiring audience should get who Jose is, what he builds, and how to reach him within seconds.
2. Proof over claims: every capability points to a real project, role, or screenshot.
3. Problem-solving framing: describe work by the problem it solved, not by buzzwords.
4. Fully bilingual: English and Spanish are equal; no string ships in only one language.
5. Fast and simple: static, lightweight, and readable on a phone.

## Accessibility & Inclusion

- Bilingual EN/ES with correct `lang` attributes.
- Respect `prefers-reduced-motion` (smooth scrolling and scroll animations turn off).
- Known open items from an earlier audit: low-contrast small mono labels, inactive "What I Do" rows at 35% opacity, decorative arrows not `aria-hidden`, and missing scroll padding under the fixed navbar.
