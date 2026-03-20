import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;