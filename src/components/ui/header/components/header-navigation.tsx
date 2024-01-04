import { navigation_links } from '@/constants/navigations-links';
import { useCursor } from '@/hooks/use-cursor';
import { useScroll } from '@/hooks/use-scroll';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeaderNavigation = () => {
  const scrolling = useScroll();
  const { setHovered } = useCursor();

  const links = navigation_links.filter(
    (link) => scrolling || link.href !== '/contact'
  );

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`group transition-colors hover:bg-background ${
        scrolling ? 'rounded-full border p-3 backdrop-blur-lg' : ''
      }`}
    >
      <motion.ul className="duration-400 flex items-center justify-center text-foreground/85 transition-colors group-hover:text-muted-foreground/30">
        {links.map((link, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
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

export default HeaderNavigation;
