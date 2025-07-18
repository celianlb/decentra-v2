import ButtonSecondary from "@/components/button/button-secondary";
import {
  MdBugReport,
  MdEmojiEvents,
  MdLayers,
  MdPhoneAndroid,
  MdSchool,
  MdSecurity,
  MdVerified,
  MdWorkspaces,
} from "react-icons/md";

export default function DiplomeSection() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="inline-block bg-white/5 rounded-2xl px-8 py-4 border border-ultraviolet-700/30">
          <div className="flex items-center gap-3 justify-center">
            <MdVerified className="w-8 h-8 text-violet-400" />
            <h3 className="text-2xl font-bold font-stara text-white">
              <span className="bg-violet-500/20 text-violet-300 px-2 py-1 rounded font-semibold">
                Titre RNCP 37873
              </span>
            </h3>
          </div>
          <p className="text-lg font-mansfield text-gray-300">
            Niveau Bac+3/4 reconnu par l&apos;État
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="bg-ultraviolet-800/20 w-1/2 rounded-lg p-6 border border-ultraviolet-700/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-violet-500/20 rounded-lg">
              <MdEmojiEvents className="w-6 h-6 text-violet-400" />
            </div>
            <h4 className="font-stara text-white text-xl">
              Certification officielle
            </h4>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdWorkspaces className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-sm font-mansfield text-gray-300">
                Titre inscrit au RNCP (Répertoire National des Certifications
                Professionnelles)
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdVerified className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-sm font-mansfield text-gray-300">
                Code RNCP : 37873
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdSchool className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-sm font-mansfield text-gray-300">
                Niveau 6 (Bac+3/4) européen
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdEmojiEvents className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-sm font-mansfield text-gray-300">
                Reconnu par les entreprises
              </span>
            </div>
          </div>
        </div>

        <div className="w-1/2 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-violet-500/20 rounded-lg">
              <MdVerified className="w-6 h-6 text-violet-400" />
            </div>
            <h4 className="opacity-70 font-stara text-white text-xl">
              Compétences certifiées
            </h4>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdSecurity className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-sm font-mansfield text-gray-300">
                Concevoir et développer des applications sécurisées
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdLayers className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-sm font-mansfield text-gray-300">
                Concevoir et développer une application multicouche répartie
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdPhoneAndroid className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-sm font-mansfield text-gray-300">
                Concevoir et développer une application mobile
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdBugReport className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-sm font-mansfield text-gray-300">
                Préparer et exécuter les plans de tests d&apos;une application
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-auto w-fit">
        <ButtonSecondary>Télécharger le référentiel</ButtonSecondary>
      </div>
    </div>
  );
}
