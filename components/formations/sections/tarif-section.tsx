import ButtonSecondary from "@/components/button/button-secondary";
import {
  MdAccountBalance,
  MdBusiness,
  MdBusinessCenter,
  MdCreditCard,
  MdEuroSymbol,
  MdFreeBreakfast,
  MdPayment,
  MdSchool,
  MdSupport,
  MdWork,
} from "react-icons/md";

export default function TarifSection() {
  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <div className="bg-ultraviolet-800/20 w-1/2 rounded-lg p-6 border border-ultraviolet-700/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-violet-500/20 rounded-lg">
              <MdBusiness className="w-6 h-6 text-violet-400" />
            </div>
            <h4 className="font-stara text-white text-xl">Alternance</h4>
          </div>

          <div className="text-center mb-4">
            <div className="inline-block bg-white/5 rounded-xl px-6 py-3 border border-ultraviolet-700/30">
              <div className="flex items-center gap-2 justify-center">
                <MdFreeBreakfast className="w-6 h-6 text-violet-400" />
                <span className="text-2xl font-bold font-stara text-white">
                  Gratuit
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdBusinessCenter className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-sm font-mansfield text-gray-300">
                Prise en charge par l&apos;entreprise
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdPayment className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-sm font-mansfield text-gray-300">
                Rémunération pendant la formation
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdWork className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-sm font-mansfield text-gray-300">
                Contrat de professionnalisation
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdSupport className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-sm font-mansfield text-gray-300">
                Accompagnement dans la recherche
              </span>
            </div>
          </div>
        </div>

        <div className="w-1/2 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-violet-500/20 rounded-lg">
              <MdSchool className="w-6 h-6 text-violet-400" />
            </div>
            <h4 className="opacity-70 font-stara text-white text-xl">
              Initial
            </h4>
          </div>

          <div className="text-center mb-4">
            <div className="inline-block bg-white/5 rounded-xl px-6 py-3 border border-ultraviolet-700/30">
              <div className="flex items-center gap-2 justify-center">
                <MdEuroSymbol className="w-6 h-6 text-violet-400" />
                <span className="text-2xl font-bold font-stara text-white">
                  6 500€
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdAccountBalance className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-sm font-mansfield text-gray-300">
                Financement Pôle Emploi (AIF, CPF)
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdAccountBalance className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-sm font-mansfield text-gray-300">
                Région (selon éligibilité)
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdCreditCard className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-sm font-mansfield text-gray-300">
                Paiement en plusieurs fois
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdWork className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-sm font-mansfield text-gray-300">
                Stage obligatoire inclus
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-ultraviolet-800/20 rounded-lg p-4 border border-ultraviolet-700/30">
        <p className="text-sm text-center font-mansfield text-gray-300">
          <strong className="text-white">
            Nos conseillers vous accompagnent
          </strong>{" "}
          dans la recherche de financements adaptés à votre situation.
        </p>
      </div>

      <div className="ml-auto w-fit">
        <ButtonSecondary>Demander un devis</ButtonSecondary>
      </div>
    </div>
  );
}
