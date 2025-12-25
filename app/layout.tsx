import type { Metadata } from "next";
import { Libre_Baskerville, Manrope } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
  display: "swap",
});

const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cadly Labs | Automatización de Procesos con IA",
  description:
    "Automatiza el trabajo manual que tu sistema de gestión no puede hacer. Sin cambiar de ERP, sin procesos traumáticos. Soluciones de IA para logística, farmacia e industria.",
  keywords: [
    "automatización de procesos",
    "IA para empresas",
    "ERP",
    "logística",
    "industria 4.0",
    "España",
    "inteligencia artificial",
    "gestión empresarial",
  ],
  authors: [{ name: "Cadly Labs" }],
  creator: "Cadly Labs",
  publisher: "Cadly Labs",
  openGraph: {
    title: "Cadly Labs | Automatización de Procesos con IA",
    description:
      "Automatiza el trabajo manual que tu sistema de gestión no puede hacer. Soluciones de automatización para empresas industriales españolas.",
    type: "website",
    locale: "es_ES",
    url: "https://cadlylabs.com",
    siteName: "Cadly Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cadly Labs | Automatización de Procesos con IA",
    description:
      "Soluciones de automatización para empresas industriales españolas",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${libreBaskerville.variable} ${manrope.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
