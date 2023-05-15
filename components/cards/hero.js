import Image from "next/image";
import HeroImage from "../../public/assets/images/cardAbout/hero-card.png";
import Play from "../../public/assets/images/landing/play-store.svg";
import Apple from "../../public/assets/images/landing/apple-store.svg";

const Hero = () => {
  return (
    <div className="w-full bg-white p-[150px_0_100px] tab:p-[100px_0_50px]">
      <div className="w-[85%] mx-auto flex justify-between items-center md:w-[90%] tab:flex-col">
        <section className="w-2/4 tab:w-full">
          <h1 className="text-[4.3vw] font-bold leading-[138.5%] tab:text-[6.2vw]">
            Passpoint Cards
          </h1>
          <p className="text-[20px] w-[60%] font-medium text-secondary my-[24px] md:w-[80%] sm:w-[100%] tab:text-[16px] sm:text-[14px]">
            Card management to help you with all your travel transactions
          </p>
          <div className="flex gap-[24px] w-full tab:w-[85%] tab:gap-[18px]">
            <a href="#">
              <Image
                src={Play}
                blurDataURL="/assets/images/landing/play-store.svg"
                placeholder="blur"
                width={200}
                height={70}
                alt="passpoint app download"
                className="w-full h-auto"
              />
            </a>
            <a href="#">
              <Image
                src={Apple}
                blurDataURL=""
                width={200}
                height={70}
                alt="passpoint app download"
                className="w-full h-auto"
              />
            </a>
          </div>
        </section>
        <section className="w-2/4 flex justify-end tab:w-full tab:justify-center tab:mt-[50px]">
          <Image
            src={HeroImage}
            placeholder="blur"
            alt="passpoint hero"
            className="max-w-[100%] tab:max-w-[70%] sm:max-w-[100%]"
          />
        </section>
      </div>
    </div>
  );
};

export default Hero;
