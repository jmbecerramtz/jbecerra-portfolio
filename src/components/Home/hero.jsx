import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, fadeUpDelayed, staggerContainer } from "../../utils/motion";
import Button from "../liquidButton";
import profileImage from "../../assets/jbecerra.png";

function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background blob */}
      <motion.div
        className="absolute top-[-10%] right-[20%] w-[100%] h-[100%] bg-[rgba(198, 163, 255, 0.22)] rounded-6xl blur-3xl z-10"
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.3] }}
        transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col md:flex-row items-center justify-center py-24 max-w-6xl mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {/* Left: Text */}
        <div className="w-full space-y-5 md:pr-12">
          <motion.div variants={fadeUp} className="inline-block">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-text-primary dark:text-text-inverse">
              Hey, I'm José Manuel —<br /> Front-End Engineer
            </h1>
            <motion.span
              className="mt-2 block h-[2px] w-[40%] rounded-full bg-[rgba(155,92,255,0.85)] origin-left"
              initial={{ scaleX: 0 }}
              animate={shouldReduceMotion ? { scaleX: 1 } : { scaleX: [0, 1] }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-base max-w-lg text-text-secondary dark:text-text-inverseSecondary"
          >
            Building scalable web applications using modern JavaScript frameworks and web technologies, with a focus on performance and accessibility.
          </motion.p>

          <motion.div variants={fadeUpDelayed} className="flex gap-4 pt-2">
            {/* Primary Button */}
            <Button href="#projects" text="View Projects" variant="glass" />
            {/* Secondary Button */}
            <Button
              href="#contact"
              text="Get in touch"
              colors={["rgb(155,92,255)", "rgb(179,136,255)", "rgb(217,185,255)"]}
            />
          </motion.div>
        </div>

        {/* Right: Image */}
        <motion.div
          variants={fadeUp}
          className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0 rounded-3xl relative"
        >
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full -z-10" />
          <motion.img
            src={profileImage}
            alt="José Manuel Becerra portrait"
            className="relative z-10 rounded-3xl shadow-glass max-w-xs md:max-w-sm"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    filter: [
                      "drop-shadow(0 10px 20px rgba(0,0,0,0.18))",
                      "drop-shadow(0 16px 28px rgba(155,92,255,0.30))",
                      "drop-shadow(0 10px 20px rgba(0,0,0,0.18))",
                    ],
                  }
            }
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#tech-stack"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[rgba(155,92,255,0.85)] hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xs font-normal">Scroll</span>
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={shouldReduceMotion ? undefined : { y: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M4 7L10 13L16 7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.a>
    </section>
  );
}

export default Hero;