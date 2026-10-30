import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://iored.com.ar"),
  title: {
    default: "IORed Software Arg. | Desarrollo de software a medida",
    template: "%s | IORed Software Arg.",
  },
  description:
    "Desarrollo de software a medida y productos digitales. Conocé MiFarma, MascotasVM y MiBus, soluciones creadas por IORed Software Arg.",
  openGraph: {
    title: "IORed Software Arg. | Tecnología que resuelve",
    description:
      "Software a medida y productos digitales pensados para resolver problemas reales.",
    url: "https://iored.com.ar",
    siteName: "IORed Software Arg.",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IORed Software Arg. | Tecnología que resuelve",
    description:
      "Software a medida y productos digitales pensados para resolver problemas reales.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased bg-white text-gray-900">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
