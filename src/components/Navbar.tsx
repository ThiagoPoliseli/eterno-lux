import React from 'react';
import { Diamond } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Diamond className="h-6 w-6 text-[#B8860B]" />
            <span className="text-xl font-semibold text-white">Eterno Lux</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-white hover:text-[#B8860B] transition-colors">Início</a>
            <a href="#colecoes" className="text-white hover:text-[#B8860B] transition-colors">Coleções</a>
            <a href="#catalogo" className="text-white hover:text-[#B8860B] transition-colors">Catálogo</a>
            <a href="#contato" className="text-white hover:text-[#B8860B] transition-colors">Contato</a>
          </div>
          <a href="#catalogo" className="btn-primary">Ver Catálogo</a>
        </div>
      </div>
    </nav>
  );
}