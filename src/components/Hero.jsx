import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  Terminal, Cloud, GitBranch, Server, Shield, 
  Cpu, Container, Activity, Sparkles, ArrowRight,
  Github, Linkedin, Mail, Download
} from 'lucide-react'
import data from '../data/data.json'

const Hero = () => {
  // Destructure data
  const { personal, hero, social } = data
  
  // Typewriter effect for roles - using roles from data.json
  const roles = personal.roles || ['DevOps Engineer']
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  
  useEffect(() => {
    const role = roles[currentRoleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < role.length) {
          setCurrentText(role.slice(0, currentText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(role.slice(0, currentText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)
    
    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentRoleIndex])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  // DevOps tools/icons floating around
  const devOpsIcons = [
    { Icon: Cloud, color: "text-primary-500", delay: 0 },
    { Icon: Container, color: "text-accent-teal", delay: 0.5 },
    { Icon: GitBranch, color: "text-primary-600", delay: 1 },
    { Icon: Server, color: "text-accent-coral", delay: 1.5 },
    { Icon: Shield, color: "text-primary-400", delay: 2 },
    { Icon: Cpu, color: "text-accent-teal", delay: 2.5 }
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-16 sm:pt-18 lg:pt-20">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-teal/5"></div>
        <div className="absolute inset-0 bg-mesh-gradient opacity-20"></div>
      </div>

      {/* Animated Background Circles */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-main rounded-full filter blur-3xl opacity-20"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-cool rounded-full filter blur-3xl opacity-20"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating DevOps Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {devOpsIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.color}`}
            style={{
              top: `${20 + (index * 15)}%`,
              left: index % 2 === 0 ? `${10 + (index * 5)}%` : 'auto',
              right: index % 2 !== 0 ? `${10 + (index * 5)}%` : 'auto',
            }}
            animate={floatingAnimation}
            transition={{
              ...floatingAnimation.transition,
              delay: item.delay
            }}
          >
            <item.Icon size={30} className="opacity-30" />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-16 lg:py-20"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-200 rounded-full">
            <Activity className="w-4 h-4 text-primary-600 animate-pulse" />
            <span className="text-sm font-medium text-primary-700">{personal.availability}</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6"
        >
          <span className="text-gray-800">{hero.greeting} </span>
          <span className="bg-gradient-main bg-clip-text text-transparent">{personal.name}</span>
        </motion.h1>

        {/* Role Title with Typewriter Effect */}
        <motion.div 
          variants={itemVariants}
          className="flex items-center justify-center gap-3 mb-6 min-h-[48px] sm:min-h-[56px]"
        >
          <Terminal className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700">
            <span>{currentText}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              className="inline-block w-1 h-6 sm:h-8 md:h-10 bg-primary-600 ml-1"
            />
          </h2>
          <Terminal className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />
        </motion.div>

        {/* Description */}
        <motion.p 
          variants={itemVariants}
          className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          {hero.description} Specialized in{" "}
          {hero.specializations.map((spec, index) => (
            <span key={spec}>
              <span className={index % 2 === 0 ? "text-primary-600 font-semibold" : "text-accent-teal font-semibold"}>
                {spec}
              </span>
              {index < hero.specializations.length - 1 && ", "}
              {index === hero.specializations.length - 2 && "and "}
            </span>
          ))}
          .
        </motion.p>

        {/* Tech Stack Pills */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {hero.techStack.map((tech, index) => (
            <motion.span
              key={tech}
              className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md hover:border-primary-300 transition-all cursor-default"
              whileHover={{ scale: 1.05, y: -2 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.a
            href={hero.buttons.primary.href}
            className="group relative px-8 py-4 bg-gradient-main text-white rounded-full font-semibold text-base sm:text-lg shadow-xl overflow-hidden inline-flex items-center justify-center"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(139, 92, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {hero.buttons.primary.text}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-warm"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a
            href={personal.resumeUrl}
            download
            className="group px-8 py-4 bg-white border-2 border-primary-200 text-primary-700 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl hover:border-primary-300 transition-all inline-flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5 mr-2" />
            {hero.buttons.secondary.text}
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center gap-4"
        >
          {[
            { Icon: Github, href: social.github, label: "GitHub" },
            { Icon: Linkedin, href: social.linkedin, label: "LinkedIn" },
            { Icon: Mail, href: `mailto:${social.email}`, label: "Email" }
          ].map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.label !== "Email" ? "_blank" : undefined}
              rel={item.label !== "Email" ? "noopener noreferrer" : undefined}
              className="group p-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-primary-300 transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <item.Icon className="w-5 h-5 text-gray-600 group-hover:text-primary-600 transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute -top-10 -right-10 text-primary-200"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles size={40} className="opacity-20" />
        </motion.div>
        <motion.div
          className="absolute -bottom-10 -left-10 text-accent-teal"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles size={40} className="opacity-20" />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-xs mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-2 bg-primary-500 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero