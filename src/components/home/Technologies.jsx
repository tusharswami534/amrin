import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
import CommonHeading from '../common/CommonHeading'
import HTML from '../../assets/image/webp/html.webp'
import CSS from '../../assets/image/webp/css.webp'
import JS from '../../assets/image/webp/js.webp'
import ReactIcon from '../../assets/image/webp/react.webp'
import SASS from '../../assets/image/webp/sass.webp'
import BoostsrapIcon from '../../assets/image/webp/bootstrap.webp'
import NodeJS from '../../assets/image/webp/node-js.webp'
import MongoDB from '../../assets/image/webp/mongodb.png'

const Technologies = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Set default animation duration
          
        });
      }, []);
  return (
    <div className='bg-tealish-blue  py-24 max-lg:py-26 max-md:py-12 overflow-hidden'>
            <div className='max-w-[1140px] max-xl:px-5 max-md:px-4 mx-auto'>
                <div data-aos="fade-right">
                <CommonHeading Heading="Technologies"></CommonHeading>
                </div>
                <p className='leading-180 font-bold text-lg max-sm:text-base font-Poppins pt-8 text-white'>Technologies I’ve worked with:</p>
                <div className='flex flex-wrap gap-5 mt-10'>
                    <div data-aos="zoom-in"  data-aos-duration="200" className='w-[15%] max-lg:w-3/12 border border-white rounded-md py-8  max-md:w-4/12 max-sm:w-6/12 justify-center flex flex-col items-center'>
                        <img className='max-w-[100px] max-sm:max-w-[110px] pointer-events-none' src={HTML} alt="HTMLImage" />
                        <p className='text-center font-Poppins text-2xl font-bold text-white pt-5'>HTML</p>
                    </div>
                    <div data-aos="zoom-in"  data-aos-duration="400" className='w-[15%] max-lg:w-3/12 border border-white rounded-md py-8  max-md:w-4/12 max-sm:w-6/12 justify-center flex flex-col items-center'>
                        <img className='max-w-[100px] max-sm:max-w-[110px] pointer-events-none' src={CSS} alt="HTMLImage" />
                        <p className='text-center font-Poppins text-2xl font-bold text-white pt-5'>CSS</p>
                    </div>
                    <div data-aos="zoom-in"  data-aos-duration="600" className='w-[15%] max-lg:w-3/12 border border-white rounded-md py-8  max-md:w-4/12 max-sm:w-6/12 justify-center flex flex-col items-center'>
                        <img className='max-w-[100px] max-sm:max-w-[110px] pointer-events-none' src={JS} alt="HTMLImage" />
                        <p className='text-center font-Poppins text-2xl font-bold text-white pt-5'>JS</p>
                    </div>
                    <div data-aos="zoom-in"  data-aos-duration="800" className='w-[15%] max-lg:w-3/12 border border-white rounded-md py-8  max-md:w-4/12 max-sm:w-6/12 justify-center flex flex-col items-center'>
                        <img className='max-w-[100px] max-sm:max-w-[110px] pointer-events-none' src={ReactIcon} alt="HTMLImage" />
                        <p className='text-center font-Poppins text-2xl font-bold text-white pt-5'>React</p>
                    </div>
                    <div data-aos="zoom-in"  data-aos-duration="1000" className='w-[15%] max-lg:w-3/12 border border-white rounded-md py-8  max-md:w-4/12 max-sm:w-6/12 justify-between flex flex-col items-center'>
                        <img className='max-w-[100px] max-sm:max-w-[110px] pointer-events-none' src={BoostsrapIcon} alt="HTMLImage" />
                        <p className='text-center font-Poppins text-2xl font-bold text-white pt-5'>Boostsrap</p>
                    </div>
                    <div data-aos="zoom-in"  data-aos-duration="1200" className='w-[15%] max-lg:w-3/12 border border-white rounded-md py-8  max-md:w-4/12 max-sm:w-6/12 justify-center flex flex-col items-center'>
                        <img className='max-w-[100px] max-sm:max-w-[110px] pointer-events-none' src={SASS} alt="HTMLImage" />
                        <p className='text-center font-Poppins text-2xl font-bold text-white pt-5'>SASS</p>
                    </div>
                    <div data-aos="zoom-in"  data-aos-duration="1400" className='w-[15%] max-lg:w-3/12 border border-white rounded-md py-8  max-md:w-4/12 max-sm:w-6/12 justify-center flex flex-col items-center'>
                        <img className='max-w-[100px] max-sm:max-w-[110px] pointer-events-none' src={NodeJS} alt="HTMLImage" />
                        <p className='text-center font-Poppins text-2xl font-bold text-white pt-5'>Node JS </p>
                    </div>
                    <div data-aos="zoom-in"  data-aos-duration="1600" className='w-[15%] max-lg:w-3/12 border border-white rounded-md py-8  max-md:w-4/12 max-sm:w-6/12 justify-center flex flex-col items-center'>
                        <img className='max-w-[100px] max-sm:max-w-[110px] pointer-events-none' src={MongoDB} alt="HTMLImage" />
                        <p className='text-center font-Poppins text-2xl font-bold text-white pt-5'>MongoDB</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Technologies
