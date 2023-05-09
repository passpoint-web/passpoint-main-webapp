import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import Hero1 from "@/components/landing/hero-1";
import Hero2 from "@/components/landing/hero-2";
import Hero3 from "@/components/landing/hero-3";
import WhyUs from "@/components/landing/whyUs";
import Works from "@/components/landing/works";
import Service from "@/components/landing/service";
import GoSection from "@/components/landing/go-section";
import Partners from "@/components/landing/partners";
import Download from "@/components/landing/download";
import Subscribe from "@/components/landing/subscribe";
import Slider from "@/components/landing/slider";
import MainLayout from "@/layout/mainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Splide
        hasTrack={false}
        options={{
          type: "fade",
          rewind: true,
          arrows: false,
          pauseOnHover: false,
          autoplay: true,
          interval: 5000,
          easing: ".6s ease-in",
        }}
      >
        <SplideTrack>
          <SplideSlide>
            <Hero1 />
          </SplideSlide>
          <SplideSlide>
            <Hero2 />
          </SplideSlide>
          <SplideSlide>
            <Hero3 />
          </SplideSlide>
        </SplideTrack>
      </Splide>
      <WhyUs />
      <Works />
      <Service />
      <Slider />
      <GoSection />
      <Partners />
      <Download />
      <Subscribe />
    </MainLayout>
  );
}
