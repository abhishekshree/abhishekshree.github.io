import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSEO } from '@/components/SEO'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import Link from '@/components/Link'

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
            <img
              src={siteMetadata.image}
              alt="avatar"
              className="w-60 h-60 rounded-full object-cover shadow-xl glow-ring"
            />
            <h3 className="pt-4 pb-2 mono text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 mono text-xs dark:text-gray-400">
              Quant Technologist at QRT
            </div>
            <div className="text-gray-500 mono text-xs dark:text-gray-400">
              <a
                href="https://iitk.ac.in"
                style={{ textDecoration: 'none', color: 'slate' }}
                target="_blank"
                rel="noreferrer"
              >
                Indian Institute of Technology Kanpur
              </a>
            </div>

            {/* Focusing on card */}
            <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-30 rounded-lg border border-gray-150 dark:border-gray-800 text-xs w-full max-w-[240px] animate-fade-in-up animation-delay-200">
              <div className="flex items-center space-x-2 mb-2 font-mono font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span>On the side I am</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-sans">
                Building{' '}
                <Link
                  href="https://crates.io/crates/tokio-fsm"
                  style={{ textDecoration: 'underline' }}
                  className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  tokio-fsm
                </Link>{' '}
                & benchmarking memory layouts in{' '}
                <Link
                  href="https://abhishekshree.github.io/microbench/"
                  style={{ textDecoration: 'underline' }}
                  className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  microbench
                </Link>
                .
              </p>
            </div>
          </div>

          {/* ── Right column: Bio & content ── */}
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
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
                <p className="antialiased font-bold text-lg leading-tight uppercase tracking-wide text-gray-500">
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
                        <div className="blog-card px-3 py-2.5 -mx-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:bg-opacity-50 flex items-center justify-between group">
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
                  <p className="antialiased font-bold text-lg leading-tight uppercase tracking-wide text-gray-500">
                    Education
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="pl-3 border-l-2 border-blue-400 dark:border-blue-500">
                    <div className="leading-tight font-semibold">
                      BS Economic Sciences, 2024
                    </div>
                    <div className="leading-none text-sm text-gray-500">
                      Indian Institute of Technology, Kanpur
                    </div>
                  </div>
                  <div className="pl-3 border-l-2 border-gray-300 dark:border-gray-700">
                    <div className="leading-tight font-semibold">AISSCE - XII, 2020</div>
                    <div className="leading-none text-sm text-gray-500">
                      Loyola High School, Patna
                    </div>
                  </div>
                  <div className="pl-3 border-l-2 border-gray-300 dark:border-gray-700">
                    <div className="leading-tight font-semibold">CBSE - X, 2018</div>
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
