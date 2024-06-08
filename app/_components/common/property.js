"use client";
import Image from "next/image";
import Modal from "../Modal/Modal";
import { useState } from "react";

export default function Property({ imagePath, heading, typography, button }) {
  const [toggleModal, setToggleModal] = useState(false)
  return (
    <>
    <div className="w-[230px] sm:w-[300px] lg:w-[350px] h-[430px] bg-[#ffffff] rounded-[17px] p-[25px]">
      <div className="flex flex-col gap-y-[15px] items-center text-center w-[190px] sm:w-[225px] lg:w-[280px] m-auto">
        <Image
          src={imagePath}
          height={200}
          width={180}
          style={{ height: "200px", width: "180px" }}
          alt="properties"
        />
        <h1 className="font-semibold text-2xl">{heading}</h1>
        <p className="font-medium text-base">{typography}</p>
        <button className="font-normal text-xs border-[1px] border-[#18202A] p-2 rounded-[6px] text-[#18202A]" onClick={()=>setToggleModal(!toggleModal)}>
          {button}
        </button>
      </div>
    </div>
   {toggleModal && <Modal/>}
    </>
  );
}
