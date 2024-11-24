/**
 * MBTI 결과 상세 항목 필드.
 */
const Field = ({
  labelLeft,
  labelRight,
  scoreLeft,
  scoreRight,
  color,
}: {
  labelLeft: string
  labelRight: string
  scoreLeft: number
  scoreRight: number
  color: string
}) => {
  const parseLabel = (label: string) => {
    const [kr, en] = label.split(' ') // 공백을 기준으로 한국어와 영어 분리
    return { kr, en }
  }

  const { kr: krLeft, en: enLeft } = parseLabel(labelLeft)
  const { kr: krRight, en: enRight } = parseLabel(labelRight)

  // 두 점수의 최대값을 기준으로 상태 바의 너비를 설정
  const percentage = Math.max(scoreLeft, scoreRight)

  // reverse 설정: scoreLeft가 더 크면 false, scoreRight가 더 크면 true
  const reverse = scoreRight > scoreLeft // 선택되지 않은 알파벳은 항상 0이다.

  // 색상 상수 정의
  const SELECTED_COLOR =
    color === '#5EC6E8'
      ? 'text-[#5EC6E8]'
      : color === '#ECC369'
      ? 'text-[#ECC369]'
      : color === '#F29194'
      ? 'text-[#F29194]'
      : color === '#6BD0A5'
      ? 'text-[#6BD0A5]'
      : 'text-[#555]'

  const NON_SELECTED_COLOR = 'text-[#555]'

  return (
    <div className="grid items-center mb-4">
      {/* 상태 바 */}
      <div className="w-full h-2 bg-white rounded-full overflow-hidden mb-2 relative">
        <div
          className="h-2 rounded-full"
          style={{
            width: `${percentage}%`, // 왼쪽 점수 비율로 설정
            background: reverse
              ? `linear-gradient(to right, ${color}, #ffffff)`
              : `linear-gradient(to left, ${color}, #ffffff)`,
            position: 'absolute',
            left: reverse ? 'auto' : 0,
            right: reverse ? 0 : 'auto',
          }}
        />
      </div>

      {/* 라벨 */}
      <div className="flex items-center justify-between">
        <div className={`grid text-center`}>
          <div>
            <span
              className={`font-medium text-sm ${
                reverse ? NON_SELECTED_COLOR : SELECTED_COLOR
              }`}
            >
              {krLeft}
            </span>{' '}
            <span
              className={`font-normal text-sm ${
                reverse ? NON_SELECTED_COLOR : SELECTED_COLOR
              }`}
            >
              {enLeft}
            </span>
          </div>
          <span
            className={`font-semibold text-sm ${
              reverse ? NON_SELECTED_COLOR : SELECTED_COLOR
            }`}
          >
            {scoreLeft}%
          </span>
        </div>
        <div className={`grid text-center`}>
          <div>
            <span
              className={`font-medium text-sm ${
                reverse ? SELECTED_COLOR : NON_SELECTED_COLOR
              }`}
            >
              {krRight}
            </span>{' '}
            <span
              className={`font-normal text-sm ${
                reverse ? SELECTED_COLOR : NON_SELECTED_COLOR
              }`}
            >
              {enRight}
            </span>
          </div>
          <span
            className={`font-semibold text-sm ${
              reverse ? SELECTED_COLOR : NON_SELECTED_COLOR
            }`}
          >
            {scoreRight}%
          </span>
        </div>
      </div>
    </div>
  )
}

export default Field
