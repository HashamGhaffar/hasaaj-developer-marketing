import React from 'react'
import Image from 'next/image';
import { svgs } from '../_constants/assets';
import NavBar from '../_components/common/navbar';
import Footer from '../_components/footer';
import Blogs from '../_components/blog-cards/blog-card';
const blogData = {
    imageSrc: svgs.couple,
    title: "Unlocking the Secrets to Finding Your Dream Home: Expert Tips and Insights",
    description: "The journey to finding your dream home can be both exhilarating and overwhelming. Whether you're a first-time buyer or looking to upgrade, the real estate market presents numerous opportunities and challenges.",
    buttonText: "Read More"
};

const blogs = () => {
    return (

        <>
            <div className="w-[88.056%] m-[auto] pt-[37px]">
                <NavBar
                    navImage={svgs.builders}
                    navHamburger={svgs.hamburgerBlack}
                />
            </div>

            <div className='mt-36 mb-36 flex flex-col gap-10'>
                <Blogs
                    imageSrc={blogData.imageSrc}
                    title={blogData.title}
                    description={blogData.description}
                    buttonText={blogData.buttonText}
                />
                <Blogs
                    imageSrc={blogData.imageSrc}
                    title={blogData.title}
                    description={blogData.description}
                    buttonText={blogData.buttonText}
                />
                <Blogs
                    imageSrc={blogData.imageSrc}
                    title={blogData.title}
                    description={blogData.description}
                    buttonText={blogData.buttonText}
                />
            </div>



            <Footer />


        </>
    )
}

export default blogs
