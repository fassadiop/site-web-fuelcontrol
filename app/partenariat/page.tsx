"use client";

import Image from "next/image";

export default function PartenariatPage() {
  return (
    <main className="bg-white text-gray-800">

      {/* HERO PARTENARIAT PREMIUM */}
      <section className="relative min-h-[85vh] overflow-hidden flex items-center bg-[#050E18]">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#020817] via-[#07111B] to-[#0B1F33]" />

        {/* LIGHT EFFECTS */}
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-[#0F4C75]/20 blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-[#F59E0B]/10 blur-3xl" />

        {/* GRID */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 py-32 grid lg:grid-cols-[1fr_0.9fr] gap-20 items-center">

          {/* LEFT */}
          <div>

            {/* BADGE */}
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-gray-200 mb-8">
              <div className="h-2 w-2 rounded-full bg-[#F59E0B]" />
              Partenariats stratégiques & collaboration institutionnelle
            </div>

            {/* TITLE */}
            <h1 className="text-4xl md:text-7xl font-black leading-[0.95] text-white max-w-4xl">
              Construire ensemble
              <span className="block text-[#F59E0B]">
                les réseaux énergétiques
              </span>
              de demain
            </h1>

            {/* TEXT */}
            <p className="mt-8 text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
              FuelControl accompagne les opérateurs,
              institutions et partenaires techniques dans
              la transformation digitale, la supervision
              et la gouvernance moderne des réseaux
              de stations-service.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-5">

              <a
                href="#partnership-form"
                className="group inline-flex items-center gap-3 rounded-2xl bg-[#F59E0B] px-5 py-4 font-black text-black hover:scale-105 transition-all duration-300"
              >
                Initier une collaboration

                <span className="group-hover:translate-x-1 transition">
                  →
                </span>
              </a>

              <a
                href="/"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4 font-semibold text-white hover:bg-white/10 transition-all duration-300"
              >
                Retour à la plateforme
              </a>
            </div>

            {/* STATS */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">

              {[
                {
                  value: "Enterprise",
                  label: "Architecture scalable",
                },
                {
                  value: "Temps réel",
                  label: "Supervision continue",
                },
                {
                  value: "Cloud",
                  label: "Infrastructure sécurisée",
                },
                {
                  value: "Multi-sites",
                  label: "Pilotage réseau",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5"
                >

                  <h3 className="text-xl font-black text-[#F59E0B]">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">

            {/* GLOW */}
            <div className="absolute inset-0 bg-[#0F4C75]/20 blur-3xl rounded-full scale-110" />

            {/* MAIN BLOCK */}
            <div className="relative rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden shadow-2xl">

              {/* TOP */}
              <div className="border-b border-white/10 px-5 py-6 flex items-center justify-between">

                <div>

                  <p className="text-sm text-gray-400">
                    FuelControl Ecosystem
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-white">
                    Collaboration stratégique
                  </h3>
                </div>

                <div className="flex items-center gap-3">

                  <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

                  <span className="text-sm text-gray-300">
                    Infrastructure active
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8 space-y-6">

                {[
                  {
                    title: "Institutions & régulation",
                    desc: "Appui à la gouvernance et à la supervision des réseaux énergétiques.",
                  },
                  {
                    title: "Opérateurs & réseaux",
                    desc: "Pilotage multi-sites et centralisation des opérations terrain.",
                  },
                  {
                    title: "Partenaires technologiques",
                    desc: "Interopérabilité, cloud sécurisé et transformation digitale.",
                  },
                  {
                    title: "Partenaires financiers",
                    desc: "Déploiement, accompagnement stratégique et montée en échelle.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-[#09131F]/80 p-6"
                  >

                    <div className="flex items-start justify-between">

                      <div>

                        <h4 className="text-xl font-bold text-white">
                          {item.title}
                        </h4>

                        <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      <div className="h-10 w-10 rounded-2xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B] font-black">
                        +
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* FOOTER */}
              <div className="border-t border-white/10 px-5 py-5 flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="h-2 w-2 rounded-full bg-green-400" />

                  <p className="text-sm text-gray-300">
                    Réseau de collaboration ouvert
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PARTNERSHIP CONTENT PREMIUM */}
      <section
        id="partnership-form"
        className="relative py-24 overflow-hidden bg-gradient-to-b from-[#07111B] via-[#050E18] to-[#020817]"
      >

        {/* LIGHT EFFECTS */}
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-[#0F4C75]/10 blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-[#F59E0B]/10 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-5">

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">

            {/* LEFT SIDE */}
            <div>

              {/* BADGE */}
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-gray-200 mb-8">
                <div className="h-2 w-2 rounded-full bg-[#F59E0B]" />
                Gouvernance • Innovation • Collaboration
              </div>

              {/* TITLE */}
              <h2 className="text-4xl md:text-4xl font-black leading-[1] text-white">
                Une approche partenariale
                <span className="block text-[#F59E0B]">
                  structurée et scalable
                </span>
              </h2>

              {/* TEXT */}
              <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-xl">
                FuelControl développe une infrastructure digitale
                pensée pour accompagner les réseaux énergétiques
                dans la modernisation des opérations,
                la supervision centralisée et la gouvernance
                des activités multi-sites.
              </p>

              {/* FEATURES */}
              <div className="mt-12 space-y-5">

                {[
                  {
                    title: "Transformation digitale",
                    desc: "Modernisation des opérations et centralisation des processus réseau.",
                  },
                  {
                    title: "Pilotage stratégique",
                    desc: "Supervision temps réel et reporting décisionnel avancé.",
                  },
                  {
                    title: "Interopérabilité & cloud",
                    desc: "Architecture moderne compatible avec les environnements enterprise.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
                  >

                    <div className="flex items-start justify-between">

                      <div>

                        <h3 className="text-xl font-bold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      <div className="h-10 w-10 rounded-2xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B] font-black">
                        +
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* ECOSYSTEM */}
              <div className="mt-12">

                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
                  Écosystème FuelControl
                </h3>

                <div className="mt-6 flex flex-wrap gap-4">

                  {[
                    "Régulation",
                    "Réseaux",
                    "Cloud",
                    "Analytics",
                    "Temps réel",
                    "Multi-sites",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-full border border-white/10 bg-[#09131F]/80 px-5 py-3 text-sm text-gray-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FORM SIDE */}
            <div className="relative">

              {/* GLOW */}
              <div className="absolute inset-0 bg-[#0F4C75]/10 blur-3xl rounded-full scale-110" />

              {/* FORM CONTAINER */}
              <div className="relative rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 md:p-10 overflow-hidden">

                {/* HEADER */}
                <div className="mb-10">

                  <h3 className="mt-6 text-3xl font-black text-white">
                    Initier une collaboration
                  </h3>

                  <p className="mt-4 text-gray-400 leading-relaxed">
                    Ce formulaire est destiné aux institutions,
                    opérateurs, partenaires techniques et organisations
                    souhaitant collaborer avec FuelControl.
                  </p>
                </div>

                {/* FORM */}
                <form className="space-y-6">

                  {/* ORGANISATION */}
                  <div>
                    <label className="block text-sm text-gray-300 mb-3">
                      Organisation / Institution
                    </label>

                    <input
                      type="text"
                      required
                      placeholder="Nom de l’organisation"
                      className="w-full rounded-2xl border border-white/10 bg-[#09131F]/80 px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] transition"
                    />
                  </div>

                  {/* NAME */}
                  <div>
                    <label className="block text-sm text-gray-300 mb-3">
                      Nom & fonction
                    </label>

                    <input
                      type="text"
                      required
                      placeholder="Votre nom et fonction"
                      className="w-full rounded-2xl border border-white/10 bg-[#09131F]/80 px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] transition"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="block text-sm text-gray-300 mb-3">
                      Adresse email professionnelle
                    </label>

                    <input
                      type="email"
                      required
                      placeholder="email@organisation.com"
                      className="w-full rounded-2xl border border-white/10 bg-[#09131F]/80 px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] transition"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="block text-sm text-gray-300 mb-3">
                      Nature de la collaboration
                    </label>

                    <textarea
                      rows={5}
                      required
                      placeholder="Décrivez votre besoin, votre projet ou votre proposition de collaboration..."
                      className="w-full rounded-2xl border border-white/10 bg-[#09131F]/80 px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] transition resize-none"
                    />
                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-3 rounded-2xl bg-[#F59E0B] px-5 py-5 font-black text-black hover:scale-[1.02] transition-all duration-300"
                  >
                    Soumettre la demande

                    <span className="group-hover:translate-x-1 transition">
                      →
                    </span>
                  </button>

                  {/* FOOTNOTE */}
                  <p className="text-center text-xs text-gray-500 leading-relaxed">
                    Les informations transmises sont traitées de manière
                    confidentielle et utilisées uniquement dans le cadre
                    des échanges liés à FuelControl.
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050E18] text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-3 gap-12">

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
              <li><a href="/" className="hover:text-white">Accueil</a></li>
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
