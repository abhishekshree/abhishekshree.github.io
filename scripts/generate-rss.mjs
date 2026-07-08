import { Feed } from 'feed'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import siteMetadata from '../data/siteMetadata.json' with { type: 'json' }

const root = process.cwd()
const blogDir = path.join(root, 'data', 'blog')

const files = fs.readdirSync(blogDir)
const posts = files
  .map((f) => {
    const source = fs.readFileSync(path.join(blogDir, f), 'utf8')
    const { data } = matter(source)
    if (data.draft) return null
    const slug = f.replace(/\.(mdx|md)$/, '')
    return { ...data, slug }
  })
  .filter(Boolean)
  .sort((a, b) => new Date(b.date) - new Date(a.date))

const feed = new Feed({
  title: siteMetadata.title,
  description: siteMetadata.description,
  id: siteMetadata.siteUrl,
  link: siteMetadata.siteUrl,
  language: siteMetadata.language,
  updated: new Date(posts[0]?.date),
  author: { name: siteMetadata.author, email: siteMetadata.email },
  feedLinks: { rss: `${siteMetadata.siteUrl}/index.xml` },
})

posts.forEach((post) => {
  feed.addItem({
    title: post.title,
    id: `${siteMetadata.siteUrl}/blog/${post.slug}`,
    link: `${siteMetadata.siteUrl}/blog/${post.slug}`,
    description: post.summary,
    date: new Date(post.date),
    category: post.tags?.map((t) => ({ name: t })),
    author: [{ name: siteMetadata.author, email: siteMetadata.email }],
  })
})

const rss = feed
  .rss2()
  .replace(
    '<language>',
    `<managingEditor>${siteMetadata.email} (${siteMetadata.author})</managingEditor>\n        <webMaster>${siteMetadata.email} (${siteMetadata.author})</webMaster>\n        <language>`
  )

fs.mkdirSync('./public', { recursive: true })
fs.writeFileSync('./public/index.xml', rss)