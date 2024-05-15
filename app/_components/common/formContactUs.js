"use client";
import React, { useState } from "react";
import InputElement from "../common/inputElement";
import Button from "../common/button";

export default function FormContactUs() {
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="w-full lg:w-[55%] xl:w-[64%]">
        <div className="flex flex-col gap-y-12">
          <div className="flex flex-col sm:flex-row gap-x-[6%]">
            <InputElement
              lable="First Name"
              inputType={text}
              width="100%"
              lableTextColor="#8D8D8D"
            />
            <InputElement
              lable="Last Name"
              inputType={text}
              width="100%"
              lableTextColor="#000000"
              placeHolderText="Doe"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-x-[6%]">
            <InputElement
              lable="Email"
              inputType={text}
              width="100%"
              lableTextColor="#8D8D8D"
            />
            <div style={{ color: "black" }} className="text-black w-full">
              <InputElement
                lable="Phone Number"
                inputType={text}
                width="100%"
                lableTextColor="#011C2A"
                valueText="+1 012 3456 789"
              />
            </div>
          </div>
          <div>
            <InputElement
              lable="Message"
              inputType={text}
              width="100%"
              lableTextColor="#8D8D8D"
              placeHolderText="Write your message.."
            />
          </div>
        </div>
        <div className="pt-7 float-right">
          <Button
            text="Send Message"
            textColor="#FFFFFF"
            bgcolor="#18202A"
            padding="15px 18px"
            radius="10px"
            fontSize="23px"
            fontWeight="700"
          />
        </div>
      </div>
    </>
  );
}
