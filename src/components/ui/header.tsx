import Link from 'next/link';
import { Button } from './button';
import { Card, CardHeader, CardTitle } from './card';

const Header = () => {
  const navigation_links = [
    { text: 'Sobre', href: '/me' },
    { text: 'Projetos', href: '/projects' },
    { text: 'Blog', href: '/blog' },
    { text: 'Contato', href: '/contact' }
  ];
  return (
    <header className="flex h-[14vh] w-full items-center justify-center px-8">
      <Card className="flex w-full items-center justify-between border-none bg-inherit">
        <CardHeader className="p-0">
          <CardTitle className="gradient-text font-bold">
            leonardo h <span className="text-foreground">{'>'}</span>_
          </CardTitle>
        </CardHeader>
        <nav>
          <ul className="hover:text-muted-foreground/30 duration-400 flex items-center justify-center transition-colors">
            {navigation_links.map((link, index) => (
              <li
                key={index}
                className="hover:text-foreground duration-400 px-8 font-medium transition-colors"
              >
                <Link href={link.href}>{`_${link.text}`}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button variant="outline" className="rounded-full">
          LeonardoHenrique@gmail.com
        </Button>
      </Card>
    </header>
  );
};

export default Header;
