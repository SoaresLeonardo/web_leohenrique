import SectionTitle from '@/components/ui/section-title';
import SkillsList from './skills-list';
import { skills } from '@/constants/skills';

const Skills = () => {
  return (
    <section className="content_view">
      <div className="content_info">
        <SectionTitle title="Skills." lineCode />
        <SkillsList skills={skills} />
      </div>
    </section>
  );
};

export default Skills;
