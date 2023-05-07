import React from "react";
import SafetyCard from "./safetyCard";
import Image from "next/image";
import Lock from "../../public/assets/images/cardAbout/secure.png";
import { securityData } from "@/constant/heroData";

const Security = () => {
  return (
    <div className="w-full mt-[80px]">
      <div className="w-[85%] mx-auto flex items-end md:w-[90%] tab:flex-col-reverse tab:gap-[30px]">
        <div className="w-[55%] tab:w-full">
          <h2 className="text-[40px] text-secondary font-semibold md:text-[30px] sm:text-[20px] sm:text-center">
            Safety & Security Guaranteed
          </h2>
          <div className="[&>*:not(:last-child)]:mb-[45px] mt-[30px]">
            {securityData.map((item, id) => (
              <SafetyCard {...item} key={id} />
            ))}
          </div>
        </div>
        <div className="w-[50%] flex justify-end tab:w-[100%] tab:justify-center">
          <Image
            src={Lock}
            width={459}
            height={385}
            alt="passpoint security"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Security;
