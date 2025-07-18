import {
  MdAssignment,
  MdCode,
  MdDesignServices,
  MdLayers,
  MdSchedule,
  MdStorage,
} from "react-icons/md";

export default function DureeSection() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="inline-block bg-white/5 rounded-2xl px-8 py-4 border border-ultraviolet-700/30">
          <div className="flex items-center gap-3 justify-center">
            <MdSchedule className="w-8 h-8 text-violet-400" />
            <h3 className="text-3xl font-bold font-stara text-white">
              14 mois
            </h3>
          </div>
          <p className="text-lg font-mansfield text-gray-300">
            Formation intensive
          </p>
        </div>
      </div>

      <div className="bg-ultraviolet-800/20 rounded-lg p-6 border border-ultraviolet-700/30">
        <h4 className="opacity-70 font-stara text-white mb-6 text-center">
          Progression pédagogique
        </h4>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-violet-500/20 rounded-lg">
              <MdCode className="w-6 h-6 text-violet-400" />
            </div>
            <div className="flex-1">
              <h5 className="font-semibold font-stara text-lg text-white">
                Fondamentaux (2 mois)
              </h5>
              <p className="text-sm font-mansfield text-gray-300">
                Bases du web et langages de programmation
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
              <span className="text-sm font-stara text-violet-400">2 mois</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-violet-500/20 rounded-lg">
              <MdDesignServices className="w-6 h-6 text-violet-400" />
            </div>
            <div className="flex-1">
              <h5 className="font-semibold font-stara text-lg text-white">
                Front-End & UX/UI (3 mois)
              </h5>
              <p className="text-sm font-mansfield text-gray-300">
                Interfaces modernes et expérience utilisateur
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
              <span className="text-sm font-stara text-violet-400">3 mois</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-violet-500/20 rounded-lg">
              <MdStorage className="w-6 h-6 text-violet-400" />
            </div>
            <div className="flex-1">
              <h5 className="font-semibold font-stara text-lg text-white">
                Bases de données (2 mois)
              </h5>
              <p className="text-sm font-mansfield text-gray-300">
                SQL, NoSQL et modélisation
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
              <span className="text-sm font-stara text-violet-400">2 mois</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-violet-500/20 rounded-lg">
              <MdLayers className="w-6 h-6 text-violet-400" />
            </div>
            <div className="flex-1">
              <h5 className="font-semibold font-stara text-lg text-white">
                Full-Stack (4 mois)
              </h5>
              <p className="text-sm font-mansfield text-gray-300">
                Applications complètes et sécurisées
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
              <span className="text-sm font-stara text-violet-400">4 mois</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-violet-500/20 rounded-lg">
              <MdAssignment className="w-6 h-6 text-violet-400" />
            </div>
            <div className="flex-1">
              <h5 className="font-semibold font-stara text-lg text-white">
                Projet & Certification (3 mois)
              </h5>
              <p className="text-sm font-mansfield text-gray-300">
                Projet fil rouge et passage du titre
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
              <span className="text-sm font-stara text-violet-400">3 mois</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
