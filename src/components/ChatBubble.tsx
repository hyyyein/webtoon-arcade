type Props = {
  text: string;
  variant?: 'system' | 'user';
};

export function ChatBubble({ text, variant = 'system' }: Props) {
  const isUser = variant === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}>
      <div
        className={`relative max-w-[70%] px-3 py-2 rounded-2xl text-xs ${
          isUser
            ? 'bg-bg-black text-white border border-pink-primary'
            : 'bg-pink-primary text-white'
        }`}
      >
        {text}
      </div>
    </div>
  );
}
