"use client"; // Necesario para usar useState y useEffect
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
      className={`w-full fixed top-0 left-0 z-50 transition-shadow duration-300 font-sans ${
        scrolled ? "shadow-md" : ""
      }`}
      style={{ backgroundColor: "#0A2540" }} // fondo original
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <span className="font-bold text-lg text-foreground">IO Red</span>

        <nav className="space-x-6 text-sm text-foreground">
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
