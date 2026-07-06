// import Image from 'next/image'
import Link from '@/components/Link'

const Card = ({ title, description, imgSrc, href }) => {
  let domain = ''
  if (href) {
    try {
      if (href.startsWith('/') || href.startsWith('#')) {
        domain = 'internal'
      } else {
        domain = new URL(href).hostname.replace('www.', '')
      }
    } catch (e) {
      domain = ''
    }
  }

  return (
    <div className="flex flex-col h-full group">
      {imgSrc && (
        <div
          style={{ aspectRatio: '16/10' }}
          className="relative w-full rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800 mb-3.5"
        >
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              <img
                alt={title}
                src={imgSrc}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          ) : (
            <img
              alt={title}
              src={imgSrc}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      )}
      <div className="flex flex-col flex-grow">
        <h2 className="text-base font-bold tracking-tight text-gray-900 dark:text-gray-100 group-hover:text-blue-500 transition-colors">
          {href ? (
            <Link
              href={href}
              aria-label={`Link to ${title}`}
              style={{ textDecoration: 'none' }}
              className="hover:text-blue-500 transition-colors"
            >
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        {domain && (
          <span className="text-xs text-gray-400 dark:text-gray-500 font-mono mb-1.5">
            {domain}
          </span>
        )}
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Card
