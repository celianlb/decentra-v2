export interface FormationSection {
  id: string;
  title: string;
  content: string;
  icon?: string;
}

export interface FormationData {
  title: string;
  subtitle: string;
  sections: FormationSection[];
}

export type FormationSectionId =
  | "presentation"
  | "rythme"
  | "duree"
  | "admission"
  | "rentree"
  | "diplome"
  | "tarif"
  | "debouche"
  | "programme"
  | "processus"
  | "postuler";
