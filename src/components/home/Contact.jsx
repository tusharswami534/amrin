import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
import CommonHeading from '../common/CommonHeading'

const Contact = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          
        });
      }, []);
  return (
    <div className='bg-tealish-blue py-24 max-lg:py-26 max-md:py-12 overflow-hidden'>
        <div className='max-w-[1140px] mx-auto justify-center items-center flex flex-col max-xl:px-4'>
            <div data-aos="zoom-out-down">
            <CommonHeading  Heading="Contact Me"></CommonHeading>
            </div>
            <p data-aos="zoom-out-left" className='font-Poppins text-base leading-225 max-w-[568px] text-center text-white mx-auto mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique enim ac felis cursus, ut cursus ligula cursus. Duis varius nisi ut nisl hendrerit, eget venenatis nisi luctus. Nunc</p>
            <div  data-aos="fade-right" className='pt-10 max-lg:pt-8 max-md:pt-5'>
                <div className='flex gap-4 items-center'>
                    <p className='font-bold font-Inter text-base leading-180 text-white'>Email: </p>
                    <a className='text-white text-base leading-180 font-Inter font-normal' href="mailto:coderamrin@gmail.com">coderamrin@gmail.com</a>
                </div>
                <div  data-aos="fade-right" className='flex gap-4 items-center mt-3'>
                    <p className='font-bold font-Inter text-base leading-180 text-white'>Phone:</p>
                    <a className='text-white text-base leading-180 font-Inter font-normal' href="tel:222-3342-2482">222-3342-2482</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
