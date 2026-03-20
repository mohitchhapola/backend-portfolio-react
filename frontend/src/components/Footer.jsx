import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { label: 'GitHub', link: 'https://github.com/mohitchhapola' },
    { label: 'LinkedIn', link: 'https://linkedin.com' },
    { label: 'Twitter', link: 'https://twitter.com' },
  ];

  return (
    <footer className="border-t border-accent/20 bg-primary/50 backdrop-blur-md py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">MC.dev</h3>
            <p className="text-text-secondary">
              Building amazing backend systems with modern technologies.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-text-secondary">
              <li><a href="#hero" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#skills" className="hover:text-accent transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300 text-xs font-semibold"
                >
                  {social.label.substring(0, 2)}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-accent/20 pt-8 text-center text-text-secondary"
        >
          <p>© 2024 Mohit Chhapola. All rights reserved.</p>
          <p className="text-sm mt-2">Designed & built with <span className="text-accent">❤️</span> by Mohit</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;