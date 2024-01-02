'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Menubar } from '@/components/ui/menubar';
import Image from 'next/image';
import { useState } from 'react';

type AboutViewProps = 'personInfo' | 'skills' | 'experience';

const AboutPersonInfo = () => {
  return (
    <>
      <CardHeader className="space-y-6 p-0">
        <CardTitle>
          Sou Léo, Um Desenvolvedor FullStack Criativo ;{')'}
        </CardTitle>
        <CardDescription>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
          reiciendis possimus, nihil, sunt itaque aperiam, ex rem amet
          perferendis quae magni mollitia dicta totam odio. Eveniet placeat
          impedit deserunt aliquam!
        </CardDescription>
      </CardHeader>
    </>
  );
};
const AboutSkills = () => {
  return (
    <>
      <h1>AboutSkills</h1>
    </>
  );
};
const AboutExperience = () => {
  return (
    <>
      <h1>Experience</h1>
    </>
  );
};

const AboutView = ({ viewSelected }: { viewSelected: AboutViewProps }) => {
  if (viewSelected === 'personInfo') {
    return <AboutPersonInfo />;
  }
  if (viewSelected === 'skills') {
    return <AboutSkills />;
  }
  if (viewSelected === 'experience') {
    return <AboutExperience />;
  }
};

const About = () => {
  const [viewSelected, viewSetSelected] =
    useState<AboutViewProps>('personInfo');

  const handleViewAboutSelected = (view: AboutViewProps) => {
    viewSetSelected(view);
  };

  return (
    <div className="mt-40 flex w-full flex-col items-center justify-center">
      <Card className="mt-11 flex w-full items-center justify-between border-none bg-inherit shadow-none">
        <div className="h-64 w-64 overflow-hidden rounded-full bg-foreground">
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

        <div className="w-full max-w-2xl space-y-6">
          <Menubar className="w-full max-w-fit rounded-full">
            <Button
              className="rounded-full"
              variant={viewSelected === 'personInfo' ? 'default' : 'ghost'}
              onClick={() => handleViewAboutSelected('personInfo')}
            >
              Informações pessoais
            </Button>
            <Button
              className="rounded-full"
              variant={viewSelected === 'experience' ? 'default' : 'ghost'}
              onClick={() => handleViewAboutSelected('experience')}
            >
              Experiência
            </Button>
            <Button
              className="rounded-full"
              variant={viewSelected === 'skills' ? 'default' : 'ghost'}
              onClick={() => handleViewAboutSelected('skills')}
            >
              Tecnologias
            </Button>
          </Menubar>
          <AboutView viewSelected={viewSelected} />
        </div>
      </Card>
    </div>
  );
};

export default About;
