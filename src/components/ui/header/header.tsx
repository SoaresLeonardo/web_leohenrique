'use client';

import { motion } from 'framer-motion';
import { Button } from '../button';
import { Card, CardHeader, CardTitle } from '../card';
import { useScroll } from '@/hooks/use-scroll';
import HeaderNavigation from './components/header-navigation';
import useHeaderAnimation from './hooks/use-header-animation';
import Link from 'next/link';
import { useCursor } from '@/hooks/use-cursor';

const Header = () => {
  const scrolling = useScroll();
  const { controls, showHeader } = useHeaderAnimation();
  const { setHovered } = useCursor();

  return (
    <>
      <motion.header
        initial={{ opacity: 1, y: 0 }}
        animate={controls}
        className={`fixed flex h-[12vh] w-full items-center justify-center px-8 ${
          showHeader ? '' : 'hidden'
        }`}
      >
        <Card
          className={`flex w-full items-center border-none bg-inherit shadow-none ${
            scrolling ? 'justify-center' : ' justify-between'
          }`}
        >
          {showHeader && (
            <>
              <CardHeader className="p-0">
                <Link
                  href="/"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <CardTitle className="font-bold text-primary">léo.</CardTitle>
                </Link>
              </CardHeader>
              <div className="flex items-center gap-8">
                <HeaderNavigation />
                <Button
                  className={`rounded-full ${
                    scrolling ? 'pointer-events-none opacity-0' : 'flex'
                  }`}
                >
                  Fale comigo
                </Button>
              </div>
            </>
          )}
        </Card>
      </motion.header>

      {!showHeader && (
        <div className="fixed flex h-[12vh] w-full items-center justify-center px-8">
          <HeaderNavigation />
        </div>
      )}
    </>
  );
};

export default Header;
