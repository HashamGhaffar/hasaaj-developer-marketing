"use client";

import { useState } from "react";
import Image from "next/image";

import { svgs } from "@/app/_constants/assets";
import { usePathname, useRouter } from "next/navigation";

export default function NavBar({ colorNav, navImage, navHamburger }) {
  const router = useRouter();
  const currentPath = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log("currentPath", currentPath);

  return (
    <>
      <nav className="flex items-center justify-between">
        <div className="lg:w-[194px] md:w-[160px] w-[120px]" onClick={() => router.push("/")}>
          <Image
            className="w-full h-full"
            src={navImage} fill
            alt="Picture of the author"
          />
        </div>
        <ul
          className={` " z-30 text-white sm:text-black w-[65%] bg-[#2b4463] sm:bg-transparent rounded-[20px] p-[20px] sm:p-0  sm:w-auto absolute top-[130px] left-[50%] translate-x-[-50%] sm:translate-x-[0] gap-y-[16px] sm:static sm:flex items-center gap-x-[14px] xl:gap-x-[85px] lg:gap-x-[65px] md:gap-x-[16px] lg:text-[22px] md:text-[18px] sm:text-[15px] text-[15px] flex-col  justify-center sm:flex-row sm:flex-wrap ${isMenuOpen ? "flex" : "hidden 	"
            }`}
        >
          <li style={{ color: currentPath === "/" ? "#FF9D00" : colorNav }} className={`font-semibold cursor-pointer`} onClick={() => router.push("/")}>
            Home
          </li>
          <li style={{ color: currentPath === "/blogs" ? "#FF9D00" : colorNav }} className="font-semibold cursor-pointer" onClick={() => router.push("/blogs")}>
            Blog
          </li>
          <li style={{ color: currentPath === "/construction-services" ? "#FF9D00" : colorNav }} className="font-semibold cursor-pointer" onClick={() => router.push("/construction-services")}>
            Services
          </li>
          <li style={{ color: currentPath === "/about-us" ? "#FF9D00" : colorNav }} className="font-semibold cursor-pointer" onClick={() => router.push("/about-us")}>
            About Us
          </li>
          <li
            style={{ color: currentPath === "/contact-us" ? "#FF9D00" : colorNav, borderColor: currentPath === "/contact-us" ? "#FF9D00" : colorNav }}
            className="font-bold lg:text-[18px] md:text-[16px] sm:text-[12px] p-[12px] border-[1px] rounded-[8px]"
            onClick={() => router.push("/contact-us")}
          >
            <button >Contact Us</button>
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
