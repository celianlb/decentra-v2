import ButtonSecondary from "@/components/button/button-secondary";
import { useState } from "react";
import {
  MdAssignment,
  MdDesignServices,
  MdExpandMore,
  MdLayers,
  MdStorage,
  MdVerified,
  MdWeb,
} from "react-icons/md";

export default function ProgrammeSection() {
  const [openModules, setOpenModules] = useState<string[]>([]);

  const toggleModule = (moduleId: string) => {
    setOpenModules((prev) =>
      prev.includes(moduleId)
        ? prev.filter((id) => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const modules = [
    {
      id: "introduction",
      icon: MdWeb,
      title: "Introduction",
      description:
        "Découvrez les fondamentaux du web et initiez-vous aux langages de programmation de base.",
      items: [
        "Théorie et initiation aux fondamentaux du web",
        "Découverte du fonctionnement global du web",
        "Initiation aux langages (HTML, CSS, JavaScript)",
      ],
    },
    {
      id: "interfaces",
      icon: MdDesignServices,
      title: "Création d'interfaces utilisateur intuitives",
      description:
        "Apprenez à concevoir des interfaces utilisateur modernes et intuitives.",
      items: [
        "Maquettage UX/UI",
        "Pratiques modernes du Front-End (React, TailwindCSS)",
        "Programmation responsive",
        "Accessibilité web",
      ],
    },
    {
      id: "sgbd",
      icon: MdStorage,
      title: "Création de SGBD fonctionnels",
      description: "Découvrez les bases de données relationnelles et NoSQL.",
      items: [
        "Modélisation des bases de données (relationnelles et NoSQL)",
        "Langage SQL avancé",
        "Intégration sécurisée des bases de données",
        "Introduction au Big Data",
      ],
    },
    {
      id: "fullstack",
      icon: MdLayers,
      title: "Création d'applications full-stack",
      description:
        "Apprenez à concevoir des applications full-stack modernes et sécurisées.",
      items: [
        "Développement Back-End avec TypeScript et NextJS",
        "Conception et intégration d'API sécurisées",
        "Déploiement continu (CI/CD)",
        "Développement mobile hybride et natif",
      ],
    },
    {
      id: "projet",
      icon: MdAssignment,
      title: "Projet fil rouge innovant",
      description:
        "Mettez en pratique vos acquis en développant une solution complète et professionnelle.",
      items: [
        "Application pratique continue des acquis",
        "Collaboration et gestion de projet en équipe",
        "Développement d'une solution complète",
      ],
    },
    {
      id: "certification",
      icon: MdVerified,
      title: "Passage du titre",
      description:
        "Préparez-vous à la certification professionnelle de niveau 6.",
      items: [
        "Préparation intensive à la certification",
        "Soutenance finale devant un jury d'experts",
        "Évaluation professionnelle basée sur le projet annuel",
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <p className="text-lg leading-relaxed font-mansfield">
        Le programme CDA couvre l&apos;ensemble des compétences nécessaires pour
        devenir un développeur d&apos;applications complet.
      </p>

      <div className="space-y-4">
        {modules.map((module) => {
          const IconComponent = module.icon;
          const isOpen = openModules.includes(module.id);

          return (
            <div
              key={module.id}
              className="bg-ultraviolet-800/20 rounded-2xl border border-ultraviolet-700/30 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleModule(module.id)}
                className="w-full p-4 flex items-center justify-between hover:bg-ultraviolet-700/10 transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-violet-500/20 rounded-lg transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-violet-400" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-stara text-white text-xl">
                      {module.title}
                    </h4>
                    <p className="text-sm font-mansfield text-gray-400 mt-1">
                      {module.description}
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <div
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <MdExpandMore className="w-6 h-6 text-violet-400" />
                  </div>
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out ${
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="px-6 pb-6 border-t border-ultraviolet-700/20">
                  <div className="pt-4 space-y-2">
                    {module.items.map((item, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-3 transition-all duration-300 ${
                          isOpen
                            ? "translate-y-0 opacity-100"
                            : "translate-y-2 opacity-0"
                        }`}
                        style={{
                          transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                        }}
                      >
                        <div className="w-2 h-2 bg-violet-400 rounded-full flex-shrink-0"></div>
                        <span className="text-sm font-mansfield text-gray-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="ml-auto w-fit">
        <ButtonSecondary>Télécharger le programme</ButtonSecondary>
      </div>
    </div>
  );
}
