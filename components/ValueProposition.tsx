import Image from "next/image";

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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* CARD 1 */}
          <div className="group bg-slate-50 p-10 rounded-xl border border-slate-200
                          shadow-sm transform transition-all duration-300 ease-out
                          hover:-translate-y-2 hover:shadow-lg">
            <div className="flex flex-col items-center text-center">
              
              <Image
                src="/escalar.svg"   // IMAGEN
                alt="Pensado para escalar"
                width={140}
                height={140}
                className="object-contain mb-6 transition-transform duration-300 group-hover:scale-105"
              />

              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Pensado para escalar
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Diseñamos sistemas preparados para crecer desde el primer día,
                evitando retrabajos y deuda técnica innecesaria.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="group bg-slate-50 p-10 rounded-xl border border-slate-200
                          shadow-sm transform transition-all duration-300 ease-out
                          hover:-translate-y-2 hover:shadow-lg">
            <div className="flex flex-col items-center text-center">
              
              <Image
                src="/mantenible.svg"   // ← CAMBIAR IMAGEN
                alt="Código claro y mantenible"
                width={140}
                height={140}
                className="object-contain mb-6 transition-transform duration-300 group-hover:scale-105"
              />

              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Código claro y mantenible
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Priorizamos la calidad del código para que cualquier equipo pueda
                entenderlo, mantenerlo y evolucionarlo.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="group bg-slate-50 p-10 rounded-xl border border-slate-200
                          shadow-sm transform transition-all duration-300 ease-out
                          hover:-translate-y-2 hover:shadow-lg">
            <div className="flex flex-col items-center text-center">
              
              {/* IMAGEN → elegís vos */}
              <Image
                src="/enfocado.svg"   // ← CAMBIAR IMAGEN
                alt="Enfoque en negocio"
                width={140}
                height={140}
                className="object-contain mb-6 transition-transform duration-300 group-hover:scale-105"
              />

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
      </div>
    </section>
  );
}
