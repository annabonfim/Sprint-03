"use client";
 
import { useState } from "react";
import { useRouter } from "next/navigation";

 
const CadastroForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    cpf: "",
    telefone: "",
  });
 
  const router = useRouter();
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados cadastrados:", formData);
    router.push("/principal"); // Redireciona para a página principal após cadastro
  };
 
  return (
    <form onSubmit={handleSubmit} className="flex flex-col mt-6 space-y-4">
      {["nome", "sobrenome", "email", "cpf", "telefone"].map((field) => (
        <div key={field} className="text-left">
          <label htmlFor={field} className="block text-sm font-medium text-blue-900 capitalize">
            {field}:
          </label>
          <input
            type="text"
            id={field}
            name={field}
            value={formData[field as keyof typeof formData]}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      ))}
 
      {/* Botão de Envio */}
      <button type="submit" className="bg-orange-400 text-white py-2 px-4 rounded-md hover:bg-blue-900">
        Submit
      </button>
    </form>
  );
};
 
export default CadastroForm;
 
 