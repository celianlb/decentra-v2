import Image from "next/image";
import Section from "../UI/section";

export default function Formations() {
  return (
    <Section>
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
    </Section>
  );
}
