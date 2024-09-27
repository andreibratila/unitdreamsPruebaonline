import { StarTitle } from "@/svg/StarTitle";
import { Cards, Section2Gsap } from "./components";

const artistasNav = [
  {
    image: "/kaze",
    name: "KAZE",
    delayAnimation: "0.0s",
    rotationDiv: "rotate(-10deg)",
    top: "5vw",
    left: "30vw",
    scortchTop: "-2vw",
    scortchLeft: "-3vw",
    scortchRotation: "rotate(0deg)",
  },
  {
    image: "/shoda",
    name: "SHODA",
    delayAnimation: "0.2s",
    rotationDiv: "rotate(10deg)",
    top: "4vw",
    left: "50vw",
    scortchTop: "-2vw",
    scortchLeft: "16.6vw",
    scortchRotation: "rotate(100deg)",
  },
  {
    image: "/toni",
    name: "TONI",
    delayAnimation: "0.3s",
    rotationDiv: "rotate(4deg)",
    top: "20vw",
    left: "50vw",
    scortchTop: "-2vw",
    scortchLeft: "16.6vw",
    scortchRotation: "rotate(60deg)",
  },
  {
    image: "/vera",
    name: "VERA GRV",
    delayAnimation: "0.4s",
    rotationDiv: "rotate(-3deg)",
    top: "6vw",
    left: "25vw",
    scortchTop: "4vw",
    scortchLeft: "-4vw",
    scortchRotation: "rotate(90deg)",
  },
  {
    image: "/kaze.png",
    name: "JALONER",
    delayAnimation: "0.1s",
    rotationDiv: "rotate(15deg)",
    top: "10vw",
    left: "39vw",
    scortchTop: "15vw",
    scortchLeft: "16vw",
    scortchRotation: "rotate(260deg)",
  },
  {
    image: "/beto",
    name: "BETO",
    delayAnimation: "0.2s",
    rotationDiv: "rotate(8deg)",
    top: "15vw",
    left: "30vw",
    scortchTop: "1vw",
    scortchLeft: "-4.2vw",
    scortchRotation: "rotate(250deg)",
  },
];

export const Section2 = () => {
  return (
    <Section2Gsap>
      <div className="cards mt-[10vw] pt-[4vw] ">
        {/* TITLE */}
        <div className="title-text  text-[6.019vw] ml-[9.664vw] font-bold ">
          <div className=" overflow-hidden">
            <div className="translate translate-y-full flex place-items-center space-x-[3vw]">
              <span
                className="text-transparent"
                style={{
                  WebkitTextStroke: "0.1vw #FFFFFF",
                }}
              >
                Nuestros
              </span>
              <StarTitle />
            </div>
          </div>
          <div className="overflow-hidden -mt-[3vw]">
            <h1 className="text-white ml-[16.5vw] translate translate-y-full">
              <span className="text-[#2CD3CB]">AR</span>
              TISTAS
            </h1>
          </div>
        </div>
        {/* CARDS */}
        <div className="relative cardsNoTItle">
          {artistasNav.map((data) => (
            <Cards key={data.name} {...data} />
          ))}
        </div>
        {/* <CardsWrapper /> */}
      </div>
    </Section2Gsap>
  );
};
