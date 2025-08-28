"use client";

import { useState } from "react";
import { EarlyStagesModal } from "src/components/early-stages/early-stages-modal";

const BetaBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="relative bg-yellow-400 text-yellow-900 p-3 text-center w-full shadow-md flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 rounded-b-lg">
      <span className="font-semibold text-sm md:text-base px-4">
        ¡Estamos en las fases iniciales de la app! Pronto habrá muchas más características y mejoras.
      </span>
      <EarlyStagesModal />
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-yellow-900 hover:text-yellow-700 transition-colors duration-200"
        aria-label="Cerrar banner de fase beta"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default BetaBanner;
