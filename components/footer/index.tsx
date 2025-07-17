import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const formationLinks = [
    {
      title: "Développeur Web et Web mobile (Bac+2)",
      href: "/formations/developpeur-web-mobile",
    },
    {
      title: "CDA (Bac+3)",
      href: "/formations/cda",
    },
    {
      title: "Master Web et Blockchain",
      href: "/formations/master-web-blockchain",
    },
  ];

  const aboutLinks = [
    {
      title: "Le distanciel",
      href: "/a-propos/distanciel",
    },
    {
      title: "L'alternance",
      href: "/a-propos/alternance",
    },
    {
      title: "Handicap",
      href: "/a-propos/handicap",
    },
    {
      title: "VAE",
      href: "/a-propos/vae",
    },
    {
      title: "Les logements",
      href: "/a-propos/logements",
    },
    {
      title: "CGV",
      href: "/a-propos/cgv",
    },
    {
      title: "Mentions légales",
      href: "/a-propos/mentions-legales",
    },
  ];

  const moreInfoLinks = [
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Nous contacter",
      href: "/contact",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/decentra",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/decentra",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com/decentra",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.864 3.708 13.713 3.708 12.416s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-9.946c-.807 0-1.459-.652-1.459-1.459s.652-1.459 1.459-1.459 1.459.652 1.459 1.459-.652 1.459-1.459 1.459zm1.297 6.946c0 .807-.652 1.459-1.459 1.459H8.449c-.807 0-1.459-.652-1.459-1.459V8.449c0-.807.652-1.459 1.459-1.459h7.556c.807 0 1.459.652 1.459 1.459v7.539z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-dark-purple border-t-[0.5px] border-white/20">
      {/* Section principale */}
      <div className="max-w-7xl mx-auto px-8 md:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/assets/logo-decentra-white.svg"
                alt="Logo Decentra"
                width={120}
                height={120}
                className="mb-4"
              />
              <p className="text-gray-300 text-sm font-mansfield leading-relaxed">
                École spécialisée en développement web et blockchain. Formations
                diplômantes de Bac+2 à Bac+5.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-6">
              <h3 className="text-white font-mansfield font-semibold mb-3">
                Contact
              </h3>
              <a
                href="mailto:contact@decentra.fr"
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-mansfield"
              >
                contact@decentra.fr
              </a>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <h3 className="text-white font-mansfield font-semibold mb-3">
                Suivez-nous
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                    aria-label={`Suivre sur ${social.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Formations */}
          <div>
            <h3 className="text-white font-mansfield font-semibold mb-6">
              Formations
            </h3>
            <ul className="space-y-3">
              {formationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-mansfield hover:underline"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* À propos */}
          <div>
            <h3 className="text-white font-mansfield font-semibold mb-6">
              À propos
            </h3>
            <ul className="space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-mansfield hover:underline"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* En savoir plus */}
          <div>
            <h3 className="text-white font-mansfield font-semibold mb-6">
              En savoir plus
            </h3>
            <ul className="space-y-3 mb-8">
              {moreInfoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-mansfield hover:underline"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Certification Qualiopi */}
            <div className="bg-purple-bento w-fit rounded-lg p-4 border border-gray-600">
              <Image
                src="/assets/qualiopi.svg"
                alt="Certification Qualiopi"
                width={150}
                height={100}
                className="mb-4"
              />
              <a
                href="/pdf/Certificat-Qualiopi.pdf"
                download
                className="inline-flex items-center gap-2 bg-purple hover:bg-purple/80 text-white px-3 py-2 rounded-lg text-xs font-mansfield font-semibold transition-all duration-300"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Télécharger le certificat
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Barre du bas */}
      <div className="border-t border-white/20 ">
        <div className="max-w-7xl mx-auto px-4 md:px-24 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm font-mansfield">
              © {currentYear} Decentra. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/a-propos/mentions-legales"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-mansfield"
              >
                Mentions légales
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                href="/a-propos/cgv"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-mansfield"
              >
                CGV
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                href="/a-propos/politique-confidentialite"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-mansfield"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
