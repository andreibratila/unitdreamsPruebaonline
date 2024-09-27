import Image from "next/image";
import { Roboto_Mono } from "next/font/google";
import { RefSection1Text } from "./components";
import styles from "./Section1.module.css";

// Cargar la fuente Roboto Mono desde Google Fonts
const robotoMono = Roboto_Mono({ subsets: ["latin"], weight: ["700", "100"] });

export const Section1 = () => {
  return (
    <section className="relative w-full h-[100vh] flex items-center">
      {/* Video */}
      <video
        src="/video_hero.mp4"
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
      />
      {/* Gradiente oscuro en el lado izquierdo */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/90 to-transparent z-[-1]" />

      {/* Contenedor de texto sobre el video */}
      <RefSection1Text>
        <div className="overflow-hidden ">
          <div className="translate translate-y-full">
            <h3 className={styles.text1}>SOMOS UNA</h3>
          </div>
        </div>

        <div className="overflow-hidden ">
          <div className="translate translate-y-full">
            <h1 className={`${styles.text2} font-bold ${styles.header}`}>
              <span data-text="AG" className={`${styles.blue}  ${styles.ag}`}>
                AG
              </span>
              <span data-text="ENCIA" className={styles.white}>
                ENCIA
              </span>
            </h1>
          </div>
        </div>

        <div className="overflow-hidden ">
          <div
            className={`${styles.text3}  flex items-center space-x-[0.2vw] translate translate-y-full`}
          >
            <p className="font-[100]">MUSICAL</p>
            <Image
              src="/rotativeHeroSection.png"
              alt="logo"
              width={68}
              height={68}
              className="w-[3.935vw] h-[3.935vw] min-h-[60px] min-w-[60px] animate-spinSlow"
            />
            <p
              className={`text-transparent ${robotoMono.className} font-bold`}
              style={{
                WebkitTextStroke: "0.1vw #FFFFFF",
              }}
            >
              360
            </p>
          </div>
        </div>

        <div className="overflow-hidden ">
          <div className="translate translate-y-full">
            <h1 className={`${styles.text4} font-bold ${styles.header}`}>
              <span data-text="UNIT" className={styles.blue}>
                UNIT
              </span>
              <span
                className="text-transparent"
                style={{
                  WebkitTextStroke: "0.1vw #2CD3CB",
                }}
              >
                DREAMS
              </span>
            </h1>
          </div>
        </div>
      </RefSection1Text>
    </section>
  );
};
