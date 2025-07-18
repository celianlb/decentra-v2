import FormationScrollPage from "@/components/formations/formation-scroll-page";
import { cdaFormationData } from "@/data/formations/cda";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formation CDA - Concepteur Développeur d'Applications | Decentra",
  description:
    "Formez-vous au métier de Concepteur Développeur d'Applications avec notre formation diplômante Bac+3/4. Titre RNCP 31678 reconnu par l'État, formation 100% distanciel.",
  keywords: [
    "formation CDA",
    "développeur applications",
    "formation développeur",
    "titre RNCP",
    "formation distanciel",
  ],
  openGraph: {
    title: "Formation CDA - Concepteur Développeur d'Applications",
    description:
      "Formation diplômante Bac+3/4 pour devenir Concepteur Développeur d'Applications",
    type: "website",
  },
};

export default function CDAPage() {
  return <FormationScrollPage formationData={cdaFormationData} />;
}
