"use client"

import { useState } from "react";
import Image from "next/image";

import { svgs } from "@/app/_constants/assets";

export default function NavBar({ colorNav, navImage, navHamburger }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between">
        <Image
          className="h-auto w-[75px] sm:w-[13.5%]"
          src={navImage}
          width={75}
          height={75}
          alt="Picture of the author"
        />
        <ul
          className={` " z-30 text-white sm:text-black w-[65%] bg-[#2b4463] sm:bg-transparent rounded-[20px] p-[20px] sm:p-0  sm:w-auto absolute top-[130px] left-[50%] translate-x-[-50%] sm:translate-x-[0] gap-y-[16px] sm:static sm:flex items-center gap-x-[14px] xl:gap-x-[85px] lg:gap-x-[65px] md:gap-x-[16px] lg:text-[22px] md:text-[18px] sm:text-[15px] text-[15px] flex-col  justify-center sm:flex-row sm:flex-wrap ${isMenuOpen ? "flex" : "hidden 	"
            }`}
        >
          <li style={{ color: colorNav }} className="font-semibold">
            Home
          </li>
          <li style={{ color: colorNav }} className="font-semibold">
            Blog
          </li>
          <li style={{ color: colorNav }} className="font-semibold">
            Services
          </li>
          <li style={{ color: colorNav }} className="font-semibold">
            About Us
          </li>
          <li
            style={{ color: colorNav, borderColor: colorNav }}
            className="font-bold lg:text-[18px] md:text-[16px] sm:text-[12px] p-[12px] border-[1px] rounded-[8px]"
          >
            <button>Contact Us</button>
          </li>
        </ul>
        <Image
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden h-auto w-[40px] cursor-pointer"
          src={navHamburger}
          width={40}
          height={40}
          alt="hamburger"
        />
      </nav>
    </>
  );
}
