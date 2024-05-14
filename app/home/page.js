"use client";
// import Image from "next/image";
import NavBar from "../_components/common/navbar";
import Carousel from "../_components/common/slider";
import MultipleItems from "../_components/common/slider";
import AvailableProperties from "../_components/AvailableProperties/AvailableProperties";
import HappyClients from "../_components/happyClients/HappyClients";
import PropertyExperts from "../_components/propertyExperts/propertyExperts";
import BuyProperty from "../_components/buyProperty/BuyProperty";
// import MultipleItems from

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
      <div style={{ backgroundColor: "#ffffff" }}>
        <div className="w-[88.056%] m-[auto] pt-[37px]">
          <NavBar />
        </div>
        <div>
          <BuyProperty />
        </div>
        <section className="bg-[#F1F1F1] p-[6%]">
          <AvailableProperties />
        </section>
        <section className="w-[88.056%] m-[auto] mt-[37px]">
          <HappyClients />
        </section>
        <section className="bg-[#F1F1F1] p-[6%]">
          <PropertyExperts />
        </section>
        {/* <div className="slider-container w-[1000px]">
          <Carousel settings={carouselSettings}>
            <div className="bg-[red] mr-[30px]">
              <h3>Slide 1</h3>
            </div>
            <div className="bg-[red]  mr-[30px]">
              <h3>Slide 2</h3>
            </div>
            <div className="bg-[red]  mr-[30px]">
              <h3>Slide 3</h3>
            </div>
            <div className="bg-[red]  mr-[30px]">
              <h3>Slide 3</h3>
            </div>
            <div className="bg-[red]  mr-[30px]">
              <h3>Slide 3</h3>
            </div>
            <div className="bg-[red]  mr-[30px]">
              <h3>Slide 3</h3>
            </div>
            <div className="bg-[red]  mr-[30px]">
              <h3>Slide 3</h3>
            </div>
            <div className="bg-[red]  mr-[30px]">
              <h3>Slide 3</h3>
            </div>
          </Carousel>
        </div> */}
      </div>
    </>
  );
}
