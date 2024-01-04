import { useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const useHeaderAnimation = () => {
  const [showHeader, setShowHeader] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        controls.start({ opacity: 0, y: -20 });
        setShowHeader(false);
      } else {
        controls.start({ opacity: 1, y: 0 });
        setShowHeader(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return {
    controls,
    showHeader
  };
};

export default useHeaderAnimation;
