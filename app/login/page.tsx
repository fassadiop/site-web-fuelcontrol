"use client";

import Image from "next/image";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#050E18] via-[#0B1F33] to-[#06263A] px-6">

      {/* Card */}
      <div className="w-full max-w-md bg-white/95 backdrop-blur rounded-3xl shadow-2xl p-6 md:p-10 border border-gray-100">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/logo-fuelControl.png"
            alt="FuelControl"
            width={120}
            height={120}
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-extrabold text-center text-[#0F4C75]">
          Connexion à la plateforme
        </h1>

        <p className="mt-3 text-sm text-center text-gray-600">
          Accès sécurisé réservé aux organisations partenaires et
          aux utilisateurs autorisés.
        </p>

        {/* Form */}
        <form className="mt-8 space-y-6">

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Adresse email
            </label>
            <input
              type="email"
              disabled
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 bg-gray-100 cursor-not-allowed"
              placeholder="email@organisation.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mot de passe
            </label>
            <input
              type="password"
              disabled
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 bg-gray-100 cursor-not-allowed"
              placeholder="••••••••"
            />
          </div>

          <button
            type="button"
            disabled
            className="w-full bg-[#F59E0B]/80 text-black py-4 rounded-xl font-semibold cursor-not-allowed"
          >
            Se connecter
          </button>
        </form>

        {/* Info */}
        <p className="mt-6 text-xs text-center text-gray-500">
          Pour toute demande d’accès, veuillez contacter l’administrateur
          de la plateforme ou utiliser le formulaire de contact du site officiel.
        </p>

        {/* Back link */}
        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-sm text-[#0F4C75] hover:underline"
          >
            ← Retour au site FuelControl
          </a>
        </div>

      </div>
    </main>
  );
}
