import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center">
      {/* Fondo absoluto */}
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt="IO Red - Desarrollo de software"
          fill
          priority
          className="object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/65 z-10" />
      </div>

      {/* Contenido del Hero */}
      <div className="relative z-20 max-w-3xl text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Desarrollo de software a medida
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-8">
          Soluciones digitales pensadas para escalar, mantener y crecer.
        </p>
        <a
          href="#services"
          className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Hablemos
        </a>
      </div>
    </section>
  );
}
