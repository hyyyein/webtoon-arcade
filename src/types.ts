export type Track = 'HL' | 'BL';

export type TagScores = Record<string, number>;

export type Option = {
  label: string;
  scores: {
    common?: TagScores;
    HL?: TagScores;
    BL?: TagScores;
  };
  exclude?: string[];          // hard filter일 때만 사용
  setTrack?: Track;            // Q1 분기에서만 사용
};

export type Question = {
  id: string;                  // "Q1" ~ "Q8"
  text: string;
  type: 'branch' | 'hard' | 'soft';
  options: { A: Option; B: Option };
};

export type ResultType = {
  id: string;                  // "result-hl-romance" 등
  track: Track;
  emoji: string;
  name: string;
  description: string;         // 1~2문장 설명
  primaryTags: string[];
  secondaryTags: string[];
};

export type Webtoon = {
  id: string;                  // "wt-001"
  slug: string;                // Lezhin URL slug
  title: string;
  author: string;
  track: Track;
  tags: string[];
  popularity: number;          // 0~100
  synopsis: string;
  lezhinUrl: string;
  thumbnailUrl: string;
  fallbackColor: string;       // hex
};

export type Answers = Record<string, 'A' | 'B'>;  // { Q1: 'A', Q2: 'B', ... }

export type RecommendResult = {
  type: ResultType;
  webtoons: Webtoon[];         // 최대 4개
};

export type Screen = 'intro' | 'quiz' | 'loading' | 'gacha' | 'result';
