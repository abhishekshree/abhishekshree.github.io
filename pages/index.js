import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

export default function About() {
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
                style={{ textDecoration: 'none', color: 'lightblue' }}
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
              into real life applications, it has a lot of unexplored potential and yeah, a lot of
              math too :/
            </p>
            <p>
              Apart from my daily endeavor to be a better developer, I can be found reading books on
              vivid topics, solving my Rubik's cube, vibing to Ed and Taylor.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
