import React from 'react';
import Image from 'next/image';

const Blogs = ({ imageSrc, title, description, buttonText }) => {
    return (
        <div className="md:flex  md:w-[75%] md:gap-4 m-auto items-start md:flex-row flex-col">
            <div className="md:w-4/5  md:mb-14 mb-4 md:h-[250px] w-full flex justify-center " >
                <Image src={imageSrc} fill alt="Logo" className=" md:pl-12  md:h[240px]  max-md:!w-[80%]" />
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
                        <button className="border border-black md:p-2 md:w-[100px] rounded-lg md:mt-2 mt-4 w-full ">
                            {buttonText}
                        </button>
                    </div>}
            </div>
        </div>
    );
};

export default Blogs;
