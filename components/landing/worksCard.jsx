import React from "react";

const WorksCard = ({ number, title, text }) => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col items-center">
      <div className="w-[100px] h-[100px] border-2 rounded-full border-white grid place-items-center mb-[24px] sm:w-[80px] sm:h-[80px] sm:mb-[20px]">
        <span className="text-white text-block text-[32px] font-[600] sm:text-[20px]">
          {number}
        </span>
      </div>
      <h3 className="text-[24px] text-white font-semibold mb-[20px] sm:text-[18px] sm:mb-[16px]">
        {title}
      </h3>
      <p className="text-white text-[16px] sm:text-[14px]">{text}</p>
    </div>
  );
};

export default WorksCard;
