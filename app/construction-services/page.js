import React from 'react'
import Image from 'next/image';
import { pngs, svgs } from '../_constants/assets';
import NavBar from '../_components/common/navbar';
import Footer from '../_components/footer';
import ServicesCard from '../_components/services-card/services-card';
import bgResidential from '../../public/png/bgResidential.png';
import commercial from '../../public/png/bgCommercial.png';
import infrastructure from '../../public/png/bgInfrastructure.png';
import tools from '../../public/png/bgTools.png';
import renovation from '../../public/png/bgRenovation.png';
import sixthCard from '../../public/png/bgSixthCard.png';


const ConstructionServices = () => {

  const servicesCardData = [
    {
      backgroundImage: bgResidential,
      icon: svgs.residentBuilding,
      title: 'Residential Construction:',
      description: 'Whether you\'re building your dream home from the ground up or renovating an existing property, our experienced team will work with you every step of the way. We provide custom solutions to bring your vision to life, ensuring that every detail aligns with your preferences and lifestyle.'
    },
    {
      backgroundImage: commercial,
      icon: svgs.commercial,
      title: 'Commercial Construction: ',
      description: ' We understand the complexities involved in commercial construction projects. Our team is equipped to handle everything from office buildings to retail spaces, delivering functional and aesthetically pleasing environments that meet your business needs.'
    },
    {
      backgroundImage: infrastructure,
      icon: svgs.infrastructure,
      title: ' Infrastructure Development:',
      description: 'Our expertise extends to infrastructure projects, including roads, bridges, and public facilities. We employ cutting-edge techniques and materials to ensure durability and sustainability in all our developments. '
    },
    {
      backgroundImage: tools,
      icon: svgs.tools,
      title: ' Project Management:',
      description: 'Effective project management is crucial for the successful completion of any construction project. Our dedicated project managers oversee all aspects of the construction process, from planning and budgeting to execution and quality control, ensuring that your project is completed...'
    },

    {
      backgroundImage: renovation,
      icon: svgs.renovation,
      title: 'Renovation and Remodeling:',
      description: " Transform your existing spaces with our renovation and remodeling services. Whether it's updating a kitchen, adding an extension, or overhauling an entire building, we bring creativity and expertise to enhance your property's functionality and value. "
    },
    {
      backgroundImage: sixthCard,
      icon: svgs.sixthCard,
      title: 'Green Building Solutions:',
      description: 'We are committed to sustainable construction practices. Our green building solutions incorporate energy-efficient materials and technologies to minimize environmental impact while maximizing comfort and cost savings for our clients.'
    },
  ]
  return (
    <> <div>

      <div className="w-[88.056%] m-[auto] pt-[37px]">
        <NavBar
          navImage={svgs.builders}
          navHamburger={svgs.hamburgerBlack}
        />

      </div>



      <div className="md:mt-48 lg:w-[90%] m-auto mb-16 md:w-[75%] sm:w-[90%]  mt-20 2xl:w-3/4 ">
        <div className=' max-sm:w-[90%] m-auto'>

          <div className='w-3/6'>
            <h1 className="md:text-[40px] font-bold md:leading-6 text-3xl">
              Construction Services
            </h1>
          </div>
          <p className=" md:text-xl md:leading-6 font-normal mt-3 mb-16 text-[14px] leading-5">
            At Hassaj Developers and Marketing, we specialize in delivering top-notch construction services tailored to meet the unique needs of our clients. Our commitment to excellence, attention to detail, and use of the latest construction technologies ensure that every project is completed to the highest standards.
          </p>
        </div>

        <div className=' grid lg:grid-cols-3 gap-14 sm:grid-cols-2 grid-cols-1 '>
          {servicesCardData.map((items, index) => {
            return <ServicesCard
              backgroundImage={items.backgroundImage}
              icon={items.icon}
              title={items.title}
              description={items.description}
              key={index}
            />
          })}



        </div>



      </div>

      <div className=''>
        <Footer />
      </div>
    </div>
    </>
  )
}

export default ConstructionServices;
