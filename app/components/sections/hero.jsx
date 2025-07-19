'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of medical images (10.png to 19.png)
  const medicalImages = [
    '/assets/images/18.png',
    '/assets/images/12.png',
    '/assets/images/10.png',
    '/assets/images/13.png',
    '/assets/images/14.png',
    '/assets/images/15.png',
  ];

  // Auto-cycle through images for background slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % medicalImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [medicalImages.length]);

  // Animation variants for content - Fixed for mobile
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-12 md:pt-16">
      {/* Background Image Slideshow - Full Background */}
      <div className="absolute inset-0">
        {medicalImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: index === currentImageIndex ? 1 : 0,
              scale: index === currentImageIndex ? 1 : 1.1,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <Image
              src={image}
              alt={`Medical background ${index + 1}`}
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority={index === 0}
            />
          </motion.div>
        ))}
      </div>

      {/* Subtle Gradient Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1453A6]/50 via-[#1261A6]/40 to-[#04B2D9]/30" />
      
      {/* Additional overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Floating Logo - Creative Addition */}
      <motion.div
        className="absolute top-1/4 right-8 md:right-16 opacity-10 hover:opacity-20 transition-opacity duration-500"
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ 
          opacity: 0.1, 
          scale: 1, 
          rotate: 0,
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 2,
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <Image
          src="/assets/whiteLogo.png"
          alt="Vitalife Logo Watermark"
          width={120}
          height={120}
          className="object-contain filter blur-[0.5px]"
        />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 left-8 md:left-16 opacity-10 hover:opacity-20 transition-opacity duration-500"
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ 
          opacity: 0.1, 
          scale: 1, 
          rotate: 0,
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 2,
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <Image
          src="/assets/whiteLogo.png"
          alt="Vitalife Logo Watermark"
          width={120}
          height={120}
          className="object-contain filter blur-[0.5px]"
        />
      </motion.div>

   
      {/* Main Content */}
      <div className="relative z-10 flex items-center my-2 justify-center min-h-screen px-3 sm:px-4 lg:px-6">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            className="text-center relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={contentVariants}
          >
            {/* Welcome Badge */}
            {/* <motion.div
              className="inline-flex items-center h-12 px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white/95 text-sm font-medium mb-6 shadow-lg"
              variants={itemVariants}
            >
              <span className="text-md">
              Bienvenue au Centre Diagnostique Vitalife
              </span>
            </motion.div> */}
            <motion.div
              className="inline-flex items-center h-12 absolute -top-15 left-1/2 -translate-x-1/2 -translate-y-1/2 pt-1   rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white/95 text-sm font-medium shadow-lg"
              variants={itemVariants}
            >
              <Image
                src="/assets/whiteLogo.png"
                alt="Vitalife Logo"
                width={180}
                height={180}
                className="object-contain mt-1 mr-2 w-[160px] h-[160px] md:w-[180px] md:h-[180px] "
              />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-3xl  md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4 drop-shadow-lg"
              variants={itemVariants}
            >
              Votre Santé,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-200 drop-shadow-none">
                Notre Priorité
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-md  md:text-lg text-white/95 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
              variants={itemVariants}
            >
              Centre de diagnostic médical moderne offrant des services de qualité en 
              médecine générale, radiologie, cardiologie et analyses médicales.
            </motion.p>

            {/* Services Preview */}
            <motion.div
              className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 sm:mb-6"
              variants={itemVariants}
            >
              {[
                'Médecine Générale',
                'Radiologie',
                'Cardiologie',
                'Traumatologie',
                'Gastro-entérologie',
                'Analyses Médicales'
              ].map((service, index) => (
                <div
                  key={index}
                  className="px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm md:text-base border border-white/30 shadow-md"
                >
                  {service}
                </div>
              ))}
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-2 justify-center items-center"
              variants={itemVariants}
            >
              <motion.button
                className="px-6 py-3 bg-gradient-to-r text-base md:text-lg lg:text-xl cursor-pointer from-[#04B2D9] to-[#06B6D4] text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse-glow border border-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.location.href = '#contact';
                }}
              >
                Prendre Rendez-vous
              </motion.button>
              
              <motion.button
                className="px-6 py-3 text-base md:text-lg lg:text-xl bg-white/20 cursor-pointer backdrop-blur-sm text-white font-semibold rounded-lg border border-white/40 hover:bg-white/30 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.location.href = '#services';
                }}
              >
                Nos Services
              </motion.button>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              className="mt-4 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              {[
                { label: 'Equipe expérimentée' },
                { number: '500+', label: 'Patients satisfaits' },
                { number: '7:00 - 17:00', label: 'Samedi au jeudi' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-3 md:p-4 bg-white/15 backdrop-blur-sm rounded-xl border border-white/30 shadow-lg flex flex-col items-center justify-center"
                >
                  {stat.number && <div className="text-base md:text-xl lg:text-2xl font-bold text-white mb-0.5 sm:mb-1 drop-shadow-md">{stat.number}</div>}
                  <div className="text-base  lg:text-lg text-white/90">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;