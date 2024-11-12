import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBullhorn, FaPenNib} from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const skillsData = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500 text-3xl sm:text-4xl" />, level: 92 },
  { name: 'Next.js', icon: <SiNextdotjs className="bg-custom-green text-3xl sm:text-4xl" />, level: 88 },
  { name: 'CSS', icon: <FaCss3Alt className="text-sky-300 text-3xl sm:text-4xl" />, level: 85 },
  { name: 'React', icon: <FaReact className="text-purple-400 text-3xl sm:text-4xl" />, level: 78 },
  { name: 'TypeScript', icon: <SiTypescript className="text-purple-500 text-3xl sm:text-4xl" />, level: 80 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400 text-3xl sm:text-4xl" />, level: 75 },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500 text-3xl sm:text-4xl" />, level: 76 },
  { name: 'Digital Marketing', icon: <FaBullhorn className="text-yellow-500 text-3xl sm:text-4xl" />, level: 70 },
  { name: 'Graphic Design', icon: <FaPenNib className="text-gray-800 text-3xl sm:text-4xl" />, level: 80 },
];

const Skills = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-custom-green text-white px-2 sm:px-8">
      <div className="w-full max-w-4xl p-2 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4 sm:mb-8 pt-28 sm:pt-16 animate-slideFromTop">
          My <span className="text-[#F3F33B]">Skills</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-16 mb-16 animate-slideInFromBottom">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-custom-green rounded-lg border-[#F3F33B] border-2 hover:bg-[#F3F33B] hover:shadow-lg transition duration-700 hover:scale-105"
            >
              <div className="flex items-center space-x-4">
                {skill.icon}
                <span className="text-sm sm:text-lg font-medium">{skill.name}</span>
              </div>
              <div className="ml-auto w-1/2 mr-0 sm:mr-4">
                <div className="bg-yellow-50 rounded-full h-1.5 sm:h-2 mt-2 relative">
                  <div
                    className="absolute top-0 left-0 h-1.5 sm:h-2 rounded-full bg-purple-300"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
