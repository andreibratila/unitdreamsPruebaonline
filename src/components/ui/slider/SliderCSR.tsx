"use client";
import Slider from "react-slick";

import { ReactNode } from "react";
import { useSlider } from "./ContextSlider";

const settings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};
export const SliderCSR = ({ children }: { children: ReactNode }) => {
  const { sliderRef } = useSlider();

  return (
    <>
      <Slider ref={sliderRef} className="flex space-x-[2vw]" {...settings}>
        {children}
      </Slider>
    </>
  );
};
