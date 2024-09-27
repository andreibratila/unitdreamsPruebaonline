import Image from "next/image";

// Definir los props del componente
interface Props {
  image: string;
  name: string;
  delayAnimation: string;
  rotationDiv: string;
  top: string;
  left: string;
  scortchTop: string;
  scortchLeft: string;
  scortchRotation: string;
}
export const Cards = ({
  image,
  name,
  delayAnimation,
  rotationDiv,
  top,
  left,
  scortchTop,
  scortchLeft,
  scortchRotation,
}: Props) => {
  return (
    <div
      className="w-[24.826vw] h-[23.9vw] absolute cardsDiv"
      style={{
        top: top,
        left: left,
        animationDelay: delayAnimation,
        transform: rotationDiv, // Rotación inicial de la carta
      }}
    >
      {/* Contenedor que rota */}
      <div
        className="flip-card-inner relative w-[20.605vw] h-[19.837vw]"
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
      >
        {/* Cara frontal - esta se muestra inicialmente */}
        <div
          className="flip-card-front absolute top-0 left-0 w-full h-full"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <Image
            src="/back-card.png"
            alt={name}
            width={429}
            height={417}
            className="w-full h-full"
          />
        </div>

        {/* Cara trasera - rotada inicialmente */}
        <div
          className="flip-card-back absolute top-0 left-0 w-full h-full"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <Image
            src={`/nuestros-artistas${image}.webp`}
            alt={name}
            width={429}
            height={413}
            className="w-full h-full"
          />

          <Image
            className="scortch opacity-0 absolute w-[8.019vw] h-[5.257vw]"
            style={{
              top: scortchTop,
              left: scortchLeft,
              transform: scortchRotation,
            }}
            src="/scortch.png"
            alt={name}
            width={222}
            height={160}
          />
          <span
            className="absolute bottom-[-0.2vw] left-[1vw] text-transparent text-[3.735vw] font-extrabold"
            style={{
              WebkitTextStroke: "0.1vw #FFFFFF",
            }}
          >
            {name}
          </span>
        </div>
      </div>
    </div>
  );
};
