import { navData } from "@/constant/heroData";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Menu from "./menu.-button";
import Logo from "../../public/assets/images/landing/logo.png";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const router = useRouter();

  return (
    <div
      className={`w-full fixed top-0 left-0 py-[28px] z-[100] bg-white tab:py-[15px] shadow-[0_4px_48px_rgba(0,158,197,.08)]`}
    >
      <header className="w-[85%] mx-auto flex justify-between items-center gap-[20px] md:w-[90%] ">
        <Link href="/" legacyBehavior>
          <a onClick={() => setOpenNav(false)}>
            <Image
              priority
              src={Logo}
              alt="passpoint logo"
              width={119}
              className="tab:w-[100px] tab:h-auto cursor-pointer"
            />
          </a>
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
                  className={`relative pb-1 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-0 before:bg-primary before:transition-[all_0.4s_ease_in] hover:before:w-full tab:text-[18px] ${
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
              className="text-primary font-bold text-[18px]
            "
            >
              Login
            </a>
          </li>
          <li className="hidden tab:block mt-3">
            <a
              href="#"
              className="py-[16px] text-white font-bold px-[28px] bg-primary rounded-[100px] text-[18px]"
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
