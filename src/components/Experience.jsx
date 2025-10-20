import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Building2,
  Code2,
} from "lucide-react";
import data from "../data/data.json";

const Experience = () => {
  const { experience } = data;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-white via-accent-teal/5 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-5"></div>
      <motion.div
        className="absolute top-1/3 -left-32 w-64 h-64 bg-gradient-main rounded-full filter blur-3xl opacity-10"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 -right-32 w-96 h-96 bg-gradient-cool rounded-full filter blur-3xl opacity-10"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-primary-500 animate-pulse" />
              <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
                Career Journey
              </span>
              <Sparkles className="w-5 h-5 text-primary-500 animate-pulse" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              <span className="bg-gradient-main bg-clip-text text-transparent">
                Professional Experience
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Building scalable infrastructure and automating deployments
            </p>
          </motion.div>

          {/* Timeline Container */}
          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Timeline Line - hidden below lg breakpoint */}
            <motion.div
              className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-200 via-primary-400 to-accent-teal hidden lg:block"
              variants={timelineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ originY: 0 }}
            />

            {/* Mobile/Tablet Timeline Line - visible below lg breakpoint */}
            <motion.div
              className="absolute left-4 w-1 h-full bg-gradient-to-b from-primary-200 via-primary-400 to-accent-teal lg:hidden"
              variants={timelineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ originY: 0 }}
            />

            {/* Experience Cards */}
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col lg:flex-row items-center mb-12 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot - only visible on desktop */}
                <motion.div
                  className={`hidden lg:block absolute z-20 ${
                    index % 2 === 0
                      ? "lg:right-[calc(50%-32px)]"
                      : "lg:left-[calc(50%-32px)]"
                  }`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2, type: "spring" }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <div className="w-16 h-16 bg-white rounded-full border-4 border-primary-400 flex items-center justify-center shadow-lg">
                      <Briefcase className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="absolute -inset-1 bg-gradient-main rounded-full animate-pulse opacity-40"></div>
                  </div>
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className={`w-full lg:w-5/12 pl-12 sm:pl-16 lg:pl-0 ${
                    index % 2 === 0 ? "lg:pr-12" : "lg:pl-12 lg:ml-auto"
                  } ${index % 2 === 1 ? "lg:pl-12" : "lg:pr-12"}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100 hover:shadow-2xl transition-all relative overflow-hidden group">
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      {/* Header - Always left aligned */}
                      <div className="mb-4 text-left">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap gap-3 mb-3 justify-start">
                          <div className="flex items-center gap-1 text-primary-600">
                            <Building2 className="w-4 h-4" />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-1 text-gray-500">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-accent-teal">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {exp.duration}
                          </span>
                        </div>
                      </div>

                      {/* Description - Always left aligned */}
                      <p className="text-gray-600 mb-4 text-left">
                        {exp.description}
                      </p>

                      {/* Responsibilities - Always left aligned */}
                      <div className="space-y-2 mb-4">
                        {exp.responsibilities.map((resp, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start gap-2 text-left"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-gray-700 flex-1">
                              {resp}
                            </p>
                          </motion.div>
                        ))}
                      </div>

                      {/* Technologies - Always left aligned */}
                      <div className="flex flex-wrap gap-2 justify-start">
                        {exp.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-primary-100 to-primary-200 text-primary-700 rounded-full text-xs font-medium"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Empty Space for Timeline Layout - only on desktop */}
                <div className="hidden lg:block lg:w-5/12"></div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-600 mb-6">
              Looking for a dedicated DevOps engineer to transform your
              infrastructure?
            </p>
            <motion.a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-main text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Work Together
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
