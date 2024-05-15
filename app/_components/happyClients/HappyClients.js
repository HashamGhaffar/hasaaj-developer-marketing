"use client";
import { useRef } from "react";
import ClientsCard from "../common/clientsCard";
import Hedding from "../common/hedding";
import Image from "next/image";
import { pngs, svgs } from "@/app/_constants/assets";
import Carousel from "../common/slider";

export default function HappyClients() {
  const sliderRef = useRef(null);

  const carouselSettings = {
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 865,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
  return (
    <>
      <div>
        <div className="text-center">
          <div className="mb-[10px]">
            <Hedding hedding="Our Happy Clients" span="" />
          </div>
          <p className="text-[#000000] font-normal	text-[23.5px] w-[48%]	m-[auto] leading-[28px]	">
            we always take care of our client and they are very happy.We have
            collected a few stories for you.
          </p>
        </div>
        <div>
          <div className="slider-container relative mt-[50px] space-x-4">
            <Carousel sliderRef={sliderRef} settings={carouselSettings}>
              <ClientsCard
                Name="Robert Martin"
                Job="SR. Manager"
                photo={pngs.robertMartin}
                comments="I recently had the pleasure of working with Hasaaj Buildings and Marketing for my real estate needs, and I cannot recommend them enough. Their expertise in both real estate and marketing truly sets them apart from other agencies. They were able to not only find me the perfect property, but also effectively market and sell my previous home. Their attention to detail and personalized approach made the entire process seamless and stress-free. I was constantly impressed by their knowledge of the market and their ability to negotiate on my behalf. If you are looking for a top-notch real estate agency, look no further than Hasaaj Buildings and Marketing. They truly go above and beyond for their clients and I am grateful for their exceptional service. Thank you Hasaaj Buildings and Marketing for making my real estate dreams a reality!"
              />
              <ClientsCard
                Name="Jenny Wilson"
                Job="UI/UX Designer"
                photo={pngs.jennyWilson}
                comments="I recently had the pleasure of working with Hasaaj Buildings and Marketing for my real estate needs and I couldn't be happier with the experience. From start to finish, their team was professional, knowledgeable, and dedicated to helping me find the perfect property. Their marketing strategies were top-notch, showcasing my property in the best possible light and attracting potential buyers quickly. They were always available to answer any questions or concerns I had and provided valuable insights and advice throughout the entire process. Thanks to Hasaaj Buildings and Marketing, I was able to sell my property for a great price in a timely manner. I highly recommend their services to anyone looking to buy or sell real estate. Their expertise and commitment to their clients truly sets them apart in the industry. Thank you, Hasaaj Buildings and Marketing, for your exceptional work!"
              />
            </Carousel>
            <div
              className="bg-[#ffffff] h-[43px] w-[43px] rounded-[50%] absolute top-[39%] right-0 sm:right-[-21px] lg:right-[6px]"
              onClick={nextSlide}
            >
              <Image
                src={svgs.rightArrow}
                alt="RightArrow"
                height={24}
                width={24}
                className="mt-[13px] ml-[10px]"
              />
            </div>
            <div
              className="bg-[#ffffff] h-[43px] w-[43px] rounded-[50%] absolute top-[39%] sm:left-[-40px] lg:left-[-26px]	"
              onClick={prevSlide}
            >
              <Image
                src={svgs.LeftArrow}
                alt="LeftArrow"
                height={24}
                width={24}
                className="mt-[13px] ml-[10px]"
              />
            </div>
          </div>
          <div className="flex justify-center gap-[6px] py-[50px]">
            <div className="h-[13px] w-[13px] rounded-[50%] bg-[#D9D9D9]"></div>
            <div className="h-[13px] w-[13px] rounded-[50%] bg-[#FF9D00]"></div>
            <div className="h-[13px] w-[13px] rounded-[50%] bg-[#D9D9D9]"></div>
          </div>
        </div>
      </div>
    </>
  );
}
