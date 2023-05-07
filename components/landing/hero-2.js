import Image from "next/image";
import PhoneHero from "../../public/assets/images/landing/hero-phone.png";
import PhoneHero2 from "../../public/assets/images/landing/hero-join.png";
import CardHero from "../../public/assets/images/landing/hero-card.png";

const Hero2 = () => {
  return (
    <div className="w-full bg-primary min-h-[100vh] pt-[150px] head-clip md:min-h-[93vh] tab:pt-[100px] tab:pb-[80px]">
      <div className="w-[85%] mx-auto flex justify-between items-center md:w-[90%] tab:flex-col">
        <section className="w-[68%] md:w-[65%] tab:w-full tab:mb-[50px]">
          <h1 className="text-[3.8vw] text-white font-bold leading-[77.5px] md:leading-[50px] tab:text-[6vw] sm:leading-[35px]">
            Travel Anywhere, Anytime With Seamless Payment Gateways{" "}
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
                src="/assets/images/landing/play-store.svg"
                width={200}
                height={70}
              />
            </a>
            <a href="#" className="">
              <Image
                src="/assets/images/landing/apple-store.svg"
                width={200}
                height={70}
                alt="passpoint store"
              />
            </a>
          </div>
        </section>
        <section className="w-[32%] relative mr-auto flex justify-end md:w-[35%] tab:w-full tab:justify-center">
          <Image
            src={PhoneHero}
            width={301}
            height={610}
            className="w-[68%] tab:hidden"
          />
          <Image
            src={CardHero}
            width={396}
            height={237}
            placeholder="blur"
            className="w-[95%] absolute bottom-10 left-[-10rem] md:left-[-7rem] tab:hidden"
          />
          <Image
            src={PhoneHero2}
            width={301}
            height={610}
            placeholder="blur"
            className="hidden tab:block tab:w-[70%] sm:w-[90%]"
          />
        </section>
      </div>
    </div>
  );
};

export default Hero2;
