import React from 'react';
import { svgs } from '@/app/_constants/assets';
import Image from 'next/image';

const ResidentialCard = ({ icon, title, description }) => {
  return (
    <div className='lg:w-[29%] md:w-[46%] w-full m-auto bg-white rounded-[17px] min-w-[230px]'>
      <div className='flex flex-col items-center gap-6 w-[80%] m-auto pt-[35px] pb-[35px]'>
        <div>
          <Image src={icon} fill alt="Icon" className="sm:!w-[82px] sm:!h-[88px] !w-[60px] !h-[60px]" />
        </div>
        <div className='font-semibold lg:text-[27px] text-center text-2xl leading-7'>
          <h2>{title}</h2>
        </div>
        <div className='lg:font-medium lg:text-[16px] text-center md:text-xs ms:font-medium'>
          {description}
        </div>
      </div>
    </div>
  );
};

export default ResidentialCard;
