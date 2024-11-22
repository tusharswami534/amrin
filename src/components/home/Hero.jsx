import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
import CommonButton from '../common/CommonButton'
import HeroImage from '../../assets/image/webp/hero-img.webp'


const Hero = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Set default animation duration
          
        });
      }, []);
  return (
    <div className='bg-black-pearl -mt-0.5 overflow-hidden'>
        <div className='max-w-[1140px] max-xl:px-4 max-xl:py-5 mx-auto'>
            <div className='flex max-lg:gap-10 flex-wrap pt-20 max-lg:pt-16 max-md:pt-12 max-sm:pt-10 pb-[140px] max-lg:pb-28 max-md:pb-20 max-sm:pb-16'>
                <div  className='w-1/2 max-lg:w-full'>
                    <p data-aos="fade-right"  data-aos-duration="300" className='font-Pacifico !leading-120 text-7xl text-white max-lg:text-6xl max-md:text-5xl max-sm:text-4xl'>
                    Hi,
                    </p>
                    <p data-aos="fade-right"  data-aos-duration="500" className='font-Pacifico !leading-120 text-7xl text-white max-lg:text-6xl max-md:text-5xl max-sm:text-4xl'>
                    <span className='block'> I am <span className='text-soft-blue'>A</span>mrin, </span>
                    </p>
                    <p data-aos="fade-right"  data-aos-duration="700" className='font-Pacifico !leading-120 text-7xl text-white max-lg:text-6xl max-md:text-5xl max-sm:text-4xl'>
                    Web developer
                    </p>
                    <p data-aos="fade-right"  data-aos-duration="900" className='font-Poppins text-[#CCCCCC] leading-150 text-base font-normal pt-10 max-lg:pt-8 max-md:pt-5'>Frontend Developer, Profficienct in React & Node</p>
                    <div data-aos="fade-right"  data-aos-duration="1100" className='mt-4'>
                    <CommonButton  HeroBtn="See Projects"></CommonButton>
                    </div>
                </div>
                <div className='w-1/2 max-lg:w-full '>
                    <img data-aos="fade-left" className='w-full lg:max-w-[498px] pointer-events-none' src={HeroImage} alt="HeroSectionImage" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
