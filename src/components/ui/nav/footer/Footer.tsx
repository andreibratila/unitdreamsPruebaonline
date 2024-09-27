import Image from "next/image";
import { TransitionLink } from "../../transitionPage/TransitionLink";
import { linksNav } from "../navigationData";
import { Instagram, Whatsapp } from "@/svg";
import Magnetic from "../../Magnetic";

export const Footer = () => {
  return (
    <div className="mt-[18.75vw]  ">
      <footer className="mx-[6.597vw] flex flex-col place-content-center place-items-center text-white rounded-[7vw] bg-[url('/textureFooter.png')] bg-cover h-[39.815vw] border-[#414141] border-2">
        <div className="flex space-x-[2vw] ">
          <h1 className="text-[5.787vw] font-bold">CONTÁCTANOS</h1>
          <TransitionLink href="/">
            <Magnetic>
              <Image
                alt="UNIT DREAMS"
                src={"/unit_dreams_logo.png"}
                className="w-[17.13vw] h-[9.549vw]"
                width={244}
                height={136}
              />
            </Magnetic>
          </TransitionLink>
        </div>
        <div className="flex items-center space-x-4 mt-[4.456vw]">
          <input
            type="email"
            placeholder="Email"
            className="w-[23.727vw] font-bold text-[1vw] h-[4vw] bg-transparent text-white border border-gray-300 rounded-full px-[1.5vw] focus:outline-none focus:ring-2 focus:ring-gray-300 placeholder-white"
          />

          <Magnetic>
            <button className="w-[10vw] text-[1.1vw] h-[4vw] bg-[#2CD3CB] text-black font-bold rounded-full">
              ENVIAR
            </button>
          </Magnetic>
        </div>
        <nav className="flex place-content-center space-x-[2vw] text-[1.331vw] mt-[4.514vw]">
          {linksNav.map(({ title, path }) => (
            <TransitionLink href={path} key={path}>
              <Magnetic>
                <span className="relative inline-block px-[2.5px] cursor-pointer after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[1px] after:bg-white after:transform after:-translate-x-1/2 after:transition-width after:duration-200 after:linear hover:after:w-full">
                  {title}
                </span>
              </Magnetic>
            </TransitionLink>
          ))}
        </nav>
        <div className="flex  space-x-[1vw] mt-[2.778vw]">
          <Magnetic>
            <Instagram />
          </Magnetic>
          <Magnetic>
            <Whatsapp />
          </Magnetic>
        </div>
      </footer>
      <div className="w-full h-[1.157vw] bg-[#2CD3CB] mt-[10.127vw]" />
    </div>
  );
};
