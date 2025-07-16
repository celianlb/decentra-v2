"use client";

import { useState } from "react";
import ButtonSecondary from "../button/button-secondary";
import Logo from "../UI/logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    "Les formations",
    "La scolarité",
    "L'alternance",
    "Pourquoi Decentra ?",
  ];

  return (
    <header className="flex justify-between items-center px-4 md:px-24 py-6 border-b border-gray-700 relative">
      <Logo />

      {/* Navigation desktop */}
      <nav className="hidden md:block">
        <ul className="flex gap-4 font-mansfield font-semibold">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-gray-300 transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* Bouton desktop */}
      <div className="hidden md:block">
        <ButtonSecondary>Contactez-nous</ButtonSecondary>
      </div>

      {/* Burger menu button */}
      <button
        className="md:hidden flex flex-col gap-1 p-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isMenuOpen}
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark border-b border-gray-700 z-50">
          <nav className="px-4 py-4">
            <ul className="flex flex-col gap-4 font-mansfield font-semibold">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-gray-300 transition-colors py-2 border-b border-gray-800 last:border-b-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-800">
              <ButtonSecondary>Contactez-nous</ButtonSecondary>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
