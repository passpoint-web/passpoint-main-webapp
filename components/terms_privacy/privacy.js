import { privacyData } from "@/constant/terms_privacy_content";
import { motion } from "framer-motion";
import Privacy_datails from "./privacy_datails";
import Scroll from "./scroll";
import { useEffect, useState } from "react";

const Privacy = () => {
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
        Privacy And Confidential Data Policy
      </motion.h1>
      <div className="w-[85%] mx-auto md:w-[90%]">
        {privacyData.map((content, id) => (
          <Privacy_datails {...content} key={id} />
        ))}
      </div>
      {showButton && <Scroll setShowButton={setShowButton} />}
    </div>
  );
};

export default Privacy;
