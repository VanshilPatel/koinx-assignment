import React from 'react'
import FundamentalTableLeft from './FundamentalTableLeft'
import FundamentalTableRight from './FundamentalTableRight'

const Fundamentals = () => {
  return (
    <div className='mt-6 w-881 mb-10 border rounded-md'>
      <span className='mx-11 text-lg font-semibold '>Fundamentals  (i)</span>
      
      <div className='flex mt-3 mx-11 gap-x-16'>
      <FundamentalTableLeft />
      <FundamentalTableRight/>

    
      </div>

    </div>
  )
}

export default Fundamentals
