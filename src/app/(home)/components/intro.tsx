import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { poppins } from './fonts/poppins';
import { Button } from '@/components/ui/button';
const Intro = () => {
  return (
    <Card className="mt-60 w-full space-y-8 border-none bg-inherit text-center shadow-none">
      <CardHeader className="items-center justify-center space-y-8 p-0">
        <CardTitle
          className={`${poppins.className} gradient-text flex flex-col items-center justify-center text-7xl`}
        >
          <span>FullStack Developer.</span>
          <span>Prazer, Sou Leonardo.</span>
        </CardTitle>
        <CardDescription className="max-w-prose text-xl text-foreground">
          Prazer, seja bem vindo! Eu sou Leonardo, apaixonado por tecnologia,
          sempre buscando aprender algo novo todos os dias.
        </CardDescription>
      </CardHeader>
      <div>
        <Button className="rounded-full">Meus projetos</Button>
      </div>
    </Card>
  );
};

export default Intro;
