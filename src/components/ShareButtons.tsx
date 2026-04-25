import { useState } from 'react';

type Props = {
  resultName: string;
};

export function ShareButtons({ resultName }: Props) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const text = `나는 ${resultName}! 너의 레진 웹툰 취향은? 🎮`;

  const handleX = () => {
    const u = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(u, '_blank', 'noopener,noreferrer');
  };

  const handleDiscord = async () => {
    try {
      await navigator.clipboard.writeText(`${text} ${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  };

  return (
    <div className="flex justify-center gap-2 mt-3">
      <button
        type="button"
        onClick={handleX}
        className="font-pixel text-[10px] px-3 py-2 border border-pink-primary text-pink-primary rounded"
      >
        X
      </button>
      <button
        type="button"
        onClick={handleDiscord}
        className="font-pixel text-[10px] px-3 py-2 border border-pink-primary text-pink-primary rounded"
      >
        DISCORD
      </button>
      <button
        type="button"
        onClick={handleCopy}
        className="font-pixel text-[10px] px-3 py-2 border border-pink-primary text-pink-primary rounded"
      >
        {copied ? 'COPIED!' : 'LINK'}
      </button>
    </div>
  );
}
