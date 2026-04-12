import Hero from '../components/Home/hero';
import Skills from '../components/Home/skillsSection';
import Featured from '../components/Home/featuredProjects';
import Capabilities from '../components/Home/capabilitiesSection';
import Action from '../components/Home/actionSection';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../utils/motion';
import { useState } from 'react';
import ContactFormModal from '../components/ContactFormModal';
import Seo from '../components/Seo';

function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <>
      <Seo
        title="Jose Manuel Becerra | Front-End Engineer"
        description="Portfolio of Jose Manuel Becerra, a Front-End Engineer building scalable web applications with a focus on performance, accessibility, and polished user experiences."
        path="/"
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Jose Manuel Becerra',
            jobTitle: 'Front-End Engineer',
            image: 'https://jmbecerramtz.github.io/jbecerra-portfolio/jbecerra-og.png',
            url: 'https://jmbecerramtz.github.io/jbecerra-portfolio/',
            address: {
              '@type': 'PostalAddress',
              addressRegion: 'Baja California',
              addressCountry: 'MX',
            },
            email: 'jmbecerramtz@gmail.com',
            sameAs: [
              'https://github.com/jmbecerramtz',
              'https://www.linkedin.com/in/jose-manuel-becerra-martinez-779a43138/',
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Jose Manuel Becerra Portfolio',
            url: 'https://jmbecerramtz.github.io/jbecerra-portfolio/',
          },
        ]}
      />

      <motion.div
        initial="hidden"
        animate="show"
        variants={staggerContainer}
      >
      {/* Hero Section */}
      <motion.div variants={fadeUp}>
        <Hero onOpenContactForm={openContactModal} />
      </motion.div>

      {/* Skills Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <Skills />
      </motion.div>

      {/* Featured Projects Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <Featured />
      </motion.div>

      {/* Capabilities Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <Capabilities />
      </motion.div>

      {/* Action Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <Action onOpenContactForm={openContactModal} />
      </motion.div>

      </motion.div>

      <ContactFormModal
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
        initialSubject="Project Inquiry"
        title="Get in touch"
      />
    </>
  );
}

export default Home;
