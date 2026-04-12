import ProjectCard from '../components/Projects/ProjectsComponents/ProjectCard';
import { projects } from '../components/Projects/ProjectsData/ProjectsData';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../utils/motion';
import Button from '../components/liquidButton';

function Projects() {
  return (
    <div>
      {/* Hero Section */}
<motion.section
  className="max-w-6xl mx-auto py-32 px-6"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  variants={staggerContainer}
>

  <motion.h1 className="text-6xl font-semibold max-w-3xl" variants={fadeUp}>
    Building modern, scalable web experiences
  </motion.h1>

  <motion.div className="mt-8 flex items-center gap-6" variants={fadeUp}>
    <motion.p className="text-text-secondary max-w-md" variants={fadeUp}>
      Front-End Engineer with 10+ years experience...
    </motion.p>

    <div className="flex gap-3">
      <Button
        href="/contact"
        text="Start a Project"
        colors={["rgb(155,92,255)", "rgb(179,136,255)", "rgb(217,185,255)"]}
      />
      <Button
        href="https://github.com"
        text="View GitHub"
        variant="glass"
      />
    </div>
  </motion.div>

</motion.section>

      {/* Projects Grid */}
         <motion.section
      className="max-w-6xl mx-auto px-6 py-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerContainer}
    >
      
      <motion.div className="mb-12" variants={fadeUp}>
        <motion.h2 className="text-2xl md:text-3xl font-semibold" variants={fadeUp}>
          Selected Work
        </motion.h2>
        <motion.span
          className="mt-3 block h-[2px] w-16 md:w-24 rounded-full bg-[rgba(155,92,255,0.85)] origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.p className="text-text-secondary mt-2" variants={fadeUp}>
          A selection of projects across front-end, CMS, and DevOps.
        </motion.p>
      </motion.div>

      <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2" variants={staggerContainer}>
        { projects.map((project) => (
          <motion.div key={project.name} variants={fadeUp}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

    </motion.section>
    </div>
  );
}

export default Projects;
