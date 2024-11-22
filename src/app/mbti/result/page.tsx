'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import mbtiTypes from './mbti-types'
import Field from './field'
import Image from 'next/image'

const ResultPage = () => {
  const router = useRouter()
  const [finalResult, setFinalResult] = useState<{
    result: { [key: string]: string }
    percentages: { [key: string]: { percentage: number; type: string } }
  } | null>(null)

  // 쿼리 파라미터에서 결과를 가져오는 함수
  const getResultsFromQuery = (query: string) => {
    const results = query.split('p=')[1]
    if (results) {
      const percentages = results.match(/([A-Z])(\d+)/g)
      const resultObj: { [key: string]: { percentage: number; type: string } } =
        {}
      percentages?.forEach((item) => {
        const type = item[0]
        const percentage = parseInt(item.slice(1), 10)
        resultObj[type] = { percentage, type }
      })
      return resultObj
    }
    return null
  }

  useEffect(() => {
    // 쿼리 파라미터에서 결과를 가져옵니다.
    const query = window.location.search
    const percentagesFromQuery = getResultsFromQuery(query)

    if (percentagesFromQuery) {
      // 쿼리 파라미터에서 가져온 결과로 상태를 설정합니다.
      const mbtiType = Object.keys(percentagesFromQuery).join('') // A, B, C, D 형태로 MBTI 타입 생성
      setFinalResult({
        result: { [mbtiType]: mbtiType }, // MBTI 타입을 설정
        percentages: percentagesFromQuery,
      })
    } else {
      // 결과가 없으면 웰컴 페이지로 리다이렉트
      router.push('/mbti/welcome')
    }
  }, [router])

  // finalResult에서 MBTI 타입을 가져옵니다.
  const mbtiType = finalResult
    ? Object.keys(finalResult.result).join('')
    : '결과 없음'

  // mbtiTypes에서 해당하는 정보를 검색
  const mbtiInfo = mbtiTypes.find((type) => type.id === mbtiType)
  const title = mbtiInfo ? mbtiInfo.title : '결과 없음'
  const description = mbtiInfo ? mbtiInfo.description : '설명이 없습니다.'

  // 각 필드에 대한 퍼센트 정보 가져오기
  const percentages = finalResult ? finalResult.percentages : {}

  // TODO: Calculate the percentages for the remaining types
  const calculateOpposingPercentages = (percentages: {
    [key: string]: { percentage: number; type: string }
  }) => {
    const opposingPairs: [string, string][] = [
      ['I', 'S'],
      ['E', 'O'],
      ['V', 'D'],
      ['A', 'R'],
    ]

    const calculatedPercentages: {
      [key: string]: { percentage: number; type: string }
    } = { ...percentages }

    opposingPairs.forEach(([type1, type2]) => {
      if (calculatedPercentages[type1]) {
        const percentage1 = calculatedPercentages[type1].percentage
        calculatedPercentages[type2] = {
          percentage: 100 - percentage1,
          type: type2,
        }
      } else if (calculatedPercentages[type2]) {
        const percentage2 = calculatedPercentages[type2].percentage
        calculatedPercentages[type1] = {
          percentage: 100 - percentage2,
          type: type1,
        }
      }
    })

    return calculatedPercentages
  }

  // Calculate the complete percentages including opposing types
  const completePercentages = calculateOpposingPercentages(percentages)

  // Use completePercentages in your rendering logic
  console.log(completePercentages)

  const emoji = mbtiInfo ? mbtiInfo.id : null
  // const EMOJI_URL = `bg-[url("/images/emoji/${emoji}2.png")]`

  if (!finalResult) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    )
  }
  return (
    <>
      {/* 페이지 헤더 */}
      <h3 className="h-[52px] flex items-center justify-center font-medium text-base text-[#222] mb-2.5">
        결과보기
      </h3>

      {/* Emoji */}
      <div className="px-4 flex items-center justify-center h-[220px]">
        {/* <div
          className={`${EMOJI_URL} bg-contain bg-center bg-no-repeat w-[220px] h-[220px]`}
        /> */}
        <Image
          src={`/images/emoji/${emoji ? emoji : 'default'}2.png`}
          alt={emoji || 'default'}
          width={220}
          height={220}
        />
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
      <div className="px-4 mb-5">
        <div className="w-full rounded-[10px] px-4 py-5 border border-[#DDD]">
          <h2 className="font-normal text-base text-[#888] mb-10">
            나의 세부 항목
          </h2>

          <Field
            labelLeft="언어형 Verbal"
            labelRight="행동형 Decisive"
            scoreLeft={
              completePercentages['V'] ? completePercentages['V'].percentage : 0
            }
            scoreRight={
              completePercentages['D'] ? completePercentages['D'].percentage : 0
            }
            color="#5EC6E8"
          />
          <Field
            labelLeft="적극형 Active"
            labelRight="반응형 Reactive"
            scoreLeft={
              completePercentages['A'] ? completePercentages['A'].percentage : 0
            }
            scoreRight={
              completePercentages['R'] ? completePercentages['R'].percentage : 0
            }
            color="#ECC369"
          />
          <Field
            labelLeft="강렬형 Instense"
            labelRight="담백형 Simple"
            scoreLeft={
              completePercentages['I'] ? completePercentages['I'].percentage : 0
            }
            scoreRight={
              completePercentages['S'] ? completePercentages['S'].percentage : 0
            }
            color="#F29194"
          />
          <Field
            labelLeft="기억형 Retentive"
            labelRight="미래형 Visionary"
            scoreLeft={
              completePercentages['E'] ? completePercentages['E'].percentage : 0
            }
            scoreRight={
              completePercentages['O'] ? completePercentages['O'].percentage : 0
            }
            color="#6BD0A5"
          />
        </div>
      </div>

      {/* MBTI 타입 설명 */}
      <p className="mt-4 px-4 text-[#555] mb-[60px]">{description}</p>

      {/* 공유 & 처음으로 버튼 */}
      <div className="px-4 grid gap-2.5 pb-10">
        <button
          onClick={() => {
            if (navigator.share) {
              navigator
                .share({
                  title: '내 사랑 긍휼 유형을 확인하세요!',
                  // text: '내 사랑 긍휼 유형을 확인하세요!',
                  url: window.location.href,
                })
                .then(() => console.log('Shared successfully'))
                .catch((error) => console.error('Error sharing:', error))
            } else {
              console.log('Sharing not supported')
            }
          }}
          className="w-full h-[60px] bg-[#333] text-[#fff] font-medium text-[20px] rounded-lg"
        >
          공유하기
        </button>
        <button
          onClick={() => router.push('/mbti/welcome')}
          className="w-full h-[60px] bg-[#fff] text-[#333] font-medium text-[20px] rounded-lg border border-[#DDD] mt-2.5"
        >
          처음으로
        </button>
      </div>
    </>
  )
}

export default ResultPage
