import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Section from "../UI/section";

// Définir les thèmes de couleur pour chaque formation
const colorThemes = {
  web: {
    borderColors: ["from-pink-500", "via-purple-500", "to-blue-500"],
    shadow:
      "shadow-[0_0_20px_rgba(236,72,153,0)] hover:shadow-[0_0_30px_rgba(147,255,255,0.1)]",
    gradient: "from-pink-900/30 via-purple-600/30 to-blue-900/30",
    overlay: "to-white/5",
    levelBg: "bg-gradient-to-r from-pink-600 to-purple-600",
    levelText: "text-white",
    titleHover: "group-hover:text-pink-400",
    linkHover: "group-hover:text-pink-400",
    borderBottom: "border-white/30",
  },
  mobile: {
    borderColors: ["from-green-500", "via-cyan-500", "to-teal-500"],
    shadow:
      "shadow-[0_0_20px_rgba(6,182,212,0)] hover:shadow-[0_0_30px_rgba(20,184,166,0.1)]",
    gradient: "from-green-900/30 via-blue-600/30 to-blue-900/30",
    overlay: "to-white/5",
    levelBg: "bg-gradient-to-r from-green-600 to-cyan-600",
    levelText: "text-white",
    titleHover: "group-hover:text-green-400",
    linkHover: "group-hover:text-green-400",
    borderBottom: "border-white/30",
  },
  blockchain: {
    borderColors: ["from-violet-500", "via-indigo-500", "to-purple-500"],
    shadow:
      "shadow-[0_0_20px_rgba(139,69,193,0)] hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]",
    gradient: "from-violet-900/30 via-indigo-600/30 to-purple-900/30",
    overlay: "to-white/5",
    levelBg: "bg-gradient-to-r from-violet-600 to-indigo-600",
    levelText: "text-white",
    titleHover: "group-hover:text-violet-400",
    linkHover: "group-hover:text-violet-400",
    borderBottom: "border-white/30",
  },
};

function FormationCard({
  title,
  description,
  duration,
  level,
  slug,
  theme = "web",
  className,
}: {
  title: string;
  description: string;
  duration: string;
  level: string;
  slug: string;
  theme?: keyof typeof colorThemes;
  className?: string;
}) {
  const colors = colorThemes[theme];

  return (
    <Link href={`/formations/${slug}`} className="block group h-full">
      <div
        className={cn(
          "relative overflow-hidden transition-all duration-300 cursor-pointer h-full rounded-3xl p-[0.6px]",
          `bg-gradient-to-r ${colors.borderColors.join(" ")}`,
          colors.shadow,
          className
        )}
      >
        {/* Contenu avec fond sombre */}
        <div className="relative bg-gray-900 rounded-3xl h-full w-full p-8 overflow-hidden">
          {/* Neon glow effect */}
          <div
            className={cn(
              "absolute inset-0 rounded-3xl bg-gradient-to-r blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-300",
              colors.gradient
            )}
          />

          {/* Dot grid pattern */}
          <div
            className={cn(
              "absolute inset-0 opacity-20",
              "[background-size:20px_20px]",
              "[background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.3)_1px,transparent_1px)]"
            )}
          />

          {/* Gradient overlay */}
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br from-transparent via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
              colors.overlay
            )}
          />

          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <span
                className={cn(
                  "text-[12px] font-mansfield py-1 px-3 rounded-full bg-white text-dark-purple"
                )}
              >
                {level}
              </span>
              <span className="text-white/60 text-[14px] font-mansfield">
                {duration}
              </span>
            </div>

            <h3
              className={cn(
                "text-white text-[1.5rem] font-stara font-bold leading-tight mb-4 transition-colors duration-300",
                colors.titleHover
              )}
            >
              {title}
            </h3>

            <p className="text-white/80 text-[1rem] font-mansfield leading-relaxed flex-1">
              {description}
            </p>

            <div className={cn("mt-4 pt-4 border-t", colors.borderBottom)}>
              <span
                className={cn(
                  "text-[14px] font-mansfield font-semibold transition-colors duration-300",
                  colors.linkHover
                )}
              >
                En savoir plus →
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Formations() {
  const formations = [
    {
      title: "Développement Web & Web Mobile",
      description:
        "Découvrez comment créer des sites web performants et des applications mobiles en utilisant les dernières technologies web et mobile.",
      duration: "24 mois",
      level: "Bac+2",
      slug: "developpement-web-mobile",
      theme: "web" as const,
    },
    {
      title: "Concepteur et Développeur d'Applications",
      description:
        "Découvrez comment concevoir et développer des applications mobiles et web en utilisant les dernières technologies.",
      duration: "14 mois",
      level: "Bac+3",
      slug: "cda",
      theme: "mobile" as const,
    },
    {
      title: "Master Blockchain",
      description:
        "Découvrez comment concevoir et développer des applications mobiles et web en utilisant les dernières technologies.",
      duration: "12 mois",
      level: "Bac+5",
      slug: "master-blockchain",
      theme: "blockchain" as const,
    },
  ];

  return (
    <Section>
      <div className="flex flex-col gap-24 items-center">
        {/* Header section */}
        <div className="flex flex-col gap-4 items-center">
          <span className="text-ultraviolet-900 text-[14px] font-mansfield bg-ultraviolet-700/80 py-1 px-2 rounded-full w-fit">
            les diplômes
          </span>
          <div className="flex items-center gap-4">
            <Image
              src="/home/formations/circle-left.svg"
              alt="Décoration gauche"
              width={50}
              height={50}
              className="flex-shrink-0 md:w-[100px] md:h-[100px]"
            />
            <h2 className="text-white text-[2rem] font-stara tracking-tight text-center font-bold max-w-[350px]">
              Trouvez le programme qui vous correspond
            </h2>
            <Image
              src="/home/formations/circle-right.svg"
              alt="Décoration droite"
              width={50}
              height={50}
              className="flex-shrink-0 md:w-[100px] md:h-[100px]"
            />
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {formations.map((formation, index) => (
            <FormationCard
              key={index}
              title={formation.title}
              description={formation.description}
              duration={formation.duration}
              level={formation.level}
              slug={formation.slug}
              theme={formation.theme}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
