import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Project {
  href?: string;
  img?: string;
  title?: string;
}

interface ProjectProps {
  projects?: Project[];
}

const Project: React.FC<ProjectProps> = ({ projects }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="md:container md:mx-auto px-4 md:px-10 lg:px-16 py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="grid gap-2"
      >
        <div className="text-base text-gray-400 font-semibold">MY PROJECTS</div>
        <div className="text-3xl lg:text-5xl text-gray-50 font-bold">Work that I've done for the past years</div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12"
      >
        {projects && projects.map((project, index) => (
          <motion.a
            key={index}
            target="_blank"
            href={project.href}
            className="grid relative group overflow-hidden border border-zinc-800 hover:shadow-xl hover:shadow-yellow-500/80 duration-300 rounded-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <motion.img
              className='w-full h-52 object-cover group-hover:scale-105 transition-scale duration-300'
              src={project.img}
              alt=""
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
            />
            <motion.div
              className="text-2xl bg-zinc-900 text-gray-50 py-6 px-8 font-medium w-full group-hover:text-yellow-500 group-hover:px-10 transition-color duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
            >
              {project.title}
            </motion.div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Project;