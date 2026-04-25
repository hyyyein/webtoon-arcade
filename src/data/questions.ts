import type { Question } from '../types';

export const QUESTIONS: Question[] = [
  {
    id: 'Q1',
    text: '더 끌리는 작품은?',
    type: 'branch',
    options: {
      A: {
        label: '일반 작품 (남녀 로맨스, 드라마 등)',
        scores: { common: { HL: 5, 로맨스: 2 } },
        setTrack: 'HL',
      },
      B: {
        label: 'BL 작품',
        scores: { common: { BL: 5 } },
        setTrack: 'BL',
      },
    },
  },
  {
    id: 'Q2',
    text: '좋아하는 수위는?',
    type: 'hard',
    options: {
      A: {
        label: '달달한 순수',
        scores: { common: { 달달물: 5, 순애: 3, 힐링물: 2 } },
        exclude: ['19금', '능욕공', '문란공', '문란수', '잔혹/고어'],
      },
      B: {
        label: '19금 긴장감',
        scores: { common: { '19금': 5, 문란공: 2, 능욕공: 2 } },
      },
    },
  },
  {
    id: 'Q3',
    text: '더 빠져드는 세계관은?',
    type: 'hard',
    options: {
      A: {
        label: '현실 속 일상',
        scores: { common: { 사내연애: 4, 일상: 3, 사제지간: 2, 현대물: 2 } },
        exclude: ['판타지', '로판', 'SF', '이세계물', '이종족', '인외존재', '수인물'],
      },
      B: {
        label: '판타지·이세계·로판',
        scores: { common: { 판타지: 5, 로판: 3, SF: 2, 이세계물: 3 } },
      },
    },
  },
  {
    id: 'Q4',
    text: '상대 캐릭터 성격은?',
    type: 'soft',
    options: {
      A: {
        label: '다정함',
        scores: {
          HL: { 다정남: 5, 순정남: 3, 사랑꾼: 3 },
          BL: { 다정공: 5, 순정공: 3, 사랑꾼공: 3, 헌신공: 3 },
        },
      },
      B: {
        label: '집착/강렬함',
        scores: {
          HL: { 집착남: 5, 까칠남: 3, 나쁜남자: 3 },
          BL: { 집착공: 5, 능욕공: 5, 또라이공: 3, 까칠공: 3 },
        },
      },
    },
  },
  {
    id: 'Q5',
    text: '상대 캐릭터 외모는?',
    type: 'soft',
    options: {
      A: {
        label: '청량한 미남/미인',
        scores: {
          HL: { 순정남: 3, 순진남: 3 },
          BL: { 미남공: 5, 미인공: 5, 순진수: 3, 미인수: 3 },
        },
      },
      B: {
        label: '듬직/성숙',
        scores: {
          HL: { 근육남: 5, 대형견남: 5, 중년: 3 },
          BL: { 떡대공: 5, 대형견공: 5, 절륜공: 3 },
        },
      },
    },
  },
  {
    id: 'Q6',
    text: '상대의 정체는?',
    type: 'hard',
    options: {
      A: {
        label: '평범한 인간',
        scores: { common: { 평범남: 3, 평범녀: 3, '1:1': 2 } },
        exclude: ['이종족', '인외존재', '뱀파이어', '수인물', '천사/악마'],
      },
      B: {
        label: '인외·이종족',
        scores: { common: { 이종족: 5, 인외존재: 5, 뱀파이어: 3, 수인물: 3 } },
      },
    },
  },
  {
    id: 'Q7',
    text: '이야기 구도는?',
    type: 'hard',
    options: {
      A: {
        label: '1:1',
        scores: { common: { 순애: 5, 쌍방구원: 2, '1:1': 3 } },
        exclude: ['다각관계', '삼각관계', '역키잡'],
      },
      B: {
        label: '다각·삼각',
        scores: { common: { 다각관계: 5, 삼각관계: 3 } },
      },
    },
  },
  {
    id: 'Q8',
    text: '이상적인 분위기는?',
    type: 'soft',
    options: {
      A: {
        label: '달달한 해피엔딩',
        scores: { common: { 달달물: 4, 러브코미디: 3, 힐링물: 3 } },
      },
      B: {
        label: '다크/긴장감/여운',
        scores: { common: { 느와르: 5, 서스펜스: 5, 미스터리: 3, 애증: 3, 피폐물: 3 } },
      },
    },
  },
];
