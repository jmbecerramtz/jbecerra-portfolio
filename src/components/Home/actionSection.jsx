import { motion } from "framer-motion";
import Button from "../liquidButton";
import resumePdf from "../../assets/Jose Becerra CV 2026.pdf";

const CTASection = ({ onOpenContactForm }) => {
  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="py-24 max-w-6xl mx-auto px-6"
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
        <motion.span
          className="mx-auto mt-3 block h-[2px] w-16 md:w-24 rounded-full bg-[rgba(155,92,255,0.85)] origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Subtext */}
        <p className="mt-4 text-text-secondary dark:text-text-inverseSecondary">
          Open to new opportunities and collaborations.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          {/* Primary CTA */}
          <Button
            href={resumePdf}
            text="View Resume"
            variant="glass"
          />

          {/* Secondary CTA */}
          <Button
            href="#"
            onClick={onOpenContactForm}
            text="Get in touch"
            colors={["rgb(155,92,255)", "rgb(179,136,255)", "rgb(217,185,255)"]}
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;