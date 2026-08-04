import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const baseMetadata: Metadata = {
  title: "Ferpec Commerce | Ferramentas, jardinagem e balanças",
  description:
    "Ferramentas para motocicletas, jardinagem e uso geral, além de balanças profissionais. Conheça a Ferpec Commerce e compre pelos canais oficiais.",
  keywords: [
    "Ferpec Commerce",
    "ferramentas",
    "ferramentas para motocicletas",
    "jardinagem",
    "balanças",
    "Santa Bárbara d'Oeste",
  ],
  icons: {
    icon: "/brand/ferpec.jpeg",
    shortcut: "/brand/ferpec.jpeg",
  },
  openGraph: {
    title: "Ferpec Commerce | Soluções para quem faz acontecer",
    description:
      "Ferramentas, equipamentos e precisão para oficinas, jardins, empresas e projetos.",
    type: "website",
    locale: "pt_BR",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "www.ferpec.com.br";
  const protocol = host.includes("localhost") || host.startsWith("127.0.0.1") ? "http" : "https";
  const socialImage = `${protocol}://${host}/og.png`;

  return {
    ...baseMetadata,
    openGraph: {
      ...baseMetadata.openGraph,
      url: `${protocol}://${host}`,
      images: [{ url: socialImage, width: 1792, height: 912, alt: "Ferpec Commerce — Soluções para quem faz acontecer" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Ferpec Commerce | Soluções para quem faz acontecer",
      description: "Ferramentas, equipamentos e precisão para oficinas, jardins, empresas e projetos.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
