"use client";

import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <Image src="/img/logo.jpeg" alt="RailResponse Logo" width={80} height={80} />
          <h2>Login</h2>
          <p>Use your RailResponse</p>
        </div>

        <form className="login-form">
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Digite seu email" />
          </div>

          <div className="input-group">
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" placeholder="Digite sua senha" />
          </div>

          <Link href="/forgot-password" className="forgot-password">
            Esqueceu email ou senha?
          </Link>

          <div className="login-actions">
            <Link href="/cadastro" className="create-account">Criar Conta</Link>
            <button type="submit" className="next-button">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
}