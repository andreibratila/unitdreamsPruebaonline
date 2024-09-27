"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export const RefTitleText = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const containerEl = containerRef.current;

    // Crear la línea de tiempo de GSAP con ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerEl,
        start: "top 60%", // Comienza la animación al 75% del viewport
        end: "bottom top", // Termina cuando el elemento sale del viewport
        toggleActions: "play reset play reverse", // Reproduce y resetea al entrar y salir
        // markers: true, // Activa los marcadores (puedes quitar esto en producción)
      },
    });

    tl.fromTo(
      containerEl.children,
      {
        opacity: 0,
        y: 50, // Mueve desde abajo
      },
      {
        opacity: 1,
        y: 0, // Se mueve a la posición final
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
      }
    );
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="text-[6.019vw] ml-[9.664vw] font-bold">
      {children}
    </div>
  );
};
