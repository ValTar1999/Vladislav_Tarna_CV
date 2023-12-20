import React from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  foto: string;
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ foto, title, subtitle }) => {
  return (
    <div className="flex flex-col md:flex-row relative md:py-32 md:items-center container mx-auto">
      <div className="h-full w-2/3 absolute md:bg-zinc-900 right-0"></div>
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="z-30 border border-zinc-800 md:rounded-xl object-cover w-full md:w-[350px] lg:w-[470px] xl:w-[630px] 2xl:w-[750px] h-96 sm:h-[450px] md:h-[800px] xl:h-[750px] 2xl:h-[700px]"
        src={foto}
        alt=""
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="z-40 px-4 py-12 bg-zinc-900 md:bg-transparent grid gap-4 md:gap-6 md:absolute md:right-6 md:w-[500px] lg:w-[650px] xl:w-[800px] 2xl:w-[950px]"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-gray-50 font-bold text-3xl md:text-6xl lg:text-7xl sm:w-1/2 md:w-full xl:w-full 2xl:w-3/4"
        >
          {title}
        </motion.div>
        {subtitle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-gray-100 font-medium text-lg"
          >
            {subtitle}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Header;
