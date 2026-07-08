import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import Link from '@/components/Link'
import StatusBadge from '@/components/StatusBadge'

export const metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
}

const MAX_DISPLAY = 3

function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteMetadata.author,
    url: siteMetadata.siteUrl,
    image: `${siteMetadata.siteUrl}${siteMetadata.image}`,
    sameAs: [
      siteMetadata.github,
      siteMetadata.twitter,
      siteMetadata.facebook,
      siteMetadata.linkedin,
      siteMetadata.instagram,
    ],
  }
}

export default async function About() {
  const posts = await getAllFilesFrontMatter('blog')
  const jsonLd = personJsonLd()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="divide-y">
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2 animate-fade-in-up">
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

          <div className="pt-8 pb-8 prose max-w-none xl:col-span-2 dark:prose-invert">
            <h1 className="serif text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14 animate-fade-in-up">
              <span
                className="inline-block"
                style={{ animationDuration: '0.4s', animationIterationCount: 1 }}
              >
                👋
              </span>{' '}
              Namaste!
            </h1>

            <div className="animate-fade-in-up animation-delay-100">
              <p>
                I am Abhishek Shree, a graduate from the Indian Institute of Technology Kanpur. My
                interests are manifold and are constantly evolving, I take a particular interest in
                Programming Languages, Systems and Quantitative Finance. I work at QRT now, helping
                them trade more and more markets, while learning a lot about markets through the
                process. I also find myself use a lot of Rust recently, which I find interesting.
                Free free to drop a Hi if you want to chat about any of these!
              </p>
              <p>
                In my past life, I used to dabble around math (mostly abstract) through my
                coursework or solving some puzzles here and there. Apart from those, I tend to
                consume a lot of pop culture and read, at a concerningly fast pace. I also love to
                travel and click abstract photos every now and then.
              </p>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 animate-fade-in-up animation-delay-200">
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

              <div>
                <div className="leading-none">
                  <p className="antialiased font-mono font-semibold text-xs uppercase tracking-widest text-gray-500">
                    Education
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="pl-3 border-l-2 border-blue-400 dark:border-blue-500">
                    <div className="leading-tight font-bold">BS Economic Sciences, 2024</div>
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
