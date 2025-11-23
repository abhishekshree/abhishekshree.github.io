import { useEffect } from 'react'
import { useRouter } from 'next/router'

const ugp = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace('/static/ugp/ugp.pdf')
  }, [router])

  return null
}

export default ugp
