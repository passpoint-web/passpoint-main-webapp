import Slider from "@/components/landing/slider";
import Subscribe from "@/components/landing/subscribe";
import Counter from "@/components/passpointGo/counter";
import Hero from "@/components/passpointGo/hero";
import Service from "@/components/passpointGo/service";
import Why from "@/components/passpointGo/why";
import Works from "@/components/passpointGo/works";
import Head from "next/head";
import React from "react";

const PasspointGo = () => {
  return (
    <>
      <Head>
        <title>Passpoint Go - Create Your Business Services</title>
        <meta name="theme-color" content="#000000" />
      </Head>
      <Hero />
      <Counter />
      <Works />
      <Service />
      <Why />
      {/* <Slider text="What Our Users Say About Us" /> */}
      <Subscribe />
    </>
  );
};

export default PasspointGo;
