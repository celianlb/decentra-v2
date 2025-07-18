import ButtonSecondary from "@/components/button/button-secondary";
import {
  MdAccessTime,
  MdCalendarToday,
  MdCheckCircle,
  MdEventAvailable,
  MdPeople,
  MdSchedule,
} from "react-icons/md";

export default function RentreeSection() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold font-stara text-white mb-4">
          Prochaines sessions
        </h3>
      </div>

      <div className="flex gap-4">
        <div className="bg-ultraviolet-800/20 w-1/2 rounded-lg p-6 border border-ultraviolet-700/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-violet-500/20 rounded-lg">
              <MdCalendarToday className="w-6 h-6 text-violet-400" />
            </div>
            <h4 className="font-stara text-white text-xl">
              Session Automne 2024
            </h4>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdSchedule className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-sm font-mansfield text-gray-300">
                Date : 16 septembre 2024
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdAccessTime className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-sm font-mansfield text-gray-300">
                Candidatures : jusqu&apos;au 1er septembre
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdPeople className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-sm font-mansfield text-gray-300">
                Places disponibles : 15
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdCheckCircle className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-sm font-mansfield text-gray-300">
                Statut : Ouvert
              </span>
            </div>
          </div>
        </div>

        <div className="w-1/2 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-violet-500/20 rounded-lg">
              <MdEventAvailable className="w-6 h-6 text-violet-400" />
            </div>
            <h4 className="opacity-70 font-stara text-white text-xl">
              Session Printemps 2025
            </h4>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdSchedule className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-sm font-mansfield text-gray-300">
                Date : 3 mars 2025
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdAccessTime className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-sm font-mansfield text-gray-300">
                Candidatures : jusqu&apos;au 15 février
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdPeople className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-sm font-mansfield text-gray-300">
                Places disponibles : 15
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MdCheckCircle className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-sm font-mansfield text-gray-300">
                Statut : Pré-inscriptions
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-auto w-fit">
        <ButtonSecondary>Réserver ma place</ButtonSecondary>
      </div>
    </div>
  );
}
