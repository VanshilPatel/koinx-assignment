import React from 'react'
import PerformanceCard from './PerformanceCard'

const Performance = () => {
  return (
    <div className='mt-4 border rounded-md'>
      <span className='font-semibold text-2xl mx-11 mb-4'>Performance</span>
      <PerformanceCard low={46930.22} high={49343.83}/>
      <PerformanceCard low={16930.22} high={49743.83}/>

     


    </div>
  )
}

export default Performance
