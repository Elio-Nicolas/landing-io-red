const services = [
  {
    title: "Desarrollo Web",
    description:
      "Aplicaciones web modernas, rápidas y escalables, adaptadas a las necesidades reales de tu negocio.",
  },
  {
    title: "Software a Medida",
    description:
      "Diseñamos y construimos soluciones personalizadas que se integran con tus procesos y sistemas existentes.",
  },
  {
    title: "Integraciones & APIs",
    description:
      "Conectamos plataformas, automatizamos flujos y desarrollamos APIs seguras y eficientes.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Título */}
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Nuestros servicios
          </h2>
          <p className="mt-4 text-gray-600">
            Soluciones tecnológicas pensadas para escalar y generar impacto real
            en tu negocio.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
