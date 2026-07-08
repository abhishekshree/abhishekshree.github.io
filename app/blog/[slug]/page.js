import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { getFiles, getFileBySlug, getAllFilesFrontMatter, formatSlug } from '@/lib/mdx'
import BlogPostClient from './BlogPostClient'
import siteMetadata from '@/data/siteMetadata'

export async function generateStaticParams() {
  const posts = await getFiles('blog')
  return posts.map((p) => ({
    slug: formatSlug(p),
  }))
}

export async function generateMetadata({ params: paramsPromise }) {
  const { slug } = await paramsPromise
  const root = process.cwd()
  const mdxPath = path.join(root, 'data', 'blog', `${slug}.mdx`)
  const mdPath = path.join(root, 'data', 'blog', `${slug}.md`)
  const source = fs.existsSync(mdxPath)
    ? fs.readFileSync(mdxPath, 'utf8')
    : fs.readFileSync(mdPath, 'utf8')
  const { data } = matter(source)

  return {
    title: `${data.title} - ${siteMetadata.author}`,
    description: data.summary || siteMetadata.description,
    openGraph: {
      title: data.title,
      description: data.summary,
      type: 'article',
      publishedTime: data.date,
      images: data.images?.length ? data.images : [siteMetadata.socialBanner],
    },
  }
}

function blogPostingJsonLd(frontMatter, url) {
  const publishedAt = new Date(frontMatter.date).toISOString()
  const modifiedAt = new Date(frontMatter.lastmod || frontMatter.date).toISOString()
  const images = frontMatter.images?.length
    ? frontMatter.images
    : [siteMetadata.socialBanner]
  const featuredImages = images.map((img) => ({
    '@type': 'ImageObject',
    url: img.includes('http') ? img : siteMetadata.siteUrl + img,
  }))

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline: frontMatter.title,
    image: featuredImages,
    datePublished: publishedAt,
    dateModified: modifiedAt,
    author: { '@type': 'Person', name: siteMetadata.author },
    publisher: {
      '@type': 'Organization',
      name: siteMetadata.author,
      logo: {
        '@type': 'ImageObject',
        url: `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
      },
    },
    description: frontMatter.summary,
  }
}

export default async function BlogSlugPage({ params: paramsPromise }) {
  const { slug } = await paramsPromise
  if (!slug) {
    return <div>Missing slug</div>
  }

  const allPosts = await getAllFilesFrontMatter('blog')
  const postIndex = allPosts.findIndex((post) => post.slug === slug)
  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null
  const post = await getFileBySlug('blog', slug)

  const jsonLd = blogPostingJsonLd(
    post.frontMatter,
    `${siteMetadata.siteUrl}/blog/${slug}`
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostClient post={post} prev={prev} next={next} />
    </>
  )
}