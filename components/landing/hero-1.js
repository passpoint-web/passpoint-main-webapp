import Image from "next/image";
import HeroImage from "../../public/assets/images/landing/hero-image-2.png";
import PlayStore from "../../public/assets/images/landing/play-store.svg";
import AppleStore from "../../public/assets/images/landing/apple-store.svg";

const Hero1 = () => {
  return (
    <div className="w-full bg-white min-h-[100vh] pt-[150px] tab:pt-[100px]">
      <div className="w-[85%] mx-auto flex justify-between items-start md:w-[90%] tab:flex-col">
        <section className="w-2/4 tab:w-full">
          <h1 className="text-[4vw] font-bold leading-[138.5%] tab:text-[6vw]">
            Travel Anywhere, Anytime With seamless payment Gateways{" "}
          </h1>
          <p className="text-[20px] font-medium text-secondary my-[24px] tab:text-[16px] sm:text-[14px]">
            Plan trips on your own convenience without currency type barriers,
            with your preferred currency wallet you can pay & purchase for
            anything on your travel trips.
          </p>
          <div className="flex gap-[24px] w-full tab:w-[85%] tab:gap-[18px]">
            <a href="#">
              <Image
                src={PlayStore}
                width={200}
                height={70}
                alt="passpoint app download"
                className="w-auto h-auto"
              />
            </a>
            <a href="#">
              <Image
                src={AppleStore}
                width={200}
                height={70}
                alt="passpoint app download"
                className="w-auto h-auto"
              />
            </a>
          </div>
        </section>
        <section className="w-2/4 flex justify-end relative tab:w-full tab:justify-center tab:mt-[50px]">
          {/* <Plane className="" />
           */}
          <Image
            src={HeroImage}
            placeholder="blur"
            alt="passpoint hero"
            className="max-w-[85%] absolute right-0 top-[-50px] md:static tab:max-w-[60%] sm:max-w-[90%]"
          />
        </section>
      </div>
    </div>
  );
};

export default Hero1;
