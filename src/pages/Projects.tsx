import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Star } from 'lucide-react';
import { TracingBeam } from '../components/TracingBeam';
import { TextGenerateEffect } from '../components/TextGenerateEffect';

const projects = [
  {
    title: "Nusna's Personal Chatbot",
    description: "My very own AI assistant with full emoji support and a clean, modern UI.",
    longDescription:
      "Built with React.js frontend & AWS serverless backend using AWS Lambda, API Gateway, and Amazon Bedrock. Features typing indicators, quick actions, smooth animations and supports light/dark mode. Fully scalable and mobile-friendly.",
    tech: [
      "React.js",
      "AWS Lambda",
      "Amazon Bedrock (Claude 3.5 Sonnet)",
      "API Gateway",
      "Emoji Picker",
    ],
    image:
      "https://images.pexels.com/photos/1181356/pexels-photo-1181356.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
    status: "Live",
    links: {
      liveDemo:
        "https://www.linkedin.com/posts/fathimanuzna753_nusnaai-reactjs-aws-activity-7354939716892258305-Tx2k?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFAE7ZcBxC5o3V1FGePZSA4D5mhmddWbnao",
      sourceCode: "https://github.com/NusnaRabik/Personal-Chatbot",
    },
  },
  {
    title: "GoVibe",
    description:
      "A travel website mini project showcasing skills in web development with a focus on user experience and design.",
    longDescription:
      "Features a simple and intuitive interface for exploring travel destinations. Designed with user experience as priority, highlighting effective UI design and layout.",
    tech: ["React", "CSS", "HTML", "UX/UI Design"],
    image:
      "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
    status: "Live",
    links: {
      liveDemo:
        "https://www.linkedin.com/posts/fathimanuzna753_webdevelopment-miniproject-travelwebsite-activity-7278308038925508608-GkcK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFAE7ZcBxC5o3V1FGePZSA4D5mhmddWbnao",
      sourceCode: "https://github.com/NusnaRabik/Travel-website", // Assuming this link or change if different
    },
  },
  {
    title: "FlipUnit",
    description:
      "Versatile and easy-to-use unit conversion tool for temperature, length, volume, weight, and more.",
    longDescription:
      "Built with HTML, CSS, and JavaScript, FlipUnit provides clean, dynamic design and practical functionality. Simplifies complex conversions with an intuitive interface and smooth experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    image:
      "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
    status: "Live",
    links: {
      liveDemo:
        "https://www.linkedin.com/posts/fathimanuzna753_webdevelopment-techproject-unitconverter-activity-7274826440838189060-8xwV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFAE7ZcBxC5o3V1FGePZSA4D5mhmddWbnao",
      sourceCode: "https://github.com/NusnaRabik/Unit-Converter", // Assuming this link or change if different
    },
  },
];

export const Projects = () => {
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
              words="My Projects"
              className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white"
            />
            <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              A collection of projects showcasing my expertise in full-stack
              development, from concept to deployment.
            </p>
          </motion.div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div
                  className={`relative bg-white dark:bg-neutral-800 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    project.featured
                      ? "border-gradient-to-r from-cyan-300 to-violet-300 dark:from-cyan-600 dark:to-violet-600"
                      : "border-neutral-200 dark:border-neutral-700 group-hover:border-cyan-300 dark:group-hover:border-cyan-500"
                  }`}
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                            {project.title}
                          </h3>
                          {project.featured && (
                            <Star className="h-5 w-5 text-yellow-500 fill-current" />
                          )}
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            project.status === "Live"
                              ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                              : project.status === "Beta"
                              ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300"
                              : "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>

                      <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-4">
                        {project.description}
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-400 mb-6">
                        {project.longDescription}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-lg text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-4">
                        <motion.a
                          href={project.links.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-violet-600 transition-all duration-200"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </motion.a>
                        <motion.a
                          href={project.links.sourceCode}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          className="inline-flex items-center px-4 py-2 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Source Code
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </TracingBeam>
  );
};
