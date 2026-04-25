import type { ResultType } from '../types';

export const RESULT_TYPES: ResultType[] = [
  // === HL 트랙 ===
  {
    id: 'hl-pure-romance',
    track: 'HL',
    emoji: '🌸',
    name: '순정 로맨스 본진러',
    description: '달달하고 따뜻한 1:1 로맨스에 마음이 녹는 타입. 사내연애·소꿉친구물에 약함.',
    primaryTags: ['HL', '순애', '사내연애'],
    secondaryTags: ['다정남', '1:1', '달달물'],
  },
  {
    id: 'hl-rofan-queen',
    track: 'HL',
    emoji: '👑',
    name: '로판 여왕',
    description: '로맨스 판타지 세계의 진정한 주인공. 회귀·계약결혼·다정한 황태자에 환장함.',
    primaryTags: ['로판', '판타지', '결혼'],
    secondaryTags: ['회귀', '계략녀', '다정남'],
  },
  {
    id: 'hl-dark-drama',
    track: 'HL',
    emoji: '🎭',
    name: '다크 드라마 매니아',
    description: '복수·미스터리·느와르의 묵직한 분위기를 선호. 가벼운 로맨스보다 심리극에 끌림.',
    primaryTags: ['드라마', '느와르', '미스터리'],
    secondaryTags: ['19금', '복수', '피폐물'],
  },
  {
    id: 'hl-action-fantasy',
    track: 'HL',
    emoji: '⚔️',
    name: '액션 판타지 헌터',
    description: '능력자 배틀과 모험을 사랑. SF·이종족·세계관 디테일에 빠지는 타입.',
    primaryTags: ['액션', '판타지', '능력남'],
    secondaryTags: ['SF', '이종족', '미스터리'],
  },

  // === BL 트랙 ===
  {
    id: 'bl-sweet',
    track: 'BL',
    emoji: '💕',
    name: '달달 BL 본진러',
    description: '사랑꾼 다정공 × 순진수 조합에 정신을 못 차림. 학원물·사내연애에서 피어나는 첫사랑 감성.',
    primaryTags: ['BL', '달달물', '사랑꾼공'],
    secondaryTags: ['순진수', '사내연애', '힐링물'],
  },
  {
    id: 'bl-dangerous',
    track: 'BL',
    emoji: '🔥',
    name: '위험한 BL 헌터',
    description: '19금·능욕·문란수 — 수위 높은 자극을 정면으로 즐기는 타입. 또라이공도 사랑함.',
    primaryTags: ['BL', '19금', '능욕공'],
    secondaryTags: ['문란수', '또라이공', '피폐물'],
  },
  {
    id: 'bl-obsession',
    track: 'BL',
    emoji: '⛓️',
    name: '집착 BL 마니아',
    description: '집착공 × 까칠공의 강렬한 감정선. 짝사랑·애증의 깊이에 빠지는 타입.',
    primaryTags: ['BL', '집착공', '까칠공'],
    secondaryTags: ['19금', '애증', '짝사랑'],
  },
  {
    id: 'bl-fantasy',
    track: 'BL',
    emoji: '🐺',
    name: '판타지 BL 덕후',
    description: '오메가버스·뱀파이어·이종족 BL의 세계관 덕후. 로판·이세계 BL에서 진가 발휘.',
    primaryTags: ['BL', '로판', '이종족'],
    secondaryTags: ['인외존재', '오메가버스', '뱀파이어'],
  },
];
