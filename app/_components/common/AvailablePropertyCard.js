"use client";

export default function AvailablePropertyCard({ typography, bgimg }) {
  return (
    <>
      <div
        style={{
          background: `linear-gradient(to bottom, rgba(24, 32, 42, 0.82), rgba(24, 32, 42, 0.82)), url(${bgimg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="flex justify-center items-center m-auto rounded-[17px] w-auto sm:w-[364px] h-[237.57px]"
      >
        <h2 className="text-[23px] sm:text-[31px] font-bold text-white">{typography}</h2>
      </div>
    </>
  );
}
