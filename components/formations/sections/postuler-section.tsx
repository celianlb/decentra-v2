export default function PostulerSection() {
  return (
    <div className="space-y-8">
      <div className="text-center relative z-10">
        <h3 className="text-2xl font-bold font-stara text-white mb-4">
          Prêt à rejoindre la formation CDA ?
        </h3>
        <p className="text-lg font-mansfield text-gray-300 mb-6">
          Lancez votre carrière dans le développement avec notre formation
          diplômante.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        <div className="bg-ultraviolet-800/20 rounded-2xl p-6 border border-ultraviolet-700/30 backdrop-blur-sm hover:border-violet-500/40 transition-all duration-300 hover:scale-105">
          <h4 className="font-bold font-stara text-violet-400 mb-4">
            Candidature rapide
          </h4>
          <p className="text-sm font-mansfield text-gray-300 mb-4">
            Remplissez notre formulaire en ligne et recevez une réponse sous
            48h.
          </p>
          <button className="w-full bg-violet-500 hover:bg-violet-600 text-white py-3 px-6 rounded-lg font-semibold font-stara transition-all duration-300">
            Postuler maintenant
          </button>
        </div>
        <div className="bg-ultraviolet-800/20 rounded-2xl p-6 border border-ultraviolet-700/30 backdrop-blur-sm hover:border-violet-500/40 transition-all duration-300 hover:scale-105">
          <h4 className="font-bold font-stara text-violet-400 mb-4">
            Besoin d&apos;informations ?
          </h4>
          <p className="text-sm font-mansfield text-gray-300 mb-4">
            Échangez avec nos conseillers pédagogiques pour plus de détails.
          </p>
          <button className="w-full bg-violet-500 hover:bg-violet-600 text-white py-3 px-6 rounded-lg font-semibold font-stara transition-all duration-300">
            Demander un entretien
          </button>
        </div>
      </div>

      <div className="bg-ultraviolet-800/20 rounded-2xl p-6 border border-ultraviolet-700/30 backdrop-blur-sm relative z-10">
        <div className="text-center">
          <h4 className="font-bold font-stara text-white mb-3">
            Contactez-nous
          </h4>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:admissions@decentra.fr"
              className="text-violet-400 hover:text-white transition-colors font-mansfield"
            >
              📧 admissions@decentra.fr
            </a>
            <a
              href="tel:+33123456789"
              className="text-violet-400 hover:text-white transition-colors font-mansfield"
            >
              📞 01 23 45 67 89
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
