import { useState } from 'react';
import type { Webtoon } from '../types';

type Props = {
  webtoon: Webtoon;
};

export function WebtoonCard({ webtoon }: Props) {
  const [imgFailed, setImgFailed] = useState(!webtoon.thumbnailUrl);

  return (
    <a
      href={webtoon.lezhinUrl}
      target="_blank"
      rel="noreferrer noopener"
      className="block rounded-lg overflow-hidden border-2 border-pink-primary bg-bg-black active:scale-95 transition"
    >
      <div
        className="relative w-full aspect-[3/4]"
        style={imgFailed ? {
          background: `linear-gradient(135deg, ${webtoon.fallbackColor} 0%, #0A0A0A 100%)`,
        } : undefined}
      >
        {!imgFailed && (
          <img
            src={webtoon.thumbnailUrl}
            alt={webtoon.title}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={() => setImgFailed(true)}
            referrerPolicy="no-referrer"
          />
        )}
        {imgFailed && (
          <div className="absolute inset-0 flex items-center justify-center p-2">
            <p className="font-pixel text-white text-xs text-center">{webtoon.title}</p>
          </div>
        )}
      </div>
      <div className="p-2">
        <p className="font-pixel text-white text-[10px] truncate">{webtoon.title}</p>
        <p className="text-pixel-mint text-[8px] mt-0.5 truncate">{webtoon.author}</p>
      </div>
    </a>
  );
}
