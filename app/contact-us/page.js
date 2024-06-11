"use client";
import { useState } from "react";
import NavBar from "../_components/common/navbar";
import ContactInformation from "../_components/common/contactInformation";
import FormContactUs from "../_components/common/formContactUs";
import { svgs } from "@/app/_constants/assets";
import Footer from "../_components/footer";

export default function ContactUs() {
  return (
    <>
      <div className="bg-white">
        <div className="w-[88.056%] m-[auto] pt-[37px] bg-white	">
          <div>
            <NavBar
              colorNav="#18202A"
              navImage={svgs.builders}
              navHamburger={svgs.hamburgerBlack}
            />
          </div>
          <div className="flex items-center flex-col-reverse gap-y-10 gap-x-[25px] lg:gap-x-[63px] pt-[130px] pb-24 md:flex-row">
            <ContactInformation />
            <FormContactUs />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
