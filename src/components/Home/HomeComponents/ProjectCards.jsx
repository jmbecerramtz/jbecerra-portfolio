const ProjectCard = ({ project }) => {
  return (
    <article
      className="
        group
        rounded-2xl
        border border-border dark:border-border-dark
        bg-surface-glass dark:bg-surface-glassDark
        backdrop-blur-glass
        shadow-glass
        p-6
        transition-all duration-300 ease-smooth
        hover:scale-[1.02]
        focus-within:ring-2 focus-within:ring-primary/30
        hover:shadow-[0_10px_30px_rgba(155,92,255,0.25)]
      "
    >
      {/* Title */}
      <h3 className="text-lg font-semibold text-text-primary dark:text-text-inverse">
        {project.title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm text-text-secondary dark:text-text-inverseSecondary">
        {project.description}
      </p>

      {/* Contribution */}
      <p className="mt-2 text-sm text-text-secondary dark:text-text-inverseSecondary">
        {project.contribution}
      </p>

      {/* Tech Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span
            key={item}
            className="
              text-xs
              px-3 py-1
              rounded-full
              bg-white/20 dark:bg-white/10
              text-text-primary dark:text-text-inverse
            "
          >
            {item}
          </span>
        ))}
      </div>

      {/* Link */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-block
          mt-6
          text-sm
          font-medium
          text-primary
          hover:underline
          focus:outline-none focus:ring-2 focus:ring-primary/40 rounded
        "
        aria-label={`View project ${project.title}`}
      >
        View Site →
      </a>
    </article>
  );
};

export default ProjectCard;