'use client';

import { useCursor } from '@/hooks/useCursor';
import { useEffect, useState } from 'react';

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const { isHovered } = useCursor();

  const handleMouseMove = (e: MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`cursor-dot ${isHovered ? 'hovered' : ''}`}
      style={{
        top: cursorPosition.y,
        left: cursorPosition.x,
        transform: `scale(${isHovered ? 1.5 : 1})`
      }}
    />
  );
};

export default Cursor;
