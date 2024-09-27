import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ContextSlider, SliderCSR, SliderCard, ButtonSlider } from "../ui";
import { ArrowLeft, ArrowRight } from "@/svg";
import { Section4Gsap } from "./components";

const cardsData = [
  {
    image: "/pl1",
    title: "lo MEJOR DE SHODA 45",
    text: "UNIT DREAMS PROJECT",
  },
  {
    image: "/pl2",
    title: "lo MEJOR DE SHODA 12",
    text: "UNIT DREAMS PROJECT",
  },
  {
    image: "/pl3",
    title: "lo MEJOR DE SHODA 10",
    text: "UNIT DREAMS PROJECT",
  },
  {
    image: "/pl4",
    title: "lo MEJOR DE SHODA 20",
    text: "UNIT DREAMS PROJECT",
  },

  {
    image: "/pl5",
    title: "lo MEJOR DE SHODA 20",
    text: "UNIT DREAMS PROJECT",
  },
];
export const Section4 = () => {
  return (
    <Section4Gsap>
      <div className="overflow-hidden">
        <h1 className="title-texts-max text-[6.019vw] text-center font-bold translate translate-y-full">
          <span
            className="text-transparent"
            style={{
              WebkitTextStroke: "0.1vw #FFFFFF",
            }}
          >
            DISCO
          </span>
          <span className="text-[#2CD3CB]">GR</span>
          <span className="text-white">ÁFICA</span>
        </h1>
      </div>
      <div className=" mx-[4.514vw] carousel">
        {/* CARROUSEL */}
        <ContextSlider>
          <SliderCSR>
            {cardsData.map((data, i) => (
              <SliderCard key={i} {...data} />
            ))}
          </SliderCSR>
          <div className="flex space-x-[2vw] place-content-end mr-[3vw] mt-[1vw]">
            <ButtonSlider right={false}>
              <ArrowLeft />
            </ButtonSlider>
            <ButtonSlider right>
              <ArrowRight />
            </ButtonSlider>
          </div>
        </ContextSlider>
      </div>
    </Section4Gsap>
  );
};
