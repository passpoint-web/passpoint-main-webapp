import { termsData } from "@/constant/terms_privacy_content";
import Terms_content from "./terms_content";
import { useEffect, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import Scroll from "./scroll";

const Terms_Condition = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScrollVisibility = () => {
      window.pageYOffset > 500 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", handleScrollVisibility);
    return () => {
      window.removeEventListener("scroll", handleScrollVisibility);
    };
  }, []);

  return (
    <div className="w-full bg-white p-[150px_0_100px] tab:p-[100px_0_50px]">
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-[40px] font-bold text-center text-[#1B1C1B] mb-[50px] tab:mb-[30px] tab:text-[24px]"
      >
        Terms and Conditions
      </motion.h1>
      <div className="w-[85%] mx-auto md:w-[90%]">
        <p className="text-[16px] text-secondary leading-[160%] tracking-[0.03em]">
          These terms and conditions will serve as a basis of your banking
          relationship with us, Passpoint technologies Inc (“Passpoint ”). By
          choosing to open an account with us, you agree to the terms and
          conditions contained herein. You also confirm that you have provided
          us with the accurate and complete information required to create your
          account and that you have supplied all documentation, photographs and
          information that allow us to comply with our regulatory obligations.
          <br />
          <br />
          application immediately. Also, please be informed that we can
          terminate your relationship with us if we believe that you have
          violated any of these terms.
        </p>
        {termsData.map((content, id) => (
          <Terms_content {...content} key={id} />
        ))}
      </div>
      {showButton && <Scroll setShowButton={setShowButton} />}
    </div>
  );
};

export default Terms_Condition;
