'use client';

import { useEffect, useState } from 'react';

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [outlinePosition, setOutlinePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
    setTimeout(() => {
      setOutlinePosition({ x: e.clientX, y: e.clientY });
    }, 100);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="cursor-outline"
        style={{ top: outlinePosition.y, left: outlinePosition.x }}
      ></div>
      <div
        className="cursor-dot"
        style={{ top: cursorPosition.y, left: cursorPosition.x }}
      ></div>
    </>
  );
};

export default Cursor;
