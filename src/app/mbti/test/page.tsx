'use client'

import MBTIQuestion from './mbti-question'

const MBTITestPage = () => {
  return (
    <>
      <MBTIQuestion
        question={
          <span>
            잘 모르는 사람이더라도 <br />
            적극 인사를 하는 편이다.
          </span>
        }
      />
    </>
  )
}

export default MBTITestPage
