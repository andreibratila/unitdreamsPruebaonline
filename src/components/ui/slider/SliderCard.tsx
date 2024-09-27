import Image from "next/image";
interface Props {
  image: string;
  title: string;
  text: string;
}
export const SliderCard = ({ image, title, text }: Props) => {
  return (
    <div className=" bg-[url('/transparent_discografica.png')]  hover:scale-105 transition-all duration-300 text-white bg-cover border-white border-2 ">
      <div className="flex flex-col px-[3vw] py-[2vw]">
        <Image
          src={`/discografia${image}.webp`}
          alt={title}
          width={1600}
          height={1600}
          className=" w-full h-[19.123vw] self-center pb-[1vw]"
        />
        <div className="flex flex-col space-y-[0.5vw] text-[1.215vw] font-bold  mb-[2vw]">
          <h2>{title}</h2>
          <p className="font-extralight">{text}</p> <p>MUSIC</p>
        </div>
      </div>
    </div>
  );
};
