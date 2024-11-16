'use client'

import { redirect, useSearchParams } from 'next/navigation'
import WelcomePage from './welcome-page'
import GuidePage from './guide-page'
import ProfilePage from './profile-page'
import { Suspense } from 'react'

/**
 * 사랑 긍휼 유형 테스트. (편의상 MBTI 페이지로 부름)
 */
const MBTIPage = () => {
  const searchParams = useSearchParams()
  const page = searchParams.get('page')

  // 허용된 페이지 params 리스트.
  const validPages = ['welcome', 'guide', 'profile', 'test']
  // params가 없거나, 허용된 페이지가 아니면 welcome 페이지로 redirect.
  if (!page || !validPages.includes(page)) {
    redirect('/mbti?page=welcome')
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {page === 'welcome' && <WelcomePage />}
      {page === 'guide' && <GuidePage />}
      {page === 'profile' && <ProfilePage />}
    </Suspense>
  )
}

export default MBTIPage
