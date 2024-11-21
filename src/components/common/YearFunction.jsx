import React from 'react'
import { CopyrightIocn } from './Icon'

const YearFunction = () => {

    const year = new Date().getFullYear()
  return (
    <div className='flex gap-4 leading-180 text-base font-Inter font-normal text-white max-md:text-sm items-center'><CopyrightIocn/> {year} coderamrin all right reserved</div>
  )
}

export default YearFunction 