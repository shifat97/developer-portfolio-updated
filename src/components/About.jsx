import { motion } from 'framer-motion'
import { 
  User, Award, Briefcase, Code, 
  CheckCircle, ArrowRight, Sparkles,
  Calendar, MapPin, Mail
} from 'lucide-react'
import data from '../data/data.json'
import profileImage from '../assets/images/Formal_Outfit.png'

const About = () => {
  const { about, personal } = data

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  const statDetails = [
    { icon: Briefcase, color: "from-primary-500 to-primary-600" },
    { icon: Award, color: "from-accent-teal to-primary-500" },
    { icon: Code, color: "from-accent-coral to-primary-600" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white via-primary-50/30 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-5"></div>
      <motion.div
        className="absolute top-1/4 -right-20 w-96 h-96 bg-gradient-cool rounded-full filter blur-3xl opacity-10"
        animate={{
          x: [0, -50, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -left-20 w-96 h-96 bg-gradient-warm rounded-full filter blur-3xl opacity-10"
        animate={{
          x: [0, 50, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex justify-center items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-primary-500 animate-pulse" />
              <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
                Get to Know Me
              </span>
              <Sparkles className="w-5 h-5 text-primary-500 animate-pulse" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              <span className="bg-gradient-main bg-clip-text text-transparent">
                {about.title}
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {about.subtitle}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image and Stats */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Profile Image Container */}
              <div className="relative">
                <div className="relative w-full max-w-md mx-auto">
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 bg-gradient-main rounded-2xl rotate-6 opacity-20"></div>
                  <div className="absolute inset-0 bg-gradient-cool rounded-2xl -rotate-6 opacity-20"></div>
                  
                  {/* Main Image Container */}
                  <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
                    <img src={profileImage} alt={personal.name} className="aspect-square rounded-xl object-cover" />
                    
                    {/* Status Badge */}
                    <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                      <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span className="text-xs font-semibold text-white">Available</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4">
                {about.stats.map((stat, index) => {
                  const StatIcon = statDetails[index].icon;
                  return (
                    <motion.div
                      key={index}
                      className="relative group"
                      whileHover={{ y: -5, scale: 1.05 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${statDetails[index].color} flex items-center justify-center mb-3`}>
                          <StatIcon className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-gray-800 mb-1">
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-600">
                          {stat.label}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Main Description */}
              <div className="prose prose-lg text-gray-600 leading-relaxed">
                <p>{about.description}</p>
              </div>

              {/* Personal Info */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="font-semibold">{personal.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-teal/20 to-accent-teal/30 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent-teal" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="font-semibold text-sm truncate">{personal.email}</p>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Key Highlights</h3>
                {about.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="mt-1">
                      <CheckCircle className="w-5 h-5 text-primary-500" />
                    </div>
                    <p className="text-gray-700 flex-1">{highlight}</p>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <motion.a
                  href="#contact"
                  className="group px-6 py-3 bg-gradient-main text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Connect
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="#experience"
                  className="px-6 py-3 bg-white border-2 border-primary-200 text-primary-700 rounded-full font-semibold hover:bg-primary-50 transition-all inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Experience
                  <Briefcase className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About