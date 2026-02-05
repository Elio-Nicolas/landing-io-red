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
       <div className="flex flex-col items-center md:items-start animate-fade-in">
  <span className="font-bold text-2xl md:text-3xl text-foreground/90 font-sans relative overflow-hidden">
  <span className="relative z-10">IO Red</span>
  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine" />
</span>

 <span className="text-sm md:text-base text-foreground/80 font-sans text-center animate-pulse-soft">
  Software
</span>

</div>


        {/* Navegación */}
        <nav className="flex items-center space-x-8 text-foreground/80 text-sm md:text-base font-medium tracking-wide">
  <a
    href="#services"
    className="relative transition-colors hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-current after:transition-all hover:after:w-full"
  >
    Servicios
  </a>

  <a
    href="https://wa.me/5492657659689"
    target="_blank"
    rel="noopener noreferrer"
    className="relative transition-colors hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-current after:transition-all hover:after:w-full"
  >
    Contacto
  </a>
</nav>

      </div>
    </header>
  );
}
