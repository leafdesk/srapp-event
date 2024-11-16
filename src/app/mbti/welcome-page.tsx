'use client'

import { useRouter } from 'next/navigation'
import Button from '@/components/button'

const WelcomePage = () => {
  const router = useRouter()

  return (
    <main className="h-screen bg-[url('/images/mbti_bg.svg')] bg-cover bg-center">
      {/* <main className="h-screen bg-gradient-to-b from-[#F596AA] to-[#FAD2EB]"> */}
      {/* blank */}
      <div className="h-[130px]" />

      <div className="h-[214px] bg-[url('/images/mbti_title.svg')] bg-contain bg-center bg-no-repeat" />

      {/* 나의 사랑 긍휼 유형은? */}
      {/* <div className="flex items-center justify-center">
        <div className="h-[30px] w-[220px] text-center flex items-center justify-center bg-white rounded-[10px] relative overflow-hidden">
          <span className="relative z-10 font-medium text-[#FC72BF] text-[15px]">
            나의 사랑 긍휼 유형은?
          </span>
          <div className="absolute inset-0 rounded-[10px] bg-gradient-to-b from-[#FF76C3] to-[#DA428D] p-[3px]"></div>
          <div className="absolute inset-[3px] rounded-[10px] bg-white"></div>
        </div>
      </div> */}

      {/* 사랑 긍휼 TEST 텍스트 */}
      {/* <div className="pt-[18px] flex flex-col gap-3 items-center justify-center">
        <img src="/images/mbti_title_1.svg" alt="사랑 긍휼" />
        <img src="/images/mbti_title_2.svg" alt="TEST" />
      </div> */}

      {/* 시작하기 버튼 */}
      {/* <div className="px-4 mt-10">
        <button
          onClick={() => router.push(`/mbti?page=guide`)}
          className="w-full h-[60px] rounded-lg flex items-center justify-center bg-[#FF3296] font-medium text-xl text-white"
        >
          시작하기
        </button>
      </div> */}
      <Button onClick={() => router.push(`/mbti?page=guide`)} text="시작하기" />
    </main>
  )
}

export default WelcomePage
