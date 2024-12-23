'use client'

import React, { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import mbtiTypes from './mbti-types'
import Field from './field'
import Image from 'next/image'
import Modal from '@/components/modal'
import Button from '@/components/button'
import { LOCAL_STORAGE_RESULT_KEY } from '../test/constants'

function ResultContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [finalResult, setFinalResult] = useState<{
    result: { [key: string]: string }
    percentages: { [key: string]: { percentage: number; type: string } }
  } | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const [hasSParam, setHasSParam] = useState(false)

  // 쿼리 파라미터에서 결과를 가져오는 함수
  const getResultsFromQuery = (query: string) => {
    const results = query.split('p=')[1]
    localStorage.setItem(LOCAL_STORAGE_RESULT_KEY, results)

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
    setHasSParam(searchParams.has('s'))
  }, [searchParams])

  useEffect(() => {
    // 쿼리 파라미터에서 결과를 가져옵니다.
    const query = window.location.search
    const percentagesFromQuery = getResultsFromQuery(query)

    if (percentagesFromQuery) {
      // 쿼리 파라미터에서 가져온 결과로 상태를 설정합니다.
      const mbtiType = Object.keys(percentagesFromQuery).join('')
      setFinalResult({
        result: { [mbtiType]: mbtiType },
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

  const completePercentages = calculateOpposingPercentages(percentages)
  const emoji = mbtiInfo ? mbtiInfo.id : null

  const handleShare = () => {
    const shareData = {
      title: '내 사랑 긍휼 유형을 확인하세요!',
      url: `${window.location.href}&s=1`,
    }

    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
    const isAndroid = /Android/.test(navigator.userAgent)

    if (isIOS && navigator.share) {
      navigator.share(shareData).then(() => console.log('Shared successfully'))
    } else if (isAndroid) {
      navigator.clipboard.writeText(shareData.url).then(() => {
        setModalMessage(
          'URL이 클립보드에 복사되었습니다. 다른 앱에서 붙여넣기 하세요.',
        )
        setIsModalOpen(true)
      })
    }
  }

  if (!finalResult) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <>
      <h3 className="h-[52px] flex items-center justify-center font-medium text-base text-[#222] mb-2.5">
        결과보기
      </h3>

      <div className="px-4 flex items-center justify-center h-[220px]">
        <Image
          src={`/images/emoji/${emoji ? emoji : 'default'}2.png`}
          alt={emoji || 'default'}
          width={220}
          height={220}
        />
      </div>

      <strong className="block w-full px-4 mt-5 mb-2.5 text-[#333] font-medium text-base">
        {mbtiType}
      </strong>

      <h3 className="block w-full px-4 text-[#222] font-semibold text-[22px] mb-5">
        {title}
      </h3>

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

      <div className="mb-[60px]">
        {description.split('|').map((paragraph, index) => (
          <p
            key={index}
            className="mt-5 px-4 text-[#555] break-keep leading-[26px] tracking[-0.03em]"
          >
            {paragraph
              .split(/\*\*(.*?)\*\*/g)
              .map((part, partIndex) =>
                partIndex % 2 === 1 ? (
                  <strong key={partIndex}>{part}</strong>
                ) : (
                  part
                ),
              )}
          </p>
        ))}
      </div>

      <div className="px-4 grid gap-2.5 pb-10">
        {hasSParam ? (
          <button
            onClick={() => router.push('/mbti/welcome')}
            className="w-full h-[60px] bg-[#333] text-[#fff] font-medium text-[20px] rounded-lg"
          >
            나도 테스트하기
          </button>
        ) : (
          <button
            onClick={handleShare}
            className="w-full h-[60px] bg-[#333] text-[#fff] font-medium text-[20px] rounded-lg"
          >
            테스트 결과 공유하기
          </button>
        )}
        <button
          onClick={() => router.push('/mbti/explore')}
          className="w-full h-[60px] bg-[#fff] text-[#333] font-medium text-[20px] rounded-lg border border-[#DDD] mt-2.5"
        >
          다른 유형 둘러보기
        </button>
      </div>

      <div className="px-4 flex flex-col gap-5">
        <div
          className="relative w-full"
          style={{ paddingTop: `${(447 / 358) * 100}%` }}
        >
          <Image
            src={`/images/lnc/lnc_news_1.png`}
            alt="카드 뉴스 1"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
        <div
          className="relative w-full"
          style={{ paddingTop: `${(447 / 358) * 100}%` }}
        >
          <Image
            src={`/images/lnc/lnc_news_2.png`}
            alt="카드 뉴스 2"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
        <div
          className="relative w-full"
          style={{ paddingTop: `${(447 / 358) * 100}%` }}
        >
          <Image
            src={`/images/lnc/lnc_news_3.png`}
            alt="카드 뉴스 3"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
        <div
          className="relative w-full"
          style={{ paddingTop: `${(375 / 358) * 100}%` }}
        >
          <Image
            src={`/images/lnc/lnc_news_4.png`}
            alt="카드 뉴스 4"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>

      <div className="h-16" />

      {isModalOpen && (
        <Modal setIsOpen={setIsModalOpen} background={true}>
          <div className="fixed top-[260px] w-full z-[100] px-4">
            <div className="bg-white w-full py-5 rounded-2xl">
              <h3 className="px-4 font-medium text-lg py-5 text-center">
                URL이 클립보드에 복사되었습니다.
                <br />
                다른 앱에서 붙여넣기 하세요.
              </h3>
              <Button onClick={() => setIsModalOpen(false)} text="확인" />
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}

// 메인 컴포넌트
const ResultPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultContent />
    </Suspense>
  )
}

export default ResultPage
