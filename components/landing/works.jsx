import React from "react";
import WorksCard from "./worksCard";
import { worksData } from "@/constant/heroData";

const Works = () => {
  return (
    <div className="w-full min bg-fixed bg-primary bg-[url(/assets/images/landing/works-bg.png)] bg-contain bg-no-repeat mb-[100px] md:bg-cover tab:bg- tab:bg-[10%] tab:bg-repeat-y">
      <div className="w-[85%] mx-auto text-center p-[50px_0_30px] md:w-[90%]">
        <h2
          data-aos="fade-up"
          className="text-[3vw] font-[600] text-white tab:text-[5.2vw]"
        >
          How It Works
        </h2>
        {/* <p
          data-aos="fade-up"
          className="w-[45%] mx-auto text-[16px] mt-2 text-white md:w-[90%] sm:w-[100%] sm:text-[14px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
          sagittis amet, neque diam non. Massa sit massa, penatibus lectus.{" "}
        </p> */}
        <div className="w-full grid grid-cols-fluid gap-[150px] mt-[38px] md:gap-[50px] sm:gridCol">
          {worksData.map((item, id) => (
            <WorksCard {...item} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
