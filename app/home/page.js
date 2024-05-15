"use client";
import NavBar from "../_components/common/navbar";
import Carousel from "../_components/common/slider";
import MultipleItems from "../_components/common/slider";
import AvailableProperties from "../_components/AvailableProperties/AvailableProperties";
import HappyClients from "../_components/happyClients/HappyClients";
import PropertyExperts from "../_components/propertyExperts/propertyExperts";
import BuyProperty from "../_components/buyProperty/BuyProperty";
import { svgs } from "@/app/_constants/assets";

export default function Home() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="bg-white">
        <div className="bg-[#18202A] ">
          <div className="w-[88.056%] m-[auto] pt-[37px]">
            <NavBar colorNav="#FFFFFF" navImage={svgs.buildersWhite} />
          </div>
        </div>
        <div>
          <BuyProperty /> {/* section prepared by abdulla brother */}
        </div>
        <section className=" p-[6%]">
          <AvailableProperties />
        </section>
        <section className="bg-[#F1F1F1]">
          <div className="w-[88.056%] m-[auto] pt-[75px] ">
            <HappyClients />
          </div>
        </section>
        <section className="bg-[#ffffff] p-[6%]">
          <PropertyExperts />
        </section>
      </div>
    </>
  );
}
