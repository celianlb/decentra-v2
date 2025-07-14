import { cn } from "@/lib/utils";
import Image from "next/image";
import Section from "../UI/section";
import ButtonSecondary from "../button/button-secondary";
interface BentoItem {
  id: string;
  title?: string;
  subtitle: string;
  className?: string;
}

const bentoItems: BentoItem[] = [
  {
    id: "1",
    title: "100% distanciel",
    subtitle: "Déroulé de la formation",
  },
  {
    id: "2",
    title: "15 étudiants",
    subtitle: "maximum par classe",
  },
  {
    id: "3",
    title: "10 intervenants",
    subtitle: "experts et certifiés",
  },
  {
    id: "4",
    title: "Diplomes",
    subtitle: "Post Bac au Bac+5 certifié par l’état",
  },
  {
    id: "5",
    subtitle: "Les certifications et licences avec Decentra",
  },
];

export default function BentoGrid() {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {/* Première ligne - 3 éléments sur desktop */}
        <BentoCard>
          <h3 className="text-[2rem] font-stara font-bold text-white [text-shadow:_0px_0px_8px_rgb(194_168_255_/_1.00)]">
            {bentoItems[1].title}
          </h3>
          <p className="text-sm text-white/70 font-mansfield">
            {bentoItems[1].subtitle}
          </p>
        </BentoCard>

        <BentoCard>
          <p className="text-sm text-white/70 font-mansfield">
            {bentoItems[0].subtitle}
          </p>
          <h3 className="text-[2rem] font-stara font-bold text-white [text-shadow:_0px_0px_8px_rgb(194_168_255_/_1.00)]">
            {bentoItems[0].title}
          </h3>
        </BentoCard>

        <div className="md:col-span-2 lg:col-span-1">
          <BentoCard>
            <h3 className="text-[2rem] font-stara font-bold text-white [text-shadow:_0px_0px_8px_rgb(194_168_255_/_1.00)]">
              {bentoItems[2].title}
            </h3>
            <p className="text-sm text-white/70 font-mansfield">
              {bentoItems[2].subtitle}
            </p>
          </BentoCard>
        </div>

        {/* Deuxième ligne - 2 éléments sur desktop, occupent toute la largeur */}
        <div className="col-span-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <BentoCard className="relative overflow-hidden">
              <Image
                src="/home/bento/cube-diplome.svg"
                alt="Bento 1"
                width={100}
                height={100}
                className="absolute -right-3 -top-3 md:w-[150px] md:h-[150px]"
              />
              <h3 className="text-[2rem] font-stara font-bold text-white [text-shadow:_0px_0px_8px_rgb(194_168_255_/_1.00)]">
                {bentoItems[3].title}
              </h3>
              <p className="text-sm text-white/70 font-mansfield">
                {bentoItems[3].subtitle}
              </p>
              <ButtonSecondary>Candidature</ButtonSecondary>
            </BentoCard>

            <BentoCardAlt className="justify-center items-center">
              <p className="text-sm text-white/70 font-mansfield">
                {bentoItems[4].subtitle}
              </p>
              <div className="flex items-center gap-2">
                <Image
                  src="/home/bento/google.svg"
                  alt="Certification Diplôme"
                  width={75}
                  height={75}
                  className="object-contain"
                />
                <Image
                  src="/home/bento/azure.svg"
                  alt="Certification Azure"
                  width={138}
                  height={40}
                  className="object-contain"
                />
                <Image
                  src="/home/bento/figma.svg"
                  alt="Certification Figma"
                  width={50}
                  height={75}
                  className="object-contain"
                />
              </div>
            </BentoCardAlt>
          </div>
        </div>
      </div>
    </Section>
  );
}

const BentoCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 bg-purple-bento rounded-3xl border-[0.5px] border-ultraviolet-800 p-8",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCardAlt = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_#4B27AE_0%,_#18005A_100%)] rounded-3xl border-[0.5px] border-white p-8",
        className
      )}
    >
      {children}
    </div>
  );
};
