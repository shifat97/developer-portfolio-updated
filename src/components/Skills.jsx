import { motion } from 'framer-motion'
import { 
  Sparkles, Cloud, Server, GitBranch, 
  Terminal, Code2, Database, Shield,
  Activity, Layers, Package, Monitor
} from 'lucide-react'
import data from '../data/data.json'

const Skills = () => {
  const { skills } = data

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

  const categoryVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const skillBarVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  }

  // Icon mapping for categories
  const categoryIcons = {
    'Cloud Platforms': Cloud,
    'Container & Orchestration': Package,
    'CI/CD Tools': GitBranch,
    'Infrastructure as Code': Terminal,
    'Programming': Code2,
    'Monitoring & Logging': Activity,
    'Databases': Database,
    'Security': Shield,
    'Version Control': GitBranch,
    'Operating Systems': Monitor,
    'Networking': Layers
  }

  // Color gradients for different categories
  const categoryGradients = [
    'from-primary-500 to-primary-600',
    'from-accent-teal to-primary-500',
    'from-accent-coral to-primary-600',
    'from-primary-600 to-accent-teal',
    'from-primary-500 to-accent-coral',
    'from-accent-teal to-accent-coral'
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white via-accent-teal/5 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-5"></div>
      <motion.div
        className="absolute top-1/3 -left-32 w-96 h-96 bg-gradient-cool rounded-full filter blur-3xl opacity-10"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-1/3 -right-32 w-80 h-80 bg-gradient-warm rounded-full filter blur-3xl opacity-10"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-primary-500 animate-pulse" />
              <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
                Technical Expertise
              </span>
              <Sparkles className="w-5 h-5 text-primary-500 animate-pulse" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              <span className="bg-gradient-main bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Mastering the tools and technologies that power modern DevOps practices
            </p>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {skills.categories.map((category, categoryIndex) => {
            const Icon = categoryIcons[category.name] || Server
            const gradientClass = categoryGradients[categoryIndex % categoryGradients.length]
            
            return (
              <motion.div
                key={category.name}
                variants={categoryVariants}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className={`w-14 h-14 bg-gradient-to-br ${gradientClass} rounded-xl flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{category.name}</h3>
                      <p className="text-sm text-gray-500">
                        {category.skills.length} Technologies
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.1 }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">
                            {skill.name}
                          </span>
                          <motion.span 
                            className="text-sm font-semibold text-primary-600"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + skillIndex * 0.1 }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            className={`absolute inset-y-0 left-0 bg-gradient-to-r ${gradientClass} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 1.5, 
                              delay: 0.3 + skillIndex * 0.1,
                              ease: "easeOut" 
                            }}
                          >
                            {/* Animated Shine Effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              animate={{
                                x: ['-100%', '200%']
                              }}
                              transition={{
                                duration: 2,
                                delay: 1 + skillIndex * 0.1,
                                repeat: Infinity,
                                repeatDelay: 3
                              }}
                            />
                          </motion.div>
                          
                          {/* Milestone Dots */}
                          {[25, 50, 75].map((milestone) => (
                            <div
                              key={milestone}
                              className="absolute top-1/2 transform -translate-y-1/2 w-0.5 h-full bg-white/50"
                              style={{ left: `${milestone}%` }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Skills Summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-600 mb-6">
            And many more tools and technologies in the DevOps ecosystem
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Git', 'Linux', 'Nginx', 'Redis', 'MongoDB', 'Elasticsearch', 'Datadog', 'NewRelic'].map((tool, index) => (
              <motion.span
                key={tool}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md hover:border-primary-300 transition-all"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills