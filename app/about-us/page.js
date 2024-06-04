import Head from 'next/head';
import Image from 'next/image';
import { pngs, svgs } from '../_constants/assets';
import NavBar from '../_components/common/navbar';
import Footer from '../_components/footer';

const About = () => {
    return (
        <>
            <div className="w-[88.056%] m-[auto] pt-[37px]">
                <NavBar
                    navImage={svgs.builders}
                    navHamburger={svgs.hamburgerBlack}
                />
            </div>

            <div className="md:w-[90%] md:m-auto pt-40">
                <div className="flex max-md:flex-col-reverse">
                    <div className="md:w-[50%] md:pt-3 max-md:w-[80%] max-md:m-auto">
                        <h2 className="text-5xl font-bold mb-2">About Us</h2>
                        <h4 className="text-3xl mb-2 font-medium text-[#909090]">Who We Are?</h4>
                        <p className="md:text-[23px] md:pt-3 md:w-[90%] md:leading-7">
                            Titanium Agency & Homes is a premium real estate consultant and marketing professionals platform where we sell and market properties. We are a team of hard-working and dedicated individuals who are constantly aiming to bring the best opportunities and deals for our members.
                        </p>
                        <p className="md:text-[23px] pt-4 md:w-[95%] md:leading-7">
                            We bring the best offers and news from the top projects for you to keep up with all the good things happening around so you stay ahead of everyone else. So, if a great opportunity arises we will make sure you will be the first ones to get benefits from that.
                        </p>
                    </div>
                    <div className="md:w-[52%] md:max-lg:mt-[160px] max-md:w-[80%] max-md:m-auto relative">
                        <Image src={pngs.AboutUs_img} className="" fill alt="Logo" />
                    </div>
                </div>
                <div className="max-md:w-3/6 m-auto max-md:pb-10 mt-6 mb-16">
                    <button className="md:max-lg:w-1/4 border border-black p-3 rounded-lg font-extrabold max-md:w-full">
                        Read More
                    </button>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default About;
