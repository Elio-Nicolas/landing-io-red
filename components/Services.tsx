import Image from "next/image";

export default function Services() {
  return (
    <section
      id="services"
      className="w-full bg-slate-200 py-24 border-t border-b border-slate-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-14 text-center md:text-left">
          Servicios
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <div className="group bg-white rounded-xl p-8 border border-slate-200 shadow-sm
                          transform transition-all duration-300 ease-out
                          hover:-translate-y-2 hover:shadow-lg">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/mobile.svg"
                alt="Desarrollo a medida"
                width={160}
                height={160}
                className="object-contain mb-6 transition-transform duration-300 group-hover:scale-105"
                priority
              />

              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Desarrollo a medida
              </h3>

              <p className="text-slate-700 leading-relaxed">
                Aplicaciones web y móviles diseñadas para escalar, con visión en el negocio.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="group bg-white rounded-xl p-8 border border-slate-200 shadow-sm
                          transform transition-all duration-300 ease-out
                          hover:-translate-y-2 hover:shadow-lg">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/arquitectura.svg"
                alt="Arquitectura y Backend"
                width={160}
                height={160}
                className="object-contain mb-6 transition-transform duration-300 group-hover:scale-105"
              />

              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Arquitectura & Backend
              </h3>

              <p className="text-slate-700 leading-relaxed">
                APIs, bases de datos y estructuras sólidas que soportan crecimiento real.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="group bg-white rounded-xl p-8 border border-slate-200 shadow-sm
                          transform transition-all duration-300 ease-out
                          hover:-translate-y-2 hover:shadow-lg">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/diseño.svg"
                alt="UX y Producto"
                width={160}
                height={160}
                className="object-contain mb-6 transition-transform duration-300 group-hover:scale-105"
              />

              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                UX & Producto
              </h3>

              <p className="text-slate-700 leading-relaxed">
                Diseño funcional, adaptativo y usable. Menos ruido visual, pensando en el usuario.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
