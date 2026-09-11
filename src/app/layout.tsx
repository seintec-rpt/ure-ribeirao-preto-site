import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "URE Ribeirão Preto | Recursos Digitais",
  description:
    "Páginas e ferramentas complementares ao site institucional da URE Ribeirão Preto.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
