'use client'

import { MDXClient } from 'next-mdx-remote-client'
import PostLayout from '@/layouts/PostLayout'
import MDXComponents from '@/components/MDXComponents'
import PageTitle from '@/components/PageTitle'

export default function BlogPostClient({ post, prev, next }) {
  const { mdxSource, frontMatter } = post
  const content = <MDXClient {...mdxSource} components={MDXComponents} />

  if (frontMatter.draft === true) {
    return (
      <div className="mt-24 text-center">
        <PageTitle>
          Under Construction{' '}
          <span role="img" aria-label="roadwork sign">
            🚧
          </span>
        </PageTitle>
      </div>
    )
  }

  return (
    <PostLayout frontMatter={frontMatter} prev={prev} next={next}>
      {content}
    </PostLayout>
  )
}