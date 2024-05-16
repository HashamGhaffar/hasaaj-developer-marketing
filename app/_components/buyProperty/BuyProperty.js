"use client";
import { png, pngs } from "@/app/_constants/assets";
import Image from "next/image";

export default function BuyProperty() {
  return (
    <div className="flex justify-between md:items-center bg-[#18202A] md:pt-10 pt-20 flex-col md:flex-row ">
      <div className="md:w-[55%] w-[80%] ml-[5%]">
        <h1
          className="  2xl:text-[50px] 2xl:w-[90%] 2xl:font-semibold 2xl:leading-[60px] 2xl:text-left 2xl:text-white 
           xl:text-[50px] xl:w-[90%] xl:font-semibold xl:leading-[60px] xl:text-left xl:text-white lg:text-4xl lg:w-[90%] lg:font-semibold lg:leading-[50px] lg:text-left lg:text-white md:leading-10 md:text-3xl md:w-100% md:font-semibold md:text-left md:text-white sm:text-3xl sm:text-align-last-center sm:text-white sm:font-bold text-3xl text-align-last-center font-bold text-white"
        >
          Buy Property in <span className="text-amber-500">Pakistan</span> with{" "}
          <span className="text-amber-500">Experts</span>
        </h1>
        <p
          className=" 2xl:text-sm 2xl:w-[73%] 2xl:mt-4  2xl:leading-6 2xl:text-left 2xl:p-0
           xl:text-sm xl:w-[73%] xl:mt-4 xl:mb-20 xl:leading-6 xl:text-left xl:p-0 lg:text-md lg:p-0 lg:w-[73%] lg:mt-4 lg:mb-5 lg:leading-6 lg:text-left md:p-0 md:text-left md:text-[11px] md:w[73%] md:leading-5 md:mt-2.5 sm:text-xs sm:pt-10 sm:pb-10 sm:text-align-last-center text-xs pt-10 pb-10 text-align-last-center text-white"
        >
          Welcome to Land Holders, where we build dreams into towering
          realities. At Land Holders, we specialize in the development of
          high-rise buildings, crafting exceptional spaces that redefine
          skylines and enhance communities.
        </p>
        <hr className="sm:mb-2 mb-2 sm:hidden block" />
        <div className="xl:my-4 xl:mx-28 lg:my-4 lg:mx-28 md:w-4/12 md:my-4 md:mx-28 sm:w-3/6 sm:m-auto w-3/6 m-auto ">
          <button className="lg:text-[18px] md:text-[16px] text-[14px] font-bold border-[1px] border-white p-2 rounded-lg">
            Book Now
          </button>
        </div>
      </div>
      <div className="lg:w-[847.63px] md:w-[560px] sm:w-[460px] lg:h-[630px] md:h-[400px] sm:h-[300px] h-72 w-[85%] relative self-end mt-5 md:mt-0">
        <Image src={pngs.vector} className="" fill alt="Logo" />
      </div>
    </div>
  );
}
