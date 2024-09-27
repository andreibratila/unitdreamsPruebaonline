"use client";
import { usePathname } from "next/navigation";

export const LinkActived: React.FC<{
  children: React.ReactNode;
  path: string;
}> = ({ children, path }) => {
  const pathname = usePathname(); // Obtenemos la ruta actual
  return (
    <p
      className={`text-nav text-white relative ${
        pathname === path &&
        "after:content-[''] after:absolute after:w-full after:h-[0.2vw] after:bg-[#2CD3CB] after:bottom-[-0.5vw] after:left-0"
      }`}
    >
      {children}
    </p>
  );
};
