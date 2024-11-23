'use client'

import Button from '@/components/button'
import Dropdown from '@/components/dropdown'
import Input from '@/components/input'
import ProgressBar from '@/components/progress-bar'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { LOCAL_STORAGE_PROFILE_KEY } from '../test/constants'

const RATE = 20

/**
 * 유저 프로필 타입 정의.
 */
type Profile = {
  affiliation: string
  gender: string
  age: string
}

const ProfilePage = () => {
  const router = useRouter()

  const [profile, setProfile] = useState<Profile>({
    affiliation: '',
    gender: '',
    age: '',
  })

  const handleSelect = (value: string) => {
    setProfile((prev) => ({ ...prev, gender: value }))
  }

  const handleSubmit = () => {
    // Save profile data to local storage
    localStorage.setItem(LOCAL_STORAGE_PROFILE_KEY, JSON.stringify(profile))
    router.push('/mbti/test')
  }

  return (
    <main className="h-screen bg-gradient-to-b from-[#F596AA] to-[#FAD2EB]">
      {/* 페이지 헤더 */}
      <h3 className="h-[52px] flex items-center justify-center font-medium text-base text-white mb-2.5">
        사랑 긍휼 유형 테스트
      </h3>

      {/* 진행률 상태 바 */}
      <div className="px-4">
        <ProgressBar rate={RATE} />
      </div>
      <span className="font-normal text-lg text-center text-white w-full block">
        {RATE}%
      </span>

      {/* blank */}
      <div className="h-[80px]" />

      {/* 프로필 입력란 */}
      <div className="grid gap-2.5">
        <Input
          placeholder="소속을 입력해주세요."
          value={profile.affiliation}
          onChange={(e) =>
            setProfile((prev) => ({ ...prev, affiliation: e.target.value }))
          }
        />
        <Dropdown
          options={['남성', '여성']}
          placeholder="성별을 선택해주세요."
          onSelect={handleSelect}
        />
        <Dropdown
          options={[
            '10대 미만',
            '10대',
            '20대',
            '30대',
            '40대',
            '50대',
            '60대',
            '70대 이상',
          ]}
          placeholder="연령을 선택해주세요."
          onSelect={(value) => setProfile((prev) => ({ ...prev, age: value }))}
        />
      </div>

      {/* 하단 버튼 */}
      <div className="pb-5 fixed bottom-0 w-full">
        <Button
          onClick={handleSubmit}
          text="다음"
          disabled={!profile.affiliation || !profile.gender || !profile.age}
        />
      </div>
    </main>
  )
}

export default ProfilePage
