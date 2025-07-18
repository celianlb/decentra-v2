import ButtonSecondary from "@/components/button/button-secondary";
import {
  MdCode,
  MdDesignServices,
  MdPhoneAndroid,
  MdStorage,
  MdTrendingUp,
  MdWork,
} from "react-icons/md";

// Composant graphique SVG minimaliste pour les salaires
const SalaryChart = () => {
  return (
    <div className="bg-white/5 rounded-xl p-6 border border-ultraviolet-700/30">
      <h5 className="font-stara text-white text-lg mb-4 text-center">
        Évolution salariale
      </h5>
      <svg
        width="100%"
        height="200"
        viewBox="0 0 300 200"
        className="overflow-visible"
      >
        {/* Grille de fond */}
        <defs>
          <pattern
            id="grid"
            width="30"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 30 0 L 0 0 0 20"
              fill="none"
              stroke="rgba(139, 92, 246, 0.1)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="300" height="200" fill="url(#grid)" />

        {/* Ligne de tendance */}
        <path
          d="M 50 150 Q 150 100 250 50"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Gradient pour la ligne */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(139, 92, 246, 0.8)" />
            <stop offset="50%" stopColor="rgba(168, 85, 247, 0.8)" />
            <stop offset="100%" stopColor="rgba(192, 132, 252, 0.8)" />
          </linearGradient>
        </defs>

        {/* Points de données */}
        <circle cx="50" cy="150" r="6" fill="rgba(139, 92, 246, 0.9)" />
        <circle cx="150" cy="100" r="6" fill="rgba(168, 85, 247, 0.9)" />
        <circle cx="250" cy="50" r="6" fill="rgba(192, 132, 252, 0.9)" />

        {/* Labels */}
        <text
          x="50"
          y="175"
          textAnchor="middle"
          fill="rgba(156, 163, 175, 0.8)"
          fontSize="12"
          fontFamily="font-mansfield"
        >
          Junior
        </text>
        <text
          x="150"
          y="175"
          textAnchor="middle"
          fill="rgba(156, 163, 175, 0.8)"
          fontSize="12"
          fontFamily="font-mansfield"
        >
          Confirmé
        </text>
        <text
          x="250"
          y="175"
          textAnchor="middle"
          fill="rgba(156, 163, 175, 0.8)"
          fontSize="12"
          fontFamily="font-mansfield"
        >
          Senior
        </text>

        {/* Valeurs salariales */}
        <text
          x="50"
          y="135"
          textAnchor="middle"
          fill="white"
          fontSize="11"
          fontFamily="font-stara"
          fontWeight="bold"
        >
          37k€
        </text>
        <text
          x="150"
          y="85"
          textAnchor="middle"
          fill="white"
          fontSize="11"
          fontFamily="font-stara"
          fontWeight="bold"
        >
          48k€
        </text>
        <text
          x="250"
          y="35"
          textAnchor="middle"
          fill="white"
          fontSize="11"
          fontFamily="font-stara"
          fontWeight="bold"
        >
          62k€
        </text>
      </svg>
    </div>
  );
};

export default function DeboucheSection() {
  return (
    <div className="space-y-6">
      <p className="text-lg leading-relaxed font-mansfield">
        Le titre CDA ouvre vers de nombreux métiers dans le développement web et
        applicatif, avec d&apos;excellentes perspectives d&apos;emploi.
      </p>

      <div className="flex gap-4">
        <div className="bg-ultraviolet-800/20 w-1/2 rounded-lg p-6 border border-ultraviolet-700/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-violet-500/20 rounded-lg">
              <MdWork className="w-6 h-6 text-violet-400" />
            </div>
            <h4 className="font-stara text-white text-xl">Métiers visés</h4>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdCode className="w-5 h-5 text-violet-400" />
              </div>
              <div>
                <h5 className="font-semibold font-stara text-lg text-white">
                  Développeur Full Stack
                </h5>
                <p className="text-sm font-mansfield text-gray-300">
                  Développement complet d&apos;applications web
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdDesignServices className="w-5 h-5 text-violet-400" />
              </div>
              <div>
                <h5 className="font-semibold font-stara text-lg text-white">
                  Développeur Front-End
                </h5>
                <p className="text-sm font-mansfield text-gray-300">
                  Interfaces utilisateur modernes
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdStorage className="w-5 h-5 text-violet-400" />
              </div>
              <div>
                <h5 className="font-semibold font-stara text-lg text-white">
                  Développeur Back-End
                </h5>
                <p className="text-sm font-mansfield text-gray-300">
                  Architecture serveur et APIs
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdPhoneAndroid className="w-5 h-5 text-violet-400" />
              </div>
              <div>
                <h5 className="font-semibold font-stara text-lg text-white">
                  Développeur Mobile
                </h5>
                <p className="text-sm font-mansfield text-gray-300">
                  Applications hybrides et natives
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-violet-500/20 rounded-lg">
              <MdTrendingUp className="w-6 h-6 text-violet-400" />
            </div>
            <h4 className="opacity-70 font-stara text-white text-xl">
              Perspectives salariales
            </h4>
          </div>

          <SalaryChart />

          <div className="mt-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-mansfield text-gray-300">
                Junior (0-2 ans)
              </span>
              <span className="text-sm font-stara text-violet-400">
                32k€ - 42k€
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-mansfield text-gray-300">
                Confirmé (2-5 ans)
              </span>
              <span className="text-sm font-stara text-violet-400">
                42k€ - 55k€
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-mansfield text-gray-300">
                Senior (5+ ans)
              </span>
              <span className="text-sm font-stara text-violet-400">
                55k€ - 70k€
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-auto w-fit">
        <ButtonSecondary>Voir les offres d&apos;emploi</ButtonSecondary>
      </div>
    </div>
  );
}
