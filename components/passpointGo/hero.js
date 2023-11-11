import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Go from "../../public/assets/images/cardAbout/go-hero.webp";
import Go2 from "../../public/assets/images/landing/full-board.webp";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

const Hero = () => {
  const visible = { opacity: 1, y: 0, x: 0, transition: { duration: 0.5 } };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible,
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      className="w-full pl-[7.5vw] pt-[100px] bg-white flex justify-between items-center gap-[40px] md:pl-[5vw] tab:flex-col tab:w-[90%] tab:pl-0 tab:mx-auto"
    >
      <div className="w-[50%] tab:w-[100%]">
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible,
          }}
          className="text-[4vw] text-secondary font-bold leading-[140%] tab:text-[5.2vw] sm:text-[6vw]"
        >
          Create Your Business Services On{" "}
          <span className="text-primary">Passpoint Go</span>
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-[18px] w-[80%] text-secondary font-medium m-[16px_0_34px] md:w-[100%] md:text-[16px] sm:text-[15px]"
        >
          Paaspoint Go helps To simplify travel and enable seamless access to
          global opportunities for businesses and individuals.
        </motion.p>
        <Link href="/passpoint-go" legacyBehavior>
          <a
            variants={itemVariants}
            className="p-[18px_32px] w-fit flex items-center bg-primary text-white font-bold rounded-[100px] borderAttributes border-primary hover:text-primary sm:p-[15px_26px] sm:text-[14px]"
          >
            Get Started{" "}
            <span className="text-[20px] font-semibold ml-[8px]">
              <HiOutlineArrowSmallRight />
            </span>
          </a>
        </Link>
      </div>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible,
        }}
        className="w-[50%] flex justify-end tab:w-[100%] tab:justify-center"
      >
        <Image
          src={Go}
          placeholder="blur"
          alt="passpoint go"
          className="w-[100%] tab:hidden"
        />
        <Image
          src={Go2}
          placeholder="blur"
          alt="passpoint go"
          className="hidden tab:block"
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
