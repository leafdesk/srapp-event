'use client'

import React from 'react'
import { useAtom } from 'jotai'
import { scoresAtom, finalResultAtom } from '@/app/mbti/store'
import mbtiTypes from './mbti-types'

const Field = ({
  labelLeft,
  labelRight,
  scoreLeft,
  scoreRight,
  color,
}: any) => {
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
          style={{ width: `${scoreLeft}%`, backgroundColor: color }}
        />
      </div>

      {/* 라벨 */}
      <div className="flex items-center justify-between">
        <div>
          <div>
            <span className="font-medium">{krLeft}</span>{' '}
            <span className="font-normal">{enLeft}</span>
          </div>
          <span>{scoreLeft}%</span>
        </div>
        <div>
          <div>
            <span className="font-medium">{krRight}</span>{' '}
            <span className="font-normal">{enRight}</span>
          </div>
          <span>{scoreRight}%</span>
        </div>
      </div>
    </div>
  )
}

const ResultPage = () => {
  const [scores] = useAtom(scoresAtom)
  const [finalResult] = useAtom(finalResultAtom)

  console.log('결과 페이지: ', scores, finalResult)

  // finalResult에서 MBTI 타입을 가져옵니다.
  const mbtiType = finalResult
    ? Object.values(finalResult.result).join('')
    : '결과 없음'

  // mbtiTypes에서 해당하는 정보를 검색
  const mbtiInfo = mbtiTypes.find((type) => type.id === mbtiType)
  const title = mbtiInfo ? mbtiInfo.title : '결과 없음'
  const description = mbtiInfo ? mbtiInfo.description : '설명이 없습니다.'

  // 각 필드에 대한 퍼센트 정보 가져오기
  const percentages = finalResult ? finalResult.percentages : {}

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
        {mbtiType}
      </strong>

      {/* MBTI 타입 제목 */}
      <h3 className="block w-full px-4 text-[#222] font-semibold text-[22px] mb-5">
        {title}
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
            scoreLeft={percentages['V'] ? percentages['V'].percentage : 0}
            scoreRight={percentages['D'] ? percentages['D'].percentage : 0}
            color="#5EC6E8"
          />
          <Field
            labelLeft="적극형 Active"
            labelRight="반응형 Reactive"
            scoreLeft={percentages['A'] ? percentages['A'].percentage : 0}
            scoreRight={percentages['R'] ? percentages['R'].percentage : 0}
            color="#ECC369"
          />
          <Field
            labelLeft="강렬형 Instense"
            labelRight="담백형 Simple"
            scoreLeft={percentages['I'] ? percentages['I'].percentage : 0}
            scoreRight={percentages['S'] ? percentages['S'].percentage : 0}
            color="#F29194"
          />
          <Field
            labelLeft="기억형 Retentive"
            labelRight="미래형 Visionary"
            scoreLeft={percentages['E'] ? percentages['E'].percentage : 0}
            scoreRight={percentages['O'] ? percentages['O'].percentage : 0}
            color="#6BD0A5"
          />
        </div>
      </div>

      {/* MBTI 타입 설명 */}
      <p className="mt-4 text-[#555]">{description}</p>
    </>
  )
}

export default ResultPage
