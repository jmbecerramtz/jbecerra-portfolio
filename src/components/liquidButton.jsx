import { motion } from "framer-motion";

const createGradient = (colors) => {
  const loop = [...colors, colors[0]]; // smooth loop
  return `linear-gradient(120deg, ${loop.join(",")})`;
};

const liquidVariants = {
  initial: {
    opacity: 0,
    backgroundPosition: "0% 50%",
  },
  hover: {
    opacity: 1,
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      opacity: { duration: 0.25 },
      backgroundPosition: {
        duration: 6,
        ease: "linear",
        repeat: Infinity,
      },
    },
  },
};

export default function LiquidButton({
  href = "#",
  text = "Button",
  colors = [],
  variant = "default", // "default" | "glass"
  target,
  rel,
  className = "",
}) {
  const gradient = colors.length ? createGradient(colors) : null;
  const isGlass = variant === "glass";
  const isExternal = href.startsWith("http://") || href.startsWith("https://");
  const linkTarget = target ?? (isExternal ? "_blank" : undefined);
  const linkRel = rel ?? (linkTarget === "_blank" ? "noopener noreferrer" : undefined);

  return (
    <motion.a
      href={href}
      target={linkTarget}
      rel={linkRel}
      initial="initial"
      whileHover="hover"
      animate="initial"
      className={`
        group relative overflow-hidden
        px-6 py-3 rounded-full
        font-medium
        border
        text-text-primary dark:text-text-inverse
        ${isGlass
          ? "bg-white/[0.06] dark:bg-white/10 backdrop-blur-sm border-border dark:border-white/20"
          : "bg-transparent border-border dark:border-border-dark"}
        transition-all duration-300 ease-smooth
        transform hover:scale-105 hover:-translate-y-0.5 active:scale-95
        hover:shadow-[0_10px_30px_rgba(170,146,209,0.25)]
        ${className}
      `}
    >
      {/* Liquid gradient (default variant with colors) */}
      {gradient && (
        <motion.span
          variants={liquidVariants}
          className="absolute inset-0 rounded-full z-0 pointer-events-none"
          style={{
            backgroundImage: gradient,
            backgroundSize: "300% 300%",
          }}
        />
      )}

      {/* Glass hover overlay */}
      {isGlass && (
        <motion.span
          variants={{ initial: { opacity: 0 }, hover: { opacity: 1, transition: { duration: 0.25 } } }}
          className="absolute inset-0 rounded-full z-0 pointer-events-none bg-white/[0.12]"
        />
      )}

      {/* Content */}
      <span className={`relative z-10 transition-colors duration-300 ${gradient ? "group-hover:text-white" : ""}`}>
        {text}
      </span>
    </motion.a>
  );
}