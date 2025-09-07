import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Palette, Database, Cloud } from 'lucide-react';

const skillCategories = [
  { icon: Code, name: 'Frontend', count: 8 },
  { icon: Database, name: 'Backend', count: 6 },
  { icon: Palette, name: 'Design', count: 5 },
  { icon: Cloud, name: 'DevOps', count: 4 },
];

export const SkillsPreview = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-cyan-300 dark:hover:border-cyan-500 transition-all duration-200"
            >
              <category.icon className="h-8 w-8 text-cyan-500 mb-4" />
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">{category.name}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{category.count} technologies</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/skills"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-violet-600 transition-all duration-200 group"
          >
            View All Skills
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};