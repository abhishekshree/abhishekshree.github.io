import siteMetadata from '@/data/siteMetadata'

export const metadata = {
  title: `Is the Mumbai Butter Real? - ${siteMetadata.author}`,
  description:
    'An independent, unofficial live tracker of Maharashtra FDA food-safety enforcement: licence suspensions, raids, seals and seizures, compiled daily from public Indian news.',
  openGraph: {
    title: 'Is the Mumbai Butter Real?',
    description:
      'Live FDA raids, suspensions & seizures across Maharashtra — compiled daily from public news, unofficial and independent.',
    type: 'website',
  },
}

export default function PwnedButter() {
  return (
    <iframe
      src="https://pwned-butter.vercel.app"
      title="Is the Mumbai Butter Real?"
      className="fixed inset-0 h-full w-full border-0 bg-white"
    />
  )
}