import React from 'react';
import { motion } from 'framer-motion';
import { TextGenerateEffect } from './TextGenerateEffect';
import aboutMeImage from '../assets/WhatsApp Image 2024-11-18 at 20.36.33_c1626ba0.jpg';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <TextGenerateEffect
            words="About Me"
            className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 p-1">
                <div className="w-full h-full rounded-2xl bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center">
                  <div className="w-72 h-72 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800 overflow-hidden">
                    <img
                      src={`${import.meta.env.BASE_URL}image/WhatsApp Image 2024-11-18 at 20.36.33_c1626ba0.jpg`}
                      alt="About me"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
              Passionate Developer & Creative Problem Solver
            </h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              I'm Nusna Rabik, a passionate Full Stack Developer & AI currently pursuing a Software Engineering degree, expected to graduate in 2028. 
              I specialize in creating engaging and user-centered digital experiences using technologies like React, Tailwind, Python, and SQL. 
              I enjoy transforming complex problems into elegant, practical solutions and building projects that are both visually appealing and highly functional. 
              My work spans web development projects like <strong>GoVibe</strong>, AI-driven applications from CS50 AI, and creative interfaces that enhance user experience. 
              Continuously learning and exploring new technologies drives me to craft innovative and meaningful software solutions.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Education</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">BSc(Hons) in Software Engineering</p>
              </div>
              <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
                <h4 className="font-semibent text-neutral-900 dark:text-white mb-2">Focus</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Full Stack & AI</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
