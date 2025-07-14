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

  const contactInfo = [
    { icon: "📞", title: "Téléphone", value: "+213 48 79 40 40", subtitle: "Service 24/7" },
    { icon: "📧", title: "Email", value: "vitalifecom01@gmail.com", subtitle: "Contact direct" },
    { icon: "📍", title: "Adresse", value: "04 Rue Frihi Kada, Sfisef", subtitle: "Sfisef, Algérie" }
  ]

  const uniqueHighlights = [
    { icon: "🏥", title: "Centre Moderne à Sfisef", desc: "Premier centre de diagnostic moderne dans la région" },
    { icon: "👨‍⚕️", title: "Équipe Multidisciplinaire", desc: "Spécialistes en médecine générale, cardiologie, radiologie et plus" }
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#04B2D9] via-[#1261A6] to-[#1453A6] py-16 overflow-hidden">
      {/* Simplified Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 right-20 w-40 h-40 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-32 h-32 border border-white/15 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={contentVariants}
        >
          {/* Header */}
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <div className="flex items-center justify-center mb-3">
              <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-300 mr-3"></div>
              <span className="text-cyan-300 font-semibold text-sm uppercase tracking-wider">
                À PROPOS DE NOUS
              </span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-300 ml-3"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
              Vitalife - Centre de
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
                Diagnostic Médical
              </span>
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-sm leading-relaxed">
              Votre partenaire de confiance pour des soins de santé de qualité à Sfisef
            </p>
          </motion.div>

          {/* Main Content - Redesigned Layout */}
          <div className="grid lg:grid-cols-5 gap-8 mb-16">
            {/* Left Side - Details (3/5 width) */}
            <motion.div className="lg:col-span-3 space-y-6" variants={itemVariants}>
              {/* About Content - Hero Style */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative p-8 bg-white/15 backdrop-blur-sm rounded-xl border border-white/30 shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                      <span className="text-white text-xl font-bold">⚕</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white drop-shadow-md">
                      Notre Centre Médical
                    </h3>
                  </div>
                  <p className="text-white/90 leading-relaxed drop-shadow-sm mb-6 text-lg">
                    Centre de diagnostic médical moderne récemment ouvert à Sfisef, en Algérie, 
                    offrant des services de santé complets avec des équipements de pointe et des soins médicaux professionnels.
                  </p>
                  
                  {/* Mission as part of main card */}
                  <div className="p-4 bg-gradient-to-r from-white/10 to-white/5 rounded-lg border border-white/20">
                    <h4 className="text-lg font-semibold text-cyan-300 mb-3 drop-shadow-md">🎯 Notre Mission</h4>
                    <p className="text-white/85 leading-relaxed drop-shadow-sm">
                      Construire la confiance et la crédibilité en présentant clairement nos services, 
                      en facilitant la prise de rendez-vous et en mettant en évidence notre emplacement et nos coordonnées.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Information - Grid Layout */}
              <div className="grid md:grid-cols-2 gap-4">
                {contactInfo.map((contact, index) => (
                  <motion.div 
                    key={index}
                    className="group p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -4 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-lg">{contact.icon}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/90 font-semibold text-sm">{contact.value}</p>
                        <p className="text-white/70 text-xs">{contact.subtitle}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Image (2/5 width) */}
            <motion.div 
              className="lg:col-span-2 relative group"
              variants={itemVariants}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-30"></div>
              <div className="relative h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-2xl border-2 border-white/30">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1453A6]/70 via-transparent to-transparent z-10"></div>
                <Image
                  src="/assets/images/aboutUs.webp"
                  alt="Vitalife Centre de Diagnostic Médical"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                
                {/* Enhanced Image Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                  <div className="p-6 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 shadow-xl">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold">✨</span>
                      </div>
                      <h4 className="text-xl font-bold text-white drop-shadow-md">
                        Excellence Médicale
                      </h4>
                    </div>
                    <p className="text-white/90 drop-shadow-sm leading-relaxed text-sm mb-3">
                      Équipements de pointe et soins professionnels pour votre santé et votre bien-être
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white/90 font-semibold text-sm">Depuis 2024</p>
                        <p className="text-white/70 text-xs">Centre moderne</p>
                      </div>
                      <div className="px-3 py-1 bg-white/20 rounded-full">
                        <span className="text-cyan-300 text-xs font-medium">Ouvert 24/7</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Unique Highlights - Focused on What Makes Us Different */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white text-center mb-8 drop-shadow-lg">
              <span className="text-cyan-300">Ce Qui Nous Rend</span> Unique
            </h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {uniqueHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative p-8 bg-white/15 backdrop-blur-sm rounded-xl border border-white/30 shadow-xl text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">{highlight.icon}</span>
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3 drop-shadow-md">
                      {highlight.title}
                    </h4>
                    <p className="text-white/85 drop-shadow-sm leading-relaxed">
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
