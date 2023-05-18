import Image from "next/image";
import { motion } from "framer-motion";
import HeroImage from "../../public/assets/images/landing/hero-image-2.png";
import PlayStore from "../../public/assets/images/landing/play-store.svg";
import AppleStore from "../../public/assets/images/landing/apple-store.svg";

const Hero1 = () => {
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
      className="w-full bg-white pt-[150px] tab:pt-[100px]"
    >
      <div className="w-[85%] mx-auto flex justify-between items-start md:w-[90%] tab:flex-col">
        <section className="w-2/4 tab:w-full">
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible,
            }}
            className="text-[4vw] font-bold leading-[138.5%] tab:text-[6vw]"
          >
            Travel Anywhere, Anytime With seamless payment Gateways{" "}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-[20px] font-medium text-secondary my-[24px] tab:text-[16px] sm:text-[14px]"
          >
            Plan trips on your own convenience without currency type barriers,
            with your preferred currency wallet you can pay & purchase for
            anything on your travel trips.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex gap-[24px] w-full tab:w-[85%] tab:gap-[18px]"
          >
            <a href="#">
              <Image
                src={PlayStore}
                width={200}
                height={70}
                alt="passpoint app download"
                className="w-auto h-auto"
              />
            </a>
            <a href="#">
              <Image
                src={AppleStore}
                width={200}
                height={70}
                alt="passpoint app download"
                className="w-auto h-auto"
              />
            </a>
          </motion.div>
        </section>
        <motion.section
          variants={{
            hidden: { opacity: 0, x: 40 },
            visible,
          }}
          className="w-2/4 flex justify-end relative tab:w-full tab:justify-center tab:mt-[50px]"
        >
          <Image
            src={HeroImage}
            placeholder="blur"
            alt="passpoint hero"
            className="max-w-[85%] absolute right-0 top-[-50px] md:static tab:max-w-[60%] sm:max-w-[90%]"
          />
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Hero1;
