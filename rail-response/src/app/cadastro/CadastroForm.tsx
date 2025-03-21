"use client";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CadastroForm from "./CadastroForm";
import Image from "next/image";

export default function CadastroPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Cabeçalho */}
      <Header />

      {/* Conteúdo da Página */}
      <main className="flex flex-grow justify-center items-center px-6">
        <div className="bg-white p-10 rounded-2xl shadow-lg w-96 max-w-lg text-center relative">
          {/* Logo */}
          <Image
            src="/img/logo.png"
            alt="Ícone de trem"
            width={100}
            height={100}
            className="absolute -top-12 left-1/2 transform -translate-x-1/2 rounded-full shadow-lg"
          />

          {/* Título */}
          <h1 className="text-2xl font-bold text-blue-900 mt-14">Cadastro</h1>

          {/* Formulário de Cadastro */}
          <CadastroForm />
        </div>
      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}