import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';

function Projects() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 text-white py-20 sm:py-32">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-xl opacity-90">A collection of projects I've worked on</p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-5xl mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
