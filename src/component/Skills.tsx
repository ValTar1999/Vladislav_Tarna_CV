import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  icon?: string;
  title?: string;
  subtitle?: string;
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className="py-16 lg:py-24 px-4 md:px-10 lg:px-16 flex flex-col gap-8 lg:gap-14 md:container md:mx-auto lg:flex-row justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="lg:sticky top-12 h-full"
      >
        <div className="text-3xl lg:text-5xl text-gray-50 font-bold">Skillset</div>
        <div className="text-lg text-gray-500 font-semibold mt-6">
          With skills in over 4 different fields of programming, I am the perfect person to hire when it comes to a full-fledged project. Whatever your needs are, I can pretty much take on any challenge.
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }} 
        className="grid gap-6 md:grid-cols-2"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="grid gap-3"
          >
            <div className="flex items-center gap-4">
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6 }}
                className="w-12 h-12"
                src={skill.icon}
                alt=""
              />
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-2xl text-gray-50 font-semibold"
              >
                {skill.title}
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base text-gray-500"
            >
              {skill.subtitle}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};


export default Skills;
