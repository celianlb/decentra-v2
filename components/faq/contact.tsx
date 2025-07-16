"use client";
import Image from "next/image";
import { useContactForm } from "../../hooks/useContactForm";
import ButtonSecondary from "../button/button-secondary";

export default function ContactCTA() {
  const { formData, errors, isSubmitting, updateField, handleSubmit } =
    useContactForm();

  return (
    <div className="flex flex-col gap-8 items-center justify-center bg-purple-bento rounded-4xl p-12 md:w-1/3 z-50 border-[0.5px] border-ultraviolet-800/20">
      <Image
        src="/assets/logo-decentra-white.svg"
        alt="Contact"
        width={200}
        height={100}
      />
      <div className="flex flex-col gap-6 items-center w-full">
        <h3 className="text-white text-[1rem] opacity-60 font-stara tracking-tight max-w-2xl text-center">
          Vous avez des questions ?
        </h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
          <div className="flex flex-col gap-2">
            <div className="relative">
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => updateField("name", e.target.value)}
                className="w-full px-4 py-3 bg-purple-bento/80 backdrop-blur-sm rounded-2xl text-white text-sm placeholder-white/60 border border-ultraviolet-800/30 focus:outline-none focus:ring-2 focus:ring-ultraviolet-700 focus:border-ultraviolet-700 transition-all duration-300 font-mansfield"
                placeholder="Votre nom"
                required
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-ultraviolet-800/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
            {errors.name && (
              <span className="text-red-300 text-xs font-mansfield ml-1">
                {errors.name}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <div className="relative">
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                className="w-full px-4 py-3 bg-purple-bento/80 backdrop-blur-sm rounded-2xl text-white text-sm placeholder-white/60 border border-ultraviolet-800/30 focus:outline-none focus:ring-2 focus:ring-ultraviolet-700 focus:border-ultraviolet-700 transition-all duration-300 font-mansfield"
                placeholder="votre@email.com"
                required
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-ultraviolet-800/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
            {errors.email && (
              <span className="text-red-300 text-xs font-mansfield ml-1">
                {errors.email}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <div className="relative">
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                className="w-full px-4 py-3 bg-purple-bento/80 backdrop-blur-sm rounded-2xl text-white text-sm placeholder-white/60 border border-ultraviolet-800/30 focus:outline-none focus:ring-2 focus:ring-ultraviolet-700 focus:border-ultraviolet-700 transition-all duration-300 font-mansfield"
                placeholder="Votre téléphone (facultatif)"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-ultraviolet-800/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
            {errors.phone && (
              <span className="text-red-300 text-xs font-mansfield ml-1">
                {errors.phone}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <div className="relative">
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => updateField("message", e.target.value)}
                className="w-full px-4 py-3 bg-purple-bento/80 backdrop-blur-sm rounded-2xl text-white text-sm placeholder-white/60 border border-ultraviolet-800/30 focus:outline-none focus:ring focus:ring-ultraviolet-700 focus:border-ultraviolet-700 transition-all duration-300 font-mansfield resize-none"
                placeholder="Votre message..."
                rows={4}
                required
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-ultraviolet-800/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
            {errors.message && (
              <span className="text-red-300 text-xs font-mansfield ml-1">
                {errors.message}
              </span>
            )}
          </div>

          <ButtonSecondary type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
          </ButtonSecondary>
        </form>
      </div>
    </div>
  );
}
