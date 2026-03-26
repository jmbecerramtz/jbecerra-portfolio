function ProjectCard({ project }) {
  return (
    <div className="bg-light-surface-glass dark:bg-dark-surface-glass backdrop-blur-glass rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-purple-main/10 dark:border-purple-main/10">
      <div className="w-full h-48 bg-gradient-to-br from-light-bg to-light-surface dark:from-dark-bg dark:to-dark-surface overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 opacity-90 dark:opacity-75"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-2">{project.title}</h3>
        <p className="text-light-text-muted dark:text-dark-text-muted text-sm leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="inline-block bg-light-surface-glass dark:bg-dark-surface-glass text-light-text dark:text-dark-text text-xs font-semibold px-3 py-1 rounded-full border border-purple-main/10"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-center flex-1"
            >
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary text-center flex-1"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
