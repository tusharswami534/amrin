import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
import CommonHeading from '../common/CommonHeading'
import ProjectImage from '../../assets/image/webp/project-image.webp'
import WorkImage from '../../assets/image/webp/work-image.webp'
import DellImage from '../../assets/image/webp/dell.webp'
import VrHeadSet from '../../assets/image/webp/vr-headset.webp'
import WorkOnLaptop from '../../assets/image/webp/work-on-laptop.webp'
import Meeting from '../../assets/image/webp/meeting.webp'
import HelpImage from '../../assets/image/webp/help-image.webp'
import HandUpImage from '../../assets/image/webp/hand-up.webp'
import CommonButton from '../common/CommonButton'

const Projects = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,  
          delay: 100,
          once: true,
        });
      }, []);
  return (
    <div className='bg-black-pearl py-24 max-lg:py-26 max-md:py-12 overflow-hidden'>
        <div className='max-w-[1140px] max-xl:px-4 mx-auto'>
                <div>
                    <div data-aos="fade-right">
                    <CommonHeading Heading="Projects"></CommonHeading>
                    </div>
                    <p data-aos="fade-right" className='leading-225 text-white font-Poppins text-base mt-0.5 pt-7 max-w-[584px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique enim ac felis cursus, ut cursus ligula cursus. Duis varius nisi ut nisl hendrerit, eget venenatis nisi luctus. Nunc</p>
                </div>
            <div className='flex flex-wrap pt-16 -mt-1'>
                <div className='w-3/12 max-lg:w-4/12 max-md:w-6/12'>
                    <img data-aos="flip-left" data-aos-duration="200" src={ProjectImage} alt="ProjectImage" className='w-full' />
                </div>
                <div className='w-3/12 max-lg:w-4/12 max-md:w-6/12'>
                    <img data-aos="flip-left" data-aos-duration="400" src={WorkImage} alt="ProjectImage" className='w-full' />
                </div>
                <div className='w-3/12 max-lg:w-4/12 max-md:w-6/12'>
                    <img data-aos="flip-left" data-aos-duration="600" src={DellImage} alt="ProjectImage" className='w-full' />
                </div>
                <div className='w-3/12 max-lg:w-4/12 max-md:w-6/12'>
                    <img data-aos="flip-left" data-aos-duration="800" src={VrHeadSet} alt="ProjectImage" className='w-full' />
                </div>
                <div className='w-3/12 max-lg:w-4/12 max-md:w-6/12'>
                    <img data-aos="flip-left" data-aos-duration="1000" src={WorkOnLaptop} alt="ProjectImage" className='w-full' />
                </div>
                <div className='w-3/12 max-lg:w-4/12 max-md:w-6/12'>
                    <img data-aos="flip-left" data-aos-duration="1200" src={Meeting} alt="ProjectImage" className='w-full' />
                </div>
                <div className='w-3/12 max-lg:w-4/12 max-md:w-6/12'>
                    <img data-aos="flip-left" data-aos-duration="1400" src={HelpImage} alt="ProjectImage" className='w-full' />
                </div>
                <div className='w-3/12 max-lg:w-4/12 max-md:w-6/12'>
                    <img data-aos="flip-left" data-aos-duration="1600" src={HandUpImage} alt="ProjectImage" className='w-full' />
                </div>
            </div>
            <div data-aos="fade-right" className='mt-7'>
                <CommonButton HeroBtn="More Projects"></CommonButton>
            </div>
        </div>
    </div>
  )
}

export default Projects
