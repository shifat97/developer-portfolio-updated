import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  Sparkles,
  Trophy,
  Star,
  FileCheck,
  ExternalLink,
  CheckCircle,
} from "lucide-react";
import data from "../data/data.json";

const Education = () => {
  const { education, certifications } = data;

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-white via-primary-50/30 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-5"></div>
      <motion.div
        className="absolute top-1/3 -right-32 w-96 h-96 bg-gradient-main rounded-full filter blur-3xl opacity-10"
        animate={{
          x: [0, -50, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 -left-32 w-80 h-80 bg-gradient-cool rounded-full filter blur-3xl opacity-10"
        animate={{
          x: [0, 50, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
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
                Learning Journey
              </span>
              <Sparkles className="w-5 h-5 text-primary-500 animate-pulse" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              <span className="bg-gradient-main bg-clip-text text-transparent">
                Education & Certifications
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Building a strong foundation through continuous learning and
              professional development
            </p>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Education Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mb-16"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Education Card */}
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon Section */}
                    <div className="flex-shrink-0">
                      <motion.div
                        className="w-20 h-20 bg-gradient-main rounded-2xl flex items-center justify-center shadow-lg"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <GraduationCap className="w-10 h-10 text-white" />
                      </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-grow">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                          {edu.degree}
                        </h3>
                        <div className="flex flex-wrap gap-3 mb-3">
                          <div className="flex items-center gap-2 text-primary-600">
                            <BookOpen className="w-4 h-4" />
                            <span className="font-semibold">
                              {edu.institution}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-500">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{edu.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-accent-teal">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {edu.duration}
                          </span>
                        </div>
                      </div>

                      {/* GPA Badge */}
                      {edu.gpa && (
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-200 rounded-full mb-4">
                          <Trophy className="w-4 h-4 text-primary-600" />
                          <span className="text-sm font-semibold text-primary-700">
                            GPA: {edu.gpa}
                          </span>
                        </div>
                      )}

                      {/* Relevant Courses */}
                      {edu.relevant && (
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-3">
                            Relevant Coursework:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.relevant.map((course, idx) => (
                              <motion.span
                                key={idx}
                                className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-primary-300 hover:bg-primary-50 transition-all"
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                              >
                                {course}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                Professional Certifications
              </h3>
              <p className="text-gray-600">
                Industry-recognized credentials and achievements
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group"
                >
                  <div className="h-full bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col">
                    {/* Certification Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-shrink-0">
                        <motion.div
                          className="w-12 h-12 bg-gradient-to-br from-accent-teal to-primary-500 rounded-lg flex items-center justify-center shadow-md"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <FileCheck className="w-6 h-6 text-white" />
                        </motion.div>
                      </div>
                      <span className="text-xs font-semibold text-accent-teal bg-accent-teal/10 px-2 py-1 rounded-full">
                        {cert.date}
                      </span>
                    </div>

                    {/* Certification Content */}
                    <div className="flex-grow">
                      <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        {cert.issuer}
                      </p>

                      {/* Credential ID */}
                      {cert.credentialId && (
                        <div className="flex items-center gap-2 mb-3">
                          <Award className="w-4 h-4 text-gray-400" />
                          <span className="text-xs text-gray-500">
                            ID: {cert.credentialId}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* View Certificate Button */}
                    {cert.url && (
                      <motion.a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-200 text-primary-700 rounded-lg hover:from-primary-200 hover:to-primary-300 transition-all group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="text-sm font-medium">
                          View Certificate
                        </span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Achievement Stats */}
          <motion.div
            className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              {
                icon: GraduationCap,
                value: "B.S. Degree",
                label: "Computer Science",
              },
              { icon: Award, value: "3+", label: "Certifications" },
              { icon: Star, value: "3.58", label: "GPA Score" },
              { icon: CheckCircle, value: "100%", label: "Pass Rate" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100"
                whileHover={{ y: -5, scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <stat.icon className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-800 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
