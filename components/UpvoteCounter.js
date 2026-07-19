'use client'

import { useEffect, useState, useCallback } from 'react'
import siteMetadata from '@/data/siteMetadata'

const STORAGE_KEY = 'waline-upvotes'

function getUpvotedPaths() {
  if (typeof window === 'undefined') return new Set()
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return new Set(raw ? JSON.parse(raw) : [])
  } catch {
    return new Set()
  }
}

function setUpvotedPath(path) {
  const paths = getUpvotedPaths()
  paths.add(path)
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...paths]))
}

function removeUpvotedPath(path) {
  const paths = getUpvotedPaths()
  paths.delete(path)
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...paths]))
}

export default function UpvoteCounter({ path }) {
  const [count, setCount] = useState(0)
  const [upvoted, setUpvoted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setUpvoted(getUpvotedPaths().has(path))
    const base = siteMetadata.commentServerUrl.replace(/\/+$/, '')
    fetch(`${base}/api/article?path=${encodeURIComponent(path)}&type=reaction0`)
      .then((r) => r.json())
      .then((resp) => {
        const raw = Array.isArray(resp.data) ? resp.data[0] : resp.data
        const c = typeof raw === 'object' ? raw?.reaction0 : raw
        if (c !== undefined) setCount(c)
      })
      .catch(() => {})
  }, [path])

  const toggle = useCallback(async () => {
    if (loading) return
    setLoading(true)

    const base = siteMetadata.commentServerUrl.replace(/\/+$/, '')
    const action = upvoted ? 'desc' : 'inc'

    try {
      const r = await fetch(`${base}/api/article`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path, type: 'reaction0', action }),
      })
      const resp = await r.json()
      const raw = Array.isArray(resp.data) ? resp.data[0] : resp.data
      const newCount = typeof raw === 'object' ? raw?.reaction0 : raw
      if (newCount !== undefined) {
        setCount(newCount)
        if (action === 'inc') setUpvotedPath(path)
        else removeUpvotedPath(path)
        setUpvoted(action === 'inc')
      }
    } catch {
    } finally {
      setLoading(false)
    }
  }, [path, upvoted, loading])

  return (
    <button
      onClick={toggle}
      disabled={loading}
      className={`inline-flex items-center gap-1 text-xs transition-colors ${
        upvoted
          ? 'text-blue-600 dark:text-blue-400'
          : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
      }`}
    >
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill={upvoted ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
      </svg>
      {count}
    </button>
  )
}
