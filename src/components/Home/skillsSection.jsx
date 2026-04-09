import StackCard from "./HomeComponents/StackCards";
function SkillsSection() {

   return (
      <section className="py-24 max-w-5xl mx-auto px-6">
      <h2 className="text-2xl md:text-3xl font-semibold text-light-text dark:text-dark-text">
         Tech Stack
      </h2>

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