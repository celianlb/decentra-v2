import {
  MdBusiness,
  MdCalendarToday,
  MdEuroSymbol,
  MdSchool,
  MdWork,
} from "react-icons/md";

export default function RythmeSection() {
  return (
    <div className="space-y-6">
      <p className="text-lg leading-relaxed font-mansfield">
        La formation CDA est disponible en deux formats adaptés à vos besoins et
        votre situation professionnelle.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Alternance */}
        <div className="bg-ultraviolet-800/20 rounded-lg p-6 border border-ultraviolet-700/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-violet-500/20 rounded-lg">
              <MdBusiness className="w-6 h-6 text-violet-400" />
            </div>
            <h4 className="font-stara text-white text-xl">Alternance</h4>
          </div>

          <div className="space-y-4">
            <div className="text-center">
              <div className="inline-block bg-white/5 rounded-lg px-4 py-3 mb-2">
                <div className="flex items-center gap-2">
                  <MdSchool className="w-5 h-5 text-violet-400" />
                  <span className="text-lg font-stara text-white">
                    1 semaine école
                  </span>
                </div>
              </div>
              <div className="text-violet-400 my-3 font-stara text-xl">+</div>
              <div className="inline-block bg-white/5 rounded-lg px-4 py-3">
                <div className="flex items-center gap-2">
                  <MdWork className="w-5 h-5 text-violet-400" />
                  <span className="text-lg font-stara text-white">
                    2 semaines entreprise
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                <span className="text-sm font-mansfield text-gray-300">
                  Expérience professionnelle concrète
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                <span className="text-sm font-mansfield text-gray-300">
                  Rémunération pendant la formation
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                <span className="text-sm font-mansfield text-gray-300">
                  Insertion facilitée
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                <span className="text-sm font-mansfield text-gray-300">
                  Contrat de professionnalisation
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Initial */}
        <div className="bg-ultraviolet-800/20 rounded-lg p-6 border border-ultraviolet-700/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-violet-500/20 rounded-lg">
              <MdSchool className="w-6 h-6 text-violet-400" />
            </div>
            <h4 className="font-stara text-white text-xl">Initial</h4>
          </div>

          <div className="space-y-4">
            <div className="text-center">
              <div className="inline-block bg-white/5 rounded-lg px-4 py-3 mb-2">
                <div className="flex items-center gap-2">
                  <MdEuroSymbol className="w-5 h-5 text-violet-400" />
                  <span className="text-lg font-stara text-white">6 500€</span>
                </div>
              </div>
              <div className="text-violet-400 my-3 font-stara text-xl">+</div>
              <div className="inline-block bg-white/5 rounded-lg px-4 py-3">
                <div className="flex items-center gap-2">
                  <MdCalendarToday className="w-5 h-5 text-violet-400" />
                  <span className="text-sm font-stara text-white">
                    Stage obligatoire 2 mois min.
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                <span className="text-sm font-mansfield text-gray-300">
                  Formation intensive
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                <span className="text-sm font-mansfield text-gray-300">
                  Flexibilité d&apos;apprentissage
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                <span className="text-sm font-mansfield text-gray-300">
                  Stage en entreprise
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                <span className="text-sm font-mansfield text-gray-300">
                  Suivi pédagogique renforcé
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
