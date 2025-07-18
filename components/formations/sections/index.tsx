import AdmissionSection from "./admission-section";
import DeboucheSection from "./debouche-section";
import DiplomeSection from "./diplome-section";
import DureeSection from "./duree-section";
import PostulerSection from "./postuler-section";
import PresentationSection from "./presentation-section";
import ProcessusSection from "./processus-section";
import ProgrammeSection from "./programme-section";
import RentreeSection from "./rentree-section";
import RythmeSection from "./rythme-section";
import TarifSection from "./tarif-section";

interface SectionContentProps {
  sectionId: string;
}

export default function SectionContent({ sectionId }: SectionContentProps) {
  const sections = {
    presentation: <PresentationSection />,
    rythme: <RythmeSection />,
    duree: <DureeSection />,
    admission: <AdmissionSection />,
    rentree: <RentreeSection />,
    diplome: <DiplomeSection />,
    tarif: <TarifSection />,
    debouche: <DeboucheSection />,
    programme: <ProgrammeSection />,
    processus: <ProcessusSection />,
    postuler: <PostulerSection />,
  };

  return (
    sections[sectionId as keyof typeof sections] || <PresentationSection />
  );
}
