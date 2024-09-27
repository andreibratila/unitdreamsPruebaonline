"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Section3Gsap = ({ children }: { children: React.ReactNode }) => {
  const descriptionRef = useRef<HTMLDivElement | null>(null); // Referencia al contenedor principal
  //   const noticiasRefs = useRef<HTMLDivElement[]>([]); // Añadimos las referencias a las noticias

  useGSAP(
    () => {
      if (!descriptionRef.current) return;
      const descriptionEl = descriptionRef.current;
      const noticias = gsap.utils.toArray(
        descriptionEl.querySelectorAll(".noticias")
      ) as HTMLDivElement[];

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
        noticias,
        {
          y: "30%", // Empieza desde un 30% más abajo
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
      noticias.forEach((noticia) => {
        // Selecciona las palabras (o letras) dentro de la noticia actual
        const words = noticia.querySelectorAll(`.mask span`);

        // Crear un timeline con GSAP para animar las palabras de cada noticia
        gsap.fromTo(
          words,
          { y: "100%", opacity: 0 }, // Empieza abajo y oculto
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.01, // Retraso entre cada palabra
            ease: "power3.out",
            scrollTrigger: {
              trigger: noticia, // Cada noticia actúa como su propio trigger
              start: "top 80%", // Comienza la animación cuando el bloque está al 75% del viewport
              end: "bottom top", // Termina cuando el bloque sale del viewport
              toggleActions: "play reset play reverse", // Reproduce y resetea al entrar y salir
              markers: true, // Activa los marcadores para visualización (puedes desactivarlo)
            },
          }
        );
      });
    },
    { scope: descriptionRef }
  );
  return (
    <section ref={descriptionRef} className="mt-[20vw]">
      {children}
    </section>
  );
};
