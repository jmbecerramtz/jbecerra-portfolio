import ProjectCard from '../components/Projects/ProjectsComponents/ProjectCard';
import { projects } from '../components/Projects/ProjectsData/ProjectsData';
import { AnimatePresence, motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../utils/motion';
import Button from '../components/liquidButton';
import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

function Projects() {
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    subject: '',
    message: '',
  });
  const location = useLocation();

  const openContactModal = (prefillSubject = '') => {
    setContactForm({
      name: '',
      subject: prefillSubject,
      message: '',
    });
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  const handleContactFieldChange = (event) => {
    const { name, value } = event.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();

    const subject = contactForm.subject.trim() || 'Project Inquiry';
    const body = [
      `Name: ${contactForm.name.trim()}`,
      '',
      'Message:',
      contactForm.message.trim(),
    ].join('\n');

    window.location.href = `mailto:jmbecerramtz@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setIsContactModalOpen(false);
  };

  const projectEntries = useMemo(
    () => projects.map((project) => {
      const projectId = project.id ?? slugify(project.name);

      return { project, projectId };
    }),
    []
  );

  useEffect(() => {
    const requestedProject = new URLSearchParams(location.search).get('project');
    if (!requestedProject) {
      return;
    }

    const exists = projectEntries.some(({ projectId }) => projectId === requestedProject);
    if (exists) {
      setActiveProjectId(requestedProject);
    }
  }, [location.search, projectEntries]);

  const activeProject = projectEntries.find(({ projectId }) => projectId === activeProjectId)?.project;

  const modalSlides = useMemo(() => {
    if (!activeProject) {
      return [];
    }

    if (Array.isArray(activeProject.screenshots) && activeProject.screenshots.length > 0) {
      return [
        { src: activeProject.image, alt: `${activeProject.name} screenshot 1`, objectClass: 'object-cover' },
        ...activeProject.screenshots.map((src, idx) => ({
          src,
          alt: `${activeProject.name} screenshot ${idx + 2}`,
          objectClass: 'object-cover',
        })),
      ];
    }

    // Fallback until per-project screenshot arrays are added to data.
    return [
      { src: activeProject.image, alt: `${activeProject.name} screenshot 1`, objectClass: 'object-cover' },
      { src: activeProject.image, alt: `${activeProject.name} screenshot 2`, objectClass: 'object-cover object-bottom' },
    ];
  }, [activeProject]);

  const slideDurationSeconds = 4;
  const totalDurationSeconds = Math.max(modalSlides.length * slideDurationSeconds, slideDurationSeconds);

  return (
    <div className="relative">
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
        href="#"
        text="Start a Project"
        onClick={() => openContactModal('Project Inquiry')}
        colors={["rgb(155,92,255)", "rgb(179,136,255)", "rgb(217,185,255)"]}
      />
      <Button
        href="https://github.com/jmbecerramtz"
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
        { projectEntries.map(({ project, projectId }) => (
          <motion.div key={projectId} variants={fadeUp}>
            <ProjectCard
              project={project}
              projectId={projectId}
              onOpen={() => setActiveProjectId(projectId)}
            />
          </motion.div>
        ))}
      </motion.div>

    </motion.section>

    <AnimatePresence>
      {activeProject && (
        <>
          <motion.button
            type="button"
            aria-label="Close project details"
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProjectId(null)}
          />

          <motion.div
            className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.article
              layoutId={`project-card-${activeProjectId}`}
              transition={{ layout: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } }}
              className="relative pointer-events-auto w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/50 dark:border-white/15 bg-[rgba(255,255,255,0.78)] dark:bg-[rgba(8,8,8,0.72)] backdrop-blur-xl shadow-2xl text-white"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close project details"
                onClick={() => setActiveProjectId(null)}
                className="absolute right-4 top-4 z-10 rounded-full border border-white/25 bg-black/45 px-3 py-1 text-sm text-white hover:bg-black/60 transition"
              >
                Close
              </button>

              <div className="p-5 md:p-8">
                <div className="relative overflow-hidden rounded-xl border border-border dark:border-border-dark h-[260px] sm:h-[360px] md:h-[420px]">
                  {modalSlides.map((slide, idx) => (
                    <img
                      key={`${activeProjectId}-slide-${idx}`}
                      src={slide.src}
                      alt={slide.alt}
                      className={`project-modal-fade-slide h-full w-full ${slide.objectClass} ${idx === 0 ? 'project-modal-fade-first' : ''}`}
                      style={{
                        animationDuration: `${totalDurationSeconds}s`,
                        animationDelay: `${idx * slideDurationSeconds}s`,
                      }}
                    />
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white">
                    {activeProject.name}
                  </h3>
                  <span className="text-sm text-white/80">{activeProject.role}</span>
                </div>

                <p className="mt-4 text-white/85 leading-relaxed">
                  {activeProject.description}
                </p>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
                    Development Details
                  </h4>
                  <p className="mt-2 text-sm text-white/80">
                    Delivered as a {activeProject.category} engagement with emphasis on reusable components, performance optimization, and accessibility-minded implementation.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {activeProject.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/85"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {activeProject.link ? (
                    <Button
                      href={activeProject.link}
                      text="View Live Site"
                      colors={["rgb(155,92,255)", "rgb(179,136,255)", "rgb(217,185,255)"]}
                    />
                  ) : (
                    <span className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-sm text-white/75">
                      Live site not public
                    </span>
                  )}

                  <Button
                    href="#"
                    text="Discuss This Build"
                    onClick={() => openContactModal(`Discuss Project: ${activeProject.name}`)}
                    variant="glass"
                  />
                </div>
              </div>
            </motion.article>
          </motion.div>
        </>
      )}
    </AnimatePresence>

    <AnimatePresence>
      {isContactModalOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Close contact form"
            className="fixed inset-0 z-[60] bg-black/55 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeContactModal}
          />

          <motion.div
            className="fixed inset-0 z-[70] pointer-events-none flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.form
              onSubmit={handleContactSubmit}
              className="pointer-events-auto w-full max-w-xl rounded-2xl border border-white/30 bg-[rgba(10,10,12,0.82)] backdrop-blur-xl p-6 md:p-8 text-white shadow-2xl"
              onClick={(event) => event.stopPropagation()}
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl md:text-2xl font-semibold">Project Inquiry</h3>
                <button
                  type="button"
                  onClick={closeContactModal}
                  className="rounded-full border border-white/25 px-3 py-1 text-sm text-white/90 hover:bg-white/10 transition"
                >
                  Close
                </button>
              </div>

              <p className="mt-2 text-sm text-white/75">
                Send a quick message and your email app will open with this prefilled inquiry.
              </p>

              <div className="mt-6 space-y-4">
                <label className="block">
                  <span className="mb-1 block text-sm text-white/85">Name</span>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactFieldChange}
                    required
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/45 focus:outline-none focus:ring-2 focus:ring-[rgba(155,92,255,0.65)]"
                    placeholder="Your name"
                  />
                </label>

                <label className="block">
                  <span className="mb-1 block text-sm text-white/85">Subject</span>
                  <input
                    type="text"
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleContactFieldChange}
                    required
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/45 focus:outline-none focus:ring-2 focus:ring-[rgba(155,92,255,0.65)]"
                    placeholder="Project subject"
                  />
                </label>

                <label className="block">
                  <span className="mb-1 block text-sm text-white/85">Message</span>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactFieldChange}
                    required
                    rows={5}
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/45 focus:outline-none focus:ring-2 focus:ring-[rgba(155,92,255,0.65)]"
                    placeholder="Tell me a bit about what you need"
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="rounded-full border border-[rgba(155,92,255,0.35)] bg-[rgba(155,92,255,0.9)] px-5 py-2 text-sm font-medium text-white transition hover:bg-[rgba(155,92,255,1)]"
                >
                  Open Email Draft
                </button>
                <button
                  type="button"
                  onClick={closeContactModal}
                  className="rounded-full border border-white/25 px-5 py-2 text-sm text-white/85 hover:bg-white/10 transition"
                >
                  Cancel
                </button>
              </div>
            </motion.form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </div>
  );
}

export default Projects;
