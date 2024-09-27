"use client";
import Link, { type LinkProps } from "next/link";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { sleep } from "@/utils";
import styles from "./TransitionPage.module.css";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  ...props
}) => {
  const router = useRouter();
  const transitionOverlayRef = useRef<HTMLDivElement>(null);

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    // Asegúrate de que el overlay está presente antes de continuar
    if (transitionOverlayRef.current) {
      transitionOverlayRef.current.classList.remove(styles.hidden);
    }

    // Espera antes de hacer la navegación para que se vea la animación
    await sleep(500); // Mostrar la animación del overlay

    // Cambiar la ruta
    router.push(href);

    // Espera un poco después del cambio de ruta
    await sleep(500);

    // Oculta el overlay después de la navegación
    if (transitionOverlayRef.current) {
      transitionOverlayRef.current.classList.add(styles.hidden);
    }
    await sleep(500);
  };

  return (
    <>
      <div
        ref={transitionOverlayRef}
        className={`${styles["transition-overlay"]} ${styles.hidden}`} // Asegúrate de que la clase se aplique correctamente
      >
        <svg
          width="50"
          height="39"
          viewBox="0 0 50 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${styles.spinner}`} // Usa styles en lugar de una clase sin referencia a CSS Modules
        >
          <path
            d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
            fill="#000000" // Corregir fill en lugar de stopColor
          />
          <path
            d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
            fill="#000000"
          />
        </svg>
      </div>
      <Link {...props} href={href} onClick={handleTransition}>
        {children}
      </Link>
    </>
  );
};
