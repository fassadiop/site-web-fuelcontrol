"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#050E18]/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo-fuelControl.jpg"
              alt="FuelControl"
              width={118}
              height={118}
              className="rounded-lg"
              priority
            />
          </div>

          {/* NAV */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-200">
            <a
              href="#solution"
              className="relative hover:text-white transition after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#F59E0B] after:transition-all hover:after:w-full"
            >
              Solution
            </a>

            <a
              href="#about"
              className="relative hover:text-white transition after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#F59E0B] after:transition-all hover:after:w-full"
            >
              À propos
            </a>

            <a
              href="#contact"
              className="relative hover:text-white transition after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#F59E0B] after:transition-all hover:after:w-full"
            >
              Contact
            </a>
          </nav>

          {/* CTA MENU */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="/login"
              className="border border-white/40 text-[#FFFFFF] px-5 py-2 rounded-xl font-semibold hover:bg-white/10 transition"
            >
              Accès plateforme
            </a>

            <a
              href="/partenariat"
              className="px-5 py-2 rounded-lg border border-[#F59E0B]/40 text-[#F59E0B] font-semibold hover:bg-[#F59E0B] hover:text-black transition"
            >
              Partenariat
            </a>
          </div>

        </div>
      </header>

      {/* HERO AVEC IMAGE PREMIUM */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* IMAGE DE FOND */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050E18]/65 via-[#0B1F33]/55 to-[#0B1F33]/25">
          <Image
            src="/hero-fuelcontrol.png"
            alt="FuelControl – Pilotage des réseaux de stations-service"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
          />
        </div>

        {/* OVERLAY DARK PREMIUM */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050E18]/90 via-[#0B1F33]/85 to-[#0B1F33]/40" />

        {/* CONTENU */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-14 items-center">

          {/* TEXTE */}
          <div className="text-white">
            <div className="mt-14 md:mt-120 flex gap-5">
              <button className="bg-[#F59E0B] text-black px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
                <a
                href="#solution"
              >
                Découvrir la solution
              </a>
              </button>

              <button className="border border-white/40 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition">
              <a
              href="/login"
            >
              Déjà client ? Accéder à la plateforme →
            </a>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* WHY */}
      <section className="py-24 bg-gradient-to-b from-white via-[#F5F9FC] to-white">
        <h3 className="text-3xl font-bold text-center mb-12">
          Pourquoi FuelControl ?
        </h3>

        <div className="grid md:grid-cols-4 gap-8 mt-14">
          {[
            {
              title: "Pilotage centralisé",
              desc: "Vision globale de toutes les stations",
              color: "text-[#0F4C75]",
            },
            {
              title: "Suivi financier",
              desc: "Recettes, dépenses et marges en temps réel",
              color: "text-[#F59E0B]",
            },
            {
              title: "Transparence",
              desc: "Traçabilité et contrôle des opérations",
              color: "text-[#0F4C75]",
            },
            {
              title: "Aide à la décision",
              desc: "Indicateurs clés et tableaux de bord",
              color: "text-[#F59E0B]",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`text-sm font-semibold ${item.color} uppercase`}>
                FuelControl
              </div>

              <h4 className="mt-3 text-lg font-bold text-gray-900">
                {item.title}
              </h4>

              <p className="mt-2 text-gray-600 text-sm">
                {item.desc}
              </p>

              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#0F4C75] to-[#F59E0B] rounded-full opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTION */}
      <section id="solution" className="py-20 px-10">
        <h3 className="text-3xl font-bold mb-10">La solution FuelControl</h3>

        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="font-semibold text-lg text-primary">Pilotage opérationnel</h4>
            <p className="mt-2 text-gray-600">
              Suivi des activités quotidiennes, incidents et services.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-primary">Pilotage financier</h4>
            <p className="mt-2 text-gray-600">
              Gestion des recettes, dépenses et états financiers automatisés.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-primary">Reporting & supervision</h4>
            <p className="mt-2 text-gray-600">
              Tableaux de bord décisionnels et comparaisons inter-stations.
            </p>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="relative py-28 bg-gradient-to-br from-[#0B1F33] via-[#0F4C75] to-[#06263A] text-white overflow-hidden">

        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(245,158,11,0.15),transparent_40%)]" />

        <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Partenariats & Collaboration
          </h2>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
            FuelControl est ouvert à des partenariats institutionnels, techniques
            et stratégiques, dans une logique de modernisation, de transparence
            et de bonne gouvernance des réseaux de stations-service.
          </p>

          <div className="grid md:grid-cols-4 gap-8 mt-20">
            {[
              "Autorités de régulation",
              "Réseaux de stations-service",
              "Entreprises énergétiques",
              "Partenaires techniques & financiers",
            ].map((item) => (
              <div
                key={item}
                className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition"
              >
                <div className="text-[#F59E0B] font-extrabold text-xl mb-3">◆</div>
                <p className="text-sm text-gray-200">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <button className="bg-[#F59E0B] text-black px-10 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
            <a
              href="#contact"
            >
              Entrer en contact
            </a>
            </button>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-28 bg-gradient-to-b from-white via-[#F5F9FC] to-white"
      >
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-start">

          {/* TEXTE */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F4C75]">
              Contact & Partenariats
            </h2>

            <p className="mt-6 text-gray-600 max-w-xl">
              Vous êtes une institution, une autorité de régulation, un réseau
              de stations-service ou un partenaire technique ?
              <br /><br />
              FuelControl est ouvert aux collaborations visant la modernisation,
              la transparence et la bonne gouvernance des réseaux de stations-service.
            </p>

            <div className="mt-8 text-sm text-gray-600 space-y-2">
              <p>📧 <strong>Email :</strong> contact@fuelcontrol.sn</p>
              <p>📍 <strong>Pays :</strong> Sénégal</p>
            </div>
          </div>

          {/* FORMULAIRE */}
          <form className="bg-white rounded-3xl shadow-xl p-8 space-y-6 border border-gray-100">

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nom complet
              </label>
              <input
                type="text"
                required
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0F4C75]"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Organisation / Institution
              </label>
              <input
                type="text"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0F4C75]"
                placeholder="Nom de l’organisation"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Adresse email
              </label>
              <input
                type="email"
                required
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0F4C75]"
                placeholder="email@exemple.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={4}
                required
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0F4C75]"
                placeholder="Décrivez votre demande ou proposition de partenariat"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#F59E0B] text-black py-4 rounded-xl font-semibold hover:scale-[1.02] transition shadow-lg"
            >
              Envoyer la demande
            </button>

            <p className="text-xs text-gray-500 text-center">
              Les informations transmises sont utilisées uniquement pour répondre
              à votre demande.
            </p>
          </form>
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
