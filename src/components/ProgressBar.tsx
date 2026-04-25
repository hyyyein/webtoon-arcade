type Props = {
  current: number;   // 1~total
  total: number;
};

export function ProgressBar({ current, total }: Props) {
  const percent = (current / total) * 100;
  return (
    <div className="w-full">
      <div className="flex justify-between text-[10px] font-pixel text-pixel-mint mb-1">
        <span>Q{current}</span>
        <span>{current} / {total}</span>
      </div>
      <div className="w-full h-2 bg-bg-black border border-pixel-mint rounded-sm overflow-hidden">
        <div
          className="h-full bg-pixel-mint transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
