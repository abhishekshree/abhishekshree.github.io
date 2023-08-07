import { useEffect } from 'react'
import { useRouter } from 'next/router'

const cv = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace('/static/cv/cv.pdf')
  }, [router])

  return null
}

export default cv
