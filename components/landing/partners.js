import Image from "next/image";
import Partner1 from "../../public/assets/images/landing/partner-1.png";
import Partner2 from "../../public/assets/images/landing/partner-2.png";
import Partner3 from "../../public/assets/images/landing/partner-3.png";
import Partner4 from "../../public/assets/images/landing/partner-4.png";
import Partner5 from "../../public/assets/images/landing/partner-5.png";

const partnerImage = [Partner1, Partner2, Partner3, Partner4, Partner5];
const Partners = () => {
  return (
    <div className="w-full bg-white my-[50px]">
      <h2 className="text-secondary text-[2.5vw] font-semibold text-center tab:text-[5.2vw]">
        Our Partners
      </h2>
      <div className="w-[100%] bg-lightBlue mt-[32px]">
        <div className="w-[85%] mx-auto py-[80px] grid grid-cols-fluidSmall gap-[50px] justify-center items-center sm:gridCol tab:py-[50px] tab:flex flex-col">
          {partnerImage.map((image, i) => (
            <Image
              src={image}
              width={200}
              key={i}
              alt="passpoint patners"
              data-aos="fade-up"
              data-aos-duration={i * `${500}`}
              className="h-auto w-[90%] tab:w-[30%]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
