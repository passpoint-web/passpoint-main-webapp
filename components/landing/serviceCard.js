import Image from "next/image";
import React from "react";

const ServiceCard = ({ image, title, text }) => {
  return (
    <div className="group bg-white p-[32px] rounded-[16px] border border-solid border-[#ebebeb] hover:bg-primary hover:border-primary transition-all ease-in-out duration-500 tab:max-w-[385px] sm:p-[30px]">
      <div className="w-fit bg-white p-[20px_16px] shadow-[0px_12px_40px_rgba(0,0,0,0.08)] rounded-[16px]">
        <Image
          src={image}
          width={40}
          height={0}
          alt="passpoint thumbnails"
          className="group-hover:animate-open-menu"
        />
      </div>
      <h3 className="text-[20px] font-semibold text-secondary group-hover:text-white m-[30px_0_16px] sm:text-[18px]">
        {title}
      </h3>
      <p className="text-[#656565] text-[16px] group-hover:text-white sm:text-[15px]">
        {text}
      </p>
    </div>
  );
};

export default ServiceCard;
