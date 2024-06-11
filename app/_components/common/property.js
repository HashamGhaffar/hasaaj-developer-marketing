"use client";
import Image from "next/image";
import Modal from "../Modal/Modal";
import { useState } from "react";

export default function Property({ imagePath, heading, typography, button }) {
  const [toggleModal, setToggleModal] = useState(false);
  return (
    <>
      <div className="w-[85%] sm:w-[350px] sm:h-[430px] bg-[#f1f1f1] sm:bg-[#ffffff] rounded-[17px] py-[40px] sm:py- sm:!p-[25px]">
        <div className="flex flex-col gap-y-[12px] sm:gap-y-[15px] items-center text-center w-[80%] sm:w-[280px] m-auto">
          <Image
            src={imagePath}
            height={200}
            width={180}
            style={{ height: "200px", width: "180px" }}
            alt="properties"
          />
          <h1 className="font-semibold text-[22px] sm:text-[29px]">
            {heading}
          </h1>
          <p className="font-medium text-[13px] leading-[18px] sm:!text-base">
            {typography}
          </p>
          <button
            className="font-normal text-xs border-[1px] border-[#18202A] p-2 rounded-[6px] text-[#18202A] hover:!text-[#FF9D00] hover:border-[#FF9D00]"
            onClick={() => setToggleModal(!toggleModal)}
          >
            {button}
          </button>
        </div>
      </div>
      {toggleModal && <Modal />}
    </>
  );
}
