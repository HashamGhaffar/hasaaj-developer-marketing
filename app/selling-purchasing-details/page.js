import React from 'react';
import Image from 'next/image';
import { svgs } from '../_constants/assets';
import { pngs } from '../_constants/assets';
import NavBar from '../_components/common/navbar';
import Footer from '../_components/footer';



const page = () => {
  return (
    <>
      <div>

        <div className="w-[88.056%] m-[auto] pt-[37px]">
          <NavBar
            navImage={svgs.builders}
            navHamburger={svgs.hamburgerBlack}
          />

        </div>

        <div className='mt-20 flex w-[90%] h-[460px] m-auto relative bg-yellow-300 gap-10'>
          <div className='w-[70%] h-full'>
            <Image src={svgs.house} fill alt="Logo" className=" !w-[100%] !h-full" />
            <div className=' absolute bottom-8 left-6'>
              <Image src={pngs.heart} fill alt="Logo" className=" !w-[26px] !h-[26px] " />
            </div>
          </div>


          <div className=' flex flex-col bg-grey-300 gap-7 '>

            <div className=' w-full relative'>

              <Image src={svgs.kitchen} fill alt="Logo" className=" !h-[215px] w-full" />

              <div className='bg-black opacity-50 w-full h-full absolute top-0 right-0 z-30' >

                <div className='flex items-center justify-center '>
                  <Image src={pngs.plus} fill alt="Logo" className=" !w-[15px] !h-[15px]" />
                </div>



              </div>
            </div>


            <div className=''>

              <Image src={svgs.room} fill alt="Logo" className=" !h-[215px] w-full" />

            </div>

          </div>

        </div>

        <div className=''>
          <div className='flex justify-between '>
            <h1 className='fontbold text-[40px] leading-10'>
              3 Marla House for Sale in Alfalah Town, Lahore
            </h1>

            <div>
              <Image src={svgs.bathTub} fill alt="Logo" className="!w-[30px] !h-[20px]" />
            </div>

          </div>
        </div>



        <div>

          <Footer />

        </div>

      </div>

    </>
  )
}

export default page
