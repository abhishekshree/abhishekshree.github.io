import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'
import Link from '@/components/Link'
import { getAllFilesFrontMatter } from '@/lib/mdx'

const MAX_DISPLAY = 2
const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function About({ posts }) {
  return (
    <>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="bree-head text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Namaste!
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">First Year Undergraduate Student</div>
            <div className="text-gray-500 dark:text-gray-400">
              <a
                href="https://iitk.ac.in"
                style={{ textDecoration: 'none', color: 'slate' }}
                target="_blank"
                rel="noreferrer"
              >
                Indian Institute of Technology, Kanpur
              </a>
            </div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="facebook" href={siteMetadata.facebook} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              I am Abhishek Shree, a first-year undergrad at the Indian Institute of Technology,
              Kanpur. I am interested in web development, design tools and pretty much anything
              about technology fascinates me.
            </p>
            <p>
              I like{' '}
              <a
                href="https://www.stopstalk.com/user/profile/shree_e"
                style={{ textDecoration: 'none' }}
                target="_blank"
                rel="noreferrer"
              >
                competitive programming
              </a>{' '}
              at times, also I am currently learning how to apply deep learning and computer vision
              into real products, it has a lot of unexplored potential and yeah, a lot of math too.
              Also, I love doing the devOps stuff now and then.
            </p>
            <p>
              Apart from my daily endeavor to be a better developer, I can be found reading books on
              vivid topics, solving my Rubik's cube, vibing to{' '}
              <a
                href="https://open.spotify.com/playlist/3Ev3P5Fq9CGHAP4brUrtYz"
                style={{ textDecoration: 'none' }}
                target="_blank"
                rel="noreferrer"
              >
                Ed and Taylor.
              </a>
            </p>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <hr/>
      {/* Next Section */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* My way */}
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            {/* Left Part */}
            <div className="pt-6 pb-8 space-y-2 md:space-y-5">
              <br/>
              <h1 className="bree-head text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
                Latest Posts
              </h1>
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            {/* Right part */}
              {!posts.length && 'No posts found.'}
              {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
                const { slug, date, title, summary, tags } = frontMatter
                return (
                    <article>
                      <div className="space-y-1 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                        <dl>
                          <dt className="sr-only">Published on</dt>
                          <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                            <time dateTime={date}>
                              {new Date(date).toLocaleDateString(
                                siteMetadata.locale,
                                postDateTemplate
                              )}
                            </time>
                          </dd>
                        </dl>
                        <div className="space-y-5 xl:col-span-3">
                          <div className="space-y-6">
                            <div>
                              <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                <Link
                                  href={`/blog/${slug}`}
                                  className="text-gray-900 dark:text-gray-100"
                                  style={{
                                    textDecoration:'none'
                                  }}
                                >
                                  {title}
                                </Link>
                              </h2>
                            </div>
                            <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                              {summary}
                            </div>
                          </div>
                          <div className="text-base font-medium leading-6">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                              aria-label={`Read "${title}"`}
                              style={{ textDecoration: 'none' }}
                            >
                              Read more &rarr;
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                )
              })}

          </div>
        </div>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
