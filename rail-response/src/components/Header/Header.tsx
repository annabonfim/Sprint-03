import Image from "next/image";
 
const Header = () => {
  return (
    <header className="w-full ##205375 text-white py-4 px-6 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <Image src="/img/logo.jpeg" alt="Logo" width={50} height={50} />
        <span className="text-xl font-bold">Meu Sistema</span>
      </div>
 
      {/* Navegação */}
      <nav className="hidden md:flex space-x-6">
        <a href="/" className="hover:text-gray-300">Início</a>
        <a href="/cadastro" className="hover:text-gray-300">Cadastro</a>
        <a href="/integrantes" className="hover:text-gray-300">Integrantes</a>
        <a href="/login" className="hover:text-gray-300">Login</a>
      </nav>
 
      {/* Ícone de Menu para Mobile */}
      <button className="md:hidden text-white text-2xl">☰</button>
    </header>
  );
};
 
export default Header;