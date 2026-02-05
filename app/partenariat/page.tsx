"use client";

import Image from "next/image";

export default function PartenariatPage() {
  return (
    <main className="bg-white text-gray-800">

      {/* HERO PARTENARIAT */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050E18] via-[#0B1F33] to-[#06263A]" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-8 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Partenariats & Collaboration
          </h1>

          <p className="mt-6 text-gray-300 max-w-3xl text-lg">
            FuelControl s’inscrit dans une dynamique de collaboration
            avec les institutions publiques, les autorités de régulation,
            les opérateurs énergétiques et les partenaires techniques,
            en vue de la modernisation et de la bonne gouvernance
            des réseaux de stations-service.
          </p>
        </div>
      </section>

      {/* CONTENU */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-20">

          {/* TEXTE INSTITUTIONNEL */}
          <div>
            <h2 className="text-3xl font-extrabold text-[#0F4C75]">
              Une approche partenariale structurée
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              FuelControl est une plateforme digitale de pilotage opérationnel
              et financier des réseaux de stations-service, conçue pour
              répondre aux exigences de transparence, de traçabilité
              et de performance dans le secteur énergétique.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Les partenariats envisagés s’inscrivent dans un cadre
              institutionnel clair, respectant les réglementations
              en vigueur et les standards de sécurité et de gouvernance.
            </p>

            <div className="mt-10 space-y-4 text-gray-700">
              <p>✔️ Partenariats institutionnels et publics</p>
              <p>✔️ Partenariats techniques et technologiques</p>
              <p>✔️ Partenariats stratégiques et opérationnels</p>
            </div>
          </div>

          {/* FORMULAIRE PARTENARIAT */}
          <div className="bg-[#F8FAFC] rounded-3xl p-10 shadow-xl border border-gray-100">

            <h3 className="text-xl font-bold text-[#0F4C75]">
              Demande de partenariat
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              Ce formulaire est destiné aux institutions et organisations
              souhaitant initier une collaboration avec FuelControl.
            </p>

            <form className="mt-8 space-y-6">

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Organisation / Institution
                </label>
                <input
                  type="text"
                  required
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0F4C75]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nom et fonction
                </label>
                <input
                  type="text"
                  required
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0F4C75]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Adresse email professionnelle
                </label>
                <input
                  type="email"
                  required
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0F4C75]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nature de la demande
                </label>
                <textarea
                  rows={4}
                  required
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0F4C75]"
                  placeholder="Partenariat institutionnel, technique, stratégique…"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#F59E0B] text-black py-4 rounded-xl font-semibold hover:scale-[1.02] transition shadow-lg"
              >
                Soumettre la demande
              </button>

              <p className="text-xs text-gray-500 text-center">
                Les informations transmises sont traitées de manière
                confidentielle et utilisées uniquement dans le cadre
                de l’étude de votre demande.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050E18] text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-12">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-extrabold">
              <span className="text-[#0F4C75]">Fuel</span>
              <span className="text-[#F59E0B]">Control</span>
            </h3>

            <p className="mt-4 text-sm text-gray-500 max-w-xs">
              Le contrôle et le pilotage des réseaux de stations-service.
            </p>
          </div>

          {/* NAV */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Accueil</a></li>
              <li><a href="#solution" className="hover:text-white">Solution</a></li>
              <li><a href="/partenariat" className="hover:text-white">Partenariats</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
              Contact
            </h4>
            <p className="mt-4 text-sm">📧 contact@fuelcontrol.sn</p>
            <p className="mt-2 text-sm">📍 Sénégal</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} FuelControl — Tous droits réservés
        </div>
      </footer>

    </main>
  );
}
