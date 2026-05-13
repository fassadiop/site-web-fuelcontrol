import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fuelcontrol.app"),

  title: {
    default:
      "FuelControl | ERP SaaS pour réseaux de stations-service",
    template: "%s | FuelControl",
  },

  description:
    "FuelControl est une plateforme SaaS de pilotage opérationnel, financier et analytique des réseaux de stations-service.",

  keywords: [
    "FuelControl",
    "ERP stations-service",
    "gestion carburant",
    "pilotage réseau énergétique",
    "supervision stations-service",
    "dashboard carburant",
    "logiciel pétrolier",
    "gestion dépôtage",
    "gestion relais",
    "gestion cuves",
  ],

  openGraph: {
    title:
      "FuelControl | ERP SaaS Stations-Service",

    description:
      "Pilotage opérationnel et financier des réseaux de stations-service.",

    url: "https://fuelcontrol.app",

    siteName: "FuelControl",

    images: [
      {
        url: "/og-fuelcontrol.png",
        width: 1200,
        height: 630,
        alt: "FuelControl",
      },
    ],

    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "FuelControl | ERP SaaS Stations-Service",

    description:
      "Plateforme de pilotage des réseaux de stations-service.",

    images: ["/og-fuelcontrol.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          bg-white
          text-slate-900
          antialiased
        `}
      >
        <div className="relative min-h-screen overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}