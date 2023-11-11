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
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Home - Travel Anywhere, Anytime With seamless payment Gateways
        </title>
      </Head>
      <Splide
        hasTrack={false}
        options={{
          type: "fade",
          rewind: true,
          arrows: false,
          pauseOnHover: false,
          autoplay: true,
          interval: 7000,
          autoHeight: false,
          easing: ".4s ease-in",
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
      {/* <Slider text="What Our Customers Say About Us" /> */}
      <GoSection />
      <Partners />
      <Download />
      <Subscribe />
    </>
  );
}
