# Duplicate Waline Page View Records

## Core Issue

**`getFileBySlug` in `lib/mdx.js:92` puts `...data` (spread of frontmatter) _after_ `slug: slug || null`, so the frontmatter's own `slug` field overrides the filename-derived slug.**

When a `.mdx` file's frontmatter `slug` differs from its filename, two API paths get created in the Waline `wl_counter` table.

## How It Happens

Take `data/blog/we-vibe-coded-to-hell.mdx` (frontmatter had `slug: "vibe-code-hell"`):

| Code path | Slug used | Waline path |
|---|---|---|
| **Blog listing** — `getAllFilesFrontMatter` (`{ ...data, slug: formatSlug(file) }`) | `we-vibe-coded-to-hell` | `/blog/we-vibe-coded-to-hell` |
| **Blog post page** — `getFileBySlug` (`slug: slug\|\|null` then `...data` overrides it) | `vibe-code-hell` | `/blog/vibe-code-hell` |

The blog listing page's `PageCounter` hits Waline with `/blog/we-vibe-coded-to-hell`, while the individual post page's `PageCounter` hits it with `/blog/vibe-code-hell`. Two different paths → two different accumulated counts.

## Fixes Applied

### 1. Database (Neon) — `/home/shree/abhishekshree-comments/`

Deleted 5 orphan/duplicate records from `wl_counter`:

| URL | Action |
|---|---|
| `/blog/vibe-code-hell` (×2 rows) | Deleted — unused frontmatter-slug path |
| `/blog/test`, `/blog/fresh-test`, `/blog/handoff-test` | Deleted — test cruft |
| `/blog/revision-resources` (×2 rows) | Merged — same path, duplicate insert |

### 2. Frontend — `components/WalineComments.js`

Added `pageview: false` to Waline `init()` to prevent Waline's built-in counter from independently hitting the API with `window.location.pathname`.

### 3. Root cause — `lib/mdx.js` (this fix)

**Before** (broken — `...data` overrides `slug`):
```js
frontMatter: {
  wordCount: ...,
  readingTime: ...,
  slug: slug || null,   // ← set first
  fileName: ...,
  ...data,               // ← spread overrides slug with frontmatter value
}
```

**After** (fixed — filename-derived slug always wins):
```js
frontMatter: {
  wordCount: ...,
  readingTime: ...,
  fileName: ...,
  ...data,               // ← spread first
  slug: slug || null,    // ← filename-derived slug always wins
}
```

Now `getFileBySlug` and `getAllFilesFrontMatter` are consistent — both always use the filename-derived slug.

### 4. Frontmatter cleanup — `data/blog/we-vibe-coded-to-hell.mdx`

Removed the `slug: "vibe-code-hell"` frontmatter field entirely. The filename IS the slug.

## Prevention

- Never add a `slug` field to frontmatter that differs from the filename.
- The filename is the source of truth for the URL slug throughout the project (`generateStaticParams`, `formatSlug`, sitemap, RSS).
