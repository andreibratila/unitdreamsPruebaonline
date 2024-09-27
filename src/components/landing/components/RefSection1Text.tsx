"use client";
import { useRef } from "react";
import gsap from "gsap";
import styles from "../Section1.module.css";
import { useGSAP } from "@gsap/react";

export const RefSection1Text = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const containerEl = containerRef.current;
      // Crear la línea de tiempo de GSAP
      const tl = gsap.timeline();

      // Seleccionamos todos los elementos hijos del contenedor de texto
      const elements = containerRef.current.querySelectorAll(".translate");

      // Animación para que el texto aparezca desde abajo y se desplace hacia su posición original
      tl.fromTo(
        elements,
        {
          opacity: 0.1,
        },
        {
          y: "0%", // El wrapper se mueve hacia arriba, revelando el contenido
          duration: 1.2,
          ease: "power3.inOut",
          stagger: {
            amount: 0.4,
          },
          opacity: 1,
        }
      );
      tl.add(() => {
        const fillElements = containerEl.querySelectorAll(`.${styles.header}`);
        fillElements.forEach((el) => {
          el.classList.add(styles.fill); // Añadir la clase para activar el efecto de relleno
        });
      }, "-=0.5"); // Esto se ejecuta medio segundo después de la animación;
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="text-white ml-[4.803vw] ">
      {children}
    </div>
  );
};
