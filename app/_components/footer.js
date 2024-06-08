// components/Footer.js

import Image from "next/image";
import { svgs } from "../_constants/assets";

const Footer = () => {
    return (
        <>
            <div className="bg-[#18202A] w-full">


                <div className=" md:flex md:justify-evenly md:w-full text-white pt-20 pb-16  grid grid-cols-1 sm:grid-cols-2 max-md:gap-16   sm:max-md:w-[80%] max-md:m-auto w-[86%] max-sm:m-auto  ">
                    <div className="md:w-[25%] flex flex-col max-sm:w-[50%]">
                        <div className="w-[180px] " >
                            <Image src={svgs.buildersWhite} fill alt="Logo" className="" />
                        </div>

                        <p className="lg:text-[16px] md:text-xs font-normal leading-5 mt-4 sm:max-md:text-[11px]">
                            Hasaaj Developers &Marketing is a preemium real estate consultant and marketing professional platform where we sell and market propertise.
                        </p>

                    </div>

                    <div className="flex flex-col gap-3" >
                        <h3 className=" text-xl font-bold ">
                            Contact Details
                        </h3>
                        <div className="flex gap-5">

                            <div className="w-[16px] h-[20px] ">
                                <Image src={svgs.location} fill alt="Logo" className="" />
                            </div>

                            <p className="lg:text-[16px] md:text-xs font-normal leading-5">

                                Adress: <br></br>
                                392 F-Block, Johar Town, <br></br>
                                Lahore, Pakistan
                            </p>

                        </div>

                        <div className="flex gap-5">

                            <div className="w-[16px] h-[20px] ">
                                <Image src={svgs.phone} fill alt="Logo" className="" />
                            </div>
                            <p className="lg:text-[16px] md:text-xs font-normal leading-5">
                                Phone: <br>
                                </br>
                                +92 117 178194
                            </p>



                        </div>

                        <div className="flex gap-5">

                            <div className="w-[20px] h-[20px] ">
                                <Image src={svgs.emailIcon} fill alt="Logo" className="" />
                            </div>

                            <p className="lg:text-[16px] md:text-xs font-normal leading-5">
                                Email:
                                <br>
                                </br>
                                Example123@gmail.com

                            </p>

                        </div>


                    </div>
                    <div className="flex flex-col gap-5">
                        <h3 className=" text-xl font-bold">
                            About us
                        </h3>

                        <p className="lg:text-[16px] md:text-xs font-normal leading-5">
                            Our Team
                        </p>
                        <p className="lg:text-[16px] md:text-xs font-normal leading-5">
                            Blog
                        </p>
                        <p className="lg:text-[16px] md:text-xs font-normal leading-5">
                            Careers
                        </p>

                    </div>
                    <div className="flex flex-col md:gap-10 gap-10 ">
                        <h3 className=" text-xl font-bold ">
                            Follow us
                        </h3>
                        <div className="flex  md:flex-row gap-5 ">


                            <div className="w-[34px] h-[34px] ">
                                <Image src={svgs.instagram} fill alt="Logo" className="" />
                            </div>

                            <div className="w-[34px] h-[34px] ">
                                <Image src={svgs.facebook} fill alt="Logo" className="" />
                            </div>

                            <div className="w-[34px] h-[34px] ">
                                <Image src={svgs.twitter} fill alt="Logo" className="" />
                            </div>

                        </div>

                    </div>
                </div>
            </div>


        </>
    );
};

export default Footer;
