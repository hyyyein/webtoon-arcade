import { useReducer, useCallback } from 'react';
import type { Answers, RecommendResult, Screen } from '../types';
import { QUESTIONS } from '../data/questions';
import { recommend } from '../lib/recommend';
import { WEBTOONS } from '../lib/loadWebtoons';

type State = {
  screen: Screen;
  currentQuestion: number;     // 0-based index into QUESTIONS
  answers: Answers;
  result: RecommendResult | null;
};

type Action =
  | { type: 'START' }
  | { type: 'ANSWER'; questionId: string; choice: 'A' | 'B' }
  | { type: 'BEGIN_LOADING' }
  | { type: 'BEGIN_GACHA'; result: RecommendResult }
  | { type: 'SHOW_RESULT' }
  | { type: 'RESTART' };

const initialState: State = {
  screen: 'intro',
  currentQuestion: 0,
  answers: {},
  result: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'START':
      return { ...initialState, screen: 'quiz' };

    case 'ANSWER': {
      const newAnswers = { ...state.answers, [action.questionId]: action.choice };
      const isLast = state.currentQuestion >= QUESTIONS.length - 1;
      return {
        ...state,
        answers: newAnswers,
        currentQuestion: isLast ? state.currentQuestion : state.currentQuestion + 1,
        screen: isLast ? 'loading' : 'quiz',
      };
    }

    case 'BEGIN_LOADING':
      return { ...state, screen: 'loading' };

    case 'BEGIN_GACHA':
      return { ...state, screen: 'gacha', result: action.result };

    case 'SHOW_RESULT':
      return { ...state, screen: 'result' };

    case 'RESTART':
      return initialState;

    default:
      return state;
  }
}

export function useQuizState() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const start = useCallback(() => dispatch({ type: 'START' }), []);

  const answer = useCallback((questionId: string, choice: 'A' | 'B') => {
    dispatch({ type: 'ANSWER', questionId, choice });
  }, []);

  const beginGacha = useCallback(() => {
    const result = recommend(state.answers, WEBTOONS);
    dispatch({ type: 'BEGIN_GACHA', result });
  }, [state.answers]);

  const showResult = useCallback(() => dispatch({ type: 'SHOW_RESULT' }), []);

  const restart = useCallback(() => dispatch({ type: 'RESTART' }), []);

  return {
    state,
    actions: { start, answer, beginGacha, showResult, restart },
    currentQuestion: QUESTIONS[state.currentQuestion],
    totalQuestions: QUESTIONS.length,
  };
}
