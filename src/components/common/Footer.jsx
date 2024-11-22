import React from 'react'
import YearFunction from './YearFunction'
import { BallIcon, FaceBookIcon, TwitterIcon } from './Icon'

const Footer = () => {
   
  return (
    <div className='bg-tealish-blue py-10  max-xl:py-5 max-sm:py-4 -mt-0.5'>
            <div className='max-w-[1140px] mx-auto flex justify-between items-center max-sm:flex-col-reverse max-xl:px-4 max-md:gap-3 gap-5 '>
                <div >
                <YearFunction/>
                </div>
                <div  className='flex gap-3 justify-center items-center'>
                    <div className='hover:scale-150 transition-all duration-300'>
                    <a  href="https://www.facebook.com/login/">
                    <FaceBookIcon/>
                    </a>
                    </div>
                    <div className='hover:scale-150 transition-all duration-300'>
                    <a href="https://x.com/i/flow/login?lang=en&mx=2">
                    <TwitterIcon/>
                    </a>
                    </div>
                    <div  className='hover:scale-150 transition-all duration-300'>
                    <a href="https://x.com/i/flow/login?lang=en&mx=2">
                    <BallIcon/>
                    </a>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Footer
