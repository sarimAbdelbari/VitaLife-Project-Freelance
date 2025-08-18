'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ContactUs = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  // Animation variants - Fixed for mobile
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

  const faqData = [
    {
      question: "Comment prendre rendez-vous ?",
      answer: "Vous pouvez nous contacter via WhatsApp au +213 48 79 40 40 ou par email à vitalifecom01@gmail.com. Nous répondons rapidement pour programmer votre consultation."
    },
    {
      question: "Quels sont vos horaires d'ouverture ?",
      answer: "Nous sommes ouverts du dimanche au jeudi de 8h à 20h. Pour les urgences, notre service est disponible 24h/7j."
    },
    {
      question: "Quels services proposez-vous ?",
      answer: "Nous offrons des services complets : médecine générale, radiologie, cardiologie, traumatologie, gastro-entérologie et analyses médicales."
    },
    {
      question: "Où êtes-vous situés ?",
      answer: "Notre centre se trouve au 04 Rue Frihi Kada, Sfisef, Algérie. Facilement accessible avec parking disponible."
    }
  ];

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/vitalife.cdm/",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="currentColor" fillOpacity="0.1"/>
          <path
            d="M16.75 3h-9.5A4.25 4.25 0 0 0 3 7.25v9.5A4.25 4.25 0 0 0 7.25 21h9.5A4.25 4.25 0 0 0 21 16.75v-9.5A4.25 4.25 0 0 0 16.75 3zm2.75 13.75A2.75 2.75 0 0 1 16.75 19h-9.5A2.75 2.75 0 0 1 4.5 16.75v-9.5A2.75 2.75 0 0 1 7.25 4.5h9.5A2.75 2.75 0 0 1 19 7.25v9.5z"
            fill="currentColor"
          />
          <path
            d="M12 7.75A4.25 4.25 0 1 0 16.25 12 4.25 4.25 0 0 0 12 7.75zm0 7A2.75 2.75 0 1 1 14.75 12 2.75 2.75 0 0 1 12 14.75z"
            fill="currentColor"
          />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
        </svg>
      )
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@vitalifecdm?is_from_webapp=1&sender_device=pc",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      )
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@vitalife-cdm",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/vitalife.cdm",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={contentVariants}
        >
          {/* Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <div className="flex items-center justify-center mb-3">
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 mr-3"></div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                Contactez-nous
              </span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 ml-3"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Devenez le prochain de nos
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Clients heureux
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Réservez un rendez-vous et profitez de services de santé professionnels avec notre équipe médicale dédiée
            </p>
          </motion.div>
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16 h-full">
            {/* Contact Information */}
            <motion.div className="flex flex-col h-full" variants={itemVariants}>
              {/* Quick Contact */}
              <div className="relative group flex flex-col h-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative p-8 bg-white rounded-xl border border-gray-200 shadow-xl flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                      <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Contact rapide
                    </h3>
                    
                    {/* WhatsApp */}
                    <div className="mb-6">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">WhatsApp</p>
                          <p className="text-gray-600 text-sm">Messagerie instantanée</p>
                        </div>
                      </div>
                      <motion.a
                        href="https://wa.me/2130540324387"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-all duration-300 shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
                        </svg>
                        Nous contacter: +213 0540324387
                      </motion.a>
                    </div>

                    {/* Email */}
                    <div className="mb-6">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">Email</p>
                          <p className="text-gray-600 text-sm">Contact direct</p>
                        </div>
                      </div>
                      <motion.a
                        href="mailto:Contact@vitalife-medical.dz"
                        className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-all duration-300 shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        contact@vitalife-medical.dz
                      </motion.a>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="mt-auto">
                    <h4 className="font-semibold text-gray-800 mb-3">Suivez-nous</h4>
                    <div className="flex space-x-3">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div className="relative group flex flex-col h-full" variants={itemVariants}>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden flex-1 flex flex-col h-full">
                <div className="h-96 md:h-[500px] flex-1">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.990613125435!2d-0.2423984!3d35.2316037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e35006e6a9b15%3A0xdfba79037b7ccf4b!2sVita%20life!5e0!3m2!1sen!2sdz!4v1752407347466!5m2!1sen!2sdz"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "100%" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div className="mb-16" variants={itemVariants}>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                <span className="text-blue-600">fréquemment posées</span> Questions 
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Trouvez des réponses aux questions fréquemment posées sur nos services et rendez-vous
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
                  variants={itemVariants}
                >
                  <motion.button
                    className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-all duration-300"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    whileHover={{ scale: 1.01 }}
                  >
                    <span className="font-semibold text-gray-800">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.button>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 py-4 bg-gray-50 border-t border-gray-200"
                    >
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Footer with Logo */}
          <motion.div 
            className="text-center py-8 border-t border-gray-200"
            variants={itemVariants}
          >
            <div className="flex justify-center mb-4">
              <Image
                src="/assets/logo.png"
                alt="Vitalife-Medical Logo"
                width={350}
                height={350}
                className="object-contain"
              />
            </div>
            <p className="text-gray-600 mb-6 text-lg">
              Centre de Diagnostic Médical - Votre santé, notre priorité
            </p>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors duration-300 w-15 h-15"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-6">
              © 2025 Vitalife-Medical Centre de Diagnostic Médical. Tous droits réservés.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;