import { describe, it, expect } from 'vitest';
import { matchResultType, recommend } from './recommend';
import type { Answers, Webtoon } from '../types';

const fixtures: Webtoon[] = [
  // BL 달달
  { id: 'b1', slug: 'b1', title: 'BL 달달1', author: 'a1', track: 'BL',
    tags: ['BL', '달달물', '사랑꾼공', '사내연애'],
    popularity: 90, synopsis: '', lezhinUrl: '', thumbnailUrl: '', fallbackColor: '#FF6BCB' },
  { id: 'b2', slug: 'b2', title: 'BL 달달2', author: 'a2', track: 'BL',
    tags: ['BL', '달달물', '순진수', '학원'],
    popularity: 80, synopsis: '', lezhinUrl: '', thumbnailUrl: '', fallbackColor: '#FF6BCB' },
  // BL 19금
  { id: 'b3', slug: 'b3', title: 'BL 위험1', author: 'a3', track: 'BL',
    tags: ['BL', '19금', '능욕공', '문란수'],
    popularity: 95, synopsis: '', lezhinUrl: '', thumbnailUrl: '', fallbackColor: '#D946EF' },
  // 같은 작가 중복 테스트
  { id: 'b4', slug: 'b4', title: 'BL 달달3', author: 'a1', track: 'BL',
    tags: ['BL', '달달물', '사랑꾼공'],
    popularity: 75, synopsis: '', lezhinUrl: '', thumbnailUrl: '', fallbackColor: '#FF6BCB' },
  // HL 작품 (트랙 다름)
  { id: 'h1', slug: 'h1', title: 'HL 로맨스', author: 'a4', track: 'HL',
    tags: ['HL', '로맨스', '순애'],
    popularity: 85, synopsis: '', lezhinUrl: '', thumbnailUrl: '', fallbackColor: '#FF4D5E' },
];

describe('matchResultType', () => {
  it('BL 트랙 + 달달 점수 → 달달 BL 본진러', () => {
    const scores = { BL: 5, 달달물: 9, 사랑꾼공: 5 };
    const result = matchResultType(scores, 'BL');
    expect(result.id).toBe('bl-sweet');
  });

  it('HL 트랙 + 순애·사내연애 점수 → 순정 로맨스 본진러', () => {
    const scores = { HL: 5, 순애: 8, 사내연애: 4 };
    const result = matchResultType(scores, 'HL');
    expect(result.id).toBe('hl-pure-romance');
  });

  it('트랙 안에서만 매칭 (HL 결과는 BL 트랙에서 안 나옴)', () => {
    const scores = { 로맨스: 100, 사내연애: 100 };
    const result = matchResultType(scores, 'BL');
    expect(result.track).toBe('BL');
  });
});

describe('recommend', () => {
  it('BL 트랙 + 달달 응답 → BL 달달 작품만 반환, 같은 작가 중복 제거', () => {
    const answers: Answers = { Q1: 'B', Q2: 'A', Q4: 'A' };
    const result = recommend(answers, fixtures);

    expect(result.type.track).toBe('BL');
    expect(result.webtoons.length).toBeLessThanOrEqual(4);

    // 트랙 일치 확인
    for (const w of result.webtoons) {
      expect(w.track).toBe('BL');
    }

    // 같은 작가 중복 없음
    const authors = result.webtoons.map(w => w.author);
    expect(new Set(authors).size).toBe(authors.length);
  });

  it('Q2=A (달달 선택)이면 19금 태그 작품 제외됨', () => {
    const answers: Answers = { Q1: 'B', Q2: 'A' };
    const result = recommend(answers, fixtures);
    const ids = result.webtoons.map(w => w.id);
    expect(ids).not.toContain('b3');  // b3는 19금 태그
  });

  it('인기도 높은 순 정렬', () => {
    const answers: Answers = { Q1: 'B' };
    const result = recommend(answers, fixtures);
    if (result.webtoons.length >= 2) {
      const popularities = result.webtoons.map(w => w.popularity);
      for (let i = 1; i < popularities.length; i++) {
        expect(popularities[i - 1]).toBeGreaterThanOrEqual(popularities[i]);
      }
    }
  });
});
