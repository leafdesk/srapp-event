'use client'

import Button from '@/components/button'
import Modal from '@/components/modal'
import MBTIQuestion from './mbti-question'
import { mbtiQuestions } from './questions'
import { useRouter } from 'next/navigation'
import ProgressBar from '@/components/progress-bar'
import { useCallback, useState } from 'react'

const MBTITestPage = () => {
  const router = useRouter()

  const [answers, setAnswers] = useState<{ [key: number]: number | null }>({})
  const [isModalOpen, setIsModalOpen] = useState(false)
  const totalQuestions = mbtiQuestions.length
  const rate =
    20 +
    (Object.values(answers).filter((answer) => answer !== null).length * 80) /
      totalQuestions

  const handleAnswerChange = useCallback((id: number, value: number) => {
    setAnswers((prev) => ({ ...prev, [id]: value }))
  }, [])

  const handleSubmit = useCallback(() => {
    if (rate < 100) {
      setIsModalOpen(true)
    } else {
      console.log(JSON.stringify(answers))
      router.push('/mbti/result')
    }
  }, [answers, rate, router])

  return (
    <>
      {/* 상단 고정 섹션 */}
      <div className="fixed top-0 left-0 right-0 z-[10] bg-white">
        {/* 페이지 헤더 */}
        <div className="flex items-center justify-between mb-2.5 px-4">
          <button
            onClick={() => router.push('/mbti/welcome')}
            className="text-[#8732FF] text-medium text-base"
          >
            처음으로
          </button>

          <h3 className="h-[52px] flex items-center justify-center font-medium text-base text-[#222]">
            사랑 긍휼 유형 테스트
          </h3>

          {/* blank */}
          <div className="h-6 w-[60px]" onClick={() => console.log(answers)} />
        </div>

        {/* 진행률 상태 바 */}
        <div className="px-4">
          <ProgressBar rate={rate} />
        </div>
        <span className="font-normal text-lg text-center text-[#222] w-full block pb-2">
          {rate}%
        </span>
      </div>

      {/* blank */}
      <div className="h-[100px]" />

      {/* MBTI 질문 섹션 */}
      <div className="divide-y">
        {mbtiQuestions.map((question) => (
          <MBTIQuestion
            key={question.id}
            id={question.id}
            question={question.text}
            onAnswerChange={handleAnswerChange}
          />
        ))}
      </div>

      {/* blank */}
      <div className="h-[120px]" />

      {/* 하단 버튼 */}
      <div className="pb-5 fixed bottom-0 w-full">
        <Button onClick={handleSubmit} text="다음" />
      </div>

      {/* 답변 누락 알림을 위한 모달 */}
      {isModalOpen && (
        <Modal setIsOpen={setIsModalOpen} background={true}>
          <div className="fixed top-[260px] w-full z-[100] px-4">
            <div className="bg-white w-full py-5 rounded-2xl">
              <h3 className="px-4 font-medium text-lg py-5 text-center">
                모든 질문에 답변해 주세요.
              </h3>
              <span className="block w-full text-base text-center text-[#222] pb-10 ">
                현재 응답률: {rate}%
              </span>
              <Button onClick={() => setIsModalOpen(false)} text="확인" />
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}

export default MBTITestPage
