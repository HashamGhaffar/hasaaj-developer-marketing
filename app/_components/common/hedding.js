"use client";

export default function Hedding({ hedding, span }) {
  return (
    <>
      <div className="text-[#18202A] text-[30px] lg:text-[38px] xl:text-[45px] text-center font-bold">
        <h1 className="xl:leading-[55px] lg:leading-[46px] md:leading-[35px] leading-[32px]">
          {hedding} <span className="text-[#FF9D00]"> {span} </span>
        </h1>
      </div>
    </>
  );
}
