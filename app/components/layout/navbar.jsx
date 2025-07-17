'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '#home' },
    { name: 'À Propos', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto ">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center">
            <div className="relative my-auto">
                <Image
                  src={isScrolled ? "/assets/logo.png" : "/assets/whiteLogo.png"}
                  alt="Vitalife Logo"
                  width={180}
                  height={180}
                  className="object-contain  transition-all duration-300"
                />
            </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-3"
                >
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      isScrolled
                        ? 'text-gray-700 hover:text-[#1453A6] hover:bg-blue-50 rounded-lg'
                        : 'text-white/90 hover:text-white hover:bg-white/10 rounded-lg'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Button */}
          <div className="hidden md:block">
            <motion.button
              className={`relative px-8 py-3 rounded-full cursor-pointer font-semibold text-sm transition-all duration-300 overflow-hidden mb-3 ${
                isScrolled
                  ? 'bg-gradient-to-r from-[#1453A6] via-[#1261A6] to-[#04B2D9] text-white shadow-lg hover:shadow-xl'
                  : 'bg-white/15 backdrop-blur-sm text-white border border-white/30 hover:bg-white/25'
              }`}
              onClick={() => {
                window.location.href = '#contact';
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>📅</span>
                <span>Rendez-vous</span>
              </span>
              {isScrolled && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#04B2D9] via-[#1261A6] to-[#1453A6] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors mb-3 ${
                isScrolled
                  ? 'text-gray-700 hover:text-[#1453A6] hover:bg-gray-100'
                  : 'text-white hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute left-0 block w-full h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? 'top-2.5 rotate-45' : 'top-1'
                  }`}
                />
                <span
                  className={`absolute left-0 top-2.5 block w-full h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute left-0 block w-full h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? 'top-2.5 -rotate-45' : 'top-4'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#1453A6] hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="pt-2"
              >
                <button
                  className="w-full px-4 py-3 cursor-pointer text-left text-base font-medium bg-gradient-to-r from-[#1453A6] via-[#1261A6] to-[#04B2D9] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                  onClick={() => {
                    window.location.href = '#contact';
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <span>📅</span>
                  <span>Prendre Rendez-vous</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;