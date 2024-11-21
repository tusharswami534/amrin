import React from 'react'

const CommonHeading = ({Heading}) => {
  return (
    <div>
        <p className='font-Poppins leading-150 font-bold text-4xl max-lg:text-3xl max-md:text-2xl inline-block text-white max-sm:text-xl relative after:absolute after:w-[95%] after:h-0.5 after:bg-soft-blue after:-bottom-0.5 after:left-1/2 after:-translate-x-1/2 '>{Heading}</p>
    </div>
  )
}

export default CommonHeading
