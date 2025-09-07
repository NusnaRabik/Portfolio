import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ArrowRight } from 'lucide-react';
import { TextGenerateEffect } from './TextGenerateEffect';
import { BackgroundLines } from './BackgroundLines';

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <BackgroundLines>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TextGenerateEffect
              words="Nusna Rabik"
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-6"
          >
            <TextGenerateEffect
              words="Full Stack Developer | AI Enthusiast"
              className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="mt-6 text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto"
          >
            Crafting beautiful, functional, and user-centered digital experiences with modern technologies and creative problem-solving.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="inline-flex items-center px-6 py-3 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </motion.button>
          </motion.div>
        </div>
      </BackgroundLines>
    </section>
  );
};