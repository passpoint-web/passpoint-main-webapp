import { motion } from "framer-motion";
import Image from "next/image";

const whyUsCard = ({ image, title, text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group bg-[#FFFEFE] rounded-[16px] text-center flex flex-col items-center p-[18px] shadow-[0px_12px_40px_rgba(0,0,0,0.08)] tab:max-w-[389px]"
    >
      <Image
        priority={true}
        alt="passpoit choose us"
        src={image}
        width={100}
        height={0}
      />
      <h3 className="text-[20px] font-[600] mt-[60px] mb-[16px] tab:mt-[26px]">
        {title}
      </h3>
      <p className="text-[16px] leading-[150%] text-secondary">{text}</p>
    </motion.div>
  );
};

export default whyUsCard;
