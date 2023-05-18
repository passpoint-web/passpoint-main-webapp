import Hero from "@/components/faq/hero";
import MainLayout from "@/layout/mainLayout";
import Head from "next/head";
import React from "react";
import Accordion from "@/components/faq/accordion";

const Faq = () => {
  return (
    <>
      <Head>
        <title>Faqs - Passpoint</title>
      </Head>
      <MainLayout>
        <Hero />
        <Accordion />
      </MainLayout>
    </>
  );
};

export default Faq;
