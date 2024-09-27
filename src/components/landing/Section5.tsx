import Image from "next/image";
import { StarTitle } from "@/svg/StarTitle";
import { Section5Gsap } from "./components";

const imagesData = [
  { image: "/rocanrola" },
  { image: "/pirata-galiza" },
  { image: "/rocanrola" },
];

export const Section5 = () => {
  return (
    <Section5Gsap>
      <div className="title-texts-max  text-[6.019vw] ml-[9.664vw] font-bold">
        <div className="overflow-hidden">
          <h1
            className="text-transparent translate translate-y-full"
            style={{
              WebkitTextStroke: "0.1vw #FFFFFF",
            }}
          >
            ARTISTAS
          </h1>
        </div>
        <div className="overflow-hidden -mt-[3vw]">
          <div className="flex place-items-center space-x-[1vw] ml-[9vw] translate translate-y-full ">
            <StarTitle />
            <h1 className="text-white  ">
              <span className="text-[#2CD3CB]">CO</span>
              NCIERTOS
            </h1>
          </div>
        </div>
      </div>
      <div className="flex px-[7.118vw] place-content-between mt-[1vw] ">
        {imagesData.map(({ image }, i) => (
          <Image
            key={i}
            src={`/conciertos${image}.webp`}
            alt="concierto"
            width={457}
            height={572}
            className="w-[26.447vw] h-[33.102vw] noticias scale-[0.8]"
          />
        ))}
      </div>
    </Section5Gsap>
  );
};
