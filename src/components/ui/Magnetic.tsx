"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Magnetic({
  children,
}: {
  children: React.ReactElement;
}) {
  // Asegura que 'children' sea un ReactElement
  const magneticRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!magneticRef.current) return;
    const element = magneticRef.current;

    const xTo = gsap.quickTo(element, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(element, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const handleMouseMove = (e: MouseEvent) => {
      // Tipar el evento como MouseEvent
      const { clientX, clientY } = e;
      const { height, width, left, top } = element.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.35);
      yTo(y * 0.35);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return React.cloneElement(children, { ref: magneticRef }); // Aseguramos que children es un ReactElement
}
