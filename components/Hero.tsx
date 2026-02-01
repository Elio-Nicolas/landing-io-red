export default function Hero() {
  return (
    <section className="relative bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-28 grid gap-12 md:grid-cols-2 items-center">
        
        {/* Texto */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Desarrollo de software <br />
            <span className="text-blue-600">a medida para tu negocio</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Creamos aplicaciones web y soluciones tecnológicas escalables,
            pensadas para resolver problemas reales y acompañar el crecimiento
            de tu empresa.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Hablemos de tu proyecto
            </a>

            <a
              href="#services"
              className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Ver servicios
            </a>
          </div>
        </div>

        {/* Visual / Placeholder */}
        <div className="hidden md:flex justify-center">
          <div className="w-full max-w-md h-72 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center text-blue-700 font-semibold">
            Visual / Imagen
          </div>
        </div>

      </div>
    </section>
  );
}
