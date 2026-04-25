import { useEffect, useState } from 'react';
import { ChatBubble } from '../components/ChatBubble';
import { PixelFlame } from '../components/PixelFlame';

type Props = {
  onStart: () => void;
};

export function IntroScreen({ onStart }: Props) {
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setBlink(b => !b), 550);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col h-full bg-bg-black">

      {/* ── 상단 스코어바 (아케이드 HUD) ── */}
      <div
        className="flex justify-between items-center px-2 py-1.5 flex-shrink-0"
        style={{ borderBottom: '1px solid rgba(127,255,212,0.15)' }}
      >
        <div className="text-center min-w-[48px]">
          <div className="font-pixel text-[7px] text-pixel-mint">1UP</div>
          <div className="font-pixel text-[7px] text-white tabular-nums">00000</div>
        </div>
        <div className="text-center">
          <div
            className="font-pixel text-pink-primary leading-none"
            style={{ fontSize: '9px', textShadow: '0 0 8px rgba(255,107,203,0.7)' }}
          >
            WEBTOON
          </div>
          <div
            className="font-pixel text-pink-primary leading-none"
            style={{ fontSize: '9px', textShadow: '0 0 8px rgba(255,107,203,0.7)' }}
          >
            ARCADE
          </div>
        </div>
        <div className="text-center min-w-[48px]">
          <div className="font-pixel text-[7px] text-pixel-mint">LEZHIN</div>
          <div className="font-pixel text-[7px] text-white tabular-nums">00000</div>
        </div>
      </div>

      {/* ── 메인 콘텐츠 (스크롤 영역) ── */}
      <div className="flex-1 overflow-y-auto flex flex-col">

        {/* 픽셀 아트 타이틀 */}
        <div className="text-center pt-3 px-3 flex-shrink-0">
          <div
            className="font-pixel text-pink-primary leading-tight inline-block"
            style={{
              fontSize: '22px',
              textShadow:
                '2px 0 0 #D946EF, -2px 0 0 #D946EF, 0 2px 0 #D946EF, 0 -2px 0 #D946EF, 3px 3px 0 rgba(0,0,0,0.6)',
              letterSpacing: '0.05em',
            }}
          >
            WEBTOON
          </div>
          <div
            className="font-pixel text-pink-primary leading-tight block"
            style={{
              fontSize: '22px',
              textShadow:
                '2px 0 0 #D946EF, -2px 0 0 #D946EF, 0 2px 0 #D946EF, 0 -2px 0 #D946EF, 3px 3px 0 rgba(0,0,0,0.6)',
              letterSpacing: '0.05em',
            }}
          >
            ARCADE
          </div>
          <div
            className="font-pixel mt-1"
            style={{
              fontSize: '7px',
              color: '#7FFFD4',
              letterSpacing: '0.2em',
              textShadow: '0 0 6px rgba(127,255,212,0.5)',
            }}
          >
            ★ LEZHIN EDITION ★
          </div>
        </div>

        {/* 채팅 말풍선 */}
        <div className="px-2 mt-2 flex-shrink-0">
          <ChatBubble text="안녕! 너에게 딱 맞는 레진 웹툰 4편을 찾아줄게 ✨" />
          <ChatBubble text="어떻게 찾아주는 건데?" variant="user" />
          <ChatBubble text="8개만 답해주면 돼! 약 1분 걸려" />
        </div>

        {/* INSERT COIN 버튼 */}
        <div className="px-3 mt-3 flex-shrink-0">
          <button
            type="button"
            onClick={onStart}
            className="w-full py-2.5 font-pixel active:scale-95 transition-transform"
            style={{
              fontSize: '10px',
              border: `2px solid ${blink ? '#7FFFD4' : 'rgba(127,255,212,0.2)'}`,
              color: blink ? '#7FFFD4' : 'rgba(127,255,212,0.2)',
              background: blink ? 'rgba(127,255,212,0.05)' : 'transparent',
              borderRadius: '4px',
              textShadow: blink ? '0 0 8px rgba(127,255,212,0.6)' : 'none',
              transition: 'color 0.15s, border-color 0.15s, background 0.15s, text-shadow 0.15s',
              letterSpacing: '0.1em',
            }}
          >
            ▶ INSERT COIN ◀
          </button>
        </div>

        <div className="flex-1" />
      </div>

      {/* ── 하단: 픽셀 불꽃 + CREDITS ── */}
      <div className="flex-shrink-0 px-2 pb-1.5">
        <div className="flex justify-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <PixelFlame key={i} />
          ))}
        </div>
        <div className="flex justify-between items-center mt-0.5">
          <span
            className="font-pixel"
            style={{ fontSize: '7px', color: '#7FFFD4', textShadow: '0 0 4px rgba(127,255,212,0.4)' }}
          >
            CREDITS 01
          </span>
          <span
            className="font-pixel"
            style={{ fontSize: '7px', color: 'rgba(255,255,255,0.25)' }}
          >
            © LEZHIN
          </span>
        </div>
      </div>

    </div>
  );
}
