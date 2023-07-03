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
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
            <h3 className="pt-4 pb-2 mono text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 mono text-xs dark:text-gray-400">
              Fourth Year Undergraduate Student
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
            <h1 className="mono text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Namaste!
            </h1>
            <p>
              I am Abhishek Shree, a Senior at the Indian Institute of Technology Kanpur. My
              interests are manifold and are constantly evolving, recently I take a particular interest 
              in Programming Languages, Systems, and Quantitative Finance.
            </p>
            <p>
              When not doing any of those I find myself dabbling around math (mostly abstract) through my coursework
              or solving some puzzles here and there. I also have developed an appreciation for blogs and podcasts
              pertaining to tech, geopolitics, and stories around financial markets recently.
            </p>
            <p>
              Apart from those, I tend to consume a lot of pop culture and read, at a concerningly fast pace at times.
              I also love to travel and click abstract photos every now and then. If not that, I can also 
              be found solving my Rubik's cube or vibing{' '}
              <Link href="https://open.spotify.com/playlist/37i9dQZF1DXaQm3ZVg9Z2X">to this.</Link>
            </p>
            <div className="grid md:grid-cols-2 grid-cols-1">
              <div className="mr-5">
                <p className="antialiased font-black text-lg leading-tight"> Recently I wrote</p>
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
                  <p className="antialiased font-black text-lg leading-tight"> Education </p>
                </div>
                <div className="">
                  <div>
                    <div className="leading-tight font-semibold ">
                      BS Economic Sciences, 2024 (Expected)
                    </div>
                    <div className="leading-none text-sm text-gray-500">
                      Indian Institute of Technology, Kanpur
                    </div>
                  </div>
                </div>
                <br />
                <div>
                  <div className="leading-tight font-semibold">AISSCE – XII, 2020</div>
                  <div className="leading-none text-sm text-gray-500">
                    Loyola High School, Patna
                  </div>
                </div>
                <br />
                <div>
                  <div className="leading-tight font-semibold ">CBSE – X, 2018</div>
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
