import ProjectsShowcase from "./HomeComponents/ProjectsShowcase";
import { projects } from "./HomeData/projectsData";

function FeaturedProjects() {

return (
<section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-24 max-w-6xl mx-auto px-6"
    >
      {/* Header */}
      <div className="max-w-2xl">
        <h2
          id="projects-heading"
          className="text-2xl md:text-3xl font-semibold text-text-primary dark:text-text-inverse"
        >
          Featured Projects
        </h2>

        <p className="mt-3 text-text-secondary dark:text-text-inverseSecondary">
          Selected work across enterprise and e-commerce platforms.
        </p>
      </div>

      {/* Grid */}
    <div className="mt-24 md:mt-32 w-full rounded-lg overflow-hidden">
          <ProjectsShowcase />
      </div>
    </section>
    );
}

export default FeaturedProjects;