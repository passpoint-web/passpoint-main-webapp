import React from "react";

const WorksCard = ({ background, num, text, title }) => {
  return (
    <div className="group relative overflow rounded-[16px] text-center flex flex-col items-center p-[18px]">
      <div
        className={`w-[80px] h-[80px] grid place-content-center text-white rounded-[100px] text-[32px] font-bold tab:w-[55px] tab:h-[55px] tab:text-[24px] `}
        style={{ background: `${background}`, border: `2px solid ${background}`, }}
      >
        {num}
      </div>
      <h3 className="text-[20px] font-[600] mt-[60px] mb-[16px] tab:mt-[26px] sm:text-[18px]">
        {title}
      </h3>
      <p className="text-[16px] leading-[150%] text-secondary">{text}</p>
    </div>
  );
};

export default WorksCard;
