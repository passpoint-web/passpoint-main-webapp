import Image from "next/image";
import React from "react";

const ProcessCard = ({image, title, text}) => {
  return (
    <div className="rounded-[16px] text-center flex flex-col items-center tab:max-w-[389px]">
      <Image
        priority
        alt="passpoit card process"
        src={`/assets/images/cardAbout/${image}`}
        width={64}
        height={64}
        className="sm:w-[40px] sm:h-[40px]"
      />
      <h3 className="text-[20px] font-[600] mt-[30px] mb-[16px] sm:mt-[20px]">{title}</h3>
      <p className="text-[16px] leading-[150%] text-secondary">{text}</p>
    </div>
  );
};

export default ProcessCard;
