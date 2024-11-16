import Button from '@/components/button'
import ProgressBar from '@/components/progress-bar'

const RATE = 10

const GuidePage = () => {
  return (
    <main className="h-screen bg-[url('/images/mbti_bg_2.svg')] bg-cover bg-center">
      {/* 페이지 헤더 */}
      <h3 className="h-[52px] flex items-center justify-center font-medium text-base text-white mb-2.5">
        사랑 긍휼 유형 테스트
      </h3>

      {/* 진행률 상태 바 */}
      <ProgressBar rate={RATE} />
      <span className="font-normal text-lg text-center text-white w-full block">
        {RATE}%
      </span>

      {/* blank */}
      <div className="h-[150px]" />

      {/* 가이드 글 */}
      <div className="grid text-center">
        <strong className="font-semibold text-[22px] text-white mb-5">
          나의 사랑 긍휼 유형은 무엇일까?
        </strong>

        <span className="grid text-center font-normal text-lg text-white">
          <span>제시되는 질문에 응답해 주세요.</span>
          <span>테스트의 정확도를 위해 빠르게 응답해 주세요.</span>
          <span>테스트에는 약 5분이 소요됩니다.</span>
        </span>
      </div>

      {/* 하단 버튼 */}
      <div className="pb-5 fixed bottom-0 w-full">
        <Button onClick={() => {}} text="다음" />
      </div>
    </main>
  )
}

export default GuidePage
