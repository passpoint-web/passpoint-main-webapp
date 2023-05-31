import React from "react";

const Terms_content = ({ title, text, list }) => {
  return (
    <>
      {list ? (
        <ul className="list-disc pl-[3vw] mt-[28px] [&>*]:text-[16px] [&>*]:leading-[160%] [&>*]:tracking-[0.03em] [&>*]:text-secondary tab:pl-[35px]">
          <>{text}</>
        </ul>
      ) : (
        <div className="mt-[28px]">
          <h3 className="text-[18px] font-semibold text-[#1B1C1B] mb-[8px]">
            {title}
          </h3>
          <p className="text-[16px] text-secondary leading-[160%] tracking-[0.03em]">
            {text}
          </p>
        </div>
      )}
    </>
  );
};

export default Terms_content;
