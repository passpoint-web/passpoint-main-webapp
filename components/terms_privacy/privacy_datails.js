import React from "react";

const Privacy_datails = ({ title, text, list, unlist, extraText }) => {
  return (
    <div className="mt-[28px]">
      <h3 className="text-[18px] list-decimal font-semibold text-[#1B1C1B] mb-[8px]">
        {title}
      </h3>
      <p className="text-[16px] text-secondary leading-[160%] tracking-[0.03em]">
        {text}
      </p>
      <ul className="list-disc pl-[3vw] mt-[24px] [&>*]:text-[16px] [&>*]:leading-[160%] [&>*]:tracking-[0.03em] [&>*]:text-secondary tab:pl-[35px]">
        <>{list}</>
      </ul>
      <ol className=" list-none pl-[5vw] mt-[24px] [&>*]:text-[16px] [&>*]:leading-[160%] [&>*]:tracking-[0.03em] [&>*]:text-secondary tab:pl-[35px]">
        <>{unlist}</>
      </ol>
      <p className="text-[16px] text-secondary mt-[24px] leading-[160%] tracking-[0.03em]">
        {extraText}
      </p>
    </div>
  );
};

export default Privacy_datails;
