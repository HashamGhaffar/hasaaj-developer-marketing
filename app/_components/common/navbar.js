import { useState } from "react";
import Image from "next/image";

import { svgs } from "@/app/_constants/assets";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between">
        <Image
          className="h-auto w-[75px] sm:w-[13.5%]"
          src={svgs.builders}
          width={75}
          height={75}
          alt="Picture of the author"
        />
        <ul
          className={`sm:flex items-center gap-x-[14px] xl:gap-x-[85px] lg:gap-x-[65px] md:gap-x-[16px] lg:text-[22px] md:text-[18px] sm:text-[15px] text-[15px] flex-col  justify-center  sm:items-stretch sm:flex-row sm:flex-wrap ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <li className="text-black font-semibold">Home</li>
          <li className="text-black font-semibold">Blog</li>
          <li className="text-black font-semibold">Services</li>
          <li className="text-black font-semibold">About Us</li>
          <li
            style={{ color: "#18202A" }}
            className="font-bold lg:text-[18px] md:text-[16px] sm:text-[12px] p-[12px] border-[1px] border-[#18202A] rounded-[8px]"
          >
            <button>Contact Us</button>
          </li>
        </ul>
        <Image
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden h-auto w-[40px] cursor-pointer"
          src={svgs.hamburger}
          width={40}
          height={40}
          alt="hamburger"
        />
      </nav>
    </>
  );
}
