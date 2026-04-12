import { motion } from "framer-motion";
import { fadeUp, fadeUpDelayed, staggerContainer } from "../../utils/motion";
import Button from "../liquidButton";

function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden ">
      <motion.div
        className="absolute top-[-10%] right-[40%] w-[100%] h-[100%] bg-[rgba(155,92,255, 0.8)] rounded-6xl blur-3xl z-10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.3],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />   {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col md:flex-row items-center justify-center py-24 max-w-6xl mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >

        {/* Left: Text */}
        <div className="w-full space-y-5 md:pr-12">

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl font-semibold leading-tight text-text-primary dark:text-text-inverse"
          >
            Hey, I’m José Manuel —<br /> Front-End Engineer
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base max-w-lg text-text-secondary dark:text-text-inverseSecondary"
          >
            Building scalable web applications using modern JavaScript frameworks and web technologies, with a focus on performance and accessibility.
          </motion.p>

          <motion.div
            variants={fadeUpDelayed}
            className="flex gap-4 pt-2"
          >
            {/* Primary Button */}
             <Button href="#contact"
              text="View Projects"
              colors={[
                "rgb(0, 0, 0)",
                "rgb(0, 0, 0)",
                "rgb(0, 0, 0)",
              ]}/>

            {/* Secondary Button */}

            <Button href="#contact"
              text="Get in touch"
              colors={[
                "rgb(155,92,255)",
                "rgb(179,136,255)",
                "rgb(217,185,255)"
              ]}/>
          </motion.div>
        </div>

        {/* Right: Image */}
        <motion.div
          variants={fadeUp}
          className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
        >
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full -z-10" />

          <img
            src="/src/assets/jbecerra.png"
            alt="José Manuel Becerra portrait"
            className="relative z-10 rounded-3xl shadow-glass max-w-xs md:max-w-sm"
          />
        </motion.div>

      </motion.div>
    </section>
  );
}

export default Hero;