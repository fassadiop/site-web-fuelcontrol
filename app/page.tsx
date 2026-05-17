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
    } finally {

      setLoading(false);
    }
  };

  return (
    <main className="bg-white text-gray-800">
      
      {/* HEADER PREMIUM */}
      <header className="fixed top-0 left-0 w-full z-50">

        <div className="mx-auto max-w-7xl px-5 pt-5">

          <div
            className="
              flex items-center justify-between
              rounded-2xl
              border border-slate-200/80
              bg-white/80
              backdrop-blur-xl
              shadow-[0_8px_30px_rgba(15,23,42,0.06)]
              px-6 py-4
            "
          >

            {/* LOGO */}
            <div className="flex items-center gap-4">

              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-1">
                <Image
                  src="/logo-fuelControl.jpg"
                  alt="FuelControl"
                  width={52}
                  height={52}
                  className="rounded-xl"
                  priority
                />
              </div>

              <div>
                <h1 className="text-lg font-black tracking-tight text-slate-900">
                  FuelControl
                </h1>

                <p className="text-xs font-medium text-slate-500">
                  ERP SaaS Stations-Service
                </p>
              </div>
            </div>

            {/* NAVIGATION */}
            <nav className="hidden lg:flex items-center gap-10">

              <a
                href="#solution"
                className="
                  text-sm font-semibold text-slate-600
                  transition hover:text-[#F97316]
                "
              >
                Solution
              </a>

              <a
                href="#modules"
                className="
                  text-sm font-semibold text-slate-600
                  transition hover:text-[#F97316]
                "
              >
                Modules
              </a>

              <a
                href="#analytics"
                className="
                  text-sm font-semibold text-slate-600
                  transition hover:text-[#F97316]
                "
              >
                Analytics
              </a>

              <a
                href="#architecture"
                className="
                  text-sm font-semibold text-slate-600
                  transition hover:text-[#F97316]
                "
              >
                Architecture
              </a>

              <a
                href="#contact"
                className="
                  text-sm font-semibold text-slate-600
                  transition hover:text-[#F97316]
                "
              >
                Contact
              </a>
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">

              <a
                href="/login"
                className="
                  rounded-xl
                  border border-slate-200
                  bg-white
                  px-5 py-3
                  text-sm font-semibold
                  text-slate-700
                  transition
                  hover:border-slate-300
                  hover:bg-slate-100
                "
              >
                Accès plateforme
              </a>

              <a
                href="#contact"
                className="
                  rounded-xl
                  bg-[#F97316]
                  px-5 py-3
                  text-sm font-bold
                  text-slate-900
                  shadow-lg shadow-orange-500/20
                  transition-all
                  hover:-translate-y-[1px]
                  hover:bg-[#EA580C]
                "
              >
                Demander une démo
              </a>
            </div>

            {/* MOBILE MENU */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="
                flex lg:hidden
                items-center justify-center
                rounded-xl
                border border-slate-200
                bg-white
                p-3
                text-slate-700
              "
            >
              ☰
            </button>
          </div>
        </div>
      </header>
      

      {/* MOBILE MENU PREMIUM */}
      <AnimatePresence>

        {mobileMenuOpen && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] text-white backdrop-blur-2xl"
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
                  className="h-12 w-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-slate-900"
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
                      label: "Modules",
                      href: "#modules",
                    },
                    {
                      label: "Analytics",
                      href: "#analytics",
                    },
                    {
                      label: "Architecture",
                      href: "#architecture",
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
                      className="block text-4xl font-black text-slate-900 hover:text-[#F59E0B] transition"
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
                    className="w-full inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-5 font-semibold text-slate-900"
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

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-40 pb-28">

        {/* LIGHT GRADIENTS */}
        <div className="absolute inset-0 hero-gradient" />

        {/* GRID */}
        <div className="absolute inset-0 grid-background opacity-40" />

        {/* ORANGE BLUR */}
        <div className="absolute top-[-120px] left-[-120px] h-[350px] w-[350px] rounded-full bg-orange-500/10 blur-3xl" />

        {/* BLUE BLUR */}
        <div className="absolute bottom-[-120px] right-[-120px] h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-20 px-5 lg:grid-cols-[1fr_0.95fr]">

          {/* LEFT CONTENT */}
          <div>

            {/* BADGE */}
            <div
              className="
                inline-flex items-center gap-3
                rounded-full
                border border-orange-200
                bg-orange-50
                px-5 py-2
                text-sm font-semibold text-orange-700
              "
            >
              <div className="h-2 w-2 rounded-full bg-orange-500" />

              ERP SaaS nouvelle génération pour réseaux de stations-service
            </div>

            {/* TITLE */}
            <h1
              className="
                mt-8
                max-w-5xl
                text-4xl md:text-5xl lg:text-6xl
                font-black
                leading-[0.95]
                tracking-[-0.05em]
                text-slate-900
                md:text-7xl
              "
            >
              Pilotage
              <span className="block text-[#F97316]">
                intelligent
              </span>
              des réseaux de
              <span className="block">
               stations-service
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-relaxed
                text-slate-600
                md:text-xl
              "
            >
              FuelControl centralise l’exploitation,
              les ventes carburant, les relais,
              les dépôtages, les finances,
              les dashboards analytiques
              et la supervision multi-stations
              dans une plateforme SaaS industrielle unique.
            </p>

            {/* STATS */}
            <div className="mt-10 flex flex-wrap gap-8">

              <div>
                <div className="text-3xl font-black text-slate-900">
                  Multi
                </div>

                <div className="text-sm font-medium text-slate-500">
                  Stations
                </div>
              </div>

              <div>
                <div className="text-3xl font-black text-slate-900">
                  Temps réel
                </div>

                <div className="text-sm font-medium text-slate-500">
                  Analytics & supervision
                </div>
              </div>

              <div>
                <div className="text-3xl font-black text-slate-900">
                  Audit-ready
                </div>

                <div className="text-sm font-medium text-slate-500">
                  Traçabilité complète
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-wrap gap-5">

              <a
                href="#contact"
                className="
                  inline-flex items-center gap-3
                  rounded-2xl
                  bg-[#F97316]
                  px-7 py-5
                  text-lg font-bold text-slate-900
                  shadow-xl shadow-orange-500/20
                  transition-all
                  hover:-translate-y-1
                  hover:bg-[#EA580C]
                "
              >
                Demander une démo

                <span>→</span>
              </a>

              <a
                href="#solution"
                className="
                  inline-flex items-center gap-3
                  rounded-2xl
                  border border-slate-200
                  bg-white
                  px-7 py-5
                  text-lg font-semibold text-slate-700
                  transition-all
                  hover:border-slate-300
                  hover:bg-slate-100
                "
              >
                Découvrir la plateforme
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">

            {/* MAIN DASHBOARD CARD */}
            <div
              className="
                premium-card
                relative
                overflow-hidden
                rounded-[32px]
                border border-slate-200
                bg-white
                p-6
              "
            >

              {/* TOP */}
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    Dashboard Réseau
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-slate-900">
                    Supervision nationale
                  </h3>
                </div>

                <div
                  className="
                    rounded-2xl
                    bg-orange-100
                    px-4 py-2
                    text-sm font-bold text-orange-700
                  "
                >
                  Temps réel
                </div>
              </div>

              {/* CHART AREA */}
              <div
                className="
                  mt-8
                  rounded-3xl
                  bg-gradient-to-br
                  from-slate-50
                  to-slate-100
                  p-6
                "
              >

                {/* GRAPH */}
                <div className="flex h-56 items-end gap-4">

                  <div className="w-full rounded-t-3xl bg-[#F97316] h-[45%]" />
                  <div className="w-full rounded-t-3xl bg-[#FB923C] h-[60%]" />
                  <div className="w-full rounded-t-3xl bg-[#FDBA74] h-[75%]" />
                  <div className="w-full rounded-t-3xl bg-[#2563EB] h-[88%]" />
                  <div className="w-full rounded-t-3xl bg-[#1D4ED8] h-[95%]" />
                </div>

                {/* STATS */}
                <div className="mt-8 grid grid-cols-2 gap-5">

                  <div className="rounded-2xl bg-white p-5">
                    <p className="text-sm font-medium text-slate-500">
                      Volume carburant
                    </p>

                    <h4 className="mt-2 text-2xl font-black text-slate-900">
                      2.4M L
                    </h4>
                  </div>

                  <div className="rounded-2xl bg-white p-5">
                    <p className="text-sm font-medium text-slate-500">
                      Stations actives
                    </p>

                    <h4 className="mt-2 text-2xl font-black text-slate-900">
                      128
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING CARD */}
            <div
              className="
                absolute
                -bottom-15
                -left-30
                hidden
                rounded-3xl
                border border-slate-200
                bg-white
                p-5
                shadow-2xl
                lg:block
              "
            >
              <p className="text-sm font-semibold text-slate-500">
                Stock exploitable
              </p>

              <h4 className="mt-2 text-3xl font-black text-slate-900">
                94%
              </h4>

              <div className="mt-3 h-3 w-40 rounded-full bg-slate-100">
                <div className="h-3 w-[94%] rounded-full bg-[#F97316]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODULES SECTION */}
      <section
        id="modules"
        className="
          relative
          overflow-hidden
          bg-slate-100
          py-32
        "
      >

        <div className="section-container">

          {/* HEADER */}
          <div className="max-w-4xl">

            <div
              className="
                inline-flex items-center gap-3
                rounded-full
                border border-blue-100
                bg-blue-50
                px-5 py-2
                text-sm font-semibold text-blue-700
              "
            >
              <div className="h-2 w-2 rounded-full bg-blue-500" />

              Architecture modulaire enterprise
            </div>

            <h2
              className="
                mt-8
                text-4xl
                font-black
                leading-tight
                tracking-[-0.04em]
                text-slate-900
                md:text-6xl
              "
            >
              Une plateforme complète
              <span className="block text-[#2563EB]">
                pensée pour les réseaux
                énergétiques modernes
              </span>
            </h2>

            <p
              className="
                mt-8
                max-w-3xl
                text-lg
                leading-relaxed
                text-slate-600
              "
            >
              FuelControl centralise les opérations,
              le pilotage carburant,
              les workflows métier,
              les finances,
              les dashboards analytiques
              et la supervision multi-stations
              dans une seule architecture SaaS.
            </p>
          </div>

          {/* MODULE GRID */}
          <div className="mt-20 grid gap-8 lg:grid-cols-3">

            {/* CARD 1 */}
            <div className="premium-card p-8">

              <div
                className="
                  flex h-16 w-16 items-center justify-center
                  rounded-2xl
                  bg-orange-100
                  text-3xl
                "
              >
                ⛽
              </div>

              <h3 className="mt-8 text-2xl font-black text-slate-900">
                Gestion Carburant
              </h3>

              <p className="mt-5 text-slate-600 leading-relaxed">
                Gestion complète des ventes carburant,
                des pompes,
                des index,
                des cuves,
                des volumes
                et des mouvements stock.
              </p>

              <ul className="mt-8 space-y-4">

                <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <div className="h-2 w-2 rounded-full bg-orange-500" />
                  Gestion pompes & îlots
                </li>

                <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <div className="h-2 w-2 rounded-full bg-orange-500" />
                  Stock exploitable temps réel
                </li>

                <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <div className="h-2 w-2 rounded-full bg-orange-500" />
                  Gestion cuves industrielles
                </li>
              </ul>
            </div>

            {/* CARD 2 */}
            <div className="premium-card p-8">

              <div
                className="
                  flex h-16 w-16 items-center justify-center
                  rounded-2xl
                  bg-blue-100
                  text-3xl
                "
              >
                📊
              </div>

              <h3 className="mt-8 text-2xl font-black text-slate-900">
                Dashboards & Analytics
              </h3>

              <p className="mt-5 text-slate-600 leading-relaxed">
                Supervision réseau,
                KPI temps réel,
                volumes carburant,
                marges,
                autonomie stock
                et performance multi-stations.
              </p>

              <ul className="mt-8 space-y-4">

                <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  KPI réseau consolidés
                </li>

                <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  Health score stations
                </li>

                <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  Reporting temps réel
                </li>
              </ul>
            </div>

            {/* CARD 3 */}
            <div className="premium-card p-8">

              <div
                className="
                  flex h-16 w-16 items-center justify-center
                  rounded-2xl
                  bg-slate-100
                  text-3xl
                "
              >
                🏦
              </div>

              <h3 className="mt-8 text-2xl font-black text-slate-900">
                Finances & Audit
              </h3>

              <p className="mt-5 text-slate-600 leading-relaxed">
                Consolidation automatique,
                rapprochements caisse,
                workflows validés,
                traçabilité complète
                et architecture audit-ready.
              </p>

              <ul className="mt-8 space-y-4">

                <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <div className="h-2 w-2 rounded-full bg-slate-700" />
                  Flux STATION → FINANCES
                </li>

                <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <div className="h-2 w-2 rounded-full bg-slate-700" />
                  Validation & verrouillage
                </li>

                <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <div className="h-2 w-2 rounded-full bg-slate-700" />
                  Journalisation complète
                </li>
              </ul>
            </div>
          </div>

          {/* BOTTOM GRID */}
          <div className="mt-8 grid gap-8 lg:grid-cols-2">

            {/* LEFT */}
            <div className="premium-card overflow-hidden p-10">

              <div className="flex items-start justify-between gap-10">

                <div>
                  <div
                    className="
                      flex h-16 w-16 items-center justify-center
                      rounded-2xl
                      bg-orange-100
                      text-3xl
                    "
                  >
                    🚛
                  </div>

                  <h3 className="mt-8 text-3xl font-black text-slate-900">
                    Dépôtage industriel
                  </h3>

                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
                    Gestion avancée des approvisionnements,
                    contrôles physiques,
                    variations cuves,
                    transporteurs,
                    écarts dépôtage
                    et application stock automatique.
                  </p>
                </div>

                <div
                  className="
                    hidden
                    rounded-2xl
                    bg-orange-50
                    px-5 py-3
                    text-sm font-bold text-orange-700
                    lg:block
                  "
                >
                  Processus industriel
                </div>
              </div>

              {/* MINI STATS */}
              <div className="mt-10 grid grid-cols-3 gap-5">

                <div className="rounded-2xl bg-slate-100 p-5">
                  <p className="text-sm text-slate-500">
                    Contrôle
                  </p>

                  <h4 className="mt-2 text-xl font-black text-slate-900">
                    Jauge
                  </h4>
                </div>

                <div className="rounded-2xl bg-slate-100 p-5">
                  <p className="text-sm text-slate-500">
                    Gestion
                  </p>

                  <h4 className="mt-2 text-xl font-black text-slate-900">
                    Camions
                  </h4>
                </div>

                <div className="rounded-2xl bg-slate-100 p-5">
                  <p className="text-sm text-slate-500">
                    Validation
                  </p>

                  <h4 className="mt-2 text-xl font-black text-slate-900">
                    Temps réel
                  </h4>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="premium-card overflow-hidden bg-slate-100 p-10">

              <div
                className="
                  inline-flex items-center gap-3
                  rounded-full
                  bg-white/10
                  px-5 py-2
                  text-sm font-semibold text-slate-900
                "
              >
                Multi-tenant Enterprise
              </div>

              <h3 className="mt-8 text-4xl font-black leading-tight text-slate-900">
                Gouvernance
                <span className="block text-[#F97316]">
                  multi-stations
                </span>
              </h3>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                FuelControl intègre une architecture
                RBAC avancée,
                une isolation multi-tenant stricte
                et des workflows sécurisés
                adaptés aux groupes énergétiques.
              </p>

              {/* ROLES */}
              <div className="mt-10 flex flex-wrap gap-4">

                {[
                  "SUPERADMIN",
                  "GERANT",
                  "SUPERVISEUR",
                  "POMPISTE",
                ].map((role) => (
                  <div
                    key={role}
                    className="
                      rounded-xl
                      border border-white/10
                      bg-white/5
                      px-4 py-3
                      text-sm font-semibold text-slate-900
                    "
                  >
                    {role}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE SECTION */}
      <section
        id="architecture"
        className="
          relative
          overflow-hidden
          bg-white
          py-32
        "
      >

        {/* BACKGROUND */}
        <div className="absolute inset-0 hero-gradient opacity-40" />

        <div className="section-container relative z-10">

          {/* HEADER */}
          <div className="max-w-4xl">

            <div
              className="
                inline-flex items-center gap-3
                rounded-full
                border border-orange-100
                bg-orange-50
                px-5 py-2
                text-sm font-semibold text-orange-700
              "
            >
              <div className="h-2 w-2 rounded-full bg-orange-500" />

              Architecture métier & workflows industriels
            </div>

            <h2
              className="
                mt-8
                text-4xl
                font-black
                leading-tight
                tracking-[-0.04em]
                text-slate-900
                md:text-6xl
              "
            >
              Une architecture
              <span className="block text-[#F97316]">
                pensée pour la traçabilité,
                l’audit et la supervision
              </span>
            </h2>

            <p
              className="
                mt-8
                max-w-3xl
                text-lg
                leading-relaxed
                text-slate-600
              "
            >
              FuelControl applique une séparation stricte
              entre les faits métier terrain
              et les flux financiers consolidés,
              garantissant cohérence,
              auditabilité
              et supervision temps réel.
            </p>
          </div>

          {/* WORKFLOW */}
          <div className="mt-24">

            <div
              className="
                premium-card
                overflow-hidden
                rounded-[32px]
                p-10 md:p-16
              "
            >

              {/* TOP */}
              <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

                <div>

                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
                    Workflow STATION → FINANCES
                  </p>

                  <h3 className="mt-4 text-4xl font-black leading-tight text-slate-900">
                    De l’exploitation terrain
                    à la consolidation financière
                  </h3>
                </div>

                <div
                  className="
                    inline-flex items-center gap-3
                    rounded-2xl
                    bg-green-50
                    px-5 py-4
                    text-sm font-bold text-green-700
                  "
                >
                  <div className="h-3 w-3 rounded-full bg-green-500" />

                  Architecture audit-ready
                </div>
              </div>

              {/* TIMELINE */}
              <div className="relative mt-20">

                {/* LINE */}
                <div
                  className="
                    absolute left-5 top-0 hidden h-full w-[2px]
                    bg-gradient-to-b
                    from-orange-300
                    via-blue-300
                    to-slate-300
                    lg:block
                  "
                />

                <div className="space-y-10">

                  {/* STEP 1 */}
                  <div className="relative flex flex-col gap-8 lg:flex-row lg:gap-14">

                    {/* DOT */}
                    <div
                      className="
                        relative z-10
                        hidden h-10 w-10 items-center justify-center
                        rounded-full
                        bg-orange-500
                        text-sm font-black text-slate-900
                        lg:flex
                      "
                    >
                      1
                    </div>

                    {/* CARD */}
                    <div className="flex-1 rounded-3xl bg-orange-50 p-8">

                      <div className="flex flex-wrap items-center justify-between gap-5">

                        <div>
                          <p className="text-sm font-bold uppercase tracking-wider text-orange-700">
                            STATION
                          </p>

                          <h4 className="mt-3 text-2xl font-black text-slate-900">
                            Saisie des faits métier
                          </h4>
                        </div>

                        <div
                          className="
                            rounded-2xl
                            bg-white
                            px-4 py-2
                            text-sm font-bold text-orange-700
                          "
                        >
                          BROUILLON
                        </div>
                      </div>

                      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
                        Les équipes terrain enregistrent les ventes,
                        les relais,
                        les index,
                        les dépôtages,
                        les versements
                        et les événements opérationnels.
                      </p>

                      {/* FEATURES */}
                      <div className="mt-8 grid gap-4 md:grid-cols-3">

                        <div className="rounded-2xl bg-white p-5">
                          <p className="text-sm text-slate-500">
                            Exploitation
                          </p>

                          <h5 className="mt-2 text-lg font-black text-slate-900">
                            Relais
                          </h5>
                        </div>

                        <div className="rounded-2xl bg-white p-5">
                          <p className="text-sm text-slate-500">
                            Terrain
                          </p>

                          <h5 className="mt-2 text-lg font-black text-slate-900">
                            Pompes & Index
                          </h5>
                        </div>

                        <div className="rounded-2xl bg-white p-5">
                          <p className="text-sm text-slate-500">
                            Stock
                          </p>

                          <h5 className="mt-2 text-lg font-black text-slate-900">
                            Dépôtage
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* STEP 2 */}
                  <div className="relative flex flex-col gap-8 lg:flex-row lg:gap-14">

                    <div
                      className="
                        relative z-10
                        hidden h-10 w-10 items-center justify-center
                        rounded-full
                        bg-blue-500
                        text-sm font-black text-slate-900
                        lg:flex
                      "
                    >
                      2
                    </div>

                    <div className="flex-1 rounded-3xl bg-blue-50 p-8">

                      <div className="flex flex-wrap items-center justify-between gap-5">

                        <div>
                          <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                            VALIDATION
                          </p>

                          <h4 className="mt-3 text-2xl font-black text-slate-900">
                            Contrôle & verrouillage métier
                          </h4>
                        </div>

                        <div
                          className="
                            rounded-2xl
                            bg-white
                            px-4 py-2
                            text-sm font-bold text-blue-700
                          "
                        >
                          SOUMIS → VALIDÉ
                        </div>
                      </div>

                      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
                        Les workflows FuelControl appliquent
                        une validation hiérarchique stricte,
                        empêchant toute incohérence,
                        suppression destructive
                        ou double génération financière.
                      </p>

                      {/* SECURITY */}
                      <div className="mt-8 flex flex-wrap gap-4">

                        {[
                          "RBAC avancé",
                          "Audit-ready",
                          "Verrouillage",
                          "Historisation",
                          "Traçabilité",
                        ].map((item) => (
                          <div
                            key={item}
                            className="
                              rounded-xl
                              border border-blue-200
                              bg-white
                              px-5 py-3
                              text-sm font-semibold text-blue-700
                            "
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* STEP 3 */}
                  <div className="relative flex flex-col gap-8 lg:flex-row lg:gap-14">

                    {/* DOT */}
                    <div
                      className="
                        relative z-10
                        hidden h-10 w-10 items-center justify-center
                        rounded-full
                        bg-emerald-500
                        text-sm font-black text-white
                        shadow-lg shadow-emerald-500/30
                        lg:flex
                      "
                    >
                      3
                    </div>

                    {/* CARD */}
                    <div
                      className="
                        relative overflow-hidden
                        flex-1
                        rounded-3xl
                        border border-emerald-200
                        bg-gradient-to-br
                        from-emerald-50
                        via-white
                        to-emerald-100
                        p-8
                      "
                    >

                      {/* GLOW */}
                      <div
                        className="
                          absolute -right-24 -top-24
                          h-72 w-72
                          rounded-full
                          bg-emerald-300/20
                          blur-3xl
                        "
                      />

                      <div className="relative z-10">

                        <div className="flex flex-wrap items-center justify-between gap-5">

                          <div>
                            <p
                              className="
                                text-sm font-bold uppercase tracking-wider
                                text-emerald-700
                              "
                            >
                              FINANCES
                            </p>

                            <h4 className="mt-3 text-2xl font-black text-slate-900">
                              Consolidation automatique
                            </h4>
                          </div>

                          <div
                            className="
                              rounded-2xl
                              border border-emerald-200
                              bg-white
                              px-4 py-2
                              text-sm font-bold text-emerald-700
                              shadow-sm
                            "
                          >
                            TRANSFÉRÉ
                          </div>
                        </div>

                        <p
                          className="
                            mt-6
                            max-w-3xl
                            text-lg leading-relaxed
                            text-slate-600
                          "
                        >
                          FuelControl génère automatiquement
                          les flux financiers,
                          les consolidations réseau,
                          les indicateurs KPI
                          et les dashboards analytiques
                          à partir des faits validés.
                        </p>

                        {/* STATS */}
                        <div className="mt-10 grid gap-5 md:grid-cols-3">

                          <div
                            className="
                              rounded-2xl
                              border border-emerald-200
                              bg-white/80
                              p-5
                              backdrop-blur-sm
                            "
                          >
                            <p className="text-sm text-slate-500">
                              Génération
                            </p>

                            <h5 className="mt-2 text-xl font-black text-slate-900">
                              Automatique
                            </h5>
                          </div>

                          <div
                            className="
                              rounded-2xl
                              border border-emerald-200
                              bg-white/80
                              p-5
                              backdrop-blur-sm
                            "
                          >
                            <p className="text-sm text-slate-500">
                              Consolidation
                            </p>

                            <h5 className="mt-2 text-xl font-black text-slate-900">
                              Multi-stations
                            </h5>
                          </div>

                          <div
                            className="
                              rounded-2xl
                              border border-emerald-200
                              bg-white/80
                              p-5
                              backdrop-blur-sm
                            "
                          >
                            <p className="text-sm text-slate-500">
                              Reporting
                            </p>

                            <h5 className="mt-2 text-xl font-black text-slate-900">
                              Temps réel
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTTOM */}
              <div
                className="
                  mt-16
                  rounded-3xl
                  border border-slate-200
                  bg-slate-100
                  p-8
                "
              >

                <div className="grid gap-5 lg:grid-cols-4">

                  {/* ITEM */}
                  <div
                    className="
                      relative overflow-hidden
                      rounded-3xl
                      border border-slate-200
                      bg-white
                      p-6
                      shadow-sm
                    "
                  >

                    <div
                      className="
                        absolute right-0 top-0
                        h-24 w-24
                        rounded-full
                        bg-orange-100/60
                        blur-2xl
                      "
                    />

                    <div className="relative z-10">

                      <div
                        className="
                          inline-flex items-center justify-center
                          rounded-xl
                          bg-orange-100
                          px-3 py-2
                          text-xs font-black text-orange-700
                        "
                      >
                        01
                      </div>

                      <p className="mt-5 text-sm font-semibold text-slate-500">
                        Workflow
                      </p>

                      <h4 className="mt-2 text-2xl font-black text-slate-900">
                        BROUILLON
                      </h4>
                    </div>
                  </div>

                  {/* ITEM */}
                  <div
                    className="
                      relative overflow-hidden
                      rounded-3xl
                      border border-blue-200
                      bg-blue-50
                      p-6
                      shadow-sm
                    "
                  >

                    <div
                      className="
                        absolute right-0 top-0
                        h-24 w-24
                        rounded-full
                        bg-blue-200/40
                        blur-2xl
                      "
                    />

                    <div className="relative z-10">

                      <div
                        className="
                          inline-flex items-center justify-center
                          rounded-xl
                          bg-blue-100
                          px-3 py-2
                          text-xs font-black text-blue-700
                        "
                      >
                        02
                      </div>

                      <p className="mt-5 text-sm font-semibold text-slate-500">
                        Validation
                      </p>

                      <h4 className="mt-2 text-2xl font-black text-slate-900">
                        SOUMIS
                      </h4>
                    </div>
                  </div>

                  {/* ITEM */}
                  <div
                    className="
                      relative overflow-hidden
                      rounded-3xl
                      border border-violet-200
                      bg-violet-50
                      p-6
                      shadow-sm
                    "
                  >

                    <div
                      className="
                        absolute right-0 top-0
                        h-24 w-24
                        rounded-full
                        bg-violet-200/40
                        blur-2xl
                      "
                    />

                    <div className="relative z-10">

                      <div
                        className="
                          inline-flex items-center justify-center
                          rounded-xl
                          bg-violet-100
                          px-3 py-2
                          text-xs font-black text-violet-700
                        "
                      >
                        03
                      </div>

                      <p className="mt-5 text-sm font-semibold text-slate-500">
                        Contrôle
                      </p>

                      <h4 className="mt-2 text-2xl font-black text-slate-900">
                        VALIDÉ
                      </h4>
                    </div>
                  </div>

                  {/* ITEM */}
                  <div
                    className="
                      relative overflow-hidden
                      rounded-3xl
                      border border-emerald-200
                      bg-gradient-to-br
                      from-emerald-50
                      to-white
                      p-6
                      shadow-lg shadow-emerald-100/50
                    "
                  >

                    <div
                      className="
                        absolute right-0 top-0
                        h-24 w-24
                        rounded-full
                        bg-emerald-300/30
                        blur-2xl
                      "
                    />

                    <div className="relative z-10">

                      <div
                        className="
                          inline-flex items-center justify-center
                          rounded-xl
                          bg-emerald-100
                          px-3 py-2
                          text-xs font-black text-emerald-700
                        "
                      >
                        04
                      </div>

                      <p className="mt-5 text-sm font-semibold text-slate-500">
                        Finance
                      </p>

                      <h4 className="mt-2 text-2xl font-black text-emerald-700">
                        TRANSFÉRÉ
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANALYTICS SECTION */}
      <section
        id="analytics"
        className="
          relative
          overflow-hidden
          bg-slate-100
          py-32
        "
      >

        {/* LIGHT EFFECTS */}
        <div className="absolute inset-0">

          <div className="absolute left-[-150px] top-[-150px] h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-3xl" />

          <div className="absolute bottom-[-150px] right-[-150px] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="section-container relative z-10">

          {/* HEADER */}
          <div className="max-w-4xl">

            <div
              className="
                inline-flex items-center gap-3
                rounded-full
                border border-orange-100
                bg-orange-50
                px-5 py-2
                text-sm font-semibold text-orange-700
              "
            >
              <div className="h-2 w-2 rounded-full bg-orange-500" />

              Dashboards & supervision temps réel
            </div>

            <h2
              className="
                mt-8
                text-4xl
                font-black
                leading-tight
                tracking-[-0.04em]
                text-slate-900
                md:text-6xl
              "
            >
              Une vision consolidée
              <span className="block text-[#F97316]">
                de l’ensemble du réseau
              </span>
            </h2>

            <p
              className="
                mt-8
                max-w-3xl
                text-lg
                leading-relaxed
                text-slate-600
              "
            >
              FuelControl fournit des dashboards analytiques
              temps réel pour le pilotage opérationnel,
              financier et stratégique
              des réseaux de stations-service.
            </p>
          </div>

          {/* MAIN DASHBOARD */}
          <div
            className="
              mt-20
              overflow-hidden
              rounded-[40px]
              border border-slate-200
              bg-white
              shadow-[0_10px_40px_rgba(15,23,42,0.06)]
            "
          >

            {/* TOP BAR */}
            <div
              className="
                flex flex-wrap items-center justify-between gap-5
                border-b border-slate-200
                px-8 py-6
              "
            >

              <div>
                <p className="text-sm font-semibold text-slate-500">
                  Dashboard Réseau
                </p>

                <h3 className="mt-2 text-3xl font-black text-slate-900">
                  Supervision nationale
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">

                <div
                  className="
                    rounded-xl
                    border border-slate-200
                    bg-slate-100
                    px-4 py-3
                    text-sm font-semibold text-slate-700
                  "
                >
                  Temps réel
                </div>

                <div
                  className="
                    rounded-xl
                    bg-[#F97316]
                    px-4 py-3
                    text-sm font-bold text-white
                  "
                >
                  Multi-stations
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="grid gap-8 p-8 xl:grid-cols-[1.3fr_0.7fr]">

  {/* LEFT */}
  <div>

    {/* KPI GRID */}
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

      {[
        {
          title: "Volume réseau",
          value: "2.4M L",
          growth: "+18%",
        },
        {
          title: "CA consolidé",
          value: "847M",
          growth: "+12%",
        },
        {
          title: "Stations actives",
          value: "128",
          growth: "+6%",
        },
        {
          title: "Health score",
          value: "94%",
          growth: "Excellent",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="
            group relative overflow-hidden
            rounded-3xl
            border border-slate-200
            bg-white
            p-6
            shadow-sm
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-xl
          "
        >

          {/* GLOW */}
          <div
            className="
              absolute -right-10 -top-10
              h-28 w-28
              rounded-full
              bg-orange-100/60
              blur-3xl
              transition-all duration-300
              group-hover:scale-125
            "
          />

          <div className="relative z-10">

            <p className="text-sm font-semibold text-slate-500">
              {item.title}
            </p>

            <h4
              className="
                mt-4
                text-3xl
                font-black
                tracking-tight
                text-slate-900
              "
            >
              {item.value}
            </h4>

            <div
              className="
                mt-4 inline-flex items-center
                rounded-xl
                bg-emerald-50
                px-3 py-2
                text-sm font-black text-emerald-700
              "
            >
              {item.growth}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* GRAPH */}
    <div
      className="
        relative overflow-hidden
        mt-8
        rounded-[32px]
        border border-slate-200
        bg-gradient-to-br
        from-white
        via-slate-50
        to-orange-50
        p-8
        shadow-sm
      "
    >

      {/* GLOW */}
      <div
        className="
          absolute -right-20 -top-20
          h-72 w-72
          rounded-full
          bg-orange-200/20
          blur-3xl
        "
      />

      <div className="relative z-10">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm font-semibold text-slate-500">
              Évolution carburant
            </p>

            <h4 className="mt-2 text-2xl font-black text-slate-900">
              Performance réseau
            </h4>
          </div>

          <div
            className="
              rounded-xl
              bg-green-100
              px-4 py-2
              text-sm font-bold text-green-700
            "
          >
            +14.8%
          </div>
        </div>

        {/* CHART */}
        <div className="mt-10 flex h-72 items-end gap-4">

          <div className="flex w-full flex-col items-center gap-3">
            <div
              className="
                h-24 w-full
                rounded-t-3xl
                bg-[#F97316]
                transition-all duration-300
                hover:opacity-80
              "
            />
            <span className="text-xs text-slate-500">
              Jan
            </span>
          </div>

          <div className="flex w-full flex-col items-center gap-3">
            <div
              className="
                h-32 w-full
                rounded-t-3xl
                bg-[#FB923C]
                transition-all duration-300
                hover:opacity-80
              "
            />
            <span className="text-xs text-slate-500">
              Fév
            </span>
          </div>

          <div className="flex w-full flex-col items-center gap-3">
            <div
              className="
                h-40 w-full
                rounded-t-3xl
                bg-[#FDBA74]
                transition-all duration-300
                hover:opacity-80
              "
            />
            <span className="text-xs text-slate-500">
              Mar
            </span>
          </div>

          <div className="flex w-full flex-col items-center gap-3">
            <div
              className="
                h-48 w-full
                rounded-t-3xl
                bg-[#93C5FD]
                transition-all duration-300
                hover:opacity-80
              "
            />
            <span className="text-xs text-slate-500">
              Avr
            </span>
          </div>

          <div className="flex w-full flex-col items-center gap-3">
            <div
              className="
                h-56 w-full
                rounded-t-3xl
                bg-[#60A5FA]
                transition-all duration-300
                hover:opacity-80
              "
            />
            <span className="text-xs text-slate-500">
              Mai
            </span>
          </div>

          <div className="flex w-full flex-col items-center gap-3">
            <div
              className="
                h-64 w-full
                rounded-t-3xl
                bg-[#2563EB]
                transition-all duration-300
                hover:opacity-80
              "
            />
            <span className="text-xs text-slate-500">
              Juin
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* RIGHT */}
  <div className="space-y-8">

    {/* STOCK CARD */}
    <div
      className="
        relative overflow-hidden
        rounded-[32px]
        border border-slate-200
        bg-gradient-to-br
        from-white
        to-orange-50
        p-8
        shadow-sm
      "
    >

      {/* GLOW */}
      <div
        className="
          absolute -right-20 -top-20
          h-64 w-64
          rounded-full
          bg-orange-200/20
          blur-3xl
        "
      />

      <div className="relative z-10">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm font-semibold text-slate-500">
              Stock exploitable
            </p>

            <h4 className="mt-2 text-3xl font-black text-slate-900">
              94%
            </h4>
          </div>

          <div
            className="
              rounded-2xl
              bg-orange-100
              px-4 py-2
              text-sm font-bold text-orange-700
            "
          >
            Stable
          </div>
        </div>

        {/* PROGRESS */}
        <div className="mt-8">

          <div className="h-4 rounded-full bg-slate-100">
            <div
              className="
                h-4
                w-[94%]
                rounded-full
                bg-gradient-to-r
                from-orange-500
                to-orange-400
              "
            />
          </div>

          <div className="mt-4 flex justify-between text-sm text-slate-500">
            <span>0%</span>
            <span>100%</span>
          </div>
        </div>

        {/* INFO */}
        <div className="mt-8 grid grid-cols-2 gap-5">

          <div
            className="
              rounded-2xl
              border border-orange-100
              bg-white
              p-5
            "
          >
            <p className="text-sm text-slate-500">
              Cuves actives
            </p>

            <h5 className="mt-2 text-xl font-black text-slate-900">
              42
            </h5>
          </div>

          <div
            className="
              rounded-2xl
              border border-orange-100
              bg-white
              p-5
            "
          >
            <p className="text-sm text-slate-500">
              Autonomie
            </p>

            <h5 className="mt-2 text-xl font-black text-slate-900">
              18 jours
            </h5>
          </div>
        </div>
      </div>
    </div>

    {/* ACTIVITY */}
    <div
      className="
        rounded-[32px]
        border border-slate-200
        bg-white
        p-8
        shadow-sm
      "
    >

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm font-semibold text-slate-500">
            Activité réseau
          </p>

          <h4 className="mt-2 text-2xl font-black text-slate-900">
            Temps réel
          </h4>
        </div>

        <div
          className="
            h-3 w-3
            rounded-full
            bg-green-500
            animate-pulse
          "
        />
      </div>

      {/* EVENTS */}
      <div className="mt-8 space-y-5">

        {[
          "Relais validé • Station Dakar Centre",
          "Dépôtage terminé • Cuve Gasoil",
          "Versement confirmé • Station Thiès",
          "Nouvelle alerte stock • Saint-Louis",
        ].map((event) => (
          <div
            key={event}
            className="
              flex items-center gap-4
              rounded-2xl
              border border-slate-100
              bg-white
              p-4
              shadow-sm
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-md
            "
          >

            <div
              className="
                h-3 w-3
                rounded-full
                bg-orange-500
                animate-pulse
              "
            />

            <p className="text-sm font-medium text-slate-700">
              {event}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* WHY FUELCONTROL */}
      <section
        id="solution"
        className="
          relative
          overflow-hidden
          bg-white
          py-32
        "
      >

        {/* BACKGROUND */}
        <div className="absolute inset-0 hero-gradient opacity-30" />

        <div className="section-container relative z-10">

          {/* HEADER */}
          <div className="max-w-4xl">

            <div
              className="
                inline-flex items-center gap-3
                rounded-full
                border border-blue-100
                bg-blue-50
                px-5 py-2
                text-sm font-semibold text-blue-700
              "
            >
              <div className="h-2 w-2 rounded-full bg-blue-500" />

              Pourquoi FuelControl
            </div>

            <h2
              className="
                mt-8
                text-4xl
                font-black
                leading-tight
                tracking-[-0.04em]
                text-slate-900
                md:text-6xl
              "
            >
              Bien plus qu’un logiciel
              <span className="block text-[#2563EB]">
                une infrastructure opérationnelle
              </span>
            </h2>

            <p
              className="
                mt-8
                max-w-3xl
                text-lg
                leading-relaxed
                text-slate-600
              "
            >
              FuelControl a été conçu pour répondre
              aux réalités opérationnelles
              des réseaux de stations-service modernes :
              supervision,
              traçabilité,
              contrôle financier,
              exploitation terrain
              et pilotage multi-stations.
            </p>
          </div>

          {/* GRID */}
          <div className="mt-20 grid gap-8 lg:grid-cols-3">

            {/* CARD */}
            <div className="premium-card p-10">

              <div
                className="
                  flex h-18 w-18 items-center justify-center
                  rounded-3xl
                  bg-orange-100
                  text-4xl
                "
              >
                ⚡
              </div>

              <h3 className="mt-8 text-3xl font-black text-slate-900">
                Temps réel
              </h3>

              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Visualisez immédiatement les ventes,
                les volumes carburant,
                les dépôtages,
                les versements
                et les performances réseau.
              </p>

              <div className="mt-8 h-2 w-full rounded-full bg-slate-100">
                <div className="h-2 w-[92%] rounded-full bg-[#F97316]" />
              </div>

              <p className="mt-3 text-sm font-semibold text-orange-600">
                Supervision temps réel
              </p>
            </div>

            {/* CARD */}
            <div className="premium-card p-10">

              <div
                className="
                  flex h-18 w-18 items-center justify-center
                  rounded-3xl
                  bg-blue-100
                  text-4xl
                "
              >
                🛡️
              </div>

              <h3 className="mt-8 text-3xl font-black text-slate-900">
                Audit-ready
              </h3>

              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Architecture conçue pour la traçabilité,
                les validations hiérarchiques,
                les workflows sécurisés
                et le contrôle opérationnel.
              </p>

              <div className="mt-8 h-2 w-full rounded-full bg-slate-100">
                <div className="h-2 w-[96%] rounded-full bg-[#2563EB]" />
              </div>

              <p className="mt-3 text-sm font-semibold text-blue-600">
                Contrôle & conformité
              </p>
            </div>

            {/* CARD */}
            <div className="premium-card p-10">

              <div
                className="
                  flex h-18 w-18 items-center justify-center
                  rounded-3xl
                  bg-slate-100
                  text-4xl
                "
              >
                🌍
              </div>

              <h3 className="mt-8 text-3xl font-black text-slate-900">
                Multi-stations
              </h3>

              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Pilotez plusieurs stations,
                plusieurs régions
                et plusieurs équipes
                depuis une seule plateforme centralisée.
              </p>

              <div className="mt-8 h-2 w-full rounded-full bg-[#90EE90]">
                <div className="h-2 w-[89%] rounded-full text-white" />
              </div>

              <p className="mt-3 text-sm font-semibold text-slate-700">
                Gouvernance réseau
              </p>
            </div>
          </div>

          {/* BOTTOM SECTION */}
          <div className="mt-20 grid gap-8 lg:grid-cols-[1fr_0.9fr]">

            {/* LEFT */}
            <div className="premium-card overflow-hidden p-12">

              <div
                className="
                  inline-flex items-center gap-3
                  rounded-full
                  border border-orange-100
                  bg-orange-50
                  px-5 py-2
                  text-sm font-semibold text-orange-700
                "
              >
                ERP Vertical Énergétique
              </div>

              <h3 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.04em] text-slate-900">
                Pensé pour
                <span className="block text-[#F97316]">
                  les opérations terrain réelles
                </span>
              </h3>

              <p className="mt-8 max-w-2xl text-xl leading-relaxed text-slate-600">
                Contrairement aux logiciels génériques,
                FuelControl intègre les réalités métier
                des réseaux carburant :
                relais,
                cuves,
                pompes,
                dépôtages,
                workflows hiérarchiques,
                supervision réseau
                et consolidation financière.
              </p>

              {/* FEATURES */}
              <div className="mt-12 grid gap-5 md:grid-cols-2">

                {[
                  "Gestion relais",
                  "Dépôtage industriel",
                  "Stock exploitable",
                  "Dashboards KPI",
                  "Validation hiérarchique",
                  "Architecture multi-tenant",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex items-center gap-4
                      rounded-2xl
                      bg-slate-100
                      p-5
                    "
                  >
                    <div className="h-3 w-3 rounded-full bg-[#F97316]" />

                    <span className="font-semibold text-slate-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div
              className="
                overflow-hidden
                rounded-[36px]
                border border-slate-200
                bg-white
                p-12
                shadow-[0_20px_60px_rgba(15,23,42,0.06)]
              "
            >

              <div
                className="
                  inline-flex items-center gap-3
                  rounded-full
                  border border-blue-100
                  bg-blue-50
                  px-5 py-2
                  text-sm font-semibold text-blue-700
                "
              >
                Vision produit 2026
              </div>

              <h3
                className="
                  mt-8
                  text-4xl md:text-5xl lg:text-6xl
                  font-black
                  leading-tight
                  tracking-[-0.04em]
                  text-slate-900
                "
              >
                Une plateforme
                <span className="block text-[#F97316]">
                  conçue pour évoluer
                </span>
              </h3>

              <p
                className="
                  mt-8
                  text-xl
                  leading-relaxed
                  text-slate-600
                "
              >
                FuelControl est construit comme
                une infrastructure SaaS extensible
                capable d’intégrer demain :
                IoT,
                flotte carburant,
                supply chain,
                maintenance,
                mobile offline
                et supervision nationale.
              </p>

              {/* STACK */}
              <div className="mt-12 flex flex-wrap gap-4">

                {[
                  "IoT",
                  "Analytics",
                  "Offline",
                  "API REST",
                  "Cloud",
                  "Multi-tenant",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      rounded-xl
                      border border-slate-200
                      bg-slate-100
                      px-5 py-3
                      text-sm font-semibold text-slate-700
                    "
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE SECTION */}
      <section
        className="
          relative
          overflow-hidden
          bg-slate-100
          py-32
        "
      >

        {/* BACKGROUND */}
        <div className="absolute inset-0 hero-gradient opacity-20" />

        <div className="section-container relative z-10">

          <div className="grid items-center gap-20 lg:grid-cols-[0.95fr_1.05fr]">

            {/* LEFT */}
            <div className="relative">

              {/* PHONE */}
              <div
                className="
                  relative
                  mx-auto
                  w-[320px]
                  overflow-hidden
                  rounded-[42px]
                  border-[10px]
                  border-slate-900
                  bg-white
                  shadow-[0_30px_80px_rgba(15,23,42,0.15)]
                "
              >

                {/* TOP */}
                <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">

                  <div>
                    <p className="text-xs font-semibold text-slate-500">
                      FuelControl Mobile
                    </p>

                    <h4 className="mt-1 text-lg font-black text-slate-900">
                      Exploitation Terrain
                    </h4>
                  </div>

                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>

                {/* CONTENT */}
                <div className="space-y-5 p-6">

                  {/* CARD */}
                  <div className="rounded-3xl bg-orange-50 p-5">

                    <div className="flex items-center justify-between">

                      <div>
                        <p className="text-sm text-orange-700">
                          Relais actif
                        </p>

                        <h5 className="mt-2 text-2xl font-black text-slate-900">
                          Équipe A
                        </h5>
                      </div>

                      <div
                        className="
                          rounded-2xl
                          bg-white
                          px-4 py-2
                          text-sm font-bold text-orange-700
                        "
                      >
                        ACTIF
                      </div>
                    </div>
                  </div>

                  {/* STATS */}
                  <div className="grid grid-cols-2 gap-4">

                    <div className="rounded-2xl bg-slate-100 p-5">

                      <p className="text-sm text-slate-500">
                        Volume
                      </p>

                      <h5 className="mt-2 text-xl font-black text-slate-900">
                        12 480 L
                      </h5>
                    </div>

                    <div className="rounded-2xl bg-slate-100 p-5">

                      <p className="text-sm text-slate-500">
                        CA
                      </p>

                      <h5 className="mt-2 text-xl font-black text-slate-900">
                        8.4M
                      </h5>
                    </div>
                  </div>

                  {/* EVENTS */}
                  <div className="space-y-4">

                    {[
                      "Versement validé",
                      "Dépôtage synchronisé",
                      "Relais soumis",
                    ].map((item) => (
                      <div
                        key={item}
                        className="
                          flex items-center gap-4
                          rounded-2xl
                          border border-slate-100
                          bg-white
                          p-4
                          shadow-sm
                        "
                      >
                        <div className="h-3 w-3 rounded-full bg-[#F97316]" />

                        <p className="text-sm font-medium text-slate-700">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* FLOATING CARD */}
              <div
                className="
                  absolute
                  -right-10
                  bottom-10
                  hidden
                  rounded-3xl
                  border border-slate-200
                  bg-white
                  p-6
                  shadow-2xl
                  lg:block
                "
              >

                <p className="text-sm font-semibold text-slate-500">
                  Synchronisation
                </p>

                <h4 className="mt-2 text-3xl font-black text-slate-900">
                  Offline Ready
                </h4>

                <div className="mt-4 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-green-500" />

                  <span className="text-sm font-semibold text-green-700">
                    Synchronisation active
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div>

              <div
                className="
                  inline-flex items-center gap-3
                  rounded-full
                  border border-orange-100
                  bg-orange-50
                  px-5 py-2
                  text-sm font-semibold text-orange-700
                "
              >
                <div className="h-2 w-2 rounded-full bg-orange-500" />

                Mobile & exploitation terrain
              </div>

              <h2
                className="
                  mt-8
                  text-4xl md:text-5xl lg:text-6xl
                  font-black
                  leading-tight
                  tracking-[-0.04em]
                  text-slate-900
                "
              >
                Une plateforme
                <span className="block text-[#F97316]">
                  conçue pour le terrain
                </span>
              </h2>

              <p
                className="
                  mt-8
                  max-w-2xl
                  text-xl
                  leading-relaxed
                  text-slate-600
                "
              >
                FuelControl permet aux équipes terrain
                de gérer les relais,
                les ventes,
                les versements
                et les opérations critiques
                depuis mobile,
                même dans des environnements
                à connectivité limitée.
              </p>

              {/* FEATURES */}
              <div className="mt-12 grid gap-5 md:grid-cols-2">

                {[
                  "Mode offline",
                  "Synchronisation automatique",
                  "Relais mobiles",
                  "Validation terrain",
                  "Dashboards mobiles",
                  "Supervision temps réel",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex items-center gap-4
                      rounded-2xl
                      border border-slate-200
                      bg-white
                      p-5
                      shadow-sm
                    "
                  >
                    <div className="h-3 w-3 rounded-full bg-[#F97316]" />

                    <span className="font-semibold text-slate-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* STATS */}
              <div className="mt-12 flex flex-wrap gap-10">

                <div>
                  <h3 className="text-4xl font-black text-slate-900">
                    24/7
                  </h3>

                  <p className="mt-2 text-sm font-medium text-slate-500">
                    Continuité opérationnelle
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-black text-slate-900">
                    Multi-sites
                  </h3>

                  <p className="mt-2 text-sm font-medium text-slate-500">
                    Supervision centralisée
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-black text-slate-900">
                    Temps réel
                  </h3>

                  <p className="mt-2 text-sm font-medium text-slate-500">
                    Synchronisation réseau
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        id="cta"
        className="
          relative
          overflow-hidden
          bg-white
          py-32
        "
      >

        {/* BACKGROUND */}
        <div className="absolute inset-0 hero-gradient opacity-30" />

        <div className="section-container relative z-10">

          <div
            className="
              overflow-hidden
              rounded-[40px]
              border border-slate-200
              bg-white
              shadow-[0_30px_80px_rgba(15,23,42,0.08)]
            "
          >

            <div className="grid items-center gap-16 p-10 lg:grid-cols-[1fr_0.9fr] lg:p-16">

  {/* LEFT */}
  <div>

    <div
      className="
        inline-flex items-center gap-3
        rounded-full
        border border-orange-100
        bg-orange-50
        px-5 py-2
        text-sm font-semibold text-orange-700
        shadow-sm
      "
    >
      <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />

      Déploiement SaaS enterprise
    </div>

    <h2
      className="
        mt-8
        text-4xl md:text-5xl lg:text-6xl
        font-black
        leading-tight
        tracking-[-0.05em]
        text-slate-900
        md:text-7xl
      "
    >
      Pilotez votre
      <span className="block text-[#F97316]">
        réseau de stations
      </span>
      avec FuelControl
    </h2>

    <p
      className="
        mt-8
        max-w-2xl
        text-xl
        leading-relaxed
        text-slate-600
      "
    >
      Centralisez vos opérations,
      vos finances,
      vos dashboards,
      vos workflows terrain
      et votre supervision réseau
      dans une seule plateforme SaaS.
    </p>

    {/* BUTTONS */}
    <div className="mt-12 flex flex-wrap gap-5">

      <a
        href="#contact"
        className="
          inline-flex items-center gap-3
          rounded-2xl
          bg-[#F97316]
          px-8 py-5
          text-lg font-bold text-white
          shadow-xl shadow-orange-500/20
          transition-all duration-300
          hover:-translate-y-1
          hover:bg-[#EA580C]
          hover:shadow-2xl hover:shadow-orange-500/30
        "
      >
        Demander une démo

        <span>→</span>
      </a>

      <a
        href="/login"
        className="
          inline-flex items-center gap-3
          rounded-2xl
          border border-slate-200
          bg-white
          px-8 py-5
          text-lg font-semibold text-slate-700
          shadow-sm
          transition-all duration-300
          hover:-translate-y-1
          hover:border-slate-300
          hover:bg-slate-50
          hover:shadow-lg
        "
      >
        Accès plateforme
      </a>
    </div>

    {/* STATS */}
    <div className="mt-14 flex flex-wrap gap-10">

      <div>
        <h3 className="text-4xl font-black tracking-tight text-slate-900">
          Multi
        </h3>

        <p className="mt-2 text-sm font-medium text-slate-500">
          Stations
        </p>
      </div>

      <div>
        <h3 className="text-4xl font-black tracking-tight text-slate-900">
          Temps réel
        </h3>

        <p className="mt-2 text-sm font-medium text-slate-500">
          Analytics & supervision
        </p>
      </div>

      <div>
        <h3 className="text-4xl font-black tracking-tight text-slate-900">
          Audit-ready
        </h3>

        <p className="mt-2 text-sm font-medium text-slate-500">
          Traçabilité complète
        </p>
      </div>
    </div>
  </div>

  {/* RIGHT */}
  <div className="space-y-6">

    {/* MAIN CARD */}
    <div
      className="
        relative overflow-hidden
        rounded-[36px]
        border border-slate-200
        bg-gradient-to-br
        from-white
        via-slate-50
        to-orange-50
        p-8
        shadow-xl shadow-slate-200/40
      "
    >

      {/* GLOW */}
      <div
        className="
          absolute -right-24 -top-24
          h-72 w-72
          rounded-full
          bg-orange-200/20
          blur-3xl
        "
      />

      <div className="relative z-10">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm font-semibold text-slate-500">
              FuelControl Enterprise
            </p>

            <h3 className="mt-2 text-3xl font-black text-slate-900">
              Supervision Réseau
            </h3>
          </div>

          <div
            className="
              rounded-2xl
              bg-orange-100
              px-4 py-2
              text-sm font-bold text-orange-700
              shadow-sm
            "
          >
            Live
          </div>
        </div>

        {/* GRID */}
        <div className="mt-10 grid grid-cols-2 gap-5">

          {[
            {
              label: "Stations",
              value: "128",
            },
            {
              label: "Volume réseau",
              value: "2.4M L",
            },
            {
              label: "Disponibilité",
              value: "99.9%",
            },
            {
              label: "Health score",
              value: "Excellent",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="
                group relative overflow-hidden
                rounded-2xl
                border border-white/50
                bg-white/80
                p-5
                backdrop-blur-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >

              <div
                className="
                  absolute -right-10 -top-10
                  h-20 w-20
                  rounded-full
                  bg-orange-100/40
                  blur-2xl
                  transition-all duration-300
                  group-hover:scale-125
                "
              />

              <div className="relative z-10">

                <p className="text-sm text-slate-500">
                  {item.label}
                </p>

                <h4
                  className="
                    mt-2
                    text-3xl
                    font-black
                    tracking-tight
                    text-slate-900
                  "
                >
                  {item.value}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* STATUS */}
        <div
          className="
            mt-8
            flex items-center justify-between
            rounded-3xl
            border border-white/60
            bg-white/80
            p-6
            backdrop-blur-sm
          "
        >

          <div>
            <p className="text-sm text-slate-500">
              Synchronisation réseau
            </p>

            <h4 className="mt-2 text-xl font-black text-slate-900">
              Temps réel
            </h4>
          </div>

          <div className="flex items-center gap-3">

            <div
              className="
                h-3 w-3
                rounded-full
                bg-green-500
                animate-pulse
              "
            />

            <span className="text-sm font-semibold text-green-700">
              Opérationnel
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* FLOATING */}
    <div
      className="
        flex items-center justify-between
        rounded-3xl
        border border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >

      <div>
        <p className="text-sm text-slate-500">
          Architecture
        </p>

        <h4 className="mt-2 text-2xl font-black text-slate-900">
          Multi-tenant
        </h4>
      </div>

      <div
        className="
          rounded-2xl
          bg-blue-100
          px-5 py-3
          text-sm font-bold text-blue-700
        "
      >
        Enterprise Ready
      </div>
    </div>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="
          relative
          overflow-hidden
          bg-slate-100
          py-32
        "
      >

        {/* BACKGROUND */}
        <div className="absolute inset-0 hero-gradient opacity-20" />

        <div className="section-container relative z-10">

          {/* HEADER */}
          <div className="max-w-4xl">

            <div
              className="
                inline-flex items-center gap-3
                rounded-full
                border border-orange-100
                bg-orange-50
                px-5 py-2
                text-sm font-semibold text-orange-700
              "
            >
              <div className="h-2 w-2 rounded-full bg-orange-500" />

              Contact & démonstration
            </div>

            <h2
              className="
                mt-8
                text-4xl md:text-5xl lg:text-6xl
                font-black
                leading-tight
                tracking-[-0.04em]
                text-slate-900
                md:text-6xl
              "
            >
              Parlons de votre
              <span className="block text-[#F97316]">
                réseau de stations-service
              </span>
            </h2>

            <p
              className="
                mt-8
                max-w-3xl
                text-xl
                leading-relaxed
                text-slate-600
              "
            >
              Découvrez comment FuelControl
              peut centraliser vos opérations,
              améliorer votre supervision réseau
              et moderniser votre gestion carburant.
            </p>
          </div>

          {/* GRID */}
          <div className="mt-20 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">

            {/* LEFT */}
            <div className="space-y-6">

              {/* CARD */}
              <div
                className="
                  rounded-[32px]
                  border border-slate-300
                  bg-white
                  p-8
                  shadow-md
                "
              >

                <div className="flex items-start gap-5">

                  <div
                    className="
                      flex h-16 w-16 items-center justify-center
                      rounded-2xl
                      bg-orange-100
                      text-3xl
                    "
                  >
                    📧
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      Email professionnel
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-slate-900">
                      contact@fuelcontrol.app
                    </h3>

                    <p className="mt-4 text-slate-600">
                      Échanges commerciaux,
                      démonstrations,
                      partenariats
                      et déploiement enterprise.
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD */}
              <div
                className="
                  rounded-[32px]
                  border border-slate-300
                  bg-white
                  p-8
                  shadow-md
                "
              >

                <div className="flex items-start gap-5">

                  <div
                    className="
                      flex h-16 w-16 items-center justify-center
                      rounded-2xl
                      bg-blue-100
                      text-3xl
                    "
                  >
                    📱
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      WhatsApp Business
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-slate-900">
                      +221 70 911 35 15
                    </h3>

                    <p className="mt-4 text-slate-600">
                      Assistance rapide,
                      prise de rendez-vous
                      et échanges opérationnels.
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD */}
              <div
                className="
                  rounded-[32px]
                  border border-slate-300
                  bg-white
                  p-8
                  shadow-md
                "
              >

                <div className="flex items-start gap-5">

                  <div
                    className="
                      flex h-16 w-16 items-center justify-center
                      rounded-2xl
                      bg-slate-100
                      text-3xl
                    "
                  >
                    🌍
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      Déploiement
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-slate-900">
                      Afrique & réseaux multi-sites
                    </h3>

                    <p className="mt-4 text-slate-600">
                      Architecture adaptée
                      aux groupes énergétiques,
                      exploitants indépendants
                      et réseaux multi-stations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div
              className="
                rounded-[36px]
                border border-slate-300
                bg-white
                p-8 md:p-10
                shadow-[0_20px_60px_rgba(15,23,42,0.08)]
              "
            >

              <div
                className="
                  inline-flex items-center gap-3
                  rounded-full
                  border border-blue-100
                  bg-blue-50
                  px-5 py-2
                  text-sm font-semibold text-blue-700
                "
              >
                Demande de démonstration
              </div>

              <h3 className="mt-8 text-4xl font-black leading-tight text-slate-900">
                Planifiez une présentation
                de FuelControl
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Présentation produit,
                workflows métier,
                architecture multi-stations,
                dashboards,
                finances
                et supervision réseau.
              </p>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="mt-10 space-y-6"
              >

                {/* INPUT */}
                <div>
                  <label className="mb-3 block text-sm font-bold text-slate-700">
                    Nom complet
                  </label>

                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="
                      w-full
                      rounded-2xl
                      border border-slate-300
                      bg-slate-50
                      px-5 py-4
                      text-slate-900
                      outline-none
                      transition
                      focus:border-[#F97316]
                      focus:bg-white
                    "
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                {/* INPUT */}
                <div>
                  <label className="mb-3 block text-sm font-bold text-slate-700">
                    Email professionnel
                  </label>

                  <input
                    type="email"
                    placeholder="contact@entreprise.com"
                    className="
                      w-full
                      rounded-2xl
                      border border-slate-300
                      bg-slate-50
                      px-5 py-4
                      text-slate-900
                      outline-none
                      transition
                      focus:border-[#F97316]
                      focus:bg-white
                    "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* INPUT */}
                <div>
                  <label className="mb-3 block text-sm font-bold text-slate-700">
                    Entreprise
                  </label>

                  <input
                    type="text"
                    placeholder="Nom de votre entreprise"
                    className="
                      w-full
                      rounded-2xl
                      border border-slate-300
                      bg-slate-50
                      px-5 py-4
                      text-slate-900
                      outline-none
                      transition
                      focus:border-[#F97316]
                      focus:bg-white
                    "
                    value={organisation}
                    onChange={(e) => setOrganisation(e.target.value)}
                  />
                </div>

                {/* TEXTAREA */}
                <div>
                  <label className="mb-3 block text-sm font-bold text-slate-700">
                    Votre besoin
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Décrivez votre réseau ou vos besoins opérationnels..."
                    className="
                      w-full
                      rounded-2xl
                      border border-slate-300
                      bg-slate-50
                      px-5 py-4
                      text-slate-900
                      outline-none
                      transition
                      focus:border-[#F97316]
                      focus:bg-white
                    "
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                {/* BUTTON */}
                <button
                  className="
                    w-full
                    rounded-2xl
                    bg-[#F97316]
                    px-8 py-5
                    text-lg font-bold text-white
                    shadow-xl shadow-orange-500/20
                    transition-all
                    hover:-translate-y-1
                    hover:bg-[#EA580C]
                  "
                >
                  {loading
                    ? "Envoi en cours..."
                    : "Demander une démonstration"}
                </button>

                {success && (
                  <div
                    className="
                      rounded-2xl
                      border border-green-200
                      bg-green-50
                      px-5 py-4
                      text-sm font-semibold text-green-700
                    "
                  >
                    Votre demande a été envoyée avec succès.
                  </div>
                )}

                {error && (
                  <div
                    className="
                      rounded-2xl
                      border border-red-200
                      bg-red-50
                      px-5 py-4
                      text-sm font-semibold text-red-700
                    "
                  >
                    Une erreur est survenue.
                  </div>
                )}

              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="
          relative
          overflow-hidden
          border-t border-slate-200
          bg-white
        "
      >

        {/* BACKGROUND */}
        <div className="absolute inset-0 hero-gradient opacity-20" />

        <div className="section-container relative z-10 py-20">

          {/* TOP */}
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">

            {/* LEFT */}
            <div>

              {/* LOGO */}
              <div className="flex items-center gap-4">

                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-1 shadow-sm">
                  <Image
                    src="/logo-fuelControl.jpg"
                    alt="FuelControl"
                    width={58}
                    height={58}
                    className="rounded-xl"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-black tracking-tight text-slate-900">
                    FuelControl
                  </h3>

                  <p className="text-sm font-medium text-slate-500">
                    ERP SaaS Stations-Service
                  </p>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-8
                  max-w-2xl
                  text-lg
                  leading-relaxed
                  text-slate-600
                "
              >
                FuelControl est une plateforme SaaS
                de pilotage opérationnel,
                financier et analytique
                conçue pour les réseaux
                de stations-service modernes.
              </p>

              {/* TAGS */}
              <div className="mt-10 flex flex-wrap gap-4">

                {[
                  "Multi-stations",
                  "Analytics",
                  "Audit-ready",
                  "Temps réel",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      rounded-xl
                      border border-slate-200
                      bg-white
                      px-5 py-3
                      text-sm font-semibold text-slate-700
                      shadow-sm
                    "
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="grid gap-10 sm:grid-cols-2">

              {/* PRODUCT */}
              <div>

                <h4 className="text-sm font-black uppercase tracking-[0.2em] text-slate-900">
                  Produit
                </h4>

                <div className="mt-6 space-y-4">

                  {[
                    "Gestion Carburant",
                    "Dashboards",
                    "Dépôtage",
                    "Supervision Réseau",
                    "Architecture Multi-tenant",
                  ].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="
                        block
                        text-base font-medium text-slate-600
                        transition hover:text-[#F97316]
                      "
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              {/* COMPANY */}
              <div>

                <h4 className="text-sm font-black uppercase tracking-[0.2em] text-slate-900">
                  Plateforme
                </h4>

                <div className="mt-6 space-y-4">

                  {[
                    "Sécurité",
                    "Infrastructure",
                    "API REST",
                    "Documentation",
                    "Contact",
                  ].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="
                        block
                        text-base font-medium text-slate-600
                        transition hover:text-[#2563EB]
                      "
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SEPARATOR */}
          <div className="my-14 h-px bg-slate-100" />

          {/* BOTTOM */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            {/* LEFT */}
            <div>

              <p className="text-sm font-medium text-slate-500">
                © 2026 FuelControl by SYNERA. Tous droits réservés.
              </p>

              <p className="mt-2 text-sm text-slate-400">
                ERP SaaS nouvelle génération pour réseaux de stations-service.
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex flex-wrap gap-4">

              <div
                className="
                  rounded-xl
                  border border-orange-100
                  bg-orange-50
                  px-5 py-3
                  text-sm font-semibold text-orange-700
                "
              >
                Enterprise Ready
              </div>

              <div
                className="
                  rounded-xl
                  border border-blue-100
                  bg-blue-50
                  px-5 py-3
                  text-sm font-semibold text-blue-700
                "
              >
                Multi-tenant Architecture
              </div>

              <div
                className="
                  rounded-xl
                  border border-slate-200
                  bg-white
                  px-5 py-3
                  text-sm font-semibold text-slate-700
                "
              >
                Temps réel
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
