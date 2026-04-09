import CapabilityCard from "./HomeComponents/CapabilityCard";
import { capabilities } from "./HomeData/capabilitiesData";

function CapabilitiesSection() {
  return (
      <section
      id="what-i-do"
      aria-labelledby="what-i-do-heading"
      className="py-24 max-w-5xl mx-auto px-6"
    >
      <div className="max-w-2xl">
        <h2
          id="what-i-do-heading"
          className="text-2xl md:text-3xl font-semibold text-text-primary dark:text-text-inverse"
        >
          What I Do
        </h2>

        <p className="mt-3 text-text-secondary dark:text-text-inverseSecondary">
          I focus on building reliable, scalable web applications from development to deployment.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {capabilities.map((item) => (
          <CapabilityCard key={item.title} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  );
};

export default CapabilitiesSection;