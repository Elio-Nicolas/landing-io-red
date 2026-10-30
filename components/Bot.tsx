"use client";

import { Bot as BotIcon, Grip, X } from "lucide-react";
import { useRef, useState } from "react";

type Position = { right: number; bottom: number };
type DragState = { pointerX: number; pointerY: number; right: number; bottom: number };

export default function Bot() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<Position>({ right: 24, bottom: 24 });
  const drag = useRef<DragState | null>(null);
  const didDrag = useRef(false);

  const startDrag = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (event.button !== 0) return;
    didDrag.current = false;
    drag.current = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      right: position.right,
      bottom: position.bottom,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const moveDrag = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (!drag.current) return;
    if (Math.abs(event.clientX - drag.current.pointerX) > 4 || Math.abs(event.clientY - drag.current.pointerY) > 4) didDrag.current = true;
    const container = event.currentTarget.parentElement;
    if (!container) return;
    const bounds = container.getBoundingClientRect();
    const nextRight = drag.current.right - (event.clientX - drag.current.pointerX);
    const nextBottom = drag.current.bottom - (event.clientY - drag.current.pointerY);
    setPosition({
      right: Math.max(8, Math.min(bounds.width - 64, nextRight)),
      bottom: Math.max(8, Math.min(bounds.height - 64, nextBottom)),
    });
  };

  const stopDrag = () => {
    drag.current = null;
  };

  return (
    <>
      {open && (
        <div
          className="absolute z-50 w-[min(320px,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl animate-fade-in"
          style={{ right: position.right, bottom: position.bottom + 72, maxHeight: "min(70vh, 560px)" }}
        >
          <div className="flex items-start justify-between border-b border-slate-200 bg-slate-50 px-5 py-4">
            <div>
              <h4 className="font-semibold text-slate-900">Hola, somos IORed</h4>
              <p className="mt-1 text-sm text-slate-600">Desarrollo de software a medida para proyectos reales.</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} className="ml-3 rounded-lg p-1.5 text-slate-500 hover:bg-slate-200 hover:text-slate-900" aria-label="Cerrar asistente">
              <X size={18} />
            </button>
          </div>

          <div className="space-y-3 overflow-y-auto p-4">
            <p className="mb-2 text-sm text-slate-700">¿Qué te gustaría hacer hoy?</p>
            <a href="#services" onClick={() => setOpen(false)} className="block w-full rounded-lg bg-slate-100 px-4 py-3 text-left transition hover:bg-slate-200">
              <div className="font-medium text-slate-900">Desarrollo a medida</div>
              <div className="text-sm text-slate-600">Web, backend y arquitectura</div>
            </a>
            <a href="#approach" onClick={() => setOpen(false)} className="block w-full rounded-lg bg-slate-100 px-4 py-3 text-left transition hover:bg-slate-200">
              <div className="font-medium text-slate-900">Crear o validar un MVP</div>
              <div className="text-sm text-slate-600">Convertimos ideas en producto</div>
            </a>
            <a href="#projects" onClick={() => setOpen(false)} className="block w-full rounded-lg bg-slate-100 px-4 py-3 text-left transition hover:bg-slate-200">
              <div className="font-medium text-slate-900">Ver productos</div>
              <div className="text-sm text-slate-600">Conocé los proyectos de IORed</div>
            </a>
            <a href="https://wa.me/5492657659689" target="_blank" rel="noopener noreferrer" className="block w-full rounded-lg bg-[var(--color-cta)] px-4 py-3 text-left text-[#0A2540] transition hover:opacity-90">
              <div className="font-semibold">Contacto directo</div>
              <div className="text-sm opacity-80">Escribinos por WhatsApp</div>
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => { if (!didDrag.current) setOpen((value) => !value); didDrag.current = false; }}
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
        className="absolute z-50 flex h-14 w-14 touch-none items-center justify-center rounded-full bg-[var(--color-accent)] text-white shadow-lg transition hover:scale-105 active:scale-95 cursor-grab active:cursor-grabbing"
        style={{ right: position.right, bottom: position.bottom }}
        aria-label={open ? "Cerrar asistente IO Red" : "Abrir asistente IO Red"}
        title="Podés arrastrar este botón para moverlo"
      >
        <BotIcon size={26} />
        <span className="absolute -left-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border border-white/30 bg-[#0A2540] text-white" aria-hidden="true">
          <Grip size={12} />
        </span>
      </button>
    </>
  );
}
