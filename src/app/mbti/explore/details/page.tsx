'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import mbtiTypes from '../../result/mbti-types'
import Image from 'next/image'

/**
 * MBTI 둘러보기 > MBTI 상세 페이지.
 */
const MBTIDetailsPage = () => {
  const router = useRouter()
  const [mbtiType, setMbtiType] = useState<string | null>(null)
  const [title, setTitle] = useState<string>('결과 없음')
  const [description, setDescription] = useState<string>('설명이 없습니다.')
  const [emoji, setEmoji] = useState<string | null>(null)

  useEffect(() => {
    // 쿼리 파라미터에서 MBTI 타입을 가져옵니다.
    const query = window.location.search
    const params = new URLSearchParams(query)
    const type = params.get('type') // Assuming the type is passed as a query parameter

    if (type) {
      setMbtiType(type)
      const mbtiInfo = mbtiTypes.find((mbti) => mbti.id === type)
      if (mbtiInfo) {
        setTitle(mbtiInfo.title)
        setDescription(mbtiInfo.description)
        setEmoji(mbtiInfo.id)
      }
    } else {
      // 결과가 없으면 웰컴 페이지로 리다이렉트
      router.push('/mbti/welcome')
    }
  }, [router])

  if (!mbtiType) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <>
      {/* 페이지 헤더 */}
      <div className="fixed top-0 left-0 right-0 flex items-center justify-between mb-4 px-4 bg-white z-10">
        <button
          onClick={() => router.push('/mbti/explore')}
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

      {/* Emoji */}
      <div className="relative w-[220px] h-[220px] mx-auto">
        <Image
          src={`/images/emoji/${emoji ? emoji : 'default'}2.png`}
          alt={emoji || 'default'}
          fill
          sizes="220px"
          style={{ objectFit: 'contain' }}
          priority
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

      {/* MBTI 타입 설명 */}
      <div className="mb-[60px]">
        {description.split('|').map((paragraph, index) => (
          <p
            key={index}
            className="mt-5 px-4 text-[#555] break-keep leading-[26px] tracking[-0.03em]"
          >
            {paragraph.split(/\*\*(.*?)\*\*/g).map((part, partIndex) =>
              partIndex % 2 === 1 ? ( // 볼드 처리할 부분
                <strong key={partIndex}>{part}</strong>
              ) : (
                part // 일반 텍스트
              ),
            )}
          </p>
        ))}
      </div>
    </>
  )
}

export default MBTIDetailsPage
