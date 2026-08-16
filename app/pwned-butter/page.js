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
    <div className="flex flex-col">
      <div className="space-y-2 pb-6">
        <h1 className="text-2xl mono font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl">
          Is the Mumbai Butter Real?
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          A live, unofficial tracker of Maharashtra FDA food-safety enforcement — licence
          suspensions, stop-business orders, seals, seizures and re-openings at restaurants,
          hotels, dhabas and quick-commerce dark stores. Records are built daily from public
          news reporting and link back to their source articles. Not affiliated with any
          government body; use as a reference only.
        </p>
      </div>
      <div className="flex flex-col h-[calc(100vh-14rem)] min-h-[28rem]">
        <iframe
          src="https://pwned-butter.vercel.app"
          title="Is the Mumbai Butter Real?"
          className="w-full grow rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
          loading="lazy"
        />
        <a
          href="https://pwned-butter.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 text-right mono text-sm underline underline-offset-4 decoration-dotted hover:decoration-solid text-gray-500 dark:text-gray-400"
        >
          open the tracker in a new tab ↗
        </a>
      </div>
    </div>
  )
}