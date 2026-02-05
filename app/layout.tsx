import "./globals.css";
import type { Metadata } from "next";
import Bot from "@/components/Bot";

export const metadata: Metadata = {
  title: {
    default: "IO Red | Desarrollo de Software a Medida",
    template: "%s | IO Red",
  },
  description:
    "Desarrollamos software a medida para empresas y startups. Aplicaciones web escalables, integraciones y soluciones tecnológicas pensadas para crecer.",
  metadataBase: new URL("https://www.iored.com"),
  icons: {
  icon: [
    { url: "/icon.png", type: "image/png", sizes: "32x32" },
    { url: "/icon.png", type: "image/png", sizes: "16x16" },
  ],

  },
  openGraph: {
    title: "IO Red | Desarrollo de Software a Medida",
    description:
      "Software a medida para empresas y startups. Desarrollo web, integraciones y soluciones escalables.",
    url: "https://www.iored.com",
    siteName: "IO Red",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased bg-white text-gray-900">
        {children}
        <Bot />
      </body>
    </html>
  );
}
