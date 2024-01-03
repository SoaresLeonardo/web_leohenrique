'use client';

import { ReactNode, createContext, useState } from 'react';

type CursorContextProps = {
  isHovered: boolean;
  setHovered: (value: boolean) => void;
};

export const CursorContext = createContext({
  isHovered: false
} as CursorContextProps);

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);

  const setHovered = (value: boolean) => {
    setIsHovered(value);
  };

  return (
    <CursorContext.Provider value={{ isHovered, setHovered }}>
      {children}
    </CursorContext.Provider>
  );
};
