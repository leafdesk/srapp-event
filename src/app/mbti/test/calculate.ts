type QuestionScore = { [key: number]: number }

type QuestionType = {
  [key: number]: 'V' | 'D' | 'A' | 'R' | 'I' | 'S' | 'E' | 'O'
}

type TypeScores = { [key: string]: number }

const questionTypes: QuestionType = {
  1: 'A',
  2: 'V',
  3: 'I',
  4: 'O',
  5: 'D',
  6: 'E',
  7: 'O',
  8: 'A',
  9: 'I',
  10: 'D',
  11: 'A',
  12: 'O',
  13: 'S',
  14: 'D',
  15: 'I',
  16: 'A',
  17: 'V',
  18: 'I',
  19: 'A',
  20: 'E',
}

// 각 타입의 반대 타입 정의
const oppositeTypes: { [key: string]: string } = {
  V: 'D',
  D: 'V',
  A: 'R',
  R: 'A',
  I: 'S',
  S: 'I',
  E: 'O',
  O: 'E',
}

export function calculateTypeScores(results: QuestionScore): TypeScores {
  const scores: TypeScores = {
    V: 0,
    D: 0,
    A: 0,
    R: 0,
    I: 0,
    S: 0,
    E: 0,
    O: 0,
  }

  // 각 질문의 점수를 해당 타입에 추가
  for (const [questionId, score] of Object.entries(results)) {
    const type = questionTypes[parseInt(questionId)]
    if (type) {
      if (score === 5) {
        scores[type] += 3 // 매우 그렇다: 해당 타입 점수 +3
      } else if (score === 4) {
        scores[type] += 2 // 그렇다: 해당 타입 점수 +2
      } else if (score === 3) {
        // '보통'일 경우, 특정 로직에 따라 점수 추가
        if (type === 'V' || type === 'D') {
          scores['V'] += 1 // V 또는 D 타입: V에 +1점
        } else if (type === 'A' || type === 'R') {
          scores['R'] += 1 // A 또는 R 타입: R에 +1점
        } else if (type === 'I' || type === 'S') {
          scores['S'] += 1 // I 또는 S 타입: S에 +1점
        } else if (type === 'E' || type === 'O') {
          scores['E'] += 1 // E 또는 O 타입: E에 +1점
        }
      } else if (score === 2) {
        scores[oppositeTypes[type]] += 2 // 아니다: 반대 타입 점수 +2
      } else if (score === 1) {
        scores[oppositeTypes[type]] += 3 // 매우 아니다: 반대 타입 점수 +3
      }
    }
  }

  return scores
}

export function determineResult(scores: TypeScores): {
  result: { [key: string]: string }
  percentages: { [key: string]: { percentage: number; type: string } }
} {
  const result: { [key: string]: string } = {}
  const percentages: { [key: string]: { percentage: number; type: string } } =
    {}

  // 대립되는 타입의 쌍 정의
  const pairs: [string, string][] = [
    ['V', 'D'],
    ['A', 'R'],
    ['I', 'S'],
    ['E', 'O'],
  ]

  // 각 타입별 질문 수 계산
  const typeQuestionCounts: { [key: string]: number } = {}
  for (const qType of Object.values(questionTypes)) {
    typeQuestionCounts[qType] = (typeQuestionCounts[qType] || 0) + 1
  }

  pairs.forEach(([type1, type2]) => {
    const score1 = scores[type1] || 0
    const score2 = scores[type2] || 0

    // 해당 타입과 반대 타입의 총 질문 수
    const numQuestions =
      (typeQuestionCounts[type1] || 0) + (typeQuestionCounts[type2] || 0)
    const maxPairScore = numQuestions * 3 // 각 질문에서 최대 3점 획득 가능

    if (maxPairScore > 0) {
      const diff = score1 - score2
      const percentage = ((diff / maxPairScore + 1) / 2) * 100

      const percentage1 = Math.round(percentage)
      const percentage2 = 100 - percentage1

      // 결과 결정
      result[type1 + '-' + type2] = percentage1 >= percentage2 ? type1 : type2

      // 퍼센티지 저장
      percentages[type1] = { percentage: percentage1, type: type1 }
      percentages[type2] = { percentage: percentage2, type: type2 }
    } else {
      // 최대 점수가 0인 경우
      result[type1 + '-' + type2] = 'None'
      percentages[type1] = { percentage: 0, type: type1 }
      percentages[type2] = { percentage: 0, type: type2 }
    }
  })

  return {
    result,
    percentages,
  }
}

export function createQueryParam(
  result: { [key: string]: string },
  percentages: { [key: string]: { percentage: number; type: string } },
): string {
  const queryParts: string[] = []

  // 최종 결정된 4개의 알파벳과 각 퍼센트를 쿼리 파라미터 형식으로 변환
  for (const [key, type] of Object.entries(result)) {
    const percentage = percentages[type]?.percentage ?? 0
    queryParts.push(`${type}${percentage}`)
  }

  return `p=${queryParts.join('')}`
}

type APIRequestData = {
  affiliation: string
  gender: string
  age: string
  mbti: string
  percentages: { [key: string]: number }
  answers: { [key: number]: number }
}

/**
 * API 요청을 생성하는 함수.
 */
export function generateAPIRequestData(
  profile: { affiliation: string; gender: string; age: string },
  mbtiType: string,
  percentages: { [key: string]: { percentage: number; type: string } },
  answers: QuestionScore,
): APIRequestData {
  return {
    affiliation: profile.affiliation,
    gender: profile.gender,
    age: profile.age,
    mbti: mbtiType,
    percentages: {
      V: percentages.V ? percentages.V.percentage : 0,
      D: percentages.D ? percentages.D.percentage : 0,
      A: percentages.A ? percentages.A.percentage : 0,
      R: percentages.R ? percentages.R.percentage : 0,
      I: percentages.I ? percentages.I.percentage : 0,
      S: percentages.S ? percentages.S.percentage : 0,
      E: percentages.E ? percentages.E.percentage : 0,
      O: percentages.O ? percentages.O.percentage : 0,
    },
    answers: answers,
  }
}
