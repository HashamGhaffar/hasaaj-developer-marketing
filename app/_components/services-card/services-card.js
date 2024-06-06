import React from 'react'
import Image from 'next/image'

const ServicesCard = ({ backgroundImage, icon, title, description }) => {
  return (
    <div className=' inline-flex flex-col max-w-[364px]'>
      <div className=' max-sm:w-[85%] max-sm:m-auto min-h-64 h-full sm:h-64 w-full  flex flex-col gap-10 rounded-tr-xl rounded-tl-xl before:rounded-tr-xl relative before:rounded-tl-xl before:bg-black before:opacity-30 before:absolute before:z-10 before:w-full before:h-full' style={{ background: `url(${backgroundImage.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <div className=' relative z-20'>
          <div className='min-h-64 h-full sm:h-64 pb-5'>
            <div className='pl-6 pt-6'>
              <Image src={icon} fill alt="Icon" className="!w-12 !h-12" />
            </div>
            <h1 className='text-white w-[70%] font-bold text-[27px] pl-6 pt-2'>
              {title}
            </h1>
            <div className='w-3/6 text-xs font-normal pl-6 pt-4'>
              <button className='text-white p-[10px] border border-white rounded-md'>
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full rounded-b-xl rounded-l-xl shadow-2xl max-sm:w-[85%] max-sm:m-auto pb-10'>
        <p className='text-[14px] leading-5 font-normal p-10 max-sm:p-6 ellipseCustom h-[125px] sm:h-[140px]'>
          {description}
        </p>
      </div>
    </div>
  )
}

export default ServicesCard;
