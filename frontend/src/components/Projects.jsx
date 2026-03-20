import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'School ERP System',
      description: 'Comprehensive ERP system for school management serving 10-12 schools',
      details: 'Handles student management, attendance, grades, admissions, fee tracking, , reporting and much more ....',
      tags: ['Node.js', 'Express', 'PostgreSQL', 'MySQL', 'RESTful APIs'],
      link: '#',
      github: 'https://github.com/mohitchhapola',
      highlights: ['Multi-tenant architecture', 'AWS SQS Integration', 'Complex queries', 'Real-time updates'],
    },
    {
      id: 2,
      title: 'Message Queue System',
      description: 'AWS SQS implementation for asynchronous task processing',
      details: 'Handles email and whatsapp notifications, batch processing, and background jobs',
      tags: ['Node.js', 'AWS SQS', 'PostgreDql'],
      link: '#',
      github: 'https://github.com/mohitchhapola',
      highlights: ['Async processing', 'Error handling'],
    },
    {
      id: 3,
      title: 'Ecommerce Site',
      description: 'Building scalable and secure for multiuser',
      details: 'Authentication, authorization, Admin Dashboard',
      tags: ['Express', 'JWT', 'PostgreSQL', 'Sequelize ORM'],
      link: '#',
      github: 'https://github.com/mohitchhapola',
      highlights: ['JWT Authentication', 'Role-based access', 'API Documentation', 'Error handling'],
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Backend Projects
          </h2>
          <p className="text-text-secondary text-lg">
            Real-world backend systems and APIs I've built
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative overflow-hidden rounded-xl glass-effect hover:border-accent transition-all duration-300 flex flex-col h-full"
            >
              {/* Header */}
              <div className="p-6 border-b border-accent/20">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-text-secondary text-sm">{project.description}</p>
              </div>

              {/* Content */}
              <div className="p-6 flex-1">
                <p className="text-text-secondary text-sm mb-4">{project.details}</p>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-accent mb-2">Highlights:</h4>
                  <ul className="space-y-1">
                    {project?.highlights?.map((highlight, idx) => (
                      <li key={idx} className="text-xs text-text-secondary flex items-center gap-2">
                        <span className="text-accent">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: hoveredId === project.id ? 1 : 0, y: hoveredId === project.id ? 0 : 10 }}
                transition={{ duration: 0.3 }}
                className="p-6 border-t border-accent/20 flex gap-3"
              >
                <motion.a
                  href={project.link}
                  whileHover={{ scale: 1.05 }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-accent text-primary rounded-lg font-semibold hover:bg-accent/80 transition-all text-sm"
                >
                  Demo <ExternalLink size={14} />
                </motion.a>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-all text-sm"
                >
                  Code <Github size={14} />
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;