"use client";
import Hedding from "../common/hedding";

export default function PropertyExperts() {
  return (
    <>
      <div className="flex flex-col	justify-center items-center bg-[#F1F1F1]">
        <div>
          <Hedding hedding="We Have" span="" />
          <Hedding hedding="We Have Professional Property" span="Experts" />
          <p className="pt-[20px] text-center text-[#000000] font-normal	text-[23.5px] w-[85%] xl:w-[48%]	m-[auto] leading-[28px]	">
            If you are looking to invest your money in a plot, pre-made houses,
            or commercial shops we have extensive plans for our customers for
            all their needs. We also help them with personalized investment
            plans.
          </p>
        </div>
        <button className=" text-[18px] w-[125px] p-[12px] mt-[60px] border-[1px] rounded-[8px] border-[#18202A] text-[#18202A]  ">
          Contact Us
        </button>
      </div>
    </>
  );
}
