// components/Footer.js

import Image from "next/image";
import { svgs } from "../_constants/assets";

const Footer = () => {
    return (
        <div className="bg-[#18202A] text-white pt-10">
            <div className="flex md:flex-row md:justify-between md:w-[90%] md:items-start sm:m-auto sm:flex-col sm:gap-y-4 sm:w-[90%] sm:items-center sm:justify-between flex-col">
                <div className="lg:w-1/4 md:w-1/5 w-full">
                    <div className=" md:w-[180px] w-[60%] max-md:m-auto">
                        <Image src={svgs.buildersWhite} fill alt="fotterlogo" className="xl:w-[180px] xl:h-20 lg:w-[100px] h-20 md:m-0 sm:m-auto sm:w-[140px] w-[80px] m-auto z-30 " />
                    </div>
                    <p className="lg:leading-4 lg:mt-4 sm:text-[15px] md:text-xs md:p-0 pt-2.5 text-[12px] mt-8 max-sm:w-[90%] max-sm:m-auto pb-12">
                        Hasaaj Developers & Marketing is a premium real estate consultant and marketing professional platform where we sell and market properties.
                    </p>
                    <hr className="max-md:block hidden" />
                </div>
                <div className="flex flex-col gap-y-4 md:text-sm sm:max-md:flex-row md:mt-0 md:mb-0 sm:text-[13px] sm:gap-x-[18px] sm:mt-6 sm:mb-6 max-sm:w-[40%] max-sm:m-auto">
                    <h3 className="lg:text-xl md:font-bold font-extrabold">Contact Details</h3>
                    <div className="flex flex-row md:items-start md:gap-x-4 items-baseline gap-x-2.5">

                        <div className=" ">
                            <Image src={svgs.adress} className=" !w-[12px] md:!w-[16px]" fill alt="Logo" />
                        </div>

                        <address className="max-sm:text-[10px]">
                            Address: <br />
                            392 F-Block, Johar Town, <br />
                            Lahore, Pakistan
                        </address>
                    </div>
                    <div className="flex md:flex-row md:items-start md:gap-x-4 items-baseline gap-x-2">


                        <div className="md:w-[20px] sm:w-[10px] w-[8px]">
                            <Image src={svgs.telIcon} className=" !w-[12px] md:!w-[16px]" fill alt="Logo" />
                        </div>
                        <p className="max-sm:text-[10px]">
                            Phone: <br />
                            +92 117 1781942
                        </p>
                    </div>
                    <div className="flex md:flew-row md:items-start md:gap-x-4 items-baseline gap-x-2.5">

                        <div className="">
                            <Image src={svgs.emailIcon} className=" !w-[12px] md:!w-[24px]" fill alt="Logo" />
                        </div>
                        <p className="max-sm:text-[10px]">
                            Email: <br />
                            Example123@gmail.com
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:gap-y-4 md:text-md max-md:w-full max-md:gap-y-4">
                    <hr className="max-md:block hidden" />
                    <h3 className="lg:font-bold lg:text-xl md:w-full md:m-0 sm:max-md:w-1/5 max-md:m-auto max-md:font-extrabold w-1/4 max-sm:pt-12">About Us</h3>
                    <div className="flex md:flex-col md:gap-y-4 md:text-md max-md:justify-around max-md:w-[90%] m-auto max-md:pb-6">
                        <a href="#" target="_blank">Our Team</a>
                        <a href="#" target="_blank">Blog</a>
                        <a href="#" target="_blank">Careers</a>
                    </div>
                    <hr className="max-md:block hidden" />
                </div>
                <div className="lg:flex lg:flex-col lg:gap-y-4 max-md:w-full">
                    <h3 className="md:text-xl md:font-bold font-extrabold max-md:w-1/5 max-md:m-auto max-sm:w-1/4 max-md:pb-8 max-md:pt-8">Follow Us</h3>
                    <div className="flex md:flex-row md:gap-x-4 md:mt-4 max-md:justify-around max-md:pb-8">
                        <a href="#" target="_blank">

                            <div className="lg:w-[34px] md:w-[28px] cursor-pointer">
                                <Image src={svgs.instagram} className="" fill alt="Logo" />
                            </div>
                        </a>
                        <a href="#" target="_blank">

                            <div className="lg:w-[34px] md:w-[28px] cursor-pointer">
                                <Image src={svgs.facebook} className="" fill alt="Logo" />
                            </div>
                        </a>
                        <a href="#" target="_blank">


                            <div className="lg:w-[34px] md:w-[28px] cursor-pointer">
                                <Image src={svgs.twitter} className="" fill alt="Logo" />
                            </div>
                        </a>
                    </div>
                    <hr className="max-md:block hidden" />
                </div>
            </div>
            <p className="text-center pt-16 pb-8 cursor-pointer">© All Rights Reserved.</p>
        </div>
    );
};

export default Footer;
