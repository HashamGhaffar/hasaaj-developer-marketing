"use client"
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Blogs = ({ imageSrc, title, description, buttonText,id }) => {
    const router = useRouter()
    return (
        <div className="md:flex  md:w-[75%] md:gap-4 m-auto items-start md:flex-row flex-col">
            <div className="md:w-4/5 px-8 md:mb-14 mb-4 w-full flex justify-center items-start " >
                <Image src={imageSrc} fill alt="Logo" className=" md:pl-7 h-full w-full" />
            </div>

            <div className="md:w-full w-4/5 m-auto">
                <div className=" lg:font-bold lg:text-[36px] lg:leading-[46px] text-3xl leading-9 font-semibold ">
                    {title}
                </div>

                <p className="md:leading-[24px] md:text-xl md:font-normal mt-4">
                    {description}
                </p>
                {buttonText &&
                    <div className="w-3/6 m-auto md:m-0">
                        <button className="border border-black p-2 md:w-[100px] rounded-lg md:mt-2 mt-4 w-full " onClick={()=>{
                            router.push(`/blog-details?id=${id}`)
                        }}>
                            {buttonText}
                        </button>
                    </div>}
            </div>
        </div>
    );
};

export default Blogs;
