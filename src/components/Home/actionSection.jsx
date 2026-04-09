const CTASection = () => {
  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="py-24 max-w-5xl mx-auto px-6"
    >
      <div
        className="
          text-center
          rounded-3xl
          border border-border dark:border-border-dark
          bg-surface-glass dark:bg-surface-glassDark
          backdrop-blur-glass
          shadow-glass
          p-10 md:p-16
          transition-all duration-300 ease-smooth
        "
      >
        {/* Heading */}
        <h2
          id="cta-heading"
          className="text-2xl md:text-3xl font-semibold text-text-primary dark:text-text-inverse"
        >
          Let’s build something great.
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-text-secondary dark:text-text-inverseSecondary">
          Open to new opportunities and collaborations.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          {/* Primary CTA */}
          <a
            href="mailto:your@email.com"
            className="
              inline-flex items-center justify-center
              px-6 py-3
              rounded-full
              bg-primary text-text-primary dark:text-text-inverse
              font-medium
              transition-all duration-300 ease-smooth
              hover:opacity-90
              focus:outline-none focus:ring-2 focus:ring-primary/40
              hover:shadow-[0_10px_30px_rgba(155,92,255,0.25)]
            "
          >
            Get in Touch
          </a>

          {/* Secondary CTA */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              px-6 py-3
              rounded-full
              border border-border dark:border-border-dark
              text-text-primary dark:text-text-inverse
              transition-all duration-300 ease-smooth
              hover:bg-white/10
              focus:outline-none focus:ring-2 focus:ring-primary/30
              hover:shadow-[0_10px_30px_rgba(155,92,255,0.25)]
            "
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;