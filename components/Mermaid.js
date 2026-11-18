'use client'

import { useEffect, useId, useRef } from 'react'
import { useTheme } from 'next-themes'

// Renders ```mermaid fences client-side; mermaid is ~1MB so it is only fetched
// on pages that actually contain a diagram.
export default function Mermaid({ chart }) {
  const ref = useRef(null)
  const id = useId().replace(/[^a-zA-Z0-9]/g, '')
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    let cancelled = false

    import('mermaid')
      .then(({ default: mermaid }) => {
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'strict',
          theme: resolvedTheme === 'dark' ? 'dark' : 'neutral',
        })
        return mermaid.render(`mermaid-${id}-${resolvedTheme}`, chart)
      })
      .then(({ svg }) => {
        if (!cancelled && ref.current) ref.current.innerHTML = svg
      })
      .catch((err) => {
        if (!cancelled && ref.current) {
          ref.current.textContent = `Diagram failed to render: ${err.message}`
        }
      })

    return () => {
      cancelled = true
    }
  }, [chart, id, resolvedTheme])

  return <div ref={ref} className="mermaid my-6 flex justify-center" />
}
