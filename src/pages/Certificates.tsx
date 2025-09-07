import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, ExternalLink } from 'lucide-react';
import { TracingBeam } from '../components/TracingBeam';
import { TextGenerateEffect } from '../components/TextGenerateEffect';

const certificates = [
  {
    title: "CS50’s Introduction to Artificial Intelligence with Python",
    issuer: "Harvard University",
    date: "2024",
    credentialId: "CS50-AI-PY-2024",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
    url: "https://certificates.cs50.io/dd0619b1-ed8c-4273-ab84-3f05eeb49c59.pdf?size=letter",
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft and LinkedIn",
    date: "2024",
    credentialId: "GEN-AI-MS-LNKD-2024",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400",
    url: "https://www.linkedin.com/learning/certificates/d5f633bdbb3215bfeb30335c01aaabf77d5cf4a16ebb8b73ac61b6ef0cd7d3e3?trk=share_certificate",
  },
  {
    title: "Career Essentials in Software Development",
    issuer: "Microsoft and LinkedIn",
    date: "Nov 26, 2024",
    credentialId: "2dcde877c7e590cfb5d66df74f349fdd89da41d66f255986f567e3d9c5faed36",
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400",
    url: "https://lnkd.in/eGmMuTeq",
  },
  {
    title: "Web Design for Beginners",
    issuer: "University of Moratuwa - CODL",
    date: "2024",
    credentialId: "WEB-DESIGN-CODL-2024",
    image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=400",
    url: "",
  },
  // Existing certificates retained


];

export const Certificates = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
              words="Certifications & Achievements"
              className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white"
            />
            <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Professional certifications and achievements that demonstrate my commitment to continuous learning and expertise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.credentialId}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(45deg, ${
                      hoveredIndex === index ?
                        'rgba(6, 182, 212, 0.2), rgba(139, 92, 246, 0.2)' :
                        'transparent, transparent'
                    })`,
                  }}
                />
                <div className="relative bg-white dark:bg-neutral-800 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:border-cyan-300 dark:hover:border-cyan-500 transition-all duration-300">
                  <div className="relative">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Award className="h-6 w-6 text-yellow-500" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-2">{cert.issuer}</p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">{cert.date}</p>
                    <p className="text-xs text-neutral-400 dark:text-neutral-500 mb-4">
                      ID: {cert.credentialId}
                    </p>
                    {cert.url ? (
                      <motion.a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center text-sm text-cyan-500 hover:text-cyan-600 transition-colors duration-200 cursor-pointer"
                      >
                        View Certificate
                        <ExternalLink className="ml-1 h-4 w-4" />
                      </motion.a>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center text-sm text-gray-400 cursor-not-allowed"
                        disabled
                      >
                        Certificate Unavailable
                      </motion.button>
                    )}
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
