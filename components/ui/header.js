import { navData } from "@/constant/heroData";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo1 from "../../public/assets/images/landing/logo-1.svg";
import { useState } from "react";
import Menu from "./menu.-button";

const Header = ({}) => {
  const [openNav, setOpenNav] = useState(false);
  const router = useRouter();

  return (
    <div
      className={`w-full fixed top-0 left-0 py-[28px] z-[100] bg-white tab:py-[18px]`}
    >
      <header className="w-[85%] mx-auto flex justify-between items-center gap-[20px] md:w-[90%] ">
        <Link href="/" legacyBehavior>
          <Image
            priority
            src={Logo1}
            alt="passpoint logo"
            className="w-auto h-auto cursor-pointer"
          />
        </Link>
        <ul
          className={`flex items-center gap-[50px] transform transition duration-300 ease-in-out md:gap-[25px] tab:fixed tab:bg-white tab:px-[5vw] tab:pt-[20px] tab:z-[200] tab:w-full tab:h-screen tab:top-[64px] tab:left-0 tab:flex-col tab:justify-start tab:items-start tab:translate-x-[-100%] sm:px ${
            openNav && "tab:translate-x-[0]"
          }`}
        >
          {navData.map((link, id) => (
            <li key={id} onClick={() => setOpenNav(false)}>
              <Link href={link.link} legacyBehavior>
                <a
                  className={`relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[1.5px] before:w-0 before:bg-primary before:rounded-md before:transition-[all_0.4s_ease_in] hover:before:w-full ${
                    router.pathname === link.link
                      ? "text-primary font-bold"
                      : "text-secondary"
                  }`}
                >
                  {link.title}
                </a>
              </Link>
            </li>
          ))}
          <li className="hidden tab:block">
            <a
              href="#"
              className="text-primary font-bold
            "
            >
              Login
            </a>
          </li>
          <li className="hidden tab:block mt-3">
            <a
              href="#"
              className="py-[16px] text-white font-bold px-[28px] bg-primary rounded-[100px]"
            >
              Signup
            </a>
          </li>
        </ul>

        <ul className="flex items-center list-none font-bold tab:hidden">
          <li>
            <a href="#" className={`text-primary`}>
              Log In
            </a>
          </li>
          <span
            className={`w-[2px] min-h-[40px] block bg-primary mx-[20px] md:mx-[10px]`}
          ></span>
          <li>
            <a
              href="#"
              className={`py-[16px] text-white px-[28px] bg-primary rounded-[100px] borderAttributes border-primary hover:text-primary`}
            >
              Signup
            </a>
          </li>
        </ul>
        <Menu openNav={openNav} setOpenNav={setOpenNav} />
      </header>
    </div>
  );
};

export default Header;
