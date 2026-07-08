import Link from '@/components/Link'

const btnBase =
  'inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200'

const btnEnabled =
  'border-gray-300 dark:border-neutral-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:border-gray-400 dark:hover:border-neutral-600 active:scale-[0.97]'

const btnDisabled =
  'border-gray-200 dark:border-neutral-800 text-gray-400 dark:text-neutral-600 cursor-not-allowed'

function PaginationLink({ href, children }) {
  return (
    <Link href={href} scroll={false}>
      <span className={`${btnBase} ${btnEnabled} cursor-pointer`}>{children}</span>
    </Link>
  )
}

export default function Pagination({ totalPages, currentPage }) {
  const hasPrev = parseInt(currentPage) - 1 > 0
  const hasNext = parseInt(currentPage) + 1 <= parseInt(totalPages)

  return (
    <nav className="flex items-center justify-between pt-6 pb-8">
      {hasPrev ? (
        <PaginationLink href={currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Previous
        </PaginationLink>
      ) : (
        <span className={`${btnBase} ${btnDisabled}`}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Previous
        </span>
      )}

      <span className="text-sm tabular-nums text-gray-500 dark:text-gray-400">
        {currentPage} / {totalPages}
      </span>

      {hasNext ? (
        <PaginationLink href={`/blog/page/${currentPage + 1}`}>
          Next
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </PaginationLink>
      ) : (
        <span className={`${btnBase} ${btnDisabled}`}>
          Next
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      )}
    </nav>
  )
}
