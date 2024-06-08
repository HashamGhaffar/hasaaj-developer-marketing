import React from 'react';
import Image from 'next/image';
import { svgs } from '../_constants/assets';
import NavBar from '../_components/common/navbar';
import Footer from '../_components/footer';

const page = () => {
    return (
        <>  
            <div>
                <div className="w-[88.056%] m-[auto] pt-[37px]">
                    <NavBar
                        navImage={svgs.builders}
                        navHamburger={svgs.hamburgerBlack}
                    />
                </div>
                <div className="" >
                    <Image src={svgs.couple2} fill alt="Logo" className=" pt-40 !w-[90%] m-auto" />

                    <h1 className=" md:font-bold md:text-[40px] md:leading-[48px] sm:w-[70%] m-auto text-3xl w-[90%] font-semibold leading-10 mt-7 mb-4">Unlocking the Secrets to Finding Your Dream Home: Expert Tips and Insights</h1>

                    <p className=" sm:w-[70%] w-[80%] m-auto font-normal md:text-xl md:leading-7 pt-2 leading-6 text-base">
                        The journey to finding your dream home can be both exhilarating and overwhelming. Whether you&apos;re a first-time buyer or looking to upgrade, the real estate market presents numerous opportunities and challenges. To help you navigate this complex landscape, we&apos;ve compiled expert tips and insights that will empower you to make informed decisions and turn your dream into reality.
                    </p>
                    <ol className=" sm:w-[70%] w-[80%] m-auto font-normal md:text-xl md:leading-7 pt-2 text-base leading-6">
                        <li className="">
                            Define Your Priorities <br></br>
                            Before diving into property listings, take time to outline your priorities. Ask yourself essential questions:
                            <ul className="list-disc list-inside">
                                <li> What is your budget?</li>
                                <li>Which neighborhoods do you prefer?</li>
                                <li>How many bedrooms and bathrooms do you need?</li>
                                <li>Are there specific amenities you desire (e.g., a backyard, proximity to schools, public transport)?</li>
                                <li> Having a clear vision of your needs and wants will streamline your search and prevent you from feeling overwhelmed by the myriad of options</li>
                            </ul>
                        </li>
                        <li>
                            Get Pre-Approved for a Mortgage
                            <ul className="list-disc list-inside">
                                <li>Understanding your financial standing is crucial. Getting pre-approved for a mortgage not only clarifies your budget but also makes you a more attractive buyer to sellers. It shows that you are serious and financially capable of purchasing a home.</li>
                            </ul>
                        </li>
                        <li>
                            Research the Market
                            <ul className="list-disc list-inside">
                                <li >
                                    Knowledge is power in real estate. Spend time researching the current market conditions in your desired areas. Look at recent sales, price trends, and future developments. This information will help you identify good deals and avoid overpaying.

                                </li>
                            </ul>
                        </li>
                        <li>
                            Work with a Trusted Real Estate Agent
                            <ul className="list-disc list-inside">
                                <li>
                                    A knowledgeable and experienced real estate agent can be your greatest ally. They offer invaluable insights, access to exclusive listings, and expert negotiation skills. Choose an agent who understands your needs and has a proven track record in your preferred areas.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Attend Open Houses and Schedule Showings
                            <ul className="list-disc list-inside">
                                <li>
                                    Seeing properties in person provides a better sense of their value and potential. Attend open houses and schedule private showings to explore different options. Take notes and pictures, and compare them later to narrow down your choices.

                                </li>
                            </ul>
                        </li>
                        <li> Consider the Future
                            <ul className="list-disc list-inside">
                                <li>
                                    Think long-term when choosing your home. Consider how your life might change in the coming years. Will you need more space for a growing family? Is the neighborhood likely to appreciate in value? Ensuring your home meets your future needs will save you from the hassle of moving again soon.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Don&apos;t Skip the Inspection
                            <ul className="list-disc list-inside">
                                <li>
                                    A thorough home inspection is a non-negotiable step. It can reveal potential issues that might not be visible at first glance, such as structural problems, outdated systems, or pest infestations. Use the inspection report to negotiate repairs or price adjustments with the seller.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Trust Your Instincts
                            <ul className="list-disc list-inside">
                                <li>Finally, trust your instincts. While data and expert advice are critical, your feelings about a home are equally important. If a property feels right and meets your criteria, it might be the perfect fit for you and your family.</li>
                                <li>Conclusion</li>
                                <li>
                                    Finding your dream home is a significant milestone, and with the right approach, it can be a rewarding experience. By defining your priorities, securing your finances, conducting thorough research, and leveraging professional help, you can navigate the real estate market with confidence. Remember to think long-term, trust your instincts, and enjoy the journey to your new home.
                                </li>
                            </ul>
                        </li>
                    </ol>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default page;
