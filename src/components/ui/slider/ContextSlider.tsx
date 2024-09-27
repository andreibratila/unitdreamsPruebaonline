"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useRef,
  type MutableRefObject,
} from "react";
import type Slider from "react-slick";

interface UiSlider {
  handleNext: () => void;
  handlePrev: () => void;
  sliderRef: MutableRefObject<Slider | null>;
}
const UIContext = createContext({} as UiSlider);

export const ContextSlider = ({ children }: { children: ReactNode }) => {
  const sliderRef = useRef<Slider | null>(null);

  // Función para mover al siguiente slide
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  // Función para mover al slide anterior
  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  const values = { handleNext, handlePrev, sliderRef };
  return <UIContext.Provider value={values}>{children}</UIContext.Provider>;
};

export const useSlider = () => useContext(UIContext);
