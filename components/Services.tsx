export default function Services() {
  return (
    <section  id="services" className="w-full bg-slate-200 py-24 border-t border-b border-slate-300">

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-14">
          Servicios
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
            <div className="w-12 h-12 mb-6 rounded-md bg-slate-100" />
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Desarrollo a medida
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Aplicaciones web y móviles pensadas para escalar, con foco en
              mantenibilidad y negocio.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
            <div className="w-12 h-12 mb-6 rounded-md bg-slate-100" />
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Arquitectura & Backend
            </h3>
            <p className="text-slate-700 leading-relaxed">
              APIs, bases de datos y estructuras sólidas que soportan crecimiento
              real, no demos.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
            <div className="w-12 h-12 mb-6 rounded-md bg-slate-100" />
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              UX & Producto
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Diseño funcional, claro y usable. Menos ruido visual, más foco en
              el usuario.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
