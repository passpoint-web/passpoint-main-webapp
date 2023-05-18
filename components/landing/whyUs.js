import { whyData } from "@/constant/heroData";
import WhyUsCard from "./whyUs-card";

const WhyUs = () => {
  return (
    <div className="w-full m-[40px_0px_100px]">
      <div className="w-[85%] mx-auto md:w-[90%]">
        <h2 className="text-[2.5vw] font-[600] text-secondary text-center tab:text-[5vw] sm:text-[24px]">
          Why Choose Passpoint?
        </h2>
        <div className="w-full mx-auto mt-[60px] grid grid-cols-fluid gap-[16px] justify-items-center sm:mt-[40px] sm:gridCol">
          {whyData.map((item, id) => (
            <WhyUsCard {...item} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
