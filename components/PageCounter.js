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

  return <span className={className}>{views} views</span>
}
