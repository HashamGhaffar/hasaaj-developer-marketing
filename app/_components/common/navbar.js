"use client";

import { useState } from "react";
import Image from "next/image";
import servicesArrow from "../../../public/svg/servicesArrow.svg";
import { svgs } from "@/app/_constants/assets";
import { usePathname, useRouter } from "next/navigation";

export default function NavBar({ colorNav, navImage, navHamburger }) {
  const router = useRouter();
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log("currentPath", currentPath);

  return (
    <>
      <nav className="flex items-center justify-between">
        <div
          className="lg:w-[194px] md:w-[160px] w-[120px]"
          onClick={() => router.push("/")}
        >
          <Image
            className="w-full h-full"
            src={navImage}
            fill
            alt="Picture of the author"
          />
        </div>
        <ul
          className={`z-30 text-white sm:text-black w-[65%] bg-[#a5a5a5] sm:bg-transparent rounded-[20px] p-[20px] sm:p-0 sm:w-auto absolute top-[130px] left-[50%] translate-x-[-50%] sm:translate-x-[0] gap-y-[16px] sm:static sm:flex items-center gap-x-[14px] xl:gap-x-[85px] lg:gap-x-[65px] sm:gap-x-[30px] lg:text-[22px] md:text-[18px] sm:text-[15px] text-[15px] flex-col justify-center sm:flex-row sm:flex-wrap ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <li
            style={{ color: currentPath === "/" ? "#FF9D00" : colorNav }}
            className="font-semibold cursor-pointer hover:!text-[#FF9D00]"
            onClick={() => router.push("/")}
          >
            Home
          </li>
          <li
            style={{
              color:
                currentPath === "/blogs" || currentPath === "/blog-details"
                  ? "#FF9D00"
                  : colorNav,
            }}
            className="font-semibold cursor-pointer hover:!text-[#FF9D00]"
            onClick={() => router.push("/blogs")}
          >
            Blog
          </li>
          <li
            className="font-semibold cursor-pointer relative group hover:!text-[#FF9D00]"
            style={{
              color:
                currentPath === "/construction-services" ? "#FF9D00" : colorNav,
            }}
          >
            Services
            <div className="absolute top-1/2 right-[-18px] transform group-hover:rotate-180">
              <Image
                src={servicesArrow}
                width={8}
                height={4}
                alt="Picture of the author"
              />
            </div>
            <ul className="absolute hidden group-hover:block text-[16px] w-[182px] rounded-[10px] bg-[#f1f1f1] text-black py-2 px-3">
              <li
                className="py-1 hover:!text-[#FF9D00]"
                onClick={() => router.push("/construction-services")}
              >
                Construction
              </li>
              <li
                className="py-1 hover:!text-[#FF9D00]"
                onClick={() => router.push("/selling-purchasing")}
              >
                Selling & Purchasing
              </li>
            </ul>
          </li>

          <li
            style={{
              color: currentPath === "/about-us" ? "#FF9D00" : colorNav,
            }}
            className="font-semibold cursor-pointer hover:!text-[#FF9D00]"
            onClick={() => router.push("/about-us")}
          >
            About Us
          </li>
          <li
            style={{
              color: currentPath === "/contact-us" ? "#FF9D00" : colorNav,
              borderColor: currentPath === "/contact-us" ? "#FF9D00" : colorNav,
            }}
            className="font-bold lg:text-[18px] md:text-[16px] sm:text-[12px] p-[12px] border-[1px] rounded-[8px] hover:!text-[#FF9D00] hover:!border-[#FF9D00]"
            onClick={() => router.push("/contact-us")}
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
