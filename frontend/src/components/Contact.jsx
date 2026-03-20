import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000'}/api/contact/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setResponse({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setResponse({ type: 'error', message: data.error || 'Failed to send message' });
      }
    } catch (error) {
      setResponse({ type: 'error', message: 'Error sending message. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-20 min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50"
      id="contact"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Get In Touch</h1>
          <p className="text-xl text-text-secondary">
            Have a project or opportunity? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              { icon: Mail, label: 'Email', value: 'your@email.com', link: 'mailto:your@email.com' },
              { icon: Phone, label: 'Phone', value: '+91 XXXXX XXXXX', link: 'tel:+91' },
              { icon: MapPin, label: 'Location', value: 'India', link: '#' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={index}
                  href={item.link}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 glass-effect p-4 rounded-lg cursor-pointer hover:border-accent transition-all"
                >
                  <Icon className="text-accent" size={24} />
                  <div>
                    <p className="text-sm text-text-secondary">{item.label}</p>
                    <p className="text-white font-semibold">{item.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-effect p-6 rounded-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-accent mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-primary/50 border border-accent/30 rounded-lg text-white placeholder-text-secondary focus:outline-none focus:border-accent transition-all duration-300"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-accent mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-primary/50 border border-accent/30 rounded-lg text-white placeholder-text-secondary focus:outline-none focus:border-accent transition-all duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-accent mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-primary/50 border border-accent/30 rounded-lg text-white placeholder-text-secondary focus:outline-none focus:border-accent transition-all duration-300"
                  placeholder="Project inquiry"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-accent mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 bg-primary/50 border border-accent/30 rounded-lg text-white placeholder-text-secondary focus:outline-none focus:border-accent transition-all duration-300"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              {response && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${
                    response.type === 'success'
                      ? 'bg-green-500/10 border border-green-500 text-green-400'
                      : 'bg-red-500/10 border border-red-500 text-red-400'
                  }`}
                >
                  {response.message}
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 217, 255, 0.8)" }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-accent text-primary rounded-lg font-semibold flex items-center justify-center gap-2 glow-effect disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={20} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;