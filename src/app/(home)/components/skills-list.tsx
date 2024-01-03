import Skill from './skill';

const SkillsList = ({ skills }: { skills: string[] }) => {
  return (
    <ul className="flex w-full max-w-2xl flex-wrap items-center justify-center gap-3 text-center">
      {skills.map((skill, i) => (
        <Skill key={i} nameSkill={skill} />
      ))}
    </ul>
  );
};

export default SkillsList;
