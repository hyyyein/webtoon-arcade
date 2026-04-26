import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function GameBoyFrame({ children }: Props) {
  return (
    <div className="flex items-center justify-center min-h-screen p-2 bg-bg-black">
      <div
        className="w-full max-w-[360px] flex flex-col"
        style={{ height: 'min(95dvh, 700px)' }}
      >

        {/* ── TOP SECTION: 스크린 하우징 ── */}
        <div
          className="flex flex-col shadow-2xl"
          style={{
            flex: '0 0 66%',
            background: '#1C1C1C',
            borderRadius: '18px 18px 8px 8px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)',
          }}
        >
          {/* 상태바: POWER ON / BATTERY FULL */}
          <div className="flex justify-between items-center px-4 pt-2.5 pb-1 flex-shrink-0">
            <div className="flex items-center gap-1.5">
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#4ADE80',
                  boxShadow: '0 0 5px #4ADE80',
                }}
              />
              <span className="font-pixel text-[7px] tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>
                POWER ON
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-pixel text-[7px] tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>
                BATTERY FULL
              </span>
              {/* 배터리 아이콘 */}
              <div className="flex items-center">
                <div
                  className="w-5 h-2.5 rounded-[2px] border relative overflow-hidden"
                  style={{ borderColor: 'rgba(255,255,255,0.3)' }}
                >
                  <div className="absolute inset-y-[1px] left-[1px] right-[1px] rounded-[1px] bg-green-400" />
                </div>
                <div
                  className="w-[2px] h-[5px] rounded-r-full ml-[1px]"
                  style={{ background: 'rgba(255,255,255,0.3)' }}
                />
              </div>
            </div>
          </div>

          {/* LCD 스크린 */}
          <div
            className="flex-1 mx-3 rounded-[8px] relative overflow-hidden"
            style={{
              background: '#080808',
              boxShadow:
                'inset 0 3px 14px rgba(0,0,0,0.95), inset 0 0 0 1px rgba(255,255,255,0.04)',
            }}
          >
            {/* 스캔라인 오버레이 — 미세한 CRT 느낌 */}
            <div
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)',
              }}
            />
            <div className="absolute inset-0 overflow-y-auto">
              {children}
            </div>
          </div>

          {/* GAME BOY ADVANCE SP 로고 */}
          <div className="text-center py-2 flex-shrink-0">
            <span
              className="font-pixel tracking-widest"
              style={{
                fontSize: '8px',
                color: 'rgba(255,255,255,0.35)',
                fontStyle: 'italic',
                letterSpacing: '0.15em',
              }}
            >
              GAME BOY ADVANCE SP
            </span>
          </div>
        </div>

        {/* ── 힌지 ── */}
        <div
          className="flex-shrink-0 mx-5 relative"
          style={{
            height: '13px',
            background: 'linear-gradient(180deg, #C8809A 0%, #B87090 50%, #C8809A 100%)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
          }}
        >
          {/* 힌지 중앙 홈 */}
          <div
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 mx-6"
            style={{
              height: '3px',
              background: 'rgba(0,0,0,0.25)',
              borderRadius: '1px',
            }}
          />
        </div>

        {/* ── BOTTOM SECTION: 컨트롤 ── */}
        <div
          className="flex-1 flex flex-col"
          style={{
            background: '#F4A0B5',
            borderRadius: '4px 4px 22px 22px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.3)',
          }}
        >
          {/* 메인 컨트롤 행: D-pad + B/A */}
          <div className="flex items-center justify-between px-6 pt-3 pb-1">

            {/* D-pad */}
            <div className="relative" style={{ width: 56, height: 56 }}>
              {/* 가로 바 */}
              <div
                className="absolute top-1/2 left-0 -translate-y-1/2 w-full"
                style={{
                  height: '34%',
                  background: '#2E2E2E',
                  borderRadius: '4px',
                  boxShadow: '0 3px 6px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
                }}
              />
              {/* 세로 바 */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 h-full"
                style={{
                  width: '34%',
                  background: '#2E2E2E',
                  borderRadius: '4px',
                  boxShadow: '0 3px 6px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
                }}
              />
              {/* 가운데 작은 원 */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: '28%',
                  height: '28%',
                  background: '#262626',
                  borderRadius: '50%',
                }}
              />
              {/* 방향 화살표 (장식) */}
              {[
                { top: '5%', left: '50%', rotate: '0deg' },
                { top: '50%', left: '92%', rotate: '90deg' },
                { top: '90%', left: '50%', rotate: '180deg' },
                { top: '50%', left: '5%', rotate: '270deg' },
              ].map(({ top, left, rotate }, i) => (
                <div
                  key={i}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ top, left, fontSize: '7px', color: 'rgba(255,255,255,0.25)', transform: `translate(-50%,-50%) rotate(${rotate})` }}
                >
                  ▲
                </div>
              ))}
            </div>

            {/* B / A 버튼 — 나란히 배치 */}
            <div className="flex items-center gap-2">
              {(['B', 'A'] as const).map(label => (
                <button
                  key={label}
                  type="button"
                  tabIndex={-1}
                  aria-hidden
                  className="flex items-center justify-center font-pixel cursor-default select-none"
                  style={{
                    width: 36,
                    height: 36,
                    background: 'radial-gradient(circle at 40% 35%, #555, #2E2E2E)',
                    borderRadius: '50%',
                    color: 'rgba(255,255,255,0.55)',
                    fontSize: '11px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* SELECT / START 버튼 */}
          <div className="flex justify-center gap-6 mt-1">
            {(['SELECT', 'START'] as const).map(label => (
              <div key={label} className="flex flex-col items-center gap-1">
                <div
                  style={{
                    width: 32,
                    height: 8,
                    background: 'radial-gradient(circle at 40% 40%, #555, #2E2E2E)',
                    borderRadius: '4px',
                    transform: 'rotate(-15deg)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
                  }}
                />
                <span
                  className="font-pixel"
                  style={{ fontSize: '6px', color: 'rgba(0,0,0,0.35)', letterSpacing: '0.05em' }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* 스피커 그릴 (4×3 도트) */}
          <div className="flex justify-center mt-1.5">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 6px)',
                gridTemplateRows: 'repeat(3, 6px)',
                gap: '3px',
              }}
            >
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: 'rgba(0,0,0,0.22)',
                    boxShadow: 'inset 0 1px 1px rgba(0,0,0,0.3)',
                  }}
                />
              ))}
            </div>
          </div>

          {/* 면책 문구 — 컨트롤 하단 */}
          <p
            className="text-center px-4 pb-3 mt-auto leading-relaxed"
            style={{ fontSize: '6px', color: 'rgba(255,255,255,0.5)' }}
          >
            본 사이트는 비공식 포트폴리오/케이스 스터디입니다.<br />
            레진코믹스 로고 및 작품 이미지는 © 레진엔터테인먼트의 저작물이며,<br />
            채용 지원 목적으로만 사용됩니다.
          </p>
        </div>

      </div>

    </div>
  );
}
