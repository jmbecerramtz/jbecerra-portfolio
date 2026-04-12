import StackCard from "./HomeComponents/StackCards";
import { motion } from "framer-motion";
function SkillsSection() {

   return (
      <section id="tech-stack" className="py-24 max-w-6xl mx-auto px-6">
      <h2 className="text-2xl md:text-3xl font-semibold text-light-text dark:text-dark-text">
         Tech Stack
      </h2>
      <motion.span
         className="mt-3 block h-[2px] w-16 md:w-24 rounded-full bg-[rgba(155,92,255,0.85)] origin-left"
         initial={{ scaleX: 0 }}
         whileInView={{ scaleX: 1 }}
         viewport={{ once: true, amount: 1 }}
         transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <p className="mt-3 text-light-text-secondary dark:text-dark-text-secondary max-w-xl">
         A snapshot of the technologies I use to build scalable web applications.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
         <StackCard title="Frontend" items={["JavaScript", "React", "Vue", "HTML", "CSS", "SCSS"]} />
         <StackCard title="CMS & Platforms" items={["Shopify", "WordPress", "Elementor"]} />
         <StackCard title="DevOps & Cloud" items={["Azure", "CI/CD", "GitHub", "GitLab"]} />
         <StackCard title="APIs & Integrations" items={["REST APIs", "JSON"]} />
      </div>
      </section>
   );
}

export default SkillsSection;