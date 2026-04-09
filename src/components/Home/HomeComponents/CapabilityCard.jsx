const CapabilityCard = ({ title, description }) => {
  return (
    <div
      className="
        rounded-2xl
        border border-border dark:border-border-dark
        bg-surface-glass dark:bg-surface-glassDark
        backdrop-blur-glass
        shadow-soft
        p-6
        transition-all duration-300 ease-smooth
        hover:scale-[1.02]
        hover:shadow-[0_10px_30px_rgba(155,92,255,0.25)]
      "
    >
      <h3 className="text-lg font-semibold text-text-primary dark:text-text-inverse">
        {title}
      </h3>

      <p className="mt-2 text-sm text-text-secondary dark:text-text-inverseSecondary">
        {description}
      </p>
    </div>
  );
};

export default CapabilityCard;