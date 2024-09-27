"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap"; // Importamos GSAP

export const EffectNavbar = ({ children }: { children: React.ReactNode }) => {
  const [lastScrollY, setLastScrollY] = useState(0); // Para rastrear la posición anterior del scroll
  const navRef = useRef<HTMLElement>(null); // Referencia para la barra de navegación
  const [hasScrolled, setHasScrolled] = useState(false);

  // Manejar el scroll para detectar cuándo mostrar u ocultar la barra de navegación
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > lastScrollY) {
        // Si el usuario está haciendo scroll hacia abajo
        gsap.to(navRef.current, {
          y: "-100%", // Mueve la barra de navegación hacia arriba (oculta)
          duration: 0.5,
          ease: "power3.out",
        });
      } else {
        // Si el usuario está haciendo scroll hacia arriba
        gsap.to(navRef.current, {
          y: 0, // Muestra la barra de navegación en su posición original
          duration: 0.5,
          ease: "power3.out",
        });
      }

      setLastScrollY(scrollPosition); // Actualiza la última posición de scroll

      if (scrollPosition > window.innerHeight * 0.1) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Animación de entrada para la barra de navegación
  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        {
          y: -100, // Empieza fuera de la vista, en la parte superior
          opacity: 0, // Empieza invisible
        },
        {
          y: 0, // Termina en su posición original
          opacity: 1, // Aparece con una opacidad completa
          duration: 1, // Duración de la animación
          ease: "power3.out", // Animación suave
          delay: 0.8,
        }
      );
    }
  }, []);

  return (
    <nav
      ref={navRef} // Referencia para la barra de navegación
      className={`${
        hasScrolled && "bg-black bg-opacity-90"
      } opacity-0 fixed top-0 z-50 w-full h-[5vw] min-h-[80px] flex place-content-between place-items-center px-[5.093vw] transition-colors duration-500`}
    >
      {children}
    </nav>
  );
};
