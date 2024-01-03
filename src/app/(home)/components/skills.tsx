import SectionTitle from '@/components/ui/section-title';
import { skills } from '@/constants/skills';
import SkillsList from './skills-list';

const Skills = () => {
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
