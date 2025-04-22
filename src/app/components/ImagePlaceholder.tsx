'use client';

interface ImagePlaceholderProps {
  width: number;
  height: number;
  text: string;
  className?: string;
}

export default function ImagePlaceholder({ width, height, text, className = '' }: ImagePlaceholderProps) {
  return (
    <div 
      className={`bg-primary/20 flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      <p className="text-primary font-medium text-center p-4">{text}</p>
    </div>
  );
}
