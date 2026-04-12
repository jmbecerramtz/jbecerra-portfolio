import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/motion";
import Button from "../components/liquidButton";
import resumePdf from "../assets/Jose Becerra CV 2026.pdf";
import ContactFormModal from "../components/ContactFormModal";
import { useState } from "react";
import Seo from "../components/Seo";

function About() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState("Project Inquiry");

  const openContactModal = (subject) => {
    setContactSubject(subject);
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <>
      <Seo
        title="About Jose Manuel Becerra | Front-End Engineer"
        description="Learn more about Jose Manuel Becerra, a Front-End Engineer with experience across enterprise websites, e-commerce platforms, accessibility, and long-term product support."
        path="/about"
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About Jose Manuel Becerra',
            url: 'https://jmbecerramtz.github.io/jbecerra-portfolio/#/about',
            about: {
              '@type': 'Person',
              name: 'Jose Manuel Becerra',
              jobTitle: 'Front-End Engineer',
            },
          },
        ]}
      />

      <div>
      <motion.section
        className="max-w-6xl mx-auto py-32 px-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.h1 className="text-6xl md:text-6xl font-semibold max-w-5xl" variants={fadeUp}>
          A builder focused on thoughtful, scalable web experiences.
        </motion.h1>

        <motion.p className="mt-6 max-w-2xl text-text-secondary" variants={fadeUp}>
          I design and ship front-end systems that feel polished, perform well, and stay maintainable as products grow.
        </motion.p>

        <motion.div className="mt-8 flex flex-wrap gap-3" variants={fadeUp}>
          <Button
            href="/projects"
            text="View My Work"
            variant="glass"
          />
          <Button
            href="#"
            onClick={() => openContactModal("Project Inquiry")}
            text="Get in Touch"
            colors={["rgb(155,92,255)", "rgb(179,136,255)", "rgb(217,185,255)"]}
          />
          
        </motion.div>
      </motion.section>

      <motion.section
        className="max-w-6xl mx-auto px-6 pb-24"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        <motion.div className="mb-16" variants={fadeUp}>
          <h2 className="text-2xl md:text-3xl font-semibold text-text-primary dark:text-text-inverse">Who I Am</h2>
          <motion.span
            className="mt-3 block h-[2px] w-16 md:w-24 rounded-full bg-[rgba(155,92,255,0.85)] origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          <p className="mt-4 text-text-secondary max-w-4xl leading-relaxed">
            I am a front-end engineer who cares deeply about craft, accessibility, and user trust. I enjoy building interfaces that look refined while staying practical for real teams and shipping timelines.
          </p>
          <p className="mt-4 text-text-secondary max-w-4xl leading-relaxed">
            My background spans enterprise websites, e-commerce implementations, and long-term product support where consistency and reliability matter just as much as visual quality.
          </p>
        </motion.div>

        <motion.div className="mb-16" variants={fadeUp}>
          <h2 className="text-2xl md:text-3xl font-semibold text-text-primary dark:text-text-inverse">Experience</h2>
          <motion.span
            className="mt-3 block h-[2px] w-16 md:w-24 rounded-full bg-[rgba(155,92,255,0.85)] origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          <div className="mt-8 grid gap-6">
            <article className="rounded-2xl border border-border dark:border-border-dark bg-surface-glass dark:bg-surface-glassDark backdrop-blur-glass shadow-glass p-6">
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <h3 className="text-lg md:text-xl font-semibold text-text-primary dark:text-text-inverse">Senior Developer</h3>
                <span className="text-sm text-[rgba(155,92,255,0.95)]">2022 - Present</span>
              </div>
              <p className="mt-1 text-sm text-text-secondary">Tech Company Inc.</p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Led development of full-stack initiatives, supported cross-functional delivery, and improved product performance through architecture and front-end optimization.
              </p>
            </article>

            <article className="rounded-2xl border border-border dark:border-border-dark bg-surface-glass dark:bg-surface-glassDark backdrop-blur-glass shadow-glass p-6">
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <h3 className="text-lg md:text-xl font-semibold text-text-primary dark:text-text-inverse">Full-Stack Developer</h3>
                <span className="text-sm text-[rgba(155,92,255,0.95)]">2020 - 2022</span>
              </div>
              <p className="mt-1 text-sm text-text-secondary">StartUp Studio</p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Built and launched responsive applications across React and Node.js stacks, collaborating closely with design and product to ship on fast cycles.
              </p>
            </article>

            <article className="rounded-2xl border border-border dark:border-border-dark bg-surface-glass dark:bg-surface-glassDark backdrop-blur-glass shadow-glass p-6">
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <h3 className="text-lg md:text-xl font-semibold text-text-primary dark:text-text-inverse">Junior Developer</h3>
                <span className="text-sm text-[rgba(155,92,255,0.95)]">2019 - 2020</span>
              </div>
              <p className="mt-1 text-sm text-text-secondary">Digital Agency</p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Delivered production-ready UI components, fixed defects, and maintained client websites with a strong focus on responsiveness and consistency.
              </p>
            </article>
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h2 className="text-2xl md:text-3xl font-semibold text-text-primary dark:text-text-inverse">Education</h2>
          <motion.span
            className="mt-3 block h-[2px] w-16 md:w-24 rounded-full bg-[rgba(155,92,255,0.85)] origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          <article className="mt-8 rounded-2xl border border-border dark:border-border-dark bg-surface-glass dark:bg-surface-glassDark backdrop-blur-glass shadow-glass p-6">
            <h3 className="text-lg md:text-xl font-semibold text-text-primary dark:text-text-inverse">Bachelor of Science in Computer Science</h3>
            <p className="mt-2 text-sm text-[rgba(155,92,255,0.95)]">University Name | Graduated 2019</p>
          </article>
        </motion.div>

        {/* Conversion CTA */}
        <motion.div
          className="mt-16 rounded-3xl border border-border dark:border-border-dark bg-surface-glass dark:bg-surface-glassDark backdrop-blur-glass shadow-glass p-10 md:p-16 text-center"
          variants={fadeUp}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-text-primary dark:text-text-inverse">
            Let&apos;s work together.
          </h2>
          <p className="mt-3 text-text-secondary">
            Open to new roles, freelance projects, and long-term collaborations.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button
              href={resumePdf}
              text="View Resume"
              variant="glass"
            />
            <Button
              href="#"
              onClick={() => openContactModal("Discuss Collaboration Opportunity")}
              text="Send a Message"
              colors={["rgb(155,92,255)", "rgb(179,136,255)", "rgb(217,185,255)"]}
            />
            
          </div>
        </motion.div>
      </motion.section>
      </div>

      <ContactFormModal
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
        initialSubject={contactSubject}
        title="Let&apos;s connect"
      />
    </>
  );
}

export default About;
