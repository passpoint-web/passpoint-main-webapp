import Image from "next/image";
import HeroImage from "../../public/assets/images/cardAbout/hero-card.png";
import Play from "../../public/assets/images/landing/play-store.svg";
import Apple from "../../public/assets/images/landing/apple-store.svg";
import { motion } from "framer-motion";

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
      className="w-full bg-white p-[150px_0_100px] tab:p-[100px_0_50px]"
    >
      <div className="w-[85%] mx-auto flex justify-between items-center md:w-[90%] tab:flex-col">
        <section className="w-2/4 tab:w-full">
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible,
            }}
            className="text-[4.3vw] font-bold leading-[138.5%] tab:text-[6.2vw]"
          >
            Passpoint Cards
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-[20px] w-[60%] font-medium text-secondary my-[24px] md:w-[80%] sm:w-[100%] tab:text-[16px] sm:text-[14px]"
          >
            Card management to help you with all your travel transactions
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex gap-[24px] w-full tab:w-[85%] tab:gap-[18px]"
          >
            <a href="#">
              <Image
                src={Play}
                blurDataURL="/assets/images/landing/play-store.svg"
                placeholder="blur"
                width={200}
                height={70}
                alt="passpoint app download"
                className="w-full h-auto"
              />
            </a>
            <a href="#">
              <Image
                src={Apple}
                blurDataURL=""
                width={200}
                height={70}
                alt="passpoint app download"
                className="w-full h-auto"
              />
            </a>
          </motion.div>
        </section>
        <motion.section
          variants={{
            hidden: { opacity: 0, x: 40 },
            visible,
          }}
          className="w-2/4 flex justify-end tab:w-full tab:justify-center tab:mt-[50px]"
        >
          <Image
            src={HeroImage}
            placeholder="blur"
            alt="passpoint hero"
            className="max-w-[100%] tab:max-w-[70%] sm:max-w-[100%]"
          />
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Hero;
