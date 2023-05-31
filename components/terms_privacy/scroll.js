import React, { useEffect } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Scroll = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      data-aos="fade-up"
      data-aos-duration="1000"
      onClick={handleScrollToTop}
      className="fixed bottom-[50px] right-[50px] bg-primary w-fit rounded-[100%] border-[1px] border-primary tab:right-[10px]"
    >
      <BsFillArrowUpCircleFill className="text-white text-[30px]" />
    </button>
  );
};

export default Scroll;
