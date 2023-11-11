import React from "react";
import WorksCard from "./worksCard";
import { goWorkData } from "@/constant/heroData";

const Works = () => {
  return (
    <div className="w-full mt-[80px]">
      <div className="w-[85%] mx-auto md:w-[90%]">
        <div className="flex flex-col items-center">
          <p className="text-[16px] text-secondary font-semibold text-center flex items-center">
            How It Works{" "}
            <span className="inline-block w-[37px] h-[1.5px] bg-black ml-[7px] sm:w-[20px]"></span>
          </p>
          <h2 className="text-[2.5vw] font-[600] text-secondary text-center tab:text-[5vw]">
            Get Started with 3 Easy Steps
          </h2>
        </div>
        <div className="w-full overflow-x-hidden mt-[60px] grid grid-cols-fluid gap-[10px] [&>*:not(:last-child)]:after:w-full [&>*:not(:last-child)]:after:z-[10] [&>*:not(:last-child)]:after:content-[url('/assets/images/cardAbout/line.svg')] [&>*:not(:last-child)]:after:absolute [&>*:not(:last-child)]:after:top-[25%] [&>*:not(:last-child)]:after:right-[-49%] md:[&>*:not(:last-child)]:after:content-none sm:mt-[40px] sm:gridCol">
          {goWorkData.map((item, id) => (
            <WorksCard {...item} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
