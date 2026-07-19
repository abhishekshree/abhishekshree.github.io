'use client'

import { useEffect, useRef, useState } from 'react'
import { init } from '@waline/client'
import '@waline/client/style'
import siteMetadata from '@/data/siteMetadata'

export default function WalineComments({ path }) {
  const ref = useRef(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const originalAlert = window.alert
    window.alert = (msg) => setError(msg)

    const waline = init({
      el: ref.current,
      serverURL: siteMetadata.commentServerUrl,
      path: path?.replace(/\/+$/, '') || '/',
      lang: 'en',
      dark: 'html.dark',
      meta: ['nick', 'mail'],
      requiredMeta: ['nick'],
      pageSize: 10,
      login: 'disable',
      noRss: true,
      noCopyright: true,
      reaction: false,
    })

    return () => {
      window.alert = originalAlert
      waline?.destroy()
    }
  }, [path])

  return (
    <>
      {error && (
        <div className="mb-2 rounded border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-400">
          {error}
        </div>
      )}
      <div ref={ref} className={error ? 'waline-error' : ''} />
      <style>{`
        .waline-error .waline-comment-box textarea {
          border-color: #f87171 !important;
          background-color: #fef2f2 !important;
        }
        .waline-error .waline-comment-box textarea:focus {
          border-color: #ef4444 !important;
          box-shadow: 0 0 0 2px rgba(239,68,68,0.15) !important;
        }
        .dark .waline-error .waline-comment-box textarea {
          background-color: #1c1010 !important;
          border-color: #7f1d1d !important;
        }
        .dark .waline-error .waline-comment-box textarea:focus {
          border-color: #b91c1c !important;
          box-shadow: 0 0 0 2px rgba(185,28,28,0.25) !important;
        }
      `}</style>
    </>
  )
}
