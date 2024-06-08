import React from 'react';
import Image from 'next/image';
import { pngs, svgs } from "../_constants/assets";
import NavBar from "../_components/common/navbar";
import Footer from "../_components/footer";
import ResidentialCard from '../_components/residential-card/residential-card';


export default function Residential() {

  const ResidentialCardData = [
    {
      icon: svgs.threeHome,
      title: 'Custom Home Building',
      description: 'We specialize in custom home building, allowing you to design every detail of your new home. From initial blueprints to the final touches, our experienced team works closely with you to ensure your home reflects your unique style and needs.'
    },
    {
      icon: svgs.circleHome,
      title: 'Renovations and Additions',
      description: "Whether you're looking to update an existing space or add new features to your home, we provide comprehensive renovation and addition services. Our skilled craftsmen ensure that all changes blend seamlessly with your current home design."
    },
    {
      icon: svgs.handSign,
      title: ' Quality and Craftsmanship:',
      description: "We prioritize quality and craftsmanship in every project. Using the finest materials and advanced construction techniques, we build homes that are not only beautiful but also durable and energy-efficient.",
    }
  ]

  return (
    <>
      <div>

        <div className="w-[88.056%] m-[auto] pt-[37px]">
          <NavBar
            navImage={svgs.builders}
            navHamburger={svgs.hamburgerBlack}
          />

        </div >


        <div className='mt-[80px]  '>

          <div className='flex flex-col justify-center items-center  h-[522px] relative before:bg-black before:opacity-70 before:absolute before:z-10 before:w-full before:h-full  ' style={{ background: `url(${pngs.construction})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>

            <div className='text-white text-center w-3/5 relative z-20  flex flex-col gap-y-[12px]'>
              <h1 className='md:font-bold lg:text-[61px] md:text-[37px] lg:leading-[74px] md:leading-[60px] font-medium text-[32px] leading-[32px]'>
                Residential Construction
              </h1>
              <p className='md:font-medium lg:text-[28px] md:text-[22px] text-center leading-[24px] lg:leading-[36px] m-auto w-[85%]'>
                Get Design-Build Services for all types of Residential Buildings at Affordable in Pakistan
              </p>

              <div>
                <button className='lg:text-lg lg:font-bold md:text-x border md:font-medium border-white rounded-lg p-[12px] relative hover:bg-[#FF9D00] '>
                  Contact Us
                </button>
              </div>

            </div>

          </div>

        </div>
        <div className='bg-white mb-[100px] mt-[-30px] rounded-[23px] border border-transparent w-[90%] m-auto relative z-50'>

          <div className='bg-[#6b6a6a26] mb-[100px] rounded-[23px] border border-transparent m-auto '>


            <div className='flex w-[90%] m-auto py-[70px] flex-wrap gap-7'>
              {ResidentialCardData.map((item, index) => {
                return <ResidentialCard {...item} key={index} />
              })}


            </div>





          </div>
        </div>

        <div className=''>
          <Footer />
        </div>
      </div >

    </>
  )
}