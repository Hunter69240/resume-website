import SkillCard from './SkillCard';
import type { IconType } from 'react-icons'

type Skill = {
  logo: IconType
  name: string
}

type SkillSectionProps = {
  title: string,
  skills :  Skill[]
}

export default function SkillSection({ title, skills }:SkillSectionProps) {
  return (
    <div className='border border-white mt-4 p-2'>
      <p className='text-white text-center text-xl font-bold mb-2'>{title}</p>
      <div className="flex justify-evenly overflow-x-auto whitespace-nowrap gap-6 px-2 py-4 scroll-smooth scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-800 touch-auto">
        {skills.map((skill:Skill, index:number) => (
          <SkillCard key={index} logo={skill.logo} name={skill.name} />
        ))}
      </div>
    </div>
  );
}
