"use client";
import React, { useState } from "react";

export default function InputElement({
  lable,
  inputType,
  width,
  lableTextColor,
  placeHolderText,
  valueText,
}) {
  return (
    <>
      <div style={{ width: width }} className="flex flex-col">
        <label
          for="fname"
          style={{ color: lableTextColor }}
          className="font-medium"
        >
          {lable}
        </label>
        <input
          type={inputType}
          placeholder={placeHolderText}
          value={valueText}
          className="border-b-2 text-[#8D8D8D] w-full border-[#8D8D8D pb-[8px] outline-none"
          id="fname"
        />
      </div>
    </>
  );
}
