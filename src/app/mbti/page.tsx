'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

/**
 * 사랑 긍휼 유형 테스트. (편의상 MBTI 페이지로 부름)
 */
const MBTIPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/mbti/welcome')
  }, [])

  return null
}

export default MBTIPage
