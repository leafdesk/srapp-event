'use server'

import axios from 'axios'

const SUNGRAK_API_SERVER = 'https://api.sungrak.click'

axios.defaults.baseURL = SUNGRAK_API_SERVER

interface SubmitMBTIData {
  answers: { [key: number]: number }
}

/**
 * MBTI 결과 제출 API.
 */
export const submitMBTI = async (data: SubmitMBTIData) => {
  try {
    const response = await axios.post('/event-api/mbti', data) // Use the updated endpoint
    return response.data // 성공적인 응답 데이터 반환
  } catch (error) {
    console.error('Error submitting MBTI data:', error)
    throw error // 에러를 다시 던져서 호출하는 쪽에서 처리할 수 있도록 함
  }
}
