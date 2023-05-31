import { valueData } from "@/constant/heroData";
import React from "react";
import ValueCard from "./valueCard";

const Value = () => {
  return (
    <div className="w-full">
      <div className="w-[85%] mx-auto md:w-[90%]">
        <h2
          data-aos="fade-up"
          className="text-[40px] text-center text-secondary font-bold md:text-[35px] tab:text-[24px]"
        >
          Our Values
        </h2>
        <p
          data-aos="fade-up"
          className="text-[16px] text-center text-secondary w-[50%] mx-auto mt-[16px] md:w-[80%] tab:w-[90%] sm:w-[100%]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
          sagittis amet, neque diam non. Massa sit massa, penatibus lectus.{" "}
        </p>
        <div className="grid grid-cols-fluidLarge gap-[60px] mt-[50px] tab:gap-[40px] tab:gridCol">
          {valueData.map((item, id) => (
            <ValueCard {...item} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Value;
