"use client";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";

export default function CadastroPage() {
  return (
    <div className="cadastro-container">
      {/* Cabeçalho */}
      <Header />

      {/* Conteúdo da Página */}
      <main className="cadastro-main">
        {/* Logo */}
        <div className="cadastro-logo">
          <Image
            src="/img/logo.png"
            alt="Ícone de trem"
            width={120}
            height={120}
            className="logo-img"
          />
        </div>

        <div className="cadastro-box">
          {/* Título */}
          <h1 className="cadastro-title">Cadastro</h1>

          {/* Formulário de Cadastro */}
          <form className="cadastro-form">
            <div className="cadastro-field">
              <label>Nome</label>
              <input type="text" className="cadastro-input" placeholder="Digite seu nome" />
            </div>

            <div className="cadastro-field">
              <label>Sobrenome</label>
              <input type="text" className="cadastro-input" placeholder="Digite seu sobrenome" />
            </div>

            <div className="cadastro-field">
              <label>Email</label>
              <input type="email" className="cadastro-input" placeholder="Digite seu email" />
            </div>

            <div className="cadastro-field">
              <label>CPF</label>
              <input type="text" className="cadastro-input" placeholder="Digite seu CPF" />
            </div>

            <div className="cadastro-field">
              <label>Telefone</label>
              <input type="text" className="cadastro-input" placeholder="Digite seu telefone" />
            </div>

            {/* Botão de Envio */}
            <button type="submit" className="cadastro-button">Cadastrar</button>
          </form>
        </div>
      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}