import { motion, useReducedMotion } from 'motion/react';
import type { Webtoon } from '../types';

type Props = {
  webtoons: Webtoon[];     // 결과 4개
  onComplete: () => void;
  durationMs?: number;
};

export function SlotMachine({ webtoons, onComplete, durationMs = 2200 }: Props) {
  const prefersReducedMotion = useReducedMotion();
  // 회전을 위해 카드를 여러 번 반복
  const reels = [...webtoons, ...webtoons, ...webtoons];

  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <p className="font-pixel text-pink-primary text-sm mb-3">SLOT SPIN!</p>
      <div className="relative w-32 h-44 overflow-hidden border-2 border-pink-primary rounded-lg bg-bg-black">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: -reels.length * 176 + 176 }}
          transition={{
            duration: prefersReducedMotion ? 0.4 : durationMs / 1000,
            ease: [0.2, 0.8, 0.4, 1],
          }}
          onAnimationComplete={onComplete}
          className="flex flex-col"
        >
          {reels.map((w, i) => (
            <div
              key={`${w.id}-${i}`}
              className="w-32 h-44 flex-shrink-0 flex items-center justify-center p-2"
              style={{
                background: `linear-gradient(135deg, ${w.fallbackColor} 0%, #0A0A0A 100%)`,
              }}
            >
              <p className="font-pixel text-white text-xs text-center">{w.title}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
