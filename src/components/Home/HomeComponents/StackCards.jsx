const StackCard = ({ title, items }) => {
  return (
    <div
      className="
        rounded-2xl
        border border-border dark:border-border-dark
        bg-light-surface-glass dark:bg-dark-surface-glass
        backdrop-blur-glass
        shadow-glass
        p-6
        transition-all duration-300 ease-smooth
        hover:scale-[1.02]
        hover:shadow-[0_10px_30px_rgba(155,92,255,0.25)]
      "
    >
      <h3 className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">
        {title}
      </h3>

      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="
              text-sm
              px-3 py-1
              rounded-full
              bg-dark dark:bg-white/10
              text-light-text dark:text-dark-text
            "
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StackCard;