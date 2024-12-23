import { useRouter } from 'next/navigation'
import mbtiTypes from '../result/mbti-types' // Adjust the import path as necessary

/**
 * MBTI 리스트 행
 * @param mbtiId - MBTI ID (예시: VAIE)
 * @param mbtiTitle - MBTI Title (예시: 쨍쨍히 비취는 사랑의 빛)
 * @returns
 */
const MBTIListRow = ({
  mbtiId,
  mbtiTitle,
}: {
  mbtiId: string
  mbtiTitle: string
}) => {
  const router = useRouter()
  const mbtiInfo = mbtiTypes.find((type) => type.id === mbtiId)
  const emoji = mbtiInfo ? mbtiInfo.id : 'default'

  const handleClick = () => {
    router.push(`/mbti/explore/details?type=${mbtiId}`)
  }

  return (
    <div
      onClick={handleClick}
      className="h-[95px] flex items-center px-4 cursor-pointer"
    >
      <div className="w-[54px] h-[54px] mr-4 flex items-center justify-center">
        <img
          src={`/images/emoji/${emoji}2.png`}
          alt={mbtiId}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col">
        <div className="text-sm font-normal text-[#888]">{mbtiId}</div>
        <div className="text-base font-medium text-[#222]">{mbtiTitle}</div>
      </div>
      <div className="h-[26px] w-[26px] bg-center bg-no-repeat bg-[url('/icons/arrow_back_ios.svg')] bg-contain ml-auto transform rotate-180" />
    </div>
  )
}

export default MBTIListRow
