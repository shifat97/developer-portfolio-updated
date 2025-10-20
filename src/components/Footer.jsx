import { motion } from 'framer-motion'
import { 
  Heart, Code, Coffee, Github, 
  Linkedin, Twitter, Mail, ArrowUp
} from 'lucide-react'
import data from '../data/data.json'

const Footer = () => {
  const { personal, social } = data
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: social.github },
    { name: 'LinkedIn', icon: Linkedin, href: social.linkedin },
    { name: 'Twitter', icon: Twitter, href: social.twitter },
    { name: 'Email', icon: Mail, href: `mailto:${social.email}` }
  ]

  return (
    <footer className="relative bg-gradient-to-b from-white to-primary-50/30 border-t border-gray-200">
      {/* Top Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h3 className="text-2xl font-black bg-gradient-main bg-clip-text text-transparent">
              {personal.name}
            </h3>
            <p className="text-gray-600 text-center mt-2">{personal.role}</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex gap-4 mb-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md hover:border-primary-300 hover:bg-primary-50 transition-all group"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <link.icon className="w-4 h-4 text-gray-600 group-hover:text-primary-600 transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8"
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center space-y-2"
          >
            <p className="text-gray-600 text-sm flex items-center justify-center gap-2">
              <span>© {currentYear} {personal.name}. All rights reserved.</span>
            </p>
            <p className="text-gray-500 text-xs flex items-center justify-center gap-2">
              <span>Built with</span>
              <Heart className="w-3 h-3 text-red-500 animate-pulse" />
              <span>and</span>
              <Coffee className="w-3 h-3 text-brown-600" />
              <span>using React & Tailwind CSS</span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-main text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
      </motion.button>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-main opacity-50"></div>
    </footer>
  )
}

export default Footer