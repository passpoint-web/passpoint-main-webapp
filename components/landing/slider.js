import SliderCard from "./sliderCard";
import { sliderData } from "@/constant/heroData";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { useState } from "react";

const Slider = ({text}) => {
  const [position, setPosition] = useState("next");

  return (
    <div className="w-full my-[76px]">
      <div className="w-[85%] mx-auto flex justify-between items-center md:w-[90%]">
        <section>
          <h3 className="text-secondary text-[24px] font-semibold tab:text-[16px]">
            TESTIMONIALS
          </h3>
          <h2 className="text-secondary text-[32px] font-semibold w-[65%] mt-[20px] leading-[129%] tab:text-[18px]">
            {text}
          </h2>
        </section>
      </div>
      <div
        className="pl-[6vw] relative tab:pl-[0] tab:w-[90%] tab:mx-auto"
        aria-label="myArrow"
      >
        <Splide
          hasTrack={false}
          options={{
            type: "loop",
            updateOnMove: true,
            perPage: 3,
            perMove: 1,
            gap: 20,
            rewind: true,
            autoplay: false,
            interval: 4000,
            autoWidth: true,
            mediaQuery: "max",
            breakpoints: {
              768: {
                perPage: 1,
                autoWidth: false,
              },
            },
          }}
        >
          <SplideTrack>
            {sliderData.map((item, id) => (
              <SplideSlide key={id}>
                <SliderCard {...item} />
              </SplideSlide>
            ))}
          </SplideTrack>
          <div
            className={`splide__arrows [&>*]:w-[40px] [&>*]:h-[40px] [&>*]:rounded-[100px] [&>*]:font-[600] [&>*]:outline-none absolute top-[-5.5vw] right-[8vw] tab:[&>*]:w-[32px] tab:[&>*]:h-[32px] tab:right-0 tab:top-[-7.5vw] sm:top-[-11vw] sm:[&>*]:text-[14px] `}
          >
            <button
              className={`splide__arrow splide__arrow--prev text-secondary border-[#8a8c8e] border-[2px] ${
                position === "prev" && "bg-primary text-white border-primary"
              } `}
              onClick={() => setPosition("prev")}
            >
              &#60;
            </button>
            <button
              className={`splide__arrow splide__arrow--next text-secondary ml-[20px] tab:ml-[16px border-[#8a8c8e] border-[2px] ${
                position === "next" && "bg-primary text-white border-primary"
              }`}
              onClick={() => setPosition("next")}
            >
              &#62;
            </button>
          </div>
        </Splide>
      </div>
    </div>
  );
};

export default Slider;
