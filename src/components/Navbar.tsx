import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X, User } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/#contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (path: string) => {
    if (path.includes('#')) {
      const sectionId = path.split('#')[1];
      if (location.pathname === '/') {
        scrollToSection(sectionId);
      } else {
        window.location.href = path;
      }
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <User className="h-8 w-8 text-cyan-500" />
            <span className="font-bold text-xl text-neutral-900 dark:text-white">Nusna</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.path.startsWith('/') && !item.path.includes('#') ? (
                  <Link
                    to={item.path}
                    className="text-neutral-600 dark:text-neutral-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.path)}
                    className="text-neutral-600 dark:text-neutral-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-200"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 dark:bg-black/90 backdrop-blur-lg rounded-lg mt-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.path.startsWith('/') && !item.path.includes('#') ? (
                    <Link
                      to={item.path}
                      className="block px-3 py-2 text-neutral-600 dark:text-neutral-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.path)}
                      className="block w-full text-left px-3 py-2 text-neutral-600 dark:text-neutral-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200"
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};