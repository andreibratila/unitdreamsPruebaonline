import Image from "next/image";

import { LinkActived } from "./LinkActived";
import { EffectNavbar } from "./EffectNavbar";
import { linksNav } from "../navigationData";
import { TransitionLink } from "../../transitionPage/TransitionLink";

export const NavbarTop = () => {
  return (
    <EffectNavbar>
      <TransitionLink href="/">
        <Image
          alt="UNIT DREAMS"
          src={"/unit_dreams_logo.png"}
          className="w-[7.06vw] min-w-[109.797px] min-h-[61.197px] h-[3.935vw]"
          width={244}
          height={136}
        />
      </TransitionLink>
      <div className="flex place-content-center space-x-[1vw]">
        {linksNav.map(({ title, path }) => (
          <TransitionLink href={path} key={path}>
            <LinkActived path={path}>{title}</LinkActived>
          </TransitionLink>
        ))}
      </div>
    </EffectNavbar>
  );
};
// className="w-[5.648] min-w-[109.797px] min-h-[61.197px] h-[3.148vw] "
