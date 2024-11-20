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

  // 각 질문의 점수를 해당 type에 추가
  for (const [questionId, score] of Object.entries(results)) {
    const type = questionTypes[parseInt(questionId)]
    if (type) {
      if (score === 5) {
        scores[type] += 2 // 5점: 해당 타입 점수 +2
      } else if (score === 4) {
        scores[type] += 1 // 4점: 해당 타입 점수 +1
      } else if (score === 1) {
        scores[oppositeTypes[type]] += 2 // 1점: 반대 타입 점수 +2
      } else if (score === 2) {
        scores[oppositeTypes[type]] += 1 // 2점: 반대 타입 점수 +1
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

  // 쌍 별로 결과 도출
  const pairs: [string, string][] = [
    ['V', 'D'],
    ['A', 'R'],
    ['I', 'S'],
    ['E', 'O'],
  ]

  pairs.forEach(([type1, type2]) => {
    const score1 = scores[type1]
    const score2 = scores[type2]
    const totalScore = score1 + score2

    if (totalScore > 0) {
      const percentage1 = Math.round((score1 / totalScore) * 100)
      const percentage2 = Math.round((score2 / totalScore) * 100)

      // Assign percentage to both types
      result[type1 + '-' + type2] = score1 >= score2 ? type1 : type2
      percentages[type1] = { percentage: percentage1, type: type1 }
      percentages[type2] = { percentage: percentage2, type: type2 }
    } else {
      // 점수가 모두 0인 경우
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
  scores: TypeScores,
  result: { [key: string]: string },
): string {
  const queryParts: string[] = []

  // 최종 결정된 4개의 알파벳과 각 퍼센트를 쿼리 파라미터 형식으로 변환
  for (const [key, type] of Object.entries(result)) {
    const percentage =
      scores[type] > 0
        ? Math.round(
            (scores[type] / (scores[type] + scores[oppositeTypes[type]])) * 100,
          )
        : 0
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
