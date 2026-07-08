import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Link from '@/components/Link'

export const metadata = {
  title: `Contact - ${siteMetadata.author}`,
  description: 'Get in touch with me.',
}

export default function Contact() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-neutral-700">
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 className="text-3xl mono font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Contact
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Feel free to reach out to me via email or social media.
        </p>
      </div>
      <div className="container prose max-w-none grid md:grid-cols-2 grid-cols-1 dark:prose-invert">
        <div>
          <h2 className="text-xl font-bold">Email</h2>
          abhishek[dot]shree[at]outlook[dot]com <br />
          <span style={{textDecoration: 'line-through'}}> shreea20[at]iitk[dot]ac[dot]in </span> <br /> <br />
        </div>
        <div>
          <h2 className="text-xl font-bold">Socials</h2>
          <div className="flex mb-3 space-x-6">
            <SocialIcon kind="facebook" href={siteMetadata.facebook} size="10" />
            <SocialIcon kind="discord" href={siteMetadata.discord} size="10" />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="10" />
            <SocialIcon kind="twitter" href={siteMetadata.twitter} size="10" />
            <SocialIcon kind="instagram" href={siteMetadata.instagram} size="10" />
            <SocialIcon kind="github" href={siteMetadata.github} size="10" />
          </div>
        </div>
      </div>
      <br />
      You can also write me a message{' '}
      <Link href="https://forms.gle/vh7DzwMwKxGXXKiB9"> here. </Link>
    </div>
  )
}