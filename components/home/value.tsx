import { cn } from "@/lib/utils";
import Image from "next/image";
import Section from "../UI/section";

export default function Value() {
  const valueItems = [
    {
      icon: "/home/value/School.svg",
      text: "Nos parcours transforment les amateurs en experts respectés, enseignés par des professionnels expérimentés.",
      alt: "Icône d'école représentant la formation",
    },
    {
      icon: "/home/value/Cube.svg",
      text: "Grâce à des approches modernes alliant théorie, cas pratiques et projets concrets, vous bénéficiez d'un apprentissage interactif et sur-mesure, adapté aux exigences du marché.",
      alt: "Icône de cube représentant l'approche moderne",
    },
    {
      icon: "/home/value/Target.svg",
      text: "Nos programmes s'alignent sur les industries émergentes et les technologies de pointe, vous préparant à relever les défis des métiers de demain.",
      alt: "Icône de cible représentant les objectifs",
    },
    {
      icon: "/home/value/Print.svg",
      text: "Chaque diplôme délivré est certifié et reconnu dans les secteurs en pleine expansion, faisant de votre qualification un véritable atout pour votre carrière.",
      alt: "Icône d'empreinte représentant la certification",
    },
  ];

  return (
    <Section className="flex flex-col md:flex-row gap-12 relative">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:32px_32px]",
          "[background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 bg-dark-purple [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)] " />
      <div className="flex flex-col gap-3 md:max-w-[30vw] relative z-10">
        <span className="text-ultraviolet-900 text-[14px] font-mansfield bg-ultraviolet-700/80 py-1 px-2 rounded-full w-fit">
          nos valeurs
        </span>
        <h2 className="text-[2rem] font-stara tracking-tight font-bold">
          L&apos;excellence Decentra
        </h2>
        <p className="text-[1rem] font-mansfield tracking-tight opacity-80">
          Chez Decentra, la devise se résume à former des futurs experts par nos
          experts. La plupart des écoles ne se concentrent pas sur la qualité de
          leurs intervenants et pourtant c&apos;est par le biais de ses tiers
          que vous allez réussir. Grâce à nos formateurs de renoms, n&apos;ayez
          craintes d&apos;avancer avec Decentra qui vous accompagnera de bouts
          en bouts afin de réussir.
        </p>
      </div>
      <div className="relative z-10">
        <ul className="flex flex-col gap-8 md:gap-4">
          {valueItems.map((item, index) => (
            <li key={index} className="flex items-start md:items-center gap-2">
              <Image
                src={item.icon}
                alt={item.alt}
                width={60}
                height={60}
                loading="lazy"
              />
              <p className="text-[1rem] font-mansfield tracking-tight opacity-80">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
