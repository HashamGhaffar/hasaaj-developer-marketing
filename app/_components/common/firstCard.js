"use client";
import Image from "next/image";

export default function FirstCard({ hedding, typography, img }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-y-[18px] flex-wrap text-center text-black">
        <Image src={img} width={200} height={200} alt="Picture of the author" />
        <h2 className="text-[17.5px] font-semibold">{hedding}</h2>
        <p className="text-[12.5px] font-normal">{typography}</p>
      </div>
    </>
  );
}
