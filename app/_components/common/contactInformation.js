"use client";
import { svgs, pngs } from "@/app/_constants/assets";
import Image from "next/image";

export default function ContactInformation() {
  return (
    <>
      <div
        style={{
          backgroundImage: ` url(${pngs.group})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom right",
        }}
        className="bg-[#18202A] w-full lg:w-[45%] xl:w-[35%] rounded-[12px] px-9 pb-32 pt-9"
      >
        <div className="text-[#ffffff] font-normal ">
          <h2 className="text-[27px] font-semibold">Contact Information</h2>
          <p className="text-[17.5px] text-[#C9C9C9]">
            Say something to start a live chat!
          </p>

          <div className="flex flex-col gap-y-10 mt-20">
            <div className="flex gap-x-5">
              <Image
                src={svgs.phone}
                width={16}
                height={20}
                alt="Picture of the author"
              />
              <p>+1012 3456 789</p>
            </div>
            <div className="flex gap-x-5">
              <Image
                src={svgs.message}
                width={16}
                height={20}
                alt="Picture of the author"
              />
              <p>demo@gmail.com</p>
            </div>
            <div className="flex gap-x-5 items-start">
              <Image
                src={svgs.location}
                width={16}
                height={20}
                alt="Picture of the author"
              />
              <p>
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
