import { useEffect, useState } from 'react';
import { ChatBubble } from '../components/ChatBubble';
import { PixelFlame } from '../components/PixelFlame';

type Props = {
  onStart: () => void;
};

export function IntroScreen({ onStart }: Props) {
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setBlink(b => !b), 600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="p-4 flex flex-col h-full">
      <div className="text-center my-2">
        <h1 className="font-pixel text-pink-primary text-lg leading-none">
          WEBTOON ARCADE
        </h1>
        <p className="text-[10px] text-pixel-mint mt-1">너에게 딱 맞는 레진 웹툰 찾기</p>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <ChatBubble text="안녕! 너에게 딱 맞는 레진 웹툰 4편을 찾아줄게 ✨" />
        <ChatBubble text="어떻게 찾아주는 건데?" variant="user" />
        <ChatBubble text="8개만 답해주면 돼! 약 1분 걸려" />
      </div>

      <button
        type="button"
        onClick={onStart}
        className="w-full py-4 mt-4 font-pixel text-pink-primary bg-bg-black border-2 border-pink-primary rounded-lg active:scale-95 transition"
      >
        {blink ? 'INSERT COIN' : 'PRESS START'}
      </button>

      <div className="flex justify-center gap-1 mt-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <PixelFlame key={i} />
        ))}
      </div>
    </div>
  );
}
