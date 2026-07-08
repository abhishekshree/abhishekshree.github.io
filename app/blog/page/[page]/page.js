import { getAllFilesFrontMatter } from '@/lib/mdx'
import ListLayout from '@/layouts/ListLayout'
import siteMetadata from '@/data/siteMetadata'

export const POSTS_PER_PAGE = 5

export async function generateStaticParams() {
  const posts = await getAllFilesFrontMatter('blog')
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  return Array.from({ length: totalPages - 1 }, (_, i) => ({
    page: String(i + 2),
  }))
}

export async function generateMetadata({ params: paramsPromise }) {
  const { page } = await paramsPromise
  return {
    title: `Blog - ${siteMetadata.author} (Page ${page})`,
    description: siteMetadata.description,
  }
}

export default async function BlogPage({ params: paramsPromise }) {
  const { page: pageStr } = await paramsPromise
  const posts = await getAllFilesFrontMatter('blog')
  const page = parseInt(pageStr)
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (page - 1),
    POSTS_PER_PAGE * page
  )
  const pagination = {
    currentPage: page,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Posts"
    />
  )
}
