import Hero from '../components/Home/hero';
import Skills from '../components/Home/skillsSection';
import Featured from '../components/Home/featuredProjects';
import Capabilities from '../components/Home/capabilitiesSection';
import Action from '../components/Home/actionSection';
function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Skills Section */}
      <Skills />

      {/* Featured Projects Section */}
      <Featured />

      {/* Capabilities Section */}
      <Capabilities />

      {/* Action Section */}
      <Action />
    </div>
  );
}

export default Home;
