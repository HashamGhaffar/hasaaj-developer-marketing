// components/PropertyCard.js

import Image from "next/image";
import { svgs, pngs } from "@/app/_constants/assets"; // Adjust this path based on your project structure
import Carousel from "../common/slider";
import { useRef } from "react";

const PropertyCard = ({
  bgImg,
  heartIcon,
  service,
  pricePKR,
  bedNumber,
  showerNumber,
  area,
  location,
  addedTime,
}) => {
  // carousel code
  const sliderRef = useRef(null);
  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const carouselSettings = {
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
  };

  return (
    <div
      style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
      className="w-[364px] rounded-[10px] static z-0 h-[400px]"
    >
      <Carousel
        style={{
          width: "100%",
        }}
        sliderRef={sliderRef}
        settings={carouselSettings}
      >
        <div
          style={{
            // backgroundImage: `url(${bgImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundColor: "red",
          }}
          className=" h-[259px] relative w-[300px]"
        >
          6rrftguyhjimlk
          <Image
            src={heartIcon}
            className="absolute bottom-[20px] right-[20px]"
            width={22}
            height={20}
            alt="Heart Border"
          />
        </div>
        <div
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="w-full h-[259px] relative"
        >
          <Image
            src={heartIcon}
            className="absolute bottom-[20px] right-[20px]"
            width={22}
            height={20}
            alt="Heart Border"
          />
        </div>
        <div
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="w-full h-[259px] relative"
        >
          <Image
            src={heartIcon}
            className="absolute bottom-[20px] right-[20px]"
            width={22}
            height={20}
            alt="Heart Border"
          />
        </div>
        <div
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="w-full h-[259px] relative"
        >
          <Image
            src={heartIcon}
            className="absolute bottom-[20px] right-[20px]"
            width={22}
            height={20}
            alt="Heart Border"
          />
        </div>
      </Carousel>
      <div className="mx-[17px]">
        {/* first line for card  */}
        <div className="flex justify-between">
          <p
            style={{ wordSpacing: "1px" }}
            className="text-[15.5px] text-[#2D2D2D] font-semibold"
          >
            PKR{" "}
            <span style={{ wordSpacing: "-3px" }} className="text-[27px]">
              {pricePKR}
            </span>
          </p>
          <div className="flex items-center gap-x-[5px]">
            <div className="w-[9px] h-[9px] rounded-[1px] bg-[#FF9D00]"></div>
            <p>{service}</p>
          </div>
        </div>
        {/* second line of card  */}
        <div className="flex gap-x-[17px] mt-[13px]">
          <div className="flex gap-x-[10px]">
            <Image src={svgs.bed} width={18} height={12} alt="Bed icon" />
            <p className="font-normal text-[13.5px] text-[#4E4E4E]">
              {bedNumber}
            </p>
          </div>
          <div className="flex gap-x-[10px]">
            <Image src={svgs.bathTub} width={14} height={14} alt="Bath icon" />
            <p className="font-normal text-[13.5px] text-[#4E4E4E]">
              {showerNumber}
            </p>
          </div>
          <Image
            src={svgs.arrowDiagnol}
            className="absolute bottom-[20px] right-[20px]"
            width={13}
            height={13}
            alt="Arrow icon"
          />
          <p
            style={{ wordSpacing: "1px" }}
            className="font-normal text-[13.5px] text-[#4E4E4E]"
          >
            {area}
          </p>
        </div>
        <p className="font-normal mt-[7px] text-[13px] text-[#4E4E4E]">
          {location}
        </p>
        <p className="font-normal mt-[7px] text-[10px] text-[#4E4E4E]">
          {addedTime}
        </p>
      </div>
    </div>
    // </Carousel>
  );
};

export default PropertyCard;