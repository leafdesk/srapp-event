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

export function calculateTypeScores(results: QuestionScore): TypeScores {
  // 각 type의 점수 초기화
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
      scores[type] += score
    }
  }

  // 각 type의 평균 계산
  for (const type in scores) {
    scores[type] = scores[type] / 5 // 20개의 질문에서 type별로 5개의 질문이 있으므로 5로 나눔
  }

  return scores
}

export function determineResult(scores: TypeScores): { [key: string]: string } {
  const result: { [key: string]: string } = {}

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

    if (score1 > score2) {
      result[type1 + '-' + type2] = type1
    } else if (score2 > score1) {
      result[type1 + '-' + type2] = type2
    } else {
      // 동점일 경우 우선순위 적용 (V, R, S, E 우선)
      if (['V', 'R', 'S', 'E'].includes(type1)) {
        result[type1 + '-' + type2] = type1
      } else {
        result[type1 + '-' + type2] = type2
      }
    }
  })

  return result
}
