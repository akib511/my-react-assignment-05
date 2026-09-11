import type { Technology } from "../types/technology";

interface StackSidebarProps {
  selectedTechnologies: Technology[];
  onRemoveFromStack: (id: string) => void;
  onRemoveAll: () => void;
}

const StackSidebar = ({
  selectedTechnologies,
  onRemoveFromStack,
  onRemoveAll,
}: StackSidebarProps) => {
  return (
    <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Your Stack</h2>

        <span className="rounded-full bg-pink-50 px-3 py-1 text-sm font-semibold text-pink-600">
          {selectedTechnologies.length} Selected
        </span>
      </div>

      {/* Empty  */}
      {selectedTechnologies.length === 0 ? (
        <div className="py-12 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-2xl">
            +
          </div>

          <h3 className="mt-4 font-semibold text-gray-800">
            Your stack is empty
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Add technologies from the list to build your stack.
          </p>
        </div>
      ) : (
        <div className="mt-5 space-y-3">
          {selectedTechnologies.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-xl border border-gray-200 p-3"
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="h-10 w-10 object-contain"
              />

              <div className="min-w-0 flex-1">
                <h3 className="truncate font-semibold text-gray-800">
                  {technology.name}
                </h3>

                <p className="text-xs text-gray-500">{technology.category}</p>
              </div>

              <button
                onClick={() => onRemoveFromStack(technology.id)}
                className="text-lg font-bold text-gray-400 hover:text-red-500"
              >
                ×
              </button>
            </div>
          ))}

          <button
            onClick={onRemoveAll}
            className="mt-3 w-full rounded-xl border border-red-200 py-2 text-sm font-semibold text-red-500 hover:bg-red-50"
          >
            Remove All
          </button>
        </div>
      )}
    </aside>
  );
};

export default StackSidebar;
