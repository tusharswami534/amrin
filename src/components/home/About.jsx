import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
import CommonHeading from '../common/CommonHeading'
import AboutImage from '../../assets/image/webp/about-img.webp'

const About = () => {
        useEffect(() => {
          AOS.init({
            duration: 1000,  
            delay: 100,
            once: true,
          });
        }, []);
  return (
    <div className='bg-tealish-blue py-24 max-lg:py-26 max-md:py-12 -mt-0.5'>
        <div className='max-w-[1140px] max-xl:px-4 mx-auto '>
            <div className='flex flex-wrap max-lg:gap-10'>
                <div data-aos="fade-up-right" className='w-7/12 max-lg:w-full'>
                    <CommonHeading Heading="About Me"></CommonHeading>
                    <p className='leading-225 font-norma text-base max-md:text-sm font-Poppins pt-14 max-lg:pt-10 max-md:pt-8 max-sm:pt-5 mt-0.5 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique enim ac felis cursus, ut cursus ligula cursus. Duis varius nisi ut nisl hendrerit, eget venenatis nisi luctus. Nunc viverra tempus eleifend. Sed posuere augue non nulla consectetur hendrerit. In molestie urna in viverra pulvinar. Aenean facilisis id massa pretium lobortis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique enim ac felis cursus, ut cursus ligula cursus. Duis varius nisi ut nisl hendrerit, eget venenatis nisi luctus. Nunc</p>
                    <p className='leading-180 font-bold text-lg max-sm:text-base font-Poppins pt-8 text-white'>Technologies I’ve worked with:</p>
                    <div className='flex pt-3 gap-8'>
                        <div className='flex flex-col gap-2'>
                            <p className='leading-180 font-normal text-base font-Poppins text-white max-md:text-sm'>Html</p>
                            <p className='leading-180 font-normal text-base font-Poppins text-white max-md:text-sm'>CSS</p>
                            <p className='leading-180 font-normal text-base font-Poppins text-white max-md:text-sm'>JavaScript</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='leading-180 font-normal text-base font-Poppins text-white max-md:text-sm'>React.js</p>
                            <p className='leading-180 font-normal text-base font-Poppins text-white max-md:text-sm'>Bootstrap, Scss</p>
                            <p className='leading-180 font-normal text-base font-Poppins text-white max-md:text-sm'>Node.js, Express</p>
                            <p className='leading-180 font-normal text-base font-Poppins text-white max-md:text-sm'>MongoDB</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-down-left" className='w-5/12 max-lg:w-full justify-center items-center flex'>
                    <img className='lg:max-w-[363px] max-w-[600px] pointer-events-none w-full' src={AboutImage} alt="aboutImage" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
