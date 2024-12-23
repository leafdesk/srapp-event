'use client'

import { useRouter } from 'next/navigation'
import MBTIListRow from './mbti-list-row'
import mbtiTypes from '../result/mbti-types'
import { LOCAL_STORAGE_RESULT_KEY } from '../test/constants'

const MBTIExplorePage = () => {
  const router = useRouter()

  return (
    <>
      {/* 페이지 헤더 */}
      <div className="fixed top-0 left-0 right-0 flex items-center justify-between mb-4 px-4 bg-white z-10">
        <button
          onClick={() => {
            const result = localStorage.getItem(LOCAL_STORAGE_RESULT_KEY)
            router.push(`/mbti/result?p=${result}`)
          }}
          className="text-[#8732FF] text-medium text-base"
        >
          <div className="w-[26px] h-[26px] bg-center bg-no-repeat bg-[url('/icons/arrow_back_ios.svg')] bg-contain" />
        </button>

        <h3 className="h-[52px] flex items-center justify-center font-medium text-base text-[#222]">
          사랑·긍휼 유형 둘러보기
        </h3>

        {/* blank */}
        <div className="h-[26px] w-[26px]" />
      </div>

      {/* blank */}
      <div className="h-[52px]" />

      <div className="flex flex-col divide-y divide-[#E5E5E5]">
        {mbtiTypes.map((mbtiType) => (
          <MBTIListRow
            key={mbtiType.id}
            mbtiId={mbtiType.id}
            mbtiTitle={mbtiType.title}
          />
        ))}
      </div>
    </>
  )
}

export default MBTIExplorePage
