import { useEffect, useState } from 'react';

export const useScroll = ({ value = 0 }: { value?: number } = {}) => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > (0 || value)) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [value]);

  return scrolling;
};
