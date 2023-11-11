import React from "react";
import ServiceCard from "./serviceCard";
import { serviceData } from "@/constant/heroData";

const Service = () => {
  return (
    <div className="w-full">
      <div className="w-[85%] mx-auto md:w-[90%]">
        <div className="flex flex-col items-center">
          <p className="text-[16px] text-secondary font-semibold text-center flex items-center">
            Our Services{" "}
            <span className="inline-block w-[37px] h-[1.5px] bg-black ml-[7px] sm:w-[20px]"></span>
          </p>
          <h2 className="text-[2.5vw] font-[600] text-secondary text-center tab:text-[5vw]">
            What You Can Do With Passpoint
          </h2>
        </div>
        <div className="w-full mx-auto mt-[30px] grid grid-cols-fluid gap-[20px] justify-items-center sm:gridCol">
          {serviceData.map((item, id) => (
            <ServiceCard {...item} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
