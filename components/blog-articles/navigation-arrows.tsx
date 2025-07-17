import { cn } from "@/lib/utils";

interface NavigationArrowsProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoBack: boolean;
  canGoForward: boolean;
}

export default function NavigationArrows({
  onPrevious,
  onNext,
  canGoBack,
  canGoForward,
}: NavigationArrowsProps) {
  return (
    <div className="flex gap-2 justify-end">
      <button
        onClick={onPrevious}
        disabled={!canGoBack}
        className={cn(
          "p-3 rounded-full border transition-all duration-300 cursor-pointer",
          "",
          canGoBack
            ? "border-ultraviolet-800 bg-ultraviolet-800/20 text-ultraviolet-700 hover:bg-ultraviolet-700/30 hover:border-ultraviolet-700"
            : "border-gray-600 bg-gray-600/20 text-gray-500 cursor-not-allowed"
        )}
        aria-label="Article précédent"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={onNext}
        disabled={!canGoForward}
        className={cn(
          "p-3 rounded-full border transition-all duration-300 cursor-pointer",
          canGoForward
            ? "border-ultraviolet-800 bg-ultraviolet-800/20 text-ultraviolet-700 hover:bg-ultraviolet-700/30 hover:border-ultraviolet-700"
            : "border-gray-600 bg-gray-600/20 text-gray-500 cursor-not-allowed"
        )}
        aria-label="Article suivant"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
