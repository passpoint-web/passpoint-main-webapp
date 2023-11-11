import { countData } from "@/constant/heroData";
import dynamic from "next/dynamic";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

const CountUp = dynamic(() => import("react-countup"), { ssr: false });

const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="w-full bg-black py-[44px] mt-[30px]">
        <div className="w-[85%] mx-auto grid grid-cols-fluidMedium gap-[100px] [&>*:not(:last-child)]:pr-[20px] [&>*:not(:last-child)]:border-[rgba(255,255,255,0.6)] [&>*:not(:last-child)]:border-r-[1px] border-solid md:w-[90%] tab:[&>*:not(:last-child)]:pr-[0px] tab:[&>*:not(:last-child)]:border-r-[0px] tab:gap-[40px]">
          {countData.map((data, i) => (
            <div key={i}>
              <h1 className="text-[4vw] text-white font-bold md:text-[5vw] sm:text-[7.5vw]">
                {counterOn && (
                  <CountUp start={0} end={data.num} duration={4} delay={0} />
                )}
                <span>{data.sign}</span>
              </h1>
              <p className="text-[16px] text-[rgba(255,255,255,0.8)] w-[100%]">
                {data.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ScrollTrigger>
  );
};
export default Counter;
