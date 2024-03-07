import React from 'react'
import FundamentalTableLeft from './FundamentalTableLeft'
import FundamentalTableRight from './FundamentalTableRight'
import i from "../assets/i.svg"

const Fundamentals = () => {
  return (
    <div className='mt-6 w-881 mb-10'>
        <div className='flex'>
        <span className='ml-11 text-lg font-semibold '>Fundamentals </span>
        <img src={i} className='ml-2'></img>
        </div>
     
      
      <div className='flex mt-3 mx-11 gap-x-16'>
      <FundamentalTableLeft />
      <FundamentalTableRight/>

    
      </div>

    </div>
  )
}

export default Fundamentals
