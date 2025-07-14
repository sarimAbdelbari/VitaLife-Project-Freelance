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

  // Services data with professional medical symbols
  const services = [
    {
      icon: "⚕",
      title: "Médecine Générale",
      description: "Consultations complètes, diagnostics primaires et suivi médical personnalisé pour toute la famille.",
      features: ["Consultation", "Diagnostic", "Suivi médical"]
    },
    {
      icon: "⚛",
      title: "Radiologie",
      description: "Imagerie médicale avancée incluant rayons X, échographies et scanners pour un diagnostic précis.",
      features: ["Rayons X", "Échographie", "Scanner"]
    },
    {
      icon: "🩻",
      title: "Traumatologie",
      description: "Traitement spécialisé des blessures, fractures et traumatismes avec équipements modernes.",
      features: ["Fractures", "Blessures", "Rééducation"]
    },
    {
      icon: "♡",
      title: "Cardiologie",
      description: "Diagnostic et suivi des maladies cardiaques avec électrocardiogrammes et examens spécialisés.",
      features: ["ECG", "Holter", "Échographie cardiaque"]
    },
    {
      icon: "◉",
      title: "Gastro-entérologie",
      description: "Examen et traitement des troubles digestifs avec technologies de pointe.",
      features: ["Endoscopie", "Consultation", "Diagnostic"]
    },
    {
      icon: "⊕",
      title: "Analyses Médicales",
      description: "Laboratoire complet avec résultats rapides et précis en moins de 24 heures.",
      features: ["Analyses sang", "Urines", "Résultats 24h"]
    }
  ]

  return (
    <section className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={contentVariants}
        >
          {/* Header Section */}
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <div className="flex items-center justify-center mb-3">
              <div className="w-6 h-0.5 bg-gradient-to-r from-[#04B2D9] to-[#1261A6] mr-3"></div>
              <span className="text-[#1453A6] font-semibold text-sm uppercase tracking-wider">
                NOS SERVICES MÉDICAUX
              </span>
              <div className="w-6 h-0.5 bg-gradient-to-r from-[#04B2D9] to-[#1261A6] ml-3"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Services de Qualité
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#04B2D9] to-[#1453A6]">
                Centre Médical Moderne
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Des soins médicaux professionnels avec des équipements de dernière génération 
              pour votre santé et votre bien-être
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            variants={contentVariants}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group p-6 bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:border-[#1453A6]/30 transition-all duration-300"
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Icon */}
                <div className="flex items-center justify-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1453A6] to-[#04B2D9] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <span className="text-2xl text-white font-bold">{service.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#1453A6] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center">
                      <div className="px-3 py-1 bg-[#1453A6]/10 rounded-full text-[#1453A6] text-xs border border-[#1453A6]/20">
                        {feature}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className="mt-4 pt-4 border-t border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <span className="text-[#04B2D9] text-sm font-medium">En savoir plus →</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Simplified CTA - Focus on Services */}
          <motion.div 
            className="text-center p-6 bg-gradient-to-br from-[#1453A6] to-[#04B2D9] rounded-xl shadow-xl"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Besoin d'un Service Spécifique ?
            </h3>
            <p className="text-white/90 mb-6 text-base max-w-xl mx-auto">
              Nos spécialistes sont disponibles pour répondre à vos besoins médicaux
            </p>
            
            <motion.button
              className="px-8 py-4 bg-white text-[#1453A6] font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📋 Consulter un Spécialiste
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
