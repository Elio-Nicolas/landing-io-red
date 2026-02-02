import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className="w-full bg-slate-200 py-24 border-t border-b border-slate-300">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-14 text-center md:text-left">
          Servicios
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
       {/* Card 1: Desarrollo a medida */}
<div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm transition-shadow hover:shadow-md flex flex-col md:flex-row items-center gap-6">
  
  {/* Texto a la derecha */}
  <div className="flex-1 text-center md:text-left">
    <h3 className="text-xl font-semibold text-slate-900 mb-3">
      Desarrollo a medida
    </h3>
    <p className="text-slate-700 leading-relaxed">
      Aplicaciones web y móviles diseñadas para escalar, con visión en el negocio.
    </p>
  </div>
  
  {/* Imagen SVG a la izquierda */}
  <div className="flex-shrink-0 w-32 h-32 flex items-center justify-center bg-white rounded-xl shadow-inner">
    <Image
      src="/mobile.svg"
      alt="Desarrollo a medida"
      width={180}   // 128px para que se vea grande
      height={180}
      className="object-contain"
    />
  </div>

  

</div>


          {/* Card 2: Arquitectura & Backend (CON IMAGEN INTEGRADA) */}
          <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm transition-shadow hover:shadow-md">
            
            {/* Contenedor de la imagen ajustado para ilustración */}
            <div className="w-full flex justify-center mb-6">
              <Image
                src="/backend.png" // Asegúrate de guardar la imagen con este nombre en /public
                alt="Arquitectura y Backend"
                width={200} // Aumenté el tamaño para que se vea el detalle
                height={200}
                className="object-contain" // Esto asegura que la imagen no se recorte
              />
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Arquitectura & Backend
            </h3>
            <p className="text-slate-700 leading-relaxed">
              APIs, bases de datos y estructuras sólidas que soportan crecimiento real.
            </p>
          </div>

          {/* Card 3: UX & Producto (CON IMAGEN INTEGRADA) */}
          <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm transition-shadow hover:shadow-md">
            
            {/* Contenedor de la imagen ajustado */}
            <div className="w-full flex justify-center mb-6">
               {/* Si decides usar la imagen de UX que generamos antes: */}
               <Image
                src="/UX.png" // Asegúrate de guardar la imagen con este nombre en /public
                alt="UX y Producto"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              UX & Producto
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Diseño funcional, adaptativo y usable. Menos ruido visual, pensando en el usuario.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}