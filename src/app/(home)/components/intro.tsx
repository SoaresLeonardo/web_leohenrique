import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

const Intro = () => {
  return (
    <section className="content flex h-screen min-h-screen items-center justify-center">
      <Card className="w-full space-y-8 border-none bg-inherit text-left shadow-none">
        <CardHeader className="items-start justify-start space-y-8 p-0">
          <CardTitle className="flex flex-col items-start justify-start gap-2 text-6xl font-bold">
            <span>Prazer, Sou Leonardo.</span>
            <span className="gradient-text">FullStack Developer.</span>
          </CardTitle>
          <CardDescription className="max-w-prose text-base">
            Fala dev, meu nome é Leo. Apaixonado pela tecnologia e me dedico a
            criar experiências incríveis para o usuário. Gosto de descomplicar
            as coisas, especialmente quando se trata de resolver problemas em
            interfaces de forma simples e eficaz.
          </CardDescription>
        </CardHeader>
        <div className="flex items-center gap-8">
          <Button className="rounded-full">Ver projetos</Button>
          <Button variant="link">Quem eu sou?</Button>
        </div>
      </Card>
    </section>
  );
};

export default Intro;
