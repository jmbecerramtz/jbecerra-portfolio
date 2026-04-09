import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="flex flex-col md:flex-row items-center justify-cente5 max-w-6xl mx-auto px-6 py-24">
        
        {/* Left: Text */}
        <div className="w-full  space-y-5 md:pr-12">
          
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-text-primary dark:text-text-inverse">
            Hey, I’m José Manuel —<br /> Front-End Engineer
          </h1>

          <p className="text-base max-w-lg text-text-secondary dark:text-text-inverseSecondary">
            Building scalable web applications using modern JavaScript frameworks and web technologies, with a focus on performance and accessibility.
          </p>

          <div className="flex gap-4 pt-2">
            
            {/* Primary Button */}
            <a
              href="#projects"
              className="
                px-6 py-2
                rounded-full
                bg-primary text-text-primary dark:text-text-inverse
                font-medium
                transition-all duration-300 ease-smooth
                hover:opacity-90
                hover:shadow-[0_10px_30px_rgba(155,92,255,0.25)]
                focus:outline-none focus:ring-2 focus:ring-primary/40
              "
            >
              View Projects
            </a>

            {/* Secondary Button */}
            <a
              href="#contact"
              className="
                px-6 py-2
                rounded-full
                border border-border dark:border-border-dark
                text-text-primary dark:text-text-inverse
                transition-all duration-300 ease-smooth
                hover:bg-white/10
                focus:outline-none focus:ring-2 focus:ring-primary/30
              "
            >
              Get in touch
            </a>

          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src="/src/assets/jbecerra.png"
            alt="José Manuel Becerra portrait"
            className="
              rounded-3xl
              shadow-glass
              max-w-xs md:max-w-sm
            "
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;