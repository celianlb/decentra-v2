import {
  FaCloud,
  FaCode,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaMobile,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  MdDesignServices,
  MdDeveloperMode,
  MdLayers,
  MdStorage,
} from "react-icons/md";
import {
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function PresentationSection() {
  return (
    <div className="space-y-6">
      <p className="text-lg leading-relaxed">
        Le programme « Concepteur Développeur d&apos;Applications (CDA) »,
        reconnu par l&apos;État{" "}
        <span className="bg-violet-500/20 text-violet-300 px-2 py-1 rounded font-semibold">
          Titre RNCP 37873
        </span>
        , niveau Bac+3/4, forme des spécialistes capables de concevoir et
        développer des applications performantes et sécurisées.
      </p>
      <div className="space-y-4">
        <div className="bg-ultraviolet-800/20 rounded-lg p-6 border border-ultraviolet-700/30">
          <h4 className="opacity-70 font-stara text-white mb-4">
            Compétences développées
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-violet-500/20 rounded-lg">
                  <MdDesignServices className="w-5 h-5 text-violet-400" />
                </div>
                <h5 className="font-semibold font-stara text-lg text-white">
                  Interface utilisateur et expérience utilisateur
                </h5>
              </div>
              <p className="text-sm font-mansfield text-gray-300 ml-10">
                Conception UX/UI, prototypage
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-violet-500/20 rounded-lg">
                  <MdDeveloperMode className="w-5 h-5 text-violet-400" />
                </div>
                <h5 className="font-semibold font-stara text-lg text-white">
                  Développement Front-End avancé
                </h5>
              </div>
              <p className="text-sm font-mansfield text-gray-300 ml-10">
                TypeScript et frameworks modernes (NextJS, React, TailwindCSS)
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-violet-500/20 rounded-lg">
                  <MdStorage className="w-5 h-5 text-violet-400" />
                </div>
                <h5 className="font-semibold font-stara text-lg text-white">
                  Gestion et persistance des données
                </h5>
              </div>
              <p className="text-sm text-gray-300 ml-10">
                Architecture logicielle et modélisation avancée (UML, Merise)
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-violet-500/20 rounded-lg">
                  <MdLayers className="w-5 h-5 text-violet-400" />
                </div>
                <h5 className="font-semibold font-stara text-lg text-white">
                  Développement d&apos;applications multicouches
                </h5>
              </div>
              <p className="text-sm font-mansfield text-gray-300 ml-10">
                Back-End avec Node.js et TypeScript
              </p>
            </div>
          </div>
        </div>
        <div className=" rounded-lg p-6">
          <h4 className="opacity-70 font-stara text-white mb-4">
            Technologies maîtrisées
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
              <FaHtml5 className="w-6 h-6 text-orange-500" />
              <span className="text-sm font-medium font-stara">HTML5</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
              <FaCss3Alt className="w-6 h-6 text-blue-500" />
              <span className="text-sm font-medium font-stara">CSS3</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
              <FaJs className="w-6 h-6 text-yellow-500" />
              <span className="text-sm font-medium font-stara">JavaScript</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
              <SiTypescript className="w-6 h-6 text-blue-600" />
              <span className="text-sm font-medium font-stara">TypeScript</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
              <FaReact className="w-6 h-6 text-cyan-500" />
              <span className="text-sm font-medium font-stara">React</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
              <SiNextdotjs className="w-6 h-6 text-white" />
              <span className="text-sm font-medium font-stara">Next.js</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
              <SiTailwindcss className="w-6 h-6 text-cyan-400" />
              <span className="text-sm font-medium font-stara">
                TailwindCSS
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
              <FaNodeJs className="w-6 h-6 text-green-500" />
              <span className="text-sm font-medium font-stara">Node.js</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
              <SiPostgresql className="w-6 h-6 text-blue-400" />
              <span className="text-sm font-medium font-stara">PostgreSQL</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
              <SiMongodb className="w-6 h-6 text-green-400" />
              <span className="text-sm font-medium font-stara">MongoDB</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
              <FaCode className="w-6 h-6 text-purple-500" />
              <span className="text-sm font-medium font-stara">API REST</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
              <FaCloud className="w-6 h-6 text-blue-300" />
              <span className="text-sm font-medium font-stara">
                DevOps & Cloud
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
              <FaMobile className="w-6 h-6 text-pink-500" />
              <span className="text-sm font-medium font-stara">
                Mobile hybride
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
