import Image from "next/image";
import React from "react";

const SliderCard = ({ image, title, text, position, time, rate }) => {
  return (
    <main className={`max-w-[540px] bg-white p-[32px_24px] rounded-[16px] mt-[30px] border-[#e7e7e7] border-[1px] border-solid   tab:max-w-[100%] sm:p-[25px_24px] `}>
      <div className="flex items-center">
        <Image src={`/assets/images/landing/${image}`} width={40} height={40} alt="passpoint customer" className="sm:w-[38px] sm:h-[38px]" />
        <figure className="ml-[16px]">
          <h4 className="text-[20px] text-secondary font-semibold mb-[5px] sm:text-[18px] sm:mb-[2px]">
            {title}
          </h4>
          <p className="text-[14px] text-medium text-[#8a8c8e]">{position}</p>
        </figure>
      </div>
      <p className="text-[16px] text-secondary leading-[139%] m-[18px_0px_35px] sm:text-[15px]">
        {text}
      </p>
      <div className="flex justify-between">
        <span className="text-[14px] font-medium text-[#8a8c8e] sm:text-[13px]">{time}</span>
        <p className="flex gap-[4px]">
          {rate?.map((item, id) => (
            <Image
              src={`/assets/images/landing/${item}`}
              width={16}
              height={16}
              key={id}
              alt="passpoint rating"
            />
          ))}
        </p>
      </div>
    </main>
  );
};

export default SliderCard;


