import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/assets/images/landing/logo-2.svg";
import Twitter from "../../public/assets/images/landing/twitter.svg";
import Instagram from "../../public/assets/images/landing/instagram.svg";
import LinkedIn from "../../public/assets/images/landing/linkedIn.svg";
import Fb from "../../public/assets/images/landing/fb.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-primary py-[80px] tab:py-[40px]">
      <div className="w-[85%] mx-auto flex justify-between flex-wrap gap-[40px] md:w-[90%] sm:justify-start">
        <section className="w-[27%] md:w-[40%] tab:w-[60%] sm:w-[100%]">
          <h3 className="[&>:first-child]:mb-[20px]">
            <Image src={Logo} alt="passpoint logo" />
          </h3>
          <ul className="flex flex-col gap-5 text-[14px] sm:text-[13px] text-white">
            <li className="">
              Plan trips on your own convenience without currenct type barriers
              with your preferred currency wallet you can pay for anything.
            </li>
            <li className="inline-flex gap-[24px]">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <Image src={Twitter} alt="passpoint twitter" />
              </a>
              <a
                href="https://instagram.com/mypasspoint"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Instagram} alt="passpoint instagram" />
              </a>
              <a
                href="https://www.linkedin.com/company/mypasspoint"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={LinkedIn} alt="passpoint linkedIn" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <Image src={Fb} alt="passpoint facebook" />
              </a>
            </li>
          </ul>
        </section>
        <section className="[&>:first-child]:font-semibold [&>:first-child]:text-lowWhite [&>:first-child]:mb-[20px]">
          <h3>Features</h3>
          <ul className="flex flex-col gap-2 text-white text-[14px] sm:text-[13px]">
            <li>
              <Link href="" legacyBehavior>
                <a className="text-white text-[14px] sm:text-[13px]">
                  Flight Ticket
                </a>
              </Link>
            </li>
            <li>
              <Link href="" legacyBehavior>
                <a className="text-white text-[14px] sm:text-[13px]">Hotel</a>
              </Link>
            </li>
            <li>
              <Link href="" legacyBehavior>
                <a className="text-white text-[14px] sm:text-[13px]">
                  Plan Trip
                </a>
              </Link>
            </li>
            <li>
              <Link href="" legacyBehavior>
                <a className="text-white text-[14px] sm:text-[13px]">
                  Bill Payment
                </a>
              </Link>
            </li>
            <li>
              <Link href="" legacyBehavior>
                <a className="text-white text-[14px] sm:text-[13px]">
                  Wallet Management
                </a>
              </Link>
            </li>
          </ul>
        </section>
        <section className="[&>:first-child]:font-semibold [&>:first-child]:text-lowWhite [&>:first-child]:mb-[20px]">
          <h3>Products</h3>
          <ul className="flex flex-col gap-2 text-white text-[14px] sm:text-[13px]">
            <li>Virtual Card</li>
            <li>Physical Card</li>
            <li>
              <Link href="/passpoint-go" legacyBehavior>
                <a className="text-white text-[14px] sm:text-[13px]">
                  Passpoint Go
                </a>
              </Link>
            </li>
          </ul>
        </section>
        <section className="[&>:first-child]:font-semibold [&>:first-child]:text-lowWhite [&>:first-child]:mb-[20px]">
          <h3>About</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="" legacyBehavior>
                <a className="text-white text-[14px] sm:text-[13px]">Company</a>
              </Link>
            </li>
            <li>
              <Link href="/faq" legacyBehavior>
                <a className="text-white text-[14px] sm:text-[13px]">FAQS</a>
              </Link>
            </li>
            <li>
              <Link href="/terms_and_conditions" legacyBehavior>
                <a className="text-white text-[14px] sm:text-[13px]">
                  Terms & Condition
                </a>
              </Link>
            </li>
            <li>
              <Link href="/privacy_policy" legacyBehavior>
                <a className="text-white text-[14px] sm:text-[13px]">
                  Privacy Policy
                </a>
              </Link>
            </li>
          </ul>
        </section>
        <section className="[&>:first-child]:font-semibold [&>:first-child]:text-lowWhite [&>:first-child]:mb-[20px]">
          <h3>Contact Us</h3>
          <ul className="flex flex-col gap-2 text-white text-[14px] sm:text-[13px]">
            <li>Lagos, Nigeria</li>
            <li>
              <a
                href="mailto:passpoint@gmail.com"
                className="text-white text-[14px] sm:text-[13px]"
              >
                Email: hello@mypasspoint.com
              </a>
            </li>
            <li>
              <a
                href="tel:+2347089234543"
                className="text-white text-[14px] sm:text-[13px]"
              >
                Phone: +2347089234543
              </a>
            </li>
          </ul>
        </section>
      </div>
      <span className="w-full mt-[20px] block border-b-white border-solid border-b-[1px]"></span>
    </footer>
  );
};

export default Footer;
