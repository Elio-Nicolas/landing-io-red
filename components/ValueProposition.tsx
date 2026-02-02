export default function ValueProposition() {
  return (
    <section className="w-full bg-white py-24 border-t border-slate-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Propuesta de valor
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            No solo desarrollamos software. Construimos soluciones pensadas para durar y crecer.
          </p>
        </div>

        {/* Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Item 1 */}
          <div className="p-10 rounded-xl border border-slate-200 bg-slate-50">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Pensado para escalar
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Diseñamos sistemas preparados para crecer desde el primer día,
              evitando retrabajos y deuda técnica innecesaria.
            </p>
          </div>

          {/* Item 2 */}
          <div className="p-10 rounded-xl border border-slate-200 bg-slate-50">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Código claro y mantenible
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Priorizamos la calidad del código para que cualquier equipo pueda
              entenderlo, mantenerlo y evolucionarlo.
            </p>
          </div>

          {/* Item 3 */}
          <div className="p-10 rounded-xl border border-slate-200 bg-slate-50">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Enfoque en negocio
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Cada decisión técnica está alineada con objetivos reales:
              rendimiento, costos y resultados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
