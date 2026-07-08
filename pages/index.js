import siteMetadata from '@/data/siteMetadata'

import { PageSEO } from '@/components/SEO'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import Link from '@/components/Link'
import { useState, useEffect, useRef } from 'react'

function StatusBadge({ title, links, children }) {
  const [flipped, setFlipped] = useState(false)
  const timer = useRef(null)

  useEffect(() => {
    if (flipped) {
      timer.current = setTimeout(() => setFlipped(false), 5000)
    }
    return () => clearTimeout(timer.current)
  }, [flipped])

  return (
    <div className="relative" style={{ perspective: '1000px' }}>
      <div
        className="relative transition-transform duration-700 ease-in-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front — avatar */}
        <div style={{ backfaceVisibility: 'hidden' }}>{children}</div>

        {/* Back — status content */}
        <div
          className="absolute inset-0 w-60 h-60 rounded-full bg-gray-50 dark:bg-neutral-900/90 flex flex-col items-center justify-center p-8 text-center shadow-xl ring-1 ring-gray-200 dark:ring-neutral-700"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="font-mono font-semibold text-sm text-green-600 dark:text-green-400 mb-2 leading-tight">
            {title}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Building{' '}
            <a
              href={links[0].href}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              {links[0].text}
            </a>{' '}
            & benchmarking memory layouts in{' '}
            <a
              href={links[1].href}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              {links[1].text}
            </a>
            .
          </p>

        </div>
      </div>

      <button
        className="absolute z-10 cursor-pointer"
        style={{ right: '18px', bottom: '18px' }}
        onClick={(e) => { e.stopPropagation(); setFlipped(!flipped) }}
        title={title}
      >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-700 ring-2 ring-white dark:ring-neutral-900 text-sm leading-none select-none shadow-sm">
            💻
        </span>
      </button>
    </div>
  )
}

const MAX_DISPLAY = 3

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function About({ posts }) {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <div className="divide-y">
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          {/* ── Left column: Avatar & meta ── */}
          <div className="flex flex-col items-center pt-8 space-x-2 animate-fade-in-up">
            {/* Avatar with GitHub-style status badge */}
            <StatusBadge
              title="On the side I am"
              links={[
                { text: 'tokio-fsm', href: 'https://crates.io/crates/tokio-fsm' },
                { text: 'microbench', href: 'https://abhishekshree.github.io/microbench/' },
              ]}
            >
              <img
                src={siteMetadata.image}
                alt="Abhishek Shree"
                className="w-60 h-60 rounded-full object-cover shadow-xl glow-ring"
              />
            </StatusBadge>
            <h3 className="pt-4 pb-2 mono text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 mono text-sm dark:text-gray-400">
              Quant Technologist at QRT
            </div>
            <div className="text-gray-500 mono text-xs dark:text-gray-400">
              <a
                href="https://iitk.ac.in"
                style={{ textDecoration: 'none', color: '#708090' }}
                target="_blank"
                rel="noreferrer"
              >
                Indian Institute of Technology Kanpur
              </a>
            </div>
          </div>

          {/* ── Right column: Bio & content ── */}
          <div className="pt-8 pb-8 prose max-w-none xl:col-span-2 dark:prose-invert">
            {/* Greeting */}
            <h1 className="serif text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14 animate-fade-in-up">
              <span className="inline-block" style={{ animationDuration: '0.4s', animationIterationCount: 1 }}>👋</span>{' '}
              Namaste!
            </h1>

            {/* Bio paragraphs */}
            <div className="animate-fade-in-up animation-delay-100">
              <p>
                I am Abhishek Shree, a graduate from the Indian Institute of Technology Kanpur. My
                interests are manifold and are constantly evolving, I take a particular interest
                in Programming Languages, Systems and Quantitative Finance. I work at QRT now, helping them
                trade more and more markets, while learning a lot about markets through the process. I also find myself
                use a lot of Rust recently, which I find interesting. Free free to drop a Hi if you want to chat about any of these!
              </p>
              <p>
                In my past life, I used to dabble around math (mostly abstract) through my coursework
                or solving some puzzles here and there. Apart from those, I tend to consume a lot of pop culture and read, at a concerningly fast pace.
                I also love to travel and click abstract photos every now and then.
              </p>
            </div>

            {/* Grid: Recent posts + Education */}
            <div className="grid md:grid-cols-2 grid-cols-1 animate-fade-in-up animation-delay-200">
              {/* Recently I Wrote */}
              <div className="mr-5">
                <p className="antialiased font-mono font-semibold text-xs uppercase tracking-widest text-gray-500">
                  Recently I wrote
                </p>
                <div className="space-y-3">
                  {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
                    const { slug, title } = frontMatter
                    return (
                      <Link
                        key={slug}
                        href={`/blog/${slug}`}
                        className="text-gray-900 dark:text-gray-100"
                        style={{ textDecoration: 'none' }}
                      >
                        <div className="blog-card px-3 py-2.5 -mx-3 rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-800 dark:hover:bg-neutral-800/50 flex items-center justify-between group">
                          <span className="font-bold leading-tight">{title}</span>
                          <span className="arrow-slide text-gray-400 dark:text-gray-600 ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                            →
                          </span>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* Education */}
              <div>
                <div className="leading-none">
                  <p className="antialiased font-mono font-semibold text-xs uppercase tracking-widest text-gray-500">
                    Education
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="pl-3 border-l-2 border-blue-400 dark:border-blue-500">
                    <div className="leading-tight font-bold">
                      BS Economic Sciences, 2024
                    </div>
                    <div className="leading-none text-sm text-gray-500">
                      Indian Institute of Technology, Kanpur
                    </div>
                  </div>
                  <div className="pl-3 border-l-2 border-gray-300 dark:border-neutral-700">
                    <div className="leading-tight font-bold">AISSCE - XII, 2020</div>
                    <div className="leading-none text-sm text-gray-500">
                      Loyola High School, Patna
                    </div>
                  </div>
                  <div className="pl-3 border-l-2 border-gray-300 dark:border-neutral-700">
                    <div className="leading-tight font-bold">CBSE - X, 2018</div>
                    <div className="leading-none text-sm text-gray-500">
                      Loyola High School, Patna
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
