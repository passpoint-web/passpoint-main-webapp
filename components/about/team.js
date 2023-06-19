import { teamData } from "@/constant/heroData";
import React from "react";
import TeamCard from "./teamCard";

const Team = () => {
  return (
    <div className="w-full m-[80px_0_100px]">
      <div className="w-[85%] mx-auto md:w-[90%]">
        <h3
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-[40px] text-center text-secondary font-bold md:text-[30px] tab:text-[24px]"
        >
          Meet The Team Members
        </h3>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-[16px] text-secondary text-center w-[50%] mx-auto mt-[10px] md:w-[80%] sm:w-full"
        >
          Passpoint is driven by a passionate and innovative team of problem
          solvers
        </p>
        <div className="grid grid-cols-fluid gap-[20px] mt-[50px] tab:justify-items-center tab:gap-[50px] sm:gridCol">
          {teamData.map((item, id) => (
            <TeamCard {...item} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
