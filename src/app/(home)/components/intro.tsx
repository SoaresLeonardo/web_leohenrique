import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Intro = () => {
  return (
    <section className="content_info content_intro">
      <Card className="w-full space-y-8 text-left">
        <CardHeader className="items-start justify-start space-y-8 p-0">
          <CardTitle className="flex flex-col items-start justify-start gap-3 text-7xl font-bold">
            <span>Prazer, Sou Leonardo.</span>
            <span className="gradient-text">FullStack Developer.</span>
          </CardTitle>
          <CardDescription className="max-w-lg text-base">
            Fala dev, meu nome é
            <a href="#" className="text-primary">
              {' '}
              Leo
            </a>
            . Apaixonado pela tecnologia e me dedico a criar experiências
            incríveis para o usuário. Gosto de descomplicar as coisas,
            especialmente quando se trata de resolver problemas em interfaces de
            forma simples e eficaz.
          </CardDescription>
        </CardHeader>
        <div className="flex items-center gap-8">
          <Button className="rounded-full">
            Ver projetos <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="link">Mais sobre mim.</Button>
        </div>
      </Card>
    </section>
  );
};

export default Intro;
