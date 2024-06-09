"use client";
import Image from "next/image";
import NavBar from "../_components/common/navbar";
import Dropdown from "../_components/common/Dropdown";
import PropertyCard from "../_components/common/propertyCard";
import Footer from "../_components/footer";
import { svgs } from "@/app/_constants/assets";
import { pngs } from "@/app/_constants/assets";
export default function SellingAndPurchasing() {
  const filtersData = [
    {
      title: "Buy",
      options: [
        " All Residential",
        "Single Family Homes",
        "Townhomes",
        "Apartments",
        "Condominiums",
      ],
    },
    {
      title: "Price",
      options: [
        "Up to 10,000 PKR",
        "10,001 - 20,000 PKR",
        "20,001 - 30,000 PKR",
        "Above 30,000 PKR",
      ],
    },
    {
      title: "Size",
      options: [
        "Small (up to 100 sq ft)",
        "Medium (101-250 sq ft)",
        "Large (251-500 sq ft)",
        "Extra Large (501+ sq ft)",
      ],
    },
    {
      title: "Bedroom",
      options: ["1 Bedroom", "2 Bedroom", "3 Bedroom", "4 Bedroom"],
    },
    {
      title: "Bathroom",
      options: ["1 Bathroom", "2 Bathroom", "3 Bathroom", "4 Bathroom"],
    },
    {
      title: "More Filters",
      options: ["Filters1", "Filters2", "Filters3", "Filters4"],
    },
  ];

  const properties = [
    {
      bgImg: [
        pngs.Residential1,
        pngs.Residential2,
        pngs.Residential3,
        pngs.Residential4,
        pngs.Residential5,
        pngs.Residential6,
      ],
      heartIcon: svgs.HeartBorder,
      service: "House",
      pricePKR: "90 lac",
      bedNumber: "3",
      showerNumber: "3",
      area: "3",
      location: "Alfalah Town, Lahore",
      addedTime: "Added 2 hours ago",
    },
    {
      bgImg: [
        pngs.Residential2,
        pngs.Residential1,
        pngs.Residential3,
        pngs.Residential4,
        pngs.Residential5,
        pngs.Residential6,
      ],
      heartIcon: svgs.HeartBorder,
      service: "House",
      pricePKR: "1 crore",
      bedNumber: "4",
      showerNumber: "4",
      area: "5",
      location: "Johar Town, Lahore",
      addedTime: "Added 2 hours ago",
    },
    {
      bgImg: [
        pngs.Residential3,
        pngs.Residential1,
        pngs.Residential2,
        pngs.Residential4,
        pngs.Residential5,
        pngs.Residential6,
      ],
      heartIcon: svgs.HeartBorder,
      service: "House",
      pricePKR: "2 crore",
      bedNumber: "9",
      showerNumber: "8",
      area: "10",
      location: "Bahria Town, Lahore",
      addedTime: "Added 2 hours ago",
    },
    {
      bgImg: [
        pngs.Residential4,
        pngs.Residential1,
        pngs.Residential2,
        pngs.Residential3,
        pngs.Residential5,
        pngs.Residential6,
      ],
      heartIcon: svgs.HeartBorder,
      service: "House",
      pricePKR: "60 lac",
      bedNumber: "3",
      showerNumber: "3",
      area: "3",
      location: "Alfalah Town, Lahore",
      addedTime: "Added 2 hours ago",
    },
    {
      bgImg: [
        pngs.Residential5,
        pngs.Residential1,
        pngs.Residential2,
        pngs.Residential3,
        pngs.Residential4,
        pngs.Residential6,
      ],
      heartIcon: svgs.HeartBorder,
      service: "House",
      pricePKR: "3 crore",
      bedNumber: "4",
      showerNumber: "4",
      area: "5",
      location: "Johar Town, Lahore",
      addedTime: "Added 2 hours ago",
    },
    {
      bgImg: [
        pngs.Residential6,
        pngs.Residential1,
        pngs.Residential2,
        pngs.Residential3,
        pngs.Residential4,
        pngs.Residential5,
      ],
      heartIcon: svgs.HeartBorder,
      service: "House",
      pricePKR: "50 Lac",
      bedNumber: "9",
      showerNumber: "8",
      area: "10",
      location: "Bahria Town, Lahore",
      addedTime: "Added 2 hours ago",
    },
  ];

  return (
    <>
      <div>
        <div className="bg-white w-[88.056%] m-[auto]">
          <div className="pt-[37px]">
            <NavBar
              colorNav="#18202A"
              navImage={svgs.builders}
              navHamburger={svgs.hamburgerBlack}
            />
          </div>
          {/* Input */}
          <div className="flex justify-end mt-[100px]">
            <div className="flex justify-between gap-3 sm:gap-6 w-full sm:w-[50%] py-[18px] sm:py-[27px] px-[18px] sm:px-[30px] lg:px-[3%] rounded-xl bg-[#F4F4F4]">
              <input
                className="placeholder-black text text-[25px] font-normal w-[89%] outline-none bg-transparent"
                placeholder="Search..."
                type="text"
                id="fname"
                name="fname"
              />
              {/* <Image src={svgs.Cross} width={13} height={13} alt="Cross" /> */}
              <Image src={svgs.Search} width={27} height={27} alt="Search" />
            </div>
          </div>
          {/* Dropdowns navgation */}
          <div className="flex justify-between gap-y-6 flex-col	xl:flex-row mt-20">
            <div className="flex static z-10 flex-wrap w-full gap-y-6 gap-x-6">
              {filtersData.map((item, index) => {
                return (
                  <Dropdown
                    title={item.title}
                    options={item.options}
                    key={index}
                  />
                );
              })}
            </div>
            <div className="w-[145px] .flex-shrink-0 z-10 p-3 cursor-pointer rounded-[7px] relative group text-[#ffffff] bg-[#FF9D00]">
              <div className="flex justify-between items-center">
                <div className=" transform hover:rotate-180">
                  <Image
                    src={svgs.YArrows}
                    width={12}
                    height={16}
                    alt="YArrows"
                  />
                </div>
                New Listings
              </div>
              <ul className="absolute hidden group-hover:block text-[16px] w-[150px] ml-[-13px] mt-[15px] border rounded-[10px] bg-[#ffffff] text-[#000000] py-2">
                <li className="py-1 px-3 hover:bg-slate-300">List-1</li>
                <li className="py-1 px-3 hover:bg-slate-300">List-2</li>
                <li className="py-1 px-3 hover:bg-slate-300">List-3</li>
                <li className="py-1 px-3 hover:bg-slate-300">List-4</li>
              </ul>
            </div>
          </div>
          {/* parent of all  */}
          <div className="flex gap-5 flex-wrap justify-between mt-[50px] w-full mb-[134px]">
            {properties.map((property, index) => (
              <PropertyCard
                key={index}
                bgImg={property.bgImg}
                heartIcon={property.heartIcon}
                service={property.service}
                pricePKR={property.pricePKR}
                bedNumber={property.bedNumber}
                showerNumber={property.showerNumber}
                area={property.area}
                location={property.location}
                addedTime={property.addedTime}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
