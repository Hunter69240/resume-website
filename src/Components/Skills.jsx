import React from 'react';
import { motion } from 'framer-motion';
const skills = [
  { name: 'Python', level: 70 },
  { name: 'JavaScript', level: 60 },
  { name: 'React', level: 50 },
  { name: 'Tailwind', level: 50 },
  { name: 'React Native', level: 60 },
  { name: 'SQL', level: 70 },
  { name: 'C', level: 60 },
];

export default function SkillSliders() {
  return (
    <>
    <h1 className="text-3xl text mx-20 mt-40" id="Skills"><u>Skills</u></h1>
    <div className="my-10 flex gap-10 mx-40 mr-70 leading-[2.5rem] sm:p-4">
       <p className='text text-justify'>I have a solid grasp of Python and SQL, which form the backbone of my 
        backend and data-related work. My skills in JavaScript and C have supported my development 
        across both web and low-level programming. I’ve built projects using React, React Native, 
        and Tailwind CSS, and I'm currently focused on sharpening my expertise in these modern frontend 
        technologies. My goal is to become highly proficient in creating responsive, scalable, and interactive 
        user interfaces across web and mobile platforms.
        </p> 
       <div>
      {skills.map(skill => (
        <div key={skill.name} className="w-60">
          <p className="text-white mb-1">{skill.name}</p>
          <div className="bg-gray-700 rounded-full h-2">
            <div className="w-full bg-gray-700 h-2 rounded overflow-hidden">
        <motion.div
          className="bg-orange-500 h-2 rounded"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{
            duration: 1.2,
            ease: 'easeOut',
            type: 'tween', 
          }}
          viewport={{ once: true }}
        />
      </div>
          </div>
        </div>
      ))}
      </div>
    </div>
    </>
  );
}
