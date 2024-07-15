"use client";
import Image from "next/image";

import { svgs } from "@/app/_constants/assets";

export default function ClientsCard({ Name, Job, photo, comments }) {
  return (
    <>
      <div className="w-full lg:w-[97%] rounded-[26px] lg:ml-[2px] py-[70px] px-[20px] bg-[#18202A] text-white">
        <div className="flex justify-between  flex-col xl:flex-row gap-y-[15px] pb-[28px]">
          <div className="flex items-center gap-[17px]">
            <Image
              src={photo}
              height={100}
              width={100}
              alt="Picture of the author"
            />
            <div className="text-[#FFFFFF]">
              <h3 className="text-[24px] font-medium">{Name}</h3>
              <p className="lg:text-[12px] xl:text-[15px] font-normal">{Job}</p>
            </div>
          </div>
          <div className="flex ">
            <Image
              src={svgs.goldenStar}
              height={20}
              width={20}
              alt="Picture of the author"
            />
            <Image
              src={svgs.goldenStar}
              height={20}
              width={20}
              alt="Picture of the author"
            />
            <Image
              src={svgs.goldenStar}
              height={20}
              width={20}
              alt="Picture of the author"
            />
            <Image
              src={svgs.silverStar}
              height={20}
              width={20}
              alt="Picture of the author"
            />
            <Image
              src={svgs.silverStar}
              height={20}
              width={20}
              alt="Picture of the author"
            />
          </div>
        </div>
        <p
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 11,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {comments}
        </p>
      </div>
    </>
  );
}
