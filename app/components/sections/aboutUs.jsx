'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const AboutUs = () => {
  // Animation variants - Fixed for mobile
  const contentVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const uniqueHighlights = [
    { 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ), 
      title: "Centre Moderne à Sfisef", 
      desc: "Premier centre de diagnostic moderne dans la région" 
    },
    { 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ), 
      title: "Équipe Multidisciplinaire", 
      desc: "Spécialistes en médecine générale, cardiologie, radiologie et plus" 
    }
  ]

  return (
    <section className="relative min-h-screen py-16 bg-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 right-20 w-40 h-40 border border-gray-300 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-32 h-32 border border-gray-300 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={contentVariants}
        >
          {/* Header */}
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <div className="flex items-center justify-center mb-3">
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 mr-3"></div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                À PROPOS DE NOUS
              </span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 ml-3"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Vitalife-Medical - Centre de
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Diagnostic Médical
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Votre partenaire de confiance pour des soins de santé de qualité à Sfisef
            </p>
          </motion.div>

          {/* Main Content - Balanced Layout */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Left Side - Content Card */}
            <motion.div className="relative group" variants={itemVariants}>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative p-8 bg-white rounded-xl border border-gray-200 shadow-xl h-full flex flex-col justify-between">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Notre Centre Médical
                  </h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  Centre de diagnostic médical moderne récemment ouvert à Sfisef, en Algérie, 
                  offrant des services de santé complets avec des équipements de pointe et des soins médicaux professionnels.
                </p>
                
                {/* Mission Section */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-blue-600 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Notre Mission
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Construire la confiance et la crédibilité en présentant clairement nos services, 
                    en facilitant la prise de rendez-vous et en mettant en évidence notre emplacement et nos coordonnées.
                  </p>
                </div>

                {/* Call to Action */}
                <div className="mt-auto bottom-0">
                  <motion.button
                    onClick={() => window.location.href = '#contact'}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-500 cursor-pointer to-cyan-400 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Prendre rendez-vous
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Doctor Image Card */}
            <motion.div className="relative group" variants={itemVariants}>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl blur opacity-30"></div>
              <div className="relative h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-2xl border-2 border-gray-200">
                <Image
                  src="/assets/images/AboutUs.jpg"
                  alt="Vitalife Centre de Diagnostic Médical - Médecin professionnel"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Enhanced Image Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                  <div className="p-6 bg-white/95 backdrop-blur-md rounded-xl border border-gray-200 shadow-xl">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-gray-800">
                        Excellence Médicale
                      </h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm mb-3">
                      Équipements de pointe et soins professionnels pour votre santé et votre bien-être
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-800 font-semibold text-sm">Depuis 2024</p>
                        <p className="text-gray-500 text-xs">Centre moderne</p>
                      </div>
                      <div className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full">
                        <span className="text-white text-xs font-medium">Ouvert 24/7</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Unique Highlights */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
              <span className="text-blue-600">Ce Qui Nous Rend</span> Unique
            </h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {uniqueHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="relative group "
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative p-8 bg-white rounded-xl border border-gray-200 shadow-xl text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 text-blue-600">
                      {highlight.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {highlight.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs
