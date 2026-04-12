import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import projects from "../HomeData/projectsData";

function ProjectsShowcase() {
  const featured = projects.filter((p) => p.featured);
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % featured.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + featured.length) % featured.length);

  return (
    <section className="relative w-full w-[100vw] h-[80vh] overflow-hidden">

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Background Image */}
          <img
            src={featured[index].image}
            alt={featured[index].title}
            className="w-full h-full object-cover"
          />

          {/* Gradient overlay */}
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
          {/* Content */}
<div className="absolute bottom-0 left-0 p-8 z-10">            
            <motion.p
              className="text-sm mb-2 opacity-80"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {featured[index].highlight}
            </motion.p>

            <motion.h2
              className="text-3xl md:text-5xl font-semibold"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {featured[index].title}
            </motion.h2>

            <motion.p
              className="mt-4 text-white/80"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {featured[index].description}
            </motion.p>

            {/* CTA */}
            <motion.a
              href={featured[index].url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block mt-6 px-6 py-3
                rounded-full
                bg-white/10 backdrop-blur-md
                border border-white/20
                text-white
                hover:bg-white/20
                transition
                z-30
              "
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              View Project →
            </motion.a>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-6">
        <button
          onClick={prev}
          className="text-white/70 hover:text-white text-2xl"
        >
          ←
        </button>
        <button
          onClick={next}
          className="text-white/70 hover:text-white text-2xl"
        >
          →
        </button>
      </div>

      {/* Bottom indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {featured.map((_, i) => (
          <div
            key={i}
            className={`h-1 w-8 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsShowcase;