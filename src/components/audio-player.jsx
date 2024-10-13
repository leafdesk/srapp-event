import React, { useState, useEffect, useRef } from 'react'

function AudioPlayer({ audioUrl }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  console.log('🚀 ~ AudioPlayer ~ audioUrl:', audioUrl)

  useEffect(() => {
    // Audio 인스턴스 생성 및 이벤트 리스너 설정
    audioRef.current = new Audio(audioUrl)
    audioRef.current.addEventListener('ended', () => {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    })

    return () => {
      audioRef.current.pause()
      audioRef.current.removeEventListener('ended', () => {
        audioRef.current.currentTime = 0
        audioRef.current.play()
      })
    }
  }, [])

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <button onClick={togglePlayPause} className="fixed bottom-6 right-4">
      <div className="w-[60px] h-[60px] rounded-full bg-white border border-[#F0F0F0] drop-shadow-lg flex items-center justify-center">
        {isPlaying ? (
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="3" height="16" fill="#222222" />
            <rect x="11" width="3" height="16" fill="#222222" />
          </svg>
        ) : (
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.800781 0.400391V19.6004L15.2008 10.0004L0.800781 0.400391Z"
              fill="#222222"
            />
          </svg>
        )}
      </div>
    </button>
  )
}

export default AudioPlayer
