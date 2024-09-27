"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const finalPositions = [
  { top: "5vw", left: "10vw" },
  { top: "5vw", left: "40vw" },
  { top: "5vw", left: "70vw" },
  { top: "27vw", left: "10vw" },
  { top: "27vw", left: "40vw" },
  { top: "27vw", left: "70vw" },
];

export const Section2Gsap = ({ children }: { children: React.ReactNode }) => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!container.current) return;

      const actualContainer = container.current;
      const cards = gsap.utils.toArray(
        actualContainer.querySelectorAll(".cardsDiv")
      ) as HTMLDivElement[];

      // **Animación de la traducción del texto (título)**
      gsap.fromTo(
        gsap.utils.toArray(actualContainer.querySelectorAll(".translate")),
        {
          opacity: 0.1,
        },
        {
          opacity: 1,
          y: "0%", // El wrapper se mueve hacia arriba, revelando el contenido
          duration: 1,
          ease: "power3.inOut",
          stagger: {
            amount: 0.05,
          },
          scrollTrigger: {
            trigger: actualContainer,
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play reset play reverse", // Reproduce y resetea al entrar y salir
            markers: true, // Habilitar esto si necesitas ver los marcadores para depuración
          },
        }
      );
      // **Animación de colocación de las cartas**
      cards.forEach((card, index) => {
        const finalPos = finalPositions[index];

        // Lanza la animación automáticamente
        gsap.to(card, {
          top: finalPos.top,
          left: finalPos.left,
          rotation: 0,
          duration: 1, // Controla la duración de la animación automática
          scrollTrigger: {
            trigger: actualContainer.querySelector(".cards"),
            start: "top 20%", // Empieza cuando el título está en el 50% de la pantalla
            end: "bottom bottom",

            // markers: true, // Para debug
            id: `spread-${index}`,
          },
        });
      });

      // **Animación de rotación de las cartas**
      cards.forEach((card, index) => {
        const frontEl = card.querySelector(".flip-card-front");
        const backEl = card.querySelector(".flip-card-back");
        const scortchEl = card.querySelector(".scortch");

        const staggerOffset = index * 0.04;
        const startOffset = 1 / 3 + staggerOffset;
        const endOffset = 2 / 3 + staggerOffset;

        ScrollTrigger.create({
          trigger: actualContainer.querySelector(".cards"),
          start: "top bottom",

          end: "bottom top+=40vw",
          scrub: 10,
          id: `rotate-flip-${index}`,
          once: true,
          markers: true,
          onUpdate: (self) => {
            const progress = self.progress;
            if (progress >= startOffset && progress <= endOffset) {
              const animationProgress = (progress - startOffset) / (1 / 3);
              const frontRotation = -180 * animationProgress;
              const backRotation = 180 - 180 * animationProgress;

              gsap.to(frontEl, { rotateY: frontRotation, ease: "power1.out" });
              gsap.to(backEl, { rotateY: backRotation, ease: "power1.out" });
            }

            // Solo cuando el progress está al final de la rotación (cuando progress >= endOffset)
            if (progress > endOffset) {
              gsap.to(scortchEl, { opacity: 1 }); // Animación de opacidad después del giro
            }
          },
        });
      });
    },
    { scope: container }
  );

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={container} className=" h-[80vw]  overflow-x-hidden">
      {children}
    </section>
  );
};
