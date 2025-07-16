import { FAQPageMapping } from "@/types/faq";

export const faqData: FAQPageMapping = {
  home: {
    title: "Questions fréquentes",
    subtitle: "Tout ce que vous devez savoir sur Decentra",
    items: [
      {
        id: "1",
        question: "Qu'est-ce que Decentra ?",
        answer:
          "Decentra est une école spécialisée dans le développement web et la blockchain. Nous proposons des formations certifiées de Bac+2 à Bac+5 avec des intervenants experts du secteur.",
      },
      {
        id: "2",
        question: "Les formations sont-elles reconnues par l'État ?",
        answer:
          "Oui, tous nos diplômes sont certifiés par l'État et reconnus dans les secteurs du web et de la blockchain. Nos formations répondent aux standards de qualité les plus élevés.",
      },
      {
        id: "3",
        question: "Comment se déroulent les cours ?",
        answer:
          "Nos formations sont 100% distancielles avec des classes limitées à 15 étudiants maximum. Cela garantit un suivi personnalisé et une interaction optimale avec nos 10 intervenants experts.",
      },
      {
        id: "4",
        question: "Quels sont les débouchés après une formation ?",
        answer:
          "Nos diplômés intègrent rapidement le marché du travail dans des postes de développeurs, concepteurs d'applications, experts blockchain ou créent leur propre startup dans le secteur tech.",
      },
    ],
  },
  formations: {
    title: "FAQ Formations",
    subtitle: "Tout savoir sur nos programmes d'étude",
    items: [
      {
        id: "1",
        question: "Quels sont les prérequis pour intégrer une formation ?",
        answer:
          "Les prérequis varient selon le niveau : Bac pour les formations Bac+2, Bac+2 pour les formations Bac+3, et Bac+3 pour les formations Bac+5. Une motivation et une appétence pour le digital sont essentielles.",
      },
      {
        id: "2",
        question: "Combien de temps durent les formations ?",
        answer:
          "La durée varie selon le programme : 24 mois pour le Développement Web & Web Mobile (Bac+2), 12 mois pour le Concepteur Développeur d'Applications (Bac+3), et 12 mois pour le Master Blockchain (Bac+5).",
      },
      {
        id: "3",
        question: "Y a-t-il des possibilités d'alternance ?",
        answer:
          "Oui, nous proposons des formations en alternance pour tous nos programmes. Cela permet aux étudiants d'acquérir une expérience professionnelle tout en étudiant.",
      },
      {
        id: "4",
        question: "Comment se déroule l'évaluation ?",
        answer:
          "L'évaluation se fait à travers des projets pratiques, des examens théoriques, et la réalisation d'un projet de fin d'études. L'approche est axée sur la pratique et les compétences opérationnelles.",
      },
    ],
  },
  admissions: {
    title: "FAQ Admissions",
    subtitle: "Processus d'admission et candidature",
    items: [
      {
        id: "1",
        question: "Comment candidater à une formation ?",
        answer:
          "Vous pouvez candidater directement sur notre site web en remplissant le formulaire de candidature. Notre équipe vous recontactera sous 48h pour vous accompagner dans votre projet.",
      },
      {
        id: "2",
        question: "Quand ont lieu les rentrées ?",
        answer:
          "Nous proposons plusieurs rentrées par an : septembre, janvier et avril. Cela vous permet de commencer votre formation au moment qui vous convient le mieux.",
      },
      {
        id: "3",
        question: "Y a-t-il des frais d'inscription ?",
        answer:
          "Les frais varient selon le programme choisi et le mode de financement (formation initiale, alternance, formation continue). Contactez notre équipe pour obtenir un devis personnalisé.",
      },
      {
        id: "4",
        question: "Puis-je visiter l'école avant de m'inscrire ?",
        answer:
          "Bien que nos formations soient 100% distancielles, nous organisons régulièrement des journées portes ouvertes virtuelles et des sessions d'information pour présenter nos programmes.",
      },
    ],
  },
};
