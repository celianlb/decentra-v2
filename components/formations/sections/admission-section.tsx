import ButtonSecondary from "@/components/button/button-secondary";
import {
  MdCode,
  MdDescription,
  MdLanguage,
  MdPerson,
  MdPsychology,
  MdQuiz,
  MdSchool,
  MdWork,
} from "react-icons/md";

export default function AdmissionSection() {
  return (
    <div className="space-y-6">
      <p className="text-lg leading-relaxed font-mansfield">
        L&apos;admission en formation CDA est accessible aux titulaires
        d&apos;un Bac+2 ou équivalent dans le domaine informatique.
      </p>

      <div className="flex gap-4">
        <div className="bg-ultraviolet-800/20 w-1/2 rounded-lg p-6 border border-ultraviolet-700/30">
          <h4 className="opacity-70 font-stara text-white mb-4">Prérequis</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdSchool className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-sm font-mansfield text-gray-300">
                Diplôme Bac+2 minimum (BTS, DUT, etc.)
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdCode className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-sm font-mansfield text-gray-300">
                Notions de base en programmation
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdPsychology className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-sm font-mansfield text-gray-300">
                Motivation pour le développement
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdLanguage className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-sm font-mansfield text-gray-300">
                Niveau d&apos;anglais technique
              </span>
            </div>
          </div>
        </div>

        <div className="w-1/2 rounded-lg p-6">
          <h4 className="opacity-70 font-stara text-white mb-4">
            Modalités d&apos;admission
          </h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdDescription className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-sm font-mansfield text-gray-300">
                Dossier de candidature
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdQuiz className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-sm font-mansfield text-gray-300">
                Tests techniques
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdPerson className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-sm font-mansfield text-gray-300">
                Entretien individuel
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdWork className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-sm font-mansfield text-gray-300">
                Étude du projet professionnel
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-auto w-fit">
        <ButtonSecondary>Postuler</ButtonSecondary>
      </div>
    </div>
  );
}
