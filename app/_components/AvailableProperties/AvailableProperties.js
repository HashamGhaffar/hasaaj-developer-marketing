"use client";
import { useRef } from "react";
import Image from "next/image";
import FirstCard from "../common/firstCard";
import Hedding from "../common/hedding";
import Carousel from "../common/slider";
import AvailablePropertyCard from "../common/AvailablePropertyCard";
import { pngs, svgs } from "@/app/_constants/assets";

export default function AvailableProperties() {
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
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 865,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <section>
        <div className="flex justify-center items-baseline flex-wrap gap-y-[40px] sm:gap-x-[40px] lg:gap-x-[6.2%] pb-[80px]">
          <FirstCard
            img={pngs.buyAndSell}
            hedding="Buy & Sell of Properties"
            typography="If you are looking to invest your money in a plot, pre-made houses, or commercial shops we have extensive plans for our customers for all their needs. We also help them with personalized investment plans."
          />
          <FirstCard
            img={pngs.overseasClients}
            hedding="Overseas Clients"
            typography="We are offering our services to our overseas customers who are looking forward to investing in Pakistan. We provide services as well as we have a dedicated office in London, to personally deal with all your queries."
          />
          <FirstCard
            img={pngs.investmentPlans}
            hedding="Investment Plans"
            typography="We are offering our services to our overseas customers who are looking forward to investing in Pakistan. We provide services as well as we have a dedicated office in London, to personally deal with all your queries."
          />
        </div>
        <div className="mb-[60px]">
          <Hedding hedding="Properties Available in" span="Lahore" />
        </div>
        <div>
          <div className="slider-container relative space-x-4 sm:space-x-6 mb-8 md:mb-0">
            <Carousel sliderRef={sliderRef} settings={carouselSettings}>
              <div className="px-5 sm:px-10 md:px-0">
                <AvailablePropertyCard
                  typography="Houses for Rent"
                  bgimg={pngs.availableProperty1}
                />
              </div>
              <div className="px-5 sm:px-10 md:px-0">
                <AvailablePropertyCard
                  typography="Houses for Sale"
                  bgimg={pngs.availableProperty2}
                />
              </div>
              <div className="px-5 sm:px-10 md:px-0">
                <AvailablePropertyCard
                  typography="Plot For Sale"
                  bgimg={pngs.availableProperty3}
                />
              </div>
            </Carousel>
            <div
              className="bg-[#ffffff] h-[30px] sm:h-[43px] w-[30px] sm:w-[43px] rounded-[50%] absolute top-[50%] translate-y-[-50%] right-[-15px] xl:right-[2px]"
              onClick={nextSlide}
            >
              <Image
                src={svgs.rightArrow}
                alt="RightArrow"
                height={24}
                width={24}
                className="h-[20px] w-[20px] mt-[5px] sm:mt-[13px] ml-[5px] sm:ml-[10px]"
              />
            </div>
            <div
              className="bg-[#ffffff] h-[30px] sm:h-[43px] w-[30px] sm:w-[43px] rounded-[50%] absolute top-[50%] translate-y-[-50%] left-[-30px] md:left-[-35px] lg:left-[-31px] xl:left-[-16px]	"
              onClick={prevSlide}
            >
              <Image
                src={svgs.LeftArrow}
                alt="RightArrow"
                height={24}
                width={24}
                className="h-[20px] w-[20px] mt-[5px] sm:mt-[13px] ml-[4px] sm:ml-[10px]"
              />
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center gap-[6px] mt-[30px]">
          <div className="h-[13px] w-[13px] rounded-[50%] bg-[#FF9D00]"></div>
          <div className="h-[13px] w-[13px] rounded-[50%] bg-[#D9D9D9]"></div>
        </div> */}
      </section>
    </>
  );
}
