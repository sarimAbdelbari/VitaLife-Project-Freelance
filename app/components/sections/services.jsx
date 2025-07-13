'use client'

import { motion } from 'framer-motion'

const Services = () => {
  // Animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 }
    }
  }

  // Services data
  const services = [
    {
      icon: "👨‍⚕️",
      title: "Médecine Générale",
      description: "Consultations complètes, diagnostics primaires et suivi médical personnalisé pour toute la famille."
    },
    {
      icon: "📡",
      title: "Radiologie",
      description: "Imagerie médicale avancée incluant rayons X, échographies et scanners pour un diagnostic précis."
    },
    {
      icon: "🦴",
      title: "Traumatologie",
      description: "Traitement spécialisé des blessures, fractures et traumatismes avec équipements modernes."
    },
    {
      icon: "❤️",
      title: "Cardiologie",
      description: "Diagnostic et suivi des maladies cardiaques avec électrocardiogrammes et examens spécialisés."
    },
    {
      icon: "🫁",
      title: "Gastro-entérologie",
      description: "Examen et traitement des troubles digestifs avec technologies de pointe."
    },
    {
      icon: "🧪",
      title: "Analyses Médicales",
      description: "Laboratoire complet avec résultats rapides et précis en moins de 24 heures."
    }
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={contentVariants}
        >
          {/* Header Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - Title */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-4">
                <div className="w-8 h-0.5 bg-gradient-to-r from-[#04B2D9] to-[#06B6D4] mr-4"></div>
                <span className="text-[#04B2D9] font-semibold text-sm uppercase tracking-wider">
                  NOS MEILLEURS SERVICES
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Services de Qualité
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1453A6] to-[#04B2D9]">
                  Ce Centre Médical
                </span>
              </h2>
            </motion.div>

            {/* Right Side - Description */}
            <motion.div variants={itemVariants}>
              <p className="text-gray-600 text-lg leading-relaxed">
                Nous sommes privilégiés de travailler avec des centaines de professionnels de la santé 
                avant-gardistes, incluant plusieurs des meilleures technologies, logiciels et marques 
                mondiales, pour que vous vous sentiez en sécurité et à l'aise dans notre établissement.
              </p>
            </motion.div>
          </div>

          {/* Services Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            variants={contentVariants}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#04B2D9]/20"
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1453A6] to-[#04B2D9] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <span className="text-2xl text-white">{service.icon}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1453A6] to-[#04B2D9] rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 scale-125"></div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1453A6] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>

                {/* Hover Effect Line */}
                <div className="w-0 h-0.5 bg-gradient-to-r from-[#04B2D9] to-[#06B6D4] mt-6 group-hover:w-full transition-all duration-500"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action Section */}
          <motion.div 
            className="text-center bg-gradient-to-r from-[#1453A6] to-[#04B2D9] rounded-2xl p-8 md:p-12 shadow-xl"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Offrir les soins de santé de demain pour votre famille,
              </h3>
            </div>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Découvrez nos services médicaux cette semaine
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-white text-[#1453A6] font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📞 Prendre Rendez-vous
              </motion.button>
              
              <motion.button
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📋 Voir Plus de Services
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
