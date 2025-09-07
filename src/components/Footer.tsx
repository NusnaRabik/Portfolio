import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">John Smith</h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Full Stack Developer passionate about creating amazing digital experiences.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/johnsmith"
                whileHover={{ scale: 1.1 }}
                className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-cyan-500 transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/johnsmith"
                whileHover={{ scale: 1.1 }}
                className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-cyan-500 transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="mailto:john.smith@email.com"
                whileHover={{ scale: 1.1 }}
                className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-cyan-500 transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-neutral-900 dark:text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  className="block text-neutral-600 dark:text-neutral-300 hover:text-cyan-500 transition-colors duration-200"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-neutral-900 dark:text-white mb-4">Services</h4>
            <div className="space-y-2">
              {['Web Development', 'UI/UX Design', 'Consulting', 'Code Review'].map((service) => (
                <p key={service} className="text-neutral-600 dark:text-neutral-300">
                  {service}
                </p>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-200 dark:border-neutral-700">
          <p className="text-neutral-600 dark:text-neutral-300 text-sm">
            © 2025 John Smith. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-4 md:mt-0 p-2 rounded-lg bg-neutral-200 dark:bg-neutral-700 hover:bg-cyan-500 hover:text-white transition-all duration-200"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};