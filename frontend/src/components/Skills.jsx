import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: '🔧 Backend Languages',
      skills: ['Node.js', 'JavaScript', 'TypeScript', 'Python', 'SQL'],
    },
    {
      title: '⚙️ Frameworks & Libraries',
      skills: ['Express', 'NestJS', 'Sequelize ORM', 'MongoDB', 'PostgreSQL'],
    },
    {
      title: '☁️ Databases & Services',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'AWS SQS', 'Redis'],
    },
    {
      title: '🛠️ Tools & DevOps',
      skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Linux'],
    },
    {
      title: '📚 Other Technologies',
      skills: ['REST APIs', 'JWT Auth', 'Microservices', 'ERP Systems', 'Message Queues'],
    },
    {
      title: '💼 Currently Using',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MySQL', 'AWS SQS'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Technical Skills
          </h2>
          <p className="text-text-secondary text-lg">
            Backend technologies and tools I work with daily
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass-effect p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold text-accent mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-lg text-sm font-semibold text-accent hover:bg-accent/20 transition-all duration-300 cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;