"use client";
import { png, pngs } from "@/app/_constants/assets";
import Image from "next/image";

export default function BuyProperty() {
  return (
    <>
      <div>
        <div className="h-56 bg-[#18202A;] mb-0" />
        <div className=" 2xl:flex 2xl:items-center  2xl:flew-row 2xl:pl-20 2xl:bg-[#18202A;] xl:bg-[#18202A;] xl:flex xl:items-center xl:pl-20  xl:flew-row lg:flex lg:bg-[#18202A;] lg:items-center lg:pl-20 lg:flex-row md:flex md:items-center md:bg-[#18202A;] md:pl-20 md:flex-row sm:flex sm:flex-col-reverse sm:bg-[#18202A;] bg-[#18202A;]  flex flex-col-reverse">
          <div className="w-[55%]  sm:m-auto w-50% m-auto ">
            <h1
              className="  2xl:text-[50px] 2xl:w-[90%] 2xl:font-semibold 2xl:leading-[60px] 2xl:text-left 2xl:text-white 
           xl:text-[50px] xl:w-[90%] xl:font-semibold xl:leading-[60px] xl:text-left xl:text-white lg:text-4xl lg:w-[90%] lg:font-semibold lg:leading-[50px] lg:text-left lg:text-white md:leading-10 md:text-3xl md:w-100% md:font-semibold md:text-left md:text-white sm:text-3xl sm:text-center sm:text-align-last-center sm:text-white sm:font-bold text-3xl text-center text-align-last-center font-bold text-white"
            >
              Buy Property in <span className="text-amber-500">Pakistan</span>
              with <span className="text-amber-500">Experts</span>
            </h1>
            <hr className="sm:mt-2 mt-2 2xl:hidden xl:hidden lg:hidden md:hidden sm:block block " />
            <p
              className=" 2xl:text-sm 2xl:w-[73%] 2xl:mt-4  2xl:leading-6 2xl:text-left 2xl:p-0
           xl:text-sm xl:w-[73%] xl:mt-4 xl:mb-20 xl:leading-6 xl:text-left xl:p-0 lg:text-md lg:p-0 lg:w-[73%] lg:mt-4 lg:mb-5 lg:leading-6 lg:text-left md:p-0 md:text-left md:text-[11px] md:w[73%] md:leading-5 md:mt-2.5 sm:text-xs sm:pt-10 sm:pb-10 sm:text-center sm:text-align-last-center text-xs pt-10 pb-10 text-center text-align-last-center  2xl:text-white xl:text-white lg:text-white md:text-white sm:text-white text-white"
            >
              Welcome to Land Holders, where we build dreams into towering
              realities. At Land Holders, we specialize in the development of
              high-rise buildings, crafting exceptional spaces that redefine
              skylines and enhance communities.
            </p>
            <hr className="sm:mb-2 mb-2 2xl:hidden xl:hidden lg:hidden md:hidden sm:block block  " />
            <div className="xl:my-4 xl:mx-28 lg:my-4 lg:mx-28 md:w-4/12 md:my-4 md:mx-28 sm:w-3/6 sm:m-auto w-3/6 m-auto ">
              <button
                className=" 2xl:border 2xl:border-white 2xl:font-bold 2xl:p-2 2xl:rounded
          xl:border xl:border-white xl:font-bold xl:p-2 xl:rounded-lg  lg:border lg:border-whiwhite
               lg:font-bold lg:p-2 lg:rounded-lg md:border md:border-white
               md:font-bold md:p-3 md:rounded-lg md:text-sm md:px-2 md:py-2 2xl:block xl:block lg:block md:block sm:hidden hidden  
               2xl:text-white xl:text-white lg:text-white md:text-white 
               "
              >
                Book Now
              </button>
              <button
                className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block  sm:border sm:border-white
           sm:p-2 sm:w-full sm:rounded-lg sm:   block border border-white
           p-2 w-full rounded-lg font-bold sm:text-white text-white
              "
              >
                {" "}
                Book Now
              </button>
            </div>
          </div>
          <hr className="-mt-12 sm:mb-5 sm:border-4 border-4 2xl:hidden xl:hidden lg:hidden md:hidden sm:block block mb-7" />
          <div className="sm:mb-24 mb-24">
            {/* <img
              src="vector 2.png"
              //   alt=""
            /> */}
            <Image
              src={pngs.vector}
              className="opacity-100 2xl:w-full xl:w-full lg:w-full md:w-full  sm:w-3/6 sm:m-auto  w-3/6 m-auto   "
              width={500}
              height={500}
              alt="Logo"
            />
          </div>
        </div>
      </div>
    </>
  );
}
