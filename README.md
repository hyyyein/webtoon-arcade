# 🎮 Webtoon Arcade

> 8개 질문으로 너에게 딱 맞는 레진 웹툰 4편을 찾아주는 레트로 게임기 컨셉의 추천 퀴즈

**🚀 Live**: https://webtoon-arcade.vercel.app

---

## 만든 이유

회사 프로젝트로 만든 [storychat-quiz](https://storychat-quiz.vercel.app)에서 검증한 추천 알고리즘 구조를 **레진코믹스 채용 지원**용으로 재설계했습니다.

핵심 변경점:
- **소재**: AI 캐릭터 채팅 → 레진 웹툰
- **태그 체계**: 회사 자체 vocabulary → **레진 공식 태그 (일반/BL 분리)**
- **비주얼 컨셉**: 다크 채팅 UI → **레트로 게임기 (Game Boy 프레임)** — 레진 인스타그램 광고의 톤앤매너 차용

---

## 컨셉

레진코믹스의 인스타그램 광고에서 자주 보이는 **레트로 게임기 / 픽셀 아트 톤앤매너**를 그대로 차용했습니다. 모든 화면이 Game Boy 디바이스 프레임 안에서 진행되어, "퀴즈"가 자연스럽게 "게임"이 되는 메타포를 살렸습니다.

| 화면 | 메타포 |
|---|---|
| 인트로 | INSERT COIN → PRESS START |
| 퀴즈 | A / B 게임패드 버튼 (키보드 ← → 도 지원) |
| 진행바 | 픽셀 라이프 게이지 |
| 로딩 | LOADING... 픽셀 도트 점멸 |
| 가차 연출 | 슬롯머신 3-reel 스핀 |
| 결과 | GAME SET MATCH! 🎮 |

---

## 추천 알고리즘

### 트랙 분기 (Q1)
- A → 일반 (HL) 트랙: 모든 BL 작품 제외, 일반 결과 유형 4개 중 매칭
- B → BL 트랙: 모든 일반 작품 제외, BL 결과 유형 4개 중 매칭

### 점수 시스템 (Q2~Q8)
- **하드필터** (Q2/Q3/Q6/Q7): 선택 안 한 쪽의 `excludeTags` 누적 → 해당 태그 작품 완전 제외
- **소프트점수** (Q4/Q5/Q8): 선택한 옵션의 점수만 누적 (트랙별 다른 vocabulary 사용)

### 매칭 (의사코드)
```
1. computeScores(answers, track) → tagScores
2. collectExcludeTags(answers) → excludeSet
3. matchResultType(tagScores, track) → 트랙 안에서 best result type
4. webtoons
   .filter(track 일치)
   .filter(태그 ∉ excludeSet)
   .sort(primaryMatch desc → popularity desc)
   .uniqueByAuthor()
   .take(4)
```

자세한 점수표는 `docs/superpowers/specs/2026-04-25-webtoon-arcade-design.md` 참조.

---

## 데이터 큐레이션

- 레진코믹스 공개 페이지에서 직접 수집한 40~60개 작품 (현재: 시드 데이터 9개)
- 8개 결과 유형 각각 최소 5개 이상 매칭 보장 목표
- 작가 1명당 최대 3개 (편향 방지)
- 시놉시스는 모두 자체 작성 (공식 문구 미사용)
- 썸네일은 Lezhin CDN **핫링크 + 깨질 시 그라디언트 카드 폴백**

큐레이션 작업 방법은 `docs/curation-guide.md` 참조.

---

## 기술 스택

- React 19 + Vite + TypeScript
- Tailwind CSS v4
- framer-motion (가차 슬롯머신, `useReducedMotion` 접근성 대응)
- 라우팅 라이브러리 없음 (단일 SPA + useReducer)
- Vercel 정적 배포

핵심 로직(`scoring.ts`, `filtering.ts`, `recommend.ts`)은 모두 순수 함수로 TDD 구현. Vitest로 단위/통합 테스트 22개 작성.

---

## 로컬 실행

```bash
npm install
npm run dev          # http://localhost:5173
npm run test         # watch mode
npm run test:run     # 1회 실행
npm run build        # production build
```

---

## 면책

본 사이트는 **비공식 포트폴리오/케이스 스터디**입니다.
레진코믹스 로고 및 작품 이미지는 © 레진엔터테인먼트의 저작물이며, 채용 지원 목적으로만 사용됩니다.
