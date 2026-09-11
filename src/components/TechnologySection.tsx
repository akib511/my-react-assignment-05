import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import StackSidebar from "./StackSidebar";

interface TechnologySectionProps {
  technologies: Technology[];
  selectedTechnologies: Technology[];
  onAddToStack: (technology: Technology) => void;
  onRemoveFromStack: (id: string) => void;
  onRemoveAll: () => void;
}

const TechnologySection = ({
  technologies,
  selectedTechnologies,
  onAddToStack,
  onRemoveFromStack,
  onRemoveAll,
}: TechnologySectionProps) => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10">
          <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
            Choose Your Technology
          </h2>

          <p className="mt-3 max-w-2xl text-gray-600">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1fr_320px]">
          <div className="grid gap-5 grid-cols-3">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                isSelected={selectedTechnologies.some(
                  (item) => item.id === technology.id,
                )}
                onAddToStack={onAddToStack}
              />
            ))}
          </div>

          <StackSidebar
            selectedTechnologies={selectedTechnologies}
            onRemoveFromStack={onRemoveFromStack}
            onRemoveAll={onRemoveAll}
          />
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
