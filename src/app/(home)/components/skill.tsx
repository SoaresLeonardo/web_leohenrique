import { Badge } from '@/components/ui/badge';

const Skill = ({ nameSkill }: { nameSkill: string }) => {
  return <Badge variant="outline">{nameSkill}</Badge>;
};

export default Skill;
