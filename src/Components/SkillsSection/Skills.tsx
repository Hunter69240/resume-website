import SkillSection from './SkillSection';
import { FaPython, FaHtml5, FaReact, FaCss3Alt, FaGithub, FaNode } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa6';
import { SiMysql, SiC, SiDocker, SiJest, SiReactquery, SiTypescript } from 'react-icons/si';
import { BiLogoTailwindCss, BiLogoJavascript, BiLogoMongodb, BiLogoPostgresql } from 'react-icons/bi';
import { TbBrandVscode } from 'react-icons/tb';

export default function Skills() {
  const programmingLanguages = [
    { logo: FaPython, name: 'Python' },
    { logo: FaJava, name: 'Java' },
    { logo: SiTypescript, name: 'TypeScript' },
    { logo: SiMysql, name: 'MySQL' },
    { logo: SiC, name: 'C' },
  ];

  const frontEnd = [
    { logo: FaHtml5, name: 'HTML5' },
    { logo: BiLogoJavascript, name: 'JavaScript' },
    { logo: FaReact, name: 'React' },
    { logo: FaReact, name: 'React Native' },
    { logo: SiReactquery, name: 'React Query' },
    { logo: FaCss3Alt, name: 'CSS3' },
    { logo: BiLogoTailwindCss, name: 'Tailwind CSS' },
  ];

  const backEnd = [
    { logo: BiLogoMongodb, name: 'MongoDB' },
    { logo: SiMysql, name: 'MySQL' },
    { logo: BiLogoPostgresql, name: 'PostgreSQL' },
    { logo: FaNode, name: 'Node.js' },
  ];

  const tools = [
    { logo: FaGithub, name: 'GitHub' },
    { logo: TbBrandVscode, name: 'VS Code' },
    { logo: SiDocker, name: 'Docker' },
    { logo: SiJest, name: 'Jest' },
  ];

  return (
    <div className="w-[90%] max-w-screen-lg mx-auto bg-black text-white clip-polygon-custom p-4 pb-40 flex flex-col mt-4 gap-4 overflow-visible">
      <h2 className="text-2xl font-bold mb-4 sm:text-4xl">Skills</h2>

      <SkillSection title="Programming Languages" skills={programmingLanguages} />
      <SkillSection title="Frontend Development" skills={frontEnd} />
      <SkillSection title="Backend Development" skills={backEnd} />
      <SkillSection title="Tools & Environment" skills={tools} />
    </div>
  );
}