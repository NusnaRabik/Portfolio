import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Github, Linkedin } from 'lucide-react';
import { TextGenerateEffect } from './TextGenerateEffect';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <TextGenerateEffect
            words="Let's Work Together"
            className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white"
          />
          <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-300">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
                Get in Touch
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                I'm always open to discussing new opportunities, creative ideas, or 
                potential collaborations. Whether you have a question or just want to say hi, 
                I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-4">
              <motion.a
                href="mailto:fathimanza@gmail.com"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 p-4 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-cyan-300 dark:hover:border-cyan-500 transition-all duration-200"
              >
                <Mail className="h-6 w-6 text-cyan-500" />
                <div>
                  <p className="font-semibold text-neutral-900 dark:text-white">Email</p>
                  <p className="text-neutral-600 dark:text-neutral-300">fathimanza@gmail.com</p>
                </div>
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/fathimanuzna753"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 p-4 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-cyan-300 dark:hover:border-cyan-500 transition-all duration-200"
              >
                <Linkedin className="h-6 w-6 text-cyan-500" />
                <div>
                  <p className="font-semibold text-neutral-900 dark:text-white">LinkedIn</p>
                  <p className="text-neutral-600 dark:text-neutral-300">Connect with me</p>
                </div>
              </motion.a>
              
              <motion.a
                href="https://github.com/NusnaRabik"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 p-4 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-cyan-300 dark:hover:border-cyan-500 transition-all duration-200"
              >
                <Github className="h-6 w-6 text-cyan-500" />
                <div>
                  <p className="font-semibold text-neutral-900 dark:text-white">GitHub</p>
                  <p className="text-neutral-600 dark:text-neutral-300">Check out my code</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-violet-600 transition-all duration-200 group"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
