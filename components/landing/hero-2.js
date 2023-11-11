import Image from "next/image";
import PhoneHero from "../../public/assets/images/landing/hero-phone.webp";
import PhoneHero2 from "../../public/assets/images/landing/hero-join.webp";
import PhoneHero3 from "../../public/assets/images/landing/hero-join.png";
import CardHero from "../../public/assets/images/landing/hero-card.webp";
import Play from "../../public/assets/images/landing/play-store.svg";
import Apple from "../../public/assets/images/landing/apple-store.svg";

const Hero2 = () => {
  return (
    <div className="w-full bg-primary p-[150px_0_90px] head-clip tab:pt-[100px] tab:pb-[80px]">
      <div className="w-[85%] mx-auto flex justify-between items-center md:w-[90%] tab:flex-col">
        <section className="w-[68%] md:w-[65%] tab:w-full tab:mb-[50px]">
          <h1 className="text-[3.8vw] text-white font-bold leading-[77.5px] md:leading-[50px] tab:text-[6vw] sm:leading-[35px]">
          Travel Anywhere, Make Payments With Seamless Payment Services
          </h1>
          <p className="text-[20px] w-[75%] text-white font-medium my-[24px] md:text-[16px] tab:w-full">
            Plan trips on your own convenience without currency type barriers,
            with your preferred currency wallet you can pay & purchase for
            anything on your travel trips.
          </p>
          <div className="flex gap-[24px] w-full md:w-[75%] tab:w-[85%] tab:gap-[18px]">
            <a href="#" className="">
              <Image
                alt="passpoint store"
                src={Play}
                className="w-auto h-auto"
              />
            </a>
            <a href="#" className="">
              <Image
                src={Apple}
                alt="passpoint store"
                className="w-auto h-auto"
              />
            </a>
          </div>
        </section>
        <section className="w-[32%] relative mr-auto flex justify-end md:w-[35%] tab:w-full tab:justify-center">
          <Image
            src={PhoneHero}
            width={301}
            alt="passpoint app"
            className="w-[68%] h-auto tab:hidden "
          />
          <Image
            src={CardHero}
            width={396}
            placeholder="blur"
            alt="passpoint app"
            className="w-[95%] h-auto absolute bottom-10 left-[-10rem] md:left-[-7rem] tab:hidden"
          />
          <Image
            src={PhoneHero2}
            placeholder="blur"
            alt="passpoint app"
            className="hidden w-auto h-auto tab:block tab:w-[70%] sm:w-fit"
          />
        </section>
      </div>
    </div>
  );
};

export default Hero2;
