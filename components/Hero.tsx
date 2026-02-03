"use client";

export default function Hero() {
  return (
    <section className="w-full bg-white px-4 md:px-8 py-20 md:py-32">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* Texto Izquierda */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold font-sans text-[#0A2540] mb-6">
            Desarrollo de Software a Medida
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-8">
            Creamos aplicaciones web y software a medida para empresas que buscan
            soluciones tecnológicas sólidas y escalables.
            <br />
            Potenciá tu negocio con nuestra experiencia en desarrollo full stack.
          </p>

          <a
            href="#services"
            className="
              inline-block
              bg-[#E11D48]
              text-white
              px-6 py-3
              rounded-lg
              font-semibold
              hover:bg-[#BE123C]
              transition
            "
          >
            Conocé nuestros servicios
          </a>
        </div>

        {/* Video Derecha */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto object-contain"
            >
              <source src="/video1.mp4" type="video/mp4" />
              Tu navegador no soporta video HTML5.
            </video>
          </div>
        </div>

      </div>
    </section>
  );
}
