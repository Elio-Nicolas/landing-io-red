export default function CTA() {
  return (
    <section
      id="contact"
      className="py-28 bg-gradient-to-r from-blue-600 to-blue-700 text-white"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold">
          ¿Tenés un proyecto en mente?
        </h2>

        <p className="mt-6 text-lg text-blue-100">
          Contanos tu idea y veamos juntos cómo convertirla en una solución
          tecnológica sólida y escalable.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:contacto@iored.com"
            className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-100 transition"
          >
            Escribinos por email
          </a>

          <a
            href="https://wa.me/5492657659689"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-white font-semibold rounded-xl hover:bg-white hover:text-blue-700 transition"
          >
            WhatsApp
          </a>
        </div>

        <p className="mt-8 text-sm text-blue-200">
          Primera charla sin costo · Respuesta en menos de 24hs
        </p>
      </div>
    </section>
  );
}
