import WhyCard from "./whyCard";
import { goWhyData } from "@/constant/heroData";

const Why = () => {
  return (
    <div className="w-full my-[100px]">
      <div className="w-[85%] mx-auto md:w-[90%]">
        <h2 data-aos="fade-up" data-aos-duration="1000" className="text-[40px] text-center text-secondary font-bold md:text-[35px] tab:text-[24px]">
          Why Create Business With Passpoint Go
        </h2>
        <div className="grid grid-cols-fluid gap-[20px] mt-[50px] tab:gap-[40px] tab:gridCol">
          {goWhyData.map((item, id) => (
            <WhyCard {...item} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Why;
