import Hero from "@/components/about/hero";
import Team from "@/components/about/team";
import Value from "@/components/about/value";
import Subscribe from "@/components/landing/subscribe";
import WhyUs from "@/components/landing/whyUs";
import MainLayout from "@/layout/mainLayout";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About - Passpoint</title>
      </Head>
      <MainLayout>
        <Hero />
        <WhyUs />
        <Value />
        <Team />
        <Subscribe />
      </MainLayout>
    </>
  );
};

export default About;
