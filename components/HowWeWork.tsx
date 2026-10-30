import { Search, Code2, Rocket } from "lucide-react";

const steps = [
  { number: "01", icon: Search, title: "Entender", text: "Conversamos sobre el problema, las personas que lo viven y el resultado que necesitás conseguir." },
  { number: "02", icon: Code2, title: "Diseñar y construir", text: "Definimos el alcance, priorizamos lo importante y desarrollamos en etapas con decisiones técnicas claras." },
  { number: "03", icon: Rocket, title: "Publicar y evolucionar", text: "Preparamos la solución para su uso real y planificamos mejoras a partir de necesidades y aprendizajes." },
];

export default function HowWeWork() {
  return (
    <section id="process" className="relative overflow-hidden bg-[#071626] px-5 py-24 text-white md:px-8 md:py-32">
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-sky-500/10 blur-[100px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">Cómo trabajamos</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">Un proceso claro. Decisiones con sentido.</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">Sin recetas rígidas ni promesas vacías. Avanzamos por etapas, con objetivos definidos y comunicación directa durante el desarrollo.</p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map(({ number, icon: Icon, title, text }, index) => (
            <article key={number} className="relative rounded-2xl border border-white/10 bg-white/[0.045] p-7 transition duration-300 hover:border-sky-200/30 hover:bg-white/[0.07] sm:p-8">
              {index < steps.length - 1 && <span className="absolute right-0 top-12 hidden h-px w-5 translate-x-full bg-gradient-to-r from-sky-200/30 to-transparent md:block" aria-hidden="true" />}
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-sky-200/20 bg-sky-200/10 text-sky-200"><Icon size={22} /></span>
                <span className="text-4xl font-semibold tracking-tight text-white/15">{number}</span>
              </div>
              <h3 className="mt-8 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
