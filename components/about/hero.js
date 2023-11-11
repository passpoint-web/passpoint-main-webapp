import { aboutData } from "@/constant/heroData";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const visible = { opacity: 1, y: 0, x: 0, transition: { duration: 0.5 } };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible,
  };
  return (
    <>
      {aboutData.map((item, i) => (
        <motion.div
          key={i}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 1 } }}
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
          className={`w-full bg-white ${item.pad}`}
        >
          <div
            className={`w-[85%] mx-auto flex justify-between ${
              item.reverse && "flex-row-reverse"
            } items-center md:w-[90%] tab:flex-col`}
          >
            <section className={`w-[45%] tab:w-full`}>
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible,
                }}
                className={`${item.textSize} font-bold leading-[138.5%]`}
              >
                {item.title}
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className={`text-[18px] font-medium text-secondary my-[24px] md:text-[16px] sm:text-[15px]`}
              >
                {item.text}
              </motion.p>
            </section>
            <motion.section
              variants={{
                hidden: { opacity: 0, x: 40 },
                visible,
              }}
              className="w-[45%] flex justify-end tab:w-full tab:justify-center tab:mt-[50px]"
            >
              <Image
                src={item.image}
                placeholder="blur"
                alt="passpoint hero"
                className="max-w-[100%] tab:max-w-[70%] sm:max-w-[100%]"
              />
            </motion.section>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default Hero;
