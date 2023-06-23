import { RiSearch2Line } from "react-icons/ri";
import { motion } from "framer-motion";

const Hero = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full p-[150px_0_200px] bg-primary head-clip sm:p-[130px_0]">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-[90%] mx-auto"
      >
        <h2 className="text-[40px] text-white font-bold text-center md:text-[35px] tab:text-[30px] sm:text-[24px]">
          Frequently Asked Questions (FAQS)
        </h2>
        <form className="flex items-center justify-between bg-white max-w-[819px] h-[58px] mt-[50px] mx-auto p-[0px_30px] rounded-[16px] sm:h-[50px]">
          <input
            type="search"
            placeholder="Search"
            className="w-full h-full outline-none border-none placeholder:text-[#8a8c8e]"
          />
          <button onClick={handleSubmit} className="pl-[16px]">
            <RiSearch2Line className="w-[20px] h-[20px]" />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Hero;
