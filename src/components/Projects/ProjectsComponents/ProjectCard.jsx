import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  const cardClassName = `
        group relative block rounded-2xl overflow-hidden
        border border-border dark:border-border-dark
        bg-surface dark:bg-surface-dark
        transition-all duration-500
        hover:-translate-y-2
        hover:shadow-2xl
      `;

  const cardContent = (
    <>
      {/* Gradient glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />

      {/* Image */}
      <div className="bg-gradient-to-br from-neutral-100 to-white p-4 rounded-xl">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform rounded-md duration-700 group-hover:scale-105"
        />

        {/* Glass overlay */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-text-primary dark:text-text-inverse">
            {project.name}
          </h3>

          <span className="text-xs text-text-secondary">
            {project.role}
          </span>
        </div>

        <p className="mt-2 text-sm text-text-secondary dark:text-text-inverseSecondary">
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="
                text-xs px-3 py-1 rounded-full
                bg-surface dark:bg-surface-dark
                border border-border dark:border-border-dark
                text-text-secondary
              "
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  if (!project.link) {
    return (
      <motion.article
        className={cardClassName}
        whileHover={{ scale: 1.01 }}
      >
        {cardContent}
      </motion.article>
    );
  }

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={cardClassName}
      whileHover={{ scale: 1.01 }}
    >
      {cardContent}
    </motion.a>
  );
};

export default ProjectCard;