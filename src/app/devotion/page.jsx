'use client'

import AudioPlayer from '../../components/audio-player'

const DevotionPage = () => {
  return (
    <>
      <AudioPlayer audioUrl="/audios/devotion.mp3" />

      <div
        className="bg-[url('/images/devotion_invitation.jpg')] bg-no-repeat bg-center bg-contain w-screen"
        style={{ aspectRatio: '780 / 2873' }} // devotion_invitation.jpg의 비율
      />

      {/* blank */}
      <div className="h-16" />
    </>
  )
}

export default DevotionPage
