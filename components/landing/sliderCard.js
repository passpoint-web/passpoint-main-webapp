import Image from "next/image";
import React from "react";

const SliderCard = ({ image, title, text, position, time, rate }) => {
  return (
    <main
      className={`max-w-[540px] bg-white p-[32px_24px] rounded-[16px] mt-[30px] border-[#e7e7e7] border-[1px] border-solid   tab:max-w-[100%] sm:p-[25px_24px] `}
    >
      <div className="flex items-center">
        <Image
          src={image}
          alt="passpoint customer"
          className="w-auto h-auto sm:w-[38px] sm:h-[38px]"
        />
        <figure className="ml-[16px]">
          <h4 className="text-[20px] text-secondary font-semibold mb-[5px] sm:text-[16px] sm:mb-[2px]">
            {title}
          </h4>
          <p className="text-[14px] text-medium text-[#8a8c8e] sm:text-[12px]">
            {position}
          </p>
        </figure>
      </div>
      <p className="text-[16px] text-secondary leading-[139%] m-[18px_0px_35px] sm:text-[14px]">
        {text}
      </p>
      <div className="flex justify-between">
        <span className="text-[14px] font-medium text-[#8a8c8e] sm:text-[12px]">
          {time}
        </span>
        <p className="flex gap-[4px]">
          {rate?.map((item, id) => (
            <Image
              src={item}
              key={id}
              alt="passpoint rating"
              className="w-auto h-auto object-contain"
            />
          ))}
        </p>
      </div>
    </main>
  );
};

export default SliderCard;
