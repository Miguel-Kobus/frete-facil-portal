
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-freight-800">
              FastFreight
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-freight-600 font-medium">
              Serviços
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-freight-600 font-medium">
              Como Funciona
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-freight-600 font-medium">
              Depoimentos
            </a>
            <a href="#contact" className="text-gray-600 hover:text-freight-600 font-medium">
              Contato
            </a>
            <Button className="bg-freight-600 hover:bg-freight-700">
              Solicitar Cotação
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-gray-500 hover:text-freight-600"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <a 
              href="#services" 
              className="block py-2 text-gray-600 hover:text-freight-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </a>
            <a 
              href="#how-it-works" 
              className="block py-2 text-gray-600 hover:text-freight-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Como Funciona
            </a>
            <a 
              href="#testimonials" 
              className="block py-2 text-gray-600 hover:text-freight-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a 
              href="#contact" 
              className="block py-2 text-gray-600 hover:text-freight-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
            <Button 
              className="mt-3 w-full bg-freight-600 hover:bg-freight-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Solicitar Cotação
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
