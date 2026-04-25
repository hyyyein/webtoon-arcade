import type { RecommendResult } from '../types';
import { WebtoonCard } from '../components/WebtoonCard';
import { ShareButtons } from '../components/ShareButtons';

type Props = {
  result: RecommendResult;
  onRestart: () => void;
};

export function ResultScreen({ result, onRestart }: Props) {
  const { type, webtoons } = result;

  return (
    <div className="p-3 flex flex-col">
      <p className="font-pixel text-pink-primary text-center text-sm">GAME SET MATCH! 🎮</p>

      <div className="text-center my-2 px-2">
        <p className="text-3xl">{type.emoji}</p>
        <p className="font-pixel text-white text-base">{type.name}</p>
        <p className="text-[10px] text-pixel-mint mt-1 leading-relaxed">{type.description}</p>
      </div>

      <div className="grid grid-cols-2 gap-2 my-2">
        {webtoons.map(w => (
          <WebtoonCard key={w.id} webtoon={w} />
        ))}
      </div>

      <ShareButtons resultName={type.name} />

      <button
        type="button"
        onClick={onRestart}
        className="mt-3 w-full py-2 font-pixel text-[10px] text-pink-primary border-2 border-pink-primary rounded active:scale-95 transition"
      >
        RETRY
      </button>

      <p className="text-[8px] text-center text-white/30 mt-3 px-2 leading-relaxed">
        본 사이트는 비공식 포트폴리오/케이스 스터디입니다.<br />
        레진코믹스 로고 및 작품 이미지는 © 레진엔터테인먼트의 저작물이며,<br />
        채용 지원 목적으로만 사용됩니다.
      </p>
    </div>
  );
}
