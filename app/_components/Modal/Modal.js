
import React from 'react';
import { svgs } from '@/app/_constants/assets';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const Modal = () => {
  const router = useRouter()
  return (
    <>
      <div className='fixed top-0 left-0 w-full z-50'>

        <div className='w-full h-[100vh] rounded-lg relative before:bg-black before:opacity-50 before:absolute before:z-10 before:w-full before:h-full items-center justify-center flex pr-4 pl-4 '>


          <div className='sm:w-[65%] w-[80%]  sm:min-h-[320px] min-h-[250px] rounded-lg bg-white relative z-30 flex flex-col items-center justify-center gap-4 px-5'>
            <div className=' '>

              <div className='absolute sm:right-10 right-5 sm:top-7 top-5'>
                <Image src={svgs.cross} fill alt="Logo" className=" !w-[14px] !h-[14px]" />
              </div>

              <h1 className='font-bold lg:text-4xl lg:leading-10 mb-10 md:text-2xl mt-5 sm:mt-0'>
                Search <span className='text-[#FF9D00]'>properties</span> for <span className='text-[#FF9D00]'>sale</span> in <span className='text-[#FF9D00]'>Pakistan</span>
              </h1>

              <div className='flex justify-around flex-wrap gap-5'>
                <button className='border border-[#ABABAB] lg:p-3 lg:pt-4 p-1 pb-1 rounded-lg text-center lg:text-2xl text-[12px] font-normal px-4  hover:bg-[#FF9D00] max-w-[200px] w-full' onClick={()=>router.push("/buy-property")}>Projects</button>
                <button className='border border-[#ABABAB] lg:p-3 lg:pt-4 pt-1 pb-1 rounded-lg text-center lg:text-2xl text-[12px]  font-normal px-4 hover:bg-[#FF9D00] max-w-[200px] w-full' onClick={()=>router.push("/buy-property")}>Buy</button>
                <button className='border border-[#ABABAB] lg:p-3 lg:pt-4 pt-1 pb-1 rounded-lg text-center lg:text-2xl text-[12px]  font-normal px-4 hover:bg-[#FF9D00] max-w-[200px] w-full' onClick={()=>router.push("/buy-property")}>Rent</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;


