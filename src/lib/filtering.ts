import type { Answers, Webtoon } from '../types';
import { QUESTIONS } from '../data/questions';

export function collectExcludeTags(answers: Answers): string[] {
  const tags = new Set<string>();

  for (const question of QUESTIONS) {
    if (question.type !== 'hard') continue;
    const choice = answers[question.id];
    if (!choice) continue;

    const exclude = question.options[choice].exclude;
    if (!exclude) continue;

    for (const tag of exclude) tags.add(tag);
  }

  return Array.from(tags);
}

export function applyExcludeFilter(
  webtoons: Webtoon[],
  excludeTags: string[],
): Webtoon[] {
  if (excludeTags.length === 0) return webtoons;
  const excludeSet = new Set(excludeTags);
  return webtoons.filter(w => !w.tags.some(tag => excludeSet.has(tag)));
}
