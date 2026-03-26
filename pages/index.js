import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSEO } from '@/components/SEO'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import Link from '@/components/Link'

const MAX_DISPLAY = 3
// const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

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
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img
              src={siteMetadata.image}
              alt="avatar"
              className="w-60 h-60 rounded-full object-cover shadow-xl ring-2 ring-gray-200 dark:ring-gray-800"
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
            <div className="flex pt-6 space-x-3">
              {/* <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} /> */}
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="facebook" href={siteMetadata.facebook} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
              {/* <SocialIcon kind="cv" href={siteMetadata.cv} /> */}
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <h1 className="serif text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">
              Namaste!
            </h1>
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
            <div className="grid md:grid-cols-2 grid-cols-1">
              <div className="mr-5">
                <p className="antialiased font-bold text-lg leading-tight uppercase tracking-wide text-gray-500"> Recently I wrote</p>
                {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
                  const { slug, date, title, summary, tags } = frontMatter
                  return (
                    <div className="font-bold leading-tight" key={slug}>
                      <Link
                        href={`/blog/${slug}`}
                        className="text-gray-900 dark:text-gray-100"
                        style={{ textDecoration: 'none' }}
                      >
                        <div>{title}</div>
                      </Link>
                      <br />
                    </div>
                  )
                })}
                {/* all posts button
                <div className="pt-0 align-text-bottom	float-right">
                  <Link
                    href="/blog"
                    className="text-gray-900 dark:text-gray-100"
                    style={{ textDecoration: 'none' }}
                  >
                    <div style={{ lineHeight: 2.8 }} className="pr-2">
                      All Posts ➜
                    </div>
                  </Link>
                </div> */}
              </div>
              <div>
                <div className="leading-none">
                  <p className="antialiased font-bold text-lg leading-tight uppercase tracking-wide text-gray-500"> Education </p>
                </div>
                <div className="">
                  <div>
                    <div className="leading-tight font-semibold ">
                      BS Economic Sciences, 2024
                    </div>
                    <div className="leading-none text-sm text-gray-500">
                      Indian Institute of Technology, Kanpur
                    </div>
                  </div>
                </div>
                <br />
                <div>
                  <div className="leading-tight font-semibold">AISSCE - XII, 2020</div>
                  <div className="leading-none text-sm text-gray-500">
                    Loyola High School, Patna
                  </div>
                </div>
                <br />
                <div>
                  <div className="leading-tight font-semibold ">CBSE - X, 2018</div>
                  <div className="leading-none text-sm text-gray-500">
                    Loyola High School, Patna
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
