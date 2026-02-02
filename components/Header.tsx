"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-shadow duration-300 backdrop-blur-md ${
        scrolled ? "shadow-md bg-[rgba(10,37,64,0.9)]" : "bg-[rgba(10,37,64,0.6)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo / Nombre con subtítulo centrado */}
        <div className="flex flex-col items-center md:items-start">
          <span className="font-bold text-2xl md:text-3xl text-foreground/90 font-sans">
            IO Red
          </span>
          <span className="text-sm md:text-base text-foreground/80 font-sans text-center">
            Software
          </span>
        </div>

        {/* Navegación */}
        <nav className="space-x-6 text-sm text-foreground/80 md:text-base">
          <a href="#services" className="hover:underline">
            Servicios
          </a>
          <a
            href="https://wa.me/5492657659689"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}
