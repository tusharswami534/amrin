import React from 'react'
import YearFunction from './YearFunction'
import { BallIcon, FaceBookIcon, TwitterIcon } from './Icon'

const Footer = () => {
   
  return (
    <div className='bg-black-pearl py-10 max-md:py-7 max-sm:py-5 -mt-0.5'>
            <div className='max-w-[1140px] mx-auto flex justify-between items-center max-sm:flex-col-reverse max-xl:px-4 gap-5 '>
                <div >
                <YearFunction/>
                </div>
                <div  className='flex gap-3 justify-center items-center'>
                    <div>
                    <a  className='hover:scale-125 transition-all duration-300' href="https://www.facebook.com/login/">
                    <FaceBookIcon/>
                    </a>
                    </div>
                    <div>
                    <a className='hover:scale-125 transition-all duration-300' href="https://x.com/i/flow/login?lang=en&mx=2">
                    <TwitterIcon/>
                    </a>
                    </div>
                    <div >
                    <a  className='hover:scale-125 transition-all duration-300' href="https://x.com/i/flow/login?lang=en&mx=2">
                    <BallIcon/>
                    </a>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Footer
