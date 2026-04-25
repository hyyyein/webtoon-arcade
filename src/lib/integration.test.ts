import { describe, it, expect } from 'vitest';
import { recommend } from './recommend';
import { WEBTOONS } from './loadWebtoons';
import type { Answers } from '../types';

describe('integration: 시드 데이터 + 추천 알고리즘', () => {
  it('BL 트랙 시나리오: 달달 BL 본진러 결과 도출', () => {
    const answers: Answers = {
      Q1: 'B',  // BL 트랙
      Q2: 'A',  // 달달
      Q3: 'A',  // 현실
      Q4: 'A',  // 다정공
      Q5: 'A',  // 미남공
      Q6: 'A',  // 평범한 인간
      Q7: 'A',  // 1:1
      Q8: 'A',  // 해피엔딩
    };
    const result = recommend(answers, WEBTOONS);
    expect(result.type.track).toBe('BL');
    expect(result.type.id).toBe('bl-sweet');
    expect(result.webtoons.length).toBeGreaterThan(0);
  });

  it('HL 트랙 시나리오: 다크 드라마 매니아 결과 (판타지/다각/다크 선택)', () => {
    const answers: Answers = {
      Q1: 'A',  // HL 트랙
      Q2: 'B',  // 19금
      Q3: 'B',  // 판타지 (사내연애·순애 점수 회피)
      Q4: 'B',  // 집착
      Q5: 'B',  // 듬직
      Q6: 'A',  // 평범 인간
      Q7: 'B',  // 다각 (순애 점수 회피)
      Q8: 'B',  // 다크 → 느와르+5, 미스터리+3, 피폐물+3
    };
    const result = recommend(answers, WEBTOONS);
    expect(result.type.track).toBe('HL');
    expect(result.type.id).toBe('hl-dark-drama');
  });

  it('HL 트랙 시나리오: 순정 로맨스 본진러 결과 (현실/1:1/달달 선택)', () => {
    const answers: Answers = {
      Q1: 'A', Q2: 'A', Q3: 'A', Q4: 'A', Q5: 'A', Q6: 'A', Q7: 'A', Q8: 'A',
    };
    const result = recommend(answers, WEBTOONS);
    expect(result.type.track).toBe('HL');
    expect(result.type.id).toBe('hl-pure-romance');
  });

  it('Q2=A이면 19금 작품 절대 안 나옴', () => {
    const answers: Answers = {
      Q1: 'B', Q2: 'A', Q3: 'A', Q4: 'A', Q5: 'A', Q6: 'A', Q7: 'A', Q8: 'A',
    };
    const result = recommend(answers, WEBTOONS);
    for (const w of result.webtoons) {
      expect(w.tags).not.toContain('19금');
    }
  });
});
