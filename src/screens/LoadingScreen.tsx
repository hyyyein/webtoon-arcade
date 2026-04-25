import { useEffect, useState } from 'react';

type Props = {
  onComplete: () => void;
  durationMs?: number;
};

export function LoadingScreen({ onComplete, durationMs = 2500 }: Props) {
  const [dots, setDots] = useState(1);

  useEffect(() => {
    const dotId = setInterval(() => setDots(d => (d % 3) + 1), 400);
    const completeId = setTimeout(onComplete, durationMs);
    return () => {
      clearInterval(dotId);
      clearTimeout(completeId);
    };
  }, [onComplete, durationMs]);

  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <p className="font-pixel text-pixel-mint text-lg">
        LOADING{'.'.repeat(dots)}
      </p>
      <p className="text-[10px] text-white/60 mt-3">취향 분석 중...</p>
    </div>
  );
}
