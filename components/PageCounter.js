'use client'

import { useEffect, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'

export default function PageCounter({ path, className, readonly }) {
  const [views, setViews] = useState(0)

  useEffect(() => {
    const base = siteMetadata.commentServerUrl.replace(/\/+$/, '')
    const getUrl = `${base}/api/article?path=${encodeURIComponent(path)}&type=time`

    fetch(getUrl)
      .then((r) => r.json())
      .then((resp) => {
        const count = Array.isArray(resp.data) ? resp.data[0]?.time : resp.data?.time
        if (count !== undefined) setViews(count)

        if (!readonly) {
          return fetch(`${base}/api/article`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ path, type: 'time', action: 'inc' }),
          })
        }
      })
      .catch(() => {})
  }, [path, readonly])

  return (
    <span className={className}>
      <svg className="inline-block w-3.5 h-3.5 mr-1 -mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
      {views}
    </span>
  )
}
