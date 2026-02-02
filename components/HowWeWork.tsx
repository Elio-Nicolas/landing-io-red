export default function HowWeWork() {
  return (
    <section
      id="value-proposition"
      className="w-full py-24 px-6 bg-[var(--brand-muted)] text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cómo trabajamos
          </h2>
          <p className="text-lg md:text-xl text-slate-200">
            Transformamos ideas en soluciones digitales de calidad, escalables y fáciles de mantener.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-16">

          {/* Línea animada */}
          <div className="absolute left-6 top-0 h-full w-px bg-white/20 hidden md:block animate-line-grow" />

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
          ].map((item, index) => (
            <div
              key={item.step}
              style={{ animationDelay: `${index * 180}ms` }}
              className={`
                relative
                bg-white
                rounded-2xl
                p-10
                shadow-md
                md:pl-20
                opacity-0
                animate-card-in
                ${index % 2 === 0 ? "md:animate-slide-left" : "md:animate-slide-right"}
              `}
            >
              {/* Punto */}
              <div className="hidden md:block absolute left-4 top-10 w-4 h-4 rounded-full bg-[var(--brand-accent)]" />

              {/* Número */}
              <div className="text-5xl font-bold text-[var(--brand-accent)]/20 mb-4">
                {item.step}
              </div>

              <h3 className="text-xl font-semibold mb-3 text-[var(--brand-text)]">
                {item.title}
              </h3>

              <p className="text-[var(--brand-muted)] leading-relaxed max-w-xl">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
