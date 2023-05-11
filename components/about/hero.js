import { aboutData } from "@/constant/heroData";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full pt-[150px] tab:pt-[100px] ">
      <div className="w-[85%] mx-auto [&>*:last-child]:mb-[50px] md:w-[90%]">
        {aboutData.map((item, id) => (
          <div key={id} className="mb-[40px]">
            <h2 className={`text-center ${item.textSize} mb-[30px]`}>
              {item.title}
            </h2>
            <p className="text-[16px]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
