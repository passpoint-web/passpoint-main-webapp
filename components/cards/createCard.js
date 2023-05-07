import React from "react";
import ProcessCard from "./processCard";
import { createData } from "@/constant/heroData";

const CreateCard = () => {
  return (
    <div className="w-full mt-[100px]">
      <div className="w-[85%] mx-auto md:w-[90%]">
        <h3 className="text-[2.5vw] font-[600] text-secondary text-center tab:text-[3.5vw] sm:text-[5vw]">
          Create Card
        </h3>
        <p className="text-[16px] text-secondary text-center w-[45%] mx-auto tab:w-[100%]">
          Create your virtual card in 3 simple ways{" "}
        </p>
        <div className="w-full mt-[30px] grid grid-cols-fluid gap-[50px] sm:gap-[40px] sm:gridCol">
          {createData.map((item, id) => (
            <ProcessCard {...item} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateCard;
