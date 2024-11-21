import React from 'react'

const CommonButton = ({HeroBtn}) => {
  return (
    <div>
        <button className='py-[19.5px] px-[51px] leading-120 font-bold text-white text-lg max-md:text-base font-Inter bg-soft-blue rounded-md mt-5 max-lg:mt-3 max-sm:mt-2.5'>{HeroBtn}</button>
    </div>
  )
}

export default CommonButton
