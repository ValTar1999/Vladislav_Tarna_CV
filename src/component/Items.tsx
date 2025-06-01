import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SubtitleObject {
  text: string;
  list?: string[];
  subtext?: string;
}

type Subtitle = string | SubtitleObject;

interface WorkExperience {
  number: string;
  title: string;
  subtitle?: Subtitle;
}

interface ItemsProps {
  items: WorkExperience[];
}

const Items: React.FC<ItemsProps> = ({ items }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="container py-16 lg:py-24 px-4 md:px-10 lg:px-16 mx-auto flex flex-col"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-base text-gray-400 font-medium"
      >
        WORK EXPERIENCE
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl md:text-5xl text-gray-50 mt-2 font-semibold max-w-xl"
      >
        Companies where I work or have worked in the past.
      </motion.div>
      <div className="grid gap-3 md:grid-cols-2" ref={ref}>
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
            className="flex flex-col space-y-3 mt-7"
          >
            <motion.div
              className="text-gray-400/50 text-8xl"
              animate={inView ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.5 }}
            >
              {item.number}
            </motion.div>
            <motion.div
              className="text-gray-50 text-2xl font-semibold"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              {item.title}
            </motion.div>
            {item.subtitle && (
              <motion.div
                className=" text-base font-medium"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
              >
                {typeof item.subtitle === 'string' ? (
                  <p className="text-gray-200">{item.subtitle}</p>
                ) : item.subtitle ? (
                  <>
                    <p className="text-gray-200">{item.subtitle.text}</p>
                    {item.subtitle.list && item.subtitle.list.length > 0 && (
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        {item.subtitle.list.map((listItem, i) => (
                          <li key={i} className="whitespace-pre-line text-yellow-200">{listItem}</li>
                        ))}
                      </ul>
                    )}
                    {item.subtitle.subtext && <p className="mt-2 text-gray-200">{item.subtitle.subtext}</p>}
                  </>
                ) : null}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Items;
