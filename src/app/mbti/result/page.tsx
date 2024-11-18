'use client'

import React from 'react'

const Field = ({ labelLeft, labelRight, score, color }: any) => {
  const parseLabel = (label: string) => {
    const [kr, en] = label.split(' ') // 공백을 기준으로 한국어와 영어 분리
    return { kr, en }
  }

  const { kr: krLeft, en: enLeft } = parseLabel(labelLeft)
  const { kr: krRight, en: enRight } = parseLabel(labelRight)

  return (
    <div className="grid items-center mb-4">
      {/* 상태 바 */}
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
        <div
          className="h-2 rounded-full"
          style={{ width: `${score}%`, backgroundColor: color }}
        />
      </div>

      {/* 라벨 */}
      <div className="flex items-center justify-between">
        <div>
          <span className="font-medium">{krLeft}</span>{' '}
          <span className="font-normal">{enLeft}</span>
        </div>
        <div>
          <span className="font-medium">{krRight}</span>{' '}
          <span className="font-normal">{enRight}</span>
        </div>
      </div>
    </div>
  )
}

const ResultPage = () => {
  return (
    <>
      {/* 페이지 헤더 */}
      <h3 className="h-[52px] flex items-center justify-center font-medium text-base text-[#222] mb-2.5">
        결과보기
      </h3>

      {/* Emoji */}
      <div className="px-4">
        <div className="bg-[#D9D9D9] w-full h-[300px]" />
      </div>

      {/* MBTI 타입 */}
      <strong className="block w-full px-4 mt-5 mb-2.5 text-[#333] font-medium text-base">
        AVIE
      </strong>

      {/* MBTI 타입 제목 */}
      <h3 className="block w-full px-4 text-[#222] font-semibold text-[22px] mb-5">
        쨍쩅히 비취는 사랑의 빛
      </h3>

      {/* 나의 세부 항목 */}
      <div className="px-4">
        <div className="w-full rounded-[10px] px-4 py-5 border border-[#DDD]">
          <h2 className="font-normal text-base text-[#888] mb-10">
            나의 세부 항목
          </h2>

          <Field
            labelLeft="언어형 Verbal"
            labelRight="행동형 Decisive"
            color="#4fa8f9"
          />
        </div>
      </div>
    </>
  )
}

export default ResultPage

// const label = [
//   [
//     { kr: '언어형', en: 'Verbal' },
//     { kr: '행동형', en: 'Decisive' },
//   ],
//   [
//     { kr: '적극형', en: 'Active' },
//     { kr: '반응형', en: 'Reactive' },
//   ],
//   [
//     { kr: '강렬형', en: 'Instense' },
//     { kr: '담백형', en: 'Simple' },
//   ],
//   [
//     { kr: '기억형', en: 'Retentive' },
//     { kr: '미래형', en: 'Visionary' },
//   ],
// ]
