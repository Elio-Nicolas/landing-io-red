import { AppWindow, Database, Workflow, ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    icon: AppWindow,
    title: "Aplicaciones a medida",
    description: "Aplicaciones web y experiencias móviles pensadas para resolver necesidades concretas, no para sumar complejidad.",
    tags: ["Web", "Móvil", "PWA"],
  },
  {
    number: "02",
    icon: Database,
    title: "Sistemas y backend",
    description: "APIs, bases de datos e integraciones con una arquitectura clara, segura y preparada para evolucionar.",
    tags: ["APIs", "Datos", "Integraciones"],
  },
  {
    number: "03",
    icon: Workflow,
    title: "Automatización y producto",
    description: "Digitalizamos procesos y convertimos ideas en productos útiles, con foco en la experiencia de quien los usa.",
    tags: ["Procesos", "UX", "Prototipos"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden border-y border-slate-200 bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E11D48]">Qué hacemos</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0A2540] sm:text-4xl md:text-5xl">Software pensado para un propósito.</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-600 md:justify-self-end md:text-lg">
            Cada proyecto es distinto. Empezamos por entender el problema y elegimos la solución técnica que tenga sentido para las personas y el negocio.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map(({ number, icon: Icon, title, description, tags }) => (
            <article key={number} className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-[#F8FAFC] p-7 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A2540] text-sky-200 transition group-hover:bg-[#E11D48] group-hover:text-white"><Icon size={23} /></span>
                <span className="text-sm font-semibold tabular-nums text-slate-300">{number}</span>
              </div>
              <h3 className="mt-8 text-xl font-semibold tracking-tight text-[#0A2540]">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => <span key={tag} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600">{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
        <a href="#contact" className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-[#0A2540] transition hover:gap-3 hover:text-[#E11D48]">Hablemos de tu proyecto <ArrowUpRight size={17} /></a>
      </div>
    </section>
  );
}
