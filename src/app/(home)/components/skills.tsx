import { Badge } from '@/components/ui/badge';
import SectionTitle from '@/components/ui/section-title';

const Skill = ({ nameSkill }: { nameSkill: string }) => {
  return <Badge variant="outline">{nameSkill}</Badge>;
};

const SkillsList = ({ skills }: { skills: string[] }) => {
  return (
    <ul className="flex w-full max-w-2xl flex-wrap items-center justify-center gap-3 text-center">
      {skills.map((skill, i) => (
        <Skill key={i} nameSkill={skill} />
      ))}
    </ul>
  );
};

const Skills = () => {
  const skills = [
    'NextJS',
    'ReactJS',
    'HTML5',
    'CSS3',
    'TailwindCSS',
    'JavaScript',
    'TypeScript',
    'NodeJS',
    'Express',
    'PostgreSQL',
    'GraphQL',
    'Git',
    'Storybook',
    'TypeORM',
    'PrismaORM',
    'NestJS',
    'CSS-in-JS',
    'Redux',
    'Jest',
    'React-Query',
    'React Testing'
  ];
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <SectionTitle title="Skills" lineCode />
        <SkillsList skills={skills} />
      </div>
    </section>
  );
};

export default Skills;
