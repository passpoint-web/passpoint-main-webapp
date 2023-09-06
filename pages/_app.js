import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import "animate.css";
import "aos/dist/aos.css";
import Transition from "@/layout/transition";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";

const Mont = Montserrat({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/fav.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/fav.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/fav.svg" />
        <meta name="theme-color" content="#009EC5" />
        <title>
          Home - Travel Anywhere, Anytime With seamless payment Gateways{" "}
        </title>
      </Head>
      <main className={Mont.className}>
        <Header />
        <Transition>
          <Component {...pageProps} />
        </Transition>
        <Footer />
      </main>
    </>
  );
}
