import Link from "next/link";
import Board from "../../public/assets/images/landing/hero-board.webp";
import FullBoard from "../../public/assets/images/landing/full-board.webp";
import Image from "next/image";

const Hero3 = () => {
  return (
    <div className="w-full mb-[40px] relative pt-[150px] bg-[url(/assets/images/landing/circle-bg.png)] bg-contain bg-no-repeat z-[-1] md:pt-[130px] tab:mb-[0] tab:pt-[150px] tab:bg-cover tab:bg-[url(/assets/images/landing/hero-circle-small.png)] sm:bg-contain tab:pb-[100px]">
      <div className="w-[85%] mx-auto md:w-[90%]">
        <section className="text-center">
          <h1 className="w-[70%] mx-auto text-[3.16vw] text-white font-bold leading-[66.43px] md:leading-[50px] tab:text-[5vw] tab:w-[100%] sm:text-[24px] sm:leading-[30px]">
            Launch Your Own Unique Online-Travel Service Platform Instantly With{" "}
            <span className="text-pink">passpoint GO</span>
          </h1>
          <p className="w-[43%] mx-auto text-white my-[16px] mb-[30px] leading-[24.66px] text-[14px] md:w-[80%] tab:w-full tab:mb-[60px]">
            Access and provide global financial, logistics travel services, and
            travel management services as a Travel Agent and Travel Management
            firm, Global employer, Large enterprise, public service and NGO.
          </p>
          <Link href="/passpoint-go" legacyBehavior>
            <a className="py-[16px] px-[32px] text-white bg-pink rounded-[100px] font-bold border-pink borderAttributes text-[16px] hover:text-pink ">
              Learn more
            </a>
          </Link>
        </section>
      </div>
      <section className="w-[85%] mx-auto mt-[50px] flex justify-center tab:mt-[100px]">
        <Image
          src={Board}
          width={1200}
          className={`w-full tab:hidden h-auto`}
          placeholder="blur"
          alt="passpoint board"
        />
        <Image
          src={FullBoard}
          placeholder="blur"
          width={1200}
          className="hidden h-auto tab:block"
          alt="passpoint board"
        />
      </section>
    </div>
  );
};

export default Hero3;
