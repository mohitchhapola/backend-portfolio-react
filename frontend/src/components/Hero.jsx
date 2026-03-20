import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="hero">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-semibold">
            💻 Backend Developer
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Hi, I'm <span className="gradient-text">Mohit Chhapola</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto"
        >
          Backend Developer specializing in <span className="text-accent">Node.js</span>, <span className="text-accent">Express</span> & <span className="text-accent">NestJS</span>.
          <br />Currently building scalable APIs & ERP systems at <span className="text-accent">Shaurya Software</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 217, 255, 0.8)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-accent text-primary rounded-lg font-semibold flex items-center justify-center gap-2 glow-effect cursor-pointer"
          >
            View My Work <ArrowRight size={20} />
          </motion.a>
          <motion.a
            href="https://github.com/mohitchhapola"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all duration-300 flex items-center justify-center gap-2"
          >
            GitHub <Download size={20} />
          </motion.a>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 mt-16"
        >
          {[
            { number: '10+', label: 'Projects' },
            { number: '1+', label: 'Years Backend' },
            { number: '100%', label: 'Dedicated' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="glass-effect p-4 rounded-lg"
            >
              <p className="text-2xl md:text-3xl font-bold gradient-text">{stat.number}</p>
              <p className="text-sm text-text-secondary">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <motion.div className="w-1 h-2 bg-accent rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;