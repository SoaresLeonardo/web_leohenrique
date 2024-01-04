import { CursorContext } from '@/context/cursor';
import { useContext } from 'react';

export const useCursor = () => {
  const context = useContext(CursorContext);
  return context;
};
