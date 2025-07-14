import Image from "next/image";
import ButtonMain from "../button/button-main";
import Section from "../UI/section";
import "./home.css";

export default function HeroSection() {
  return (
    <Section className="relative flex my-8  md:my-12 items-end overflow-hidden md:min-h-[60vh] rounded-3xl shadow-[0_0_20px_0_rgba(255,255,255,0.1)]">
      <div className="absolute inset-0 z-0 ">
        <Image
          src="/home/cube.svg"
          alt="Cube background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 z-[5] bg-gradient-to-tr from-dark-purple/80  to-transparent"></div>

      <div className="relative z-10 flex flex-col md:max-w-[50vw] p-6 md:p-8 gap-4">
        <h1 className="text-white text-[2rem] md:text-[3rem] leading-tight font-stara tracking-tighter font-bold">
          Devenez un expert du web et de la blockchain
        </h1>
        <p className="text-white text-lg font-mansfield tracking-tighter opacity-80 leading-6">
          Dominez le secteur du web et de la blockchain avec notre méthode
          d&apos;enseignement innovante sous la direction de spécialistes
          expérimentés !
        </p>
        <ButtonMain>Candidature</ButtonMain>
      </div>
    </Section>
  );
}
