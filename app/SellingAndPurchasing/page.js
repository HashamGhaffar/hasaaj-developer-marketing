"use client";
import Image from "next/image";
import NavBar from "../_components/common/navbar";
import Property from "../_components/common/property";
import Footer from "../_components/footer";
import { svgs } from "@/app/_constants/assets";
import { pngs } from "@/app/_constants/assets";

export default function SellingAndPurchasing() {
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
          <div className="mt-6 sm:mt-12 md:mt-[150px]">
            <h1 className="md:text-[40px] font-bold md:leading-6 text-3xl">
              Selling & Purchasing Services
            </h1>
            <p className="mt-6 md:text-xl md:leading-6 font-normal mb-16 text-[14px] leading-5">
              Hassaj Developers and Marketing offers comprehensive real estate
              services to help you navigate the complexities of buying and
              selling properties. Our team of experienced professionals is
              dedicated to providing personalized assistance, ensuring a
              seamless and successful transaction process.
            </p>
          </div>
          <div className="relative mb-14">
            <div
              style={{
                backgroundImage: ` url(${pngs.servicesBgImg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="flex relative flex-wrap items-center z-10 gap-y-[20px] gap-x-[15px] xl:gap-x-[26px] 2xl:gap-x-[40px] justify-center w-full h-[auto] py-[128px] rounded-[23px]"
            >
              <Property
                imagePath={pngs.property1}
                heading="Buy a property"
                typography="Discover your dream home where perfection and happiness intersect."
                button="Browse Properties"
              />
              <Property
                imagePath={pngs.property2}
                heading="Sell a property"
                typography="Invest smart, win big, irrespective of economic shifts."
                button="Add Details"
              />
              <Property
                imagePath={pngs.property3}
                heading="Rent a property"
                typography="Invest smart, win big, irrespective of economic shifts."
                button="Add Details"
              />
            </div>
            <Image
              src={pngs.Circle}
              width={140}
              height={140}
              // style={{ width: { sm: none , md: } }}
              className="!absolute h-[auto] hidden md:block md:w-[90px] xl:w-[140px] z-0 top-[50px] left-[-43px] xl:left-[-59px]"
              alt="Picture of the author"
            />
            <Image
              src={pngs.Circle}
              width={140}
              height={140}
              className="!absolute h-[auto] hidden md:block md:w-[90px] xl:w-[140px] z-0 bottom-[50px] right-[-43px] xl:right-[-59px]"
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
