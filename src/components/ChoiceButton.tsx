type Props = {
  letter: 'A' | 'B';
  label: string;
  onClick: () => void;
};

export function ChoiceButton({ letter, label, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-center gap-3 px-3 py-3 my-1 rounded-lg border-2 border-pink-primary bg-bg-black text-white text-left text-xs hover:bg-pink-primary/20 active:scale-95 transition"
      aria-label={`선택지 ${letter}: ${label}`}
    >
      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-pink-primary text-bg-black font-pixel flex items-center justify-center text-sm">
        {letter}
      </span>
      <span>{label}</span>
    </button>
  );
}
