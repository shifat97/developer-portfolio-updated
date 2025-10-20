import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, User, Briefcase, Code2, GraduationCap, Mail, Sparkles, FolderOpen, Award } from 'lucide-react'
import data from '../data/data.json'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Icon mapping for navigation items
  const iconMap = {
    'Home': Home,
    'About': User,
    'Experience': Briefcase,
    'Projects': Code2,
    'Skills': Award,
    'Education': GraduationCap,
    'Contact': Mail
  }

  // Create navItems from data.json with icons
  const navItems = data.navigation.map(item => ({
    ...item,
    icon: iconMap[item.name] || FolderOpen
  }))

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-lg' 
            : 'bg-white/60 backdrop-blur-md'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
            {/* Logo */}
            <motion.div 
              className="relative z-50"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center cursor-pointer group">
                <div className="relative">
                  <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary-500 absolute -top-1 -left-1 animate-pulse" />
                  <span className="text-xl sm:text-2xl lg:text-2xl font-black bg-gradient-main bg-clip-text text-transparent">
                    Portfolio
                  </span>
                </div>
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-teal rounded-full ml-1.5 sm:ml-2 animate-bounce"></span>
              </div>
            </motion.div>

            {/* Desktop Navigation - Hidden on mobile and tablet */}
            <motion.ul 
              className="hidden lg:flex items-center space-x-1 xl:space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    className="relative px-3 xl:px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 group text-sm xl:text-base"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-lavender rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                    />
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            {/* Desktop CTA Button - Hidden on mobile and tablet */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.button
                className="relative px-5 xl:px-6 py-2 xl:py-2.5 rounded-full font-semibold text-white bg-gradient-main overflow-hidden group shadow-lg text-sm xl:text-base"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Get In Touch</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.button>
            </motion.div>

            {/* Mobile/Tablet Menu Toggle - Visible on mobile and tablet */}
            <motion.button
              className="lg:hidden relative p-2 sm:p-2.5 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 text-primary-700 shadow-md hover:shadow-lg transition-shadow"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X size={20} className="sm:w-6 sm:h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu size={20} className="sm:w-6 sm:h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile/Tablet Menu - Visible on mobile and tablet */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile/Tablet Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] md:w-[380px] bg-white shadow-2xl z-50 lg:hidden overflow-hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-teal/5"></div>
                <div className="absolute inset-0 bg-mesh-gradient opacity-10"></div>
              </div>

              {/* Close Button */}
              <motion.button
                className="absolute top-4 right-4 p-2 rounded-lg bg-white/80 backdrop-blur-sm shadow-md text-primary-600 hover:bg-primary-100 transition-colors z-10"
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={20} />
              </motion.button>

              <nav className="relative h-full flex flex-col pt-20 pb-6 px-6 sm:px-8">
                {/* Logo in menu */}
                <div className="flex items-center mb-8">
                  <Sparkles className="w-6 h-6 text-primary-500 mr-2" />
                  <span className="text-xl font-black bg-gradient-main bg-clip-text text-transparent">
                    Navigation
                  </span>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 space-y-2">
                  {navItems.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault()
                          handleNavClick(item.href)
                        }}
                        className="flex items-center space-x-3 px-4 py-3.5 sm:py-4 rounded-xl text-gray-700 hover:text-white hover:bg-gradient-main transition-all duration-300 group"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center group-hover:from-white/20 group-hover:to-white/10 transition-all">
                          <Icon size={18} className="text-primary-600 group-hover:text-white" />
                        </div>
                        <span className="font-medium text-sm sm:text-base flex-1">{item.name}</span>
                        <motion.span 
                          className="opacity-0 group-hover:opacity-100 text-white transition-opacity"
                          initial={{ x: -10 }}
                          whileHover={{ x: 0 }}
                        >
                          →
                        </motion.span>
                      </motion.a>
                    )
                  })}
                </div>
                
                {/* CTA Button */}
                <motion.button
                  className="w-full mt-6 py-3.5 sm:py-4 px-6 rounded-xl bg-gradient-main text-white font-semibold shadow-xl hover:shadow-2xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center justify-center gap-2 text-sm sm:text-base">
                    Get In Touch
                    <Sparkles className="w-4 h-4" />
                  </span>
                </motion.button>

                {/* Social Links */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-xs text-gray-500 text-center mb-3">Follow me</p>
                  <div className="flex justify-center space-x-4">
                    {['GitHub', 'LinkedIn', 'Twitter'].map((social, index) => (
                      <motion.a
                        key={social}
                        href="#"
                        className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gradient-main hover:text-white flex items-center justify-center text-gray-600 transition-all"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                      >
                        <span className="text-xs font-medium">{social[0]}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header