import type { Answers, TagScores, Track } from '../types';
import { QUESTIONS } from '../data/questions';

export function determineTrack(answers: Answers): Track | null {
  const q1 = answers.Q1;
  if (q1 === 'A') return 'HL';
  if (q1 === 'B') return 'BL';
  return null;
}

export function computeScores(answers: Answers, track: Track): TagScores {
  const totals: TagScores = {};

  for (const question of QUESTIONS) {
    const choice = answers[question.id];
    if (!choice) continue;

    const option = question.options[choice];
    const buckets = [
      option.scores.common,
      option.scores[track],
    ];

    for (const bucket of buckets) {
      if (!bucket) continue;
      for (const [tag, score] of Object.entries(bucket)) {
        totals[tag] = (totals[tag] ?? 0) + score;
      }
    }
  }

  return totals;
}
