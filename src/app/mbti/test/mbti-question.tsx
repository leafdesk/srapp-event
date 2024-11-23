import { useEffect, useState } from 'react'

type MBTIQuestionProps = {
  question: string | React.ReactNode
  onAnswerChange: (id: number, value: number) => void
  id: number
}

/**
 * MBTI 질문 & 체크 박스 그룹.
 */
const MBTIQuestion = ({ question, onAnswerChange, id }: MBTIQuestionProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  useEffect(() => {
    if (selectedOption !== null) {
      onAnswerChange(id, selectedOption)
    }
  }, [selectedOption, onAnswerChange])

  // 라디오 버튼 선택 시 값 설정
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value)
    setSelectedOption(value)
  }

  return (
    <section className="px-4 py-5">
      <div className="flex items-center justify-center mb-5 text-center">
        <span className="font-medium text-lg text-[#111]">{question}</span>
      </div>
      <div className="flex items-center justify-between">
        {/* 옵션 1: 그렇지 않다 */}
        <label className="flex flex-col items-center cursor-pointer">
          <input
            type="radio"
            name={`response-${id}`}
            value="1"
            checked={selectedOption === 1}
            onChange={handleChange}
            className="hidden"
          />
          <div
            className={`w-[49px] h-[49px] rounded-full flex items-center justify-center ${
              selectedOption === 1 ? 'bg-[#8732FF]' : 'border-2 border-gray-300'
            }`}
          >
            <span
              className={`${
                selectedOption === 1 ? 'text-white' : 'text-transparent'
              } text-xs`}
            >
              <div className="w-[16px] h-[9px] bg-[url('/icons/mbti_check_1.svg')] bg-contain bg-no-repeat bg-center" />
            </span>
          </div>
          <span className="mt-2 text-gray-700 text-sm h-10 text-center">
            그렇지
            <br /> 않다
          </span>
        </label>

        {/* 옵션 2 */}
        <label className="flex flex-col items-center cursor-pointer">
          <input
            type="radio"
            name={`response-${id}`}
            value="2"
            checked={selectedOption === 2}
            onChange={handleChange}
            className="hidden"
          />
          <div
            className={`w-[35px] h-[35px] rounded-full flex items-center justify-center ${
              selectedOption === 2 ? 'bg-[#8732FF]' : 'border-2 border-gray-300'
            }`}
          >
            <span
              className={`${
                selectedOption === 2 ? 'text-white' : 'text-transparent'
              } text-xs`}
            >
              <div className="w-[12px] h-[7px] bg-[url('/icons/mbti_check_2.svg')] bg-contain bg-no-repeat bg-center" />
            </span>
          </div>
          <span className="mt-2 text-transparent text-sm h-10"> </span>
        </label>

        {/* 옵션 3: 보통 */}
        <label className="flex flex-col items-center cursor-pointer">
          <input
            type="radio"
            name={`response-${id}`}
            value="3"
            checked={selectedOption === 3}
            onChange={handleChange}
            className="hidden"
          />
          <div
            className={`w-[27px] h-[27px] rounded-full flex items-center justify-center ${
              selectedOption === 3 ? 'bg-[#AAAAAA]' : 'border-2 border-gray-300'
            }`}
          >
            <span
              className={`${
                selectedOption === 3 ? 'text-white' : 'text-transparent'
              } text-xs`}
            >
              <div className="w-[9px] h-[5px] bg-[url('/icons/mbti_check_3.svg')] bg-contain bg-no-repeat bg-center" />
            </span>
          </div>
          <span className="mt-2 pt-2.5 text-gray-700 text-sm h-10 text-center">
            보통
          </span>
        </label>

        {/* 옵션 4 */}
        <label className="flex flex-col items-center cursor-pointer">
          <input
            type="radio"
            name={`response-${id}`}
            value="4"
            checked={selectedOption === 4}
            onChange={handleChange}
            className="hidden"
          />
          <div
            className={`w-[35px] h-[35px] rounded-full flex items-center justify-center ${
              selectedOption === 4 ? 'bg-[#FF3296]' : 'border-2 border-gray-300'
            }`}
          >
            <span
              className={`${
                selectedOption === 4 ? 'text-white' : 'text-transparent'
              } text-xs`}
            >
              <div className="w-[12px] h-[7px] bg-[url('/icons/mbti_check_2.svg')] bg-contain bg-no-repeat bg-center" />
            </span>
          </div>
          <span className="mt-2 text-transparent text-sm h-10"> </span>
        </label>

        {/* 옵션 5: 그렇다 */}
        <label className="flex flex-col items-center cursor-pointer">
          <input
            type="radio"
            name={`response-${id}`}
            value="5"
            checked={selectedOption === 5}
            onChange={handleChange}
            className="hidden"
          />
          <div
            className={`w-[49px] h-[49px] rounded-full flex items-center justify-center ${
              selectedOption === 5 ? 'bg-[#FF3296]' : 'border-2 border-gray-300'
            }`}
          >
            <span
              className={`${
                selectedOption === 5 ? 'text-white' : 'text-transparent'
              } text-xs`}
            >
              <div className="w-[16px] h-[9px] bg-[url('/icons/mbti_check_1.svg')] bg-contain bg-no-repeat bg-center" />
            </span>
          </div>
          <span className="mt-2 text-gray-700 text-sm h-10 text-center">
            그렇다
          </span>
        </label>
      </div>
    </section>
  )
}

export default MBTIQuestion
