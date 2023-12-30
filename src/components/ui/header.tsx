import { Button } from './button';
import { Card, CardHeader, CardTitle } from './card';

const Header = () => {
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
            <li className="hover:text-foreground duration-400 px-8 font-medium transition-colors">
              _Sobre
            </li>
            <li className="hover:text-foreground duration-400 px-8 font-medium transition-colors">
              _Projetos
            </li>
            <li className="hover:text-foreground duration-400 px-8 font-medium transition-colors">
              _Blog
            </li>
            <li className="hover:text-foreground duration-400 px-8 font-medium transition-colors">
              _Contato
            </li>
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
