import Image from "next/image";
import Link from "next/link";
import Ipad from "../../public/assets/images/landing/go-ipad.webp";

const GoSection = () => {
  return (
    <div className="w-full bg-black py-[44px]">
      <div className="w-[85%] mx-auto flex justify-between items-center gap-[50px] md:w-[90%] tab:flex-col">
        <div data-aos="fade-right" data-aos-duration="1000" className="w-[50%] tab:w-[100%] tab:text-center">
          <h2 className="text-[3vw] text-white font-semibold leading-[140%] tab:text-[5.2vw]">
            Create Your Business Services On{" "}
            <span className="text-primary">Passpoint Go</span>
          </h2>
          <p className="text-[16px] w-[79%] text-white m-[16px_0_34px] md:w-[100%] sm:text-[15px]">
            Paaspoint Go helps business owners to easily create and promote
            their services online and reaching new audiences and growing their
            brand in ways they never thought possible.
          </p>
          <Link href="/passpoint-go" legacyBehavior>
            <a className="p-[18px_32px] bg-primary text-white font-bold rounded-[100px] borderAttributes border-primary hover:text-primary sm:p-[15px_26px] sm:text-[14px]">
              Learn More
            </a>
          </Link>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000" className="w-[50%] flex justify-end tab:w-[100%] tab:justify-center">
          <Image
            src={Ipad}
            placeholder="blur"
            alt="passpoint go"
            className="w-[80%]"
          />
        </div>
      </div>
    </div>
  );
};

export default GoSection;
