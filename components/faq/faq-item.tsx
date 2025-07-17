import { cn } from "@/lib/utils";
import { FAQItem } from "@/types/faq";

interface FAQItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FAQItemComponent({
  item,
  isOpen,
  onToggle,
}: FAQItemProps) {
  return (
    <div
      className={cn(
        "bg-gray-900 rounded-3xl border-[0.5px] border-ultraviolet-800/20 overflow-hidden transition-all duration-300 cursor-pointer",
        "hover:border-ultraviolet-700",
        isOpen && "border-ultraviolet-700 bg-purple-bento"
      )}
      onClick={onToggle}
    >
      {/* Question */}
      <div className="flex items-center justify-between p-4 transition-all duration-300">
        <h3
          className={cn(
            "text-white font-mansfield font-semibold text-[1rem] leading-relaxed transition-colors duration-300",
            isOpen && ""
          )}
        >
          {item.question}
        </h3>
        <div
          className={cn(
            "flex items-center justify-center w-8 h-8 rounded-full border border-ultraviolet-800 transition-all duration-300 flex-shrink-0 ml-4",
            "hover:border-ultraviolet-700 hover:bg-ultraviolet-700/20",
            isOpen && "border-ultraviolet-700 bg-ultraviolet-700/30 rotate-45"
          )}
        >
          <svg
            className={cn(
              "w-4 h-4 text-ultraviolet-800 transition-all duration-300",
              isOpen && "text-ultraviolet-700"
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
      </div>

      {/* Réponse */}
      <div
        className={cn(
          "transition-all duration-300 ease-in-out overflow-hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 pb-6 border-t border-ultraviolet-800/50">
          <p className="text-white/80 font-mansfield leading-relaxed pt-4">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
