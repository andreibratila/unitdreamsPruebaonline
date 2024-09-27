"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Section4Gsap = ({ children }: { children: React.ReactNode }) => {
  const descriptionRef = useRef<HTMLDivElement | null>(null); // Referencia al contenedor principal
  useGSAP(
    () => {
      if (!descriptionRef.current) return;
      const descriptionEl = descriptionRef.current;

      gsap.fromTo(
        gsap.utils.toArray(descriptionEl.querySelectorAll(".translate")),
        {},
        {
          y: "0%", // El wrapper se mueve hacia arriba, revelando el contenido
          duration: 0.4,
          ease: "power3.inOut",
          stagger: {
            amount: 0.05,
          },
          scrollTrigger: {
            trigger: descriptionEl,
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play reset play reverse", // Reproduce y resetea al entrar y salir
            markers: true, // Habilitar esto si necesitas ver los marcadores para depuración
          },
        }
      );
      gsap.fromTo(
        gsap.utils.toArray(descriptionEl.querySelectorAll(".carousel")),
        {
          y: "60%", // Empieza desde un 30% más abajo
          opacity: 0, // Empieza con opacidad 0
        },
        {
          y: "0%", // Se mueve a su posición original
          opacity: 1, // Aparece de forma progresiva
          duration: 0.4,
          ease: "power3.out",
          stagger: 0.09, // Aparecen una a una, con un pequeño delay
          scrollTrigger: {
            trigger: descriptionEl,
            start: "top 60%", // Inicia la animación cuando el contenedor está al 80% del viewport
            end: "bottom top",
            toggleActions: "play none none reverse", // Reproduce y reversa en el scroll
            // markers: true, // Marcadores para depuración
          },
        }
      );
    },
    { scope: descriptionRef }
  );
  return (
    <section ref={descriptionRef} className="mt-[16.956vw]">
      {children}
    </section>
  );
};
