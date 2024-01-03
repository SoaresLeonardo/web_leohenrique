'use client';

import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { Button } from './button';
import { Card, CardHeader, CardTitle } from './card';
import { useEffect, useState } from 'react';

const HeaderNavigation = ({ scrolling }: { scrolling: boolean }) => {
  const navigation_links = [
    { text: 'Sobre', href: '/me' },
    { text: 'Projetos', href: '/projects' },
    { text: 'Blog', href: '/blog' }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`group transition-colors hover:bg-background ${
        scrolling ? 'rounded-full border p-3 backdrop-blur-lg' : ''
      }`}
    >
      <motion.ul className="duration-400 flex items-center justify-center transition-colors group-hover:text-muted-foreground/30">
        {navigation_links.map((link, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="duration-400 link px-8 text-sm font-medium transition-colors hover:text-primary"
          >
            <Link href={link.href}>
              <span className="text-primary">{`// `}</span>
              {link.text}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
        controls.start({ opacity: 0, y: -20 });
        setShowHeader(false);
      } else {
        setScrolling(false);
        controls.start({ opacity: 1, y: 0 });
        setShowHeader(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

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
                <CardTitle className="font-bold text-primary">léo.</CardTitle>
              </CardHeader>
              <div className="flex items-center gap-8">
                <HeaderNavigation scrolling={scrolling} />
                <Button
                  className={`rounded-full ${
                    scrolling ? 'pointer-events-none opacity-0' : 'flex'
                  }`}
                  variant="ghost"
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
          <HeaderNavigation scrolling={scrolling} />
        </div>
      )}
    </>
  );
};

export default Header;
