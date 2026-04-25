import { describe, it, expect } from 'vitest';
import { computeScores, determineTrack } from './scoring';
import type { Answers } from '../types';

describe('determineTrack', () => {
  it('Q1=A → HL 트랙 반환', () => {
    expect(determineTrack({ Q1: 'A' })).toBe('HL');
  });

  it('Q1=B → BL 트랙 반환', () => {
    expect(determineTrack({ Q1: 'B' })).toBe('BL');
  });

  it('Q1 응답 없으면 null', () => {
    expect(determineTrack({})).toBeNull();
  });
});

describe('computeScores', () => {
  it('HL 트랙 + Q1=A: HL+5, 로맨스+2 누적', () => {
    const answers: Answers = { Q1: 'A' };
    const scores = computeScores(answers, 'HL');
    expect(scores.HL).toBe(5);
    expect(scores.로맨스).toBe(2);
  });

  it('BL 트랙 + Q4=A: 다정공+5, 순정공+3 (HL 점수는 없음)', () => {
    const answers: Answers = { Q1: 'B', Q4: 'A' };
    const scores = computeScores(answers, 'BL');
    expect(scores.BL).toBe(5);
    expect(scores.다정공).toBe(5);
    expect(scores.순정공).toBe(3);
    expect(scores.다정남).toBeUndefined();
  });

  it('소프트 점수 누적: Q4+Q5 모두 다정/미남 선택 시 BL 트랙', () => {
    const answers: Answers = { Q1: 'B', Q4: 'A', Q5: 'A' };
    const scores = computeScores(answers, 'BL');
    expect(scores.미남공).toBe(5);
    expect(scores.다정공).toBe(5);
  });

  it('common 점수도 트랙 무관하게 누적', () => {
    const answers: Answers = { Q1: 'A', Q2: 'A' };
    const scores = computeScores(answers, 'HL');
    expect(scores.달달물).toBe(5);
    expect(scores.순애).toBe(3);
    expect(scores.힐링물).toBe(2);
  });
});
