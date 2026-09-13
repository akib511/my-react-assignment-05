import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  isSelected: boolean;
  onAddToStack: (technology: Technology) => void;
}

const TechnologyCard = ({
  technology,
  isSelected,
  onAddToStack,
}: TechnologyCardProps) => {
  return (
    <div
      className={`flex h-full min-h-80 flex-col rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
        isSelected ? "border-[#DB2777]" : "border-gray-200"
      }`}
    >
      {/* Icon and Badge */}
      <div className="flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl p-3">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-full w-full object-contain"
          />
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            technology.badge === "Popular"
              ? "bg-blue-100 text-blue-500"
              : technology.badge === "Fast"
                ? "bg-orange-100 text-orange-500"
                : technology.badge === "Versatile"
                  ? "bg-green-100 text-green-500"
                  : technology.badge === "SSR / Edge"
                    ? "bg-purple-100 text-purple-500"
                    : technology.badge === "Standard"
                      ? "bg-green-100 text-green-500"
                      : technology.badge === "Top SQL"
                        ? "bg-blue-100 text-blue-500"
                        : technology.badge === "Cache"
                          ? "bg-red-100 text-red-500"
                          : technology.badge === "Ubiquitous"
                            ? "bg-yellow-100 text-yellow-500"
                            : technology.badge === "Essential"
                              ? "bg-blue-100 text-blue-500"
                              : technology.badge === "Robust"
                                ? "bg-blue-100 text-blue-500"
                                : technology.badge === "Modern"
                                  ? "bg-green-100 text-green-500"
                                  : technology.badge === "Containers"
                                    ? "bg-blue-100 text-blue-500"
                                    : "bg-blue-100 text-blue-500"
          }`}
        >
          {technology.badge}
        </span>
      </div>

      {/* Card Content */}
      <div className="flex-1">
        <h2 className="mt-5 text-xl font-bold text-gray-900">
          {technology.name}
        </h2>

        <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
          {technology.description}
        </p>

        {/* Category , Difficulty , Rating */}
        <div className="mt-5 flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-xl bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
              {technology.category}
            </span>

            <span className="rounded-xl bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
              {technology.difficulty}
            </span>
          </div>

          <div className="flex shrink-0 items-center gap-1 text-sm font-semibold">
            <span className="text-yellow-500">★</span>
            <span className="text-black">{technology.rating}</span>
          </div>
        </div>
      </div>

      {/* Button */}
      <button
        disabled={isSelected}
        onClick={() => onAddToStack(technology)}
        style={
          !isSelected ? { background: "var(--gradient-brand)" } : undefined
        }
        className={`mt-5 w-full rounded-xl py-3 text-sm font-semibold transition ${
          isSelected
            ? "cursor-not-allowed bg-gray-200 text-gray-500"
            : "bg-black text-white hover:opacity-90"
        }`}
      >
        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;
