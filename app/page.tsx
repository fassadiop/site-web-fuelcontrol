"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          organisation,
          email,
          message,
        }),
      });

      if (response.ok) {
        setSuccess(true);

        setName("");
        setOrganisation("");
        setEmail("");
        setMessage("");
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }

    setLoading(false);
  };

  return (
    <main className="bg-white text-gray-800">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#050E18]/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">

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
          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden flex items-center justify-center h-12 w-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

        </div>
      </header>

      {/* MOBILE MENU PREMIUM */}
      <AnimatePresence>

        {mobileMenuOpen && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#020817]/95 backdrop-blur-2xl"
          >

            {/* LIGHTS */}
            <div className="absolute top-[-200px] left-[-100px] h-[400px] w-[400px] rounded-full bg-[#0F4C75]/20 blur-3xl" />
            <div className="absolute bottom-[-200px] right-[-100px] h-[400px] w-[400px] rounded-full bg-[#F59E0B]/10 blur-3xl" />

            {/* CONTENT */}
            <div className="relative z-10 flex flex-col h-full px-8 py-8">

              {/* TOP */}
              <div className="flex items-center justify-between">

                {/* LOGO */}
                <div className="flex items-center gap-3">

                  <Image
                    src="/logo-fuelControl.jpg"
                    alt="FuelControl"
                    width={90}
                    height={90}
                    className="rounded-lg"
                  />
                </div>

                {/* CLOSE */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="h-12 w-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white"
                >
                  ✕
                </button>
              </div>

              {/* NAVIGATION */}
              <div className="flex-1 flex flex-col justify-center">

                <div className="space-y-8">

                  {[
                    {
                      label: "Solution",
                      href: "#solution",
                    },
                    {
                      label: "Partenariats",
                      href: "/partenariat",
                    },
                    {
                      label: "Contact",
                      href: "#contact",
                    },
                  ].map((item, index) => (

                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.1,
                      }}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-4xl font-black text-white hover:text-[#F59E0B] transition"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-16 flex flex-col gap-5">

                  <a
                    href="/login"
                    className="w-full inline-flex items-center justify-center rounded-2xl bg-[#F59E0B] px-8 py-5 font-black text-black"
                  >
                    Accès plateforme
                  </a>

                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-5 font-semibold text-white"
                  >
                    Demander une démonstration
                  </a>
                </div>
              </div>

              {/* FOOTER */}
              <div className="pt-8 border-t border-white/10">

                <p className="text-sm text-gray-500">
                  FuelControl Enterprise Platform
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO ULTRA PREMIUM */}
      <section className="relative min-h-screen overflow-hidden bg-[#06111C]">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <Image
            src="/hero-fuelcontrol.png"
            alt="FuelControl"
            fill
            priority
            className="object-cover object-center opacity-20"
          />
        </div>

        {/* CINEMATIC OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#020817] via-[#06111C]/95 to-[#0B1F33]/90" />

        {/* LIGHT EFFECTS */}
        <div className="absolute top-[-200px] left-[-100px] h-[500px] w-[500px] rounded-full bg-[#0F4C75]/20 blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-100px] h-[500px] w-[500px] rounded-full bg-[#F59E0B]/10 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 pt-36 pb-24">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >

              {/* BADGE */}
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-gray-200 mb-8">
                <div className="h-2 w-2 rounded-full bg-[#F59E0B]" />
                Plateforme intelligente de supervision énergétique
              </div>

              {/* TITLE */}
              <h1 className="text-4xl md:text-6xl font-black leading-[0.95] text-white max-w-3xl">
                Le pilotage intelligent des réseaux de
                <span className="block text-[#F59E0B]">
                  stations-service
                </span>
              </h1>

              {/* SUBTITLE */}
              <p className="mt-8 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                Centralisez les opérations, le suivi financier,
                les stocks carburant et la supervision multi-sites
                depuis une plateforme enterprise moderne,
                sécurisée et temps réel.
              </p>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-5">

                <a
                  href="#solution"
                  className="group inline-flex items-center gap-3 bg-[#F59E0B] text-black px-5 py-4 rounded-2xl font-bold shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Découvrir la plateforme
                  <span className="group-hover:translate-x-1 transition">
                    →
                  </span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 border border-white/15 bg-white/5 backdrop-blur-md text-white px-5 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Demander une démonstration
                </a>
              </div>

              {/* KPI CHIPS */}
              <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">

                {[
                  "Supervision 24/7",
                  "Multi-stations",
                  "Reporting temps réel",
                  "Pilotage financier",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl px-5 py-4 text-sm text-gray-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT DASHBOARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              className="relative"
            >

              {/* GLOW */}
              <div className="absolute inset-0 bg-[#0F4C75]/20 blur-3xl scale-110 rounded-full" />

              {/* MAIN DASHBOARD */}
              <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[32px] overflow-hidden shadow-2xl">

                {/* TOP BAR */}
                <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">

                  <div>
                    <p className="text-gray-400 text-sm">
                      Organisation
                    </p>

                    <h3 className="text-white font-bold text-lg">
                      FuelControl Network
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">

                    <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

                    <span className="text-sm text-gray-300">
                      Système actif
                    </span>
                  </div>
                </div>

                {/* KPI GRID */}
                <div className="grid grid-cols-2 gap-5 p-6">

                  {[
                    {
                      title: "CA Carburant",
                      value: "18.5M FCFA",
                      sub: "+12%",
                    },
                    {
                      title: "Profit net",
                      value: "4.2M FCFA",
                      sub: "Stable",
                    },
                    {
                      title: "Stations actives",
                      value: "24",
                      sub: "100%",
                    },
                    {
                      title: "Alertes critiques",
                      value: "02",
                      sub: "Surveillance",
                    },
                  ].map((card) => (
                    <div
                      key={card.title}
                      className="rounded-2xl border border-white/10 bg-[#0B1724]/80 p-5"
                    >
                      <p className="text-gray-400 text-sm">
                        {card.title}
                      </p>

                      <h4 className="mt-3 text-2xl font-black text-white">
                        {card.value}
                      </h4>

                      <p className="mt-2 text-sm text-[#F59E0B]">
                        {card.sub}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CHART MOCKUP */}
                <div className="px-6 pb-6">

                  <div className="rounded-3xl border border-white/10 bg-[#09131F] p-6">

                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-white font-semibold">
                        Activité réseau
                      </h4>

                      <span className="text-sm text-green-400">
                        +18.4%
                      </span>
                    </div>

                    {/* BARS */}
                    <div className="flex items-end gap-3 h-44">

                      {[40, 70, 55, 90, 65, 110, 85].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: h }}
                          transition={{ delay: i * 0.1 }}
                          className="flex-1 rounded-t-xl bg-gradient-to-t from-[#0F4C75] to-[#F59E0B]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* FLOATING CARD */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute -bottom-8 -right-10 hidden lg:block bg-[#0B1724]/90 border border-white/10 backdrop-blur-xl rounded-2xl p-5 shadow-2xl"
              >
                <p className="text-gray-400 text-sm">
                  Flux financiers confirmés
                </p>

                <h4 className="text-3xl font-black text-white mt-2">
                  12.8M
                </h4>

                <p className="text-green-400 text-sm mt-2">
                  +8.4% ce mois
                </p>
              </motion.div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* WHY PREMIUM */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#06111C] via-[#081521] to-[#0B1724]">

        {/* LIGHT EFFECTS */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0F4C75]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F59E0B]/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-5">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >

            {/* BADGE */}
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-gray-200 mb-8">
              <div className="h-2 w-2 rounded-full bg-[#F59E0B]" />
              Supervision • Gouvernance • Performance
            </div>

            {/* TITLE */}
            <h2 className="text-4xl md:text-6xl font-black leading-[1] text-white">
              Pourquoi les réseaux choisissent
              <span className="block text-[#F59E0B]">
                FuelControl
              </span>
            </h2>

            {/* SUBTITLE */}
            <p className="mt-8 text-lg text-gray-400 leading-relaxed">
              FuelControl centralise l’exploitation, les finances,
              les opérations terrain et le reporting stratégique
              dans une plateforme unique pensée pour les réseaux
              modernes de stations-service.
            </p>
          </motion.div>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-24">

            {[
              {
                number: "01",
                title: "Pilotage centralisé",
                desc: "Supervisez l’ensemble de vos stations depuis une plateforme unique avec une visibilité temps réel.",
              },
              {
                number: "02",
                title: "Suivi financier avancé",
                desc: "Analysez les recettes, marges, dépenses et performances financières avec précision.",
              },
              {
                number: "03",
                title: "Traçabilité & contrôle",
                desc: "Sécurisez les opérations grâce à des workflows transparents et des validations contrôlées.",
              },
              {
                number: "04",
                title: "Décision stratégique",
                desc: "Exploitez des tableaux de bord intelligents pour accélérer les décisions opérationnelles.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
              >

                {/* GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#0F4C75]/10 to-[#F59E0B]/10" />

                {/* NUMBER */}
                <div className="relative z-10 flex items-center justify-between">

                  <div className="h-14 w-14 rounded-2xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B] font-black text-lg">
                    {item.number}
                  </div>

                  <div className="h-2 w-2 rounded-full bg-[#F59E0B]" />
                </div>

                {/* CONTENT */}
                <div className="relative z-10 mt-8">

                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-gray-400 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>

                {/* LINE */}
                <div className="relative z-10 mt-8 h-[1px] w-full bg-gradient-to-r from-[#F59E0B] to-transparent opacity-40" />

              </motion.div>
            ))}
          </div>

          {/* KPI BAND */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-24"
          >

            <div className="grid md:grid-cols-4 gap-6">

              {[
                {
                  value: "24/7",
                  label: "Supervision continue",
                },
                {
                  value: "100%",
                  label: "Centralisation réseau",
                },
                {
                  value: "Temps réel",
                  label: "Synchronisation des données",
                },
                {
                  value: "Multi-sites",
                  label: "Gestion des réseaux",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-[#0B1724]/80 backdrop-blur-xl p-8 text-center"
                >

                  <h3 className="text-4xl font-black text-[#F59E0B]">
                    {item.value}
                  </h3>

                  <p className="mt-3 text-sm text-gray-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* SOLUTION ARCHITECTURE */}
      <section
        id="solution"
        className="relative py-32 overflow-hidden bg-gradient-to-b from-[#081521] via-[#050E18] to-[#07111B]"
      >

        {/* LIGHTS */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0F4C75]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F59E0B]/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-5">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >

            {/* BADGE */}
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-gray-200 mb-8">
              <div className="h-2 w-2 rounded-full bg-[#F59E0B]" />
              Architecture plateforme intelligente
            </div>

            {/* TITLE */}
            <h2 className="text-4xl md:text-6xl font-black leading-[1] text-white">
              Un écosystème unifié pour
              <span className="block text-[#F59E0B]">
                piloter l’ensemble du réseau
              </span>
            </h2>

            {/* TEXT */}
            <p className="mt-8 text-lg text-gray-400 leading-relaxed">
              FuelControl connecte les opérations terrain,
              les finances, les stocks, le reporting
              et la supervision stratégique dans une plateforme
              centralisée pensée pour les réseaux modernes
              de stations-service.
            </p>
          </motion.div>

          {/* PLATFORM MAP */}
          <div className="relative mt-28">

            {/* MODULES */}
            <div className="mt-20 grid md:grid-cols-2 xl:grid-cols-4 gap-8">

              {[
                {
                  title: "Exploitation",
                  desc: "Gestion des opérations quotidiennes et activités stations.",
                },
                {
                  title: "Finances",
                  desc: "Suivi des recettes, dépenses, marges et validations.",
                },
                {
                  title: "Stocks",
                  desc: "Contrôle intelligent des carburants et niveaux critiques.",
                },
                {
                  title: "Reporting",
                  desc: "Tableaux de bord décisionnels et supervision stratégique.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 overflow-hidden"
                >

                  {/* HOVER GLOW */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#0F4C75]/10 to-[#F59E0B]/10" />

                  <div className="relative z-10">

                    {/* ICON */}
                    <div className="h-14 w-14 rounded-2xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B] font-black text-lg">
                      {index + 1}
                    </div>

                    {/* TITLE */}
                    <h3 className="mt-8 text-2xl font-bold text-white">
                      {item.title}
                    </h3>

                    {/* DESC */}
                    <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>

                    {/* LINE */}
                    <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-[#F59E0B] to-transparent opacity-40" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* INFRASTRUCTURE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-28"
          >

            <div className="grid md:grid-cols-5 gap-6">

              {[
                "Cloud sécurisé",
                "Temps réel",
                "Multi-sites",
                "Architecture scalable",
                "Analytics & supervision",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/10 bg-[#09131F] p-6 text-center text-gray-300 text-sm font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* PARTNERS & ECOSYSTEM */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#07111B] via-[#081521] to-[#050E18]">

        {/* LIGHTS */}
        <div className="absolute top-[-200px] left-[-200px] h-[500px] w-[500px] rounded-full bg-[#0F4C75]/10 blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-[#F59E0B]/10 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-5">

          {/* TOP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >

            {/* BADGE */}
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-gray-200 mb-8">
              <div className="h-2 w-2 rounded-full bg-[#F59E0B]" />
              Écosystème • Gouvernance • Collaboration
            </div>

            {/* TITLE */}
            <h2 className="text-4xl md:text-6xl font-black leading-[1] text-white">
              Une plateforme conçue pour les
              <span className="block text-[#F59E0B]">
                réseaux énergétiques modernes
              </span>
            </h2>

            {/* TEXT */}
            <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-3xl">
              FuelControl favorise une gouvernance moderne,
              la transparence opérationnelle et la supervision
              centralisée des réseaux de stations-service grâce
              à une architecture pensée pour les acteurs institutionnels
              et les opérateurs énergétiques.
            </p>
          </motion.div>

          {/* MAIN BLOCK */}
          <div className="mt-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">

            {/* LEFT BIG BLOCK */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 md:p-10"
            >

              {/* GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C75]/10 to-[#F59E0B]/10" />

              <div className="relative z-10">

                {/* MINI LABEL */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/20 bg-[#F59E0B]/10 px-4 py-2 text-sm text-[#F59E0B]">
                  Infrastructure stratégique
                </div>

                {/* TITLE */}
                <h3 className="mt-8 text-4xl font-black leading-tight text-white">
                  Accélérez la transformation digitale
                  des réseaux de stations-service
                </h3>

                {/* TEXT */}
                <p className="mt-8 text-gray-400 leading-relaxed max-w-2xl">
                  FuelControl accompagne les opérateurs,
                  réseaux de distribution, partenaires techniques
                  et structures de supervision dans la modernisation
                  du pilotage opérationnel, financier et stratégique.
                </p>

                {/* FEATURES */}
                <div className="mt-10 grid md:grid-cols-2 gap-5">

                  {[
                    "Supervision centralisée",
                    "Gouvernance opérationnelle",
                    "Traçabilité des opérations",
                    "Reporting stratégique",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-[#09131F]/80 px-5 py-4 text-sm text-gray-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-12">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-3 rounded-2xl bg-[#F59E0B] px-5 py-4 font-bold text-black hover:scale-105 transition-all duration-300"
                  >
                    Échanger avec notre équipe
                    <span>→</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE */}
            <div className="space-y-6">

              {[
                {
                  title: "Autorités & régulation",
                  desc: "Appui à la supervision et à la gouvernance des réseaux énergétiques.",
                },
                {
                  title: "Réseaux de stations-service",
                  desc: "Centralisation des opérations et pilotage multi-sites intelligent.",
                },
                {
                  title: "Partenaires techniques",
                  desc: "Interopérabilité, infrastructure cloud et intégration digitale.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    x: 6,
                  }}
                  className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
                >

                  {/* TOP */}
                  <div className="flex items-start justify-between">

                    <div>

                      <h3 className="text-2xl font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="h-12 w-12 rounded-2xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B] font-black">
                      +
                    </div>
                  </div>

                  {/* LINE */}
                  <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-[#F59E0B] to-transparent opacity-40" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* ECOSYSTEM BAND */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-28"
          >

            <div className="rounded-[36px] border border-white/10 bg-gradient-to-r from-[#0B1724] to-[#09131F] p-6 md:p-10 overflow-hidden relative">

              {/* GLOW */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C75]/10 to-[#F59E0B]/10" />

              <div className="relative z-10 grid md:grid-cols-4 gap-8">

                {[
                  {
                    value: "Enterprise",
                    label: "Architecture scalable",
                  },
                  {
                    value: "Cloud",
                    label: "Infrastructure sécurisée",
                  },
                  {
                    value: "Temps réel",
                    label: "Synchronisation continue",
                  },
                  {
                    value: "Multi-sites",
                    label: "Pilotage réseau",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="text-center"
                  >

                    <h3 className="text-3xl font-black text-[#F59E0B]">
                      {item.value}
                    </h3>

                    <p className="mt-3 text-sm text-gray-400">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* CONTACT PREMIUM */}
      <section
        id="contact"
        className="relative py-24 overflow-hidden bg-gradient-to-b from-[#050E18] via-[#07111B] to-[#020817]"
      >

        {/* LIGHTS */}
        <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-[#0F4C75]/10 blur-3xl" />
        <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-[#F59E0B]/10 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-5">

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >

              {/* BADGE */}
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-gray-200 mb-8">
                <div className="h-2 w-2 rounded-full bg-[#F59E0B]" />
                Contact • Démonstration • Collaboration
              </div>

              {/* TITLE */}
              <h2 className="text-4xl md:text-6xl font-black leading-[1] text-white">
                Construisons ensemble
                <span className="block text-[#F59E0B]">
                  la nouvelle génération
                </span>
                des réseaux énergétiques
              </h2>

              {/* TEXT */}
              <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-xl">
                FuelControl accompagne les opérateurs,
                institutions et réseaux de stations-service
                dans la modernisation du pilotage opérationnel,
                financier et stratégique.
              </p>

              {/* CONTACT INFO */}
              <div className="mt-12 space-y-5">

                {[
                  {
                    title: "Collaboration institutionnelle",
                    desc: "Accompagnement des réseaux et structures de supervision.",
                  },
                  {
                    title: "Démonstration plateforme",
                    desc: "Présentation complète des fonctionnalités FuelControl.",
                  },
                  {
                    title: "Déploiement multi-sites",
                    desc: "Architecture adaptée aux réseaux à grande échelle.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
                  >

                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* CONTACT DETAILS */}
              <div className="mt-10 flex flex-col gap-3 text-sm text-gray-400">

                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#F59E0B]" />
                  contact@fuelcontrol.sn
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#F59E0B]" />
                  Sénégal
                </div>
              </div>
            </motion.div>

            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >

              {/* GLOW */}
              <div className="absolute inset-0 bg-[#0F4C75]/10 blur-3xl rounded-full scale-110" />

              {/* FORM CONTAINER */}
              <div className="relative rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 md:p-10 overflow-hidden">

                {/* HEADER */}
                <div className="mb-10">

                  <h3 className="mt-6 text-3xl font-black text-white">
                    Entrer en contact
                  </h3>

                  <p className="mt-4 text-gray-400">
                    Décrivez votre besoin, votre organisation
                    ou votre projet de déploiement.
                  </p>
                </div>

                {/* FORM */}
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >

                  {/* NAME */}
                  <div>
                    <label className="block text-sm text-gray-300 mb-3">
                      Nom complet
                    </label>

                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Votre nom"
                      className="w-full rounded-2xl border border-white/10 bg-[#09131F]/80 px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] transition"
                    />
                  </div>

                  {/* ORGANISATION */}
                  <div>
                    <label className="block text-sm text-gray-300 mb-3">
                      Organisation / Institution
                    </label>

                    <input
                      type="text"
                      value={organisation}
                      onChange={(e) => setOrganisation(e.target.value)}
                      placeholder="Nom de l’organisation"
                      className="w-full rounded-2xl border border-white/10 bg-[#09131F]/80 px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] transition"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="block text-sm text-gray-300 mb-3">
                      Adresse email
                    </label>

                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="email@organisation.com"
                      className="w-full rounded-2xl border border-white/10 bg-[#09131F]/80 px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] transition"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="block text-sm text-gray-300 mb-3">
                      Message
                    </label>

                    <textarea
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      placeholder="Décrivez votre besoin ou votre projet..."
                      className="w-full rounded-2xl border border-white/10 bg-[#09131F]/80 px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] transition resize-none"
                    />
                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-3 rounded-2xl bg-[#F59E0B] px-5 py-5 font-black text-black hover:scale-[1.02] transition-all duration-300"
                  >
                    {loading ? "Envoi en cours..." : "Envoyer la demande"}

                    <span className="group-hover:translate-x-1 transition">
                      →
                    </span>
                  </button>

                  {success && (
                    <div className="rounded-2xl border border-green-500/20 bg-green-500/10 px-5 py-4 text-sm text-green-400">
                      Votre demande a bien été envoyée.
                    </div>
                  )}

                  {error && (
                    <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-4 text-sm text-red-400">
                      Une erreur est survenue. Veuillez réessayer.
                    </div>
                  )}

                  {/* FOOTNOTE */}
                  <p className="text-center text-xs text-gray-500 leading-relaxed">
                    Les informations transmises sont utilisées uniquement
                    dans le cadre des échanges liés à FuelControl.
                  </p>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

       {/* FOOTER ULTRA PREMIUM */}
                <footer className="relative overflow-hidden bg-[#020817] text-white">

                  {/* TOP GLOW */}
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F59E0B]/40 to-transparent" />

                  {/* LIGHT EFFECTS */}
                  <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-[#0F4C75]/10 blur-3xl" />
                  <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-[#F59E0B]/10 blur-3xl" />

                  <div className="relative z-10 max-w-7xl mx-auto px-5 pt-28 pb-12">

                    {/* MAIN GRID */}
                    <div className="grid lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] gap-14">

                      {/* BRAND */}
                      <div>

                        {/* LOGO */}
                        <div className="flex items-center gap-4">

                          <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#0F4C75] to-[#F59E0B] flex items-center justify-center text-white font-black text-xl shadow-2xl">
                            FC
                          </div>

                          <div>
                            <h3 className="text-3xl font-black leading-none">
                              FuelControl
                            </h3>

                            <p className="mt-2 text-sm text-gray-500">
                              Enterprise Platform
                            </p>
                          </div>
                        </div>

                        {/* DESCRIPTION */}
                        <p className="mt-8 text-gray-400 leading-relaxed max-w-md">
                          Infrastructure digitale de supervision
                          opérationnelle et financière des réseaux
                          de stations-service.
                        </p>

                        {/* STATUS */}
                        <div className="mt-8 flex flex-wrap gap-4">

                          {[
                            "Temps réel",
                            "Cloud sécurisé",
                            "Multi-sites",
                            "Enterprise Ready",
                          ].map((item) => (
                            <div
                              key={item}
                              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-xl"
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* NAVIGATION */}
                      <div>

                        <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
                          Navigation
                        </h4>

                        <ul className="mt-8 space-y-4">

                          {[
                            {
                              label: "Accueil",
                              href: "/",
                            },
                            {
                              label: "Solution",
                              href: "#solution",
                            },
                            {
                              label: "Partenariats",
                              href: "/partenariat",
                            },
                            {
                              label: "Contact",
                              href: "#contact",
                            },
                          ].map((item) => (
                            <li key={item.label}>
                              <a
                                href={item.href}
                                className="text-gray-300 hover:text-white transition"
                              >
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* PLATFORM */}
                      <div>

                        <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
                          Plateforme
                        </h4>

                        <ul className="mt-8 space-y-4 text-gray-300">

                          <li>Supervision réseau</li>
                          <li>Pilotage financier</li>
                          <li>Gestion des stocks</li>
                          <li>Reporting stratégique</li>
                        </ul>
                      </div>

                      {/* CONTACT */}
                      <div>

                        <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
                          Contact
                        </h4>

                        <div className="mt-8 space-y-5">

                          <div>
                            <p className="text-sm text-gray-500">
                              Email
                            </p>

                            <p className="mt-2 text-gray-300">
                              contact@fuelcontrol.sn
                            </p>
                          </div>

                          <div>
                            <p className="text-sm text-gray-500">
                              Localisation
                            </p>

                            <p className="mt-2 text-gray-300">
                              Sénégal
                            </p>
                          </div>

                          <div>
                            <p className="text-sm text-gray-500">
                              Disponibilité
                            </p>

                            <div className="mt-3 flex items-center gap-3">

                              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

                              <span className="text-sm text-gray-300">
                                Infrastructure opérationnelle
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* BOTTOM */}
                    <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">

                      {/* COPYRIGHT */}
                      <p className="text-sm text-gray-500 text-center md:text-left">
                        © {new Date().getFullYear()} FuelControl —
                        Tous droits réservés.
                      </p>

                      {/* TAGLINE */}
                      <p className="text-sm text-gray-600 text-center">
                        A product by SYNERA.
                      </p>
                    </div>
                  </div>
                </footer>

    </main>
  );
}
