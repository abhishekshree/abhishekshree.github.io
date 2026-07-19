# Waline Comment System — Internal Reference

## Architecture

```
┌──────────────────────┐       ┌───────────────────────────┐
│  Portfolio (Next.js) │──────>│  Comment Server (Vercel)  │
│  pages/blog/[slug]   │ Waline│  @waline/vercel@1.31.0   │
│  @waline/client 3.x  │ API   │  ThinkJS + PostgreSQL     │
└──────────────────────┘       └───────────┬───────────────┘
                                            │
                                    ┌───────▼────────┐
                                    │  Neon (DB)     │
                                    │  PostgreSQL    │
                                    └────────────────┘
```

**Comment server repo:** `/home/shree/abhishekshree-comments/`

**Deployed at:** `https://abhishekshree-comments.vercel.app` (configured in `data/siteMetadata.json:commentServerUrl`)

---

## Local Dev

```bash
# comment server has its own dependencies
cd ~/abhishekshree-comments && npm install

# comment server is deployed to Vercel; local dev via `vercel dev`
# no local DB — connects to Neon production DB
```

The comment server is a thin wrapper — `index.js` just re-exports `@waline/vercel` with options:

```js
const Waline = require('@waline/vercel')
module.exports = Waline({ siteName: 'Abhishek Shree', pageSize: 10 })
```

---

## Frontend Components

### `components/WalineComments.js`
- The comment embed widget
- Uses `@waline/client` v3 (`init()` from `@waline/client`)
- Imported in `layouts/PostLayout.js`
- **`pageview: false`** — Waline's built-in counter disabled to avoid creating mismatched paths

### `components/PageCounter.js`
- **Reads and increments** page view count via Waline API
- Used in `PostLayout.js` (individual post — increments) and `ListLayout.js` (blog listing — readonly)
- API calls:
  - `GET /api/article?path=<path>&type=time` → read count
  - `POST /api/article` `{ path, type: 'time', action: 'inc' }` → increment

### `components/UpvoteCounter.js`
- **Reads and toggles** upvote count via Waline API
- Uses `localStorage` (`waline-upvotes` key) to track which pages the user has upvoted
- API calls:
  - `GET /api/article?path=<path>&type=likes` → read count
  - `POST /api/article` `{ path, type: 'likes', action: 'inc' }` → upvote
  - `POST /api/article` `{ path, type: 'likes', action: 'desc' }` → remove upvote
- Only rendered on individual post page (`PostLayout.js`)

---

## Waline `/api/article` — Full API Contract

The `Article` controller manages the **Counter** table — one row per URL path, with dynamic counter columns.

### GET — Read counters

```
GET /api/article?path=<path>&type=<type>
```

| Param | Type | Req | Default | Description |
|---|---|---|---|---|
| `path` | string[] | yes | — | URL paths (pass multiple: `?path=/a&path=/b`) |
| `type` | string[] | no | `['time']` | Counter fields to read (`time`, `likes`, etc.) |

**Response** (modern format — always an array):
```
// single path + single type
{ "data": [42] }

// single path + multiple types
{ "data": [{"time": 42, "likes": 7}] }

// multiple paths
{ "data": [42, 15] }
{ "data": [{"time": 42}, {"time": 15}] }
```

### POST — Increment/decrement

```
POST /api/article
Content-Type: application/json
Body: { "path": "...", "type": "likes", "action": "inc" }
```

| Param | Type | Req | Default | Description |
|---|---|---|---|---|
| `path` | string | yes | — | URL path |
| `type` | string | no | `'time'` | Counter field to update |
| `action` | string | no | `'inc'` | `'inc'` or `'desc'` |

**Response:**
```json
{ "data": [<new_count>] }
```

**No auth required** — anyone can increment/decrement any counter.

### Dynamic fields

The `type` parameter maps directly to a column on the Counter row. There's no fixed schema — you can use any field name:
- `type=time` → page views
- `type=likes` → page upvotes
- `type=reaction0` through `type=reaction8` → emoji reactions (client-side feature in `@waline/client`)

For PostgreSQL (Neon), columns must exist. Waline creates them on first use via think-model migration or manual `ALTER TABLE`.

---

## Database (Neon)

**Connection string** (from `neon connection-string`):
```
postgresql://neondb_owner:npg_...@ep-jolly-sea-....eu-west-2.aws.neon.tech/neondb?sslmode=require
```

**Connect via CLI:**
```bash
neon psql
# or directly with psql using the connection string above
```

### Key Tables

#### `wl_counter`
| Column | Type | Description |
|---|---|---|
| `id` | integer (PK) | Auto-increment |
| `url` | varchar | Page path (e.g. `/blog/we-vibe-coded-to-hell`) |
| `time` | integer | Page view count |
| `likes` | integer | Upvote count |
| `reaction0`..`reaction8` | integer | Emoji reaction counts |
| `createdat` | timestamp | Row creation |
| `updatedat` | timestamp | Last update |

#### `wl_comment`
| Column | Type | Description |
|---|---|---|
| `object_id` | varchar | UUID |
| `comment` | text | Markdown body |
| `nick` | varchar | Display name |
| `mail` | varchar | Email |
| `link` | varchar | Website |
| `url` | varchar | Article path |
| `like` | integer | Comment-level upvotes |
| `status` | varchar | `approved`, `waiting`, `spam` |
| `pid` / `rid` | varchar | Parent / root comment IDs |
| `insertedat` / `updatedat` | timestamp | Timestamps |

### Useful queries

```sql
-- See all counter records
SELECT * FROM wl_counter ORDER BY url;

-- Delete a stale counter record
DELETE FROM wl_counter WHERE url = '/blog/some-path';

-- See comment-level upvotes
SELECT nick, comment, like FROM wl_comment WHERE status = 'approved' ORDER BY like DESC;
```

---

## Patterns

### Adding a new counter type
1. Ensure the column exists in `wl_counter` (`ALTER TABLE wl_counter ADD COLUMN <name> integer DEFAULT 0;`)
2. Use same GET/POST pattern as `PageCounter` or `UpvoteCounter`
3. The field name in the API `type` param matches the column name

### Slug consistency
- The **filename** is the source of truth for slugs everywhere
- `getAllFilesFrontMatter` uses `{ ...data, slug: formatSlug(file) }` — filename wins
- `getFileBySlug` uses `slug: slug || null` AFTER `...data` in the frontmatter object — filename wins
- Never add a `slug` field to frontmatter that differs from the filename
- See `docs/duplicate-waline-records.md` for history

### Path cleaning
Paths are always cleaned of trailing slashes before passing to Waline API:
```js
path?.replace(/\/+$/, '') || '/'
```
