import Aos from "aos";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Transition = ({ children }) => {
  const { asPath } = useRouter();
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  const variants = {
    out: {
      opacity: 0,
      y: 30,
      transition: {
        duration: 0.55,
      },
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        delay: 0.05,
      },
    },
  };

  return (
    <div className="overflow-hidden">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={asPath}
          variants={variants}
          animate="in"
          initial="out"
          exit="out"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Transition;
