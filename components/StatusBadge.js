'use client'

import { useState, useEffect, useRef } from 'react'

export default function StatusBadge({ title, links, children }) {
  const [flipped, setFlipped] = useState(false)
  const timer = useRef(null)

  useEffect(() => {
    if (flipped) {
      timer.current = setTimeout(() => setFlipped(false), 5000)
    }
    return () => clearTimeout(timer.current)
  }, [flipped])

  return (
    <div className="relative" style={{ perspective: '1000px' }}>
      <div
        className="relative transition-transform duration-700 ease-in-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        <div style={{ backfaceVisibility: 'hidden' }}>{children}</div>
        <div
          className="absolute inset-0 w-60 h-60 rounded-full bg-gray-50 dark:bg-neutral-900/90 flex flex-col items-center justify-center p-8 text-center shadow-xl ring-1 ring-gray-200 dark:ring-neutral-700"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="font-mono font-semibold text-sm text-green-600 dark:text-green-400 mb-2 leading-tight">
            {title}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Building{' '}
            <a
              href={links[0].href}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              {links[0].text}
            </a>{' '}
            & benchmarking memory layouts in{' '}
            <a
              href={links[1].href}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              {links[1].text}
            </a>
            .
          </p>
        </div>
      </div>

      <button
        className="absolute z-10 cursor-pointer"
        style={{ right: '18px', bottom: '18px' }}
        onClick={(e) => { e.stopPropagation(); setFlipped(!flipped) }}
        title={title}
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-700 ring-2 ring-white dark:ring-neutral-900 text-sm leading-none select-none shadow-sm">
          💻
        </span>
      </button>
    </div>
  )
}