import Image from "next/image";
 
const Header = () => {
  return (
    <header className="header-container">
      {/* Logo */}
      <div className="header-logo">
        <Image src="/img/logo.jpeg" alt="Logo" width={50} height={50} />
      </div>
 
      {/* Navegação */}
      <nav className="header-nav">
        <a href="/" className="header-link">Início</a>
        <a href="/login" className="header-link">Login</a>
        <a href="/cadastro" className="header-link">Cadastro</a>
        <a href="/integrantes" className="header-link">Integrantes</a>
      </nav>
 
      {/* Ícone de Menu para Mobile */}
      <button className="header-menu-btn">☰</button>
    </header>
  );
};
 
export default Header;