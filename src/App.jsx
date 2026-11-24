import { useEffect } from 'react';
import initSite from './lib/site.js';

import Preloader from './sections/Preloader.jsx';
import Navbar from './sections/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Work from './sections/Work.jsx';
import Carousel from './sections/Carousel.jsx';
import TechStack from './sections/TechStack.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';

export default function App() {
  useEffect(() => {
    initSite();
  }, []);

  return (
    <>
      <Preloader />

      <div className="noise-overlay" />
      <div className="cursor" id="cursor" />
      <div className="cursor-follower" id="cursor-follower" />

      <Navbar />
      <Hero />
      <About />
      <Work />
      <Carousel />
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
}
