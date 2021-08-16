import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import Link from '@/components/Link'

const MAX_DISPLAY = 2
// const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

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
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
            <h3 className="pt-4 pb-2 mono text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 mono text-xs dark:text-gray-400">
              Second Year Undergraduate Student
            </div>
            <div className="text-gray-500 mono text-xs dark:text-gray-400">
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
            <h1 className="mono text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Namaste!
            </h1>
            <p>
              I am Abhishek Shree, a sophomore at the Indian Institute of Technology,
              Kanpur. I am interested in deep learning, full stack web development and pretty much anything about technology fascinates me.
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
              at times. Currently my major interests include Deep Learning and Functional Programming (just got started with CIS194, loved it). I love to learn random things now and then, be it about the web, <a href="https://github.com/abhishekshree/DOTFILES" style={{ textDecoration: 'none' }} target="_blank" rel="noreferrer"> linux </a> or even vim xD. I am also exploring the field of Robotics by being a part of {' '}
              <a
                href="https://auv.sntiitk.in/"
                style={{ textDecoration: 'none' }}
                target="_blank"
                rel="noreferrer"
              > 
                AUV IITK. 
              </a>
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

            <div className="grid md:grid-cols-2 grid-cols-1">
              <div>
                <p className="antialiased font-black text-lg"> Recently I wrote: </p>
                {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
                  const { slug, date, title, summary, tags } = frontMatter
                  return (
                      <div className="font-bold leading-8 tracking-tight" key={slug}>
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                              style={{ textDecoration: 'none'}}
                            >
                              <div style={{ lineHeight:1.5 }}>
                                {title}
                              </div>
                            </Link>
                            <br />
                      </div>
                  )
                })}
              </div>
              <div>
                <div className="leading-none">
                  <p className="antialiased font-black text-lg leading-tight"> Education </p>
                </div>
                <div className="">
                  <div>
                    <div className="leading-tight font-semibold ">
                      BS Economics, 2024 (Expected)
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
