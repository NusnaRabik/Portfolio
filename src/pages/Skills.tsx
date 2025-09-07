import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { TracingBeam } from '../components/TracingBeam';
import { TextGenerateEffect } from '../components/TextGenerateEffect';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', level: 95, icon: '⚛️' },
      { name: 'TypeScript', level: 90, icon: '📘' },
      { name: 'Next.js', level: 88, icon: '▲' },
      { name: 'Tailwind CSS', level: 92, icon: '🎨' },
      { name: 'Framer Motion', level: 87, icon: '🎭' },
      // Added Bootstrap basics as a new skill without level (you can add level if you want)
      { name: 'Bootstrap basics', level: 80, icon: '🅱️' },
      { name: 'HTML', level: 90, icon: '📄' },
      { name: 'CSS', level: 90, icon: '🎨' },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      
      { name: 'Python', level: 88, icon: '🐍' },
      { name: 'C', level: 80, icon: '📟' },
      { name: 'Java', level: 85, icon: '☕' },
      { name: 'SQL', level: 85, icon: '💾' },
      { name: 'MySQL', level: 80, icon: '🗄️' },
      { name: 'Node.js basics', level: 70, icon: '🟩' },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Git', level: 95, icon: '📝' },
    ],
  },
  {
    title: 'Design',
    skills: [
      { name: 'Figma', level: 88, icon: '🎨' },
      { name: 'Adobe XD', level: 82, icon: '🟣' },
      { name: 'UI/UX', level: 90, icon: '✨' },
      // The existing UI/UX skill is here so no duplication needed
    ],
  },
  {
    title: 'Other',
    skills: [
      { name: 'UI/UX design', level: 90, icon: '✨' },
      { name: 'Small project development', level: 80, icon: '🛠️' },
      { name: 'Problem-solving in coding', level: 85, icon: '🧩' },
    ],
  },
];


export const Skills = () => {
  return (
    <TracingBeam>
      <div className="pt-24 pb-20 px-4 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center text-cyan-500 hover:text-cyan-600 transition-colors duration-200 mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <TextGenerateEffect
              words="Skills & Technologies"
              className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white"
            />
            <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels across various technologies and tools.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="bg-white dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700"
              >
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center justify-between p-3 rounded-lg bg-neutral-50 dark:bg-neutral-700/50 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium text-neutral-900 dark:text-white">{skill.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-neutral-200 dark:bg-neutral-600 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5 }}
                            className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full"
                          />
                        </div>
                        <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                          {skill.level}%
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </TracingBeam>
  );
};