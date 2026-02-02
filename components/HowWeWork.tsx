export default function HowWeWork() {
  return (
     <section
      id="value-proposition"
      className="w-full py-20 px-6 bg-[var(--color-primary)] text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
      Cómo trabajamos
    </h2>
    <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto">
      Transformamos ideas en soluciones digitales de calidad, escalables y fáciles de mantener.
    </p>
  </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              step: "01",
              title: "Planificación",
              text: "Analizamos tu proyecto y definimos una estrategia clara antes de escribir una sola línea de código.",
            },
            {
              step: "02",
              title: "Desarrollo",
              text: "Construimos soluciones a medida con tecnologías modernas y foco en calidad y escalabilidad.",
            },
            {
              step: "03",
              title: "Entrega y soporte",
              text: "Entregamos software listo para producción y acompañamos su crecimiento.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl p-10 shadow-md hover:shadow-xl transition"
            >
              <div className="text-sm font-semibold text-[var(--brand-accent)] mb-4">
                {item.step}
              </div>

              <h3 className="text-xl font-semibold mb-3 text-[var(--brand-text)]">
                {item.title}
              </h3>

              <p className="text-[var(--brand-muted)] leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
