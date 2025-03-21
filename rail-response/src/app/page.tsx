"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div id="home-container">
      {/* Logo */}
      <div id="logo-container">
        <Image
          src="/img/logo.jpeg"
          alt="RailResponse Logo"
          width={256}
          height={256}
          className="logo-image"
        />
      </div>

      {/* Título */}
      <h1 id="home-title">RailResponse</h1>

      {/* Botão */}
      <Link href="/principal">
        <button id="home-button">Entrar</button>
      </Link>
    </div>
  );
}