import { Card, CardDescription, CardHeader } from '@/components/ui/card';
import { Github, Instagram, Linkedin } from 'lucide-react';
import SectionTitle from '@/components/ui/section-title';

import Image from 'next/image';

const About = () => {
  return (
    <section className="content_view">
      <div className="content_info">
        <SectionTitle
          title="Sobre."
          variant="center"
          description="Conheça um pouco sobre mim."
        />
        <Card className="flex w-full items-center justify-between">
          <div className="h-72 w-72 border border-primary">
            <Image
              src="https://avatars.githubusercontent.com/u/100442262?v=4"
              alt="Foto profile"
              width={0}
              sizes="100vw"
              style={{ objectFit: 'contain' }}
              height={0}
              className="h-full w-full"
            />
          </div>
          <div className="flex flex-col">
            <CardHeader className="space-y-3 p-0">
              {/* <CardTitle>Eu me chamo Léo.</CardTitle> */}
              <CardDescription className="max-w-xl text-base">
                Desde pequeno, desenvolvi uma forte afinidade com a tecnologia.
                A paixão por explorar o vasto universo digital me acompanhava
                desde de pequeno. No{' '}
                <span className="text-primary">começo de 2020 </span>
                começei a minha jornada de estudos sobre programação,
                inicialmente com
                <span className="text-primary">javascript.</span>
                <br /> <br />
                Posteriormente, aprofundei meus estudos em
                <span className="text-primary"> desenvolvimento web</span>,
                inicialmente focando em
                <span className="text-primary"> HTML</span> e
                <span className="text-primary"> CSS</span>. Conforme avançava,
                explorei diversos frameworks. Além disso, dediquei tempo ao
                estudo do
                <span className="text-primary"> back-end</span>, compreendendo o
                desenvolvimento de APIs e a manipulação de bancos de dados,
                tanto relacionais quanto não relacionais. Durante esse percurso,
                familiarizei-me com frameworks como NestJS, além de outros
                notáveis,
                <span className="text-primary"> como Node e Express</span>.
              </CardDescription>
            </CardHeader>
            <ul className="mt-3 flex flex-col gap-3 text-muted-foreground">
              <li className="flex items-center">
                <Github className="mr-2 h-4 w-4" /> Github
              </li>
              <li className="flex items-center">
                <Linkedin className="mr-2 h-4 w-4" /> Linkedin
              </li>
              <li className="flex items-center">
                <Instagram className="mr-2 h-4 w-4" />
                Instagram
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
