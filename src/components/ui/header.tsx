import Link from 'next/link';
import { Button } from './button';
import { Card, CardHeader, CardTitle } from './card';

const Header = () => {
  const navigation_links = [
    { text: 'Início', href: '/' },
    { text: 'Sobre', href: '/me' },
    { text: 'Projetos', href: '/projects' },
    { text: 'Blog', href: '/blog' }
  ];
  return (
    <header className="fixed flex h-[14vh] w-full items-center justify-center px-8 backdrop-blur-lg">
      <Card className="flex w-full max-w-7xl items-center justify-between border-none bg-inherit shadow-none">
        <CardHeader className="p-0">
          <CardTitle className="font-bold">leo.</CardTitle>
        </CardHeader>
        <div className="flex items-center justify-center gap-8">
          <nav>
            <ul className="duration-400 flex items-center justify-center transition-colors hover:text-muted-foreground/30">
              {navigation_links.map((link, index) => (
                <li
                  key={index}
                  className="duration-400 px-8 font-medium transition-colors hover:text-foreground"
                >
                  <Link href={link.href}>{`// ${link.text}`}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button className="gradient rounded-full">Fale comigo</Button>
        </div>
      </Card>
    </header>
  );
};

export default Header;
