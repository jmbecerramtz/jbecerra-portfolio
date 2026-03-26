function ProjectCard({ project }) {
  return (
    <div className="bg-white/40 dark:bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-white/20 dark:border-white/10">
      <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 opacity-90 dark:opacity-75"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="inline-block bg-white/30 dark:bg-white/10 text-gray-900 dark:text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20"
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
