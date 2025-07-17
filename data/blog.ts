import { BlogArticle } from "@/types/blogArticle";

export const blogArticles: BlogArticle[] = [
  {
    id: "1",
    title: "Les fondamentaux du développement blockchain expliqués simplement",
    slug: "fondamentaux-blockchain-developpement",
    excerpt:
      "Découvrez les concepts essentiels du développement blockchain, des smart contracts aux DApps, pour comprendre cette technologie révolutionnaire.",
    content: `
      <h2>Introduction à la blockchain</h2>
      <p>La blockchain est une technologie de stockage et de transmission d'informations, transparente et sécurisée, qui fonctionne sans organe central de contrôle.</p>
      
      <h2>Les Smart Contracts</h2>
      <p>Les smart contracts sont des programmes autonomes qui s'exécutent automatiquement lorsque certaines conditions sont remplies. Ils constituent la base de nombreuses applications décentralisées.</p>
      
      <h2>Développement d'applications décentralisées</h2>
      <p>Les DApps (Applications Décentralisées) révolutionnent notre approche du développement logiciel en offrant transparence, sécurité et résistance à la censure.</p>
      
      <h2>Conclusion</h2>
      <p>Maîtriser le développement blockchain ouvre de nombreuses opportunités dans un secteur en pleine expansion. Nos formations vous accompagnent dans cette transition.</p>
    `,
    author: {
      name: "Alexandre Dubois",
      avatar: "/blog/authors/alexandre-dubois.svg",
      role: "Expert Blockchain & Lead Developer",
    },
    publishedAt: "2024-01-15",
    readingTime: 8,
    image: "/blog/blockchain-fundamentals.svg",
    category: "Blockchain",
    tags: ["blockchain", "smart-contracts", "développement", "crypto"],
  },
  {
    id: "2",
    title: "React vs Vue.js : Quel framework choisir pour votre projet web ?",
    slug: "react-vs-vue-framework-comparaison",
    excerpt:
      "Comparaison détaillée entre React et Vue.js pour vous aider à faire le meilleur choix selon vos besoins de développement frontend.",
    content: `
      <h2>Introduction</h2>
      <p>Le choix du framework frontend est crucial pour la réussite de votre projet. React et Vue.js sont deux des solutions les plus populaires du marché.</p>
      
      <h2>React : La puissance de Facebook</h2>
      <p>React, développé par Facebook, mise sur la flexibilité et l'écosystème. Son approche component-based et son Virtual DOM en font un choix de prédilection pour les grandes applications.</p>
      
      <h2>Vue.js : La simplicité française</h2>
      <p>Vue.js, créé par Evan You, privilégie la simplicité d'apprentissage et la productivité. Sa courbe d'apprentissage douce séduira les développeurs débutants.</p>
      
      <h2>Conclusion</h2>
      <p>Le choix dépend de vos besoins spécifiques. Nos formations couvrent les deux frameworks pour vous donner une expertise complète.</p>
    `,
    author: {
      name: "Sarah Martinez",
      avatar: "/blog/authors/sarah-martinez.svg",
      role: "Senior Frontend Developer",
    },
    publishedAt: "2024-01-10",
    readingTime: 6,
    image: "/blog/react-vue-comparison.svg",
    category: "Développement Web",
    tags: ["react", "vue", "javascript", "frontend"],
  },
  {
    id: "3",
    title: "L'avenir du web3 : Opportunités et défis pour les développeurs",
    slug: "avenir-web3-opportunites-defis",
    excerpt:
      "Explorez les tendances du web3 et découvrez comment cette nouvelle génération du web transforme le paysage du développement.",
    content: `
      <h2>Qu'est-ce que le Web3 ?</h2>
      <p>Le Web3 représente la prochaine évolution d'internet, basée sur la décentralisation, la blockchain et les tokens. Il promet de redonner le contrôle aux utilisateurs.</p>
      
      <h2>Les opportunités pour les développeurs</h2>
      <p>Le Web3 ouvre de nouvelles perspectives : DeFi, NFTs, DAOs, métavers. Les développeurs maîtrisant ces technologies sont très recherchés.</p>
      
      <h2>Les défis à surmonter</h2>
      <p>Scalabilité, consommation énergétique, complexité technique : le Web3 doit encore relever plusieurs défis majeurs.</p>
      
      <h2>Se former au Web3</h2>
      <p>Nos programmes incluent une formation complète au Web3 pour vous préparer aux métiers de demain.</p>
    `,
    author: {
      name: "Thomas Chen",
      avatar: "/blog/authors/thomas-chen.svg",
      role: "Web3 Architect & Blockchain Expert",
    },
    publishedAt: "2024-01-05",
    readingTime: 10,
    image: "/blog/web3-future.svg",
    category: "Web3",
    tags: ["web3", "blockchain", "defi", "nft"],
  },
  {
    id: "4",
    title: "TypeScript : Pourquoi l'adopter dans vos projets JavaScript",
    slug: "typescript-avantages-javascript",
    excerpt:
      "Découvrez pourquoi TypeScript est devenu incontournable dans le développement JavaScript moderne et comment il améliore la productivité.",
    content: `
      <h2>TypeScript : JavaScript typé</h2>
      <p>TypeScript est un sur-ensemble de JavaScript qui ajoute des types statiques optionnels. Il compile vers du JavaScript standard.</p>
      
      <h2>Avantages du typage statique</h2>
      <p>Le typage statique permet de détecter les erreurs dès la compilation, améliore l'intellisense et facilite la maintenance du code.</p>
      
      <h2>Adoption progressive</h2>
      <p>TypeScript peut être adopté progressivement dans un projet existant, ce qui facilite la migration depuis JavaScript.</p>
      
      <h2>Écosystème et outils</h2>
      <p>TypeScript bénéficie d'un excellent support tooling et d'une communauté active qui enrichit constamment l'écosystème.</p>
    `,
    author: {
      name: "Julie Moreau",
      avatar: "/blog/authors/julie-moreau.svg",
      role: "Lead TypeScript Developer",
    },
    publishedAt: "2024-01-03",
    readingTime: 7,
    image: "/blog/typescript-benefits.svg",
    category: "Développement Web",
    tags: ["typescript", "javascript", "développement", "programmation"],
  },
  {
    id: "5",
    title: "Sécurité des smart contracts : Bonnes pratiques et pièges à éviter",
    slug: "securite-smart-contracts-bonnes-pratiques",
    excerpt:
      "Guide complet sur la sécurité des smart contracts : vulnérabilités communes, outils d'audit et meilleures pratiques de développement.",
    content: `
      <h2>L'importance de la sécurité</h2>
      <p>Les smart contracts gèrent souvent des sommes importantes. Une faille peut être désastreuse, d'où l'importance d'une approche sécurisée.</p>
      
      <h2>Vulnérabilités communes</h2>
      <p>Reentrancy, overflow/underflow, access control : découvrez les vulnérabilités les plus fréquentes et comment les éviter.</p>
      
      <h2>Outils d'audit</h2>
      <p>Mythril, Slither, Echidna : panorama des outils essentiels pour auditer vos smart contracts.</p>
      
      <h2>Meilleures pratiques</h2>
      <p>Checks-Effects-Interactions, principe de moindre privilège, tests exhaustifs : les règles d'or du développement sécurisé.</p>
    `,
    author: {
      name: "David Kim",
      avatar: "/blog/authors/david-kim.svg",
      role: "Security Expert & Smart Contract Auditor",
    },
    publishedAt: "2024-01-01",
    readingTime: 12,
    image: "/blog/smart-contract-security.svg",
    category: "Blockchain",
    tags: ["sécurité", "smart-contracts", "audit", "blockchain"],
  },
  {
    id: "6",
    title: "Next.js 14 : Les nouvelles fonctionnalités qui changent la donne",
    slug: "nextjs-14-nouvelles-fonctionnalites",
    excerpt:
      "Explorez les innovations de Next.js 14 : App Router, Server Components, et optimisations qui révolutionnent le développement React.",
    content: `
      <h2>App Router : La nouvelle architecture</h2>
      <p>Next.js 14 introduit l'App Router, une nouvelle façon d'organiser vos applications avec des layouts imbriqués et une navigation plus intuitive.</p>
      
      <h2>Server Components</h2>
      <p>Les Server Components permettent de rendre les composants côté serveur, améliorant les performances et réduisant la taille du bundle JavaScript.</p>
      
      <h2>Optimisations de performance</h2>
      <p>Turbopack, streaming, ISR amélioré : Next.js 14 pousse l'optimisation à un niveau supérieur.</p>
      
      <h2>Migration et compatibilité</h2>
      <p>Conseils pratiques pour migrer vos projets existants vers Next.js 14 sans casser votre code.</p>
    `,
    author: {
      name: "Emma Rodriguez",
      avatar: "/blog/authors/emma-rodriguez.svg",
      role: "Next.js Expert & Full Stack Developer",
    },
    publishedAt: "2023-12-28",
    readingTime: 9,
    image: "/blog/nextjs-14-features.svg",
    category: "Développement Web",
    tags: ["nextjs", "react", "ssr", "performance"],
  },
];
