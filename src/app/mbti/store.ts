import { atom } from 'jotai';

// 점수와 결과를 저장할 atom 생성
export const scoresAtom = atom<{ [key: string]: number } | null>(null);
export const finalResultAtom = atom<{
  result: { [key: string]: string };
  percentages: { [key: string]: { percentage: number; type: string } };
} | null>(null); 