const values = [
  {
    title: "Desarrollo a medida",
    description:
      "Cada proyecto se diseña según tus objetivos reales. No usamos plantillas ni soluciones genéricas.",
  },
  {
    title: "Enfoque en negocio",
    description:
      "La tecnología es un medio. Nos enfocamos en resolver problemas y generar valor concreto.",
  },
  {
    title: "Comunicación clara",
    description:
      "Hablamos en términos simples, con seguimiento constante y sin sorpresas.",
  },
  {
    title: "Escalabilidad y calidad",
    description:
      "Construimos soluciones preparadas para crecer, con buenas prácticas y código mantenible.",
  },
];

export default function ValueProposition() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            ¿Por qué elegirnos?
          </h2>
          <p className="mt-4 text-gray-600">
            Trabajamos como socios tecnológicos, no solo como proveedores.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl border border-gray-200"
            >
              <h3 className="font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
