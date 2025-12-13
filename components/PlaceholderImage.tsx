// components/PlaceholderImage.tsx
export function PlaceholderImage({ text }: { text: string }) {
  return (
    <div className="w-full h-full bg-[#e8efe6] flex items-center justify-center">
      <span className="text-[#4a5d3f] text-xl font-bold">{text}</span>
    </div>
  );
}