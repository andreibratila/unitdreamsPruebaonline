import Image from "next/image";

import { StarTitle } from "@/svg";
import { TransitionLink } from "../ui/transitionPage/TransitionLink";
import { Section3Gsap } from "./components";

const noticiasArray = [
  {
    image: "/noticiasimagen",
    title:
      "El artista canario Lucho RK presenta ‘Esos Ojitos’ asdubsdvso asdias dgr4e3 asd aasv asdasdas as dasdas",
    text: "El segundo y último single de su esperado primer... asdubsdvso asdias dgr4e3 asd aas vcas  gsa asd asd sada ",
    path: "/noticias/nose",
  },
  {
    image: "/noticiasimagen",
    title:
      "El artista canario Lucho RK presenta ‘Esos ojeet asdubsdvso asdias dgr4e3 asd aasv",
    text: "El segundo y último single de su esperado primer... asdubsdvso asdias dgr4e3 asd aasv",
    path: "/noticias/nose",
  },
  {
    image: "/noticiasimagen",
    title: "El artista canario Lucho RK presenta ‘Esos Oitos’",
    text: "El segundo y último single de su esperado primer...",
    path: "/noticias/nose",
  },
];
export const Section3 = () => {
  return (
    <Section3Gsap>
      {/* TITLE */}
      <div className="title-texts-max flex flex-col place-content-center place-items-center font-bold">
        <div className="overflow-hidden">
          <div className="flex place-items-center space-x-[3vw] translate translate-y-full">
            <span
              className="text-transparent"
              style={{
                WebkitTextStroke: "0.1vw #FFFFFF",
              }}
            >
              ÚLTIMAS
            </span>
            <StarTitle />
          </div>
        </div>
        <div className="overflow-hidden -mt-[3vw]">
          <h1 className="text-white indent-[16.5vw] translate translate-y-full">
            <span className="text-[#2CD3CB]">NO</span>
            TICIAS
          </h1>
        </div>
      </div>
      <div className="mx-[7.234vw]">
        <TransitionLink href="noticias">
          <div className="overflow-hidden ">
            <span className="section3-link underline text-white translate translate-y-full">
              VER TODAS
            </span>
          </div>
        </TransitionLink>
        <div className=" flex place-content-between mt-[1.5vw]">
          {noticiasArray.map(({ image, title, text, path }) => (
            <div
              key={title}
              className="w-[25.874vw] min-w-[250px] text-white flex flex-col space-y-[1.2vw] noticias hover:scale-105"
              // scale-[0.8] w-[23,2434vw]
            >
              <TransitionLink href={path}>
                <Image
                  src={`${image}.jfif`}
                  alt={title}
                  width={1600}
                  height={1069}
                  className="w-full h-[17.25vw] min-h-[231.36px]"
                  // h-[21.51vw]
                />
                <h3 className="font-bold section3-title-card titles line-clamp-2 ">
                  {title.split(" ").map((word, index) => (
                    <span
                      key={index}
                      className="mask relative inline-block mr-[0.33vw]"
                    >
                      <span>{word}</span>
                    </span>
                  ))}
                </h3>
                <h3 className="font-extralight section3-subtitle-card titles line-clamp-2">
                  {text.split(" ").map((word, index) => (
                    <span
                      key={index}
                      className="mask relative  inline-block mr-[0.33vw]"
                    >
                      <span>{word}</span>
                    </span>
                  ))}
                </h3>
              </TransitionLink>
            </div>
          ))}
        </div>
      </div>
    </Section3Gsap>
  );
};
