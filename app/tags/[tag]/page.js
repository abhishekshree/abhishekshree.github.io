import { kebabCase } from '@/lib/utils'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { getAllTags } from '@/lib/tags'
import ListLayout from '@/layouts/ListLayout'
import siteMetadata from '@/data/siteMetadata'

export async function generateMetadata({ params: paramsPromise }) {
  const { tag: tagSlug } = await paramsPromise
  const tag = tagSlug.charAt(0).toUpperCase() + tagSlug.slice(1).split('-').join(' ')
  return {
    title: `${tag} - ${siteMetadata.author}`,
    description: siteMetadata.description,
    alternates: {
      types: {
        'application/rss+xml': `${siteMetadata.siteUrl}/tags/${tagSlug}/index.xml`,
      },
    },
  }
}

export async function generateStaticParams() {
  const tags = await getAllTags('blog')
  return Object.keys(tags).map((tag) => ({ tag }))
}

export default async function Tag({ params: paramsPromise }) {
  const { tag: tagSlug } = await paramsPromise
  const allPosts = await getAllFilesFrontMatter('blog')
  const filteredPosts = allPosts.filter(
    (post) => post.draft !== true && post.tags.map((t) => kebabCase(t)).includes(tagSlug)
  )
  const title = tagSlug
    ? tagSlug.charAt(0).toUpperCase() + tagSlug.slice(1).split('-').join(' ')
    : ''

  return <ListLayout posts={filteredPosts} title={title} />
}