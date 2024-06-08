import React from "react";
import Image from "next/image";
import { svgs } from "../_constants/assets";
import NavBar from "../_components/common/navbar";
import Footer from "../_components/footer";
import Blogs from "../_components/blog-cards/blog-card";

const blogs = () => {
  const blogsData = [
    {
      imageSrc: svgs.couple,
      title:
        "Unlocking the Secrets to Finding Your Dream Home: Expert Tips and Insights",
      description:
        "The journey to finding your dream home can be both exhilarating and overwhelming. Whether you're a first-time buyer or looking to upgrade, the real estate market presents numerous opportunities and challenges.",
      buttonText: "Read More",
      id: 1,
    },
    {
      imageSrc: svgs.blog_2,
      title:
        "Unlocking the Secrets to Finding Your Dream Home: Expert Tips and Insights",
      description:
        "The journey to finding your dream home can be both exhilarating and overwhelming. Whether you're a first-time buyer or looking to upgrade, the real estate market presents numerous opportunities and challenges.",
      buttonText: "Read More",
      id: 2,
    },
    {
      imageSrc: svgs.blog_3,
      title:
        "Unlocking the Secrets to Finding Your Dream Home: Expert Tips and Insights",
      description:
        "The journey to finding your dream home can be both exhilarating and overwhelming. Whether you're a first-time buyer or looking to upgrade, the real estate market presents numerous opportunities and challenges.",
      buttonText: "Read More",
      id: 3,
    },
  ];
  return (
    <>
      <div className="w-[88.056%] m-[auto] pt-[37px]">
        <NavBar navImage={svgs.builders} navHamburger={svgs.hamburgerBlack} />
      </div>

      <div className="mt-36 mb-36 flex flex-col gap-10">
        {blogsData.map((item, index) => {
          return (

              <Blogs
                imageSrc={item.imageSrc}
                title={item.title}
                description={item.description}
                buttonText={item.buttonText}
                id={item.id}
                key={index}
              />

          );
        })}
      </div>

      <Footer />
    </>
  );
};

export default blogs;
