import React from 'react';
import { motion } from 'framer-motion';
import { TextGenerateEffect } from './TextGenerateEffect';

const experiences = [
  {
    type: 'education',
    title: 'BSc(Hons) in Software Engineering, IT',
    company: 'Sabaragamuwa University of Sri Lanka',
    period: 'Jul 2024 - Jul 2028',
    description: '', // No description given
  },
  {
    type: 'education',
    title: 'Physical Sciences',
    company: 'MT/Amina Girls National School',
    period: '2020 - 2022',
    description: 'Mathematics B, Chemistry B, Physics C',
  },
  {
    type: 'education',
    title: 'Grade 1 to Grade 11',
    company: 'MT/Rajjamana Muslim Vidyalaya',
    period: '2009 - 2019',
    description: 'Achieved 8 A and B grades',
  },
];


export const ExperienceSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <TextGenerateEffect
            words="Experience & Education"
            className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white"
          />
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-500 to-violet-500"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 ml-12 md:ml-0' : 'md:pl-8 ml-12 md:ml-0'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-neutral-800 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-3">
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      exp.type === 'work' 
                        ? 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300'
                        : 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300'
                    }`}>
                      {exp.type === 'work' ? 'Work' : 'Education'}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-2">{exp.company}</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">{exp.period}</p>
                  <p className="text-neutral-600 dark:text-neutral-300">{exp.description}</p>
                </motion.div>
              </div>
              
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white dark:bg-neutral-800 border-4 border-cyan-500 rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
