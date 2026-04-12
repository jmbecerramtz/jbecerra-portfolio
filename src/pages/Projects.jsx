import ProjectCard from '../components/Projects/ProjectsComponents/ProjectCard';
import { projects } from '../components/Projects/ProjectsData/ProjectsData';

function Projects() {
  return (
    <div>
      {/* Hero Section */}
<section className="max-w-5xl mx-auto py-32">

  <h1 className="text-6xl font-semibold max-w-3xl">
    Building modern, scalable web experiences
  </h1>

  <div className="mt-8 flex items-center gap-6">
    <p className="text-text-secondary max-w-md">
      Front-End Engineer with 10+ years experience...
    </p>

    <div className="flex gap-3">
      [CTA]
      [CTA]
    </div>
  </div>

</section>

      {/* Projects Grid */}
         <section className="max-w-6xl mx-auto px-6 py-24">
      
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Selected Work
        </h2>
        <p className="text-text-secondary mt-2">
          A selection of projects across front-end, CMS, and DevOps.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        { projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

    </section>
    </div>
  );
}

export default Projects;
