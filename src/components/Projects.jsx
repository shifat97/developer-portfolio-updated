import { motion } from 'framer-motion'
import { 
  Github, ExternalLink, Sparkles, Code2, 
  Server, Cloud, GitBranch, Terminal,
  ArrowUpRight, Folder, Star
} from 'lucide-react'
import data from '../data/data.json'

const Projects = () => {
  const { projects } = data

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const iconMap = {
    'Kubernetes': Cloud,
    'Docker': Server,
    'Jenkins': GitBranch,
    'CI/CD': GitBranch,
    'AWS': Cloud,
    'Terraform': Terminal,
    'Python': Code2,
    'Prometheus': Server,
    'Grafana': Server,
    'Go': Code2,
    'Groovy': Code2,
    'Ansible': Terminal
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white via-primary-50/20 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-5"></div>
      <motion.div
        className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-warm rounded-full filter blur-3xl opacity-10"
        animate={{
          x: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -left-32 w-80 h-80 bg-gradient-cool rounded-full filter blur-3xl opacity-10"
        animate={{
          x: [0, 100, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 20,
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
                Portfolio Showcase
              </span>
              <Sparkles className="w-5 h-5 text-primary-500 animate-pulse" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              <span className="bg-gradient-main bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Showcasing DevOps excellence through automation, scalability, and innovation
            </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col">
                {/* Card Header with Gradient */}
                <div className="relative h-48 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-teal overflow-hidden flex-shrink-0">
                  {/* Animated Background Pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      repeatType: 'reverse'
                    }}
                    style={{
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                      backgroundSize: '60px 60px'
                    }}
                  />
                  
                  {/* Project Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white rounded-2xl opacity-20 blur-xl animate-pulse"></div>
                      <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <Folder className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Project Number Badge */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 border border-white/30">
                    <span className="text-white font-semibold text-sm">#{index + 1}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
                    {project.name}
                  </h3>

                  {/* Project Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {project.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-accent-teal mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-5 flex-grow">
                    {project.technologies.map((tech, idx) => {
                      const Icon = iconMap[tech] || Code2
                      return (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-primary-50 to-primary-100 rounded-full h-fit"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Icon className="w-3 h-3 text-primary-600" />
                          <span className="text-xs font-medium text-primary-700">{tech}</span>
                        </motion.div>
                      )
                    })}
                  </div>

                  {/* Action Buttons - Always at bottom */}
                  <div className="flex gap-3 mt-auto">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </motion.a>
                    {project.demo ? (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-main text-white rounded-lg hover:shadow-lg transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">Demo</span>
                      </motion.a>
                    ) : (
                      <div className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 text-gray-500 rounded-lg cursor-not-allowed">
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">No Demo</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Section */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-600 mb-6">
            Want to see more of my work?
          </p>
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-primary-300 text-primary-700 rounded-full font-semibold shadow-lg hover:bg-primary-50 hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects