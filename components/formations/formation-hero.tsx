import ButtonSecondary from "../button/button-secondary";
import Orb from "../UI/Orb";
import Section from "../UI/section";

interface FormationHeroProps {
  title: string;
  subtitle: string;
  onScrollToFirst: () => void;
}

export default function FormationHero({
  title,
  subtitle,
  onScrollToFirst,
}: FormationHeroProps) {
  return (
    <Section className="min-h-screen flex items-center justify-center !my-0 relative">
      {/* Cercles décoratifs spécifiques au hero */}
      <div
        style={{
          width: "100%",
          height: "600px",
          position: "absolute",
        }}
      >
        <Orb />
      </div>
      <div className="absolute -z-50 top-1/4 left-1/4 w-96 h-96 bg-ultraviolet-900/30 rounded-full blur-3xl " />
      <div className="absolute -z-50 bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/30 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <span className="text-ultraviolet-900 text-sm font-mansfield bg-ultraviolet-700/80 py-2 px-4 rounded-full">
          formation
        </span>
        <h1 className="text-[3rem] font-bold tracking-tighter text-white font-stara mt-6 mb-4">
          {title}
        </h1>
        <p className="text-lg text-gray-300 font-mansfield max-w-2xl mx-auto mb-8">
          {subtitle}
        </p>
        <div className="flex justify-center">
          <ButtonSecondary
            onClick={onScrollToFirst}
            className="flex items-center gap-2"
          >
            Découvrir la formation
            <span>↓</span>
          </ButtonSecondary>
        </div>
      </div>
    </Section>
  );
}
