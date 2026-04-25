import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function GameBoyFrame({ children }: Props) {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-bg-black">
      <div
        className="relative w-full max-w-[400px] aspect-[10/16] rounded-[24px] p-6 shadow-2xl"
        style={{
          background: 'linear-gradient(180deg, #FF6BCB 0%, #D946EF 100%)',
        }}
      >
        {/* LCD 영역 */}
        <div
          className="relative w-full bg-bg-black rounded-lg overflow-hidden"
          style={{
            height: '60%',
            boxShadow: 'inset 0 0 16px rgba(0,0,0,0.6), inset 0 0 0 4px rgba(255,255,255,0.15)',
          }}
        >
          <div className="absolute inset-0 overflow-y-auto">
            {children}
          </div>
        </div>

        {/* 컨트롤 영역 (장식용 D-pad / A-B 버튼) */}
        <div className="mt-6 flex justify-between items-center px-2">
          {/* D-pad */}
          <div className="relative w-16 h-16">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-16 h-5 bg-bg-black rounded-sm" />
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-5 h-16 bg-bg-black rounded-sm" />
          </div>

          {/* A B 버튼 (장식, 실제 클릭 X) */}
          <div className="flex gap-2 items-center mt-2">
            <button
              type="button"
              tabIndex={-1}
              aria-hidden
              className="w-10 h-10 rounded-full bg-bg-black text-pink-primary font-pixel text-sm cursor-default"
            >
              B
            </button>
            <button
              type="button"
              tabIndex={-1}
              aria-hidden
              className="w-10 h-10 rounded-full bg-bg-black text-pink-primary font-pixel text-sm cursor-default mt-2"
            >
              A
            </button>
          </div>
        </div>

        {/* SELECT / START */}
        <div className="mt-4 flex justify-center gap-3">
          <div className="w-10 h-2 bg-bg-black rounded-full opacity-60" />
          <div className="w-10 h-2 bg-bg-black rounded-full opacity-60" />
        </div>

        {/* 라벨 */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 text-bg-black font-pixel text-[10px] tracking-widest opacity-60">
          LEZHIN ARCADE
        </div>
      </div>
    </div>
  );
}
