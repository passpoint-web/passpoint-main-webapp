import Image from "next/image";
import React from "react";

const SafetyCard = ({ image, title, text }) => {
  return (
    <div>
      <div className="flex items-center mb-[14px]">
        <Image
          src={`/assets/images/cardAbout/${image}`}
          width={40}
          height={40}
          alt="passpoint security"
          className="sm:w-[30px] sm:h-[30px] fill-primary"
        />
        <span className="text-[20px] text-secondary font-semibold ml-[10px] tab:text-[18px] sm:text-[16px]">
          {title}
        </span>
      </div>
      <p className="text-[18px] text-secondary w-[70%] md:w-[100%] sm:text-[14px] ">{text}</p>
    </div>
  );
};

export default SafetyCard;
