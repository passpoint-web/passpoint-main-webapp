import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import "animate.css";
import "aos/dist/aos.css";
import Transition from "@/layout/transition";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <main>
        <Header />
        <Transition>
          <Component {...pageProps} />
        </Transition>
        <Footer />
      </main>
    </>
  );
}
