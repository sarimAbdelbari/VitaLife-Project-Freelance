'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const AboutUs = () => {
  // Animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
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

  const stats = [
    { number: "15+", label: "Années d'expérience" },
    { number: "5000+", label: "Patients satisfaits" },
    { number: "24/7", label: "Service d'urgence" },
    { number: "100%", label: "Équipement moderne" }
  ]

  const contactInfo = [
    { icon: "📞", title: "Téléphone", value: "+213 48 79 40 40", subtitle: "Service 24/7" },
    { icon: "📧", title: "Email", value: "vitalifecom01@gmail.com", subtitle: "Contact direct" },
    { icon: "📍", title: "Adresse", value: "04 Rue Frihi Kada, Sfisef", subtitle: "Sfisef, Algérie" }
  ]

  const highlights = [
    { icon: "🏥", title: "Équipements Modernes", desc: "Technologies de pointe pour un diagnostic précis" },
    { icon: "👨‍⚕️", title: "Équipe Qualifiée", desc: "Professionnels expérimentés et dévoués" },
    { icon: "⚡", title: "Service Rapide", desc: "Résultats en moins de 24 heures" },
    { icon: "🎯", title: "Soins Personnalisés", desc: "Approche individualisée pour chaque patient" }
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#04B2D9] via-[#1261A6] to-[#1453A6] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={contentVariants}
        >
          {/* Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-300 mr-4"></div>
              <span className="text-cyan-300 font-semibold text-sm uppercase tracking-wider">
                À PROPOS DE NOUS
              </span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-300 ml-4"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Vitalife - Centre de
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
                Diagnostic Médical
              </span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-sm leading-relaxed">
              Votre partenaire de confiance pour des soins de santé de qualité à Sfisef
            </p>
          </motion.div>

          {/* Main Content - Image Right, Details Left */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Side - Details */}
            <motion.div className="space-y-8" variants={itemVariants}>
              {/* About Content */}
              <div className="p-8 bg-white/15 backdrop-blur-sm rounded-2xl border border-white/30 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-md flex items-center">
                  <span className="mr-3">🏥</span>
                  Notre Centre Médical
                </h3>
                <p className="text-white/90 leading-relaxed drop-shadow-sm mb-6 text-lg">
                  Centre de diagnostic médical moderne récemment ouvert à Sfisef, en Algérie, 
                  offrant des services de santé complets avec des équipements de pointe et des soins médicaux professionnels.
                </p>
                
                {/* Mission */}
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 mt-6">
                  <h4 className="text-lg font-semibold text-white mb-3 drop-shadow-md">Notre Mission</h4>
                  <p className="text-white/85 leading-relaxed drop-shadow-sm">
                    Construire la confiance et la crédibilité en présentant clairement nos services, 
                    en facilitant la prise de rendez-vous et en mettant en évidence notre emplacement et nos coordonnées.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="p-8 bg-white/15 backdrop-blur-sm rounded-2xl border border-white/30 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-md">
                  Contactez-nous
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">{contact.icon}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/90 font-semibold">{contact.value}</p>
                        <p className="text-white/70 text-sm">{contact.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div 
              className="relative h-[700px] lg:h-[750px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/30"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#1453A6]/60 via-transparent to-transparent z-10"></div>
              <Image
                src="/assets/images/aboutUs.webp"
                alt="Vitalife Centre de Diagnostic Médical"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Image Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                <div className="p-6 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-xl">
                  <h4 className="text-2xl font-bold text-white mb-3 drop-shadow-md">
                    Excellence Médicale
                  </h4>
                  <p className="text-white/90 drop-shadow-sm leading-relaxed">
                    Équipements de pointe et soins professionnels pour votre santé et votre bien-être
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-lg">✨</span>
                    </div>
                    <div>
                      <p className="text-white/90 font-semibold">Depuis 2024</p>
                      <p className="text-white/70 text-sm">Centre moderne</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            variants={itemVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-white/15 backdrop-blur-sm rounded-2xl border border-white/30 shadow-xl"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-md">
                  {stat.number}
                </div>
                <div className="text-white/90 text-sm md:text-base drop-shadow-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Highlights Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-white text-center mb-12 drop-shadow-lg">
              Pourquoi Choisir Vitalife ?
            </h3>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white/15 backdrop-blur-sm rounded-2xl border border-white/30 shadow-xl"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{highlight.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2 drop-shadow-md">
                        {highlight.title}
                      </h4>
                      <p className="text-white/85 drop-shadow-sm leading-relaxed">
                        {highlight.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center p-8 bg-white/15 backdrop-blur-sm rounded-2xl border border-white/30 shadow-xl"
            variants={itemVariants}
          >
            <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-md">
              Prêt à Prendre Soin de Votre Santé ?
            </h3>
            <p className="text-white/90 mb-8 drop-shadow-sm text-lg max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour prendre rendez-vous avec nos spécialistes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-white text-[#1453A6] font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📞 Appeler Maintenant
              </motion.button>
              <motion.a
                href="https://maps.app.goo.gl/5EYpWm9vFMvx46M99"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📍 Voir sur Google Maps
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs
