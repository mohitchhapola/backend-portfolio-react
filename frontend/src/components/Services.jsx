import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Zap, Shield, Cloud, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: 'API Development',
      description: 'Building scalable RESTful APIs with Node.js and Express',
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Designing efficient databases with PostgreSQL and MongoDB',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimizing backend performance and query efficiency',
    },
    {
      icon: Shield,
      title: 'Authentication & Security',
      description: 'Implementing JWT, OAuth, and secure authorization systems',
    },
    {
      icon: Cloud,
      title: 'AWS Services',
      description: 'Implementing AWS SQS and other cloud services',
    },
    // {
    //   icon: Wrench,
    //   title: 'System Architecture',
    //   description: 'Designing scalable microservices and system architecture',
    // },
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
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Services I Offer
          </h2>
          <p className="text-text-secondary text-lg">
            What I can help you with
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="glass-effect p-8 rounded-xl text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-all"
                >
                  <Icon className="text-accent" size={32} />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-text-secondary">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;