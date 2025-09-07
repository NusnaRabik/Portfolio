import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';

const featuredProjects = [

  {
    title: "Nusna’s Personal Chatbot 🤖",
    description: `Just launched Nusna’s Personal Chatbot — my very own AI assistant with full emoji support and a clean, modern UI!`,
    tech: ['React.js', 'AWS Lambda', 'Amazon Bedrock', 'API Gateway', 'Emoji Picker'],
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800', // example image, update as needed
    github: 'https://github.com/NusnaRabik/Personal-Chatbot',
    external: 'https://www.linkedin.com/posts/fathimanuzna753_nusnaai-reactjs-aws-activity-7354939716892258305-Tx2k?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFAE7ZcBxC5o3V1FGePZSA4D5mhmddWbnao',
  },
  {
    title: 'GoVibe 💫',
    description: `A travel website designed as a mini project showcasing skills in web development. Features a simple and intuitive interface for exploring travel destinations with a focus on user experience and design.`,
    tech: ['React', 'CSS', 'Web Development'],
    image: 'https://images.pexels.com/photos/386148/pexels-photo-386148.jpeg?auto=compress&cs=tinysrgb&w=800', // example image
    github: 'https://github.com/NusnaRabik/Travel-website',
    external: 'https://www.linkedin.com/posts/fathimanuzna753_webdevelopment-miniproject-travelwebsite-activity-7278308038925508608-GkcK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFAE7ZcBxC5o3V1FGePZSA4D5mhmddWbnao',
  },
  {
    title: 'FlipUnit 🚀',
    description: `A versatile and easy-to-use unit conversion tool. Built with HTML, CSS, and JavaScript, FlipUnit provides a seamless experience for converting a wide range of units, including temperature, length, volume, weight, and more. Clean and dynamic design makes it efficient and user-friendly.`,
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.pexels.com/photos/220234/pexels-photo-220234.jpeg?auto=compress&cs=tinysrgb&w=800', // example image
    github: 'https://github.com/NusnaRabik/Unit-Converter',
    external: 'https://www.linkedin.com/posts/fathimanuzna753_webdevelopment-techproject-unitconverter-activity-7274826440838189060-8xwV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFAE7ZcBxC5o3V1FGePZSA4D5mhmddWbnao',
  },
];

export const ProjectsPreview = () => {
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
            Featured Projects
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Some of my recent work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-white dark:bg-neutral-800 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:border-cyan-300 dark:hover:border-cyan-500 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 mb-4 whitespace-pre-line">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-cyan-500 transition-colors duration-200"
                        aria-label={`${project.title} GitHub`}
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.external && (
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-cyan-500 transition-colors duration-200"
                        aria-label={`${project.title} External Link`}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
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
            to="/projects"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-violet-600 transition-all duration-200 group"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
