import SliderCard from "./sliderCard";
import { sliderData } from "@/constant/heroData";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { useState } from "react";

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState({});
  const [activeButton, setActiveButton] = useState(0);

  const handlePrev = () => {
    setActiveButton((activeButton - 1 + sliderData.length) % sliderData.length);
    // console.log(activeButton);
  };

  const handleNext = () => {
    setActiveButton((activeButton + 1) % sliderData.length);
    // console.log(activeButton);
    // console.log(sliderData.length);
    // console.log(activeSlide);
  };


  return (
    <div className="w-full my-[76px]">
      <div className="w-[85%] mx-auto flex justify-between items-center md:w-[90%]">
        <section>
          <h3 className="text-secondary text-[24px] font-semibold tab:text-[18px]">
            TESTIMONIALS
          </h3>
          <h2 className="text-secondary text-[32px] font-semibold w-[65%] mt-[20px] leading-[129%] tab:text-[20px]">
            What Our Customers Say About Us
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
          onMove={(active) => {
            setActiveSlide(active._C.Elements.slides);
            // setActiveButton(active.index % sliderData.length);
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
            className={`splide__arrows [&>*]:w-[40px] [&>*]:h-[40px] [&>*]:border-[2px] [&>*]:rounded-[100px] [&>*]:border-[#8a8c8e] [&>*]:font-[600] [&>*]:outline-none [&>*]:text-secondary absolute top-[-5.5vw] right-[8vw] tab:[&>*]:w-[32px] tab:[&>*]:h-[32px] tab:right-0 tab:top-[-7.5vw] sm:top-[-11vw] `}
          >
            <button
              className={`splide__arrow splide__arrow--prev`}
              onClick={handlePrev}
            >
              {" "}
              &#60;
            </button>
            <button
              className={`splide__arrow splide__arrow--next ml-[20px] tab:ml-[16px]`}
              onClick={handleNext}
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
