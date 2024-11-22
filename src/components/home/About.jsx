import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
import CommonHeading from '../common/CommonHeading'
import AboutImage from '../../assets/image/webp/coding.webp'

const About = () => {
        useEffect(() => {
          AOS.init({
            duration: 1000,  
            delay: 100,
            once: true,
          });
        }, []);
  return (
    <div id='about' className='bg-tealish-blue py-24 max-lg:py-26 max-xl:py-5 overflow-hidden max-md:py-12 -mt-0.5'>
        <div className='max-w-[1140px] max-xl:px-4 mx-auto '>
            <div className='flex flex-wrap max-lg:gap-10'>
                <div className='w-7/12 max-lg:w-full'>
                    <div data-aos="fade-right"  data-aos-duration="300">
                    <CommonHeading Heading="About Me"></CommonHeading>
                    </div>
                    <p data-aos="fade-right"  data-aos-duration="700" className='leading-225 font-norma text-base max-md:text-sm font-Poppins pt-14 max-lg:pt-10 max-md:pt-8 max-sm:pt-5 mt-0.5 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique enim ac felis cursus, ut cursus ligula cursus. Duis varius nisi ut nisl hendrerit, eget venenatis nisi luctus. Nunc viverra tempus eleifend. Sed posuere augue non nulla consectetur hendrerit. In molestie urna in viverra pulvinar. Aenean facilisis id massa pretium lobortis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique enim ac felis cursus, ut cursus ligula cursus. Duis varius nisi ut nisl hendrerit, eget venenatis nisi luctus. Nunc</p>
                   
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
