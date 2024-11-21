import React from 'react'

const CommonButton = ({HeroBtn , ProjectsButton}) => {
  return (
    <div>
        <button className='py-[19.5px] max-lg:py-3 max-lg:px-10 px-[51px] leading-120 font-bold text-white text-lg max-md:text-base font-Inter bg-soft-blue hover:border-soft-blue hover:bg-white hover:text-soft-blue transition-all duration-300 border-transparent border border-solid rounded-[5px] mt-5 max-lg:mt-3 max-sm:mt-2.5'>{HeroBtn}</button>
    </div>
  )
}

export default CommonButton
