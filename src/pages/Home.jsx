import Hero from '../components/Home/hero';
import Skills from '../components/Home/skillsSection';
import Featured from '../components/Home/featuredProjects';
import Capabilities from '../components/Home/capabilitiesSection';
import Action from '../components/Home/actionSection';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../utils/motion';
function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={staggerContainer}
    >
      {/* Hero Section */}
      <motion.div variants={fadeUp}>
        <Hero />
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
        <Action />
      </motion.div>
    </motion.div>
  );
}

export default Home;
