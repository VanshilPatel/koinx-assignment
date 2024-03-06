import React from 'react'


const PerformanceCard = ({low,high}) => {
  return (
    <div className='flex mx-11 mt-3 gap-x-3'>
      <div className='flex flex-col'>
        <span className='text-gray-500 text-xs font-medium my-1'>Today's Low</span>
        <span  className='text-gray-500 text-xs font-medium my-1'>{low}</span>
      </div>
      <svg width="599" height="46" viewBox="0 0 599 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="20.9819" width="582.8" height="4.63" rx="2.315" fill="#121212" fill-opacity="0.3"/>
<rect x="8" y="20.9819" width="582.8" height="4.63" rx="2.315" fill="url(#paint0_linear_1_633)"/>
<defs>
<linearGradient id="paint0_linear_1_633" x1="8" y1="20.9819" x2="591" y2="20.9819" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF4949"/>
<stop offset="0.153341" stop-color="#FF4E11"/>
<stop offset="0.304385" stop-color="#FC870A"/>
<stop offset="0.48668" stop-color="#FFAF11"/>
<stop offset="0.627308" stop-color="#C2CB21"/>
<stop offset="1" stop-color="#11EB68"/>
</linearGradient>
</defs>
</svg>

      <div className='flex flex-col'>
        <span  className='text-gray-500 text-xs font-medium my-1'>Today's High</span>
        <span  className='text-gray-500 text-xs font-medium my-1'>{high}</span>
      </div>


      
    </div>
  )
}

export default PerformanceCard
