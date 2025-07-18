import ButtonSecondary from "@/components/button/button-secondary";
import { useState } from "react";
import {
  MdArrowBack,
  MdArrowForward,
  MdCheckCircle,
  MdDescription,
  MdPerson,
  MdQuiz,
  MdSchedule,
} from "react-icons/md";

export default function ProcessusSection() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: "candidature",
      icon: MdDescription,
      title: "Candidature en ligne",
      description:
        "Remplissez le formulaire avec vos informations et motivations",
      details: [
        "Formulaire de candidature détaillé",
        "CV et lettre de motivation",
        "Présentation de votre projet professionnel",
        "Justificatifs de diplômes et expériences",
      ],
      duration: "10 min",
    },
    {
      id: "tests",
      icon: MdQuiz,
      title: "Tests techniques",
      description: "Évaluation de vos compétences en logique et programmation",
      details: [
        "Test de logique et algorithmique",
        "Évaluation des bases en programmation",
        "Exercices pratiques de résolution de problèmes",
        "Durée : 2h en ligne ou sur site",
      ],
      duration: "2h",
    },
    {
      id: "entretien",
      icon: MdPerson,
      title: "Entretien individuel",
      description: "Discussion sur votre projet professionnel et vos attentes",
      details: [
        "Échange avec un responsable pédagogique",
        "Présentation de votre parcours et motivations",
        "Questions sur vos objectifs professionnels",
        "Durée : 45 minutes (présentiel ou visio)",
      ],
      duration: "45 min",
    },
    {
      id: "reponse",
      icon: MdCheckCircle,
      title: "Réponse finale",
      description: "Notification d'admission sous 48h maximum",
      details: [
        "Analyse complète de votre dossier",
        "Réponse par email sous 48h",
        "Si admis : dossier d'inscription à compléter",
        "Accompagnement pour la recherche de financement",
      ],
      duration: "48h",
    },
  ];

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const currentStepData = steps[currentStep];
  const IconComponent = currentStepData.icon;

  return (
    <div className="space-y-8">
      <p className="text-lg leading-relaxed font-mansfield relative z-10">
        Le processus d&apos;admission se déroule en plusieurs étapes pour
        évaluer votre motivation et vos compétences.
      </p>

      {/* Slider Container */}
      <div className="relative z-10">
        {/* Navigation Arrows */}

        {/* Step Content */}
        <div className="bg-ultraviolet-800/20 rounded-3xl p-8 border border-ultraviolet-700/30 backdrop-blur-sm min-h-[400px] transition-all duration-500">
          {/* Step Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-violet-500/20 backdrop-blur-sm border border-violet-500/30 flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-violet-400" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-violet-500 rounded-full flex items-center justify-center text-sm font-bold text-white">
                  {currentStep + 1}
                </div>
              </div>
              <div>
                <h3 className="font-stara text-white text-2xl mb-1">
                  {currentStepData.title}
                </h3>
                <p className="text-sm font-mansfield text-gray-300">
                  {currentStepData.description}
                </p>
              </div>
            </div>

            {/* Duration */}
            <div className="flex items-center gap-2 bg-violet-500/20 rounded-full px-4 py-2">
              <MdSchedule className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-stara text-violet-400">
                {currentStepData.duration}
              </span>
            </div>
          </div>

          {/* Step Details */}
          <div className="space-y-4">
            <h4 className="font-stara text-white text-lg">
              Détails de l&apos;étape
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentStepData.details.map((detail, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-violet-500/10 rounded-xl border border-violet-500/20 transition-all duration-300 hover:bg-violet-500/15"
                >
                  <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm font-mansfield text-gray-300">
                    {detail}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-mansfield text-gray-400">
                Progression
              </span>
              <span className="text-sm font-stara text-violet-400">
                {currentStep + 1} / {steps.length}
              </span>
            </div>
            <div className="w-full bg-violet-500/20 rounded-full h-2">
              <div
                className="bg-violet-500 h-2 rounded-full transition-all duration-500"
                style={{
                  width: `${((currentStep + 1) / steps.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-1 items-center ml-auto w-fit mt-8">
          <button
            onClick={prevStep}
            className="p-2 cursor-pointer bg-violet-500/20 hover:bg-violet-500/30 rounded-full transition-all duration-300 group"
          >
            <MdArrowBack className="w-4 h-4 text-violet-400 group-hover:text-violet-300" />
          </button>
          <button
            onClick={nextStep}
            className="p-2 cursor-pointer bg-violet-500/20 hover:bg-violet-500/30 rounded-full transition-all duration-300 group"
          >
            <MdArrowForward className="w-4 h-4 text-violet-400 group-hover:text-violet-300" />
          </button>
        </div>
      </div>
      <div className="ml-auto w-fit relative z-10">
        <ButtonSecondary>Commencer ma candidature</ButtonSecondary>
      </div>
    </div>
  );
}
