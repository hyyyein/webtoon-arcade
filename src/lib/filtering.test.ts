import { describe, it, expect } from 'vitest';
import { collectExcludeTags, applyExcludeFilter } from './filtering';
import type { Answers, Webtoon } from '../types';

const sampleWebtoons: Webtoon[] = [
  {
    id: 'w1', slug: 'a', title: 'A', author: 'a1', track: 'HL',
    tags: ['HL', '순애', '달달물'],
    popularity: 80, synopsis: '', lezhinUrl: '', thumbnailUrl: '', fallbackColor: '#000',
  },
  {
    id: 'w2', slug: 'b', title: 'B', author: 'a2', track: 'HL',
    tags: ['HL', '19금', '집착남'],
    popularity: 70, synopsis: '', lezhinUrl: '', thumbnailUrl: '', fallbackColor: '#000',
  },
  {
    id: 'w3', slug: 'c', title: 'C', author: 'a3', track: 'BL',
    tags: ['BL', '달달물', '사랑꾼공'],
    popularity: 90, synopsis: '', lezhinUrl: '', thumbnailUrl: '', fallbackColor: '#000',
  },
];

describe('collectExcludeTags', () => {
  it('Q2=A 선택 시 19금 등 제외 태그 수집', () => {
    const tags = collectExcludeTags({ Q2: 'A' });
    expect(tags).toContain('19금');
    expect(tags).toContain('능욕공');
    expect(tags).toContain('잔혹/고어');
  });

  it('soft 질문 응답은 excludeTags에 영향 없음', () => {
    const tags = collectExcludeTags({ Q4: 'B' });
    expect(tags).toEqual([]);
  });

  it('여러 hard filter 누적', () => {
    const tags = collectExcludeTags({ Q2: 'A', Q3: 'A' });
    expect(tags).toContain('19금');
    expect(tags).toContain('판타지');
    expect(tags).toContain('이종족');
  });
});

describe('applyExcludeFilter', () => {
  it('19금 태그 가진 작품 제외', () => {
    const filtered = applyExcludeFilter(sampleWebtoons, ['19금']);
    expect(filtered.map(w => w.id)).toEqual(['w1', 'w3']);
  });

  it('빈 excludeTags면 전체 통과', () => {
    const filtered = applyExcludeFilter(sampleWebtoons, []);
    expect(filtered.length).toBe(3);
  });
});
