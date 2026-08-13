import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const baseMetadata: Metadata = {
  title: "Ferpec Commerce | Revenda multimarcas online",
  description:
    "Revenda multimarcas com atuação nos principais canais de comércio eletrônico do Brasil. Produtos e equipamentos para profissionais, empresas e consumidores.",
  keywords: [
    "Ferpec Commerce",
    "revenda multimarcas",
    "comércio eletrônico",
    "ferramentas",
    "ferramentas para motocicletas",
    "jardinagem",
    "balanças",
    "equipamentos antropométricos",
    "Santa Bárbara d'Oeste",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Ferpec Commerce | Revenda multimarcas online",
    description:
      "Produtos e equipamentos de marcas reconhecidas, com atuação nos principais canais de comércio eletrônico do Brasil.",
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
      title: "Ferpec Commerce | Revenda multimarcas online",
      description: "Produtos e equipamentos de marcas reconhecidas, com atuação nos principais canais de comércio eletrônico do Brasil.",
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
