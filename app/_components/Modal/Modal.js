
import React from 'react';
import { svgs } from '@/app/_constants/assets';
import Image from 'next/image';


const Modal = () => {
  return (
    <>
      <div className='fixed top-0 left-0 w-full'>

        <div className='w-full h-[100vh] rounded-lg relative before:bg-black before:opacity-50 before:absolute before:z-10 before:w-full before:h-full items-center justify-center flex pr-4 pl-4 '>


          <div className='sm:w-[65%] w-[80%]  sm:h-[320px] h-[250px] rounded-lg bg-white relative z-30 flex flex-col items-center justify-center gap-4'>
            <div className=' '>

              <div className='absolute right-10 top-7'>
                <Image src={svgs.cross} fill alt="Logo" className=" !w-[14px] !h-[14px]" />
              </div>

              <h1 className='font-bold lg:text-4xl lg:leading-10 mb-10 md:text-2xl'>
                Search <span className='text-[#FF9D00]'>properties</span> for <span className='text-[#FF9D00]'>sale</span> in <span className='text-[#FF9D00]'>Pakistan</span>
              </h1>

              <div className='flex justify-around'>
                <button className='border border-[#ABABAB] lg:p-3 lg:pt-4 p-1 pb-1 rounded-lg text-center lg:text-2xl text-[12px] font-normal w-[20%]  hover:bg-[#FF9D00] '>Projects</button>
                <button className='border border-[#ABABAB] lg:p-3 lg:pt-4 pt-1 pb-1 rounded-lg text-center lg:text-2xl text-[12px]  font-normal w-[20%] hover:bg-[#FF9D00] '>Buy</button>
                <button className='border border-[#ABABAB] lg:p-3 lg:pt-4 pt-1 pb-1 rounded-lg text-center lg:text-2xl text-[12px]  font-normal w-[20%] hover:bg-[#FF9D00] '>Rent</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;


