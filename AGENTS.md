# AGENTS.md — abhishekshree.github.io

Personal portfolio / blog — Next.js (Pages Router) static export, deployed via GitHub Pages.

## Quick start

```bash
nvm use              # Node 22
npm install
npm run dev          # localhost:3000
```

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` | Generate sitemap + `next build` |
| `npm run export` / `npm run build-ssg` | Static build + `touch out/.nojekyll` (for GitHub Pages) |
| `npm run deploy` | `gh-pages -d out -t true` (pushes `out/` to gh-pages branch) |
| `node scripts/compose.js "Title" [ext]` | Scaffold a new `data/blog/title.mdx` (or .md) with frontmatter |
| `npm run analyze` | Bundle analyzer (`ANALYZE=true next build`) |

No test framework, no explicit lint/format scripts. Configs exist (`.eslintrc.js`, `prettier.config.js`) — run via `npx eslint .` / `npx prettier --check .`.

## Structure

```
pages/              Pages Router (no /app dir)
  _app.js           ThemeProvider, MDXProvider, font vars, LayoutWrapper
  _document.js      GoatCounter, Buy Me a Coffee, KaTeX, favicons
  index.js          Home — avatar, bio, recent posts, education
  blog.js           Blog list (paginated, 5/page)
  blog/[slug].js    Single post — MDX, prev/next, RSS generation
  projects.js       Projects grid (data/projectsData.js)
  tags.js           Tag cloud
  tags/[tag].js     Per-tag listing + RSS
  work.js           Timeline work experience
  contact.js        Email + social links
  cv.js             Redirects to /static/cv/cv.pdf
  ugp.js            Redirects to /static/ugp/ugp.pdf
  404.js            404 page
data/
  blog/*.mdx        Blog posts (also supports .md)
  siteMetadata.json Site-wide config (title, social links, etc.)
  headerNavLinks.js Nav bar items
  projectsData.js   Project cards (title, desc, img, href)
components/         Reusable components (LayoutWrapper, SEO, Card, etc.)
layouts/            ListLayout (blog list), PostLayout (single post)
lib/                Utilities: mdx.js, tags.js, generate-rss.js, img-to-jsx.js, fonts.js
css/tailwind.css    Tailwind v4 + @tailwindcss/typography + custom utilities
scripts/            compose.js, generate-sitemap.js
```

## Key facts

- **Static export** — `next.config.js` sets `output: 'export'`, all pages are SSG at build time. No SSR, no API routes.
- **Path aliases** (`jsconfig.json`): `@/components/*`, `@/data/*`, `@/layouts/*`, `@/lib/*`, `@/css/*`
- **Blog posts**: place `.mdx`/`.md` files in `data/blog/`. Frontmatter with `draft: true` hides them from lists (but still buildable at `/blog/slug`).
- **Build auto-generates**: `public/sitemap.xml` via `scripts/generate-sitemap.js`, `public/feed.xml` and per-tag RSS during blog post builds.
- **Images**: `next.config.js` sets `images.unoptimized: true` (static export requirement). Use `<img>` not `next/image` in practice.
- **Fonts**: Inconsolata (body), JetBrains Mono (mono), Bree Serif (serif) via `next/font/google` with CSS variables.
- **Theming**: `next-themes` with class-based dark mode (`.dark` class on `<html>`).

## Prettier conventions

```json
{ "semi": false, "singleQuote": true, "printWidth": 100, "tabWidth": 2, "trailingComma": "es5" }
```

## Deployment

`npm run deploy` pushes `out/` to the `gh-pages` branch via `gh-pages`. The GitHub Actions workflow (on remote) runs the build automatically.

## External services (in `_document.js`)

- **Analytics**: GoatCounter at `https://shree.goatcounter.com/count`
- **Support**: Buy Me a Coffee widget (`data-id="abhishekshree"`)
- **SEO**: Google site verification
