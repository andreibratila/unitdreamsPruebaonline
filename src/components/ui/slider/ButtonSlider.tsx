"use client";

import { useSlider } from "./ContextSlider";

interface Props {
  right: boolean;
  children: React.ReactNode;
}
export const ButtonSlider = ({ right, children }: Props) => {
  const { handlePrev, handleNext } = useSlider();
  const click = () => {
    if (right) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  return (
    <button
      aria-label="Previous"
      data-scroll
      data-scroll-speed="0.01"
      onClick={click}
      className="mr-[] border-white border-2 w-[3vw] h-[3vw] flex place-items-center place-content-center"
    >
      {children}
    </button>
  );
};
