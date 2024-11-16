'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import WelcomePage from './welcome-page'
import GuidePage from './guide-page'
import ProfilePage from './profile-page'
import { Suspense, useEffect } from 'react'

/**
 * 사랑 긍휼 유형 테스트. (편의상 MBTI 페이지로 부름)
 */
const MBTIPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const page = searchParams.get('page')

  // 허용된 페이지 params 리스트.
  const validPages = ['welcome', 'guide', 'profile', 'test']

  // params가 없거나, 허용된 페이지가 아니면 welcome 페이지로 redirect.
  useEffect(() => {
    const redirectIfInvalidPage = () => {
      if (!page || !validPages.includes(page)) {
        router.replace('/mbti?page=welcome')
      }
    }

    redirectIfInvalidPage()
  }, [page, router])

  // 현재 페이지에 따른 컴포넌트 렌더링
  const renderCurrentPage = () => {
    switch (page) {
      case 'welcome':
        return <WelcomePage />
      case 'guide':
        return <GuidePage />
      case 'profile':
        return <ProfilePage />
      default:
        return null
    }
  }

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent"></div>
        </div>
      }
    >
      {renderCurrentPage()}
    </Suspense>
  )
}

export default MBTIPage
