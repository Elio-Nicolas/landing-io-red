"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-background px-4 md:px-8 py-20 md:py-32">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Texto Izquierda */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold font-sans text-foreground mb-6">
            Desarrollo de Software a Medida
          </h1>
          <p className="text-lg md:text-xl text-brand-muted mb-8">
            Creamos aplicaciones web y software a medida para empresas que buscan soluciones tecnológicas sólidas y escalables.  
            Potenciá tu negocio con nuestra experiencia en desarrollo full stack.
          </p>
         <a
  href="#services"
  className="
    inline-block
    bg-[var(--color-cta)]
    text-[#0A2540]
    px-6 py-3
    rounded-lg
    font-semibold
    hover:bg-[#0EA5E9]
    transition
  "
>
  Conocé nuestros servicios
</a>

        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-full max-w-md">
            <Image
              src="/Ingeniero.svg"
              alt="Ilustración de software"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
