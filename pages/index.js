import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import Hero1 from "@/components/landing/hero-1";
import Hero2 from "@/components/landing/hero-2";
import Hero3 from "@/components/landing/hero-3";
import { useEffect, useMemo, useRef, useState } from "react";
import WhyUs from "@/components/landing/whyUs";
import Works from "@/components/landing/works";
import Service from "@/components/landing/service";
import GoSection from "@/components/landing/go-section";
import Partners from "@/components/landing/partners";
import Download from "@/components/landing/download";
import Subscribe from "@/components/landing/subscribe";
import Slider from "@/components/landing/slider";
import MainLayout from "@/layout/mainLayout";

const data = {
  0: {
    num: 0,
    logo: true,
    textNormal: "black",
    textActive: "primary",
    textLogIn: "primary",
    bgLine: "primary",
    bgSignUp: "primary",
    textSignUp: "white",
  },
  1: {
    bg: "primary",
    textActive: "white",
  },
  2: {
    bg: "black",
    textActive: "primary",
  },
};

export default function Home() {
  const [editHeader, setEditHeader] = useState(true);
  const [changeHeader, setChangeHeader] = useState(0);
  const [height, setHeight] = useState(0);
  const pauseRef = useRef(null);
  const playRef = useRef(null);

  const headerProps = useMemo(() => {
    const show = data[changeHeader];
    return show;
  }, [changeHeader]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setHeight(window.scrollY);
  //   };
  //   window.addEventListener("scroll", handleResize);
  //   handleResize();
  //   return () => window.removeEventListener("scroll", handleResize);
  // }, [height]);

  // useEffect(() => {
  //   if (height > 76) {
  //     console.log("Height is greater than 76");
  //     pauseRef.current.click();
  //     setEditHeader(false);
  //   } else if (height < 76) {
  //     console.log("Height is lesser than 76");
  //     playRef.current.click();
  //     setEditHeader(true);
  //   }a
  // }, [height, editHeader]);

  // console.log(height);

  return (
    <>
      {/* <Header
      {...headerProps}
      /> */}
      <MainLayout>
        <main className={`bg-white`}>
          <Splide
            hasTrack={false}
            options={{
              type: "fade",
              rewind: true,
              arrows: false,
              pauseOnHover: false,
              autoplay: true,
              interval: 4000,
              easing: ".6s ease-in", 
            }}
            onMove={(_, index) => setChangeHeader(index)}
          >
            <SplideTrack className="tab:h-[fit_content]">
              <SplideSlide>
                <Hero1 />
              </SplideSlide>
              <SplideSlide>
                <Hero2 />
              </SplideSlide>
              <SplideSlide className="tab:height">
                <Hero3 />
              </SplideSlide>
            </SplideTrack>
            {/* <button className="splide__toggle" type="button">
            <span className="splide__toggle__play" ref={playRef}>
            Play
            </span>
            <span className="splide__toggle__pause" ref={pauseRef}>
              Pause
            </span>
          </button> */}
          </Splide>
          <WhyUs />
          <Works />
          <Service />
          <Slider />
          <GoSection />
          <Partners />
          <Download />
          <Subscribe />
        </main>
      </MainLayout>
      {/* <Footer /> */}
    </>
  );
}
