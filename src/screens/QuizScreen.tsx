import { useEffect } from 'react';
import type { Question } from '../types';
import { ProgressBar } from '../components/ProgressBar';
import { ChoiceButton } from '../components/ChoiceButton';

type Props = {
  question: Question;
  current: number;       // 0-based
  total: number;
  onAnswer: (choice: 'A' | 'B') => void;
};

export function QuizScreen({ question, current, total, onAnswer }: Props) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      const key = e.key.toLowerCase();
      if (key === 'a' || key === 'arrowleft') {
        e.preventDefault();
        onAnswer('A');
      } else if (key === 'b' || key === 'arrowright') {
        e.preventDefault();
        onAnswer('B');
      }
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onAnswer]);

  return (
    <div className="p-4 flex flex-col h-full">
      <ProgressBar current={current + 1} total={total} />

      <div className="flex-1 flex items-center justify-center my-4">
        <p className="font-pixel text-white text-base text-center px-2 leading-relaxed">
          {question.text}
        </p>
      </div>

      <div>
        <ChoiceButton
          letter="A"
          label={question.options.A.label}
          onClick={() => onAnswer('A')}
        />
        <ChoiceButton
          letter="B"
          label={question.options.B.label}
          onClick={() => onAnswer('B')}
        />
      </div>

      <p className="text-[9px] text-center text-pixel-mint/60 mt-2">
        키보드: A / B 또는 ← / →
      </p>
    </div>
  );
}
