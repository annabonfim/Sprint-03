import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RailResponse",
  description: "Sistema de resposta ferroviária",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}