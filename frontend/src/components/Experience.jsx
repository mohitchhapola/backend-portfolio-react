import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Shaurya Software',
      position: 'Backend Developer',
      duration: 'Feb 2025 - Present',
      location: 'India',
      description: 'Developing robust backend APIs and ERP systems',
      achievements: [
        'Building scalable School ERP System for 10-12 schools',
        'Implementing AWS SQS for message queue management',
        'Working with Node.js, Express, PostgreSQL, and MySQL',
        'Handling complex database architecture and optimization',
        'REST API development and integration',
      ],
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'MySQL', 'AWS SQS'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Professional Experience
          </h2>
          <p className="text-text-secondary text-lg">
            My journey as a backend developer
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="glass-effect p-8 rounded-xl border-l-4 border-accent"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.position}</h3>
                  <div className="flex flex-wrap gap-4 text-text-secondary">
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} className="text-accent" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-accent" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-accent" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-text-secondary mb-4">{exp.description}</p>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-accent mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3 text-text-secondary"
                    >
                      <span className="text-accent mt-1">→</span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-xs font-semibold text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;