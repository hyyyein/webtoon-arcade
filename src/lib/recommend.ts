import type { Answers, RecommendResult, ResultType, TagScores, Track, Webtoon } from '../types';
import { RESULT_TYPES } from '../data/resultTypes';
import { computeScores, determineTrack } from './scoring';
import { applyExcludeFilter, collectExcludeTags } from './filtering';

const PRIMARY_WEIGHT = 3;
const SECONDARY_WEIGHT = 1;

export function matchResultType(scores: TagScores, track: Track): ResultType {
  const candidates = RESULT_TYPES.filter(t => t.track === track);
  let best = candidates[0];
  let bestScore = -Infinity;

  for (const type of candidates) {
    const primary = type.primaryTags.reduce(
      (sum, tag) => sum + (scores[tag] ?? 0) * PRIMARY_WEIGHT,
      0,
    );
    const secondary = type.secondaryTags.reduce(
      (sum, tag) => sum + (scores[tag] ?? 0) * SECONDARY_WEIGHT,
      0,
    );
    const total = primary + secondary;
    if (total > bestScore) {
      bestScore = total;
      best = type;
    }
  }

  return best;
}

function primaryMatchCount(webtoon: Webtoon, type: ResultType): number {
  const set = new Set(webtoon.tags);
  return type.primaryTags.filter(tag => set.has(tag)).length;
}

export function recommend(answers: Answers, webtoons: Webtoon[]): RecommendResult {
  const track = determineTrack(answers);
  if (!track) {
    throw new Error('Q1 응답이 필요합니다 (track 결정 불가)');
  }

  const scores = computeScores(answers, track);
  const excludeTags = collectExcludeTags(answers);
  const type = matchResultType(scores, track);

  // 1) 트랙 일치 작품만
  let candidates = webtoons.filter(w => w.track === track);

  // 2) 하드필터 적용
  candidates = applyExcludeFilter(candidates, excludeTags);

  // 3) primaryTags 매칭 점수 계산 + 정렬 (인기도 우선, 매칭 점수 보조)
  candidates = candidates
    .map(w => ({ webtoon: w, match: primaryMatchCount(w, type) }))
    .filter(({ match }) => match > 0 || candidates.length < 4)
    .sort((a, b) => {
      if (b.webtoon.popularity !== a.webtoon.popularity)
        return b.webtoon.popularity - a.webtoon.popularity;
      return b.match - a.match;
    })
    .map(({ webtoon }) => webtoon);

  // 4) 작가 1명당 최대 1개
  const seenAuthors = new Set<string>();
  const final: Webtoon[] = [];
  for (const w of candidates) {
    if (seenAuthors.has(w.author)) continue;
    seenAuthors.add(w.author);
    final.push(w);
    if (final.length === 4) break;
  }

  return { type, webtoons: final };
}
